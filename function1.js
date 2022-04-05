import axios from "axios"

async function getData(user_id,post_id) {
    const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const { data: posts } = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${post_id}`);
   
    return {users, posts}
}; 

export default getData;
