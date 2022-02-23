import { useState } from "react";
import { usePoems } from "../context/poemContext";
import Details from "./Details";
import style from "./style.module.css";

const Poem = ({ poem }) => {
	const [detailState, setDetailState] = useState(false);

	const { favorites, toggleFavorites } = usePoems();

	const toggleDetail = () => {
		setDetailState((prevState) => !prevState);
	};

	const inFavorite =
		favorites.map((item) => item.title).indexOf(poem.title) === -1;

	return (
		<div className={style.poem}>
			<div className={style.poemInfo}>
				<span>{poem.title}</span>
				<span className={style.author}> by {poem.author}</span>
			</div>
			<button onClick={toggleDetail} className={style.details}>
				Details
			</button>
			<button
				onClick={() => toggleFavorites(poem)}
				className={inFavorite ? style.addToFavorites : style.removeToFavorites}
			>
				{inFavorite ? "Add To Favorites" : "Remove From Favorites"}
			</button>
			{detailState && <Details lines={poem.lines} />}
		</div>
	);
};

export default Poem;
