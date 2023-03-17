import { useState } from "react";
import { BsBasket3Fill } from "react-icons/bs";
import "./dogcards.css";

const DogCards = ({ dogs, addToBasket }) => {
	const [mobileInfo, setMobileInfo] = useState(false);
	const [breedInfo, setBreedInfo] = useState([]);
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
		<div className="cat-cards">
			{dogs.map((dog) => {
				// map through API data stored in the state and display it to the user
				return (
					<div className="cat-card" key={dog.id}>
						<h3>{dog.name}</h3>
						<div className="image-container">
							<img src={dog.url} alt="doggo" onClick={() => toggleInfoMobile} />
							<div
								className={mobileInfo ? "description mobile" : "description"}
							>
								<p className="desc">{dog.breeds[0].name}</p>
								<p className="desc">Height: {dog.breeds[0].height.metric}cm</p>
								<p className="desc">Weight: {dog.breeds[0].weight.metric}kg</p>
								<p className="desc">Life span: {dog.breeds[0].life_span}</p>
							</div>
						</div>
						<p>£{dog.price}</p>
						<div className="card-buttons">
							<button onClick={() => addToBasket(dog)}>
								<BsBasket3Fill size={20} />
							</button>
							<button className="info-btn" onClick={toggleInfoMobile}>
								{mobileInfo ? "Close Info" : "More Info"}
							</button>
							<button className="modal-btn" onClick={() => changeInfo(dog)}>
								Modal Info
							</button>
						</div>
					</div>
				);
			})}
			{toggleModal && (
				<div className="infomodal-container" onClick={changeInfo}>
					<div className="infomodal" onClick={(e) => e.stopPropagation()}>
						<div className="infomodal-header">
							<button onClick={changeInfo}>❌</button>
						</div>
						<div className="infomodal-content">
							{breedInfo.map((breed) => {
								return (
									<div key={breed.id}>
										<img src={breed.url} alt="" />
										<p>{breed.breeds[0].name}</p>
										<p className="info-desc">
											Height: {breed.breeds[0].height.metric}cm
										</p>
										<p className="info-desc">
											Weight: {breed.breeds[0].weight.metric}kg
										</p>
										<p className="info-desc">
											Life span: {breed.breeds[0].life_span}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default DogCards;
