var keyWordsMapping = [
    {
        "keywords" : ["devi","cit","quot","quote","estim","estimate"],
        "dest" : "Demande-devis.html"
    },
    {
        "keywords" : ["opci","Organisme de Placement Collectif en Immobilier",
                      "Collective Investment Scheme in Real Estate","Fondo di investimento immobiliare",
                      "Organismo de inversión colectiva inmobiliaria","Collectieve belegging in vastgoed"],
        "dest" : "OPCI.html"
    },
    {
        "keywords" : ["banque","bank","Banc"],
        "dest" : "Banques.html"
    },
    {
        "keywords" : ["assurance","Seguros","Verzekering","Assicurazione"],
        "dest" : "Assurances.html"
    },
    {
        "keywords" : ["marché","marche","Market","mercado","mercato","Markt"],
        "dest" : "Etudes-de-marches.html"
    },
    {
        "keywords" : ["Conseil","Consult","Consulenza","Advisering"],
        "dest" : "Conseil-en-immobilier.html"
    },
    {
        "keywords" : ["BIM","scan","Escanear","Scannen","Scansione"],
        "dest" : "scan-to-bim.html"
    },
    {
        "keywords" : ["Levé","Leve","Inspection","Dron","Survey","Encuesta","Inspección","Enquête","inspectie","Rilievi","ispezioni"],
        "dest" : "Leves-inspections-drones.html"
    },
    {
        "keywords" : ["sig","web","Mapping","GIS"],
        "dest" : "sig-et-web-mapping.html"
    },
]

const searchIcone = document.querySelector(".search");

searchIcone.addEventListener("click", () => {
    setTimeout(()=> {
        document.getElementById('form-search').addEventListener('submit', e => {
            e.preventDefault();
            let searchVal = document.querySelector("#form-search .input-search").value;
            for (let i=0;i<keyWordsMapping.length;i++) {
                for (let j=0;j<keyWordsMapping[i].keywords.length;j++) {
                    if (searchVal.toLowerCase().includes(keyWordsMapping[i].keywords[j].toLowerCase()))
                        window.location.href = keyWordsMapping[i].dest;
                }
            }
        });
    },1000)
})