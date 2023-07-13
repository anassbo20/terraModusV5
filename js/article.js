document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var articleId = urlParams.get("id");
  
    var articleTitre = document.getElementById("titre-article");
    var articleDate = document.getElementById("article-date");
    var articleComents = document.getElementById("article-comments");
    var articleImagesCont = document.getElementById("images-cont");
    var articleText = document.getElementById("content-article");
    var commentairesListe = document.getElementById("commentaires-liste");
    var commentaireFormulaire = document.getElementById("commentaire-formulaire");
  
    // Récupérer les détails de l'article depuis l'API
    fetch("http://localhost:3000/actualites/" + articleId)
      .then(function(response) {
        return response.json();
      })
      .then(function(article) {
        articleTitre.textContent = article.titre;
        articleDate.textContent = "Date de publication : " + article.date +" |";
        articleComents.textContent = article.commentaires+ " Commentaires";
        var articleImages = article.images.split(',');
        for (let i=0;i<articleImages.length;i++) {
          articleImagesCont.innerHTML += `
            <img class="img-article" src="images/${articleImages[i]}">
          `
        }
        articleText.textContent = article.text;
  
        // Afficher les commentaires
        article.commentaires.forEach(function(commentaire) {
          var commentaireItem = document.createElement("li");
          commentaireItem.textContent = commentaire.nom + ": " + commentaire.contenu;
          commentairesListe.appendChild(commentaireItem);
        });
      })
      .catch(function(error) {
        console.log("Une erreur s'est produite lors de la récupération des détails de l'article :", error);
      });
  
    // Gérer l'ajout de commentaires
    commentaireFormulaire.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var nom = document.getElementById("nom").value;
      var contenu = document.getElementById("commentaire").value;
  
      // Enregistrer le commentaire dans l'API
      fetch("http://localhost:3000/commentaires", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          articleId: articleId,
          nom: nom,
          contenu: contenu
        })
      })
        .then(function(response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Une erreur s'est produite lors de l'enregistrement du commentaire.");
          }
        })
        .then(function(commentaire) {
          // Ajouter le nouveau commentaire à la liste des commentaires affichés
          var nouveauCommentaire = document.createElement("li");
          nouveauCommentaire.textContent = commentaire.nom + ": " + commentaire.contenu;
          commentairesListe.appendChild(nouveauCommentaire);
  
          // Effacer les champs du formulaire
          document.getElementById("nom").value = "";
          document.getElementById("commentaire").value = "";
        })
        .catch(function(error) {
          console.log("Une erreur s'est produite lors de l'enregistrement du commentaire :", error);
        });
    });
  });
  