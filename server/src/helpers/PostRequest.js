import axios from 'axios'

const PostRequest = axios.create({
    baseURL: 'https://h8-phase2-gc.vercel.app'
})
export default PostRequest