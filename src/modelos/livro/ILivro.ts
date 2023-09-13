import { LivroGeneros } from "./LivroGeneros";

export default interface ILivro {
  titulo: string;
  autor: string;
  ISBN: string;
  genero: LivroGeneros;
}
