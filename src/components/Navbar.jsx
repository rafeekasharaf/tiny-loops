import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import styles from './Navbar.module.css'

export default function Navbar({ onCartOpen, onNavigate, currentPage }) {
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home', page: 'home' },
    { label: 'Shop', page: 'shop' },
    { label: 'Our Story', page: 'story' },
    { label: 'Custom Orders', page: 'custom' },
    { label: 'Reviews', page: 'reviews' },
  ]

  return (
    <nav className={styles.nav}>
      <button className={styles.logo} onClick={() => onNavigate('home')}>
        Tiny <span>Loops</span> 🧶
      </button>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.page}>
            <button
              className={`${styles.link} ${currentPage === l.page ? styles.active : ''}`}
              onClick={() => { onNavigate(l.page); setMenuOpen(false) }}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button className={styles.cartBtn} onClick={onCartOpen} aria-label="Open cart">
          🛒
          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
          <span className={styles.cartLabel}>Cart</span>
        </button>
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
