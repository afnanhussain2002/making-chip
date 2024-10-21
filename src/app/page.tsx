import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="text-center p-6 shadow-md rounded-lg border border-primary">
      <h1 className="text-2xl font-bold mb-4">Welcome To Making Chip</h1>
      <p className="mb-4 w-96">You can optimize images, fill up the image background, And make some funny templates and much more.</p>
      <Link href="/home" className="bg-primary font-bold text-white py-2 px-4 rounded">Get Started</Link>
    </div>
  </div>
  
  );
}
