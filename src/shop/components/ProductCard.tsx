import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart.store";
import { ShoppingCart, Check } from 'lucide-react';
import { useNavigate } from "react-router";


interface ProductCardProps{
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    category: string;
}


export const ProductCard = ({id, title, image, price, description, category }: ProductCardProps) => {

    const navigate = useNavigate();
    const addItem = useCartStore((state) => state.addItem);
    const items = useCartStore((state) => state.items);
    const isInCart = items.some((item) => item.id === id);

    const handleProductDetail = () => {
        navigate(`/product/${id}`)
    }

    const handleAddToCart = () => {
        addItem({ 
            id,
            title,
            price,
            thumbnail: image,
            quantity: 1,
        });
        console.log(useCartStore.getState().items);
    }

    
    return(
        <div className="group bg-background dark:border border-border rounded-lg overflow-hidden hover-lift shadow-xl">
            <div className="aspect-square overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="p-6">
                <span className="text-sm font-medium">{category}</span>
                <h3 className="font-display text-xl font-semibold mt-1 mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${price}</span>

                    <div className="flex items-center gap-3">
                        <Button 
                            variant='outline'
                            onClick={handleAddToCart}
                            disabled={isInCart}
                        >   
                            {isInCart ? (
                                <Check className="text-green-600" />    
                            ): (
                                
                                <ShoppingCart />
                            )}
                        </Button>
                        <Button 
                            variant='outline'
                            onClick={handleProductDetail}
                        >
                            Ver detalle
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


