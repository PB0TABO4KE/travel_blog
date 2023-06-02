import { useState, useEffect } from "react";
import Api from "../api"


function Auth() {

    const [token, setToken] = useState(localStorage.getItem("travelBlogToken"));
    const [user, setUser] = useState(localStorage.getItem("travelBlogUser"));
    const [userId, setUserId] = useState(localStorage.getItem("travelBlogId"));
    const [api, setApi] = useState(new Api(token));

    // Переменные для регистрации//
    const [regName, setRegName] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPwd, setRegPwd] = useState("");
    const [regTestPwd, setRegTestPwd] = useState("");

    //Переменные для авторизации//
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [auth, setAuth] = useState(true);

    const clearForm = () => {
        setRegName("");
        setRegEmail("");
        setRegPwd("");
        setRegTestPwd("");
        setEmail("");
        setPwd("");
    }

    useEffect(() => {
        setApi(new Api(token))
    }, [token])


    useEffect(() => {
        if (user) {
            setToken(localStorage.getItem("travelBlogToken"));
            setUserId(localStorage.getItem("travelBlogId"));
        }
        else {
            setToken("");
            setUserId("");
        }
    }, [user])

    // Фетч для авторизации //
    const sendAuth = async (e) => {
        e.preventDefault();
        let body = {
            email: email,
            password: pwd
        }
        api.auth(body)
            .then(data => {
                if (!data.err) {
                    console.log(data);
                    clearForm();
                    localStorage.setItem("travelBlogUser", data.data.name)
                    localStorage.setItem("travelBlogToken", data.token);
                    localStorage.setItem("travelBlogId", data.data._id);
                }
                else {
                    alert("Ошибка сервера, попробуйте позже");
                }
            })
    }

    // Фетч для регистрации //
    const sendReg = () => {
        console.log("Регистрация типа сработала, но фетч не отправлен, чтобы не засорять базу");
        clearForm();
    }




    return (<>

        <h1>Страница авторизации</h1>

        <h2>Регистрация</h2>
        <form onSubmit={sendReg}>
            <label>
                Имя пользователя
                <input type="text" value={regName} onChange={(e) => setRegName(e.target.value)} />
            </label>
            <label>
                Электронный адрес
                <input type="email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} />
            </label>
            <label>
                Пароль
                <input type="password" value={regPwd} onChange={(e) => setRegPwd(e.target.value)} />
            </label>

            <label>
                Повторить пароль
                <input type="password" value={regTestPwd} onChange={(e) => setRegTestPwd(e.target.value)} />
            </label>
            <button onClick={sendReg}>Зарегистрироваться</button>
        </form>



        <h2>Авторизация</h2>
        <form onSubmit={sendAuth}>
            <label>
                Электронный адрес
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Пароль
                <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
            </label>
            <button onClick={sendAuth}>Войти</button>
        </form>
    </>)


}

export default Auth;