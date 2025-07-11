import Link from "next/link"

export function Navbar() {
    return (
 <nav className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
             {/* <Link href="/">
                             <h1 className="text-3xl flex items-center gap-6">
                    <span className="text-blue-500">SMVM</span>
                </h1>
             </Link> */}
             <div className="hidden sm:flex items-center gap-6">
                <Link href="/" className="text sm font-medium hover:text-blue-500 transition-colors">
                Home 
                </Link>
                 <Link href="https://codegit-ftq2.vercel.app/" className="text sm font-medium hover:text-blue-500 transition-colors">
                CodeGit
                </Link>
                 <Link href="/books" className="text sm font-medium hover:text-blue-500 transition-colors">
                Books
                </Link>

             </div>
             </div>
        </nav>
    )
}