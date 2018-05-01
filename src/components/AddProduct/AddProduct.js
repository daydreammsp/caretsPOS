import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    url: state.squareReducer
  });

class AddProduct extends React.Component {

    state = {
        amount: ''
      }

      
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
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
    render() {
        let content = null;
    
        if (this.props.user.userName) {
          content = (
            <div>
              <h2>add product</h2>
              <input type='text'
            placeholder='amount'
            onChange={this.handleAmountChange('amount')}></input>
          {/* <input type='text'
            placeholder='absolute url'
            onChange={this.handleImgChange('image_url')}></input> */}

          <button onClick={this.handleClick}>Submit</button>
          <a href={this.props.url}> Click ME</a>
          <pre>{JSON.stringify(this.props.url)}</pre>
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


  
  export default connect(mapStateToProps)(AddProduct);
