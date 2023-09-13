export default class TituloInvalidoErro extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "TituloInvalidoErro";
  }
}
