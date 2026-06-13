import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Navbar() {
  const { cart, favorites, user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-sm font-semibold tracking-wider text-zinc-900 uppercase">
          DOJA <span className="text-amber-800 font-light">CAFÉ LAB</span>
        </Link>
        
        <div className="flex items-center gap-6 text-xs font-normal tracking-wide text-zinc-600">
          <Link to="/" className="hover:text-amber-800 transition-colors">Accueil</Link>
          <Link to="/lab" className="hover:text-amber-800 transition-colors">Doja Lab</Link>
          
          {user ? (
            <div className="flex items-center gap-4 border-l border-zinc-200 pl-4">
              <span className="text-amber-800 bg-amber-50/60 px-2.5 py-1 rounded-full text-[11px] border border-amber-100">@{user.name.split(' ')[0]}</span>
              <span className="text-zinc-400 font-light text-[11px]">♡ {favorites.length}</span>
              <button onClick={() => { setUser(null); navigate('/signup'); }} className="text-zinc-400 hover:text-red-500 transition-colors text-[11px] font-light">Quitter</button>
            </div>
          ) : (
            <Link to="/signup" className="bg-zinc-900 text-white px-4 py-1.5 rounded-full hover:bg-amber-800 transition-all text-[11px]">S'enregistrer</Link>
          )}

          {totalItems > 0 && (
            <span className="bg-amber-800 text-white text-[10px] px-2 py-0.5 rounded-full font-medium ml-1">{totalItems}</span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;