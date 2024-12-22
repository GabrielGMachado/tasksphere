import Image from "next/image";
import Link from "next/link";
import { Apple, Facebook } from "lucide-react";

export default function Home() {
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

        <div className="absolute max-w-md bottom-0 h-96 w-full bg-white rounded-tr-xl rounded-tl-xl p-5">
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

          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email..."
              className="border border-slate-700/60 rounded-xl w-full p-4 py-3 outline-none"
              aria-label="Digite seu email"
            />
            <input
              type="submit"
              value="Continuar"
              className="border text-white font-medium bg-slate-900 rounded-xl w-full p-2 py-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
