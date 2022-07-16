import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetPost from "./components/GetPost";
import GetPostById from "./components/GetPostById";
import GetPostByLimit from "./components/GetPostByLimit";
import Post from "./components/Post";
import UpdatePost from "./components/UpdatePost";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GetPost />
              </>
            }
          />
          <Route
            path="/getpostbyid"
            element={
              <>
                <GetPostById />
              </>
            }
          />
          <Route
            path="/getpostbylimit"
            element={
              <>
                <GetPostByLimit />
              </>
            }
          />
          <Route
            path="/post"
            element={
              <>
                <Post />
              </>
            }
          />

          <Route
            path="/updatepost"
            element={
              <>
                <UpdatePost />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
