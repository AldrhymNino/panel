import { Bell } from "lucide-react"
import "../styles/header.css"
import { User } from "lucide-react"

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-text">
          <span className="logo-title">Producción Masters</span>
          <span className="logo-subtitle">Planta Central - Turno A</span>
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
