;(function () {
	'use strict'
	
	const url = 'http://89.108.64.67:3000'
	const key = '?key=fdlpa78037r1740808h'

	const dbRequest = {
		editOrderById: (id, data, callback) => localFetch(`/order/${id}`, { method: 'PUT', body: JSON.stringify(data) }, callback),
		createOrder: (data, callback) => localFetch(`/order`, { method: 'POST', body: JSON.stringify(data) }, callback),
		generate: (number, callback) => localFetch(`/generate/${number}`, { method: 'POST' }, callback),
		deleteOrderById: (id, callback) => localFetch(`/order/${id}`, { method: 'DELETE' }, callback),
		getOrderById: (id, callback) =>  localFetch(`/order/${id}`, { method: 'GET' }, callback),
		reinit: callback => localFetch(`/reinit`, { method: 'POST' }, callback),
		getList: callback => localFetch(`/orders`, { method: 'GET' }, callback)
	}

	window.dbRequest = dbRequest

	function localFetch (path, params, callback) {
		fetch(`${url}${path}${key}`, params)
			.then(answer => answer.json())
			.then(data => callback(data))
	}
})()