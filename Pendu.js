const btnValiderMot = document.getElementById("btnValiderMot");
const zoneSaisie = document.getElementById("inputEcriture");
const zoneMotADeviner = document.getElementById("motADeviner");
const zoneEssaiRestant = document.querySelector("#zoneReponseProposition span");
const zoneImage = document.querySelector("#imageDuJeu");
const btnsLettre = document.querySelectorAll(".boiteLettre");
const zoneReponseProposition = document.getElementById(
  "zoneReponseProposition"
);
const zoneLettreDejaProposees = document.getElementById(
  "zoneLettreDejaProposees"
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

function ajouterEspace(mot) {
  let motAvecEspace = mot;
  motAvecEspace = motAvecEspace.split("").join(" ") + " "; //Permet de rajouter des espaces entre chaque lettre du mot donné et un à la fin.
  return motAvecEspace;
}

function majImage() {
  zoneImage.removeChild(zoneImage.firstElementChild);
  let img = document.createElement("img");
  img.setAttribute("src", `images/${numeroImg}.png`);
  zoneImage.appendChild(img);
}

function proposition(mot) {
  let motADeviner = affichageMotCache(mot);
  motAvecEspace = ajouterEspace(mot);
  console.log(motAvecEspace);
  zoneMotADeviner.innerHTML = motADeviner;
  zoneEssaiRestant.innerHTML = essai;

  btnsLettre.forEach((image) => {
    image.addEventListener("click", (e) => {
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
          zoneMotADeviner.innerHTML = motADeviner;
          lettrePresente = true;
        }
      }
      if (lettrePresente === false) {
        lettreProposee.push(" " + choixJoueur);
        zoneLettreDejaProposees.innerHTML = lettreProposee;
        zoneLettreDejaProposees.style.background = "red";
        essai--;
        numeroImg++;
        majImage();
        zoneEssaiRestant.innerHTML = essai;
      }
      if (motADeviner === motAvecEspace) {
        zoneReponseProposition.textContent = "Bravo 🎉🎉🎉";
      } else if (essai === 0) {
        zoneReponseProposition.textContent = "C'est perdu 😭😭😭";
      }
    });
  });
}
proposition("QUOICOUBEH");
