import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title} - {this.props.currentCategory}</h3>
        <Table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity Per Unit</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Units In Stock</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => {
              return <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>{<Button color="info" onClick={() => this.props.addToCart(product)} >Add</Button>}</td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}
