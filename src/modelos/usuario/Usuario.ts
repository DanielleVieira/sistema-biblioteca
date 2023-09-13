import ValidadorUsuario from "../../validadores/usuario/ValidadorUsuario";
import ILivro from "../livro/ILivro";
import IUsuario from "./IUsuario";

export default class Usuario implements IUsuario {
  private _nome: string;
  private _id: string;
  private _livros: ILivro[];

  constructor(nome: string, id: string, livros: ILivro[] = []) {
    ValidadorUsuario.validaNome(nome);
    ValidadorUsuario.validaId(id);
    ValidadorUsuario.validaListaLivros(livros);
    this._nome = nome;
    this._id = id;
    this._livros = livros;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    ValidadorUsuario.validaNome(novoNome);
    this._nome = novoNome;
  }

  get id() {
    return this._id;
  }

  set id(novoId) {
    ValidadorUsuario.validaId(novoId);
    this._id = novoId;
  }

  get livros() {
    return [...this._livros];
  }

  set livros(novaListaLivros) {
    ValidadorUsuario.validaListaLivros(novaListaLivros);
    this._livros = novaListaLivros;
  }
}
