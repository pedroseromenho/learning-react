import React, { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      container: {
        display: "flex",
        margin: 50
      },
      wrapper: {
        marginRight: 100
      },
      h3: {
        fontSize: 30
      }
    };
  }
  render() {
    return (
      <div style={this.styles.container} className="container">
        <div className="wrapper" style={this.styles.wrapper}>
          <h3 style={this.styles.h3}>
            Lorem ipsum dolor adipiscing amet dolor consequat
          </h3>
          <p>
            Adipiscing a commodo ante nunc accumsan et interdum mi ante
            adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus
            nascetur ac non. Lorem curae et ante amet sapien sed tempus
            adipiscing id accumsan.
          </p>
        </div>
        <img src="https://picsum.photos/500/300" alt="" srcset="" />
      </div>
    );
  }
}

export default About;
