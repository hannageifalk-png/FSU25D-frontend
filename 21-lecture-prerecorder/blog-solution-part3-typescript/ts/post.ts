import { fetchBlogPost, type PostDetails } from './api.js';

async function loadPost() {
    const post = await fetchBlogPost();
    renderPost(post);
}
loadPost();

// Prompt 2: Generate the HTML for the post with image_url, date, title, text and tags include the HTML as innerHTML in article element
// Prompt 3: make every tag wrapeed with a span with class tag, and include the HTML as innerHTML in article element
function renderPost(post: PostDetails) {
    const article = document.querySelector('#blog-post');
    
    if (!article) {
        console.log('Article element not found')
        return
    }

    article.innerHTML += `
        <img src="${post.image_url}" alt="${post.title}">
        <h1>${post.title}</h1>
        <p><time datetime="${post.date}">${post.date}</time></p>
        <p>${post.text}</p>
        <p class="tags">Tags: ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</p>
    `;
}