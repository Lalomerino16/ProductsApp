import { ShoppingBag } from "lucide-react";


interface CustomHeaderAuthProps{
    title:    string;
    subtitle: string;
}



export const CustomHeaderAuth = ({ title, subtitle }: CustomHeaderAuthProps) => {


    return(
        <div className="space-y-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-foreground text-background">
                <ShoppingBag />
            </div>

            <div className="space-y-2">
                <h1 className="text-3xl font-light tracking-tight text-foreground">
                    {title}
                </h1>

                <p className="text-muted-foreground">
                    {subtitle}
                </p>
            </div>
        </div>

    )

}