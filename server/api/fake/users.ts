export default defineEventHandler(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Fake John Doe', email: 'john@exampleFake.com' },
        { id: 2, name: 'Fake Jane Doe', email: 'jane@exampleFake.com' },
      ]);
    }, 50); // Задержка в миллисекундах (например, 2000мс = 2с)
  });
});
