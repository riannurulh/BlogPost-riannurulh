import { useEffect, useState } from "react";
import Card from "../components/Card"
import PostRequest from "../helpers/PostRequest";

const Home = ()=>{
const [post,setPost] = useState([])
    const getPosts = async ()=>{
        try {
            let {data} = await PostRequest({
                url:'/apis/blog/posts',
                method:'GET',
                headers: {'Authorization':`Bearer ${localStorage.getItem('access_token')}`}
            })
            setPost(data.data)
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{getPosts()},[])
return(
    <div className="  p-4">
    <div className="flex flex-wrap gap-4">
    {post.map((item)=>{
        return <Card key={item.id} item={item}/>

    })}

    </div>
    </div>
)
}

export default Home