import React from 'react';


// This is a component
const CommentDetail = (props) => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={props.avatar} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.author} 
				</a>
				<div className="metadata">
					<span className="date">{props.timeAgo}</span>
				</div>
				<div className="text">{props.blogText}</div>
			</div>
		</div>
	);
};

//{props.author} is looking at my index file and seeing what prop I set as author on index.

// Export this file available to rest of project
export default CommentDetail;