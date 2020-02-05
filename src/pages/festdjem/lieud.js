import React from "react";
import { Zoom } from "react-slideshow-image";

const images = [
	"https://lepetitjournal.com/sites/default/files/styles/main_article/public/2019-06/eljem.jpg?itok=Y6exo5y8",
	"http://eljemcite.e.l.pic.centerblog.net/3sx2mqxc.jpg",
	"https://www.nachoua.com/EL-JEM/Eljem-2016-Tunisie-1172.JPG",
	"https://previews.123rf.com/images/hypnocreative/hypnocreative1701/hypnocreative170100535/70303239-the-roman-amphitheater-of-thysdrus-in-el-djem-or-el-jem-a-town-in-mahdia-governorate-of-tunisia.jpg"
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
				L'amphithéâtre d'El Jem (arabe : مسرح الجم), aussi appelé Colisée de Thysdrus, est un amphithéâtre romain situé
				dans l'actuelle ville tunisienne d'El Jem, l'antique Thysdrus de la province romaine d'Afrique.
			</h5>
			<h3>Adresse</h3>
			<img src="https://lh3.googleusercontent.com/proxy/V7i54dzCmKVxB_lfHR00G-X2CmnVEuuJzhwQOq_ocakztmW3R8XPDkqargeUlYhUs1i91s0HmdKMaJnuhmpIhltClcQ4qinZHPsTPM48tng5nemWGlJZNixbF3QxJxijQoMd-MhiyeM4MYErq5k8wZ_XgbHHt5Vl" />
			<h3>Les points de ventes</h3>
			<ul className="ptdevente">
				<h5>
					<li>Amphithéâtre d’El jem</li>
				</h5>
				<h5>
					<li>traveltodo.com</li>
				</h5>
				<h5>
					<li>Office du Tourisme SOUSSE</li>
				</h5>
				<h5>
					<li>billet.festivaleljem.tn</li>
				</h5>
				<h5>
					<li>TikaShop.poste.tn</li>
				</h5>
			</ul>
		</div>
	);
}
