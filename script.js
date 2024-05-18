document.addEventListener('DOMContentLoaded', function() {
    const myLibrary = [];

    document.getElementById('openModalButton').addEventListener('click', openModal);
    document.getElementById('modalAddBookButton').addEventListener('click', addBook);
    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', outsideClickCloseModal);

    function openModal() {
        document.getElementById('bookModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('bookModal').style.display = 'none';
    }

    function outsideClickCloseModal(Event) {
        if (Event.target == document.getElementById('bookModal')) {
            closeModal();
        }
    }

    function Book() {
        title;
        author;
        numOfPages;
        read;
    }


    function addBook() {
        const title = document.getElementById('modalBookTitle').value;
        const author = document.getElementById('modalBookAuthor').value;
        const pages = document.getElementById('modalBookPages').value;
        const isChecked = document.getElementById('modalBookRead').checked;

        if (!title || !author || !pages) {
            alert('Please fill in all boxes.');
            return;
        }

        const card = document.createElement('div');
        card.className = 'card';

        const cardInnerHTML = `
        <h2>${title}</h2>
        <h3>by ${author}</h3>
        <p>Number of pages: ${pages}</p>
        <p>Read? ${isChecked ? 'Yes' : 'No'}</p>
        <button class='remove-button'>Remove</button>
        `;
        card.innerHTML = cardInnerHTML;

        document.getElementById('cardContainer').appendChild(card);

        myLibrary.push(title);

        card.querySelector('.remove-button').addEventListener('click', () => removeCard(card, title));

        document.getElementById('modalBookTitle').value = '';
        document.getElementById('modalBookAuthor').value = '';
        document.getElementById('modalBookPages').value = '';
        document.getElementById('modalBookRead').checked = false;

        // Close the modal
        closeModal();

        console.log(myLibrary);
    }

    function removeCard(card, title) {
        card.remove();

        const cardIndex = myLibrary.indexOf(title);
        if (cardIndex > -1) {
            myLibrary.splice(cardIndex, 1);
        }

        console.log(myLibrary);
    }
});
// function displayBooks(array) {
//     const container = document.getElementById('cardContainer');
//     container.innerHTML = '';

//     array.forEach (item => {
//         const card = document.createElement('div');
//         card.className = 'card';

//         const cardInnerHTML = `
//         <h3>${item.title}</h3>
//         <p>${item.author}</p>
//         `;

//         card.innerHTML = cardInnerHTML;
//         container.appendChild(card);
//     });
// }

// displayBooks(myLibrary);