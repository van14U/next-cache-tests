import { Suspense } from "react";
import {
  CachedDate,
} from "../_queries/cached";

export const runtime = "edge";

export default function Patched() {
  const now = new Date();
  return <div>
    Time: {now.toLocaleString("en-US", {
      timeZone: "America/New_York",
    })}
    <div>Without simulated latency the value revalidates when reloading page:</div>
    <Suspense fallback={'loading'}>
      <CachedDate />
    </Suspense>
  </div>
}
