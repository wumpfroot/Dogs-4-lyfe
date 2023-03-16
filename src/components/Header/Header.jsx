import { BsBasket3Fill } from "react-icons/bs";
import "./header.css";

const Header = ({ basketModalVisible }) => {
	return (
		<>
			<div className="title-container">
				<button className="basket-modal-btn" onClick={basketModalVisible}>
					<BsBasket3Fill size={25} />
				</button>
				<span className="title">Dogs</span>
				<span className="title-4 title">4</span>
				<span className="title-lyfe title">Lyfe</span>
			</div>
			<div className="description-container">
				<h3 className="description-text">
					We provide the man with his best friend 4 lyfe.
				</h3>
			</div>
		</>
	);
};
export default Header;
