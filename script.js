const myLibrary = [
    { title: 'title', author: 'author' },
    { title: 'title2', author: 'author2'}
];

function Book() {
    title;
    author;
    numOfPages;
    read;
}



function addBookToLibrary() {

}

function displayBooks(array) {
    const container = document.getElementById('cardContainer');
    container.innerHTML = '';

    array.forEach (item => {
        const card = document.createElement('div');
        card.className = 'card';

        const cardInnerHTML = `
        <h3>${item.title}</h3>
        <p>${item.author}</p>
        `;

        card.innerHTML = cardInnerHTML;
        container.appendChild(card);
    });
}

displayBooks(myLibrary);