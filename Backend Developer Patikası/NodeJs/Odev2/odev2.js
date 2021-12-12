const books = [
  { name: "Kitap 1", author: "Yazar1" },
  { name: "Kitap 2", author: "Yazar2" },
  { name: "Kitap 3", author: "Yazar3" },
  { name: "Kitap 4", author: "Yazar4" },
];
const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};
const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    //reject ("Bır hata Oluştu")
  });
  return promise1;
};
async function showBooks() {
  try {
    await addBook({ name: "Kitap 5", author: "Yazar5" });
    listBooks();
  } catch (error) {
    console.log(error);
  }
}
showBooks();
