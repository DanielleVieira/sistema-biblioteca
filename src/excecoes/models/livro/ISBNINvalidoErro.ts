export default class ISBNInvalidoErro extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "ISBNInvalidoErro";
  }
}
