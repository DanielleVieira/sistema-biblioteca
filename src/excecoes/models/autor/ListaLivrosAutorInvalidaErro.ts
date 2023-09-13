export default class ListaLivrosInvalidaErro extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "ListaLivrosInvalidaErro";
  }
}
