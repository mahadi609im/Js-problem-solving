document.getElementById('comment-btn').addEventListener('click', () => {
  let commentBox = document.getElementById('comment-box');

  let commentsContainer = document.getElementById('comments-container');

  let commentList = document.getElementsByClassName('comment');

  if (commentList.length > 0) {
    let noComment = document.getElementById('no-comment');
    noComment.setAttribute('style', 'display: none;');
  }

  let newComment = document.createElement('p');
  newComment.classList.add('comment');
  newComment.innerText = commentBox.value;
  commentBox.value = '';
  commentsContainer.appendChild(newComment);
});
