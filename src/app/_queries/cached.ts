import { unstable_cache } from 'next/cache';

export const keys = {
  NoReval: "tag:time:undefined",
  Reval10Sec: "tag:time:10sec",
  Reval20Sec: "tag:time:20sec",
  Reval20SecWithLatency: "tag:latency:time:20sec",
} as const;

export type KeyValue = typeof keys[keyof typeof keys]

export const LATENCY = 200;
export const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getCachedTimeNoReval = unstable_cache(
  async () => {
    return new Date().toISOString();
  },
  [keys.NoReval],
  {
    tags: [keys.NoReval],
  },
);

export const getCachedTime10secReval = unstable_cache(
  async () => {
    return new Date().toISOString();
  },
  [keys.Reval10Sec],
  {
    tags: [keys.Reval10Sec],
    revalidate: 10,
  },
);

export const getCachedTime20secWithLatency = unstable_cache(
  async () => {
    await waitFor(LATENCY);
    return new Date().toISOString();
  },
  [keys.Reval20SecWithLatency],
  { tags: [keys.Reval20SecWithLatency], revalidate: 20 },
);

export const getCachedTime20secReval = unstable_cache(
  async () => {
    // await waitFor();
    return new Date().toISOString();
  },
  [keys.Reval20Sec],
  { tags: [keys.Reval20Sec], revalidate: 20 },
);
