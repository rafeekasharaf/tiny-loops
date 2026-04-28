import styles from './Footer.module.css'

export default function Footer({ onNavigate }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <button className={styles.logo} onClick={() => onNavigate('home')}>
            Tiny Loops 🧶
          </button>
          <p className={styles.tagline}>Handmade crochet by a young maker with love.</p>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Instagram">📷 Instagram</a>
            <a href="https://etsy.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Etsy">🛍 Etsy Shop</a>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <div className={styles.linkTitle}>Shop</div>
            <button onClick={() => onNavigate('shop')}>All Products</button>
            <button onClick={() => onNavigate('custom')}>Custom Orders</button>
            <button onClick={() => onNavigate('reviews')}>Reviews</button>
          </div>
          <div className={styles.linkGroup}>
            <div className={styles.linkTitle}>Info</div>
            <button onClick={() => onNavigate('story')}>Our Story</button>
            <a href="mailto:hello@tinyloops.com">Contact Us</a>
            <a href="#">Shipping Info</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Tiny Loops · All items are handmade with care 💕</p>
        <p className={styles.seo}>Handmade crochet gifts · Amigurumi · Custom crochet plushies · Kid entrepreneur</p>
      </div>
    </footer>
  )
}
