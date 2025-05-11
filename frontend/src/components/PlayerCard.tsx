import StatCard from "./StatCard";
import { mockStats } from "../data/mockStats";
import React from "react";

interface Props {
  name: string;
}

export default function PlayerCard({ name }: Props) {
  const stats = mockStats[name];
  if (!stats) return null;

  return (
    <div className="bg-gray-50 max-w-3xl mx-auto p-6 rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-[#1a1f36]">{name}</h2>
      <p className="text-gray-600 mb-4">
        Team: <strong>{stats.team}</strong> • Season: {stats.season}
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <StatCard label="PPG" value={stats.ppg} />
        <StatCard label="APG" value={stats.apg} />
        <StatCard label="RPG" value={stats.rpg} />
        <StatCard label="SPG" value={stats.spg} />
        <StatCard label="BPG" value={stats.bpg} />
      </div>
    </div>
  );
}
