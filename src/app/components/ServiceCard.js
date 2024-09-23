// src/app/components/ServiceCard.js
import {
  CloudOutlined,
  StorageOutlined,
  SecurityOutlined,
} from "@mui/icons-material"; // MUI icons

export default function ServiceCard({ title, description, IconComponent }) {
  return (
    <div className="card">
      <div className="blob"></div>
      <div className="bg"></div>
      <IconComponent
        style={{ fontSize: "4rem", zIndex: 3, color: "#0978fe" }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="read-more">
        Read More <span>➔</span>
      </a>
    </div>
  );
}
