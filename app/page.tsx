import Navbar from '@/components/Navbar'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 mt-8">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="mt-4">This is your Next.js App Router site using TypeScript.</p>
      </main>
    </>
  )
}
