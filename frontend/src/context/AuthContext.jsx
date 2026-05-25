import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [notification, setNotification] = useState(null);

  // Fitur Toast Notification Center
  const showToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  // Validasi Kriptografi/Regex Password Kelompok ROBLOX
  const validatePasswordRegex = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const login = (email, password) => {
    // Simulasi Login Sementara (Nanti disambung Fetch ke Laravel)
    if (email && password) {
      setUser({ name: 'Ayu Patricia', email, phone: '08123456789', mbti: null });
      showToast('Selamat Datang di CAREERMATCH!', 'success');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    showToast('Berhasil keluar dari akun.', 'info');
  };

  const toggleBookmark = (job) => {
    if (savedJobs.find(j => j.id === job.id)) {
      setSavedJobs(savedJobs.filter(j => j.id !== job.id));
      showToast('Lowongan dihapus dari bookmark', 'info');
    } else {
      setSavedJobs([...savedJobs, job]);
      showToast('Lowongan berhasil disimpan!', 'success');
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, savedJobs, toggleBookmark, notification, showToast, validatePasswordRegex }}>
      {children}
      
      {/* Toast Notification Floating */}
      {notification && (
        <div className={`fixed bottom-5 right-5 z-50 px-5 py-3 rounded-xl shadow-2xl text-white font-semibold transition-all transform translate-y-0 animate-bounce ${notification.type === 'success' ? 'bg-babypink-500' : 'bg-gray-700'}`}>
          {notification.message}
        </div>
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);