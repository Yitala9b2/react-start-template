export type Category = {
    id: string;
    name: string;
    photo?: string;
};

export interface FullOperationTypes {
    id: string,
    amount: number;
    category: Category;
    date: string;
    description?: string | null;
    name: string;
    type: string;
}

export interface ShortOperationTypes {
    id:number
    amount: number;
    categoryName: string;
    name: string;
    shortDescription?: string | null;
}