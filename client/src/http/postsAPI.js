import { $authHost, $host } from "./index";



//posts

export const createPost = async (post) => {
    const {data} = await $authHost.post("api/post", post )
    return data
}

export const fetchPosts = async (page, limit = 5)  => {
    const {data} = await $host.get("api/post", {params:{page, limit}})
    return data
}

//oneProduct

export const fetchOnePost = async (id)  => {
    const {data} = await $host.get("api/post/"+id)
    return data
}

//deletePost