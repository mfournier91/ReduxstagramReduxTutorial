//a reducer takes to things

//info about what happened(the action)
//copy of current state
function posts(state = [], action) {
  console.log("The Posts will change");
  console.log(state, action);
  return state;
}

export default posts
