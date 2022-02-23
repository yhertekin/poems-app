import { usePoems } from "../context/poemContext";
import FavoritePoemList from "./FavoritePoemList";

import Poem from "./Poem";

import style from "./style.module.css";

function PoemList() {
	const { poems, setPoems } = usePoems();

	const selectHandler = (sortValue) => {
		if (sortValue !== "") {
			setPoems([
				...poems.sort((a, b) => a[sortValue].localeCompare(b[sortValue])),
			]);
		}
	};
	if (poems.length === 0) return <div></div>;
	return (
		<div>
			<div className={style.header}>
				<div className={style.heading}>Poems</div>
				<div className={style.selectSection}>
					<div className={style.selectSectionText}>Sort by</div>
					<select
						name="sort"
						onChange={(e) => selectHandler(e.target.value)}
						className={style}
					>
						<option value="">Please select</option>
						<option value="title">Title</option>
						<option value="author">Author</option>
					</select>
				</div>
			</div>
			<div>
				{poems.map((poem, index) => (
					<Poem poem={poem} key={index} />
				))}
			</div>
			<FavoritePoemList />
		</div>
	);
}

export default PoemList;
