import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import styles from './ProductModal.module.css'

export default function ProductModal({ product, onClose }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  if (!product) return null

  function handleAdd() {
    if (!product.inStock) return
    add(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label={product.name}>
        <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>

        <div className={styles.imgSection} style={{ background: product.bg }}>
          <span className={styles.emoji}>{product.emoji}</span>
        </div>

        <div className={styles.content}>
          <div className={styles.topRow}>
            <span
              className={styles.tag}
              style={{ color: product.tagColor, background: product.tagColor + '18', borderColor: product.tagColor + '44' }}
            >
              {product.tag}
            </span>
            <span className={styles.category}>{product.category}</span>
          </div>

          <h2 className={styles.name}>{product.name}</h2>
          <p className={styles.desc}>{product.description}</p>

          <div className={styles.details}>
            <span>📋 {product.details}</span>
          </div>

          <div className={styles.handmadeNote}>
            <span>✨</span>
            <p>This item is 100% handmade by a 12-year-old crafter. Each piece is unique and made with care — small variations are part of the charm!</p>
          </div>

          <div className={styles.footer}>
            <span className={styles.price}>${product.price}</span>
            <button
              className={`${styles.addBtn} ${added ? styles.added : ''} ${!product.inStock ? styles.disabled : ''}`}
              onClick={handleAdd}
              disabled={!product.inStock}
            >
              {added ? '✓ Added to Cart!' : !product.inStock ? 'Out of Stock' : 'Add to Cart →'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
