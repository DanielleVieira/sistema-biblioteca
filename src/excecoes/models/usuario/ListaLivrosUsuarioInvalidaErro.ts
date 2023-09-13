export default class ListaLivrosUsuarioInvalidaErro extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "ListaLivrosUsuarioInvalidaErro";
  }
}
