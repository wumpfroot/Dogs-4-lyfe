import { createPortal } from "react-dom";

//libraries
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../Basket/basket.css";
import "./basketmodal.css";

const BasketModal = ({
	basket,
	removeFromBasket,
	removeAllFromBasket,
	basketModalInvisible,
}) => {
	let total = basket.reduce(
		(accumulator, dog) => accumulator + parseInt(dog.price),
		0
	);
	return (
		<>
			{createPortal(
				<div className="backdrop">
					<div className="modal">
						<div className="content">
							<div className="basket-header">
								<h3 className="basket-heading">Basket ({basket.length})</h3>
								<button
									onClick={removeAllFromBasket}
									className="basket-removeAll"
								>
									Remove All
								</button>
								<button onClick={basketModalInvisible}>❌</button>
							</div>
							{basket.map((dog) => {
								return (
									<div className="basket-dog-card" key={dog.id}>
										<h3>{dog.name}</h3>
										<p>£{dog.price}</p>
										<button onClick={() => removeFromBasket(dog)}>❌</button>
									</div>
								);
							})}
							<div className="basket-footer">
								<h4>Total: £{total}</h4>
								<button
									className="basket-buyBtn"
									onClick={() =>
										toast("You have doggos now. WOW! (not really)")
									}
								>
									Buy da doggos
								</button>
							</div>
						</div>
					</div>
				</div>,
				document.getElementById("basketmodal-root")
			)}
		</>
	);
};
export default BasketModal;
