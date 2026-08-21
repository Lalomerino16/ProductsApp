import { createBrowserRouter, Navigate } from "react-router";
import { AdminRoute, AuthenticatedRoute, PublicOnlyRoute } from "../components/custom/ProtectedRoutes";
import { AuthLayout } from "../layouts/AuthLayout";
import { HomePage } from "@/shop/pages/HomePage/HomePage";
import { ShoppLayout } from "@/shop/layouts/ShoppLayout";
import { ProductPage } from "@/shop/pages/Product/ProductPage";
import { LoginPage } from "@/auth/pages/LoginPage";
import { RegisterPage } from "@/auth/pages/RegisterPage";
import { DashboardAdminLayout } from "@/dashboard-admin/layouts/DashboardAdminLayout";
import { DashboardPage } from "@/dashboard-admin/pages/DashboardPage";



export const RouterApp = createBrowserRouter([
    {   
        path: '/',
        
        element: <AuthenticatedRoute>
            <ShoppLayout />
        </AuthenticatedRoute>, 
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
        element: <PublicOnlyRoute>
            <AuthLayout />
        </PublicOnlyRoute>, 
            
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
    }, 
    {
        path: '/admin',
        element: <AdminRoute>
            <DashboardAdminLayout />
        </AdminRoute>,
        children: [
            {
                index: true,
                element: <DashboardPage />
            }
        ]
    }
    
])