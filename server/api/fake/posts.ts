export default defineEventHandler(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'post1' },
        { id: 2, name: 'post12' },
      ]);
    }, 50); // Задержка в миллисекундах (например, 2000мс = 2с)
  });
});
