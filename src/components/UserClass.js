import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
        userInfo : {
          name: "XYZ",
          location: "Delhi"
        }
    };
    // console.log(this.props.name+"Child constructor")
  }

  async componentDidMount(){
    // console.log(this.props.name+"child componentDidMount")
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo:json
    })
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  render() {
    // console.log(this.props.name+"child render")
    // const { count } = this.state;
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>count: {count}</h1>
        <button
          onClick={() => {
            this.setState ({
              count: this.state.count + 1,
            })
          }}
        >
          Increase Count
        </button>
        <button
          onClick={() => {
            this.setState ({
              count: this.state.count - 1,
            })
          }}
        >
          Decrease Count
        </button> */}
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: "abc@gmail.com"</h3>
      </div>
    );
  }
}

export default UserClass;
