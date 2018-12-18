import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';  // Its in the same folder

// Whenever showing a component inside another component, you use JSX <CommentDetail /> not {CommentDetail}

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail /> 
			<CommentDetail />
			<CommentDetail />
			<CommentDetail />
			<CommentDetail />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'))