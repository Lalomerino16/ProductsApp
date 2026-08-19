import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { loginSchema, type LoginFormValues } from "../schemas/login.schema";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";

import { Eye, EyeOff, UserRound , Lock, ArrowRight } from "lucide-react";
import { ArticlesCarousel } from "../components/custom/ArticlesCarousel";



export const LoginPage = () => {
    
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const loginMutation = useLogin();

    const {
        register,
        handleSubmit,
        formState: { errors  },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });



    const handleLogin = async (data: LoginFormValues) => {
        loginMutation.mutate(data, {
            onSuccess: () => {
                toast.success("¡Bienvenido!");
                navigate("/");
            },
            onError: () => {
                toast.error('Credenciales incorrectas');
            }
        })
    };

    return (
        <div className="min-h-screen flex">
            {/* Left side - Form */}
                <div className="flex-1 flex items-center justify-center p-8 lg:p-16 border-2">
                    <div className="w-full max-w-md space-y-8">
                        {/* Header */}
                        <div className="space-y-2">
                            <h1 className="text-3xl font-light tracking-tight text-foreground">
                                Bienvenido de nuevo
                            </h1>
                            <p className="text-muted-foreground">
                                Ingresa tus credenciales para acceder a tu cuenta
                            </p>
                        </div>

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
                                        placeholder="username"
                                        {...register('username')}
                                        className="pl-10 h-12 bg-background border-border/50 focus:border-foreground transition-colors"
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
                                    <button
                                        type="button"
                                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                        ¿Olvidaste tu contraseña?
                                    </button>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        {...register('password')}
                                        className="pl-10 pr-10 h-12 bg-background border-border/50 focus:border-foreground transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
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
                            <div className="relative flex justify-center text-xs">
                            <span className="bg-background px-4 text-muted-foreground">
                                o continúa con
                            </span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-4">
                            <Button
                            type="button"
                            variant="outline"
                            className="h-12 border-border/50 hover:bg-muted/50 transition-colors"
                            onClick={() => toast.info("Funcionalidad disponible próximamente")}
                            >
                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                                <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Google
                            </Button>
                            <Button
                            type="button"
                            variant="outline"
                            className="h-12 border-border/50 hover:bg-muted/50 transition-colors"
                            onClick={() => toast.info("Funcionalidad disponible próximamente")}
                            >
                            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            GitHub
                            </Button>
                        </div>

                        {/* Footer */}
                        <p className="text-center text-sm text-muted-foreground">
                            ¿No tienes una cuenta?{" "}
                            <button
                            type="button"
                            className="text-foreground hover:underline underline-offset-4 font-medium"
                            onClick={() => toast.info("Página de registro disponible próximamente")}
                            >
                            Crear cuenta
                            </button>
                        </p>
                    </div>
                </div>

            {/* Right side - Visual */}
            <div className="hidden lg:flex flex-1 bg-muted/30 items-center justify-center p-16 relative overflow-hidden">
               <ArticlesCarousel />
            </div>
        </div>
    );
};
