export default class NomeUsuarioInvalidoErro extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "NomeUsuarioInvalidoErro";
  }
}
