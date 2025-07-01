import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to CircleReads </h1>
      <p className="text-lg mb-6 text-center">
        Discover books loved by developers and engineering leaders at CircleCI.
      </p>
      <Image
        src="/bookshelf.png"
        alt="Bookshelf"
        width={400}
        height={300}
        className="rounded shadow-md mb-6"
      />
      <Link href="/books" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        View Books
      </Link>
    </main>
  );
}
