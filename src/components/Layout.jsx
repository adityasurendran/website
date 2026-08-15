import { NavLink, Outlet, Link } from 'react-router-dom'
import Boot from './Boot.jsx'
import NetworkBackground from './NetworkBackground.jsx'

const links = [
  { to: '/', label: 'home' },
  { to: '/projects', label: 'projects' },
  { to: '/maths', label: 'maths/awards' },
  { to: '/education', label: 'education' },
  { to: '/contact', label: 'contact' },
]

function Layout() {
  return (
    <div className="site">
      <Boot />
      <NetworkBackground />
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="brand">
            <span className="brand-name">aditya_surendran</span>
            <span className="brand-sub">~/cs/ai/distributed-systems</span>
          </Link>
          <nav className="nav" aria-label="Main">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                ./{l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-ver">aditya_surendran v2.1 // distributed with care</span>
          <span className="footer-links">
            <a href="https://www.linkedin.com/in/adityasurendran" target="_blank" rel="noreferrer">
              linkedin
            </a>
            <a href="mailto:adityasurendran01@gmail.com">email</a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
