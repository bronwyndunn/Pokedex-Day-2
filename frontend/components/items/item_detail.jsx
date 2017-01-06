import React from 'react';

class ItemDetail extends React.Component {


  render() {


    return (
      <section>
        <h3>Items</h3>
          <ul key={this.props.items.id}>
            <li>{this.props.items.name}</li>
            <li>{this.props.items.happiness}</li>
            <li>{this.props.items.price}</li>
          </ul>
      </section>
    );
  }
}

export default ItemDetail;
