import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import reducer from './reducer';

const loggerMiddleware: Middleware = () => (next) => (action) => {
  console.log('action:', action);
  return next(action);
};

const store = (__REDUX_DEVTOOLS_EXTENSION__
  ? compose(applyMiddleware(loggerMiddleware), __REDUX_DEVTOOLS_EXTENSION__())
  : applyMiddleware(loggerMiddleware))(createStore)(reducer);

store[Symbol.observable]().subscribe({
  next(state) {
    console.log('当前状态：', state);
  }
});

export default store;
