export default class AutorInvalidoErro extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "AutorInvalidoErro";
  }
}
