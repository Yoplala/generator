
/* -----===== Animation de la souris =====----- */

document.onmousemove = bulleSouris;
function bulleSouris(MouseEvent)
    {
        let x =  MouseEvent.pageX;
        let y =  MouseEvent.pageY;
		document.getElementById("bulle").style.left = (x+1)+'px';
		document.getElementById("bulle").style.top = (y+1)+'px';
    }


/* -----===== Génération des histoires =====----- */

let fantasy1 = [ 
	"Il était une fois un preux chevalier,",
	"Il était une fois un jeune prince un peu simplet,",
	"Il était une fois une guerrière intrépide,",
	"Il était une fois un dragon paresseux,",
	"Il était une fois une princesse bagareuse,",
	"Il était une fois un seigneur sénile,"
	];
let fantasy2 = [
	"qui, par un beau matin, découvrit une carte au trésor.",
	"qui, par un beau matin, décida de partir à l’aventure.",
	"qui, par un beau matin, se mit à rêver.",
	"qui, par un beau matin, partit découvrir le monde.",
	"qui, par un beau matin, se lança dans une quête insensée.",
	"qui, par un beau matin, décida de devenir barde.",
	"qui, par un beau matin, voulu manger quelque chose de frais."
	];
let fantasy3 = [
	"S’ensuivit un lot de batailles épiques, mais tout finit bien.",
	"S’ensuivit un lot de rencontres sympathiques et tout finit bien.",
	"S’ensuivit une guerre ravageuse, et tous moururent glorieusement.",
	"S’ensuivirent des intrigues à n’en plus finir. La suite au prochain épisode.",
	"S’ensuivirent des alliances et des trahisons, des têtes coupées et des mariages sanglants.",
	"S’ensuivit une suite d’aventures toutes plus épiques les unes que les autres."
	];
let sciFi1 = [
	"Au fin fond de l'espace se trouvait un monstre tentaculaire.",
	"Au fin fond de l'espace se trouvait un astronaute perdu.",
	"Au fin fond de l'espace se trouvait une créature indéfinissable.",
	"Au fin fond de l'espace se trouvait un extraterrestre bleu.",
	"Au fin fond de l'espace se trouvait un petit homme vert.",
	"Au fin fond de l'espace se trouvait une martienne intrépide."
	];
let sciFi2 = [
	"Son vaisseau spatial fut attaqué et s'échoua sur une planête déserte.",
	"Son vaisseau spatial subit des avaries et dû être posé en urgence sur un astéroïde.",
	"Son vaisseau spatial fut détruit lors d'un combat épique.",
	"Son vaisseau spatial était décoré des cadavres de ses ennemis.",
	"Son vaisseau spatial flottait à la dérive."
	];
let sciFi3 = [
	"Après des aventures dignes d'un space-opéra, son équipage devint célèbre pour ses exploits.",
	"Après avoir trouvé des amis fidèles, ils décidèrent de résister à l'Empire.",
	"Après avoir fait du commerce avec des Ferengi, ses ressources s'étaient épuisées.",
	"Après avoir traversé la galaxie, sa planète natale lui manquait.",
	"Après sa rencontre avec le troisième type, plus rien ne lui faisait peur."
	];

// Fonction pour récupérer un élément au hasard dans un des tableaux
function randomFromArray(array) {
	return Math.floor(Math.random() * array.length);
}			


let numberStories;
let genreStory; 	
let zoneElement = document.getElementById("stories");

// Choix d'un style d'histoire et lancement de la fonction
let choixScifi = document.getElementById("scifi");
choixScifi.addEventListener("click", (e) => {
	generateStories(2);
});

let choixFantasy = document.getElementById("fantasy");
choixFantasy.addEventListener("click", (e) => {
	generateStories(1);
});

// Fonction de génération
function generateStories(genreStory) { 
	let choixNombre = document.getElementsByName('choix');
		for(let i = 0; i < choixNombre.length; i++){
			if(choixNombre[i].checked){
				numberStories = Number(choixNombre[i].value);
			}
		}
	if (genreStory === 1) {
		zoneElement.innerHTML = "";
		for (let j = 0; j < numberStories; j++) {
			let newStory = document.createElement("p");
			newStory.textContent = (fantasy1[randomFromArray(fantasy1)] + " " + fantasy2[randomFromArray(fantasy2)] + " " + fantasy3[randomFromArray(fantasy3)]);
			zoneElement.appendChild(newStory);
		}

	} else if (genreStory === 2) {
		zoneElement.innerHTML = "";
		for (let j = 0; j < numberStories; j++) {
			let newStory = document.createElement("p");
			newStory.textContent = (sciFi1[randomFromArray(sciFi1)] + " " + sciFi2[randomFromArray(sciFi2)] + " " + sciFi3[randomFromArray(sciFi3)]);
			zoneElement.appendChild(newStory);
		}
	}
}
