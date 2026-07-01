import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
           Student Challenges
        </h1>

        <div className="flex gap-6">

          <Link href="/" className="hover:text-gray-200">
            Accueil
          </Link>

          <Link href="/creer_defis" className="hover:text-gray-200">
            Créer
          </Link>

          <Link href="/profile" className="hover:text-gray-200">
            Profil
          </Link>

          <Link href="/admin" className="hover:text-gray-200">
            Dashboard
          </Link>

        </div>

      </div>
    </nav>
  );
}