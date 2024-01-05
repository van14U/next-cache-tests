import { CachedResults, RevalidateButton } from "@/components"
import { getCachedTime20secReval } from "../_queries/cached"

export const runtime = "edge";

export default async function Reval20sec() {
  return <main className="mx-auto h-screen min-h-screen w-full max-w-5xl font-mono">
    <h1 className="pt-8 text-xl font-semibold">20 secs revalidation</h1>
    <CachedResults fn={getCachedTime20secReval} revalidate={20} />
    <RevalidateButton tagKey="tag:time:20sec" />
  </main>
}
