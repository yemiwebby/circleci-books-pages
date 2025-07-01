import Link from "next/link";
import Image from "next/image";

const books = [
  {
    title: "Accelerate",
    author: "Nicole Forsgren",
    image: "/accelerate.png",
  },
  {
    title: "The Phoenix Project",
    author: "Gene Kim",
    image: "/phoenix.png",
  },
  {
    title: "Continuous Delivery",
    author: "Jez Humble",
    image: "/cd.png",
  },
];

export default function BooksPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold mb-6"> Featured Books</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {books.map((book, idx) => (
          <div key={idx} className="border p-4 rounded shadow">
            <Image src={book.image} alt={book.title} width={200} height={250} />
            <h2 className="text-xl font-bold mt-2">{book.title}</h2>
            <p className="text-gray-600">by {book.author}</p>
          </div>
        ))}
      </div>
      <Link href="/" className="block mt-8 text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </main>
  );
}
