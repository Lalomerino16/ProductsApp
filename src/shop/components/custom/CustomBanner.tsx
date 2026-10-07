import { Button } from "@/components/ui/button"
import imgHero from "@/assets/hero.jpg"


export const CustomBanner = () => {



    return(
        <section className="flex  gap-[2%] border-2 border-white min-h-70">
            <div className="flex flex-col gap-10 w-[49%]">
                <div>
                    <p className="text-primary text-sm uppercase tracking-[0.2em]">Nueva temporada</p>
                    <h1 className="mt-4 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">Objetos bien hechos para la vida diaria</h1>
                </div>
                <div>
                    <p className="mt-5 max-w-md text-muted-foreground">
                        Electrónica, belleza y accesorios seleccionados uno por uno. Envíos rápidos y devoluciones sin complicaciones.
                    </p>
                </div>
                <div>
                    <Button>
                        Ver catálogo
                    </Button>
                </div>
            </div>
            <div className="w-[49%]">
                <div className="h-full flex flex-col">
                    <img 
                        src={imgHero}
                        alt="imgGero"
                        className="rounded-2xl shadow-elevated h-full"
                    />
                </div>
            </div>

        </section>
    )
}