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
