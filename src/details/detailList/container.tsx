import { Store } from "../../type";
import { Dispatch } from "react";
import { editTodo, deleteTodo, addTodo } from "../../action";
import DetailList from './index';
import { connect } from "react-redux";

const mapStateToProps = (state: Store) => {
  let list = state.todos;
  const columnId = state.columnId;
  chrome.storage.local.get(res => {
    list = res.todos || state.todos;
  })
  return {
    columnId,
    todos: list.filter(item => item.columnId === columnId),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onEditTodo (id: number, title: string, content: string) {
      dispatch(editTodo(id, title, content))
    },
    onDelete (id: number) {
      dispatch(deleteTodo(id));
    },
    onAddTodo (title: string, content: string, columnId: string) {
      dispatch(addTodo(title, content, columnId));
    }
  }
}

const visibleDetailList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailList);

export default visibleDetailList;