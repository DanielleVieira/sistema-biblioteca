import ILivro from "../modelos/livro/ILivro";
import Livro from "../modelos/livro/Livro";
import LivroFantasia from "../modelos/livro/LivroFantasia";
import LivroFiccao from "../modelos/livro/LivroFiccao";
import { LivroGeneros } from "../modelos/livro/LivroGeneros";
import LivroNaoFiccao from "../modelos/livro/LivroNaoFiccao";
import LivroRomance from "../modelos/livro/LivroRomance";
import IRepositorio from "../repositorios/IRepositorio";
import Repositorio from "../repositorios/Repositorio";

export default class BibliotecaServico {
  private _livros: IRepositorio<string, ILivro>;

  constructor() {
    this._livros = new Repositorio<string, ILivro>();
  }

  private adicionaLivro(titulo: string, livro: ILivro) {
    this._livros.adiciona(titulo, livro);
  }

  adicionaLivroSemGenero(
    titulo: string,
    autor: string,
    ISBN: string,
    quantidade: number = 0
  ) {
    this.adicionaLivro(
      titulo.toUpperCase(),
      new Livro(titulo, autor, ISBN, quantidade)
    );
  }

  adicionaLivroNaoFiccao(
    titulo: string,
    autor: string,
    ISBN: string,
    quantidade: number = 0
  ) {
    this.adicionaLivro(
      titulo.toUpperCase(),
      new LivroNaoFiccao(titulo, autor, ISBN, quantidade)
    );
  }

  adicionaLivroFiccao(
    titulo: string,
    autor: string,
    ISBN: string,
    quantidade: number = 0
  ) {
    this.adicionaLivro(
      titulo.toUpperCase(),
      new LivroFiccao(titulo, autor, ISBN, quantidade)
    );
  }

  adicionaLivroRomance(
    titulo: string,
    autor: string,
    ISBN: string,
    quantidade: number = 0
  ) {
    this.adicionaLivro(
      titulo.toUpperCase(),
      new LivroRomance(titulo, autor, ISBN, quantidade)
    );
  }

  adicionaLivroFantasia(
    titulo: string,
    autor: string,
    ISBN: string,
    quantidade: number = 0
  ) {
    this.adicionaLivro(
      titulo.toUpperCase(),
      new LivroFantasia(titulo, autor, ISBN, quantidade)
    );
  }

  removeLivro(chave: string): boolean {
    return this._livros.remove(chave);
  }

  listaLivros(): string {
    return this._livros.obtemItens().join("\n");
  }

  buscaLivroPorISBN(ISBN: string): ILivro | undefined {
    return this._livros.obtemItens().find((livro) => livro.ISBN === ISBN);
  }

  buscaLivroPorTitulo(titulo: string): ILivro | undefined {
    return this._livros.obtemItem(titulo);
  }

  buscaLivrosPorAutor(autor: string): ILivro[] {
    return this._livros.obtemItens().filter((livro) => livro.autor === autor);
  }

  buscaLivrosPorGenero(genero: LivroGeneros): ILivro[] {
    return this._livros.obtemItens().filter((livro) => livro.genero === genero);
  }
}
