export type OfferType = {
    id:number;
    images:string[];
    isPremium: boolean;
    previewImage: string;
    price:number;
    rating: number;
    title:string;
    typeOfplacement:string;
    bedrooms:number;
    maxAduts:number;
    insides:string[];
    host:{
        avatar:string;
        id:number;
        isPro:boolean;
        name:string;
    };
    description:string;
    location: {
        latitude: number;
        longitude: number;
        zoom: number;
    };
};

