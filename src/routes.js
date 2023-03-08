import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Counter from './containers/Counter';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Profile from './containers/Profile';
import NotFound from './containers/NotFound';
import App from './containers/App';

export default [
	{
		path: '/',
		component: App,
		loadData: App.loadData,
		routes: [
			{
				path: '/',
				component: Home,
				exact: true,
				key: '/',
				loadData: Home.loadData,
			},
			{
				path: '/counter',
				component: Counter,
				key: '/counter',
			},
			{
				path: '/login',
				component: Login,
				key: '/login',
			},
			{
				path: '/logout',
				component: Logout,
				key: '/logout',
			},
			{
				path: '/profile',
				component: Profile,
				key: '/profile',
			},
			{
				component: NotFound,
				key: '/notfound',
			},
		],
	},
];
