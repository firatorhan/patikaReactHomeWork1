import axios from "axios"

export default (async (user_id,post_id) => {
    const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const { data: post } = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${post_id}`);
    console.log(users);
    console.log(post)
})(); 


