import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Landing from "./pages/landing/index.jsx"
import Login from "./pages/login/index.jsx"
import Register from "./pages/register/index.jsx"
import NoPageFound from './components/NoPageFound.jsx'


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing/>}/>
				<Route path="/login" element = {<Login/>}/>
				<Route path="/register" element = {<Register/>}/>
				<Route path="*" element={<NoPageFound/>}/>
			
			</Routes>
		</BrowserRouter>
	)
}

export default App
