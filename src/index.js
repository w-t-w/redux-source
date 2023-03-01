// redux createStore
// const createStore = (state, stateChanger) => {
//     const getState = () => state;
//     const dispatch = action => {
//         stateChanger(state, action);
//     };
//     return {
//         getState,
//         dispatch
//     };
// };
// const stateChanger = (state, action) => {
//     const {type, payload} = action;
//     switch (type) {
//         case 'NOVEL_TITLE':
//             state.title.txt = payload.title;
//             break;
//         case 'NOVEL_CONTENT':
//             state.content.txt = payload.content;
//             break;
//         default:
//             break;
//     }
//     return state;
// };
// const appState = {
//     title: {
//         txt: '前端这件小事儿'
//     },
//     content: {
//         txt: 'Redux 源码解析'
//     }
// };
// const store = createStore(appState, stateChanger);
// console.log('state:', store.getState().title.txt, store.getState().content.txt);
// store.dispatch({type: 'NOVEL_TITLE', payload: {title: '进击的大前端'}});
// console.log('state:', store.getState().title.txt, store.getState().content.txt);
// store.dispatch({type: 'NOVEL_CONTENT', payload: {content: '手写 Promise'}});
// console.log('state:', store.getState().title.txt, store.getState().content.txt);

// redux createStore complete
// const createStore = (state, stateChanger) => {
//     const listeners = [];
//     const getState = () => state;
//     const subscribe = listener => listeners.push(listener);
//     const dispatch = action => {
//         stateChanger(state, action);
//         for (let i = 0; i < listeners.length; i++) {
//             const listener = listeners[i];
//             listener();
//         }
//     };
//     return {
//         getState,
//         subscribe,
//         dispatch
//     };
// };
// const stateChanger = (state, action) => {
//     const {type, payload} = action;
//     switch (type) {
//         case 'NOVEL_TITLE':
//             state.title.txt = payload.title;
//             break;
//         case 'NOVEL_CONTENT':
//             state.content.txt = payload.content;
//             break;
//         default:
//             break;
//     }
//     return state;
// };
// const appState = {
//     title: {
//         txt: '前端这件小事儿'
//     },
//     content: {
//         txt: 'Redux 源码解析'
//     }
// };
// const store = createStore(appState, stateChanger);
// console.log('state:', store.getState().title.txt, store.getState().content.txt);
// store.subscribe(() => console.log('state:', store.getState().title.txt, store.getState().content.txt));
// store.dispatch({type: 'NOVEL_TITLE', payload: {title: '进击的大前端'}});
// store.dispatch({type: 'NOVEL_CONTENT', payload: {content: '手写 Promise'}});

// redux createStore white-than-wood
// const createStore = (state, reducer) => {
//     const listeners = [];
//     const getState = () => state;
//     const subscribe = listener => listeners.push(listener);
//     const dispatch = action => {
//         state = reducer(state, action);
//         for (let i = 0; i < listeners.length; i++) {
//             const listener = listeners[i];
//             listener();
//         }
//     };
//     return {
//         getState,
//         subscribe,
//         dispatch
//     };
// };
// const reducer = (state, action) => {
//     const {type, payload} = action;
//     switch (type) {
//         case 'NOVEL_TITLE':
//             return {
//                 ...state,
//                 title: {
//                     txt: payload.title
//                 }
//             };
//         case 'NOVEL_CONTENT':
//             return {
//                 ...state,
//                 content: {
//                     txt: payload.content
//                 }
//             };
//         default:
//             return {
//                 ...state
//             };
//     }
// };
// const appState = {
//     title: {
//         txt: '前端这件小事儿'
//     },
//     content: {
//         txt: 'Redux 源码解析'
//     }
// };
// function renderApp(state) {
//     renderTitle(state);
//     renderContent(state);
// }
// function renderTitle(state) {
//     let title = document.getElementById('title');
//     if (typeof title === 'undefined' || title === null) {
//         title = document.createElement('div');
//         title.id = 'title';
//         document.body.append(title);
//         renderTitle(state);
//     }
//     title.innerHTML = state.title.txt;
// }
// function renderContent(state) {
//     let content = document.getElementById('content');
//     if (typeof content === 'undefined' || content === null) {
//         content = document.createElement('div');
//         content.id = 'content';
//         document.body.append(content);
//         renderContent(state);
//     }
//     content.innerHTML = state.content.txt;
// }
// const store = createStore(appState, reducer);
// renderApp(store.getState());
// store.subscribe(() => renderApp(store.getState()));
// store.dispatch({type: 'NOVEL_TITLE', payload: {title: '进击的大前端'}});
// store.dispatch({type: 'NOVEL_CONTENT', payload: {content: '手写 Promise'}});

// redux createStore complete white-than-wood
// const createStore = reducer => {
//     let state = null;
//     const listeners = [];
//     const getState = () => state;
//     const subscribe = listener => listeners.push(listener);
//     const dispatch = action => {
//         state = reducer(state, action);
//         for (let i = 0; i < listeners.length; i++) {
//             const listener = listeners[i];
//             listener();
//         }
//     };
//     dispatch({});
//     return {
//         getState,
//         subscribe,
//         dispatch
//     };
// };
// const appState = {
//     title: {
//         txt: '前端这件小事儿'
//     },
//     content: {
//         txt: 'Redux 源码解析'
//     }
// };
// const reducer = (state, action) => {
//     if (!state)
//         return appState;
//     const {type, payload} = action;
//     switch (type) {
//         case 'NOVEL_TITLE':
//             return {
//                 ...state,
//                 title: {
//                     txt: payload.title
//                 }
//             };
//         case 'NOVEL_CONTENT':
//             return {
//                 ...state,
//                 content: {
//                     txt: payload.content
//                 }
//             };
//         default:
//             return {
//                 ...state
//             };
//     }
// };
// function renderApp(state) {
//     renderTitle(state);
//     renderContent(state);
// }
// function renderTitle(state) {
//     let title = document.getElementById('title');
//     if (typeof title === 'undefined' || title === null) {
//         title = document.createElement('div');
//         title.id = 'title';
//         document.body.append(title);
//         renderTitle(state);
//     }
//     title.innerHTML = state.title.txt;
// }
// function renderContent(state) {
//     let content = document.getElementById('content');
//     if (typeof content === 'undefined' || content === null) {
//         content = document.createElement('div');
//         content.id = 'content';
//         document.body.append(content);
//         renderContent(state);
//     }
//     content.innerHTML = state.content.txt;
// }
// const store = createStore(reducer);
// renderApp(store.getState());
// store.subscribe(() => renderApp(store.getState()));
// store.dispatch({type: 'NOVEL_TITLE', payload: {title: '进击的大前端'}});
// store.dispatch({type: 'NOVEL_CONTENT', payload: {content: '手写 Promise'}});

// isPlainObject
// function isObject(o) {
//     return Object.prototype.toString.call(o) === '[object Object]';
// }
// function isPlainObject(o) {
//     if (isObject(o) === false) return false;
//     var ctor, proto;
//     ctor = o.constructor;
//     if (ctor === undefined) return true;
//     proto = o.prototype;
//     if (isObject(proto) === false) return false;
//     if (o.hasOwnProperty('isPrototypeOf') === false) return false;
//     return true;
// }

// redux reducer isPlainObject
// function isPlainObject(o) {
//     if (typeof o !== 'object' || o === null) return false;
//     let currentObject = o;
//     while (Object.getPrototypeOf(currentObject) !== null) {
//         currentObject = Object.getPrototypeOf(currentObject);
//     }
//     return Object.getPrototypeOf(o) === currentObject;
// }

// redux complete sourceCode