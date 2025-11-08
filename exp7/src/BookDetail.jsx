import { useParams, Link } from 'react-router-dom';

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-detail">
        <h1>Book not found</h1>
        <Link to="/" className="back-link">Back to List</Link>
      </div>
    );
  }

  return (
    <div className="book-detail">
      <Link to="/" className="back-link">← Back to List</Link>
      <div className="book-info">
        <h1>{book.title}</h1>
        <h2>by {book.author}</h2>
        <p className="description">{book.desc}</p>
        <div className="rating">
          <span>Rating: {book.rating}/5.0</span>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

