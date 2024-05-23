import React, { useEffect } from "react";
import useBlogRequest from "../../services/useBlogRequest";

const Blogs = () => {

   const {getBlog} = useBlogRequest()

   useEffect(() => {
      getBlog("blogs")

   }, [])
   


   
   
   
	return <div>Blogs</div>;
};

export default Blogs;
