import { useState } from "react";
import DogInfoModal from "../Modal/DogInfoModal";
import { BsBasket3Fill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import "./dogcards.css";

const DogCards = ({
	dogs,
	addToBasket,
	handleFavourites,
	removeFromFavourites,
}) => {
	const [mobileInfo, setMobileInfo] = useState(false);
	const [breedInfo, setBreedInfo] = useState([]);

	// const [isFavourite, setIsFavourite] = useState(false);
	const [toggleModal, setToggleModal] = useState(false);
	const [styling, setStyling] = useState(null);

	const changeInfo = (info) => {
		setBreedInfo([info]);
		setToggleModal(!toggleModal);
		if (styling === null) {
			setStyling({
				position: "fixed",
			});
		} else {
			setStyling(null);
		}
	};

	function toggleInfoMobile() {
		setMobileInfo((prevBool) => !prevBool);
	}

	return (
		<div className="dog-cards">
			{dogs.map((dog) => {
				// map through API data stored in the state and display it to the user
				return (
					<div className="dog-card" key={dog.id}>
						<h3>{dog.name}</h3>
						<div className="image-container" onClick={() => changeInfo(dog)}>
							<img src={dog.url} alt="doggo" onClick={toggleInfoMobile} />
							<p className="desc">Click for more info...</p>
						</div>
						<p>£{dog.price}</p>
						<div className="card-buttons">
							<button title="Add to basket" onClick={() => addToBasket(dog)}>
								<BsBasket3Fill size={20} color="black" />
							</button>
							<button
								title="Add to favourites"
								onClick={() => handleFavourites(dog)}
							>
								<AiFillHeart size={20} color="black" />
							</button>
						</div>
					</div>
				);
			})}
			{toggleModal && (
				<DogInfoModal breedInfo={breedInfo} changeInfo={changeInfo} />
			)}
		</div>
	);
};
export default DogCards;
