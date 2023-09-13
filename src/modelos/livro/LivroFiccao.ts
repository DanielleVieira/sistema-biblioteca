import Livro from "./Livro";
import { LivroGeneros } from "./LivroGeneros";

export default class LivroFiccao extends Livro {
  constructor(
    titulo: string,
    autor: string,
    ISBN: string,
    quantidade?: number
  ) {
    super(titulo, autor, ISBN, quantidade);
    this.genero = LivroGeneros.FICCAO;
  }
}
