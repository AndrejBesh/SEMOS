fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {

        genarateHTML(data)
    })
const genarateHTML = (prop) => {
    const container = document.getElementById('container')

    prop.forEach(value => {
        const card = document.createElement('div')
        container.append(card)
        const img = document.createElement('img')
        img.src = 'avatar.png'
        card.append(img)
        const name = document.createElement('h3')
        name.textContent = `${value.name}`
        card.append(name)
        const email = document.createElement('h3')
        email.textContent = `@${value.email}`
        card.append(email)
        const website = document.createElement('h3')
        website.textContent = `Website: ${value.website}`
        card.append(website)
        const address = document.createElement('h3')
        address.textContent = `${value.address.street} ${value.address.suite}`
        card.append(address)
    });

}
genarateHTML()
