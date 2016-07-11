/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as breakpoints from '../components/breakpoints';
import * as breakpointActions from '../actions/breakpoint';
import * as ciklumActions from '../actions/ciklum';
import Microsoft from '../components/ms';
import Dropbox from '../components/dropbox';
import Invision from '../components/invision';
import Oculus from '../components/oculus';
import Apple from '../components/apple';
// import Main from '../components/Main';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    const bp = breakpoints.currentBreakpoint();
    this.props.actions.getBreakpoint(bp);
  }
  render() {
    const {actions, ciklum, ciklumActions} = this.props;
    return (<div className="ciklum">
        <Microsoft actions={actions} ciklum={ciklum} ciklumActions={ ciklumActions }/>
        <Dropbox />
        <Invision ciklum={ciklum} ciklumActions={ ciklumActions }/>
        <Oculus />
        <Apple ciklum={ciklum} ciklumActions={ ciklumActions }/>
      </div>);
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  ciklumActions: PropTypes.object.isRequired,
  ciklum: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = { ciklum: state.ciklum };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  // const actions = { getBreakpoint: breakpointActions };
  // const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return { actions: bindActionCreators(breakpointActions, dispatch),
            ciklumActions: bindActionCreators(ciklumActions, dispatch) };
  // return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
