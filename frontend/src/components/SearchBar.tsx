import { useState } from "react";
import { mockPlayers } from "../data/players";

interface Props {
  onSelect: (playerName: string) => void;
}

export default function SearchBar({ onSelect }: Props) {
  const [query, setQuery] = useState("");

  const filtered = mockPlayers.filter((p) =>
    p.full_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto my-8">
      <input
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search for a player..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <ul className="bg-white border mt-2 rounded-lg shadow-md">
          {filtered.map((p) => (
            <li
              key={p.id}
              onClick={() => {
                onSelect(p.full_name);
                setQuery(""); // clear after selection
              }}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
            >
              {p.full_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
