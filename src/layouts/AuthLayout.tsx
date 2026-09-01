import { ArticlesCarousel } from "@/auth/components/custom/ArticlesCarousel"
import { AuthCardContainer } from "@/auth/layouts/AuthCardContainer"
import { Outlet } from "react-router"


 
export const AuthLayout = () => {

    return(
        <main
            className="h-screen"
        >          
            <section className="flex h-full">
                <div className="flex-1">
                    <AuthCardContainer>
                        <Outlet />
                    </AuthCardContainer>
                </div>
                <div className="hidden lg:flex flex-1 bg-muted/30 items-center justify-center relative overflow-hidden">
                    <ArticlesCarousel />
                </div>
            </section>
        </main>
    )
}