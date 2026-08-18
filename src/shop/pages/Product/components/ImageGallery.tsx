import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageGalleryProps{
    images: string[];
    alt: string;
}


export const ImageGallery = ({ images,  alt }: ImageGalleryProps) => {
    
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const handlePrevious = () => {
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    return(
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative group aspect-square bg-secondary/30 rounded-2xl overflow-hidden">
                <img
                    src={images[selectedIndex]}
                    alt={`${alt} - Image ${selectedIndex + 1}`}
                    className={cn(
                        "w-full h-full object-contain transition-transform duration-500 cursor-zoom-in",
                        isZoomed && "scale-150 cursor-zoom-out"
                    )}
                    onClick={() => setIsZoomed(!isZoomed)}
                />
                
                {/* Navigation Arrows */}
                {images.length > 1 && (
                <>
                    <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background shadow-lg"
                    onClick={handlePrevious}
                    >
                    <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background shadow-lg"
                    onClick={handleNext}
                    >
                    <ChevronRight className="h-5 w-5" />
                    </Button>
                </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-muted-foreground">
                {selectedIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-3 justify-center">
                {images.map((image, index) => (
                    <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={cn(
                        "w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 bg-secondary/30",
                        selectedIndex === index
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-transparent hover:border-muted-foreground/30"
                    )}
                    >
                    <img
                        src={image}
                        alt={`${alt} thumbnail ${index + 1}`}
                        className="w-full h-full object-contain"
                    />
                    </button>
                ))}
                </div>
            )}
        </div>
    )
}