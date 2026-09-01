import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { loginSchema, type LoginFormValues } from "../schemas/login.schema";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { Eye, EyeOff, UserRound , Lock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { CustomHeaderAuth } from "../components/custom/CustomHeaderAuth";



export const LoginPage = () => {
    
    const [showPassword, setShowPassword] = useState(false);
    const loginMutation = useLogin();
    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState: { errors  },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const handleRegisterPage = () => {
        navigate(`/auth/register`)
    }

    const handleLogin = (data: LoginFormValues) => {
        loginMutation.mutate(data);
    };




    return (
        <div className="w-full max-w-md space-y-8">

            <CustomHeaderAuth 
                title=" Bienvenido de nuevo"
                subtitle="Ingresa tus credenciales para acceder a tu cuenta"
            />

            {/* Form */}
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                {/* username Field */}
                <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium">
                        Nombre de usuario
                    </Label>
                    <div className="relative">
                        <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="username"
                            type="text"
                            placeholder="Ingresa el nombre de usuario"
                            {...register('username')}
                            className={`pl-10 h-12 bg-background transition-colors ${
                                errors.username
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-border/50 focus:border-foreground"
                            }`}
                        />
                    </div>
                    {errors.username && ( 
                        <p className="text-sm text-red-500">{errors.username.message}</p>    
                    )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-sm font-medium">
                            Contraseña
                        </Label>
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Ingresa la contraseña"
                            {...register('password')}
                                className={`pl-10 h-12 bg-background transition-colors ${
                                errors.username
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-border/50 focus:border-foreground"
                            }`}
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
                    {errors.password && (
                        <p className="text-sm text-red-500">{errors.password.message}</p>
                        
                    )}
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={loginMutation.isPending}
                    className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 transition-all group"
                >
                    {loginMutation.isPending ? (
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                            Iniciando sesión...
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            Iniciar sesión
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    )}
                </Button>
            </form>

            {/* Divider */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border/50" />
                </div>
                <div className="relative flex justify-center text-xs"></div>
            </div>

            {/* Footer */}
            <p className="text-center text-sm text-muted-foreground">
                ¿No tienes una cuenta?{" "}
                <button
                    type="button"
                    className="text-foreground hover:underline underline-offset-4 font-medium cursor-pointer"
                    onClick={handleRegisterPage}
                >
                    Crear cuenta
                </button>
            </p>
        </div>
    );
};
