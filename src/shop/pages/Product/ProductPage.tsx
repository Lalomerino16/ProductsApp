
import { Badge } from "@/components/ui/badge"

import { ImageGallery } from "./components/ImageGallery"
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProductAction } from "@/shop/actions/getProduct.action";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { ProductDetails } from "./components/ProductDetails";
import { useCartStore } from "@/store/cart.store";


export const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const { id } = useParams();

    const { data: product } = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductAction(Number(id)),
        retry: false,
    });

    const addItem = useCartStore((state) => state.addItem);

    if (!product) {
        return <h3>Loading...</h3>;
    }
 
    const handleDecrease = () => {
        setQuantity((prev) => Math.max(prev - 1, 1));
    }

    const handleIncrease = () => {
        setQuantity((prev) => Math.min(prev + 1, product.stock));
    }
    
    const handleAddToCart = () => {
        
        addItem(
            {
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
                stock: product.stock,
            },
            quantity
        );
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1500);
    }

    return(
        <section className="container max-w-6xl mx-auto px-4 py-8 md:py-12">
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                <div className="lg:sticky lg:top-24 lg:self-start">
                    <ImageGallery
                        images={product.images}
                        alt={product.title}
                    />
                </div>


                <div className="space-y-8">
                    
                    <div className="space-y-6">
                        {/* Category & Brand */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="secondary" className="capitalize">
                                {product?.category}
                            </Badge>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground font-medium">
                                {product.brand}
                              
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            {product?.title}
                            
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-foreground">
                                {product.rating}
                            </span>
                            <span className="text-muted-foreground text-sm">(ver reseñas)</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-bold text-foreground">
                                ${product?.price.toFixed(2)}
                            </span>
                            
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center gap-2">
                            <div
                                className={`w-2 h-2 rounded-full ${
                                    product?.stock > 10 ? 'bg-green-500' : product?.stock > 0 ? 'bg-amber-500' : 'bg-destructive'
                                }`}
                            />
                            <span>{product?.availabilityStatus}</span>

                            {product?.stock <= 10 && product?.stock > 0 && (
                                <span className="text-sm text-muted-foreground">
                                    — Solo quedan {product?.stock} unidades
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                            {product?.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {product?.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="capitalize text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Addd to cart */}
                    <div className="space-y-4 pt-6 border-t border-border">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-foreground">Cantidad:</span>
                        
                            <div className="flex items-center border border-border rounded-xl overflow-hidden">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-10 w-10 rounded-none hover:bg-secondary"
                                    onClick={handleDecrease}
                                    disabled={quantity <= 1}
                                >
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-12 text-center font-semibold text-foreground">
                                    {quantity}
                                </span>
                                <Button
                                    onClick={handleIncrease}
                                    variant='ghost'
                                    size='icon'
                                    className="h-10 w-10 rounded-none hover:bg-secondary"
                                    disabled={quantity >= product.stock}
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <Button
                            onClick={handleAddToCart}
                            disabled={product?.stock === 0}
                            className="w-full h-14 text-base font-semibold rounded-xl transition-all duration-300"
                        >
                            {isAdded ? (
                                <>
                                    <Check className="mr-2 h-5 w-5" />
                                    ¡Añadido al carrito!
                                </>
                            ) : (
                                <>
                                    <ShoppingBag className="mr-2 h-5 w-5" />
                                    Añadir al carrito
                                </>
                            )}
                        </Button>
                        {product?.minimumOrderQuantity > 1 && (
                            <p className="text-xs text-muted-foreground text-center">
                                Pedido mínimo: {product?.minimumOrderQuantity} unidades
                            </p>
                        )}    
                    </div>

                    {/* ProductDetail */}
                    <ProductDetails 
                        shippingInformation={product.shippingInformation}
                        returnPolicy={product.returnPolicy}
                        warrantyInformation={product.warrantyInformation}
                        sku={product.sku}
                        weight={product.weight}
                        dimensions={product.dimensions}
                    />

                </div>
            </div>



            <div className="mt-16 pt-12 border-t border-border">
                {/* <ReviewsSection reviews={product.reviews} averageRating={product.rating} /> */}
            </div>

        </section>
    )
}