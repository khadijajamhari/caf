
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Dashboard() {
  const { stats } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-[#0b0b0b] pt-28 pb-12 px-6 text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-black tracking-widest text-[#d4af37] uppercase">📊 SUIVI SANTÉ & CAFFÉINE</h2>
          <p className="text-zinc-500 text-xs mt-1">Analyse nutritionnelle en temps réel de vos consommations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#111111] p-6 rounded-[20px] border border-zinc-900 flex justify-between items-center">
            <div>
              <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-wider">Gobelets Consommés</span>
              <span className="text-3xl font-black text-white mt-1 block">{stats.totalCups} <span className="text-xs font-normal text-zinc-500">Tasses</span></span>
            </div>
          </div>

          <div className="bg-[#111111] p-6 rounded-[20px] border border-zinc-900 flex justify-between items-center">
            <div>
              <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-wider">Énergie Cumulée Aujourd'hui</span>
              <span className="text-3xl font-black text-[#d4af37] mt-1 block">{stats.totalCalories} <span className="text-xs font-normal text-zinc-500">Kcal</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
        