import { useState } from 'react';

const SocialMedia = () => {
  const [modalData, setModalData] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const posts = [
    {
      user: 'Nermine Amara',
      time: '50 minutes ago',
      text: 'This is a dog with a toy.',
      image: 'images/banner-img.png',
      content: 'Dog',
      userImage: 'https://www.shutterstock.com/image-vector/black-silhouette-paw-print-isolated-600nw-1042839922.jpg',
      comments: ['Cute', 'Nice dog !!!']
    },
    {
      user: 'Fedi Nabli',
      time: '40 minutes ago',
      text: 'This is a dog.',
      image: 'images/banner-img2.png',
      content: 'Dog',
      userImage: 'https://www.shutterstock.com/image-vector/black-silhouette-paw-print-isolated-600nw-1042839922.jpg',
      comments: ['Cute', 'Nice dog !!!']
    },
    {
      user: 'Yassmine Daouas',
      time: '35 minutes ago',
      text: 'This is a dog.',
      image: 'images/blog-lg4.jpg',
      content: 'Dog',
      userImage: 'https://www.shutterstock.com/image-vector/black-silhouette-paw-print-isolated-600nw-1042839922.jpg',
      comments: ['Cute', 'Nice dog !!!']
    },
    {
      user: 'Ahmed Louhaichi',
      time: '30 minutes ago',
      text: 'This is a cat.',
      image: 'images/banner-img3.png',
      content: 'Cat',
      userImage: 'https://www.shutterstock.com/image-vector/black-silhouette-paw-print-isolated-600nw-1042839922.jpg',
      comments: ['Cute', 'Nice cat !!!']
    }
  ];

  const openModal = (post) => {
    setModalData(post);
    setComments(post.comments);
  };

  const closeModal = () => {
    setModalData(null);
    setNewComment('');
  };

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="container mt-4 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <div className="feed p-2">
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">
              <div className="feed-text px-2">
                <form action="postpage.html">
                  <textarea placeholder="What's on your mind?"></textarea>
                  <input type="submit" value="Photos/vidéos" />
                </form>
              </div>
              <div className="feed-icon px-2">
                <i className="fa fa-long-arrow-up text-black-50"></i>
              </div>
            </div>

            {posts.map((post, index) => (
              <div key={index} className="bg-white border mt-2 post" onClick={() => openModal(post)}>
                <div>
                  <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                    <div className="d-flex flex-row align-items-center feed-text px-2">
                      <img className="rounded-circle" src={post.userImage} width="45" alt="User" />
                      <div className="d-flex flex-column flex-wrap ml-2">
                        <span className="font-weight-bold">{post.user}</span>
                        <span className="text-black-50 time">{post.time}</span>
                      </div>
                    </div>
                    <div className="feed-icon px-2">
                      <i className="fa fa-ellipsis-v text-black-50"></i>
                    </div>
                  </div>
                </div>
                <div className="feed-image p-2 px-3">
                  <img className="img-fluid img-responsive" src={post.image} alt="Post" />
                </div>
                <h1 className="content-box">{post.content}</h1>
                <br />
                <h1 style={{ textAlign: 'left', whiteSpace: 'break-spaces', border: '3px solid black', padding: '20px 0' }}>
                  {post.text}
                </h1>
                <button>
                  <span className="material-symbols-outlined">thumb_up</span>
                </button>
                <button>
                  <span className="material-symbols-outlined">chat_bubble</span>
                </button>
                <button>
                  <span className="material-symbols-outlined">share</span>
                </button>
                <div className="comments-section">
                  <h3>Comments</h3>
                  {post.comments.map((comment, idx) => (
                    <div key={idx}>{comment}</div>
                  ))}
                </div>
                <div className="comment-input">
                  <input type="text" placeholder="Write a comment..." />
                  <button className="comment-btn">Comment</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalData && (
        <div id="myModal" className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-image">
              <img id="modal-image" className="img-fluid img-responsive" src={modalData.image} alt="Post" />
            </div>
            <div className="modal-comments">
              <div id="modal-user-section" style={{ display: 'flex', alignItems: 'center' }}>
                <img className="rounded-circle" src={modalData.userImage} width="45" alt="User" style={{ marginRight: '10px' }} />
                <h2 id="modal-user">{modalData.user}</h2>
              </div>
              <p id="modal-time">{modalData.time}</p>
              <h1 id="modal-content-box" className="modal-content-box">{modalData.content}</h1>
              <p id="modal-text" className="modal-description">{modalData.text}</p>
              <div id="comments-section">
                <h3>Comments</h3>
                {comments.map((comment, idx) => (
                  <div key={idx}>{comment}</div>
                ))}
                <div className="comment-input">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button className="comment-btn-modal" onClick={addComment}>Comment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMedia;