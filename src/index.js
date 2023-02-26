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
