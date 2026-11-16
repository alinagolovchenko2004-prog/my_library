import {books} from "./data/books.js"
import Header from "./components/Header.jsx"
import LibraryStats from "./components/LibraryStats.jsx"
import BookList from "./components/BookList.jsx"
import Footer from "./components/Footer.jsx"

import "./App.css"
const genres = [
    "Художественная литература",
    "Учебная литература",
    "Детская литература",
    "Публицистика",
    "Научно-популярная литература"
];

export default function App(){
    return(
        <>
        <Header/>
            <main className="main">
        <LibraryStats books={books}/>
            <h2 className="section-title">Полный каталог</h2>
        <BookList books={books}/>
            {genres.map((genre) => (
                <div className="genre-section" key={genre}>
                    <h2 className="section-title">{genre}</h2>
                    <BookList books={books} genre={genre}/>
                </div>
            ))}
            </main>
        <Footer/>
        </>
    )
}