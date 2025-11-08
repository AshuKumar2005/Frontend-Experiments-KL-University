import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <h1>Book Review Website</h1>
      <div className="books-container">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;

