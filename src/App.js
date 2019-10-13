import React, { Component } from "react";
import NavbarPage from "./components/landingPage/Navbar";
import SearchForm from "./components/landingPage/SearchForm";
import Background from "./static/images/background_image.jpg";
import "./index.css";

var sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`
};

class App extends Component {
  render() {
    return (
      <section style={sectionStyle}>
        <div className="w-100 p-3">
          <NavbarPage />
        </div>
        <div className="w-50 p-3 h-50">
          <SearchForm />
        </div>
      </section>
    );
  }
}

export default App;
