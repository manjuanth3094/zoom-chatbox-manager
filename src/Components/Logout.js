import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
export const Logout = (props) => {
	const { setLoginStatus } = props

	const logoutUser = (e) => {
		localStorage.removeItem('user')
		setLoginStatus(false)
	}
	return (
		<>
			<Button variant='success' onClick={logoutUser}>
				Logout
			</Button>
		</>
	)
}