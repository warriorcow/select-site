export function findBySlug(data, targetSlug) {
  if (data?.slug === targetSlug) {
    return data;
  }

  if (data.childrens) {
    for (const key in data.childrens) {
      const result = findBySlug(data.childrens[key], targetSlug);
      if (result) {
        return result;
      }
    }
  }

  return null;
}