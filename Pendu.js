function afficherMotConsole(mot) {
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

function proposition(mot) {
  let essai = 10;
  let lettreProposee = [];

  let zoneReponseProposition = document.getElementById(
    "zoneReponseProposition"
  );
  let zoneLettreDejaProposees = document.getElementById(
    "zoneLettreDejaProposees"
  );
  let btnValiderMot = document.getElementById("btnValiderMot");
  let zoneSaisie = document.getElementById("inputEcriture");
  let zoneMotADeviner = document.getElementById("motADeviner");
  let zoneEssaiRestant = document.querySelector("#zoneReponseProposition span");

  let motADeviner = afficherMotConsole(mot);

  motAvecEspace = ajouterEspace(mot);
  console.log(motAvecEspace);

  zoneMotADeviner.innerHTML = motADeviner;
  zoneEssaiRestant.innerHTML = essai;

  btnValiderMot.addEventListener("click", () => {
    let lettrePresente = false;
    if (zoneSaisie.value.length > 1) {
      alert("Tu dois écrire une seule lettre");
      zoneSaisie.value = ""; // ce bout de code permet de ne pas tourner en boucle mais fait perdre un essai. Comment modifier ?
    }
    for (let i = 0; i < mot.length; i++) {
      zoneSaisie.value = zoneSaisie.value.toUpperCase();
      console.log(zoneSaisie.value);
      if (zoneSaisie.value === mot[i]) {
        motADeviner =
          motADeviner.substring(0, i * 2) +
          zoneSaisie.value +
          motADeviner.substring(i * 2 + 1); // Permet de remplacer le caractère " _ " par le caractère trouvé par l'utilisateur. Mais je comprends pas bien cette deuxième partie."
        console.log(motADeviner);
        zoneMotADeviner.innerHTML = motADeviner;
        lettrePresente = true;
      }
    }
    if (lettrePresente === false) {
      lettreProposee.push(" " + zoneSaisie.value);
      zoneLettreDejaProposees.innerHTML = lettreProposee;
      zoneLettreDejaProposees.style.background = "red";
      essai--;
      zoneEssaiRestant.innerHTML = essai;
    }
    if (motADeviner === motAvecEspace) {
      zoneReponseProposition.textContent = "Bravo 🎉🎉🎉";
    } else if (essai === 0) {
      zoneReponseProposition.textContent = "C'est perdu 😭😭😭";
    }
  });
}
proposition("QUOICOUBEH");
