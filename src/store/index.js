import { createStore, applyMiddleware, compose } from 'redux'; //applyMiddleware来引入redux中间件 保证可使用中间件 thunk saga redux-dev-tool都是redux的中间件
import reducer from './reducer'; // reducer
import createSagaMiddleware from 'redux-saga'; // 
import TodoSagas from './sagas';

import thunk from 'redux-thunk'; //redux-thunk中间件统一管理异步请求和其他复杂逻辑
//有了thunk， action就可以是一个函数了（在函数里些ajax等异步请求） 否则必须是一个对象 包含type 和 组件通信的数据
// saga thunk 二选一 thunk简单些 saga实现更细粒度的控制。

const sagaMiddleware = createSagaMiddleware();


const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;


const enhancer = composeEnhancers(
	applyMiddleware(sagaMiddleware)
	// applyMiddleware(thunk)
	);

//applyMiddleware应该作为第二个参数传递到createStore中。 applyMiddleware可以具有多个中间件作为参数。

//applyMiddleware 函数接受一个中间件数组，并依次执行中间件，将上一个 middleware 包装过的 store.dispatch 传递给下一个中间件。

const store = createStore(reducer, enhancer);

sagaMiddleware.run(TodoSagas);

export default store;