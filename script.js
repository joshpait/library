const myLibrary = [];

document.getElementById('openModalButton').addEventListener('click', openModal);
document.getElementById('modalAddBookButton').addEventListener('click', addBook);
document.querySelector('.close').addEventListener('click', closeModal);
window.addEventListener('click', outsideClickCloseModal);

function addModal() {
    document.getElementById('bookModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('bookModal').style.display = 'none';
}

function outsideClickCloseModal() {
    if (event.target == document.getElementById('bookModal')) {
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

    if (!title || !author || !pages || !isChecked) {
        alert('Please fill in all boxes.');
        return;
    }

    const card = createElement('div');
    card.className = 'card';

    const cardInnerHTML = `
    <h2>${title}</h2>
    <h3>${author}</h3>
    <p>${pages}</p>
    <p>Read? ${isChecked ? 'checked' : 'unchecked'}</p>
    `;
    card.innerHTML = cardInnerHTML;

    document.getElementById('cardContainer').appendChild(card);

    myLibrary.push(card);

    document.getElementById('modalCardTitle').value = '';
    document.getElementById('modalCardContent').value = '';
    document.getElementById('modalCardCheckbox').checked = false;

    // Close the modal
    closeModal();
}

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