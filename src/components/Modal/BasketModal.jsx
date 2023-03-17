import { createPortal } from "react-dom";
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
		(accumulator, cat) => accumulator + parseInt(cat.price),
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
							{basket.map((cat) => {
								return (
									<div className="basket-cat-card" key={cat.id}>
										<h3>{cat.name}</h3>
										<p>£{cat.price}</p>
										<button onClick={() => removeFromBasket(cat)}>❌</button>
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
