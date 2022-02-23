import { usePoems } from "../context/poemContext";
import Poem from "./Poem";

import style from "./style.module.css";

const FavoritePoemList = () => {
	const { favorites } = usePoems();

	if (favorites.length === 0) return <div></div>;

	return (
		<div>
			<div className={style.favoriteHeading}>Favorite Poems</div>
			{favorites.map((poem) => (
				<Poem poem={poem} key={poem.title} />
			))}
		</div>
	);
};

export default FavoritePoemList;
