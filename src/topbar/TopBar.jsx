import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="fab fa-facebook-square topIcon"></i>
            <i className="fab fa-twitter-square topIcon" ></i>
            <i className="fab fa-pinterest-square topIcon"></i>
            <i className="fab fa-instagram-square topIcon"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src="https://www.whatspaper.com/wp-content/uploads/2021/07/obito-uchiha-wallpaper-whatspaper-6.jpg" alt="" />
            <i className="fas fa-search topSearchIcon"></i>
        </div>
    </div>
  );
  
}
