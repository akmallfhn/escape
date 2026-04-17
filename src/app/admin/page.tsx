"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LogoIcon from '@/components/icons/logo';
import { loginAdmin, forceCreateAdminUser } from './actions';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('escape_admin_auth') === 'true') {
      router.replace('/admin/dashboard');
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await loginAdmin(email, password);

    if (result.success) {
      localStorage.setItem('escape_admin_auth', 'true');
      router.push('/admin/dashboard');
    } else {
      setError(result.error || 'Login failed.');
      setLoading(false);
    }
  };

  // The Dashboard Bypass Function
  const handleInitialSetup = async () => {
    if (!email || !password) return alert("Fill in email and password first!");
    setLoading(true);
    const result = await forceCreateAdminUser(email, password);
    if (result.success) {
      alert("Success! Your account is created. You can now log in.");
    } else {
      alert("Setup Error: " + result.error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center px-4">
      <div className="w-full max-w-90">
        <div className="flex flex-col items-center gap-5 mb-10">
          <div className="flex items-center gap-3">
            <LogoIcon width="36" height="36" fill="white" />
            <span className="text-white font-bold text-lg tracking-widest uppercase">Escape Admin</span>
          </div>
          <p className="text-[#666] text-sm text-center">Log in to your admin account</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(''); }}
            placeholder="Email Address"
            className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-white/25 text-sm transition-colors"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(''); }}
            placeholder="Password"
            className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-white/25 text-sm transition-colors"
            required
          />

          {error && (
            <p className="text-[#DA393C] text-xs px-1">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password.trim() || !email.trim()}
            className="bg-[#DA393C] text-white font-bold py-3 rounded-lg text-sm hover:bg-[#b52b2d] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all mt-1 uppercase tracking-wider"
          >
            {loading ? 'Processing...' : 'Login'}
          </button>
        </form>

       

        <p className="text-center text-[#333] text-xs mt-10">
          Escape Admin Panel &copy; 2026
        </p>
      </div>
    </div>
  );
}