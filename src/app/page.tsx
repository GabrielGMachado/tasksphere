'use client'
import { Name, Email, Passoword, ConfirmPassword, Submit } from "../components/forms";

import Image from "next/image";
import Link from "next/link";
import { Apple, Facebook } from "lucide-react";
import { useState } from "react";


export default function Home() {
  const [step, setStep] = useState("email")
  const [email, setEmail] = useState("")

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "teste@teste.com") {
      setStep("password")
    } else {
      setStep("register")
    }
  }

  return (
    <div className="bg-slate-900 h-full w-full">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center mb-44 text-white">
          <Image src="/logo.png" width={80} height={80} alt="Logo TaskSphere" />
          <div className="flex flex-col items-center mt-2">
            <h1 className="text-3xl">TaskSphere</h1>
            <p className="text-zinc-400">Seu aplicativo de tarefas</p>
          </div>
        </div>

        <div className="absolute bottom-0 max-w-md w-full bg-white rounded-tr-xl rounded-tl-xl p-5">
          <h1 className="text-[20px] font-semibold">Entrar com</h1>

          <div className="flex justify-between mt-5 gap-4">
            <Link href="/" className="border border-black w-full flex justify-center py-3.5 rounded-xl">
              <button className="flex gap-2 font-bold" >
                <Facebook /> Google
              </button>
            </Link> 

            <Link href="/" className="border border-black w-full flex justify-center py-3.5 rounded-xl">
              <button className="flex gap-2 font-bold">
                <Apple /> Apple
              </button>
            </Link> 
          </div>

          <div className="flex justify-between items-center mt-10 mb-10">
            <div className="h-[1px] w-full bg-slate-900"></div>
            <p className="px-4">Ou</p>
            <div className="h-[1px] w-full bg-slate-900"></div>
          </div>

          {step === "email" && (
            <>
              <form onSubmit={handleEmailSubmit} className="flex flex-col gap-2">
                <Email value={email} onChange={(e) => setEmail(e.target.value)} />
                <Submit />
              </form>
            </>
          )}

          {step === "password" && (
            <>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
                <Email value={email} onChange={(e) => setEmail(e.target.value)} />
                <Passoword />
                <Submit />
              </form>
            </>
          )}

          {step === "register" && (
            <>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
                <Name />
                <Email value={email} onChange={(e) => setEmail(e.target.value)} />
                <Passoword />
                <ConfirmPassword />
                <Submit />
              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
