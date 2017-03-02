import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let store = createStore();
let app = document.getElementById('app');
render(
	<Provider store = {store} 
		<App />
	/>,
	app
)
 