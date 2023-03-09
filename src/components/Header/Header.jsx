import { BsBasket3Fill } from "react-icons/bs";

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
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
					repellat natus, quam maiores molestias, esse amet hic soluta fugiat
					harum autem corrupti itaque error corporis facilis dolor beatae
					commodi sunt!
				</h3>
			</div>
		</>
	);
};
export default Header;