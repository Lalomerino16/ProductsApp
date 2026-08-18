import { Input } from "@/components/ui/input"
import { Filter, Search } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Category } from "../types/product.interface";
import { useRef,  type KeyboardEvent} from "react";
import { useSearchParams } from "react-router";

const categories:  Category[] =[
    "beauty", "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
]



export const FilterProducts = () => {

    const [searchParams, setSearchParams ] = useSearchParams();
    const inpuRef = useRef<HTMLInputElement>(null);
    
    const handleCategoryChange = (category: Category) => {
        searchParams.set('category', category);
        searchParams.set('page', '1');
        setSearchParams(searchParams);
    }

    const handleKeySearch = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;

        const query = inpuRef.current?.value?.trim();
        const newSearchParams = new URLSearchParams(searchParams);

        if (!query) {
            newSearchParams.delete('query');
        } else {
            newSearchParams.set('query', query);
            newSearchParams.set('page', '1');
        }

        setSearchParams(newSearchParams);
    };


    return(
        <section className="py-8 border-border sticky top-16 z-40 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Buscar productos..."
                            className="pl-10"
                            ref={inpuRef}
                            onKeyDown={handleKeySearch}
                        />
                    </div>

                   
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                        <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
                        <Select onValueChange={handleCategoryChange}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Seleciona una opcion" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Categories</SelectLabel>
                                    {categories.map((category) => (
                                        <SelectItem value={category} key={category}>{category}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        
                    </div>
                </div>
            </div>
      </section>
    )
}