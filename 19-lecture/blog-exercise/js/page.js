document.addEventListener('DOMContentLoaded', () => {
  const postsContainer = document.getElementById('posts')
  const postContainer = document.getElementById('post')

  // ===== INDEX PAGE =====
  if (postsContainer) {
    loadAllPosts(postsContainer)
  }

  // ===== POST PAGE =====
  if (postContainer) {
    loadSinglePost(postContainer)
  }
})


// ---------- FETCH ALL POSTS ----------
async function loadAllPosts(container) {
  try {
    const response = await fetch('https://codexplained.se/api/blog_json.php')
    const posts = await response.json()

    let html = ''

    posts.forEach(post => {
      html += `
        <article>
          <h2>
            <a href="page.html?post=${post.id}">
              ${post.title}
            </a>
          </h2>
          <em>${post.date}</em>
          <p>${post.text.substring(0, 120)}...</p>
        </article>
      `
    })

    container.innerHTML = html

  } catch (error) {
    container.textContent = 'Could not load blog posts.'
  }
}


// ---------- FETCH SINGLE POST ----------
async function loadSinglePost(container) {
  const params = new URLSearchParams(window.location.search)
  const postId = params.get('post')

  if (!postId) {
    container.textContent = 'No post selected.'
    return
  }

  try {
    const response = await fetch(
      `https://codexplained.se/api/post_json.php?post=${postId}`
    )
    const post = await response.json()

    const tagsText = post.tags ? post.tags.join(', ') : 'No tags'

    container.innerHTML = `
      <h1>${post.title}</h1>
      <em>${post.date}</em>

      ${post.img ? `<img src="${post.img}" alt="">` : ''}

      <p>${post.text}</p>
      <p><strong>Tags:</strong> ${tagsText}</p>
    `

  } catch (error) {
    container.textContent = 'Could not load post.'
  }
}
