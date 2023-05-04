// MILESTONE 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post. Nel JS dello ZIP allegato è già incluso un array. Controllate che ci sia tutto il necessario.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post, numero progressivo da 1 a n
// nome autore
// foto autore
// data in formato americano (mm-gg-yyyy)
// testo del post
// immagine (non tutti i post devono avere una immagine)
// numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*

// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Dobbiamo inserire da Javascript gli Posti HTML necessari a visualizzare un post. Controllate il codice che c'è nel post di esempio. Ricreate quegli Posti da JS a partire dal vostro array e poi commentate/eliminate l'HTML statico presente nell'index.
// MILESTONE 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array tutti gli id dei post ai quali abbiamo messo il like. Quando controlliamo se abbiamo già messo like possiamo cercare in questo array, invece di controllare se il button ha una specifica classe ;)
// BONUS
// Formattare le date in formato italiano (gg/mm/aaaa)
// Generando la card, gestiamo l'assenza dell'immagine profilo. Nel caso sia assente usiamo un Posto che contiene le iniziali dell'utente (es. Luca Lambiase > LL).
// Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

// ************************
// *   ARRAY OF OBJECT   *
// ************************

// Array of posts

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// ****************
// *  FUNCTIONS   *
// ****************

// Function to create a post
function createPost(post) {
    // Create the post
    const postHTML = `
    <div class="post" data-id="${post.id}">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${post.author.image ? post.author.image : 'https://unsplash.it/300/300?image=29'}" alt="${post.author.name}">
                </div>
                <div class="post-meta__data">
                    <h3 class="post-meta__author">${post.author.name}</h3>
                    <div class="post-meta__time>${formatDate}</div>
                </div>
            </div>
        </div>
            <div class="post__text">lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</div>
            <div class="post__image">
                <img src="${post.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${ post.likes}</b> persone
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById('container').innerHTML += postHTML;
}

// Function to format the date
function formatDate(date) {
    // Create a new date
    const newDate = new Date(date);
    // Get the day
    const day = newDate.getDate();
    // Get the month
    const month = newDate.getMonth() + 1;
    // Get the year
    const year = newDate.getFullYear();
    // Return the formatted date
    return `${day}/${month}/${year}`;
}

// Function to create the posts
function createPosts(posts) {
    // Loop the posts
    for (const post of posts) {
        // Create the post
        createPost(post);
    }
}

// ****************
// *    INIT      *
// ****************

// Create the posts
createPosts(posts);

// ****************
// *    DEBUG     *
// ****************

console.log(posts);










