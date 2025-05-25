import MainPage from "./MainPage";
import ProjectPage from"./ProjectPage";
import {HashRouter, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path ='/' element={<MainPage />}></Route>
        <Route path='/projects' element={<ProjectPage />}></Route>
      </Routes>
    </HashRouter>
  )
}