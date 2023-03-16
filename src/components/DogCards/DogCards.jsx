import { useState } from "react";
import { BsBasket3Fill } from "react-icons/bs";
import "./dogcards.css";

const DogCards = ({ dog, addToBasket }) => {
	const [mobileInfo, setMobileInfo] = useState(false);

	function toggleInfoMobile() {
		setMobileInfo((prevBool) => !prevBool);
	}

	return (
		<div className="cat-cards">
			{dog.map((dog) => {
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
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default DogCards;
