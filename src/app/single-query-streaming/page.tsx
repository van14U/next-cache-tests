import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import { waitFor } from "../_queries/cached";

const CACHE_DATE_KEY = "cached-date";

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

const cacheReader = unstable_cache(() => Promise.resolve(0),)

async function ForceCacheRevalidation() {
  await cacheReader();
  return null
}

async function CachedDate() {
  const date = await cachedDate();
  return <div>
    Cached value 10 sec: {new Date(date).toLocaleString("en-US", {
      timeZone: "America/New_York",
    })}
  </div>
}

export default async function Bugged() {
  const now = new Date();
  return <div>
    Time: {now.toLocaleString("en-US", {
      timeZone: "America/New_York",
    })}
    <div>Bugged value:</div>
    <ForceCacheRevalidation />
    <Suspense fallback={'loading'}>
      <CachedDate />
    </Suspense>
  </div>
}
