import { RouterProvider } from "react-router";
import { RouterApp } from "./router/RouterApp";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()


export const ShoppApp = () =>  {
    
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={RouterApp}/>

    </QueryClientProvider>
  )



}