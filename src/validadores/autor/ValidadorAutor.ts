import ListaLivrosInvalidaErro from "../../excecoes/models/autor/ListaLivrosAutorInvalidaErro";
import NomeAutorInvalidoErro from "../../excecoes/models/autor/NomeAutorInvalidoErro";
import ILivro from "../../modelos/livro/ILivro";
import Validador from "../Validador";

export default abstract class ValidadorAutor extends Validador {
  static validaNome(nome: string) {
    super.validaString(
      nome,
      new NomeAutorInvalidoErro("Nome do autor inválido")
    );
  }

  static validaListaLivros(lista: ILivro[]) {
    super.validaLista(
      lista,
      new ListaLivrosInvalidaErro("Lista de livros inválida")
    );
  }
}
