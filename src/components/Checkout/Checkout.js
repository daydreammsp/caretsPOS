import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    
  },
  // input: {
  //   display: 'none',
  // },
});

const mapStateToProps = state => ({
    user: state.user,
    url: state.squareReducer,
    products: state.squareGetProducts
  });

class Checkout extends React.Component {

    state = {
        amount: ''
      }

      
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({
          type: 'GET_PRODUCTS',
          payload: this.state
        });
      }
    
      componentDidUpdate() {
          if (this.props.url != this.props.url || this.props.url.length > 3){
            window.location = this.props.url;
          }
       
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
      }
      handleAmountChange = (inputText) => {
        return (event) => {
          console.log(inputText)
          this.setState({
            [inputText]: event.target.value
          });
        }
      }
      handleClick = () => {
        console.log('clicked!', this.state.amount)
        this.props.dispatch({
          type: 'GET_TRANSACTIONS',
          payload: this.state
        });
      }

      handleCashClick = () =>{
        console.log("click")
      }
    render() {
      
      const { classes } = this.props;
      
      let listProducts = this.props.products.map( (product) => {
        return(
           <div> <span>{product.item_data.name}</span> 
           <strong>{product.item_data.variations[0].item_variation_data.price_money.amount}</strong>
                
           </div>
        )
      })
      
        let content = null;
    
        if (this.props.user.userName) {
          content = (
            <div>
              <h2>Checkout</h2>
              <input type='text'
            placeholder='amount'
            onChange={this.handleAmountChange('amount')}></input><br></br>
          {/* <input type='text'
            placeholder='absolute url'
            onChange={this.handleImgChange('image_url')}></input> */}
            
          <Button variant="raised" className={classes.button} onClick={this.handleCashClick}>Cash</Button>
          <Button variant="raised" className={classes .button} onClick={this.handleClick}>Credit</Button>
          {listProducts}
         
            </div>
          );
        }
    
        return (
          <div>
            <Nav />
            { content }
        
          </div>
        );
      }   
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

  
  // export default connect(mapStateToProps)(Checkout);
  export default compose(
    withStyles(styles, { name: 'Checkout' }),
    connect(mapStateToProps)
  )(Checkout);