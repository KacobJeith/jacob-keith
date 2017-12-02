import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../redux/actions'
import { withRouter } from 'react-router-dom'

import PortfolioItemCard from './PortfolioItemCard.jsx'

const mapStateToProps = (state) => ({
})

class Portfolio extends Component {

  render() {

    var list = [
      'papersignals',
      'heep',
      'smoothtech',
      'nanotronics'
    ]

    var inputs = {
      container: {
        style: {
          width: '100%',
          height: '100%',
          display: "flex",
          flexDirection: "row",
          flexFlow: "row wrap"
        }
      },
      item: {
        key: 0,
        name: ''
      }
    }

    var cards = [];

    for (var i in list) {
      inputs.item.key = list[i];
      inputs.item.name = list[i];
      cards.push(<PortfolioItemCard {...inputs.item}/>)
    }
    
    return (
      <div {...inputs.container}> {cards} </div>
    )
  }
}


var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio))