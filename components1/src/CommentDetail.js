import React from 'react';
import faker from 'faker';

// This is a component
const CommentDetail = () => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={faker.image.avatar()} />
			</a>
			<div className="content">
				<a href="/" className="author">
					Sam
				</a>
				<div className="metadata">
					<span className="date">Today at 6:00PM</span>
				</div>
				<div className="text">Nice blog post!</div>
			</div>
		</div>
	);
};

// Export this file available to rest of project
export default CommentDetail;