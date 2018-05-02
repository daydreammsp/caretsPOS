function cashPayment(state = [], action) {
   console.log('cash payment')
    switch (action.type) {
      case 'POST_CASH':
      
        return action.payload
      default:
        return state;
    }
  }

export default cashPayment;




