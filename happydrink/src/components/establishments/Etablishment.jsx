import React, { Component } from "react";
import { establishments } from "./fixtures";
import SingleEtab from "./SingleEtab";

class Etablishment extends Component {
  render() {
    // Loop object -> generate a list
    const listEstablishment = establishments.map(establishment => {
      return (
        <li key={establishment.id} className="establishment">
          <h3>{establishment.name}</h3>
          {establishment.description}
        </li>
      );
    });
    // Display list
    return (
      <div>
        <div>{listEstablishment}</div>

        {/* Another way to loop arrays + Display one element*/}
        {establishments.map((establishmentObject, index) => {
          if (index == 0) {
            return (
              <SingleEtab
                key={"etab/" + index}
                etabValue={establishmentObject}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default Etablishment;
