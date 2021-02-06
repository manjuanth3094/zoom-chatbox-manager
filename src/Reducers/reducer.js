const allTaskInitialState = {}

const alldataReducer = (state = allTaskInitialState, action) => {
	switch (action.type) {
		case 'alldata': {
			return { ...action.payload }
		}
		default: {
			return { ...state }
		}
	}
}
export default alldataReducer
