import Details from "../views/Details";
import Home from "../views/Home";
import Results from "../views/Results";
const { BrowserRouter, Routes, Route } = require("react-router-dom");

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:title" element={<Results />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesComponent;
