import { Suspense } from "react";
import {
  CachedDateWithLatency,
  ForceCacheRevalidation
} from "../_queries/cached";

export const runtime = "edge";

export default function Patched() {
  const now = new Date();
  return <div>
    Time: {now.toLocaleString("en-US", {
      timeZone: "America/New_York",
    })}
    <div>cached value + patch + 200ms latency:</div>
    <ForceCacheRevalidation />
    <Suspense fallback={'loading'}>
      <CachedDateWithLatency />
    </Suspense>
  </div>
}
