document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch("http://localhost:3000/api/articles");
        const data = await response.json();
        const articlesList = document.getElementById('articlesList');

        data.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.classList.add('article-card');
            articleCard.innerHTML = `
                <h2>${article.title}</h2>
                <img src="${article.cover_image}" alt="${article.title}">
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            articlesList.appendChild(articleCard);
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
});
