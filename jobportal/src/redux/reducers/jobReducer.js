const INITIAL_STATE = {
	jobName: "",
	jobDescription: ""
};

const jobReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_JOB_NAME":
			return {
				...state,
				jobName: action.jobName
			};
		case "SET_JOB_DESCRIPTION":
		return {
			...state,
			jobDescription: action.jobDescription
		}
		default:
			return state;
	}
};

export default jobReducer;
