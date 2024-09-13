import React from "react";
import {
  FaTachometerAlt,
  FaTasks,
  FaList,
  FaEnvelope,
  FaChartLine,
  FaWrench,
  FaCommentDots,
} from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { BsShop } from "react-icons/bs";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar" style={sidebarStyle}>
      {/* Account Section */}
      <div className="account" style={accountStyle}>
        <AiOutlineUser size={40} color="#fff" />
        <p style={labelStyle}>Аккаунт</p>
      </div>

      {/* Menu Items */}
      <div className="menu" style={menuStyle}>
        <MenuItem icon={<FaTachometerAlt size={30} />} label="Рабочий стол" />
        <MenuItem icon={<FaTasks size={30} />} label="Сделки" />
        <MenuItem icon={<FaList size={30} />} label="Задачи" />
        <MenuItem icon={<FaEnvelope size={30} />} label="Списки" />
        <MenuItem icon={<FaChartLine size={30} />} label="Почта" />
        <MenuItem icon={<BsShop size={30} />} label="Аналитика" />
        <MenuItem icon={<FaWrench size={30} />} label="amoMarket" />
        <MenuItem icon={<FaWrench size={30} />} label="Настройки" />
      </div>

      {/* Notification Icon */}
      <div className="notification" style={notificationStyle}>
        <FaCommentDots size={30} color="#fff" />
        <div className="badge" style={badgeStyle}>
          1
        </div>
      </div>
    </div>
  );
};

const MenuItem: React.FC<{ icon: JSX.Element; label: string }> = ({
  icon,
  label,
}) => {
  return (
    <div style={menuItemStyle}>
      {icon}
      <p style={labelStyle}>{label}</p>
    </div>
  );
};

// Styles
const sidebarStyle: React.CSSProperties = {
  backgroundColor: "#012a4a",
  height: "100vh",
  width: "80px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 0",
};

const accountStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "20px",
  color: "#fff",
};

const menuStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px", // Adjusted for spacing between icons
};

const menuItemStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#fff",
  cursor: "pointer",
  gap: "5px", // Reduced gap between icon and text
};

const labelStyle: React.CSSProperties = {
  fontSize: "12px",
  marginTop: "0px",
  color: "#ffffff",
};

const notificationStyle: React.CSSProperties = {
  position: "relative",
  marginBottom: "20px",
};

const badgeStyle: React.CSSProperties = {
  position: "absolute",
  top: "-10px",
  right: "-10px",
  backgroundColor: "red",
  color: "white",
  borderRadius: "50%",
  padding: "5px",
  fontSize: "12px",
};

export default Sidebar;
