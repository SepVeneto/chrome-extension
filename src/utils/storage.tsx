import { State, Options} from '../type';
interface Save {
  todos?: Array<State>,
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

// export function readData(key: string, callback: Function) {
//   chrome.storage.local.get(key, callback)
// }
