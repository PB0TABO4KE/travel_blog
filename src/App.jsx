import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main"
import Posts from "./pages/Posts"
import CurrentPost from "./pages/CurrentPost"
import Profile from "./pages/Profile"
import AddPost from "./pages/AddPost"
import Auth from "./pages/Auth"
import './index.css';

function App() {
  return <>
    <ul className="menu">
      <li><Link to="/">Главная</Link></li>
      <li><Link to="/posts">Посты</Link>
        <ul>
          <li><Link to="/posts/author/PB0TA_B_O4KE">Посты автора</Link></li>
          <li><Link to="/posts/favorites">Любимые посты</Link></li>
        </ul>
      </li>
      <li><Link to="/post/69">Конкретный пост</Link></li>
      <li><Link to="/post/add">Добавить товар</Link></li>
      <li><Link to="/profile">Личный кабинет</Link></li>
      <li><Link to="/auth">Войти/Авторизация</Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/favorites" element={<Posts favorite={true} />} />
      <Route path="/posts/author/:author" element={<Posts />} />
      <Route path="/post/:id" element={<CurrentPost />} />
      <Route path="/post/add" element={<AddPost />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </>
}

export default App;
