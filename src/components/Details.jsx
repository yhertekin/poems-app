import style from "./style.module.css";

const Details = ({ lines }) => {
	return (
		<div className={style.lines}>
			{lines.map((line, index) => (
				<p key={index} className={style.line}>
					{line}
				</p>
			))}
		</div>
	);
};

export default Details;
