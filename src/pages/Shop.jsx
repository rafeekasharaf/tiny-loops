import { useState } from 'react'
import { PRODUCTS, CATEGORIES } from '../data/products'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import styles from './Shop.module.css'

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [sortBy, setSortBy] = useState('default')

  const filtered = PRODUCTS
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.h1}>The Shop</h1>
        <p className={styles.sub}>All items are handmade — thank you for supporting a young maker! 🎉</p>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.categories}>
          {CATEGORIES.map(c => (
            <button
              key={c}
              className={`${styles.catBtn} ${activeCategory === c ? styles.active : ''}`}
              onClick={() => setActiveCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <select
          className={styles.sort}
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="name">Name A–Z</option>
        </select>
      </div>

      <div className={styles.results}>
        <span className={styles.count}>{filtered.length} item{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <div>🧶</div>
          <p>No items in this category yet!</p>
          <span>Check back soon — new things are always being made.</span>
        </div>
      ) : (
        <div className={styles.grid}>
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} onClick={setSelectedProduct} />
          ))}
        </div>
      )}

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  )
}
