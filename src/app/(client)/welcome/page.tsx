'use client'

import { useState } from "react";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";

export default function Home() {
    const [isDropVisible, setDropVisible] = useState(false);

    const handleSkipClick = () => {
        setDropVisible(true); 
    };

    const handleConfirmSkip = () => {
        setDropVisible(false);
    };

    const handleCancelSkip = () => {
        setDropVisible(false);
    };

    return (
        <div className="bg-slate-900 h-screen w-full flex flex-col relative">
            <div className="flex flex-col items-center text-white mt-20 flex-grow">
                <Image src="/logo.png" width={80} height={80} alt="Logo TaskSphere" />
                <div className="flex flex-col items-center mt-2">
                    <h1 className="text-3xl">TaskSphere</h1>
                    <p className="text-zinc-400">Seu aplicativo de tarefas</p>
                </div>
            </div>

            <div className="absolute bottom-0 max-w-md w-full h-[60%] bg-white rounded-tr-xl rounded-tl-xl p-5">
                <div className="flex flex-col w-full h-full items-center gap-2">
                    <h1 className="text-3xl">Seja bem-vindo(a)</h1>
                    <p className="text-xl">Parece ser a sua primeira vez aqui</p>
                    <p className="text-xl text-center">Vamos à algumas perguntas para montar seu perfil</p>
                    
                    <button className="mt-[50%] w-full bg-sky-600 py-3 font-semibold rounded-xl">
                        Continuar
                    </button>
                    <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 bg-sky-600 rounded-full"></div>
                        <div className="w-2.5 h-2.5 border border-sky-600 rounded-full"></div>
                        <div className="w-2.5 h-2.5 border border-sky-600 rounded-full"></div>
                        <div className="w-2.5 h-2.5 border border-sky-600 rounded-full"></div>
                    </div>
                </div>

                <button
                    onClick={handleSkipClick}
                    className="absolute flex gap-2 bottom-5 right-5 bg-slate-900 text-white rounded-lg px-3 py-1.5"
                >
                    Pular perguntas <ArrowBigRightDash />
                </button>
            </div>


            {isDropVisible && (
                <div className="absolute inset-0 flex justify-center items-center bg-slate-800 bg-opacity-70">
                    <div className="bg-white text-white p-4 rounded-lg shadow-lg max-w-lg w-full mx-4">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-xl text-center text-gray-900 mb-2">
                                Você tem certeza que deseja pular o questionário?
                            </p>
                            <div className="flex gap-6 mt-4">
                                <button
                                    onClick={handleConfirmSkip}
                                    className="bg-green-500 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-green-600"
                                >
                                    Sim
                                </button>
                                <button
                                    onClick={handleCancelSkip}
                                    className="bg-red-500 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-red-600"
                                >
                                    Não
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
