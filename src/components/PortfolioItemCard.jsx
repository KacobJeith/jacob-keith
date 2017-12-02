import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../redux/actions'
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name
})

class PortfolioItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  render() {

    var cardWidth = 300;
    var fontSize = 40;

    var inputs = {
      card: {
        style: {
          width: cardWidth,
          height: cardWidth,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
          backgroundColor: this.state.hover ? 'green' : 'blue',
          marginTop: 20,
          marginLeft: 20
        },
        onMouseEnter: () => this.setState({hover: true}),
        onMouseLeave: () => this.setState({hover: false})
      },
      box: {
        style: {
          height: cardWidth,
          width: cardWidth,
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          fontSize: fontSize,
          color: "white"
        }
      },
      text: {
        style: {
          height: "80%",
          width: "80%",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          fontSize: fontSize,
          color: "white",
          cursor: "default"
        }
      },
    }
    
    return (
      <div {...inputs.card}>
        <div {...inputs.box}>
          <div {...inputs.text}>
            {this.props.name}
          </div>
        </div>
      </div>
    )
  }
}


var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PortfolioItemCard))