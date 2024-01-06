import Link from 'next/link';

export const runtime = "edge";

export default function Home() {
  return (
    <main className="mx-auto h-screen min-h-screen w-full max-w-5xl font-mono">
      <h1 className="pt-8 text-xl font-semibold">Cache tests without KV using unstable_cache</h1>
      <ul>
        <li>
          <Link href={'/streaming-cache-no-simulated-latency'}
            className='text-blue-500 hover:text-blue-700'
          >
            Not Bugged isr cache (streaming) no simulated latency
          </Link>
        </li>
        <li>
          <Link href={'/streaming-cache-bugged'}
            className='text-blue-500 hover:text-blue-700'
          >
            Bugged isr cache (streaming) with 200ms latency
          </Link>
        </li>
        <li>
          <Link href={'/streaming-cache-patch'}
            className='text-blue-500 hover:text-blue-700'
          >
            Patched isr cache (streaming) with 200ms latency
          </Link>
        </li>
        <li>
          <Link href={'/streaming-cache-patch-no-simulated-latency'}
            className='text-blue-500 hover:text-blue-700'
          >
            Patched isr cache (streaming) no simulated latency
          </Link>
        </li>
      </ul>
    </main>
  );
}
