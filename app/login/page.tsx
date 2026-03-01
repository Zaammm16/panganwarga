"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Logika dummy: Jika email adalah admin@pangan.com, anggap sebagai admin
    if (email === 'admin@pangan.com' && password === 'admin123') {
      localStorage.setItem('userRole', 'admin');
      router.push('/admin/dashboard');
    } else {
      alert('Email atau password salah! (Gunakan admin@pangan.com / admin123)');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-forest">Pangan Warga</h1>
            <p className="text-gray-500 mt-2">Admin Control Panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-forest focus:border-transparent outline-none transition"
                placeholder="admin@pangan.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-forest focus:border-transparent outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-forest text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition shadow-md"
            >
              Sign In
            </button>
          </form>
        </div>
        
        <div className="bg-gray-50 py-4 text-center">
          <button 
            onClick={() => router.push('/')}
            className="text-sm text-gray-500 hover:text-forest transition"
          >
            ← Kembali ke Beranda
          </button>
        </div>
      </div>
    </main>
  );
}