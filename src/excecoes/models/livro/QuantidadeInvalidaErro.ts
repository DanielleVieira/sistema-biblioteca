export default class QuantidadeInvalidaErro extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "QuantidadeInvalidaErro";
  }
}
