const books = [
    {
        name: 'Crime and punishment',
        author: 'Fyodor Dostoyevsky',
        year: 1887,
        read: true
    },
    {
        name: 'Harry Potter',
        author: 'J.K Rowling',
        year: 2000,
        read: false
    },
    {
        name: 'The art of war',
        author: 'Sun Tzu',
        year: 200,
        read: false
    },
    {
        name: 'The Hobbit',
        author: 'J.R.R Tolkien',
        year: 1910,
        read: true
    }
]

const bookList = () => {

    const content = document.getElementById('el')
    const list = document.createElement('ul')
    content.appendChild(list)

    for (const book of books) {
        const listitem = document.createElement('li')
        listitem.textContent = `${book.name} (${book.year} by ${book.author})`
        list.appendChild(listitem)
    }
}

bookList()

