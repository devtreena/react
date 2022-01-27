import './sidebar.css';

export default function SideBar() {
  return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.pinimg.com/236x/fa/d9/50/fad950e78f02b0974246e6a67eb9e074.jpg" alt="" className="sidebarImg" />
                <p>Tái xuất dưới hai cái tên Tobi và Uchiha Madara, Obito ngấm ngầm điều khiển Akatsuki, sử dụng họ làm công cụ để thúc </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLOW US</span>
                <div className="sidebarSocial">
                    <i className="fab fa-facebook-square sidebarIcon"></i>
                    <i className="fab fa-twitter-square sidebarIcon" ></i>
                    <i className="fab fa-pinterest-square sidebarIcon"></i>
                    <i className="fab fa-instagram-square sidebarIcon"></i>
                </div>
            </div>
        </div>
  );
}
