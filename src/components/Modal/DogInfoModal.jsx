import { createPortal } from "react-dom";
import "./basketmodal.css";

const DogInfoModal = ({ breedInfo, changeInfo }) => {
	return (
		<>
			{createPortal(
				<div className="infomodal-container" onClick={changeInfo}>
					<div className="infomodal" onClick={(e) => e.stopPropagation()}>
						<div className="infomodal-header">
							<button className="infomodal-btn" onClick={changeInfo}>
								❌
							</button>
						</div>
						<div className="infomodal-content">
							{breedInfo.map((breed) => {
								return (
									<div key={breed.id}>
										<h2>{breed.name}</h2>
										<img src={breed.url} alt={breed.name} />
										<p className="info-breed">{breed.breeds[0].name}</p>
										<p className="info-desc">
											Height: {breed.breeds[0].height.metric}cm
										</p>
										<p className="info-desc">
											Weight: {breed.breeds[0].weight.metric}kg
										</p>
										<p className="info-desc">
											Life span: {breed.breeds[0].life_span}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>,
				document.getElementById("infomodal-root")
			)}
		</>
	);
};
export default DogInfoModal;
