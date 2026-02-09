// Prompt 1: create an async function that fetcehs blog posts from: https://codexplained.se/api/blog_json.php

async function fetchBlogPosts() {
    try {
        const response = await fetch('https://codexplained.se/api/blog_json.php');
        const data = await response.json();
        console.log(data);

        // Prompt 2: Generate a loop that goes through the data and creates a new article for each blog post. Work with the params title, date and text.
        // Prompt 3: Generate with a loop, the HTML for posts with title, date and text, inlcude the HTML ass innerHTML in main a loop that goes through the data and creates a new article for each blog post. Work with the params title, date and text.

        const main = document.querySelector('main');
        data.forEach(post => {

            // Prompt 4: Make the post title a link to post.html, and send the id as a querystring

            main.innerHTML += `
                <article class="blog-post">
                    <h2><a href="post.html?id=${post.id}"><h2>${post.title}</h2></a></h2>
                    <p>${post.date}</p>
                    <p>${post.text}</p>
                </article>
            `;
        });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}


fetchBlogPosts();