import { CachedResults, RevalidateButton } from "@/components"
import { getCachedTimeNoReval } from "../_queries/cached"

export const runtime = "edge";

export default async function NoRevalidation() {
  return <main className="mx-auto h-screen min-h-screen w-full max-w-5xl font-mono">
    <h1 className="pt-8 text-xl font-semibold">undefined revalidation</h1>
    <CachedResults fn={getCachedTimeNoReval} />
    <RevalidateButton tagKey="tag:time:undefined" />
  </main>
}
