import { useState } from "react";
import { fetchPoems } from "./api";
import { usePoems } from "./context/poemContext";
import PoemList from "./components/PoemList";

import style from "./App.module.css";

function App() {
	const { setPoems } = usePoems();
	const [loading, setLoading] = useState(false);

	const buttonHandler = async () => {
		setLoading(true);
		const poemList = await fetchPoems();
		setPoems(poemList);
		setLoading(false);
	};

	return (
		<div className={style.main}>
			<button onClick={buttonHandler} className={style.fetchPoems}>
				{loading ? "Loading..." : "Fetch Poems"}
			</button>
			<PoemList />
		</div>
	);
}

export default App;
