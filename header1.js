import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Logo.jpg";
import User from "./user.jpg";

const heading = React.createElement(
  "div",
  { className: "title" },
  React.createElement("h1", {}, "this is h1"),
  React.createElement("h2", {}, "this is h2"),
  React.createElement("h3", {}, "this is h3")
);

const headingComponent = (
  <div className="title">
    <h1>This is JSX h1</h1>
    <h2>This is JSX h2</h2>
    <h3>This is JSX h3</h3>
  </div>
);

const TitleComponent = () => {
  return <h1 className="title">Namaste React 🚀</h1>;
};

const HeadingComponent = () => {
  return (
    <div className="heading">
      <TitleComponent />
      <h1>This is JSX functional component h1</h1>
      <h2>This is JSX functional component h2</h2>
      <h3>This is JSX functional component h3</h3>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="image">
          <img src={Logo} alt="React Logo"></img>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search"></input>
          <button type="submit">Search</button>
        </div>
        <div className="user">
          <img src={User} alt="User Logo"></img>
        </div>
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(headingComponent);
root.render(<HeadingComponent></HeadingComponent>);
root.render(Header());
