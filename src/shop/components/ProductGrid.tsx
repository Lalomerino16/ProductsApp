import type { Product } from "../types/product.interface"
import { ProductCard } from "./ProductCard"

interface ProductGridProps{
    products: Product[]
}


export const ProductGrid = ({ products }: ProductGridProps) => {

    return(
        <section className="container mx-auto px-4">

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                
                {
                    products.map(product => (

                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.images[0]}
                            price={product.price}
                            description={product.description}
                            category={product.category}
                        />
                    ))
                }

                
            </section>
            
        </section>
    )


}