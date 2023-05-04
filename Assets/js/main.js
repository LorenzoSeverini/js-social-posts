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
                        ${setPicProfile(post)}
                    </div>
                </div>
                <div class="post-meta__data">
                    <h3 class="post-meta__author">${post.author.name}</h3>
                    <div class="post-meta__time">${formatDate(post.created)}</div>
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
                        Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
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
// Function to set the profile pic
function setPicProfile (post) {
    if (post.author.image) {
        return `<img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">`;
    } else {
        const initials = post.author.name.split(' ').map(word => word[0]).join('');
        return `<div class="profile-pic__initials">${initials}</div>`;
    }
}


// ****************
// function to set the likes counter 
function setLikesCounter(post) {
    const likesCounter = document.getElementsByClassName(`js-likes-counter-${post.id}`) [0] ;
    likesCounter.innerText = post.likes;
}

// Function to set the like button
function setLikeButton(post) {
    const likeButton = document.getElementsByClassName(`js-like-button-${post.id}`) [0] ;
    likeButton.classList.toggle('js-likes', post.liked);
}

// Function to toggle the like
function toggleLike(post) {
    post.liked = !post.liked;
    if (post.liked) {
        post.likes++;
    } else {
        post.likes--;
    }
}

// Function to handle the like button click
function handleLikeClick(event) {
    // Get the like button
    const likeButton = event.currentTarget;
    // Get the post id
    const postId = likeButton.dataset.postid;
    // Get the post
    const post = posts.find(post => post.id == postId);
    // Toggle the like
    toggleLike(post);
    // Update the like button
    setLikeButton(post);
    // Update the likes counter
    setLikesCounter(post);
}


// ****************
// *    DEBUG     *
// ****************

console.log(posts);












