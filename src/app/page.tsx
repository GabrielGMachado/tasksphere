import Image from "next/image";
import Navbar from "./components/navbar";
import Link from "next/link";
import { Facebook } from "lucide-react";


export default function Home() {
  return (
    <div className="bg-slate-900  h-full w-full">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center mb-40 text-white">
        <Image src="/logo.png" className="" width={80} height={80} alt="Logo TaskSphere"/>
        <div className="flex flex-col items-center gap1">
          <h1>TaskSphere</h1>
          <p>Seu aplicativo de tarefas</p>
        </div>
        </div>
        <div className="absolute max-w-md bottom-0 h-96 w-full bg-white rounded-tr-xl rounded-tl-xl p-5">
          <h1 className="text-2xl">Entrar com </h1>
          <div className="flex justify-between">
            <button className="border border-black max-w-36 w-full">
              <Link className="flex gap-2" href="/"> <Facebook/> Google</Link>
            </button>
            <button className="border border-black max-w-36 w-full">
              <Link href="/" className=" flex gap-2"> <Facebook/> Facebook </Link>
            </button>
          </div>
        </div>
      </div>
      
   
    
    </div>
  );
}
