import React, { Component } from "react";
import Cartespecth from "./carspecth";
import Searchbar from "../../components/main/searchbar";
import { Link } from "react-router-dom";
import "./hammamet.css";

const contactInformation = [
	{
		imgUrl: "https://www.festivaldehammamet.com/telechargements/programmes/festival_de_hammamet_157_mid.jpg",
		name: "Messages de liberté",
		date: "10 juillet 2020",
		prixgradain: " Prix gradin :20dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_158_mid.jpg",
		name: "MAziz Sahmaoui and University of Gnawa",
		date: "11 juillet 2020",
		prixgradain: " Prix gradin :20dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_159_mid.jpg",
		name: "Madame M ",
		date: "13 juillet 2020",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_160_mid.jpg",
		name: " Omar el Ouaer & Aida Niati",
		date: "15 juillet 2020",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_162_mid.jpg",
		name: "Le royaume d'or ",
		date: "17 juillet 2020",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_1542_mid.jpg",
		name: "MYRATH     ",
		date: "18 juillet 2020",
		prixgradain: " Prix gradin :35dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_153_mid.jpg",
		name: "Charlotte Cardin ",
		date: "20 juillet 2020",
		prixgradain: " Prix gradin :40dt",
		button: "réserver "
	},
	,
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_163_mid.jpg",
		name: " Didon & Enée & Jil",
		date: "22 juillet 2020",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_165_mid.jpg",
		name: "Salut Salon",
		date: "23 juillet 2020",
		prixgradain: " Prix gradin :30dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_166_mid.jpg",
		name: "Hommage à Naama",
		date: "24 juillet 2020",
		prixgradain: " Prix gradin :20dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_167_mid.jpg",
		name: "Saidou Abatcha ",
		date: "26 juillet 2020",
		prixgradain: " Prix gradin :40dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_168_mid.jpg",
		name: "SOUAD MASSI",
		date: "27 juillet 2020",
		prixgradain: " Prix gradin :35dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_169_mid.jpg",
		name: "Bassekou Kouyaté  Nidhal Yahiaoui",
		date: "28 juillet 2020",
		prixgradain: " Prix gradin :25dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_171_mid.jpg",
		name: "JUIF",
		date: "31 juillet 2020",
		prixgradain: " Prix gradin :35dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_172_mid.jpg",
		name: "Third World",
		date: "27 juillet 2020",
		prixgradain: " Prix gradin :35dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_183_mid.jpg",
		name: "Ziad Rahbani",
		date: "02 aout 2020",
		prixgradain: " Prix gradin :60dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_173_mid.jpg",
		name: "MOHAMED MOHSEN",
		date: "03 aout 2020",
		prixgradain: " Prix gradin :30dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_174_mid.jpg",
		name: "Les Années Folles",
		date: "06 aout 2020",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_175_mid.jpg",
		name: "Oscar D'Leon",
		date: "08 aout 2020",
		prixgradain: " Prix gradin :40dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_176_mid.jpg",
		name: "SABER REBAI",
		date: "09 aout 2020",
		prixgradain: " Prix gradin :50dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_177_mid.jpg",
		name: "LIZ MCCOMB",
		date: "10 aout 2020",
		prixgradain: " Prix gradin :30dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_178_mid.jpg",
		name: "BIC BOSSA WAJIHA JANDOUBI",
		date: "13 aout 2020",
		prixgradain: " Prix gradin :25dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_179_mid.jpg",
		name: "MARWEN KHOURY",
		date: "14 juillet 2020",
		prixgradain: " Prix gradin :35dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_180_mid.jpg",
		name: " L'Algérino",
		date: "15 juillet 2020",
		prixgradain: " Prix gradin :40dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_181_mid.jpg",
		name: "MOUNIR TROUDI",
		date: "16 juillet 2020",
		prixgradain: " Prix gradin :20dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.festivaldehammamet.com//telechargements/programmes/festival_de_hammamet_182_mid.jpg",
		name: "AMINAFAKHET",
		date: "17 juillet 2020",
		prixgradain: " Prix gradin :50dt",
		button: "réserver "
	}
];
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contactInformation,
			titleFilter: ""
		};
	}

	getVisibleMovies() {
		return this.state.contactInformation.filter(el =>
			el.name.toLowerCase().includes(this.state.titleFilter.toLowerCase().trim())
		);
	}

	render() {
		return (
			<div className="background">
				<Searchbar
					value={this.state.titleFilter}
					onChange={newTitleFilter => {
						this.setState({
							titleFilter: newTitleFilter
						});
					}}
				/>

				<div className="title-hammamet">
					<div className="festhammamet">
						<Link to="/lieuh">
							<img
								id="title"
								src="https://images.squarespace-cdn.com/content/v1/5bafbc54e5f7d16923968e0d/1539552506085-BJPARD08CL23J2XECS5J/ke17ZwdGBToddI8pDm48kHEtT-YVwDcY_EB3MyfNAAlZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEkbPKZ1ealCfVq4ZaQIKP6KemhN7vj-0XIgcDXwKLPkJ3npYHFA1OinJVF5ve1wN0/240_F_65277880_Tx0l8xHequidlcV0sdfuSnXSVmN85HVO.jpg?format=1000w"
							/>
						</Link>
					</div>
				</div>
				<Cartespecth contactList={this.getVisibleMovies()} />
			</div>
		);
	}
}

export default App;
