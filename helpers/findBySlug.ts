export function findBySlug(data, targetSlug) {
  // Проверяем текущий объект на наличие искомого slug
  if (data?.slug === targetSlug) {
    return data;
  }

  // Если у объекта есть дочерние элементы, рекурсивно проходим по ним
  if (data.childrens) {
    for (const key in data.childrens) {
      const result = findBySlug(data.childrens[key], targetSlug);
      if (result) {
        return result;
      }
    }
  }

  // Если slug не найден, возвращаем null
  return null;
}