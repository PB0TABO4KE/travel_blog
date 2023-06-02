import { useState, useEffect } from "react";

//Стили//
import './index.css';

//Функции//
import Api from "../api"


function Profile() {

    const [token, setToken] = useState(localStorage.getItem("travelBlogToken"));
    const [api, setApi] = useState(new Api(token));
    const [userInfo, setUserInfo] = useState({});


    useEffect(() => {
        setApi(new Api(token))
    }, [token])



    useEffect(() => {

        api.getProfile()
                .then(data => {
                if (!data.err) {
                    console.log(data);
                    setUserInfo(data); 
                }  
            })
    }, [token]);


    return <>

        <h1>Профайл пользователя</h1>
    </>
}

export default Profile;