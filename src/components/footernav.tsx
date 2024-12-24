'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ChartBar, SquareCheckBig, Home } from "lucide-react";
import { FaRegUser } from "react-icons/fa";


interface NavProps {
    icon: React.ReactNode;
    text: string;
    href: string;
}

const NavButton: React.FC<NavProps> = ({ icon, text, href }) => {
    const pathname = usePathname();
    const isActivy = pathname === href;
    
    return (
        <Link href={href}>
            <button className="flex flex-col items-center group ">
                <div className={`flex items-center justify-center w-8 h-8 transition-all rounded-full ${isActivy ? "bg-slate-800" : ""}`}>
                    {icon}
                </div>
                <p className=" text-[14px] text-gray-300 group-hover:text-white transition-all">
                    {text}
                </p>
            </button>
        </Link>
    );
};

export default function Navbar() {
    return (
        <nav className="bg-slate-900 max-w-md text-white absolute bottom-0 w-full flex items-center justify-around p-2 rounded-t-xl shadow-lg">
            <NavButton icon={<Home className="w-5 h-5"/>} text="Início" href="/dashboard" />
            <NavButton icon={<SquareCheckBig className="w-5 h-5" />} text="Tarefas" href="/tasks" />
            <NavButton icon={<ChartBar className="w-5 h-5" />} text="Estatísticas" href="/statistics" />
            <NavButton icon={<FaRegUser className="w-5 h-5" />} text="Mais" href="/config" />
        </nav>
    );
}
