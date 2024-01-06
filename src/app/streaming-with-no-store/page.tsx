import { unstable_cache, unstable_noStore } from "next/cache";
import { Suspense } from "react";
import { waitFor } from "../_queries/cached";

const CACHE_DATE_KEY = "cached-date-no-store";

export const runtime = "edge";

const cachedDate = unstable_cache(async () => {
  await waitFor(1000);
  return new Date().toISOString();
},
  [CACHE_DATE_KEY],
  {
    tags: [CACHE_DATE_KEY],
    revalidate: 10,
  }
)

async function CachedDate() {
  unstable_noStore();
  const date = await cachedDate();
  return <div>
    Cached value 10 sec: {new Date(date).toLocaleString("en-US", {
      timeZone: "America/New_York",
    })}
  </div>
}

export default function Bugged() {
  const now = new Date();
  return <div>
    Time: {now.toLocaleString("en-US", {
      timeZone: "America/New_York",
    })}
    <div>Bugged value:</div>
    <Suspense fallback={'loading'}>
      <CachedDate />
    </Suspense>
  </div>
}
