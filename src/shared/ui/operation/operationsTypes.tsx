export type CategoryType = {
    id: string;
    name: string;
    photo?: string;
};

interface IOperation {
    id: string;
    name: string;
    description?: string;
    date: Date;
    amount: number | null;
    category: CategoryType;
}
interface ICost extends IOperation {
    type: 'Затраты';
}
interface IProfit extends IOperation {
    type: 'Прибыль';
}

export type Operation = ICost | IProfit;



export interface ShortOperationTypes {
    id:number
    amount: number;
    categoryName: string;
    name: string;
    shortDescription?: string | null;
}