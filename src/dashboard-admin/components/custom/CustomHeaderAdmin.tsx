import { Bell, Menu, Search } from "lucide-react"



export const CustomHeaderAdmin = () => {
    return (
        <header className="flex flex-1 h-22 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
            <div className="flex items-center gap-3">
                <button 
                    className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden" aria-label="Abrir menú"
                >
                    <Menu className="size-5" />
                </button><div><p className="text-xs font-medium text-slate-400">Miércoles, 20 de agosto de 2026</p><h1 className="mt-1 text-xl font-bold tracking-tight">Resumen general</h1></div>
            </div>
            <div className="flex items-center gap-2">
                <button className="hidden rounded-lg border border-slate-200 p-2.5 text-slate-400 hover:bg-slate-50 sm:block" aria-label="Buscar">
                    <Search className="size-4" />
                </button>
                <button className="relative rounded-lg border border-slate-200 p-2.5 text-slate-400 hover:bg-slate-50" aria-label="Notificaciones"><Bell className="size-4" />
                    <span className="absolute right-2 top-2 size-1.5 rounded-full bg-amber-400" />
                </button>
            </div>
        </header>
    )
}


