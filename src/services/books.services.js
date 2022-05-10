import { tableBooks } from "../database/books.index";
import { v4 as uuidv4 } from "uuid";

export const createBooksService = (book) => {
  const { title, author, year, owner_id } = book;

  const newBook = {
    id: uuidv4(),
    title,
    author,
    year,
    owner_id,
  };

  tableBooks.push(newBook);

  return newBook;
};

export const getAllBooksServices = () => {
  return tableBooks;
};

export const updateBookService = (id, title, author, year) => {
  const updateBook = {
    id,
    title,
    author,
    year,
  };

  const findUser = tableBooks.findIndex((book) => book.id === id);

  if (findUser === -1) {
    return "User not found";
  }

  tableBooks[findUser] = { ...tableBooks[findUser], ...updateBook };

  return tableBooks[findUser];
};

export const deleteBookService = (id) => {
  const finduser = tableBooks.findIndex((book) => book.id === id);

  if (finduser === -1) {
    return "user not found";
  }

  tableBooks.splice(finduser, 1);
};
