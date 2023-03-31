import Header from "./components/Header/Header";
import DogCards from "./components/DogCards/DogCards";
//Component imports
import Basket from "./components/Basket/Basket";
import BasketModal from "./components/Modal/BasketModal";

//libraries
import { faker } from "@faker-js/faker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import "./App.css";
import Favourites from "./components/Favourites/Favourites";

const App = () => {
	const [dog, setDog] = useState([]);
	const [isFavourite, setIsFavourite] = useState(false);

	const [basket, setBasket] = useState([]);
	const [basketmodal, setBasketModal] = useState(false);
	const [favourites, setFavourites] = useState(
		() => JSON.parse(localStorage.getItem("favourites")) || []
	);

	//Fetching data from the dog API
	const fetchImageData = async () => {
		try {
			const response = await fetch(
				`https://api.thedogapi.com/v1/images/search?limit=12&has_breeds=1&api_key=${
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

	useEffect(() => {
		localStorage.setItem("favourites", JSON.stringify(favourites));
	}, [favourites]);

	const addToBasket = (dog) => {
		setBasket([...basket, dog]);
		toast.success(`Added ${dog.name} to the basket!`);
		console.log(dog);
	};

	const removeFromBasket = (removeDog) => {
		setBasket(basket.filter((dog) => dog !== removeDog));
		toast.info("Dog removed from basket");
	};

	const removeAllFromBasket = () => {
		setBasket([]);
		toast.info("Basket cleared");
	};

	const basketModalVisible = () => {
		setBasketModal(true);
	};

	const basketModalInvisible = () => {
		setBasketModal(false);
	};

	const handleFavourites = (dog) => {
		setFavourites([...favourites, dog]);
		localStorage.setItem("favourites", JSON.stringify(favourites));
		setIsFavourite((prevBool) => !prevBool);
		console.log(favourites, isFavourite);
		toast.success(`Added ${dog.name} to favourites 💖`);
	};

	const removeFromFavourites = (removeFavourite) => {
		const newFavourites = [...favourites].filter(
			(favourite) => favourite !== removeFavourite
		);
		setFavourites(newFavourites);
	};

	return (
		<div className="App">
			<Header basketModalVisible={basketModalVisible} />
			<div className="container">
				<div className="shop">
					<DogCards
						dogs={dog}
						addToBasket={addToBasket}
						handleFavourites={handleFavourites}
						removeFromFavourites={removeFromFavourites}
						isFavourite={isFavourite}
					/>
					<Basket
						basket={basket}
						removeFromBasket={removeFromBasket}
						removeAllFromBasket={removeAllFromBasket}
					/>
				</div>
				<Favourites
					favourites={favourites}
					removeFromFavourites={removeFromFavourites}
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
			<ToastContainer position="bottom-right" autoClose={4000} />
		</div>
	);
};

export default App;
