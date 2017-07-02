/**
 * Created by reube on 02/07/2017.
 */
import React from 'react';
import { connect } from 'react-redux';

// Functional Component
const CommentList = (props) => {
    const list = props.comments.map(
        comment => <li key={comment}>{comment}</li>
    )
    return (
        <ul className="comment-list">
            {list}
        </ul>
    );
};

function mapStateToProps(state) {
    return { comments: state.comments };
}

// Turns into a container
export default connect(mapStateToProps)(CommentList);