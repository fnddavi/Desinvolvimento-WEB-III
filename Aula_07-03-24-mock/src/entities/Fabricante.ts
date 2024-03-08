import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"fabricantes"})
export default class Fabricante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, unique:true, length: 30})
    nome: string;
}