import {
  LayoutDashboard, // cuadritos (dashboard)
  Users,            // usuarios
  TrendingUp,       // flecha sube/baja/sube
  ListTodoIcon,       // checklist / tareas
  Settings          // configuración
} from "lucide-react";


import '../styles/nav.css';

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Usuarios" },
  { icon: TrendingUp, label: "Reportes" },
  { icon: ListTodoIcon, label: "Proyectos" },
  { icon: Settings, label: "Configuración" },
];

const Nav = () => {
  return (
    <aside className="sidenav">
      <div className="sidenav__logo">P</div>

      <nav className="sidenav__menu">
        {navItems.map(({ icon: Icon, label, active }, index, array) => (
          <button
            key={label}
            className={`sidenav__item ${(index === (array.length - 1)) ? 'last' : ''} ${active ? "active" : ""}`}
            aria-label={label}
          >
            <Icon size={20} />
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Nav;
