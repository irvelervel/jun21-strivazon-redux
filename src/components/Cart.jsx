import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { connect } from 'react-redux'
import { removeItemFromCartAction } from "../actions";
import { useEffect } from "react";

const mapStateToProps = (state) => ({
  cart: state.cart.products,
  userName: state.user.userName
})

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (index) => {
    dispatch(removeItemFromCartAction(index))
  }
})

const Cart = ({ cart, removeFromCart, userName, history }) => {

  useEffect(() => {
    // let's check if the user is logged in!
    if (!userName) {
      // go back home!
      // let's use history
      // do I have history here?
      // yes, this is a routed component (look at App.jsx)
      history.replace('/')
    }
  }, [])

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {cart.map((book, i) => (
            <li key={i} className="my-4">
              <Button variant="danger" onClick={() => removeFromCart(i)}>
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="font-weight-bold">
          TOTAL:{" "}
          {cart.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
        </Col>
      </Row>
    </Row>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
