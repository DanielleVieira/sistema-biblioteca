export default class IdUsuarioInvalidoErro extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "IdUsuarioInvalidoErro";
  }
}
