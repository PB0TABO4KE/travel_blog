import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';

// Страницы //
import Main from "./pages/Main"
import Posts from "./pages/Posts"
import CurrentPost from "./pages/CurrentPost"
import Profile from "./pages/Profile"
import AddPost from "./pages/AddPost"
import Auth from "./pages/Auth"
import Contacts from "./pages/Contacts"

//Стили//
import './index.css';

//Функции//
import Api from "./api"
import AppCtx from "./context";

// Код от Димы 06.06.2023 //
import './App.css';
import ControlledCarousel from './components/Carousel';
import NavbarMenu from './components/NavbarHeader';
import NavbarFilter from './components/NavbarFilter';
import Footer from './components/Footer';

function App() {


  const [user, setUser] = useState(localStorage.getItem("travelBlogUser"));
  const [userId, setUserId] = useState(localStorage.getItem("travelBlogId"));
  const [token, setToken] = useState(localStorage.getItem("travelBlogToken"));
  const [api, setApi] = useState(new Api(token));
  const [userInfo, setUserInfo] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setApi(new Api(token))
  }, [token])

  // Получение массива со всеми постами//
  useEffect(() => {
    if (api.token) {
      api.getAllPosts()
        .then(data => {
          console.log(data);
          setPosts(data);
          //setServerGoods(data.products.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));//
        })
    }
  }, [api.token])


  return (<>

    <AppCtx.Provider value={{
      token,
      setToken,
      api,
      setApi,
      user,
      setUser,
      userId,
      setUserId,
      userInfo,
      setUserInfo,
      posts
    }}>


      <Container>
        <Row className="justify-content-center"><NavbarMenu /><ControlledCarousel /></Row>
        <Row><NavbarFilter /></Row>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/favorites" element={<Posts favorite={true} />} />
          <Route path="/posts/author/:author" element={<Posts />} />
          <Route path="/post/:postId" element={<CurrentPost />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Row className='justify-content-center m-0 p-0 mt-3'>
          <Footer />
        </Row>
      </Container>

{/*
      <ul className="menu">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/posts">Посты</Link>
          <ul>
            <li><Link to="/posts/author/:author">Посты автора</Link></li>
            <li><Link to="/posts/favorites">Любимые посты</Link></li>
          </ul>
        </li>
        <li><Link to="/post/:postId">Конкретный пост</Link></li>
        <li><Link to="/post/add">Добавить товар</Link></li>
        <li><Link to="/profile">Личный кабинет</Link></li>
        <li><Link to="/auth">Войти/Авторизация</Link></li>
  </ul>*/}

    </AppCtx.Provider>
  </>
  );
}

export default App;
