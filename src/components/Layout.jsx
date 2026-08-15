import { NavLink, Outlet, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/maths', label: 'Maths & Awards' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
]

function Layout() {
  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="brand">
            <span className="brand-name">Aditya Surendran</span>
            <span className="brand-sub">Computer Science, AI and research</span>
          </Link>
          <nav className="nav" aria-label="Main">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {l.label}
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
          <span>Aditya Surendran</span>
          <span className="footer-links">
            <a href="https://www.linkedin.com/in/adityasurendran" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:adityasurendran01@gmail.com">Email</a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
