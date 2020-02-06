import { Store } from "../../type"
import { connect } from "react-redux";
import { addColumn, editColumn, setVisibleColumn, deleteColumn } from "../../action";
import { Dispatch } from "redux";
import columnsList from './index';
import { Column } from '../../type'

const mapStateToProps = (state: Store) => {
  let columns = state.columns;
  const columnId = state.columnId;
  return { columns, columnId }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onAddColumn (name: string) {
      dispatch(addColumn(name))
    },
    onEditColumn (id: string, name: string) {
      dispatch(editColumn(id, name));
    },
    onDeleteColumn(id: string) {
      dispatch(deleteColumn(id));
    },
    onSetVisibleColumn (id: string) {
      dispatch(setVisibleColumn(id))
    }
  }
}

const columns = connect(
  mapStateToProps,
  mapDispatchToProps
)(columnsList)

export default columns;