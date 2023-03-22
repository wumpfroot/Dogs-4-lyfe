import "./favourites.css";

const Favourites = ({ favourites, removeFromFavourites }) => {
	return (
		<div>
			{favourites.map((favourite) => {
				return (
					<div>
						<button onClick={() => removeFromFavourites(favourite)}>❌</button>
						<img src={favourite.url} className="favourites__img" alt="doggo" />
						<h1>{favourite.name}</h1>
					</div>
				);
			})}
		</div>
	);
};
export default Favourites;
