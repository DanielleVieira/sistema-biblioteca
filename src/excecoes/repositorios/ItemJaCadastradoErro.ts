export default class ItemJaCadastradoErro extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "ItemJaCadastradoErro";
  }
}
