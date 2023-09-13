export default class NomeAutorInvalidoErro extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "NomeAutorInvalidoErro";
  }
}
