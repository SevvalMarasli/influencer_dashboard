"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Hard-coded giriş bilgileri
const LOGIN_EMAIL = "test@test.com";
const LOGIN_PASSWORD = "1234";

export default function LoginPage() {
  // State'ler: email, şifre ve hata mesajı
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Router (başarılı giriş sonrası yönlendirme için)
  const router = useRouter();

  // Form gönderim fonksiyonu
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Doğru email ve şifre girildiyse dashboard'a yönlendir
    if (email === LOGIN_EMAIL && password === LOGIN_PASSWORD) {
      router.push("/Dashboard");
    } else {
      // Yanlış bilgi -> hata mesajı
      setError("Email veya şifre hatalı.");
    }
  };

  return (
    <div
      className="w-screen min-h-screen flex items-center justify-center p-4"
      // Arka plan gradyanı
      style={{
        background:
          "linear-gradient(135deg, #FFC0CB 0%, #ADD8E6 50%, #6A5ACD 100%)",
      }}
    >
      {/* Login kartı */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col gap-12 items-center">

        {/* Logo ve başlık */}
        <div className="text-center flex flex-col sm:flex-row gap-4 items-center">
          {/* Görsel */}
          <div className="w-12 h-12 sm:w-20 sm:h-20 relative">
            <Image
              src="/infofluencer_logo.png"
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Başlık */}
          <h1
            className="font-extrabold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins
            bg-gradient-to-r from-royalPurple to-darkPurple 
                       bg-clip-text text-transparent"
          >
            INFOFLUENCER
          </h1>
        </div>


        {/* Form alanı */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-6 sm:gap-9 items-center tracking-wide font-lato"
        >
          {/* Email input */}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-4/5 p-3 rounded-xl border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primaryIndigo focus:border-transparent transition text-base sm:text-lg"
            required
          />

          {/* Şifre input */}
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-4/5 p-3 rounded-xl border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primaryIndigo focus:border-transparent transition text-base sm:text-lg"
            required
          />

          {/* Hata mesajı */}
          {error && (
            <div className="text-errorRed font-semibold text-base sm:text-lg tracking-wider text-center">
              {error}
            </div>
          )}

          {/* Giriş butonu */}
          <button
            type="submit"
            className="w-1/2 sm:w-1/4 py-2 rounded-3xl font-bold text-white shadow-lg bg-gradient-to-r from-primaryPurple to-primaryIndigo hover:opacity-90 transition duration-200 transform hover:scale-[1.02] text-base sm:text-xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
