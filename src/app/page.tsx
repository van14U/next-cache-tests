import { Chip } from '@/components';
import Link from 'next/link';

export const runtime = "edge";

export default function Home() {
  const now = new Date();
  return (
    <main className="mx-auto h-screen min-h-screen w-full max-w-5xl font-mono">
      <h1 className="pt-8 text-xl font-semibold">Cache tests without KV</h1>
      <p>
        Current time:{" "}
        {`EST ${now.toLocaleString("en-US", {
          timeZone: "America/New_York",
        })}`}
      </p>
      <h2 className='text-lg font-bold'>
        Tests using{" "}<Chip text='unstable_cache' /></h2>
      <ul>
        <li>
          <Link href={'/no-revalidate'}
            className='text-blue-500 hover:text-blue-700'
          >
            no revalidate
          </Link>
        </li>
        <li>
          <Link href={'/10s'}
            className='text-blue-500 hover:text-blue-700'
          >
            10s revalidate
          </Link>
        </li>
        <li>
          <Link href={'/20s'}
            className='text-blue-500 hover:text-blue-700'
          >
            20s revalidate
          </Link>
        </li>
        <li>
          <Link href={'/all-no-streaming'}
            className='text-blue-500 hover:text-blue-700'
          >
            All (no streaming)
          </Link>
        </li>
      </ul>
    </main>
  );
}
