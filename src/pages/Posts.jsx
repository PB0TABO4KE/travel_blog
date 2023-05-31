import { useParams } from "react-router-dom";

function Posts(postauthor, favorite) {

    const { author } = useParams()

    return <>
        {!postauthor && !favorite && <h1>Все посты блога</h1>}
        {postauthor &&  <h1>Посты автора {author}</h1>}
        {favorite && <h1>Избранные посты</h1>}




    </>
}

export default Posts;