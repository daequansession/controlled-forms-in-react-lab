import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    {
      title: "Fourth Wing",
      author: "Rebecca Yarros",
    },

    {
      title: "The Lion, the Witch and the Wardrobe",
      author: "C.S. Lewis",
    },
  ]);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor={handleSubmit}></label>
          <input
            id="author"
            name="author"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookcard">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
