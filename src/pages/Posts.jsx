import { useParams } from "react-router-dom";
import { useContext } from "react";
import AppCtx from "../context";

function Posts(postauthor, favorite) {

    const {
        token,
        setToken,
        api,
        setApi,
        user,
        setUserId
    } = useContext(AppCtx);

    const { author } = useParams()

    return <>
        {!postauthor && !favorite && <h1>Все посты блога</h1>
        }
        {postauthor &&  <h1>Посты автора {author}</h1>}
        {favorite && <h1>Избранные посты</h1>}




    </>
}

export default Posts;