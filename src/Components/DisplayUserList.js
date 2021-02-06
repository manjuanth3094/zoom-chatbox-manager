import React from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import displayAction from '../Actions/displayAction'
import { ChartsDisplay } from './ChartsDisplay'
import '../Css/displayUserList.css'
export const DisplayUserList = (props) => {
	const alltasks = useSelector((state) => state.allTasks)
	//console.log(alltasks)
	const dispatch = useDispatch()
	const words = alltasks.words ? alltasks.words : []
	const userName = alltasks.userName ? alltasks.userName : []
	let history = useHistory()

	const liClick = (userelement, words) => {
		dispatch(displayAction(userelement, words, history))
	}
	return (
		<div className='flexbox'>
			<div className='tab'>
				{ userName.length > 0 &&				
				<table className='center'>
					<thead><h3>No. of Students - {userName.length} </h3></thead>
					{userName.map((ele) => {
						return (
							
							
							<tr>
								<td >
									<button key={ele}
									onClick={() => {
										liClick(ele, words)
									}}> {ele}  </button> 
									  
								</td>
							</tr>
							
							
						)
					})}
					
				</table>
}
			</div>
			<div>
				<ChartsDisplay />
			</div>
		</div>
	)
}