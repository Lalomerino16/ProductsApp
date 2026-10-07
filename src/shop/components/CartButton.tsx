import { ShoppingBag } from 'lucide-react';
import { PiShoppingCartThin } from 'react-icons/pi';
import { CartProductList } from './CartProductList';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart.store';
import { Link } from 'react-router';

export const CartButton = () => {
    const items = useCartStore((state) => state.items);
    const totalItems = useCartStore((state) => state.totalItems());
    const total = useCartStore((state) => state.total());
    const clearCart = useCartStore((state) => state.clearCart);


   

    return (
        <Sheet>
            <SheetTrigger asChild>
                <button
                    type="button"
                    aria-label="Abrir carrito"
                    className="relative cursor-pointer"
                >
                    <PiShoppingCartThin className="h-5 w-5" />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            {totalItems}
                        </span>
                    )}
                </button>
            </SheetTrigger>

            <SheetContent className="flex flex-col dark:bg-background">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5" />
                        Tu carrito ({totalItems})
                    </SheetTitle>
                </SheetHeader>

                {totalItems === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                        <div className="flex size-14 items-center justify-center rounded-full bg-muted">
                            <ShoppingBag className="size-6 text-muted-foreground" aria-hidden="true" />
                        </div>
                        <p className="text-sm font-medium">Tu carrito está vacío</p>
                        <p className="text-sm text-muted-foreground text-pretty">
                            Añade productos para verlos aquí.
                        </p>
                    </div>
                ) : (
                    <>
                        <CartProductList cartProducts={items} />

                        <footer className="border-t border-border px-6 py-5">
                            <dl className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <dt className="text-muted-foreground">Subtotal</dt>
                                    <dd className="tabular-nums">${total.toFixed(2)}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-muted-foreground">Envío</dt>
                                    <dd className="tabular-nums">Gratis</dd>
                                </div>
                                <div className="flex justify-between border-t border-border pt-2 text-base font-semibold">
                                    <dt>Total</dt>
                                    <dd className="tabular-nums">${total.toFixed(2)}</dd>
                                </div>
                            </dl>

                            <div className="flex flex-col gap-3 mt-4">
                                <Button
                                    onClick={clearCart}
                                    className="text-sm w-full h-11"
                                    variant="outline"
                                >
                                    Vaciar carrito
                                </Button>
                                <Button 
                                    size="lg" 
                                    className="h-11 w-full text-sm"
                                    
                                >
                                    <Link to="/checkout">Finalizar compra</Link>
                                </Button>
                            </div>
                        </footer>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
};