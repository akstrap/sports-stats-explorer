export default function Header() {
  return (
    <header className="bg-[#1a1f36] text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">🏀 NBA Stat Explorer</h1>
      <nav className="space-x-4 text-sm md:text-base">
        <a href="#" className="hover:text-blue-400 transition">
          Search
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          Compare
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          Rankings
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          Favorites
        </a>
      </nav>
    </header>
  );
}
