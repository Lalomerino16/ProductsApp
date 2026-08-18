import type { Product } from "./product.interface";

export interface ProductResponse {
    products: Product[];
    total:    number;
    skip:     number;
    limit:    number;
}



export type AvailabilityStatus =
  | "In Stock"
  | "Low Stock";



export interface Dimensions {
    width:  number;
    height: number;
    depth:  number;
}

export interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode:   string;
    qrCode:    string;
}

export interface Review {
    rating:        number;
    comment:       string;
    date:          Date;
    reviewerName:  string;
    reviewerEmail: string;
}
