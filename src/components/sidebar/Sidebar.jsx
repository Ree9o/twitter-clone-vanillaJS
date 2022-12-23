import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import "./css//Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/*　TwitterIcon */}
      <TwitterIcon className="sidebar__twitterIcon" />
      {/*sideBarOption */}
      <SidebarOption text="ホーム" Icon={HomeIcon} active />
      <SidebarOption text="話題を検索" Icon={TagIcon} />
      <SidebarOption text="コミュニティ" Icon={GroupIcon} />
      <SidebarOption text="通知" Icon={NotificationsIcon} />
      <SidebarOption text="メッセージ" Icon={EmailIcon} />
      <SidebarOption text="ブックマーク" Icon={BookmarkIcon} />
      <SidebarOption text="プロフィール" Icon={PersonIcon} />
      <SidebarOption text="もっと見る" Icon={MoreHorizIcon} />
      {/*TweetButton */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        ツイートする
      </Button>
    </div>
  );
}

export default Sidebar;
