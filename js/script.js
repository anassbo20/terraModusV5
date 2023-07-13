document.addEventListener("DOMContentLoaded", function() {
    var actualitesContainer = document.getElementById("articles-container");
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
  
    let articlesData = [];

    // Récupérer les données depuis l'API
    fetch("http://localhost:3000/actualites")
      .then(function(response) {
        return response.json();
      })
      .then(articles => {
        articlesData = articles;
        renderArticles(articlesData);
      })
      .catch(function(error) {
        console.log("Une erreur s'est produite lors de la récupération des actualités :", error);
      });

      function renderArticles(articles) {

        actualitesContainer.innerHTML = '';

        if (articles.length === 0) {
          actualitesContainer.innerHTML = '<p>Aucun article trouvé.</p>';
        } else {
          articles.forEach(function(article) {
            var box = document.createElement("div");
            box.className = "article";
            if (article.images != "") {
              var firstImage = article.images.split(',');
              var image = document.createElement("img");
              image.style.width = "100%";
              image.src = "images/" + firstImage[0];
              image.alt = article.titre;
              box.appendChild(image);
            }

            var titre = document.createElement("h3");
            titre.textContent = article.titre;
    
            var date = document.createElement("span");
            date.classList.add("date");
            date.textContent = "Date de publication : " + article.date + 
                              " | " + article.commentaires + " commentaires | par Terra Modus";
    
            var commentaires = document.createElement("p");
            commentaires.textContent = article.commentaires + " commentaires";
            commentaires.classList.add("comment");
    
            box.appendChild(date);
            box.appendChild(titre);
    
            box.addEventListener("click", function() {
              // Rediriger vers la page de détails de l'article
              window.location.href = "article.html?id=" + article.id;
            });
    
            actualitesContainer.appendChild(box);
          });
        }
      }

      searchForm.addEventListener('submit', event => {
        event.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredArticles = articlesData.filter(
          article =>
            article.titre.toLowerCase().includes(searchTerm) 
        );
        renderArticles(filteredArticles);
      });
  });
  