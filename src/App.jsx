import Header from "./components/Header/Header";
import DogCards from "./components/DogCards/DogCards";
import Basket from "./components/Basket/Basket";
import BasketModal from "./components/Modal/BasketModal";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
	const [dog, setDog] = useState([]);
	const [basket, setBasket] = useState([]);
	const [basketmodal, setBasketModal] = useState(false);

	const fetchImageData = async () => {
		try {
			const response = await fetch(
				`https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${
					import.meta.env.VITE_API_KEY
				}`
			);
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();
			console.log(data);
			return data;
		} catch (err) {
			console.log(err);
		}
	};
	console.log(basket);

	useEffect(() => {
		const fetchData = async () => {
			let dogList = await fetchImageData();
			dogList.map((dog) => {
				dog.name = faker.name.firstName();
				dog.price = faker.commerce.price(500);
			});
			setDog(dogList);
		};
		fetchData();
	}, []);

	const addToBasket = (dog) => {
		setBasket([...basket, dog]);
		console.log(dog);
	};

	const removeFromBasket = (removeDog) => {
		setBasket(basket.filter((dog) => dog !== removeDog));
	};

	const removeAllFromBasket = () => {
		setBasket([]);
	};

	const basketModalVisible = () => {
		setBasketModal(true);
	};

	const basketModalInvisible = () => {
		setBasketModal(false);
	};

	return (
		<div className="App">
			<Header basketModalVisible={basketModalVisible} />
			<div className="container">
				<DogCards dogs={dog} addToBasket={addToBasket} />
				<Basket
					basket={basket}
					removeFromBasket={removeFromBasket}
					removeAllFromBasket={removeAllFromBasket}
				/>
				{basketmodal && (
					<BasketModal
						basket={basket}
						removeFromBasket={removeFromBasket}
						removeAllFromBasket={removeAllFromBasket}
						basketModalInvisible={basketModalInvisible}
					/>
				)}
			</div>
		</div>
	);
};

export default App;
