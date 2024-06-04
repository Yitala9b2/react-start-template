export interface FullOperationTypes {
    amount: number;
    categoryName: string;
    date: string;
    description?: string | null;
    name: string;
}

export interface ShortOperationTypes {
    amount: number;
    categoryName: string;
    name: string;
    shortDescription?: string | null;
}