import { Suspense } from "react";
import {
  CachedDateWithLatency,
} from "../_queries/cached";

export const runtime = "edge";

export default function Patched() {
  const now = new Date();
  return <div>
    Time: {now.toLocaleString("en-US", {
      timeZone: "America/New_York",
    })}
    <div>Why is the value not revalidating (when reloading):</div>
    <Suspense fallback={'loading'}>
      <CachedDateWithLatency />
    </Suspense>
  </div>
}
