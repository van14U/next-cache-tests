import { CachedResults, Chip, RevalidateButton } from "@/components";
import {
  getCachedTime10secReval,
  getCachedTime20secReval,
  getCachedTimeNoReval,
  keys
} from "../_queries/cached";

export const runtime = "edge";

export default function All() {
  const now = new Date();
  return (
    <main className="mx-auto h-screen min-h-screen w-full max-w-5xl font-mono">
      <h1 className="pt-8 text-xl font-semibold">Cache tests without streaming</h1>
      <p>
        Current time:{" "}
        {`EST ${now.toLocaleString("en-US", {
          timeZone: "America/New_York",
        })}`}
      </p>
      <h2 className="mt-4 text-lg font-semibold">
        Latency for key <Chip text={keys.NoReval} />
      </h2>
      <CachedResults fn={getCachedTimeNoReval} />
      <h2 className="mt-4 text-lg font-semibold">
        Latency for key <Chip text={keys.Reval10Sec} />
      </h2>
      <CachedResults fn={getCachedTime10secReval} revalidate={10} />
      <h2 className="mt-4 text-lg font-semibold">
        Latency for key <Chip text={keys.Reval20SecWithLatency} />
      </h2>
      <CachedResults
        fn={getCachedTime20secReval}
        revalidate={20}
      />
      <h2 className="mt-4 text-lg font-semibold">Revalidation</h2>
      <div className="flex gap-4">
        {Object.values(keys).map((key) => (
          <RevalidateButton key={key} tagKey={key} />
        ))}
      </div>
    </main>
  );
}

