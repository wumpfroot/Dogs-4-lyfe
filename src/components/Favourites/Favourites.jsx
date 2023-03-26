import "./favourites.css";

const Favourites = ({ favourites, removeFromFavourites }) => {
	return (
		<div className="favourites">
			<h1 id="favourites__title">Favourite Doggos</h1>
			{favourites.length === 0 ? (
				<h2>No favourites added...</h2>
			) : (
				<div className="favourites__container">
					{favourites.map((favourite) => {
						return (
							<div key={favourite.id} className="favourites__card">
								<div className="favourites__card__heading">
									<h1>{favourite.name}</h1>
									<button onClick={() => removeFromFavourites(favourite)}>
										❌
									</button>
								</div>
								<img
									src={favourite.url}
									className="favourites__img"
									alt="doggo"
								/>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
export default Favourites;
