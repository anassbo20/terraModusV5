//search section
let searchIcon = document.querySelector(".search");

searchIcon.addEventListener("click", () => {
  if (document.querySelector('.overlay-search') == null) {
    const overlay = document.createElement("div");
  overlay.classList.add("overlay-search");

  const contSearch = document.createElement("div");
  contSearch.classList.add("container-search");
  overlay.appendChild(contSearch);

  const formInput = document.createElement("form");
  formInput.setAttribute('id','form-search');
  contSearch.appendChild(formInput);

  const searchInput = document.createElement("input");
  searchInput.classList.add("input-search");
  searchInput.setAttribute("placeholder", "vos mots clés");
  formInput.appendChild(searchInput);

  const searchIcon1 = document.createElement("i");
  searchIcon1.classList.add(
    "fa-solid",
    "fa-magnifying-glass",
    "search-icon-inp"
  );
  formInput.appendChild(searchIcon1);

  const closeIconCont = document.createElement("div");
  closeIconCont.classList.add("close-icon");
  overlay.appendChild(closeIconCont);
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fa-solid", "fa-xmark");
  closeIcon.style.cursor = "pointer";
  closeIconCont.appendChild(closeIcon);

  closeIconCont.addEventListener("click", () => {
    overlay.style.display = "none";
  });
  document.body.appendChild(overlay);
  }
  else document.querySelector('.overlay-search').style.display = "block";
});

let sideBarIcon = document.querySelector(".sidebar-icon");

sideBarIcon.addEventListener("click", () => {
  let overlay = document.createElement("div");
  overlay.classList.add("overlay-sidebar");
  document.body.appendChild(overlay);

  let sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  let containerLogo = document.createElement("div");
  containerLogo.style = "text-align: center; margin-top:3rem;";
  sidebar.appendChild(containerLogo);
  let logo = document.createElement("img");
  logo.setAttribute("src", "images/logo-terramoduss.png");
  logo.style = "width: 70%;";
  containerLogo.appendChild(logo);

  let textSidebar = document.createElement("div");
  textSidebar.textContent = `Dynamique dans une diversité d’activité et domaines, la société Terra Modus propose une offre modulable, composée de activités diversifiés. Terra Modus s'article autour de cinq axes principaux :
    `;
  let p1 = document.createElement("p");
  p1.textContent = "1- Expertises immobilières.";
  textSidebar.appendChild(p1);
  let p2 = document.createElement("p");
  p2.textContent = "2- Études topographiques, cadastrales et foncières.";
  textSidebar.appendChild(p2);
  let p3 = document.createElement("p");
  p3.textContent = "3- Solutions digitales.";
  textSidebar.appendChild(p3);
  let p4 = document.createElement("p");
  p4.textContent =
    "4- Conseils juridiques, techniques et économique en immobilier.";
  textSidebar.appendChild(p4);
  let p5 = document.createElement("p");
  p5.textContent = "5- Formations spécialisées en immobillier";
  textSidebar.appendChild(p5);
  let p6 = document.createElement("p");
  p6.style = `font-weight:bold;font-size:0.75rem;`;
  p6.textContent = "ADDRESS: ";
  textSidebar.appendChild(p6);
  let p7 = document.createElement("p");
  p7.textContent =
    "Imm A, Appt 03 461 Boulevard Amina Bint Wahb, Témara, Maroc, Témara 12040​.";
  p7.style.marginTop = "10px !important";
  textSidebar.appendChild(p7);
  let p8 = document.createElement("p");
  p8.style = `font-weight:bold;font-size:0.75rem;`;
  p8.textContent = "Email: ";
  textSidebar.appendChild(p8);
  textSidebar.classList.add("text-sidebar");

  sidebar.appendChild(textSidebar);

  overlay.onclick = () => {
    overlay.style.display = "none";
    sidebar.style.display = "none";
  };

  document.body.appendChild(sidebar);
});

// switch images section

const imgsS1 = [
  "img-s1/img1.jfif",
  "img-s1/img2.jpeg",
  "img-s1/img3.jpg",
  "img-s1/img4.png",
  "img-s1/img5.jpg",
  "img-s1/img6.png",
  "img-s1/img7.jpg",
  "img-s1/img8.png",
  "img-s1/img9.jpg",
  "img-s1/img10.png",
  "img-s1/img11.jpg",
  "img-s1/img12.png",
  "img-s1/img13.jpg",
  "img-s1/img14.png",
  "img-s1/img15.jpg",
  "img-s1/img16.png",
  "img-s1/img17.jpg",
  "img-s1/img18.png",
  "img-s1/img19.jpg",
  "img-s1/img20.png",
  "img-s1/img21.png",
  "img-s1/img22.png",
  "img-s1/img23.jfif",
  "img-s1/img24.jpg",
  "img-s1/img25.png",
  "img-s1/img26.png",
  "img-s1/img27.png",
  "img-s1/img28.png",
  "img-s1/img29.png",
  "img-s1/img30.png",
  "img-s1/img31.png",
  "img-s1/img32.png",
  "img-s1/img33.png",
  "img-s1/img34.png",
  "img-s1/img35.png",
  "img-s1/img36.jfif",
  "img-s1/img37.jpg",
  "img-s1/img38.png",
  "img-s1/img39.png",
  "img-s1/img40.png",
  "img-s1/img41.png",
  "img-s1/img42.jfif",
  "img-s1/img43.jpg",
  "img-s1/img44.png",
  "img-s1/img45.jfif",
  "img-s1/img46.jpg",
  "img-s1/img47.png",
  "img-s1/img48.jfif",
  "img-s1/img49.jpg",
  "img-s1/img50.png",
  "img-s1/img51.jpg",
  "img-s1/img52.PNG",
  "img-s1/img53.jpg",
  "img-s1/img54.png",
  "img-s1/img55.jpg",
  "img-s1/img56.png",
];

const imgsS2 = [
  "img-s2/img1.png",
  "img-s2/img2.jpg",
  "img-s2/img3.png",
  "img-s2/img4.jpg",
  "img-s2/img5.png",
  "img-s2/img6.jpg",
  "img-s2/img7.png",
  "img-s2/img8.png",
  "img-s2/img9.png",
  "img-s2/img10.png",
  "img-s2/img11.jpg",
];

switchImages(
  "btn-prev1",
  "btn-next1",
  imgsS1,
  ".container-imgs1",
  ".img-slide1"
);
switchImages(
  "btn-prev2",
  "btn-next2",
  imgsS2,
  ".container-imgs2",
  ".img-slide2"
);

function switchImages(
  prevBtnId,
  nextBtnId,
  imagesS,
  containerImgs,
  imagesPlaceholder
) {
  const container = document.querySelector(containerImgs);
  const images = imagesS;
  const imagesDisplayed = document.querySelectorAll(imagesPlaceholder);
  const numImages = images.length;
  let currentIndex = 0;
  let intervalId;

  document.getElementById(prevBtnId).addEventListener("click", prev);
  document.getElementById(nextBtnId).addEventListener("click", next);

  startSlideshow();

  function startSlideshow() {
    intervalId = setInterval(next, 2000);
  }

  function stopSlideshow() {
    clearInterval(intervalId);
  }

  function next() {
    const newIndex = (currentIndex + 6) % numImages;
    showImages(newIndex);
  }

  function prev() {
    const newIndex = (currentIndex - 6 + numImages) % numImages;
    showImages(newIndex);
  }

  function showImages(startIndex) {
    let j = 0;
    for (let i = startIndex; i < startIndex + 6; i++) {
      imagesDisplayed[j].setAttribute("src", images[i % numImages]);
      j++;
    }
    currentIndex = startIndex;
  }

  showImages(0);

  container.addEventListener("mouseover", stopSlideshow);
  container.addEventListener("mouseout", startSlideshow);
}

const playBtn = document.querySelector(".btn-play");

playBtn.addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay-present");
  overlay.innerHTML = `<iframe
                            class="video-present"
                            src="https://www.youtube.com/embed/Vak7wL74NwU"
                            title="Présentation Terra Modus"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe> `;

  const sectPresentation = document.querySelector(".present-terra");
  sectPresentation.style.visibility = "hidden";

  overlay.onclick = () => {
    overlay.style.display = "none";
    sectPresentation.style.visibility = "visible";
  };
  document.body.appendChild(overlay);
});

// chatbot
const chatView = document.querySelector(".chat");
const chatbot = document.querySelector(".chatbot");
const chatbotxmark = document.querySelector(".chatbot .xmark");

chatView.addEventListener("click", () => {
  chatbot.style.display = "block";
  chatView.style.display = "none";
});
chatbotxmark.addEventListener("click", () => {
  chatbot.style.display = "none";
  chatView.style.display = "block";
});

const chatbotMessage = document.getElementById("chatbot-message");
const chatbotSubmit = document.querySelector(".btn-chat");
var contMsgs = document.querySelector(".middle .voldemort");
var cacheChatbot = localStorage.getItem("cache-chatbot");

if (cacheChatbot !== null) contMsgs.innerHTML = cacheChatbot;

chatbotSubmit.addEventListener("click", () => {
  const message = chatbotMessage.value.trim();

  if (message.length > 0) {
    contMsgs.innerHTML += `
        <div class="outgoing">
          <div class="bubble">${message}</div>
        </div>
    `;
    cacheChatbot = contMsgs.innerHTML;
    localStorage.setItem("cache-chatbot", cacheChatbot);


    setTimeout(() => {
      fetch("http://localhost:3000/Msgs")
        .then((response) => response.json())
        .then((data) => {
          let finded = false;
          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].incommingMsg.length; j++) {
              if (message.toLowerCase().includes(data[i].incommingMsg[j].toLowerCase())) {
                finded = true;
                contMsgs.innerHTML += `
              <div class="incoming">
                <div class="bubble">${data[i].outcommingMsg}</div>
              </div>
              `;
                cacheChatbot = contMsgs.innerHTML;
                localStorage.setItem("cache-chatbot", cacheChatbot);
              }
            }
            
          }
          if (!finded) {
            contMsgs.innerHTML += `
           <div class="incoming">
              <div class="bubble">bonjour, Comment pouvons nous vous aidez ?</div>
           </div>
           `;
            cacheChatbot = contMsgs.innerHTML;
            localStorage.setItem("cache-chatbot", cacheChatbot);
          }
        })
        .catch((error) => console.error(error));
    }, 1000);
  }
});

// popup translation
const popupTrans = document.createElement("div");
popupTrans.classList.add("popup-trans");

const overlayTrans = document.createElement("div");
overlayTrans.classList.add("overlay-sidebar");
overlayTrans.style.cursor = "default";

const iconTrans = document.createElement("i");
iconTrans.classList.add("fa-solid", "fa-globe", "icon-trans");
popupTrans.appendChild(iconTrans);

const senTrans = document.createElement("p");
senTrans.textContent = "In which language would you like to navigate ?";
senTrans.classList.add("sent-trans");
popupTrans.appendChild(senTrans);

const contLangs = document.createElement("div");
contLangs.classList.add("cont-langs");

const contTopLangs = document.createElement("div");
contTopLangs.classList.add("hold-top-lang");

const contFr = document.createElement("span");
contFr.textContent = "Francais";
contFr.classList.add("hold-lang");

const contEn = document.createElement("span");
contEn.textContent = "English";
contEn.classList.add("hold-lang");

const contAr = document.createElement("span");
contAr.textContent = "العربية";
contAr.classList.add("hold-lang");

const contEs = document.createElement("span");
contEs.textContent = "Espanol";
contEs.classList.add("hold-lang");

contTopLangs.appendChild(contFr);
contTopLangs.appendChild(contEn);
contTopLangs.appendChild(contAr);
contTopLangs.appendChild(contEs);

contLangs.appendChild(contTopLangs);

const contBottomLangs = document.createElement("div");
contBottomLangs.classList.add("hold-bottom-lang");

const contNed = document.createElement("span");
contNed.textContent = "Nederlands";
contNed.classList.add("hold-lang");

const contIt = document.createElement("span");
contIt.textContent = "Italiano";
contIt.classList.add("hold-lang");

contBottomLangs.appendChild(contNed);
contBottomLangs.appendChild(contIt);

contLangs.appendChild(contBottomLangs);
popupTrans.appendChild(contLangs);

const xmarkTrans = document.createElement("span");
xmarkTrans.classList.add("xmark-trans");
const iconxmarkTrans = document.createElement("i");
iconxmarkTrans.classList.add("fa-solid", "fa-xmark");
xmarkTrans.appendChild(iconxmarkTrans);
popupTrans.appendChild(xmarkTrans);

xmarkTrans.onclick = () => {
  overlayTrans.style.display = "none";
  popupTrans.style.display = "none";
};

document.body.appendChild(overlayTrans);
document.body.appendChild(popupTrans);

reloadTrans();

if (sessionStorage.getItem("activated-lang") != null) {
  popupTrans.style.display = "none";
  overlayTrans.style.display = "none";
}

window.addEventListener("afterunload", function(event) {
  reloadTrans();
  popupTrans.style.display = "none";
  overlayTrans.style.display = "none";
});

contEn.addEventListener("click", () => {
  clickTranseEven("english");
  updatelangList(document.querySelector(`[data-trans="english"]`));
});

contEs.addEventListener("click", () => {
  clickTranseEven("spanish");
  updatelangList(document.querySelector(`[data-trans="spanish"]`));
});

contIt.addEventListener("click", () => {
  clickTranseEven("italie");
  updatelangList(document.querySelector(`[data-trans="italie"]`));
});

contNed.addEventListener("click", () => {
  clickTranseEven("Dutch");
  updatelangList(document.querySelector(`[data-trans="Dutch"]`));
});

contFr.addEventListener("click", () => {
  popupTrans.style.display = "none";
  overlayTrans.style.display = "none";
  updatelangList(document.querySelector(`[data-trans="frensh"]`));
});

contAr.addEventListener("click", () => {
  window.location.href = 'AccueilAr.html';
});

function clickTranseEven(lang) {
  translateTo(lang);
  popupTrans.style.display = "none";
  overlayTrans.style.display = "none";
}