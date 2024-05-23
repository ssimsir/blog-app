import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getBlogSuccess } from "../features/blogSlice";

const useBlogRequest = () => {

   const {axiosPublic} = useAxios()
   const dispach = useDispatch()

   const getBlog = async (path) => {
      dispach(fetchStart())
      try {
         const data = await axiosPublic(`/${path}`)
         console.log(data)
         dispach(getBlogSuccess({path:path, blogData:data.data.data}))
         
      } catch (error) {
         dispach(fetchFail())
         console.log(error)
      }

   }

	return {getBlog};
};

export default useBlogRequest;
