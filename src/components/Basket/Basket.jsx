import { FaDog } from "react-icons/fa";
import "./basket.css";

const Basket = ({ basket, removeFromBasket, removeAllFromBasket }) => {
	let total = basket.reduce(
		(accumulator, dog) => accumulator + parseInt(dog.price),
		0
	);

	return (
		<div className="basket-container">
			<div className="basket-header">
				<h3 className="basket-heading">
					<FaDog size={20} /> ({basket.length})
				</h3>
				<button onClick={removeAllFromBasket} className="basket-removeAll">
					Remove All
				</button>
			</div>
			{basket.map((dog) => {
				return (
					<div className="basket-cat-card" key={dog.id}>
						<h3>{dog.name}</h3>
						<p>£{dog.price}</p>
						<button onClick={() => removeFromBasket(dog)}>❌</button>
					</div>
				);
			})}
			<div className="basket-footer">
				<h4>Total: £{total}</h4>
				<button className="basket-buyBtn">Buy da doggos</button>
			</div>
		</div>
	);
};
export default Basket;
