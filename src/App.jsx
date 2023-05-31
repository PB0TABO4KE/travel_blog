import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main"
import Posts from "./pages/Posts"
import CurrentPost from "./pages/CurrentPost"
import Profile from "./pages/Profile"
import AddPost from "./pages/AddPost"
import Auth from "./pages/Auth"
import './index.css';

function App() {
  return <>
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
