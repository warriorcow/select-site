import map from 'lodash/map';


export function convertTreeToArray(tree) {
  return map(tree, node => ({
    ...node,
    childrens: convertTreeToArray(node.childrens)
  }));
}