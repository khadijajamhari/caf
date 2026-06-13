import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { FiMapPin, FiTruck, FiClock } from 'react-icons/fi';

export default function Checkout() {
  const { cart, setCart } = useContext(AppContext);
  const [orderSent, setOrderSent] = useState(false);

  const total = cart.reduce((acc, c) => acc + (c.price * c.quantity), 0);

  if (orderSent) {
    return (
      <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center text-white px-4">
        <div className="max-w-md w-full bg-[#111111] p-8 rounded-3xl border border-[#d4af37]/20 text-center space-y-6">
          <div className="w-16 h-16 bg-[#d4af37]/10 text-[#d4af37] rounded-full flex items-center justify-center text-2xl mx-auto animate-bounce"><FiTruck /></div>
          <h2 className="text-2xl font-black uppercase tracking-widest">Commande Expédiée !</h2>
          <p className="text-zinc-500 text-xs">Votre Barista Doja a validé la commande. Le coursier est en route vers votre destination.</p>
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900 space-y-2 text-left text-xs text-zinc-400">
            <div className="flex justify-between"><span>📍 Statut :</span><span className="text-[#d4af37] font-bold">En transit à Casablanca</span></div>
            <div className="flex justify-between"><span>⏱️ Arrivée estimée :</span><span className="text-amber-500 font-bold">14 Minutes</span></div>
          </div>
          <button onClick={() => { setCart([]); setOrderSent(false); window.location.href="/"; }} className="w-full bg-[#d4af37] text-black font-black uppercase tracking-widest py-3 rounded-xl text-xs cursor-pointer">Retour au Salon</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] pt-28 pb-20 px-4 text-white">
      <div className="max-w-3xl mx-auto bg-[#111111] p-6 md:p-8 rounded-2xl border border-zinc-900">
        <h2 className="text-xl font-black uppercase tracking-widest mb-6 flex items-center gap-2 text-[#d4af37]"><FiMapPin /> Panier & Expédition</h2>
        {cart.length === 0 ? (
          <p className="text-zinc-500 text-center py-12 text-xs uppercase font-bold tracking-widest">Votre gobelet est vide pour le moment.</p>
        ) : (
          <div className="space-y-6">
            {cart.map(i => (
              <div key={i.id} className="flex justify-between items-center bg-zinc-950 p-4 rounded-xl border border-zinc-900">
                <div><h4 className="font-bold text-sm text-white">{i.name}</h4><p className="text-[10px] text-zinc-500 uppercase">{i.category} x {i.quantity}</p></div>
                <span className="font-black text-sm text-[#d4af37]">{i.price * i.quantity} DH</span>
              </div>
            ))}
            <div className="pt-6 border-t border-zinc-900 flex justify-between items-center"><span className="text-zinc-500 uppercase font-black text-xs">Total à payer :</span><span className="text-2xl font-black text-[#d4af37]">{total} DH</span></div>
            <button onClick={() => setOrderSent(true)} className="w-full bg-gradient-to-r from-[#d4af37] to-amber-600 text-black font-black uppercase tracking-widest py-4 rounded-xl text-xs transition-all cursor-pointer">Lancer la livraison instantanée</button>
          </div>
        )}
      </div>
    </div>
  );
}