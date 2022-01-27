import './post.css';

export default function Post() {
  return (
      <div className="post">
          <img src="https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Desktop-Wallpapers.jpg" alt="" className="postImg" />
          <div className="postInfo">
              <div className="postCats">
                  <div className="postCat">Music</div>
                  <div className="postCat">Life</div>
              </div>
              <span className="postTitle">tượng trong lòng người hâm mộ bởi cá tính riêng.</span>
              <hr/>
              <span className="postDate">1 hour ago</span>
          </div>
      </div>
  );
}
