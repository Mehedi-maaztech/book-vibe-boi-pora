import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    },[])
    return (
        <div className="py-20">
            <h2 className="text-4xl text-center font-bold">Books</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 pt-5">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;