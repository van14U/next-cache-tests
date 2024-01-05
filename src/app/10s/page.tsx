import { CachedResults, RevalidateButton } from "@/components"
import { getCachedTime10secReval } from "../_queries/cached"

export const runtime = "edge";

export default async function Reval10sec() {
  return <main className="mx-auto h-screen min-h-screen w-full max-w-5xl font-mono">
    <h1 className="pt-8 text-xl font-semibold">10 secs revalidation</h1>
    <CachedResults fn={getCachedTime10secReval} revalidate={10} />
    <RevalidateButton tagKey="tag:time:10sec" />
  </main>
}
