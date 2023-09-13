import IdUsuarioInvalidoErro from "../../excecoes/models/usuario/IdUsuarioInvalidoErro";
import ListaLivrosUsuarioInvalidaErro from "../../excecoes/models/usuario/ListaLivrosUsuarioInvalidaErro";
import NomeUsuarioInvalidoErro from "../../excecoes/models/usuario/NomeUsuarioInvalidoErro";
import ILivro from "../../modelos/livro/ILivro";
import Validador from "../Validador";

export default abstract class ValidadorUsuario extends Validador {
  static validaNome(nome: string) {
    super.validaString(
      nome,
      new NomeUsuarioInvalidoErro("Nome de usuário inválido")
    );
  }

  static validaId(id: string) {
    super.validaString(id, new IdUsuarioInvalidoErro("Id de usuário inválido"));
  }

  static validaListaLivros(lista: ILivro[]) {
    super.validaLista(
      lista,
      new ListaLivrosUsuarioInvalidaErro("Lista de livros do usuário inválida")
    );
  }
}
