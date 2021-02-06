import '../Css/App.css'
import React, { useState } from 'react'
import Upload from './Upload'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { UserDetails } from './UserDetails'
import Login from './Login'
function App() {
	const [loginStatus, setLoginStatus] = useState(
		localStorage.getItem('user') ? true : false
	)
	return (
		<>
			<Router>
				{loginStatus ? <Redirect to='/upload' /> : <Redirect to='/login' />}
				<Route
					exact
					path='/upload'
					render={(props) => <Upload setLoginStatus={setLoginStatus} />}
				/>
				<Route
					exact
					path={`/userdetail/:user2`}
					render={(props) => <UserDetails />}
				/>
				<Route
					exact
					path={`/login`}
					render={(props) => <Login setLoginStatus={setLoginStatus} />}
				/>
			</Router>
		</>
	)
}

export default App