/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App; 

/*import React from 'react';
import Home from './Home';  // Adjust the path if necessary
import AboutUs from './About';  // Adjust the path if necessary

function App() {
  return (
    <div>
      <Home />
      <AboutUs />
    </div>
  );
}

export default App; */
// landing page over
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Home';       // Adjust the path as needed
import AboutUs from './About';     // Adjust the path as needed
import Navbar from './Navbar'; 
import ContactForm from './ContactForm'; 
import Student from './student';
import Create from "./component/Create";
import Edit from "./component/Edit";
import Home from "./component/Home";
// Adjust the path as needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactform" element={<ContactForm />} />
          <Route path="/" element={<Home />} />
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    <Route
                        path="/edit"
                        element={<Edit />}
                    />
                    <Route path="/student" element={<Student/>} />
      </Routes>
    </Router>
  );
}

export default App;  

//App.js
// Import React
/*import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
    from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import {
    BrowserRouter as Router, Switch,
    Route, Link
} from "react-router-dom";

// Import other React Component
import CreateStudent from
    "./Components/create-student.component";
import EditStudent from
    "./Components/edit-student.component";
import StudentList from
    "./Components/student-list.component";

// App Component
const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>
                                <Link to={"/create-student"}
                                    className="nav-link">
                                    React MERN Stack App
                                </Link>
                            </Navbar.Brand>

                            <Nav className="justify-content-end">
                                <Nav>
                                    <Link to={"/create-student"}
                                        className="nav-link">
                                        Create Student
                                    </Link>
                                </Nav>

                                <Nav>
                                    <Link to={"/student-list"}
                                        className="nav-link">
                                        Student List
                                    </Link>
                                </Nav>
                            </Nav>
                        </Container>
                    </Navbar>
                </header>

                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="wrapper">
                                <Router>
                                    <Route exact path="/"
                                        component={CreateStudent} />
                                    <Route path="/create-student"
                                        component={CreateStudent} />
                                    <Route path="/edit-student/:id"
                                        component={EditStudent} />
                                    <Route path="/student-list"
                                        component={StudentList} />
                                </Router>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
};

export default App;  */










//import Student from './student';
/*import './App.css'
function App() {
  return (
    <div className="App">
     
 

    </div>
  );
}

export default App; */



// Filename - App.js  form using crud react only

//import React from "react";
//import {
    //BrowserRouter as Router,
    //Route,
    //Routes,
//} //from "react-router-dom";
//import "./App.css";
//import Create from "./component/Create";
//import Edit from "./component/Edit";
//import Home from "./component/Home";
//import Main from "./component/main";

//function App() {
   // return (
        <div className="App">
            <h1 className="geeks"> Form</h1>
            <h3>CRUD App OPeration</h3>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    <Route
                        path="/edit"
                        element={<Edit />}
                    />
                </Routes>
            </Router>
        </div>
   // );
//}

//export default App; 


     


