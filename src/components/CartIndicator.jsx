import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux'

// mapStateToProps is a function returning an object
const mapStateToProps = (state) => ({
  cartLength: state.cart.products.length
})
// the one above is the best approach: return an object with the props you need already set

const CartIndicator = ({ history, cartLength }) => (
  <div className="ml-auto mt-2">
    <Button color="primary" onClick={() => history.push("/cart")}>
      <FaShoppingCart />
      <span className="ml-2">{cartLength}</span>
    </Button>
  </div>
);

export default connect(mapStateToProps)(withRouter(CartIndicator));

// connect may take up to 2 parameters: mapStateToProps and mapDispatchToProps
// mapStateToProps is meant to deal with READING PURPOSES (it's the only mandatory one)
// mapDispatchToProps is meant to deal with DISPATCHING PURPOSES