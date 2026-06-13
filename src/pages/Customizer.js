import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer, YAxis, Tooltip } from 'recharts';
import { Thermometer, Zap, Heart, Wind, Moon, Sun, Activity, Coffee } from 'lucide-react';

const ADDITIONS = [
  { name: "Sucre", price: 3, health: -5, icon: <Sun size={14}/> },
  { name: "Chocolat", price: 5, health: -8, icon: <Zap size={14}/> },
  { name: "Caramel", price: 5, health: -10, icon: <Wind size={14}/> },
  { name: "Vanille", price: 4, health: -2, icon: <Coffee size={14}/> },
  { name: "Lait Amande", price: 8, health: 5, icon: <Heart size={14}/> },
  { name: "Lait Soja", price: 8, health: 4, icon: <Heart size={14}/> },
  { name: "Miel", price: 4, health: 3, icon: <Sun size={14}/> },
  { name: "Noisette", price: 6, health: -1, icon: <Zap size={14}/> },
  { name: "Chantilly", price: 7, health: -15, icon: <Wind size={14}/> },
  { name: "Matcha", price: 10, health: 12, icon: <Activity size={14}/> },
  { name: "Extra Shot", price: 9, health: -4, icon: <Zap size={14}/> },
  { name: "Menthe", price: 4, health: 6, icon: <Wind size={14}/> },
  { name: "Glace", price: 12, health: -12, icon: <Thermometer size={14}/> },
  { name: "Cookie", price: 6, health: -18, icon: <Moon size={14}/> },
  { name: "Cannelle", price: 3, health: 8, icon: <Sun size={14}/> }
];

const MOODS = [
  { id: 'Stressé', label: 'متوتر', coffee: 'Latte Lavande Doux', icon: <Wind/>, color: '#818cf8' },
  { id: 'Anxieux', label: 'قلق', coffee: 'Déca Vanille Calme', icon: <Moon/>, color: '#fb7185' },
  { id: 'Fatigué', label: 'تعبان', coffee: 'Espresso Triple Shot', icon: <Zap/>, color: '#fbbf24' },
  { id: 'Heureux', label: 'فرحان', coffee: 'Frappé Caramel Gold', icon: <Sun/>, color: '#34d399' }
];

export default function Customizer() {
  const [selectedMood, setSelectedMood] = useState(MOODS[2]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [healthScore, setHealthScore] = useState(100);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let score = 100 + selectedExtras.reduce((acc, item) => acc + item.health, 0);
    setHealthScore(score < 0 ? 0 : score);
    setChartData(prev => [...prev.slice(-10), { time: Date.now(), score: score }]);
  }, [selectedExtras]);

  const toggleExtra = (item) => {
    setSelectedExtras(prev => 
      prev.find(i => i.name === item.name) ? prev.filter(i => i.name !== item.name) : [...prev, item]
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-10 font-sans selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* اليسار: اختيار المزاج والاقتراح الذكي */}
        <div className="lg:col-span-3 space-y-6">
          <motion.div initial={{ x: -50 }} animate={{ x: 0 }} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-[32px] backdrop-blur-xl">
            <h2 className="text-zinc-500 text-[10px] uppercase tracking-[4px] mb-6">Mood Analysis</h2>
            <div className="grid grid-cols-2 gap-3">
              {MOODS.map(m => (
                <button key={m.id} onClick={() => setSelectedMood(m)} 
                  className={`p-4 rounded-2xl border transition-all flex flex-col items-center gap-2 ${selectedMood.id === m.id ? 'border-amber-500 bg-amber-500/10' : 'border-zinc-800 bg-black/40 text-zinc-500'}`}>
                  {m.icon} <span className="text-[10px]">{m.label}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 p-4 bg-black/60 rounded-2xl border border-zinc-800">
              <p className="text-[10px] text-amber-500 uppercase mb-2">Suggestion du Lab</p>
              <h3 className="text-sm font-medium">{selectedMood.coffee}</h3>
            </div>
          </motion.div>
        </div>

        {/* الوسط: معمل الـ 15 عنصر */}
        <div className="lg:col-span-6 space-y-6">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-[40px] backdrop-blur-3xl">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-light tracking-tighter">Molecular <span className="text-amber-500 font-medium">Lab</span></h1>
              <span className="text-[10px] px-3 py-1 rounded-full border border-zinc-800 text-zinc-500">15 Components Active</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {ADDITIONS.map((item, idx) => (
                <motion.button key={item.name} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={() => toggleExtra(item)}
                  className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all ${selectedExtras.find(i => i.name === item.name) ? 'border-amber-500 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.1)]' : 'border-zinc-800 bg-black/20 hover:border-zinc-700'}`}>
                  <div className={selectedExtras.find(i => i.name === item.name) ? 'text-amber-500' : 'text-zinc-600'}>{item.icon}</div>
                  <span className="text-[10px] font-light">{item.name}</span>
                  <span className="text-[9px] text-zinc-500">+{item.price} DH</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* اليمين: المؤشر الصحي والمنحنى */}
        <div className="lg:col-span-3 space-y-6">
          <motion.div initial={{ x: 50 }} animate={{ x: 0 }} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-[32px] flex flex-col items-center text-center">
            <h2 className="text-zinc-500 text-[10px] uppercase tracking-[4px] mb-8">Biometric Score</h2>
            
            {/* دائرة الطاقة المتوهجة */}
            <div className="relative w-32 h-32 flex items-center justify-center mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-zinc-800" />
                <motion.circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="4" fill="transparent" 
                  strokeDasharray={377} strokeDashoffset={377 - (377 * healthScore) / 100}
                  className={healthScore > 60 ? 'text-emerald-500' : healthScore > 30 ? 'text-amber-500' : 'text-rose-500'}
                  strokeLinecap="round" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-light">{healthScore}</span>
                <span className="text-[8px] text-zinc-500">HEALTH</span>
              </div>
            </div>

            {/* المنحنى الحي */}
            <div className="w-full h-32 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <Line type="monotone" dataKey="score" stroke="#f59e0b" strokeWidth={2} dot={false} isAnimationActive={false}/>
                  <Tooltip content={() => null} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-[8px] text-zinc-600 mt-2">REAL-TIME BIOMETRIC TRACKING</p>
            </div>
          </motion.div>

          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="w-full py-6 bg-amber-500 text-black font-bold rounded-3xl text-xs uppercase tracking-[4px] shadow-[0_10px_30px_rgba(245,158,11,0.2)]">
            Infuse signature blend
          </motion.button>
        </div>

      </div>
    </div>
  );
}