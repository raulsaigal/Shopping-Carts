import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const[loading,setLoading] = useState(false);
  // because the data that comes form api is in array form thats why 
  // posts staring is at empty and then setposts ke under sara data aa gya array ke form
  const[posts,setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try{
      const res = await fetch(API_URL)
      const data = await res.json();
      console.log(data);
      setPosts(data);
    }
    catch(error){
      console.log("Error found")
      setPosts([]);
    }
    setLoading(false);

  }

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div >
   {
    loading ? <Spinner/> :
    posts.length > 0 ?
    (
      // here we are using mediaQuery and grids
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 min-h-[80vh]">
        {
          posts.map ( (post) => (
            <Product key={post.id} post={post}/>
          ))
        }
      </div>
    ) :
    <div className="flex justify-center items-center">
    <p>No data Found</p>
    </div>
   }
   </div>
  );
};

export default Home;
