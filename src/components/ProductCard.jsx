import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import styles from './ProductCard.module.css'

export default function ProductCard({ product, onClick }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd(e) {
    e.stopPropagation()
    if (!product.inStock) return
    add(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <article className={styles.card} onClick={() => onClick(product)}>
      <div className={styles.imgWrap} style={{ background: product.bg }}>
        <span className={styles.emoji}>{product.emoji}</span>
        <span
          className={styles.tag}
          style={{ color: product.tagColor, borderColor: product.tagColor + '44', background: product.tagColor + '18' }}
        >
          {product.tag}
        </span>
        {!product.inStock && <div className={styles.outOfStock}>Out of Stock</div>}
      </div>

      <div className={styles.info}>
        <div>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.details}>{product.details}</p>
        </div>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price}</span>
          <button
            className={`${styles.addBtn} ${added ? styles.added : ''} ${!product.inStock ? styles.disabled : ''}`}
            onClick={handleAdd}
            disabled={!product.inStock}
          >
            {added ? '✓ Added!' : !product.inStock ? 'Sold Out' : '+ Add'}
          </button>
        </div>
      </div>
    </article>
  )
}
