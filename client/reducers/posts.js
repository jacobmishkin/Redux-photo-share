// a reducer takes two things:

//1. the action (info about what happend)
//2. copy of the current state

function posts(state = [], action) {
	console.log('yoyoyoyo change!');
	console.log(state, action);
	return state;
}

export default posts;