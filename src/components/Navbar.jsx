import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useData } from '../context/DataContext'
import FaIcon from './FaIcon'

export default function Navbar() {
  const { siteInfo } = useData()
  const [open, setOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'الرئيسية' },
    { to: '/blog', label: 'المدونة' },
    { to: '/about', label: 'من نحن' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-ink-950/90 backdrop-blur-lg border-b border-ink-800">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            
            <img src="../public/logo-img.png" className='w-100' alt="" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-lg">{siteInfo?.name || 'عدسة'}</div>
            <div className="text-[10px] bg-linear-to-l from-orange-300 to-orange-500 bg-clip-text text-transparent">{siteInfo?.tagline || 'عالم التصوير'}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-ink-900 border border-ink-800 rounded-full p-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                'px-4 py-1.5 rounded-full text-sm font-medium transition ' +
                (isActive ? 'bg-brand text-white' : 'text-gray-300 hover:text-white')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className='flex gap-2 items-center'>
            <Link className="hidden sm:inline-flex text-sm">
            <FaIcon name="search" className='text-gray-400 hover:text-brand cursor-pointer' />
            </Link>
            <Link to="/blog" className="hidden sm:inline-flex btn-primary text-sm">
            ابدأ القراءة
          </Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 rounded-full bg-ink-800 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <FaIcon name={open ? 'xmark' : 'bars'} className="text-white" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-800 bg-ink-950">
          <div className="container-x py-4 flex flex-col gap-2">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  'px-4 py-3 rounded-xl text-sm font-medium ' +
                  (isActive ? 'bg-brand text-white' : 'text-gray-300 hover:bg-ink-900')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/blog" onClick={() => setOpen(false)} className="btn-primary justify-center mt-2">
              ابدأ القراءة
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
