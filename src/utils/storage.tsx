import { State, Options, Column} from '../type';
interface Save {
  todos?: Array<State>,
  columns ?: Array<Column>,
  settings?: Options,
}
export function saveData(data: Save) {
  const list = data.todos || [];
  setBadge(list);
  chrome.storage.local.set(data)
}

export function setBadge(list: Array<State>) {
  chrome.browserAction.setBadgeText({ text: list.length ? list.length.toString() : ''});
}

// export function readData() {
//   return new Promise((resolve, reject) => {
//     chrome.storage.local.get(res => {
//       resolve(res);
//     })
//   })
// }
