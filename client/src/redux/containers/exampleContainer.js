import { connect } from 'react-redux';
// import the component the props that need updating/the event handler will be firing within.
import App from '../../component/App.jsx';
// import the event handler action from Actions
import handleProductInit from '../actions/exampleAction2.js';
import changeStyle from '../actions/exampleAction1.js';

//place any props you need from the global state here (or remove if none).
const mapStateToProps = (state) => {
  return {
    currentStyle: state.currentStyle
  };
};

//place any events that fire that alter the global state here (or remove if none).
const mapDispatchToProps = (dispatch) =>{
  return {
    handleProductInit: (q) => dispatch(handleProductInit(q)),
    handleCurrentStyleClick: (style) => dispatch(changeStyle(style))
  };
};

//use whichever connect syntax includes the functions created above.
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
