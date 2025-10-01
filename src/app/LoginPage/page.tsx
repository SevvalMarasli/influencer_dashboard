"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LOGIN_EMAIL = "test@test.com";
const LOGIN_PASSWORD = "1234";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email === LOGIN_EMAIL && password === LOGIN_PASSWORD) {
      router.push("/dashboard");
    } else {
      setError("Email veya şifre hatalı.");
    }
  };

  return (
    <div
      className="w-screen min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg, #FFC0CB 0%, #ADD8E6 50%, #6A5ACD 100%)",
      }}
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-12 flex flex-col gap-10 items-center">
        {/* Logo ve Başlık */}
        <div className="text-center flex gap-3 items-center">
          <div className="w-[60px] h-[60px] relative">
            <Image src="/infofluencer_logo.png" alt="logo" fill style={{ objectFit: "contain" }} />
          </div>
          <h1 className="text-3xl font-bold text-darkText">Infofluencer</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full">
          {/* Email */}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 rounded-xl border border-gray-300 text-darkText placeholder-gray-400 focus:ring-2 focus:ring-primaryIndigo focus:border-transparent transition"
            required
          />

          {/* Şifre */}
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-3 rounded-xl border border-gray-300 text-darkText placeholder-gray-400 focus:ring-2 focus:ring-primaryIndigo focus:border-transparent transition"
            required
          />

          {/* Giriş Butonu */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-r from-primaryPurple to-primaryIndigo hover:opacity-90 transition duration-200"
          >
            Giriş Yap
          </button>

          {/* Hata Mesajı */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-errorRed rounded-xl text-sm text-center">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
