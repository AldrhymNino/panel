import { Bell } from "lucide-react"
import "../styles/header.css"
import { User } from "lucide-react"

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#2563eb" />
            <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="logo-text">
            <span className="logo-title">Producción Masters</span>
            <span className="logo-subtitle">Planta Central - Turno A</span>
          </div>
        </div>
      </div>
      <div className="header-right">
        <span className="date">24 Oct, 2023</span>
        <button className="icon-btn">
          <Bell />
        </button>
        <div className="avatar">
          {/* <img src="/professional-man-avatar.png" alt="Usuario" /> */}
          <User />
        </div>
      </div>
    </header>
  )
}

export default Header
