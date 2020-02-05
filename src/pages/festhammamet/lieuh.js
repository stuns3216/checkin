import React from "react";
import { Zoom } from "react-slideshow-image";

const images = [
	"https://espazium.s3.eu-central-1.amazonaws.com/files/styles/espazium_280px_height/public/migration/images/5733410be1554.jpg?itok=NUi9CgOY",
	"https://upload.wikimedia.org/wikipedia/commons/1/12/Hammamet_theatre.jpg",
	"https://www.tuniscope.com/uploads/images/content/hammamet-010711-1.jpg"
];

const zoomOutProperties = {
	duration: 2000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	scale: 0.4,
	arrows: true
};

export default function Slideshow() {
	return (
		<div className="slide-bizerte">
			<Zoom {...zoomOutProperties}>
				{images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)}
			</Zoom>
			<h3>Description</h3>
			<h5>
				Le Centre culturel international tient place dans une somptueuse villa, avenue des Nations-Unis, sur la route de
				Sousse. La villa, entourée d'un vaste parc verdoyant, a été légué à l'état tunisien par son ancien propriétaire,
				Georges Sebastian La villa fût construite en suivant des normes de l'architecture traditionnelle, murs blancs
				aux décorations arabisantes, pour un résultat qui impressionna Le Corbusier lors de son passage.Un théâtre fût
				construit dans le parc, qui accueille tous les étés le festival international de Hammamet et ses artistes
				d'horizons divers (films, théâtre, danse, musique...), comme pour rendre hommage au passé de ce lieu
			</h5>

			<h3>Adresse</h3>
			<img
				id="map"
				src="https://lh3.googleusercontent.com/proxy/V7i54dzCmKVxB_lfHR00G-X2CmnVEuuJzhwQOq_ocakztmW3R8XPDkqargeUlYhUs1i91s0HmdKMaJnuhmpIhltClcQ4qinZHPsTPM48tng5nemWGlJZNixbF3QxJxijQoMd-MhiyeM4MYErq5k8wZ_XgbHHt5Vl"
			/>
			<h3>Les points de ventes</h3>
			<ul className="ptdevente">
				<h5>
					<li>teskirti.tn</li>
				</h5>
				<h5>
					<li>Centre Culturel International de Hammamet</li>
				</h5>
				<h5>
					<li>TikaShop.poste.tn</li>
				</h5>
				<h5>
					<li>Maison de Culture Ibn Rachiq – Tunis</li>
				</h5>
				<h5>
					<li>Librairie Ennaiem – Nabeul</li>
				</h5>
			</ul>
		</div>
	);
}
