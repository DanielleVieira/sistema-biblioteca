import Livro from "./Livro";
import { LivroGeneros } from "./LivroGeneros";

export default class LivroRomance extends Livro {
  constructor(
    titulo: string,
    autor: string,
    ISBN: string,
    quantidade?: number
  ) {
    super(titulo, autor, ISBN, quantidade);
    this.genero = LivroGeneros.ROMANCE;
  }
}
