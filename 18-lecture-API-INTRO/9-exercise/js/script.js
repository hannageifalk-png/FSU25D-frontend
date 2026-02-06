const menu = document.getElementById('menu')
const contentDiv = document.getElementById('content')

menu.addEventListener('click', (e) => {
  e.preventDefault()

  const page = e.target.dataset.page
  if (!page) return

  fetch('https://codexplained.se/api/simple_json.php')
    .then(response => response.json())
    .then(data => {

      // ABOUT
      if (page === 'about') {
        contentDiv.innerHTML = `
          <h1>About</h1>
          <p>${data.about}</p>
        `
      }

      // AUTHOR
      if (page === 'author') {
        contentDiv.innerHTML = `
          <h1>Author</h1>
          <p>${data.author}</p>
        `
      }

      // BLOG POSTS
      if (page === 'posts') {
        const posts = data.blog_posts
        let postsHTML = ""

        for (let i = 0; i < posts.length; i++) {
          const post = posts[i]
          const tags = post.tags
          const tagsText = tags.join(', ')
          
          postsHTML += `
          <h2>${post.title}</h2>
          <em>${post.date}</em>
          <p>${post.text}</p>
          <p><strong>Tags:</strong>${tagsText}</p> 
          `
        }

        contentDiv.innerHTML = postsHTML
      }

    })
})
