import { Menu } from "lucide-react";

export default function () {
    return (
        <nav className="w-full  flex items-center justify-between p-3 px-4">
            <Menu className="text-white"/>
            <h1 className="text-white text-2xl font-bold ">TaskSphere</h1>
        </nav>
    );
}