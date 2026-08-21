import { useAuthStore } from "@/auth/store/auth.store";
import { ChevronDown, Grid2X2, X } from "lucide-react";




export const CustomAside = () => {

    const user = useAuthStore((state) => state.user);

    return(
        <>
            <aside className={`inset-y-0 left-0 z-40 flex w-68 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0`} >
                
                <div className="flex h-22 items-center justify-between border-b border-slate-100 px-6">
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                            <Grid2X2 className="size-5" strokeWidth={2.5} />
                        </div>
                        <div>
                            <p className="text-[15px] font-bold tracking-tight text-slate-900">Nexora</p>
                            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">Admin panel</p>
                        </div>
                    </div>
                    <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden" 
                     aria-label="Cerrar menú"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                <nav className="flex-1 space-y-8 overflow-y-auto px-4 py-7">
                    <div>
                        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Principal</p>
                        <div className="space-y-1">
                            {/* {navigation.map(({ label, icon: Icon, active, badge }) => (
                                <a href="#" key={label} className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-semibold transition-colors ${active ? 'bg-slate-900 text-white shadow-[0_5px_14px_-8px_rgba(15,23,42,0.8)]' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
                                <Icon className={`size-[18px] ${active ? 'text-white' : 'text-slate-400 group-hover:text-slate-700'}`} strokeWidth={active ? 2.2 : 1.9} />
                                <span className="flex-1">{label}</span>
                                {badge && <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${active ? 'bg-white/15 text-white' : 'bg-amber-100 text-amber-700'}`}>{badge}</span>}
                                </a>
                            ))} */}
                        </div>
                    </div>
                    <div>
                        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Administración</p>
                        <div className="space-y-1">
                            {/* {management.map(({ label, icon: Icon }) => (
                                <a href="#" key={label} className="group flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-semibold text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900">
                                <Icon className="size-[18px] text-slate-400 group-hover:text-slate-700" strokeWidth={1.9} />
                                {label}
                                </a>
                            ))} */}
                        </div>
                    </div>
               
                </nav>

                <div className="border-t border-slate-100 p-4">
                    <div className="flex items-center gap-3 rounded-xl p-2">
                        <div 
                            className="flex size-9 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">MG</div>
                        <div className="min-w-0 flex-1">
                            <strong className="truncate text-xs font-bold text-slate-800">{user?.firstName} {user?.lastName}</strong>
                            <p className="truncate text-[11px] text-slate-400">{user?.role}</p></div>
                        <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100" aria-label="Opciones de perfil">
                            <ChevronDown className="size-4" />
                        </button>
                    </div>
                </div>

            </aside>
        </>
    );
}