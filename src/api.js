import axios from "axios";

export const fetchPoems = async () => {
	const { data } = await axios("https://poetrydb.org/random/20");
	return data;
};
