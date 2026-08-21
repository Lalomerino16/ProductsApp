import { render, screen } from "@testing-library/react";
import { describe, test, expect } from 'vitest'
import { ProductCard } from "./ProductCard";

describe('ProductCard', () => {
    test("muestra el título del producto", () => {
        // ✅ Usamos props individuales como espera el componente
        render(
            <ProductCard 
                id={1}
                title="Camiseta Negra"
                price={29.99}
                image="/images/camiseta.jpg"
                description="Camiseta de algodón 100%"
                category="Ropa"
            />
        );
        
        expect(screen.getByText("Camiseta Negra")).toBeInTheDocument();
        expect(screen.getByText("$29.99")).toBeInTheDocument();
        expect(screen.getByText("Ropa")).toBeInTheDocument();
    });

    test("muestra la descripción del producto", () => {
        render(
            <ProductCard 
                id={1}
                title="Camiseta Negra"
                price={29.99}
                image="/images/camiseta.jpg"
                description="Camiseta de algodón 100%"
                category="Ropa"
            />
        );
        
        expect(screen.getByText("Camiseta de algodón 100%")).toBeInTheDocument();
    });

    test("la imagen tiene el atributo alt correcto", () => {
        render(
            <ProductCard 
                id={1}
                title="Camiseta Negra"
                price={29.99}
                image="/images/camiseta.jpg"
                description="Camiseta de algodón 100%"
                category="Ropa"
            />
        );
        
        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("src", "/images/camiseta.jpg");
        expect(img).toHaveAttribute("alt", "Camiseta Negra");
    });
});