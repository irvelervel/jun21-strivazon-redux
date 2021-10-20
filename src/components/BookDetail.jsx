import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux'

const mapStateToProps = state => ({})

// mapDispatchToProps is a function returning an object
const mapDispatchToProps = (dispatch) => ({
  // we need a way of adding the selectedBook to the cart products array
  addToCart: (book) => {
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      // an action is a JS object with AT LEAST a type property
      payload: book
      // the PAYLOAD is the property carrying over any additional piece of info
      // needed by the reducer to compute the new state
      // payload is all the additional info needed from the reducers to calculate
      // the new state of the application
    })
  }
})

class BookDetail extends Component {
  state = {
    book: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.bookSelected !== this.props.bookSelected) {
      this.setState({
        book: this.props.bookSelected,
      });
    }
  }

  render() {
    return (
      <div className="mt-3">
        {this.state.book ? (
          <>
            <Row>
              <Col sm={12}>
                <h1>{this.state.book.title}</h1>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={4}>
                <div className="mt-3">
                  <img
                    className="book-cover"
                    src={this.state.book.imageUrl}
                    alt="book selected"
                  />
                </div>
              </Col>
              <Col sm={8}>
                <p>
                  <span className="font-weight-bold">Description:</span>
                  {this.state.book.description}
                </p>
                <p>
                  <span className="font-weight-bold">Price:</span>
                  {this.state.book.price}
                </p>
                <Button color="primary" onClick={() => this.props.addToCart(this.state.book)}>
                  ADD TO CART
                </Button>
              </Col>
            </Row>
          </>
        ) : (
          <Row>
            <Col sm={12}>
              <h3>Please select a book!</h3>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);