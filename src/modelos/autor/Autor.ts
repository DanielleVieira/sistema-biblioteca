import ValidadorAutor from "../../validadores/autor/ValidadorAutor";
import ILivro from "../livro/ILivro";
import IAutor from "./IAutor";

export default class Autor implements IAutor {
  private _nome: string;
  private _livros: ILivro[];

  constructor(nome: string, livros: ILivro[] = []) {
    ValidadorAutor.validaNome(nome);
    ValidadorAutor.validaListaLivros(livros);
    this._nome = nome;
    this._livros = livros;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome: string) {
    ValidadorAutor.validaNome(novoNome);
    this._nome = novoNome;
  }

  get livros() {
    return [...this._livros];
  }

  set livros(novaListaLivros: ILivro[]) {
    ValidadorAutor.validaListaLivros(novaListaLivros);
    this._livros = novaListaLivros;
  }
}
