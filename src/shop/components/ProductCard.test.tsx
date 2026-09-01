import { render, screen } from "@testing-library/react";
import { describe, test, expect } from 'vitest'
import { ProductCard } from "./ProductCard";
import { MemoryRouter, Route, Routes, } from "react-router";
import userEvent from "@testing-library/user-event";
import { useCartStore } from "@/store/cart.store";



describe('ProductCard', () => {
   
    test("text view detail", () => {

        render(    
            <MemoryRouter>
                <ProductCard
                    id={0}
                    title="Ice Cream"
                    image=""
                    price={5.49}
                    description="Creamy and delicious ice cream, available in various flavors for a delightful treat."
                    category="groceries"
                />
            </MemoryRouter>
        )

        const textBtn = screen.getByRole("button", {
            name: "Ver detalle"
        })

        expect(textBtn).toBeInTheDocument();

    });

    test("Muestra titulo producto", ()=> {

        render(
            <MemoryRouter>
                <ProductCard id={0} title={"Ice Cream"} image={""} price={0} description={""} category={""} />
            </MemoryRouter>
        )

        const title = screen.getByText("Ice Cream");

        expect(title).toBeInTheDocument();
    });

    test("Muestra la descripcion del product", () => {
        
        render(
            <MemoryRouter>
                <ProductCard id={0} title={""} image={""} price={0} description={"Creamy and delicious ice cream, available in various flavors for a delightful treat."} category={""} />
            </MemoryRouter>
        )
        
    
        const description = screen.getByText("Creamy and delicious ice cream, available in various flavors for a delightful treat.");
    
        
        expect(description).toBeInTheDocument();
    
    });

    test("Muestra precio producto", () => {

        render(
            <MemoryRouter>
                <ProductCard
                    id={0}
                    title="Ice Cream"
                    image=""
                    price={5.49}
                    description="Creamy and delicious ice cream, available in various flavors for a delightful treat."
                    category="groceries"
                />
            </MemoryRouter>
        );

        const price = screen.getByText("$5.49");

        expect(price).toBeInTheDocument();
    });


    test("Comprobando si existe el button: Ver mas", () => {
        render(
            <MemoryRouter>
                <ProductCard 
                    id={0}
                    title="Ice Cream"
                    image=""
                    price={5.49}
                    description="Creamy and delicious ice cream, available in various flavors for a delightful treat."
                    category="groceries"
                
                />
            </MemoryRouter>
        )

        const existButton = screen.getByRole("button", {
            name: "Ver detalle"
        });

        expect(existButton).toBeInTheDocument();
    });


    test("navega al detalle del producto al hacer click en Ver detalle", async() => {

        const user = userEvent.setup();
            
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route 
                        path="/"
                        element={
                            <ProductCard 
                                id={1}
                                title="Ice Cream"
                                image=""
                                price={5.49}
                                description="Creamy ice cream"
                                category="groceries"
                            />
                        }
                    />
                    <Route
                    path="/product/:id"
                    element={<div>Ver detalle</div>}
                />
                </Routes>
            </MemoryRouter>
        )

        const button = screen.getByRole("button", {
            name: "Ver detalle"
        });

        await user.click(button);

        expect(
            screen.getByText("Ver detalle")
        ).toBeInTheDocument();

    });

    test("Add to cart", async() =>{
        const user = userEvent.setup();


        render(
            <MemoryRouter>
                <ProductCard
                    id={1}
                    title="Ice Cream"
                    image=""
                    price={5.49}
                    description="Creamy ice cream"
                    category="groceries"
                />
            </MemoryRouter>
        );

        const buttonCart = screen.getByRole("button", {
            name: "Agregar al carrito"
        });

        await user.click(buttonCart);

        const items = useCartStore.getState().items;

        expect(items).toHaveLength(1);

        expect(items[0]).toEqual({
            id: 1,
            title: "Ice Cream",
            price: 5.49,
            thumbnail: "",
            quantity: 1,
        });

    });


    test("deshabilita el botón si el producto ya está en el carrito", async () => {
        

        useCartStore.getState().addItem({
            id: 1,
            title: "Ice Cream",
            price: 5.49,
            thumbnail: "",
            quantity: 1,

        })

        render(
            <MemoryRouter>
                <ProductCard 
                    id={1}
                    title="Ice Cream"
                    image=""
                    price={5.49}
                    description="Creamy ice cream"
                    category="groceries"
                />
            </MemoryRouter>
        )

        const buttonAddCart = screen.getByRole("button", {
            name: 'Agregar al carrito'
        })

        expect(buttonAddCart).toBeDisabled();

    });




});