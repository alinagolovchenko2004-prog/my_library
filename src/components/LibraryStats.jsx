function LibraryStats({books}) {
    const totalBooks = books.length;
    const availableBooks = books.filter((book) => book.copies > 0);
    return (
        <div className="library-stats">
            <h2>Библиотека:</h2>
            <p>Всего книг в каталоге: {totalBooks}</p>
            <p>Доступны для выдачи: {availableBooks.length}</p>
        </div>
    )
}
export default LibraryStats;