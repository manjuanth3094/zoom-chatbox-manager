import _ from 'lodash'

const setDisplayData = (data) => {
	return {
		type: 'display',
		payload: data,
	}
}
const displayAction = (userelement, words, history) => {
	return (dispatch) => {
		const user2 = userelement.toLowerCase()
		const commentList = words.filter((ele) => {
			return ele[3].toLowerCase() === user2
		})
		const userData = { user: user2, commentList: commentList }
		dispatch(setDisplayData(userData))
		if (userData.commentList.length > 0) {
			history.push(`/userdetail/${user2}`)
		}
	}
}
export default displayAction