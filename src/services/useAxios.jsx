import axios from "axios";

const useAxios = () => {
	const axiosPublic = axios.create({
      baseURL: `https://30127.fullstack.clarusway.com`,
		//baseURL: `${process.env.REACT_APP_BASE_URL}`,
	});
	return { axiosPublic };
};
export default useAxios;
