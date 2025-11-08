import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`} className="book-link">
        <h3>{book.title}</h3>
        <p>by {book.author}</p>
      </Link>
    </div>
  );
};

export default BookCard;

