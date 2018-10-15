import React, { Component } from "react";
class Features extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      container: {
        display: "flex",
        backgroundColor: "#4fa49a",
        color: "white"
      },
      text: {
        flex: "2",
        marginRight: 50,
        fontSize: 20
      },
      pictos: {
        listStyleType: "none",
        display: "flex",
        flex: "2",
        flexDirection: "row",
        flexFlow: "row wrap",
        marginTop: 40
      },
      li: {
        marginRight: 100,
        marginBottom: 50
      }
    };
  }
  render() {
    return (
      <div className="container" style={this.styles.container}>
        <ul className="pictos" style={this.styles.pictos}>
          <li style={this.styles.li}>
            <i class="far fa-kiss-beam fa-10x" />
          </li>
          <li style={this.styles.li}>
            <i class="far fa-kiss-beam fa-10x" />
          </li>
          <li style={this.styles.li}>
            <i class="far fa-kiss-beam fa-10x" />
          </li>
          <li style={this.styles.li}>
            <i class="far fa-kiss-beam fa-10x" />
          </li>
          <li style={this.styles.li}>
            <i class="far fa-kiss-beam fa-10x" />
          </li>
          <li style={this.styles.li}>
            <i class="far fa-kiss-beam fa-10x" />
          </li>
        </ul>
        <div className="text" style={this.styles.text}>
          <h3>Lorem ipsum dolor adipiscing amet dolor consequat</h3>
          <p>
            Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing.
            A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non.
            Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan
            adipiscing ipsum. Blandit faucibus proin. Ac aliquam integer
            adipiscing enim non praesent vis commodo nunc phasellus cubilia ac
            risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis
            dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia
            lorem lobortis semper morbi col faucibus vitae integer placerat
            accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing
            curae consequat feugiat etiam dolore. Adipiscing a commodo ante nunc
            accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet
            vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet
            sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.
          </p>
        </div>
      </div>
    );
  }
}

export default Features;
