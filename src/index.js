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