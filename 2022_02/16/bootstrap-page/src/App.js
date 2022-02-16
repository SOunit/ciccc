import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import Signup from "./components/signup";
import Sleep from "./components/sleep";
import Meow from "./components/meow";
import Faq from "./components/faq";
import Instructors from "./components/instructors";
import Map from "./components/map";
import Footer from "./components/footer";

function App() {
  return (
    <Fragment>
      <Nav />
      <Header />
      <Signup />
      <Sleep />
      <Meow />
      <Faq />
      <Instructors />
      <Map />
      <Footer />
    </Fragment>
  );
}

export default App;
