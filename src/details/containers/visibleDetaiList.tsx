import { Store } from "../../type";
import { Dispatch } from "react";
import { editTodo, deleteTodo } from "../../action";
import App from "../App";
import { connect } from "react-redux";

const mapStateToProps = (state: Store) => {
  let list = state.todos || [];
  chrome.storage.local.get(res => {
    list = res.todos || state.todos;
  })
  return {
    todos: list,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onEditTodo (id: number, title: string, content: string) {
      dispatch(editTodo(id, title, content))
    },
    onDelete (id: number) {
      dispatch(deleteTodo(id));
    }
  }
}

const visibleDetailList = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default visibleDetailList;