import React from 'react'

const Book = (props) => {
    const {treatment} = props;

    return (
        <button 
        onClick={() => window.open("https://boka.se/ayatana")} 
        class="book-btn">Boka nu</button>
    )
}

export default Book;