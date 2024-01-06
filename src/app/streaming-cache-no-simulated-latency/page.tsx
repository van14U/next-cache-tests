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
    <div>Why is the value not revalidating:</div>
    <Suspense fallback={'loading'}>
      <CachedDate />
    </Suspense>
  </div>
}