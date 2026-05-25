import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-babypink-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-md overflow-hidden border border-babypink-200 flex flex-col">
        
        {/* Banner Atas Warna Navy khas Figma */}
        <div className="bg-[#11144c] p-8 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-babypink-400/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-babypink-300/20 rounded-full blur-xl"></div>
          
          <h1 className="text-3xl font-black text-white tracking-wider">CAREERMATCH</h1>
          <p className="text-babypink-200 text-xs mt-1 font-medium tracking-wide">Kelompok ROBLOX • UB Vocational</p>
        </div>

        {/* Form Area */}
        <div className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-bold text-[#11144c]">Welcome Back!</h2>
            <p className="text-gray-400 text-xs mt-1">Silahkan masuk ke akun kariermu</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
              <input 
                type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                className="w-full px-4 py-3 rounded-2xl border border-babypink-200 focus:outline-none focus:ring-2 focus:ring-babypink-400 bg-babypink-100/30 text-sm transition-all"
                placeholder="contoh@email.com"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Password</label>
                <a href="#" className="text-xs text-babypink-500 font-bold hover:underline">Forgot Password?</a>
              </div>
              <input 
                type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                className="w-full px-4 py-3 rounded-2xl border border-babypink-200 focus:outline-none focus:ring-2 focus:ring-babypink-400 bg-babypink-100/30 text-sm transition-all"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 mt-4 bg-babypink-500 hover:bg-babypink-400 text-white font-extrabold rounded-2xl shadow-lg shadow-babypink-500/30 transition-all duration-200 transform active:scale-[0.97]"
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-xs text-gray-500 pt-2 border-t border-gray-100">
            Belum punya akun?{' '}
            <Link to="/register" className="text-babypink-500 font-extrabold hover:underline">
              Buat Akun Baru (Sign Up)
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}