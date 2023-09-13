import ItemJaCadastradoErro from "../excecoes/repositorios/ItemJaCadastradoErro";
import IRepositorio from "./IRepositorio";

export default class Repositorio<K, V> implements IRepositorio<K, V> {
  private _lista: Map<K, V>;

  constructor() {
    this._lista = new Map<K, V>();
  }

  adiciona(chave: K, novoItem: V) {
    if (this._lista.has(chave))
      throw new ItemJaCadastradoErro("Este item já foi cadastrado");
    else this._lista.set(chave, novoItem);
  }

  remove(chave: K): boolean {
    return this._lista.delete(chave);
  }

  obtemItem(chave: K): V | undefined {
    return this._lista.get(chave);
  }

  obtemItens(): V[] {
    return [...this._lista.values()];
  }

  atualiza(chave: K, itemAtualizado: V) {
    if (this._lista.has(chave)) this._lista.set(chave, itemAtualizado);
  }
}
