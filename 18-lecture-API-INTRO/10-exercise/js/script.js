const menu = document.getElementById('menu')
const contentDiv = document.getElementById('content')

menu.addEventListener('click', (e) => {
  e.preventDefault()

  const page = e.target.dataset.page
  if (!page) return

  fetch('https://codexplained.se/api/simple_json.php')
    .then(response => response.json())
    .then(data => {

      if (page === 'about') {
        contentDiv.innerHTML = `
          <h1>About</h1>
          <p>${data.about}</p>
        `
      }
      if (page === 'author') {
        contentDiv.innerHTML = `
          <h1>Author</h1>
          <p>${data.author}</p>
        `
      }
      if (page === 'posts') {
        const posts = data.blog_posts
        let postsHTML = ""
        
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i]
            const tagsText = (post.tags || []).join(', ')


            postsHTML += 
            `
            <h2>
              <a href="#" class="post-title">${post.title}</a>
            </h2>

            <div class="post-content hidden">
              <em>${post.date}</em>
              <p>${post.text}</p>
              <p><strong>Tags:</strong> ${tagsText}</p>
            </div>
          `
        }

      contentDiv.innerHTML = postsHTML
    }  

    })
})
    
    contentDiv.addEventListener('click', (e) => {
        if (!e.target.classList.contains('post-title')) return
        e.preventDefault()
    
        const content = e.target.closest('h2').nextElementSibling
        content.classList.toggle('hidden')

    })
