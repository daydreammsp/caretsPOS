import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';
import NumberFormat from 'react-number-format';

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
    cashPayment: state.cashPayment,
    show: state.showReducer
    
  });

class Cash extends React.Component {
constructor(props){
    super(props)
    
    
   
}
componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    console.log('cash payment', this.props.state)
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

showClick = ()=>{
  console.log("show clicked")
  this.props.dispatch({
    type: 'SHOW_CASH',
    payload: this.props.show
  });
}
  
  render() {
    
      let content = null;
  
      if (this.props.user.userName) {
        content = (
          <div>
            <h2>Cash stringify</h2>
            <pre>{JSON.stringify(this.props.cashPayment)}</pre>
            <Button onClick={()=>this.showClick()}>Return</Button>
          </div>
        );
      }
  
      return (
        <div>
          
          { content }
      
        </div>
      );
    }   
}

Cash.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default compose(
    withStyles(styles, { name: 'Cash' }),
    connect(mapStateToProps)
  )(Cash);