import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/Home";
import ProductItemDetails from "./component/ProductItemDetails";
import Spareparts from "./component/Spareparts";
import WeaghingScales from "./component/WeaghingScales";
import DigitalScales from "./component/DigitalScales";
import ContactUs from "./component/ContactUs";
import BusinessNeeds from "./component/BusinessNeeds";
import ManualMeasurements from "./component/ManualMeasurements";
import NotFound from "./component/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/weaghingscale/:id" Component={ProductItemDetails} />
        <Route exact path="/spareparts" Component={Spareparts} />
        <Route exact path="/weighing-scales" Component={WeaghingScales} />
        <Route exact path="/digital-scales" Component={DigitalScales} />
        <Route exact path="/business-needs" Component={BusinessNeeds} />
        <Route
          exact
          path="/manual-measurements"
          Component={ManualMeasurements}
        />
        <Route exact path="/contactus" Component={ContactUs} />
        <Route path="bad-path" Component={NotFound} />
        <Route path="*" element={<Navigate to="/bad-path" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
