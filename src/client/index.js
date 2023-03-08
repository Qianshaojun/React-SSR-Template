import React from 'react';
import ReactDOM from 'react-dom';
import routes from '../routes';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';
import { renderRoutes, matchRoutes } from 'react-router-config';

// React 中提供在初次渲染的时候，去复用原本已经存在的 DOM 节点，
// 减少重新生成节点以及删除原本 DOM 节点的开销，来加速初次渲染的功能
// hydrate 就是表示把服务器端渲染未完成的工作完成，比如说绑定事件
ReactDOM.hydrate(
	<Provider store={getClientStore()}>
		<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
