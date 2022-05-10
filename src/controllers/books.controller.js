import {
  createBooksService,
  deleteBookService,
  getAllBooksServices,
  updateBookService,
} from "../services/books.services";

export const createBookController = (req, res) => {
  const book = req.body;

  const createdBook = createBooksService(book);

  return res.status(201).json(createdBook);
};

export const getAllBookController = (_, res) => {
  const getAllBooks = getAllBooksServices();

  return res.status(200).json(getAllBooks);
};

export const updateBookController = (req, res) => {
  const { title, author, year } = req.body;
  const { id } = req.params;

  const updatedBooks = updateBookService(id, title, author, year);

  return res.status(200).json(updatedBooks);
};

export const deletedBookController = (req, res) => {
  const { id } = req.params;

  const deletedBook = deleteBookService(id);

  return res.status(200).json(deletedBook);
};
