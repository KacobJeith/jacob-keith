import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../redux/actions'
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => ({
})

class PortfolioItemCard extends Component {

  render() {
    console.log(this.props.markers);

    var inputs = {
      card: {
        style: {
          width: 300,
          height: 300
          backgroundColor: 'blue',
          margin: 20
        }
      }
    }
    
    return (
      <div {...inputs.card}/>
    )
  }
}


var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PortfolioItemCard))