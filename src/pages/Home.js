import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';

// قاعدة البيانات بروابط صور مباشرة مستقرة تفتح في أي متصفح وبدون إنترنت قوي
const COFFEE_DATABASE = [
  { 
    id: 1, 
    name: "Flat White Impérial", 
    category: "Chaud", 
    price: 33, 
    calories: 120, 
    desc: "Ristretto double shot sur une micro-mousse dense et veloutée.", 
    img: "https://images.unsplash.com/photo-1577968897466-3d43252367e7?w=500&q=80" 
  },
  { 
    id: 2, 
    name: "Espresso Sélection Noir", 
    category: "Chaud", 
    price: 24, 
    calories: 5, 
    desc: "Extraction pure sous haute pression de grains fins d'altitude.", 
    img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500&q=80" 
  },
  { 
    id: 3, 
    name: "Iced Caramel Macchiato", 
    category: "Froid", 
    price: 40, 
    calories: 210, 
    desc: "Espresso frappé sur glace, lait frais et coulis de caramel fondant.", 
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80" 
  },
  { 
    id: 4, 
    name: "Cappuccino Mousse Fluffy", 
    category: "Chaud", 
    price: 35, 
    calories: 190, 
    desc: "Lait chaud, espresso fort et une montagne d'écume saupoudrée de cacao.", 
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&q=80" 
  },
  { 
    id: 5, 
    name: "Iced Americano Pur", 
    category: "Froid", 
    price: 28, 
    calories: 4, 
    desc: "Double shot d'espresso allongé à l'eau glacée, pur et rafraîchissant.", 
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80" 
  },
  { 
    id: 6, 
    name: "Matcha Iced Latte", 
    category: "Froid", 
    price: 45, 
    calories: 150, 
    desc: "Thé vert matcha de cérémonie japonais frappé au lait d'amande.", 
    img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&q=80" 
  },
  { 
    id: 7, 
    name: "Mocha Chocolat Noble", 
    category: "Chaud", 
    price: 39, 
    calories: 260, 
    desc: "Fusion d'un chocolat noir premium, d'espresso et de crème fouettée.", 
    img: "https://images.unsplash.com/photo-1607687314552-46522c0b4b84?w=500&q=80" 
  },
  { 
    id: 8, 
    name: "Macchiato Traditionnel", 
    category: "Chaud", 
    price: 29, 
    calories: 60, 
    desc: "Une dose d'espresso simplement tachetée d'une cuillère de mousse de lait.", 
    img: "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=500&q=80" 
  },
  { 
    id: 9, 
    name: "Chemex Filtration Lente", 
    category: "Chaud", 
    price: 36, 
    calories: 2, 
    desc: "Filtration artisanale lente révélant toutes les notes florales du café.", 
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80" 
  },
  { 
    id: 10, 
    name: "Doja Shakerato Impérial", 
    category: "Froid", 
    price: 42, 
    calories: 95, 
    desc: "Espresso vigoureusement frappé au shaker avec un soupçon de sucre de canne.", 
    img: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=500&q=80" 
  }
];

function Home() {
  const { addToCart, favorites, toggleFavorite, user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/signup');
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans antialiased">
      {/* هيدر ترحيبي بسيط وأنيق بالأسلوب الأبيض النظيف */}
      <div className="pt-32 pb-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-700 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-100 inline-block">
            Maison Doja • Casablanca
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-zinc-900 leading-tight">
            Pure taste. <br/><span className="font-medium text-amber-800">Minimalist design.</span>
          </h1>
          <p className="text-zinc-500 text-sm font-light max-w-md leading-relaxed">
            Une expérience épurée autour du café de spécialité. Découvrez nos créations artisanales préparées avec soin.
          </p>
          <div className="pt-3">
            <Link to="/lab" className="bg-zinc-900 hover:bg-amber-800 text-white font-medium tracking-wide px-7 py-3.5 rounded-full text-xs transition-all duration-300 inline-block shadow-sm">
              Ouvrir Le Doja Lab 🧪
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600" alt="Doja Minimal" className="w-full max-w-sm rounded-[32px] shadow-sm border border-zinc-100" />
        </div>
      </div>

      {/* كروت المنتجات البيضاء النظيفة المطابقة تماماً للصور */}
      <div className="bg-white border-t border-zinc-100 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <div>
            <h2 className="text-xl font-medium tracking-tight text-zinc-900">Notre Carte Moléculaire</h2>
            <p className="text-zinc-400 text-xs font-light mt-0.5">Sélectionnez et personnalisez vos boissons préférées.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COFFEE_DATABASE.map((item) => {
              const isFav = favorites.some(f => f.id === item.id);
              return (
                <div key={item.id} className="bg-white border border-zinc-100 rounded-[24px] p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-zinc-200/80 group relative">
                  <div>
                    <div className="relative overflow-hidden rounded-xl h-48 mb-3.5 bg-zinc-50">
                      {/* تم تحسين الـ تاق لحمايته من الأخطاء في حال عدم تحميل الصورة */}
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500"; // صورة احتياطية ذكية من جوجل وسيرفراتها
                        }}
                      />
                      
                      <button onClick={() => toggleFavorite(item)} className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full border border-zinc-100 text-zinc-400 transition-all cursor-pointer hover:text-amber-600 shadow-sm">
                        <svg className={`w-3.5 h-3.5 ${isFav ? 'text-amber-600 fill-current' : 'text-zinc-400'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>

                      <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-[9px] font-medium text-zinc-600 px-2.5 py-1 rounded-full border border-zinc-100 shadow-sm">
                        {item.calories} KCAL
                      </span>
                    </div>
                    
                    <span className="text-[10px] font-medium text-amber-800 tracking-wide block mb-0.5 uppercase">{item.category}</span>
                    <h3 className="text-sm font-medium text-zinc-900 group-hover:text-amber-800 transition-colors">{item.name}</h3>
                    <p className="text-zinc-400 text-xs mt-1 font-light leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-zinc-50 pt-3.5 mt-4">
                    <span className="text-sm font-semibold text-zinc-900">{item.price}.00 DH</span>
                    <button onClick={() => { addToCart(item); alert(`${item.name} ajouté !`); }} className="bg-zinc-50 hover:bg-zinc-900 text-zinc-700 hover:text-white font-medium text-xs px-4 py-2 rounded-full border border-zinc-100 transition-all duration-300 cursor-pointer shadow-sm">
                      Ajouter
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;