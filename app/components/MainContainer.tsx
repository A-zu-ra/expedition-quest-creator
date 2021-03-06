import Redux from 'redux'
import {connect} from 'react-redux'
import {setDirty, panelToggle} from '../actions/Editor'
import {setSnackbar} from '../actions/Snackbar'
import {AppState, PanelType} from '../reducers/StateTypes'
import Main, {MainStateProps, MainDispatchProps} from './Main'

const mapStateToProps = (state: AppState, ownProps: any): MainStateProps => {
  return {
    editor: state.editor,
    loggedIn: state.user.loggedIn,
    bottomPanel: state.editor.bottomPanel,
    snackbar: state.snackbar,
    quest: state.quest,
  };
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>, ownProps: any): MainDispatchProps => {
  return {
    onDragFinished: (size: number) => {
      dispatch({type: 'PANEL_DRAG'});
    },
    onPanelToggle: (panel: PanelType) => {
      dispatch(panelToggle(panel));
    },
    onSnackbarClose: () => {
      dispatch(setSnackbar(false));
    }
  };
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer
