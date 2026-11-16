import AvailabilityBadge from "./AvailabilityBadge.jsx";
import Card from "./Card.jsx";


function BookCard({ book}) {
    return (
        <Card>
            <h3>{book.title}</h3>
            <p>Автор: {book.author}</p>
            <p>Год издания: {book.year}</p>
            {book.year< 2000 && <p>Классическое издание</p>}
            <p>Жанр: {book.genre}</p>
            <p>Доступных экземпляров: {book.copies}</p>
            <AvailabilityBadge copies={book.copies}/>
        </Card>
    )
}

export default BookCard;