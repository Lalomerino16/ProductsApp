import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { CustomHeaderAuth } from "../components/custom/CustomHeaderAuth";


import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowRight, Eye, EyeOff, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormValues } from "../schemas/register.schema";

export const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors }} = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema)
    }); 

    const handleNavigateLoginPage = () => {
        navigate("/auth/login");
    }

    const handleRegister = () => {
        console.log("Registro enviado")
    }

    return(
        <section className="w-full max-w-md space-y-8">

            <CustomHeaderAuth 
                title="Únete a nosotros"
                subtitle="Regístrate para comenzar a disfrutar de todas las funciones de nuestra tienda"
            />

            <form 
                onSubmit={handleSubmit(handleRegister)}
                className="flex flex-col gap-6"
            >
                <div className="flex flex-col gap-3">
                    <Label htmlFor="name">Nombre:</Label>
                    <Input
                        id="name" 
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className={`pl-10 pr-10 h-12 ${errors.name ? "border-red-500 focus:border-red-500" : "border-border/50 focus:border-foreground" }`}
                        {...register('name')}
                    />
                    {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                </div>
                <div className="flex flex-col gap-3">
                    <Label htmlFor="lastname">Apellido:</Label>
                    <Input 
                        id="lastname"
                        type="text"
                        placeholder="Ingesa tu apellido"
                        className={`pl-10 pr-10 h-12 ${errors.lastName ? "border-red-500 focus:border-red-500" : "border-border/50 focus:border-foreground"}`}
                        {...register('lastName')}
                    />
                    {errors.lastName && (
                        <p className="text-sm text-red-500">{errors.lastName.message}</p>
                    )}
                </div>
                <div className="flex flex-col gap-3">
                    <Label>Nombre usuario:</Label>
                    <Input
                        type="text" 
                        placeholder="Ingesa un nombre de usuario"
                        className={`pl-10 pr-10 h-12 ${errors.username ? "border-red-500 focus:border-red-500" : "border-border/50 focus:border-foreground"}`}
                        {...register('username')}
                    />
                    {errors.username  && (
                        <p className="text-sm text-red-500">{errors.username.message}</p>
                    )}
                </div>
                
                <div className="flex flex-col gap-3">
                    <Label htmlFor="password" className="text-sm font-medium">
                        Contraseña: 
                    </Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Ingresa la contraseña"
                            {...register('password')}
                            className="pl-10 pr-10 h-12 bg-background border-border/50 focus:border-foreground transition-colors"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                            {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                            ) : (
                                <Eye className="h-4 w-4" />
                            )}
                        </button>
                        
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <Label className="flex">
                        Correo:
                    </Label>
                    <Input 
                        type="email"
                        placeholder="Ingresa tu correo electronico"
                        className={`pl-10 pr-10 h-12 ${errors.email ? "border-red-500 focus:border-red-500" : "border-border/50 focus:border-foreground"}`}
                        {...register('email')}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                </div>

                <Button
                    type="submit"
                    className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 transition-all group"
                >
                    Agregar
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

            </form>

            <hr className=" h-2"/>
            
            <p className="text-center text-sm text-muted-foreground">
                ¿Ya tienes una cuenta?{" "}
                <button
                    type="button"
                    className="text-foreground hover:underline underline-offset-4 font-medium cursor-pointer"
                    onClick={handleNavigateLoginPage}
                >
                    Iniciar sesion
                </button>
            </p>

        </section>
    );
}