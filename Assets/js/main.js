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

// Function to create the profile pic
function profilePicPost(author) {
    let profilePic = '';

    if (author.image !== null) {
        profilePic = `<img class="profile-pic" src="${author.image}" alt="${author.name}">`;
    } else {
        const initials = author.name.split(' ').map(word => word[0]).join('');
        profilePic = `
            <div class="profile-pic-default">
                <span>${initials}</span>
            </div>
        `;
    }

    return profilePic;
}

// Function to create a post
function createPost(post) {

    const { author, created, content, media, likes, id } = post;

    const postHTML = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        ${profilePicPost(author)}
                    </div>
                </div>
                <div class="post-meta__data">
                    <h3 class="post-meta__author">${author.name}</h3>
                    <div class="post-meta__time">${formatDate(created)}</div>
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#" data-id="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('container').innerHTML += postHTML;
}

// Function to create the posts
function createPosts(posts) {
    // Loop the posts
    for (const post of posts) {
        // Create the post
        createPost(post);
    }
}
// Create the posts
createPosts(posts);

// ****************
// DATE 
// ****************
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

// ****************
// LIKE BUTTON 
// ****************
const likeButtons = document.getElementsByClassName('like-button');

for (let i = 0; i < likeButtons.length; i++) {
    const likeButton = likeButtons[i];

    likeButton.addEventListener('click', function(event) {

        event.preventDefault();

        const clickedButton = 'like-button--liked';
        const likeCounter = document.getElementsByClassName('js-likes-counter')[i];

        if (likeCounter.classList.contains(clickedButton)) {
            likeCounter.classList.remove(clickedButton);
            likeCounter.textContent = parseInt(likeCounter.textContent) - 1;
            // change the text of the button from "like" to "unlike"
            change = document.getElementsByClassName('like-button__label')[i];
            change.textContent = "Mi piace";
        }
        else {
            likeCounter.classList.add(clickedButton);
            likeCounter.textContent = parseInt(likeCounter.textContent) + 1;
            // change the text of the button from "like" to "unlike"
            change = document.getElementsByClassName('like-button__label')[i];
            change.textContent = "Non mi piace";
        }
    });
}
// ****************
// *    DEBUG     *
// ****************
console.log(posts);











