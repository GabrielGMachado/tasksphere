'use client'


import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowBigRightDash } from "lucide-react";

export default function Home() {
    const [isDropVisible, setDropVisible] = useState(false);
    const router = useRouter();

    const handleSkipClick = () => {
        setDropVisible(true);
    };

    const handleConfirmSkip = () => {
        router.push('/dashboard');
    };

    const handleCancelSkip = () => {
        setDropVisible(false);
    };

    return (
        <div className="bg-slate-900 h-screen w-full flex flex-col relative">
            <div className="flex flex-col items-center text-white mt-20 flex-grow">
                <Image src="/logo.png" width={80} height={80} alt="Logo TaskSphere" />
                <div className="flex flex-col items-center mt-4">
                    <h1 className="text-3xl font-bold">TaskSphere</h1>
                    <p className="text-zinc-400 text-lg">Seu aplicativo de tarefas</p>
                </div>
            </div>

            <div className="bottom-0 max-w-md w-full h-[60%] bg-white rounded-tr-xl rounded-tl-xl p-6 shadow-lg">
                <div className="flex flex-col w-full h-full items-center gap-1">
                    <h1 className="text-3xl font-bold text-slate-900 mt-[10%]">Seja bem-vindo(a)</h1>
                    <p className="text-lg text-slate-700">Parece ser a sua primeira vez aqui</p>
                    <p className="text-lg text-center text-slate-700">Vamos a algumas perguntas para montar seu perfil</p>
                    
                    <div className="absolute bottom-20">
                    <button className="w-60 mb-2 bg-sky-600 py-3 font-semibold rounded-xl text-white hover:bg-sky-700 transition-all">
                        Continuar
                    </button>

                    <div className="flex justify-center gap-2">
                        <div className="w-3 h-3 bg-sky-600 rounded-full"></div>
                        <div className="w-3 h-3 border border-sky-600 rounded-full"></div>
                        <div className="w-3 h-3 border border-sky-600 rounded-full"></div>
                        <div className="w-3 h-3 border border-sky-600 rounded-full"></div>
                    </div>
                    </div>
                </div>

                <button
                    onClick={handleSkipClick}
                    className="absolute flex gap-2 items-center bottom-2 right-2 bg-slate-900 text-white rounded-lg px-4 py-2 hover:bg-slate-800 transition-all"
                >
                    Pular perguntas <ArrowBigRightDash size={20} />
                </button>
            </div>

            {isDropVisible && (
                <div className="absolute top-0 items-start inset-0 flex bg-slate-800 bg-opacity-70">
                    <div className="bg-slate-900 text-white p-4 rounded-xl shadow-2xl max-w-md w-full mx-6 mt-3">
                        <p className="text-md font-semibold text-center mb-2">
                            Quer realmente pular o questionário?
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={handleConfirmSkip}
                                className="bg-green-500 text-white py-0.5 px-5 rounded-lg transition-all hover:bg-green-600"
                            >
                                Sim
                            </button>
                            <button
                                onClick={handleCancelSkip}
                                className="bg-red-500 text-white py-0.5 px-5 rounded-lg transition-all hover:bg-red-600"
                            >
                                Não
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
