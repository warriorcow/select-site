import forEach from 'lodash/forEach';

export const findInTree = (tree, predicate, childrenKey = 'childrens') => {
  let result = null;

  forEach(tree, (node) => {
    if (predicate(node)) {
      result = node;
      return false; // Прерываем обход
    }

    if (node[childrenKey]) {
      result = findInTree(node[childrenKey], predicate, childrenKey);
      if (result) return false; // Прерываем обход, если найдено
    }
  });

  return result;
};