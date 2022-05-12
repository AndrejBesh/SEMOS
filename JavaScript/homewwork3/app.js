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
let bookName = []
let bookYear = []
let bookAuthor = []
let bookReaded = []
for (const book of books) {
    bookName.push(book.name)
    bookYear.push(book.year)
    bookAuthor.push(book.author)
    bookReaded.push(book.read)

}

const bookList = (props) => {
    const element = document.getElementById('el')
    const list = document.createElement("ul")
    const listItem = document.createElement("li")
    const listItem2 = document.createElement("li")
    const listItem3 = document.createElement("li")
    const listItem4 = document.createElement("li")

    listItem.textContent = `Name: ${bookName[0]},  Author: ${bookAuthor[0]},  Year: ${bookYear[0]}, Readed:  ${bookReaded[0]} `
    listItem2.textContent = `Name: ${bookName[1]},  Author: ${bookAuthor[1]},  Year: ${bookYear[1]}, Readed:  ${bookReaded[1]} `
    listItem3.textContent = `Name: ${bookName[2]},  Author: ${bookAuthor[2]},  Year: ${bookYear[2]}, Readed:  ${bookReaded[2]} `
    listItem4.textContent = `Name: ${bookName[3]},  Author: ${bookAuthor[3]},  Year: ${bookYear[3]}, Readed:  ${bookReaded[3]} `
    list.textContent = 'Books'
    list.appendChild(listItem)
    list.appendChild(listItem2)
    list.appendChild(listItem3)
    list.appendChild(listItem4)

    element.appendChild(list)
}





