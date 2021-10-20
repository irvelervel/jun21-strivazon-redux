import { useState } from 'react'
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux'
import { setUsernameAction } from '../actions'

// mapStateToProps is a function returning an object
const mapStateToProps = (state) => ({
  cartLength: state.cart.products.length,
  userName: state.user.userName
})
// the one above is the best approach: return an object with the props you need already set

const mapDispatchToProps = dispatch => ({
  setUsername: (name) => {
    dispatch(setUsernameAction(name))
  }
})

const CartIndicator = ({ history, cartLength, userName, setUsername }) => {

  const [name, setName] = useState('')

  return (
    <div className="ml-auto mt-2">
      {
        userName ? (
          <Button color="primary" onClick={() => history.push("/cart")}>
            <FaShoppingCart />
            <span className="ml-2">Welcome {userName}! {cartLength}</span>
          </Button>
        ) : (
          <FormControl // we need to make this a controlled input
            placeholder="Insert a username"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                console.log('sending the username...')
                setUsername(name)
              }
            }}
          />
        )
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartIndicator));

// connect may take up to 2 parameters: mapStateToProps and mapDispatchToProps
// mapStateToProps is meant to deal with READING PURPOSES (it's the only mandatory one)
// mapDispatchToProps is meant to deal with DISPATCHING PURPOSES