import ValidadorLivro from "../../validadores/livro/ValidadorLivro";
import ILivro from "./ILivro";
import { LivroGeneros } from "./LivroGeneros";

export default class Livro implements ILivro {
  private _titulo: string;
  private _autor: string;
  private _ISBN: string;
  private _quantidade: number;
  private _genero: LivroGeneros;

  constructor(
    titulo: string,
    autor: string,
    ISBN: string,
    quantidade: number = 0
  ) {
    ValidadorLivro.validaTitulo(titulo);
    ValidadorLivro.validaAutor(autor);
    ValidadorLivro.validaISBN(ISBN);
    ValidadorLivro.validaQuantidadeLivro(quantidade);
    this._titulo = titulo;
    this._autor = autor;
    this._ISBN = ISBN;
    this._quantidade = quantidade;
    this._genero = LivroGeneros.NAO_DEFINIDO;
  }

  toString(): string {
    return `${this.titulo}, ${this.autor}, ${
      this.genero !== LivroGeneros.NAO_DEFINIDO ? this.genero : ""
    }, ${this.ISBN}`;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(novoTitulo) {
    ValidadorLivro.validaTitulo(novoTitulo);
    this._titulo = novoTitulo;
  }

  get autor() {
    return this._autor;
  }

  set autor(novoAutor) {
    ValidadorLivro.validaAutor(novoAutor);
    this._autor = novoAutor;
  }

  get ISBN() {
    return this._ISBN;
  }

  set ISBN(novoISBN) {
    ValidadorLivro.validaISBN(novoISBN);
    this._ISBN = novoISBN;
  }

  get quantidade() {
    return this._quantidade;
  }

  set quantidade(novaQuantidade) {
    ValidadorLivro.validaQuantidadeLivro(novaQuantidade);
    this._quantidade = novaQuantidade;
  }

  get genero() {
    return this._genero;
  }

  set genero(novoGenero: LivroGeneros) {
    this._genero = novoGenero;
  }
}
