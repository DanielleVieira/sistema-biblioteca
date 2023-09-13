export default abstract class Validador {
  protected static validaString(str: string, erro: Error) {
    if (!str || typeof str !== "string") {
      throw erro;
    }
  }

  protected static validaNumber(num: number, erro: Error) {
    if (!num || typeof num !== "number") {
      throw erro;
    }
  }

  protected static validaLista(lista: any, erro: Error) {
    if (!lista) {
      throw erro;
    }
  }
}
