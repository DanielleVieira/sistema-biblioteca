export default interface IRepositorio<K, V> {
  adiciona(chave: K, novoItem: V): void;
  remove(chave: K): boolean;
  obtemItem(chave: K): V | undefined;
  obtemItens(): V[];
  atualiza(chave: K, itemAtualizado: V): void;
}
