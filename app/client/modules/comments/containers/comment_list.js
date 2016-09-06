import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CommentList from '../components/comment_list.jsx';

export const composer = ({context, clearErrors, projectId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('comments.projects', projectId).ready()) {
    const options = {
      sort: {createdAt: -1}
    };
    const comments = Collections.Comments.find({projectId}, options).fetch();
    console.log(comments);
    onData(null, {comments});
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CommentList);
