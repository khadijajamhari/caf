import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function SignUp() {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ username: '', email: '', phone: '', address: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let localErrors = {};
    if (!formData.username.trim()) localErrors.username = "Nom complet obligatoire";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) localErrors.email = "Format Email invalide";
    
    const phoneRegex = /^(06|07)\d{8}$/;
    if (!phoneRegex.test(formData.phone)) localErrors.phone = "Numéro marocain invalide (ex: 0612345678)";
    
    if (!formData.address.trim()) localErrors.address = "Adresse de livraison obligatoire";
    if (formData.password.length < 6) localErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
    
    setErrors(localErrors);
    return Object.keys(localErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setUser({ name: formData.username, email: formData.email, phone: formData.phone, address: formData.address });
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#050505] via-[#120e0c] to-[#1a110b] px-4 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent_60%)]"></div>
      
      <div className="w-full max-w-lg bg-[#0d0d0d]/90 backdrop-blur-2xl border border-zinc-800 p-8 rounded-[32px] shadow-2xl z-10">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-tr from-[#bda032] to-[#d4af37] rounded-2xl flex items-center justify-center mx-auto text-black font-black text-lg mb-3">DJ</div>
          <h2 className="text-2xl font-black tracking-widest text-white uppercase">DOJA CAFÉ LAB</h2>
          <p className="text-zinc-500 text-[10px] uppercase tracking-wider mt-1">Authentification requise pour commander</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Nom Complet</label>
            <input type="text" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} className="w-full bg-[#141414] border border-zinc-800 p-3.5 rounded-xl text-xs text-white focus:outline-none focus:border-[#d4af37]" placeholder="Ex: Khadija Jamhari" />
            {errors.username && <p className="text-red-500 text-[10px] mt-1">✦ {errors.username}</p>}
          </div>

          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Adresse Email</label>
            <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-[#141414] border border-zinc-800 p-3.5 rounded-xl text-xs text-white focus:outline-none focus:border-[#d4af37]" placeholder="khadija@example.com" />
            {errors.email && <p className="text-red-500 text-[10px] mt-1">✦ {errors.email}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Téléphone</label>
              <input type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#141414] border border-zinc-800 p-3.5 rounded-xl text-xs text-white focus:outline-none focus:border-[#d4af37]" placeholder="06XXXXXXXX" />
              {errors.phone && <p className="text-red-500 text-[10px] mt-1">✦ {errors.phone}</p>}
            </div>
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Mot de passe</label>
              <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="w-full bg-[#141414] border border-zinc-800 p-3.5 rounded-xl text-xs text-white focus:outline-none focus:border-[#d4af37]" placeholder="••••••••" />
              {errors.password && <p className="text-red-500 text-[10px] mt-1">✦ {errors.password}</p>}
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Adresse de Livraison (Casablanca)</label>
            <textarea value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} rows="2" className="w-full bg-[#141414] border border-zinc-800 p-3.5 rounded-xl text-xs text-white focus:outline-none focus:border-[#d4af37] resize-none" placeholder="Quartier Ain Chock, Rue..." />
            {errors.address && <p className="text-red-500 text-[10px] mt-1">✦ {errors.address}</p>}
          </div>

          <button type="submit" className="w-full bg-[#d4af37] hover:bg-white text-black font-black uppercase tracking-widest py-4 rounded-xl text-xs transition-all duration-300">
            S'enregistrer et Entrer
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;