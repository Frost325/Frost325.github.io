import MainPage from "./pageFiles/MainPage";
import ProjectPage from "./pageFiles/ProjectPage";
import {HashRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path ='/' element={<MainPage />}></Route>
        <Route path='/projects' element={<ProjectPage />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
