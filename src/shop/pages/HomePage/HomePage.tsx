import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/custom/CustomJumbotron";
import { FilterProducts } from "@/shop/components/FilterProducts";
import { ProductGrid } from "@/shop/components/ProductGrid"
import { useProducts } from "@/shop/hooks/useProducts"







export const HomePage = () => {

    const { data, totalPages  } = useProducts();

    return(
        <main>
            <CustomJumbotron 
                title="Todos los productos"
                subtitle="Explora la variedad de productos que tenemos para ti todos los dias."
            />
            
            <FilterProducts />
            
            <ProductGrid products={data?.products || []} />

            <CustomPagination totalPages={totalPages} />

        </main>
    )
}