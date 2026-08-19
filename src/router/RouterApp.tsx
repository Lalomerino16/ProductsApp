import { createBrowserRouter, Navigate } from "react-router";
import { NotAuthenticatedRoute } from "../components/custom/ProtectedRoutes";
import { AuthLayout } from "../layouts/AuthLayout";
import { HomePage } from "@/shop/pages/HomePage/HomePage";
import { ShoppLayout } from "@/shop/layouts/ShoppLayout";
import { ProductPage } from "@/shop/pages/Product/ProductPage";
import { LoginPage } from "@/auth/pages/LoginPage";
import { RegisterPage } from "@/auth/pages/RegisterPage";



export const RouterApp = createBrowserRouter([
    {   
        path: '/',
        element: <ShoppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'product/:id',
                element: <ProductPage />
            }
        ]
        
    },
        
    {
        path: '/auth',
        element: 
            <NotAuthenticatedRoute>
                <AuthLayout />
            </NotAuthenticatedRoute>,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    }
])