import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(props){
      super(props);
      // console.log("Parent constructor");
  }
  componentDidMount(){
    // console.log("Parent componentDidMount");
  }
  render(){
    // console.log("Parent render");
    return (
      <div>
      <h1>Swiggy</h1>
      <h2>EXPLORE EVERY RESTAURANTS NEAR ME</h2>
      {/* <User name="balaji function" location="tirupati function"></User> */}
      <UserClass name="balaji class" location="tpt class"></UserClass>
    </div>
    )
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>Swiggy</h1>
//       <h2>EXPLORE EVERY RESTAURANTS NEAR ME</h2>
//       {/* <User name="balaji function" location="tirupati function"></User> */}
//       <UserClass name="balaji class" location="tpt class"></UserClass>
//     </div>
//   );
// };

export default About;
