import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutScreen from "../pages/aboutPage/screen/about";

// Pages


// Add your page & your route here
const AppPages = [
{
    path:'/about',
    element:AboutScreen,
    name:'aboutScreen'
}
];

function AppRoutes() {
 

  return (
    
      <BrowserRouter basename={"/"}>
        <Routes>
          {AppPages.map((page) => (
            <Route
              path={page.path}
              element={<page.element />}
              key={page.name}
            />
          ))}
        </Routes>
      </BrowserRouter>
    
  );
}

export default AppRoutes;
