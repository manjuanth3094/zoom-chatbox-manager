const allTaskInitialState = {}

const displayReducer = (state = allTaskInitialState, action) => {
	switch (action.type) {
		case 'display': {
			return { ...action.payload }
		}
		default: {
			return { ...state }
		}
	}
}
export default displayReducer
