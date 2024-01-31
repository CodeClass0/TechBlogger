const submitComment = async (event) => {
    event.preventDefault();
    const commentText = document.querySelector('#comment-input').value.trim();
    const username = document.querySelector("#postblock").className;
    const postId = window.location.href.split("/").pop();


    

    if (commentText){
        let userId = await fetch(`/api/users/${username}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        });
        
        console.log(userId);
        userId=2;
        
        const response = await fetch(`/api/${postId}`, {
            method: 'POST',
            body: JSON.stringify({ userId, postId, commentText }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            document.location.reload();
          } else {
            alert('Failed to post comment.');
          }
    }
  }

document.querySelector('.comment-form').addEventListener('submit', submitComment);
  