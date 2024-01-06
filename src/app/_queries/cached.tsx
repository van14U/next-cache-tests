import { unstable_cache } from "next/cache";

export const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

const CACHE_DATE_KEY = "cached-date";
const CACHE_DATE_KEY_WITH_LATENCY = "cached-date-with-latency";
const CACHE_KEY_REVALIDATE_TRIGGER = "cached-date-revalidate-trigger";

export const cachedDate = unstable_cache(async () => {
  return new Date().toISOString();
},
  [CACHE_DATE_KEY],
  {
    tags: [CACHE_DATE_KEY],
    revalidate: 10,
  }
)

export const cachedDateWithLatency = unstable_cache(async () => {
  await waitFor(200);
  return new Date().toISOString();
},
  [CACHE_DATE_KEY_WITH_LATENCY],
  {
    tags: [CACHE_DATE_KEY_WITH_LATENCY],
    revalidate: 10,
  }
)

const cacheReader = unstable_cache(
  () => Promise.resolve(0),
  [CACHE_KEY_REVALIDATE_TRIGGER],
  {
    tags: [CACHE_KEY_REVALIDATE_TRIGGER],
  }
)

export async function ForceCacheRevalidation() {
  await cacheReader();
  return null
}


export async function CachedDate() {
  const date = await cachedDate();
  return <div>
    Cached value 10 sec: {new Date(date).toLocaleString("en-US", {
      timeZone: "America/New_York",
    })}
  </div>
}

export async function CachedDateWithLatency() {
  const date = await cachedDateWithLatency();
  return <div>
    Cached value 10 sec: {new Date(date).toLocaleString("en-US", {
      timeZone: "America/New_York",
    })}
  </div>
}
