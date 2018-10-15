import React, { Component } from "react";
import "./App.css";
// import { establishments } from "./components/establishments/fixtures";
import Etablishment from "./components/establishments/Etablishment";
import SingleEtab from "./components/establishments/SingleEtab";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to {this.props.title}</h2>
        </div>
        <Etablishment />;
      </div>
    );
    // const listEstablishment = establishments.map(establishment => {
    //   return (
    //     <li key={establishment.id} className="establishment">
    //       <h3>{establishment.name}</h3>
    //       {establishment.description}
    //     </li>
    //   );
    // });
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <h2>Welcome to {this.props.title}</h2>
    //     </div>
    //     <div className="App-intro">{listEstablishment}</div>
    //   </div>
    // );
  }
}
export default App;
