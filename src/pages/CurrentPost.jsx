import { useState, useEffect } from "react";

//Стили//
import './index.css';

//Функции//
import Api from "../api"



function CurrentPost() {


    const [token, setToken] = useState(localStorage.getItem("travelBlogToken"));
    const [api, setApi] = useState(new Api(token));



    
//Заглушка//
let postId = ("6478d8aee0bf2c519bd0ffdd");



    useEffect(() => {
        api.getSinglePost(postId)
            .then(data => {
                if (!data.err) {
                    console.log(data);
                    /*setProduct(data);
                    setReviewCnt(data.reviews.length)
                    setRatingStat(data.reviews)*/
                }


            })
    }, [token]);





    return <>

        <h1>Отдельный пост в блоге</h1>
    </>
}

export default CurrentPost;