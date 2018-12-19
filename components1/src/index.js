import React from 'react';
import ReactDom from 'react-dom';
import facker from 'faker';
import CommentDetail from './CommentDetail';  // Its in the same folder
import ApprovalCard from './ApprovalCard';

// Whenever showing a component inside another component, you use JSX <CommentDetail /> not {CommentDetail}
// Passing props  <CommentDetail author="Sam" />  author is name of prop, Sam is value of prop.  Sam could be {jsval}.


const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>Are your sure?</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					blogText="Nice post" 
					timeAgo="Today at 4:45 PM"
					avatar={faker.image.avatar()} 
				/>
			</ApprovalCard> 

			<ApprovalCard>
				<CommentDetail 
					author="Alex" 
					blogText="Nice" 
					timeAgo="Today at 1:45 PM"
					avatar={faker.image.avatar()} 
				/> 
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Jane" 
					blogText="Great" 
					timeAgo="Today at 12:45 PM"
					avatar={faker.image.avatar()} 
				/> 
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'))