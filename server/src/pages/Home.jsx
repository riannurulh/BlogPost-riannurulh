import { useEffect, useState } from "react";
import Card from "../components/Card"
import PostRequest from "../helpers/PostRequest";

const Home = ()=>{
const [post,setPost] = useState([])
const [deletePost,setDeletePost] = useState()
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
    const delPost = async()=>{

        try {
            console.log(deletePost);
            await PostRequest({
                url:`/apis/blog/posts/${deletePost}`,
                method: 'DELETE',
                headers: {'Authorization':`Bearer ${localStorage.getItem('access_token')}`}
            })
            getPosts()
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{getPosts()},[])
    useEffect(()=>{delPost()},[deletePost])
return(
    <div className="  p-4">
    <div className="flex flex-wrap gap-4">
    {post.map((item)=>{
        return <Card key={item.id} item={item} delPost={delPost} setDeletePost={setDeletePost}/>

    })}

    </div>
    </div>
)
}

export default Home