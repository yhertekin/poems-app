import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const PoemContext = createContext();

const PoemProvider = ({ children }) => {
	const [poems, setPoems] = useState([]);
	const [favorites, setFavorites] = useState(
		JSON.parse(localStorage.getItem("favorites")) || []
	);

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	const toggleFavorites = (poem) => {
		const index = favorites.map((item) => item.title).indexOf(poem.title);
		if (index !== -1) {
			favorites.splice(index, 1);
			setFavorites([...favorites]);
		} else {
			setFavorites((prevState) => [poem, ...prevState]);
		}
	};

	const values = { poems, setPoems, favorites, setFavorites, toggleFavorites };
	return <PoemContext.Provider value={values}>{children}</PoemContext.Provider>;
};

export const usePoems = () => useContext(PoemContext);

export default PoemProvider;
