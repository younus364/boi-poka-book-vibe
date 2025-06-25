import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import Book from "../Book/Book";


function Books(props) {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <p>{books.length}</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
}

export default Books;