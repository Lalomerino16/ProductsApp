import product1 from "../../public/assets/product-backpack.jpg";
import product2 from "../../public/assets/product-candle.jpg";
import product3 from "../../public/assets/product-earbuds.jpg";
import product4 from "../../public/assets/product-headphones.jpg";
import product5 from "../../public/assets/product-speaker.jpg";
import product6 from "../../public/assets/product-sunglasses.jpg";
import product7 from "../../public/assets/product-vase.jpg";

interface imagesProps{
    id: number;
    image: string;
}


export const imagesCarousel: imagesProps[] = [
    {
        id: 1,
        image: product1,
    },
    {
        id: 2,
        image: product2,
    },
    {
        id: 3,
        image: product3,
    },
        {
        id: 4,
        image: product4,
    },
        {
        id: 5,
        image: product5,
    },
        {
        id: 6,
        image: product6,
    },
    {
        
        id: 7,
        image: product7,
    },

];