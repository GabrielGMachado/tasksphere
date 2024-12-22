export function Name() {
    return <input 
        type="text" 
        placeholder="Digite seu nome" 
        className="border border-slate-700/60 rounded-xl w-full p-4 py-3 outline-none" />;
  }
  
  export function Email() {
    return <input 
        type="email" 
        placeholder="Digite seu e-mail" 
        className="border border-slate-700/60 rounded-xl w-full p-4 py-3 outline-none" />;
  }
  
  export function Passoword() {
    return <input 
        type="password" 
        placeholder="Digite sua senha" 
        className="border border-slate-700/60 rounded-xl w-full p-4 py-3 outline-none" />;
  }
  
  export function ConfirmPassword() {
    return <input 
        type="password" 
        placeholder="Confirme sua senha" 
        className="border border-slate-700/60 rounded-xl w-full p-4 py-3 outline-none" />;
  }

  export function Submit() {
    return <input 
        type="submit" 
        value="Continuar"
        className="border text-white font-medium bg-slate-900 rounded-xl w-full p-2 py-3" />;
  }



  