import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-white text-2xl font-bold">
            BRIVNICA STYLE
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-300">
              DOMOV
            </Link>
            <Link href="#storitve" className="text-white hover:text-gray-300">
              STORITVE
            </Link>
            <Link href="#kontakt" className="text-white hover:text-gray-300">
              KONTAKT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
