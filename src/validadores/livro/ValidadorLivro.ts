import AutorInvalidoErro from "../../excecoes/models/livro/AutorInvalidoErro";
import ISBNInvalidoErro from "../../excecoes/models/livro/ISBNINvalidoErro";
import QuantidadeInvalidaErro from "../../excecoes/models/livro/QuantidadeInvalidaErro";
import TituloInvalidoErro from "../../excecoes/models/livro/TituloInvalidoErro";
import Validador from "../Validador";

export default abstract class ValidadorLivro extends Validador {
  static validaTitulo(titulo: string) {
    super.validaString(
      titulo,
      new TituloInvalidoErro("Nome do livro inválido")
    );
  }

  static validaAutor(autor: string) {
    super.validaString(autor, new AutorInvalidoErro("Nome do livro inválido"));
  }

  static validaISBN(ISBN: string) {
    super.validaString(ISBN, new ISBNInvalidoErro("ISBN inválido"));
  }

  static validaQuantidadeLivro(quantidade: number) {
    const erro = new QuantidadeInvalidaErro("Quantidade do livro inválida");
    super.validaNumber(quantidade, erro);

    if (quantidade < 0) {
      throw erro;
    }
  }
}
