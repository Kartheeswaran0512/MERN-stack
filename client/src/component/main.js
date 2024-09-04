/*import React from "react";
import Home from "./component/Home";
import Create from "./component/Create";
import Edit from "./component/Edit";

const Main = () => {
   return (
    <div>
        <Home />
        <Create />
        <Edit />
    </div>
   );
};

export default Main; */




import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Create
 from './Create';
 import Edit from './Edit';
// Define the individual components
// Define the main component with routing
const Main = () => {
return (
<Router>
<div>
{/* Navigation Links */}
<nav>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/edit">Edit</Link></li>
<li><Link to="/create">Createt</Link></li>
</ul>
</nav>
{/* Routes Configuration */}
<Routes>
<Route path="/" element={<Home />} />
<Route path="/Create" element={<Create />} />
<Route path="/edit" element={<Edit />} />
</Routes>
</div>
</Router>
);
};
export default Main; 