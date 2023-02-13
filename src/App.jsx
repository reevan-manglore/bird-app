import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext.jsx'
import { TweetProvider } from './context/TweetContext.jsx'

import Landing from "./pages/landing/index.jsx"
import Register from "./pages/register/index.jsx"
import Login from "./pages/login/index.jsx"
import DashBoard from "./pages/dashboard/index.jsx"


import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import NoPageFound from './components/NoPageFound.jsx'



function App() {
	return (
		<BrowserRouter>
		<AuthProvider>
			<TweetProvider>
				<Routes>
					<Route path="/" element={<Landing/>}/>
					<Route path="/login" element = {<Login/>}/>
					<Route path="/register" element = {<Register/>}/>
					<Route element = {<ProtectedRoutes/>}>
						<Route path="/dashboard" element = {<DashBoard/>}/>
					</Route>
					
					<Route path="*" element={<NoPageFound/>}/>
				</Routes>
			</TweetProvider>
		</AuthProvider>
		</BrowserRouter>
	)
}

export default App
