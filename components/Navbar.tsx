import Link from "next/link";


export async function Navbar() {

  return (
    <nav className="py-5 px-6 bg-gray-800 text-white flex items-center justify-between">
      <div className="flex items-center gap-6">
        {/* <Link href="/">
          <h1 className="text-3xl flex items-center gap-6">
            <span className="text-blue-500">SMVM</span>
          </h1>
        </Link> */}
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link
            href="https://codegit-ftq2.vercel.app/"
            className="text-sm font-medium hover:text-blue-400 transition-colors"
          >
            CodeGit
          </Link>
          {/* <Link href="/industrial" className="text-sm font-medium hover:text-blue-400 transition-colors">
            Industrial
          </Link> */}
        </div>
      </div>


    </nav>
  );
}
