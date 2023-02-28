//redux createStore
//@param state
//@param stateChanger
// const createStore = (state, stateChanger) => {
//     const getState = () => state;
//     const dispatch = (action) => stateChanger(state, action);
//     return {
//         getState,
//         dispatch
//     };
// };
// redux reducer
// const stateChanger = (state, action) => {
//     const {type, payload} = action;
//     switch (type) {
//         case 'UPLOAD_TITLE':
//             state.title.txt = payload.title;
//             break;
//         case 'UPLOAD_CONTENT':
//             state.content.txt = payload.content;
//             break;
//         default:
//             break;
//     }
//     return state;
// };
// redux state
// const appState = {
//     title: {
//         txt: '前端这件小事儿'
//     },
//     content: {
//         txt: 'Redux 源码解析'
//     }
// };
// const store = createStore(appState, stateChanger);
// let state = store.getState();
// console.log('state:', state.title.txt, state.content.txt);
// store.dispatch({type: 'UPLOAD_TITLE', payload: {title: '进击的大前端'}});
// state = store.getState();
// console.log('state:', state.title.txt, state.content.txt);
// store.dispatch({type: 'UPLOAD_CONTENT', payload: {content: '手写一个 Promise'}});
// state = store.getState();
// console.log('state:', state.title.txt, state.content.txt);
// const createStore = (state, stateChanger) => {
//     const getState = () => state;
//     const dispatch = action => stateChanger(state, action);
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
//         listeners.forEach(listener => {
//             listener();
//         });
//     };
//     return {
//         getState,
//         subscribe,
//         dispatch
//     }
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
//         txt: 'Redux 代码解析'
//     }
// };
// const store = createStore(appState, stateChanger);
// console.log('state:', store.getState().title.txt, store.getState().content.txt);
// store.subscribe(() => {
//     console.log('state:', store.getState().title.txt, store.getState().content.txt);
// });
// store.dispatch({type: 'NOVEL_TITLE', payload: {title: '进击的大前端'}});
// store.dispatch({type: 'NOVEL_CONTENT', payload: {content: '手写 Promise'}});

// redux createStore white-than-wood
// const createStore = (state, reducer) => {
//     const listeners = [];
//     const getState = () => state;
//     const subscribe = listener => listeners.push(listener);
//     const dispatch = action => {
//         state = reducer(state, action);
//         listeners.forEach(listener => listener());
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
// const renderTitle = state => {
//     let title = document.getElementById('title');
//     if (typeof title === 'undefined' || title === null) {
//         title = document.createElement('div');
//         title.id = 'title';
//         document.body.append(title);
//         renderTitle(state);
//     }
//     title.innerHTML = state.title.txt;
// };
// const renderContent = state => {
//     let content = document.getElementById('content');
//     if (typeof content === 'undefined' || content === null) {
//         content = document.createElement('div');
//         content.id = 'content';
//         document.body.append(content);
//         renderTitle(state);
//     }
//     content.innerHTML = state.content.txt;
// };
// const renderApp = state => {
//     renderTitle(state);
//     renderContent(state);
// };
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
//         listeners.forEach(listener => listener());
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
//         txt: '前端那件小事儿'
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
//             }
//         default:
//             return {
//                 ...state
//             };
//     }
// };
// const renderTitle = state => {
//     let title = document.getElementById('title');
//     if (typeof title === 'undefined' || title === null) {
//         title = document.createElement('div');
//         title.id = 'title';
//         document.body.append(title);
//         renderTitle(title);
//     }
//     title.innerHTML = state.title.txt;
// };
// const renderContent = state => {
//     let content = document.getElementById('content');
//     if (typeof content === 'undefined' || content === null) {
//         content = document.createElement('div');
//         content.id = 'content';
//         document.body.append(content);
//         renderContent(state);
//     }
//     content.innerHTML = state.content.txt;
// };
// const renderApp = state => {
//     renderTitle(state);
//     renderContent(state);
// };
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
//     var ctor, proto;
//     if (isObject(o) === false) return false;
//     ctor = o.constructor;
//     if (ctor === undefined) return false;
//     proto = o.prototype;
//     if (isPlainObject(proto) === false) return false;
//     if (o.hasOwnProperty('isPrototypeOf') === false) return false;
//     return true;
// }

// redux isPlainObject
// function isPlainObject(o) {
//     if (typeof o !== 'object' || o === null) return false;
//     var currentObject = o;
//     while (Object.getPrototypeOf(currentObject) !== null) {
//         currentObject = Object.getPrototypeOf(currentObject);
//     }
//     return Object.getPrototypeOf(o) === currentObject;
// }

// redux source createStore
// function isPlainObject(o) {
//     if (typeof o !== 'object' || o === null) return false;
//     let currentObj = o;
//     while (Object.getPrototypeOf(currentObj) !== null) {
//         currentObj = Object.getPrototypeOf(currentObj);
//     }
//     return Object.getPrototypeOf(o) === currentObj;
// }
// const Action_Types = {
//     INIT: '@@redux/INIT'
// };
// export default function createStore(reducer, preloadedState, enhancer) {
//     if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
//         enhancer = preloadedState;
//         preloadedState = undefined;
//     }
//     if (typeof enhancer !== 'undefined') {
//         if (typeof enhancer !== 'function')
//             throw new Error('Expected the enhancer to be a function.');
//         return enhancer(createStore)(reducer, preloadedState);
//     }
//     if (typeof reducer !== 'function')
//         throw Error('Expected the reducer to be a function.');
//     let currentReducer = reducer;
//     let currentState = preloadedState;
//     let currentListeners = [];
//     let nextListeners = currentListeners;
//     let isDispatching = false;
//     function getState() {
//         return currentState;
//     }
//     function ensureCanMutateNextListeners() {
//         if (currentListeners === nextListeners)
//             nextListeners = currentListeners.slice();
//     }
//     function subscribe(listener) {
//         if (typeof listener === 'function')
//             throw new Error('Expected listener to be a function.');
//         let isSubscribe = true;
//         ensureCanMutateNextListeners();
//         nextListeners.push(listener);
//         return function unSubscribe() {
//             if (!isSubscribe) return false;
//             isSubscribe = false;
//             ensureCanMutateNextListeners();
//             const index = nextListeners.indexOf(listener);
//             nextListeners.splice(index, 1);
//         };
//     }
//     function dispatch(action) {
//         if (!isPlainObject(action)) {
//             throw new Error(`Actions must be plain objects.
//             Use custom middleware for async actions.`);
//         }
//         if (typeof action.type === 'undefined') {
//             throw new Error(`Actions may not have an undefined "type" property.
//             Have you misspelled a constant?`);
//         }
//         if (isDispatching)
//             throw new Error('Reducers may not dispatch actions.');
//         try {
//             isDispatching = true;
//             currentState = currentReducer(currentState, action);
//         } finally {
//             isDispatching = false;
//         }
//         const listeners = currentListeners = nextListeners;
//         for (let i = 0; i < listeners.length; i++) {
//             const listener = listeners[i];
//             listener();
//         }
//         return action;
//     }
//     dispatch({type: Action_Types.INIT});
//     return {
//         getState,
//         subscribe,
//         dispatch
//     };
// }