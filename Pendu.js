const zoneMotADeviner2 = document.querySelector(".motADeviner2");
const zoneMotADeviner = document.getElementById("motADeviner");
const zoneImage = document.querySelector("#imageDuJeu");
const btnsLettre = document.querySelectorAll(".boiteLettre img");
const zoneReponseProposition = document.getElementById(
  "zoneReponseProposition"
);
let lettreProposee = [];
let numeroImg = 0;
let essai = 11;
majImage();

function affichageMotCache(mot) {
  let motVide = "";
  for (let i = 0; i < mot.length; i++) {
    let lettreAAjouter = "_ ";
    motVide = motVide + lettreAAjouter;
  }
  return motVide;
}

function affichageMotCache2(mot) {
  for (let i = 0; i < mot.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "lettreVide");
    newDiv.setAttribute("id", i);
    zoneMotADeviner2.appendChild(newDiv);
  }
}

function ajouterEspace(mot) {
  let motAvecEspace = mot;
  motAvecEspace = motAvecEspace.split("").join(" ") + " "; //Permet de rajouter des espaces entre chaque lettre du mot donné et un à la fin.
  return motAvecEspace;
}

function majImage() {
  if (zoneImage.children.length > 0) {
    zoneImage.removeChild(zoneImage.firstElementChild);
    let img = document.createElement("img");
    img.setAttribute("src", `images/${numeroImg}.png`);
    zoneImage.appendChild(img);
  } else {
    let img = document.createElement("img");
    img.setAttribute("src", `images/${numeroImg}.png`);
    zoneImage.appendChild(img);
  }
}
function majLettreUnique(position, lettre) {
  let lettreTrouvee = document.getElementById(position);
  console.log(lettreTrouvee.children);
  if (lettreTrouvee.children.length > 0) {
    lettreTrouvee.removeChild(lettreTrouvee.firstElementChild);
  }
  lettreTrouvee.style.border.display = "none";
  let imgAAjouter = document.createElement("img");
  imgAAjouter.setAttribute("src", `images/${lettre}.png`);
  lettreTrouvee.appendChild(imgAAjouter);
}

function proposition(mot) {
  affichageMotCache2(mot);
  let motADeviner = affichageMotCache(mot);
  motAvecEspace = ajouterEspace(mot);
  console.log(motAvecEspace);

  btnsLettre.forEach((image) => {
    image.addEventListener("click", (e) => {
      console.log(e);
      let choixJoueur = e.target.classList[0];
      let lettrePresente = false;
      choixJoueur = choixJoueur.toUpperCase();
      console.log(choixJoueur);
      for (let i = 0; i < mot.length; i++) {
        if (choixJoueur === mot[i]) {
          motADeviner =
            motADeviner.substring(0, i * 2) +
            choixJoueur +
            motADeviner.substring(i * 2 + 1); // Permet de remplacer le caractère " _ " par le caractère trouvé par l'utilisateur. Mais je comprends pas bien cette deuxième partie."
          console.log(motADeviner);
          let lettreTrouvee = document.getElementById(i);
          lettreTrouvee = lettreTrouvee.id;
          majLettreUnique(lettreTrouvee, mot[i]);

          console.log(lettreTrouvee);
          lettrePresente = true;
          console.log(lettrePresente);
          e.target.style.backgroundColor = "green";
        }
      }
      if (lettrePresente === false) {
        console.log(lettrePresente);
        lettreProposee.push(" " + choixJoueur);
        e.target.style.backgroundColor = "red";
        essai--;
        numeroImg++;
        majImage();
      }
      if (motADeviner === motAvecEspace) {
        alert("Bravo 🎉🎉🎉");
      } else if (essai === 0) {
        alert("C'est perdu 😭😭😭");
      }
    });
  });
}
proposition("SAPERLIPOPETTE");
