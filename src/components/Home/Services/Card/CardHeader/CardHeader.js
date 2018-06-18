import React, { Component } from 'react'

class CardHeader extends Component {
  render() {
    const { image, category } = this.props;
    console.log(image)

    let style = {
      backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    )
  }
}

export default CardHeader
