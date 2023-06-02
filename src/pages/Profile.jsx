import { useState, useEffect } from "react";

//Стили//
import './index.css';

//Функции//
import Api from "../api"


function Profile() {

    const token = localStorage.getItem("travelBlogToken");
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


    console.log(userInfo.name)
    console.log(userInfo.about)
    console.log(userInfo.avatar)
    console.log(userInfo.email)
    console.log(userInfo.group)
    console.log(userInfo._id)


    return <>

        <h1>Профайл пользователя</h1>
        <div>
            <div>
                Роль: <span>{userInfo.about}</span>
            </div>
            <div>
                Email: <span>{userInfo.email}</span>
            </div>
            <div>
                Группа: <span>{userInfo.group}</span>
            </div>
            <div>
                <img src={userInfo.avatar} alt={userInfo.name} />
            </div>
        </div>
    </>
}

export default Profile;