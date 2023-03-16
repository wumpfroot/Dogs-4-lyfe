import { BsBasket3Fill } from "react-icons/bs";
import "./dogcards.css";

const DogCards = ({ dog, addToBasket }) => {
	return (
		<div className="cat-cards">
			{dog.map((dog) => {
				// map through API data stored in the state and display it to the user
				return (
					<div className="cat-card" key={dog.id}>
						<h3>{dog.name}</h3>
						<div className="image-container">
							<img src={dog.url} alt="doggo" />
							<div className="description">
								<p className="desc">{dog.breeds[0].name}</p>
								<p className="desc">Height: {dog.breeds[0].height.metric}cm</p>
								<p className="desc">Weight: {dog.breeds[0].weight.metric}kg</p>
								<p className="desc">Life span: {dog.breeds[0].life_span}</p>
							</div>
						</div>
						<p>£{dog.price}</p>
						<button onClick={() => addToBasket(dog)}>
							<BsBasket3Fill size={20} />
						</button>
					</div>
				);
			})}
		</div>
	);
};
export default DogCards;
