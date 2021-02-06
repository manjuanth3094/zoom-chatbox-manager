import React from 'react'
import { useSelector } from 'react-redux'
import '../Css/displayUserList.css'
export const UserDetails = (props) => {
	const userDetail = useSelector((state) => state.displayTasks)
	const user = userDetail.user ? userDetail.user : ''
	const commentList = userDetail.commentList ? userDetail.commentList : []
	return (
		<>
			<h1>Details of User : {user}</h1>
			<hr />
			<br />
			<h3>Total number of replies : {commentList.length}</h3>
			<hr />
			<table>
				{commentList.map((ele) => {
					return (
						<tr>
							<td>{ele}</td>
						</tr>
					)
				})}
			</table>
		</>
	)
}