export interface FabricanteProps{
    id?: number;
    nome: string;
}

export interface CarroProps{
    id?: number;
    modelo: string;
    fabricante: FabricanteProps;
}