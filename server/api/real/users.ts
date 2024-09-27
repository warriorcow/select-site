export default defineEventHandler((event) => {
  console.log("adadad");
  return [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
  ];
});
