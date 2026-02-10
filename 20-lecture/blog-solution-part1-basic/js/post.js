// fetch from https://codexplained.se/api/post_json.php?post=1
async function fetchBlogPost() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');
        const response = await fetch(`https://codexplained.se/api/post_json.php?post=${postId}`);
        const data = await response.json();
        console.log(data);

        const article = document.querySelector('#blog-post');
        // Prompt 2: Generate the HTML for the post with image_url, date, title, text and tags include the HTML as innerHTML in article element
        // Prompt 3: make every tag wrapeed with a span with class tag, and include the HTML as innerHTML in article element
        article.innerHTML+= `
            <img src="${data.image_url}" alt="${data.title}">
            <h1>${data.title}</h1>
            <p><time datetime="${data.date}">${data.date}</time></p>
            <p>${data.text}</p>
            <p class="tags">Tags: ${data.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</p>
        `;
    } catch (error) {
        console.error('Error fetching blog post:', error);
    }
}

fetchBlogPost();