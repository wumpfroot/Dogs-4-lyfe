import { createPortal } from "react-dom";
import "./basketmodal.css";

const DogInfoModal = ({ dog, infoModalInvisible }) => {
	return (
		<>
			{createPortal(
				<div className="backdrop">
					<div className="modal">
						<button onClick={infoModalInvisible}></button>
						{dog.map((info) => {
							return <p>{info.breeds[0].name}</p>;
						})}
					</div>
				</div>,
				document.getElementById("infomodal-root")
			)}
		</>
	);
};
export default DogInfoModal;
