import _ from 'lodash'
import * as R from 'ramda'

const setAllData = (data) => {
	return {
		type: 'alldata',
		payload: data,
	}
}
const allDataAction = (text) => {
	return (dispatch) => {
		// dispatch(setAddTask(alltask))
		let eachLine = text.trim().split(/\n/)
		let eachWord = eachLine.map((ele) => {
			return ele.split(' ')
		})
		let listOfStudents = eachWord.map((ele) => {
			//  return ele[2] + ' ' + ele[3]
			return ele[3]
		})
		let username = _.uniq(listOfStudents)
		let numberOfComments = R.countBy(R.toLower)(listOfStudents)
		const finalData = {
			userName: username,
			lines: eachLine,
			noOfComments: numberOfComments,
			words: eachWord,
		}
		dispatch(setAllData(finalData))
	}
}
export default allDataAction