let plusBienBtn = document.querySelector(".bien-ajS");
const moinsBienBtn = document.querySelector(".bien-ajS.sup");
let elements = document.querySelectorAll("body .bien");
let index = 1;
let activLang = "frensh";
if (sessionStorage.getItem("activated-lang") != null)
  activLang = sessionStorage.getItem("activated-lang");
const transBien = [
  {
    frensh: "Ville",
    english: "City",
    spanish: "Ciudad",
    italie: "città",
    Dutch: "Stad",
  },
  {
    frensh: "Adresse",
    english: "Address",
    spanish: "DIRECCIÓN",
    italie: "Indirizzo",
    Dutch: "Adres",
  },
  {
    frensh: "Type de bien immobilier",
    english: "Type of real estate",
    spanish: "Tipo de inmueble",
    italie: "Tipo di immobile",
    Dutch: "Soort onroerend goed",
  },
  {
    frensh: "Quantité",
    english: "Quantity",
    spanish: "Cantidad",
    italie: "Quantità",
    Dutch: "Hoeveelheid",
  },
  {
    frensh: "Titre foncier",
    english: "Land title",
    spanish: "Título de tierra",
    italie: "Titolo della terra",
    Dutch: "Landstitel",
  },
  {
    frensh: "Superficie",
    english: "Area",
    spanish: "Área",
    italie: "La zona",
    Dutch: "Gebied",
  },
];

plusBienBtn.onclick = () => {
  const lastElement = elements[elements.length - 1];

  const villeElm = document.createElement("div");
  villeElm.classList.add(
    "bien",
    "u-form-group",
    "u-form-partition-factor-2",
    "u-form-group-12"
  );
  index++;

  villeElm.innerHTML = `
  <label for="v-${index}" class="u-custom-font u-font-arial u-label"
  >Ville</label
  >
  <span class="etoile-valid">*</span>
  <div class="u-form-select-wrapper">
    <select
      id="v-${index}"
      name="select-1"
      class="u-border-1 u-border-palette-1-dark-1 u-input u-input-rectangle u-palette-1-light-3 u-radius-5 u-text-grey-70 u-input-13"
    >
      <option value="0">choisissez une ville</option>
    </select>
    <span id="v-${index}-error" class="mess-error"></span>
    <svg
      class="u-caret u-caret-svg u-text-grey-70"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      style="fill: currentColor"
      xml:space="preserve"
    >
      <polygon class="st0" points="8,12 2,4 14,4 "></polygon>
    </svg>
  </div>
  `;
  lastElement.insertAdjacentElement("afterend", villeElm);

  affectListeVille(`v-${index}`);

  const adresseElm = document.createElement("div");
  adresseElm.classList.add(
    "bien",
    "u-form-group",
    "u-form-partition-factor-2",
    "u-form-group-13"
  );
  index++;

  adresseElm.innerHTML = `
      <label
      for="a-${index}"
      class="u-custom-font u-font-arial u-label"
      >${transBien[1][activLang]}</label
    >
    <input
      type="text"
      placeholder="Saisir l'addresse"
      id="a-${index}"
      name="text-5"
      class="phDevis-10 u-border-palette-1-dark-1 u-input u-input-rectangle u-palette-1-light-3 u-radius-5 u-text-grey-70 u-input-11"
    />
  `;
  villeElm.insertAdjacentElement("afterend", adresseElm);

  const typeBienElm = document.createElement("div");
  typeBienElm.classList.add(
    "u-form-group",
    "bien",
    "u-form-partition-factor-4",
    "u-form-select",
    "u-form-group-12"
  );
  index++;

  typeBienElm.innerHTML = `
      <label
        for="select-tBien-${index}"
        class="u-custom-font u-font-arial u-label"
        >${transBien[2][activLang]}</label
      >
      <div class="u-form-select-wrapper">
        <select
          id="select-tBien-${index}"
          name="typeBien"
          class="u-border-1 u-border-palette-1-dark-1 u-input u-input-rectangle u-palette-1-light-3 u-radius-5 u-text-grey-70 u-input-10"
        >
          <option value="Maison" data-calc="">Maison</option>
          <option value="Villa" data-calc="">Villa</option>
          <option value="Terrain" data-calc="">Terrain</option>
        </select>
        <svg
          class="u-caret u-caret-svg u-text-grey-70"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          style="fill: currentColor"
          xml:space="preserve"
        >
          <polygon class="st0" points="8,12 2,4 14,4 "></polygon>
        </svg>
      </div>
  `;

  adresseElm.insertAdjacentElement("afterend", typeBienElm);
  const quanElm = document.createElement("div");
  quanElm.classList.add(
    "u-form-group",
    "bien",
    "u-form-partition-factor-4",
    "u-form-group-13"
  );
  index++;
  quanElm.innerHTML = `
      <label for="q-${index}" class="u-custom-font u-font-arial u-label"
        >${transBien[3][activLang]}</label
      >
      <input
        type="text"
        placeholder=""
        id="q-${index}"
        name="qantite"
        class="u-border-1 u-border-palette-1-dark-1 u-input u-input-rectangle u-palette-1-light-3 u-radius-5 u-text-grey-70 u-input-11"
      />
  `;

  typeBienElm.insertAdjacentElement("afterend", quanElm);
  const titreF = document.createElement("div");
  titreF.classList.add(
    "u-form-group",
    "bien",
    "u-form-partition-factor-4",
    "u-form-group-14"
  );

  index++;
  titreF.innerHTML = `
        <label for="tf-${index}" class="u-custom-font u-font-arial u-label"
          >${transBien[4][activLang]}</label
        >
        <input
          type="text"
          placeholder=""
          id="tf-${index}"
          name="nTitreFoncier"
          class="u-border-1 u-border-palette-1-dark-1 u-input u-input-rectangle u-palette-1-light-3 u-radius-5 u-text-grey-70 u-input-12"
        />
  `;

  quanElm.insertAdjacentElement("afterend", titreF);
  const superficie = document.createElement("div");
  superficie.classList.add(
    "u-form-group",
    "bien",
    "u-form-partition-factor-4",
    "u-form-group-15"
  );
  index++;
  superficie.innerHTML = `
        <label for="s-${index}" class="u-custom-font u-font-arial u-label"
          >${transBien[5][activLang]}</label
        >
        <input
          type="text"
          placeholder=""
          id="s-${index}"
          name="superficie"
          class="u-border-1 u-border-palette-1-dark-1 u-input u-input-rectangle u-palette-1-light-3 u-radius-5 u-text-grey-70 u-input-13"
        />
  `;
  titreF.insertAdjacentElement("afterend", superficie);
  const map = document.createElement("div");
  map.classList.add("bien", "pos-cont");
  index++;
  map.innerHTML = `
      <p class="txt-position">
        Veuillez sélectionnez votre position ou saisir vos cordonnées
        (Longitude et Latitude):
      </p>
      <div class="pos">
        <div
          class="map folium-map"
          id="map_${index}"
        ></div>
        <div class="formLanLat">
                  <div
                    class="form-group"
                    style="
                      padding: 10px;
                      background-color: #f2f2f2;
                      border-radius: 5px;
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                      margin-bottom: 10px;
                    "
                  >
                    <label
                      id="dem-35"
                      for="lon-${index}"
                      style="
                        font-weight: bold;
                        font-size: 14px;
                        margin-bottom: 10px;
                        display: block;
                      "
                      >Longitude:</label
                    >
                    <input
                      type="float"
                      class="form-control"
                      id="lon-${index}"
                      style="
                        color: #77aad9;
                        padding-left: 5px;
                        border: none;
                        border-radius: 8px;
                      "
                      placeholder="Entre Longitude"
                      name="lon"
                    />
                  </div>
                  <div
                    class="form-group"
                    style="
                      padding: 10px;
                      background-color: #f2f2f2;
                      border-radius: 5px;
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                      margin-bottom: 10px;
                    "
                  >
                    <label
                      id="dem-36"
                      for="lat-${index}"
                      style="
                        font-weight: bold;
                        font-size: 14px;
                        margin-bottom: 10px;
                        display: block;
                      "
                      >Latitude:</label
                    >
                    <input
                      type="float"
                      class="form-control"
                      id="lat-${index}"
                      style="
                        color: #77aad9;
                        padding-left: 5px;
                        border: none;
                        border-radius: 8px;
                      "
                      placeholder="Entre Latitude"
                      name="lat"
                    />
                  </div>
                </div>
      </div>
  `;
  superficie.insertAdjacentElement("afterend", map);
  console.log(`v-${index - 6}`);
  addMap(`map_${index}`, `v-${index - 6}`, `lon-${index}`, `lat-${index}`);
  moinsBienBtn.style.display = "inline-block";
};

moinsBienBtn.onclick = () => {
  if (index != 1) {
    elements = document.querySelectorAll("body .bien:not(.deleted-biens)");
    const elmsToDelete = [
      elements[elements.length - 1],
      elements[elements.length - 2],
      elements[elements.length - 3],
      elements[elements.length - 4],
      elements[elements.length - 5],
      elements[elements.length - 6],
      elements[elements.length - 7],
    ];

    for (let i = 0; i < elmsToDelete.length; i++)
      elmsToDelete[i].classList.add("deleted-biens");
    index -= 7;
    if (index == 1) moinsBienBtn.style.display = "none";
  }
};

// checkbox behav
const firstChbx = document.getElementById("chbx-1");
const firstChbxCase = document.getElementById("radio-1");
const secondChbx = document.getElementById("chbx-2");
const secondChbxCase = document.getElementById("radio-2");
const secondCh = document.querySelectorAll(
  ".u-section-1 .second-ch,.u-section-1 .u-form-group:not(.first-ch)"
);
const firstCh = document.querySelectorAll(
  ".u-section-1 .first-ch,.u-section-1 .u-form-group:not(.second-ch)"
);

firstChbx.onclick = () => {
  const secondChamps = document.querySelectorAll(".u-section-1 .second-ch");

  for (let i = 0; i < firstCh.length; i++) {
    firstCh[i].style.display = "block";
  }
  for (let i = 0; i < secondChamps.length; i++) {
    secondChamps[i].style.display = "none";
  }
  document.querySelector(".infoP").style.display = "none";
};
secondChbx.onclick = () => {
  const firstChamps = document.querySelectorAll(".u-section-1 .first-ch");

  for (let i = 0; i < secondCh.length; i++) {
    secondCh[i].style.display = "block";
  }
  for (let i = 0; i < firstChamps.length; i++) {
    firstChamps[i].style.display = "none";
  }
  document.querySelector(".infoS").style.display = "none";
};
//
let consDocsElms = [];
let consDocsSuppElms = [];

//
let listActifsAdded = false;
function changeEvTypeImm() {
  const actifsList = document.querySelector(".listActifs");
  if (
    ["Imm", "Lotiss"].includes(
      document.getElementById("select-tBien-1").value
    ) &&
    !listActifsAdded
  )
    actifsList.style.display = "block";
  else actifsList.style.display = "none";
  consDocsElms = [];
  consDocsSuppElms = [];
  switch (document.getElementById("select-tBien-1").value) {
    case "Appart":
    case "Bureau":
    case "CommImm":
      consDocsElms = [
        "Certificat de copropriété",
        "Plan de copropriété",
        "Règlement de copropriété",
      ];
      break;
    case "Mais":
    case "Villa":
      consDocsElms = [
        "Certificat de propriété",
        "Plan cadastral",
        "Note de renseignement",
      ];
      consDocsSuppElms = [
        "Cahier des charges du lotissement",
        "Plan architecte ne variateur",
        "Autorisation de construire",
        "Permis d'habiter",
      ];
      break;
    case "Comm":
      consDocsElms = [
        "Certificat de propriété",
        "Plan cadastral",
        "Règlement de copropriété",
      ];
      break;
    case "Terr_Ur":
    case "Terr_Agr":
    case "Lot_Terr":
    case "Lotiss":
      consDocsElms = [
        "Certificat de propriété",
        "Plan cadastral",
        "Note de renseignement",
      ];
      break;
    default:
      consDocsElms = [
        "Certificat de propriété",
        "Plan de propriété",
        "Calcul de Contenance",
        "Note de renseignement",
      ];
      break;
  }
  const consDocsHolder = document.querySelector(".cons-docs");
  consDocsHolder.innerHTML = "";
  for (let i = 0; i < consDocsElms.length; i++) {
    consDocsHolder.innerHTML += `
        <div class="u-input-row">
          <input
            id="cons${i + 1}"
            type="checkbox"
            name="checkbox-cons"
            value="${consDocsElms[i]}"
            class="u-field-input"
          />
          <label class="u-field-label" for="cons${i + 1}"
            >${consDocsElms[i]}</label
          >
        </div>
    `;
  }
  for (let i = 0; i < consDocsSuppElms.length; i++) {
    consDocsHolder.innerHTML += `
        <div class="u-input-row">
          <input
            id="consSupp${i + 1}"
            type="checkbox"
            name="checkbox-cons"
            value="${consDocsSuppElms[i]}"
            class="u-field-input"
          />
          <label class="u-field-label" for="consSupp${i + 1}"
            >${consDocsSuppElms[i]}</label
          >
        </div>
    `;
  }
}

// api-connection

const form = document.getElementById("myForm");
const formBtn = document.getElementById("form-env");
console.log(form);

formBtn.addEventListener("click", function () {
  const formData = new FormData(form);
  let isValid;
  let objToSave = {};
  let url = "";
  let typeValeurEv =
    document.getElementById("rd-3").checked &&
    document.getElementById("rd-4").checked
      ? "LocativeVénale"
      : document.getElementById("rd-4").checked
      ? "Locative"
      : document.getElementById("rd-3").checked
      ? "Vénale"
      : "";

  let livs = "";
  for (let i = 0; i < 4; i++) {
    let liv = document.getElementById(`liv${i + 1}`);
    if (liv.checked) livs += `${liv.value},`;
  }
  livs = livs.slice(0, -1);
  let consDocs = "";
  for (let i = 0; i < consDocsElms.length; i++) {
    let cons = document.getElementById(`cons${i + 1}`);
    if (cons.checked) consDocs += `${cons.value},`;
  }
  consDocs = consDocs.slice(0, -1);
  let consDocsSupp = "";
  for (let i = 0; i < consDocsSuppElms.length; i++) {
    let consSupp = document.getElementById(`consSupp${i + 1}`);
    if (consSupp.checked) consDocsSupp += `${consSupp.value},`;
  }
  consDocsSupp = consDocsSupp.slice(0, -1);
  const immobs = [];
  let nActifs = document.getElementById("select-Nact-1");
  if (nActifs != null) nActifs = nActifs.value;
  else nActifs = "";
  for (let i = 1; i <= index; i++) {
    immobs.push({
      nTitreFoncier: document.getElementById(`tf-${i}`).value,
      typeBien: document.getElementById(`select-tBien-${i}`).value,
      qantite: document.getElementById(`q-${i}`).value,
      superficie: document.getElementById(`s-${i}`).value,
      ville: document.getElementById("v-1").value,
      nActifs: nActifs,
      adresse: document.getElementById("a-1").value,
    });
  }

  if (firstChbxCase.checked) {
    objToSave = {
      demandeurSte: {
        nomSte: document.getElementById("nomSte").value,
        ice: document.getElementById("ice").value,
        nomResponsable: document.getElementById("nomResponsable").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        siege: document.getElementById("siege").value,
      },
      besoin: document.getElementById("besoin").value,
      typeDevis: { id: document.getElementById("select-typeDev").value },
      lat: document.getElementById("lat").value,
      lon: document.getElementById("lon").value,
      typeValeurEv: typeValeurEv,
      typeBien: document.getElementById("select-tBien-1").value,
      livrables: livs,
      consDocs: consDocs,
      consDocsSupp: consDocsSupp,
      immobs: immobs,
    };
    isValid = validateForm(
      { value: objToSave.demandeurSte.nomSte, fieldName: "nomSte" },
      { value: objToSave.demandeurSte.email, fieldName: "email" },
      { value: objToSave.demandeurSte.ice, fieldName: "ice" },
      { value: objToSave.demandeurSte.phone, fieldName: "phone" },
      { value: objToSave.demandeurSte.phone, fieldName: "siege" },
      { value: objToSave.typeDevis.id, fieldName: "select-typeDev" },
      { value: objToSave.immobs[0].typeBien, fieldName: "select-tBien-1" },
      { value: objToSave.immobs[0].nTitreFoncier, fieldName: "tf-1" },
      { value: objToSave.immobs[0].qantite, fieldName: "q-1" },
      { value: objToSave.immobs[0].superficie, fieldName: "s-1" },
      { value: objToSave.immobs[0].ville, fieldName: "v-1" },
      { value: objToSave.immobs[0].adresse, fieldName: "a-1" }
    );

    if (!isValid) {
      return;
    }
    url = "http://localhost:8070/api/devise-ste-amiable/";
  } else {
    objToSave = {
      demandeurPersonne: {
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        cin: document.getElementById("cin").value,
      },
      besoin: document.getElementById("besoin").value,
      typeDevis: { id: 5 },
      lat: document.getElementById("lat").value,
      lon: document.getElementById("lon").value,
      typeValeurEv: typeValeurEv,
      typeBien: document.getElementById("select-tBien-1").value,
      livrables: livs,
      consDocs: consDocs,
      consDocsSupp: consDocsSupp,
      immobs: immobs,
    };

    isValid = validateForm(
      { value: objToSave.demandeurPersonne.nom, fieldName: "nom" },
      { value: objToSave.demandeurPersonne.prenom, fieldName: "prenom" },
      { value: objToSave.demandeurPersonne.email, fieldName: "email" },
      { value: objToSave.demandeurPersonne.cin, fieldName: "cin" },
      { value: objToSave.demandeurPersonne.phone, fieldName: "phone" },
      { value: objToSave.typeDevis, fieldName: "select-typeDev" },
      { value: objToSave.immobs[0].typeBien, fieldName: "select-tBien-1" },
      { value: objToSave.immobs[0].nTitreFoncier, fieldName: "tf-1" },
      { value: objToSave.immobs[0].qantite, fieldName: "q-1" },
      { value: objToSave.immobs[0].superficie, fieldName: "s-1" },
      { value: objToSave.immobs[0].ville, fieldName: "v-1" },
      { value: objToSave.immobs[0].adresse, fieldName: "a-1" }
    );

    if (!isValid) {
      return;
    }
    url = "http://localhost:8070/api/devise-personne-amiable/";
  }
  console.log(objToSave);
  fetch(url, {
    method: "POST",
    body: JSON.stringify(objToSave),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) openPopup();
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
});

function validateForm(...fields) {
  var isValid = true;

  // Clear previous validation errors
  clearValidationErrors();

  fields.forEach((field) => {
    var { value, fieldName } = field;
    if (fieldName == "email" && !isValidEmail(value)) {
      displayValidationError(
        fieldName,
        "Veuillez saisir une adresse email valide !"
      );
      isValid = false;
    } else if (
      ["select-typeDev", "select-tBien-1", "v-1"].includes(fieldName) &&
      value == "0"
    ) {
      displayValidationError(fieldName, "Veuillez selectionnez un choix !");
      isValid = false;
    } else if (isEmpty(value)) {
      displayValidationError(fieldName, "champ obligatoire !");
      isValid = false;
    }
  });

  return isValid;
}

function isEmpty(value) {
  return value.trim() === "";
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayValidationError(fieldId, errorMessage) {
  var field = document.getElementById(fieldId);
  field.classList.add("error");
  var errorField = document.getElementById(fieldId + "-error");
  errorField.innerText = errorMessage;
  errorField.style.display = "inline";
  setTimeout(() => {
    errorField.style.display = "none";
  }, 3000);
  window.scrollTo({
    top: 200,
    behavior: "smooth",
  });
}

function clearValidationErrors() {
  var fields = document.querySelectorAll(".error");
  fields.forEach(function (field) {
    field.classList.remove("error");
  });

  var errorFields = document.querySelectorAll(".mess-error");
  errorFields.forEach(function (errorField) {
    errorField.style.display = "none";
  });
}

function showPopup(message) {
  var popup = document.getElementById("popup");
  popup.get;
  popup.innerText = message;
  popup.style.display = "block";
  setTimeout(function () {
    popup.style.display = "none";
  }, 3000);
}

const listInputs = document.querySelectorAll(
  'input:not([type="radio"],[type="checkbox"],#nomResponsable)'
);

for (let i = 0; i < listInputs.length; i++) {
  console.log(listInputs[i]);
  listInputs[i].addEventListener("blur", removeErrBorder);
}

function removeErrBorder(e) {
  if (e.target.value == "0" || !isEmpty(e.target.value))
    e.target.classList.remove("error");
  else e.target.classList.add("error");
}

function changeEv() {
  const selectElm = document.getElementById("select-typeDev");
  console.log(selectElm.selectedIndex);
  if (
    (selectElm.selectedIndex == 1 || selectElm.selectedIndex == 5) &&
    (firstChbxCase.checked || secondChbxCase.checked)
  ) {
    document.querySelector(".pos-cont").style.display = "block";
  } else document.querySelector(".pos-cont").style.display = "none";
}

if (sessionStorage.getItem("devis") != null) {
  const listDev = document.getElementById("select-typeDev");
  switch (sessionStorage.getItem("devis")) {
    case "opci":
      listDev.selectedIndex = 1;
      break;
    case "grand-compte":
      listDev.selectedIndex = 2;
      break;
    case "banque":
      listDev.selectedIndex = 3;
      break;
    case "assurance":
      listDev.selectedIndex = 4;
      break;
    case "amJud":
      listDev.selectedIndex = 5;
      break;
    case "etude-marche":
      listDev.selectedIndex = 6;
      break;
    case "conseil":
      listDev.selectedIndex = 7;
      break;
    case "topog":
      listDev.selectedIndex = 8;
      break;
    case "scan-cadastre":
      listDev.selectedIndex = 9;
      break;
    case "scan":
      listDev.selectedIndex = 10;
      break;
    case "lid":
      listDev.selectedIndex = 11;
      break;
    case "sig":
      listDev.selectedIndex = 12;
      break;
    case "bim":
      listDev.selectedIndex = 13;
      break;
    case "bigdata":
      listDev.selectedIndex = 14;
      break;
  }
}

// script map

addMap("map_1", "v-1", "lon-1", "lat-1");

function addMap(idMap, LV, idLon, idLat) {
  var mapOptions = {
    center: [33.761635415553044, -7.2549917969776265],
    crs: L.CRS.EPSG3857,
    zoom: 7,
  };
  var map = L.map(idMap, mapOptions);
  // Define the first map layer
  var tile_layer_1f3b1d32c0ba7226db3392651aac0919 = L.tileLayer(
    "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
    { maxZoom: 21 }
  ).addTo(map);
  // Define the second map layer
  var terrainLayer = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 21,
      attribution:
        'Map data &copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>',
    }
  );
  // Define the third map layer
  var HikeBike = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 21,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }
  );
  var mapLayerGroup = L.layerGroup([
    tile_layer_1f3b1d32c0ba7226db3392651aac0919,
    terrainLayer,
    HikeBike,
  ]);
  var mapLayers = {
    Satellite: tile_layer_1f3b1d32c0ba7226db3392651aac0919,
    Terrain: terrainLayer,
    "Hike Bike map": HikeBike,
  };

  var layerControl = L.control.layers(mapLayers, null, {
    position: "topright",
  });
  layerControl.addTo(map);
  mapLayerGroup.addTo(map);

  var marker;
  var lat_lng_popup_d671e65ffb65902720dad1cc84497830 = L.popup();

  function latLngPop(e) {
    // Remove the previous marker if it exists
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    var pos = e.latlng;
    document.querySelector(`#${idLon}`).value = pos.lng;
    document.querySelector(`#${idLat}`).value = pos.lat;

    var url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.lat}&lon=${pos.lng}`;
    console.log(url); // Add this line
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        var address = data.display_name;

        var icon = L.icon({
          iconUrl:
            "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });

        marker = L.marker([pos.lat, pos.lng], { icon: icon }).addTo(map);
        marker.bindPopup(`Address: ${address}`).openPopup();
        marker.bringToFront();
      })
      .catch((error) => console.error(error));
  }
  map.on("click", latLngPop);

  // Create the base layers
  var streetMapLayer = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }
  );

  var satelliteMapLayer = L.tileLayer(
    "https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    {
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      attribution:
        'Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>',
    }
  );

  // Add the base layers to the map
  streetMapLayer.addTo(map); // Default to street map layer

  // Create an object to hold the base layers
  var baseLayers = {
    "Street Map": streetMapLayer,
    Satellite: satelliteMapLayer,
  };

  // Create a layer control and add it to the map
  L.control.layers(baseLayers).addTo(map);

  function displaySelectedCity() {
    var selectedCity = document.getElementById(LV).value;
    var apiUrl =
      "https://nominatim.openstreetmap.org/search?format=json&q=" +
      selectedCity;

    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.length > 0) {
          var lat = parseFloat(data[0].lat);
          var lon = parseFloat(data[0].lon);

          map.setView([lat, lon], 15); // Zoom level 12 for detailed city view

          L.marker([lat, lon]).addTo(map); // Add a marker at the selected city's coordinates
          document.querySelector(`#${idLon}`).value = lon;
          document.querySelector(`#${idLat}`).value = lat;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Call the displaySelectedCity function when the city selection changes
  document.getElementById(LV).addEventListener("change", displaySelectedCity);
}

const villesList = [
    "Agadir",
    "Ahfir",
    "Aït Melloul",
    "Al Hoceima",
    "Asilah",
    "Azemmour",
    "Azrou",
    "Beni Mellal",
    "Berkane",
    "Berrechid",
    "Boujdour",
    "Boulemane",
    "Casablanca",
    "Chefchaouen",
    "Dakhla",
    "El Jadida",
    "El Kelâa des Sraghna",
    "Errachidia",
    "Essaouira",
    "Fès",
    "Fkih Ben Salah",
    "Guelmim",
    "Ifrane",
    "Inezgane",
    "Jerada",
    "Kénitra",
    "Khémisset",
    "Khouribga",
    "Ksar El Kebir",
    "Laâyoune",
    "Larache",
    "Marrakech",
    "Meknès",
    "Mohammedia",
    "Nador",
    "Ouarzazate",
    "Oued Zem",
    "Oujda",
    "Rabat",
    "Safi",
    "Salé",
    "Sefrou",
    "Settat",
    "Sidi Bennour",
    "Sidi Ifni",
    "Sidi Kacem",
    "Sidi Slimane",
    "Skhirate",
    "Tan-Tan",
    "Tangier",
    "Taourirt",
    "Taroudant",
    "Tata",
    "Taza",
    "Témara",
    "Tétouan",
    "Tinghir",
    "Tiznit",
    "Youssoufia",
    "Zagora"
]

affectListeVille("v-1");

function affectListeVille(id) {
  let listV = document.getElementById(id);
  for (let i = 0; i < villesList.length; i++) {
  listV.innerHTML += `
    <option value="${villesList[i]}">${villesList[i]}</option>
  `;
}
}
//
const popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}
