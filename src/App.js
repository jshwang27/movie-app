import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Switch><Route path="/"><Home /></Route></Switch> 
        강의에서 사용된 부분으로 6버전 이전에 사용한 switch 를 사용한 방식 - npm i react-router-dom@5.3.0 5버전을 쓰면 해결 */}
        <Route path="/movie/:id" element={<Detail />} />
        {/* :이름 넘겨주는 값(변수)을 나타냄. 반드시 : 을 붙일 것. */}
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
