import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Truck, RotateCcw, Shield, Package } from 'lucide-react';

interface ProductDetailsProps {
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
}

export const ProductDetails = ({
  shippingInformation,
  returnPolicy,
  warrantyInformation,
  sku,
  weight,
  dimensions,
}: ProductDetailsProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="shipping" className="border-border">
        <AccordionTrigger className="hover:no-underline py-4">
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Información de envío</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground pb-4">
          {shippingInformation}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="returns" className="border-border">
        <AccordionTrigger className="hover:no-underline py-4">
          <div className="flex items-center gap-3">
            <RotateCcw className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Política de devoluciones</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground pb-4">
          {returnPolicy}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="warranty" className="border-border">
        <AccordionTrigger className="hover:no-underline py-4">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Garantía</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground pb-4">
          {warrantyInformation}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="specs" className="border-b-0">
        <AccordionTrigger className="hover:no-underline py-4">
          <div className="flex items-center gap-3">
            <Package className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Especificaciones</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">SKU:</span>
              <p className="font-medium text-foreground">{sku}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Peso:</span>
              <p className="font-medium text-foreground">{weight} kg</p>
            </div>
            <div className="col-span-2">
              <span className="text-muted-foreground">Dimensiones:</span>
              <p className="font-medium text-foreground">
                {dimensions.width} × {dimensions.height} × {dimensions.depth} cm
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
