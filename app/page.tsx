import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <Link href="/about" className="text-blue-500 hover:underline">
        About
      </Link>
    </div>
  );
}
