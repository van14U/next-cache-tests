import Link from 'next/link';

export const runtime = "edge";

export default function Home() {
  return (
    <main className="mx-auto h-screen min-h-screen w-full max-w-5xl font-mono">
      <h1 className="pt-8 text-xl font-semibold">Cache tests without KV using unstable_cache</h1>
      <ul>
        <li>
          <Link href={'/streaming-cache-patch-no-async'}
            className='text-blue-500 hover:text-blue-700'
          >
            Bugger isr cache (streaming)
          </Link>
        </li>
        <li>
          <Link href={'/streaming-cache-patch-no-async'}
            className='text-blue-500 hover:text-blue-700'
          >
            Patched isr cache (streaming) no async
          </Link>
        </li>
        <li>
          <Link href={'/streaming-cache-patch-async'}
            className='text-blue-500 hover:text-blue-700'
          >
            Patched isr cache (streaming) async
          </Link>
        </li>
      </ul>
    </main>
  );
}
