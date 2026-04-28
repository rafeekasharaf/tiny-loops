import { useState } from 'react'
import { PRODUCTS, REVIEWS } from '../data/products'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import styles from './Home.module.css'

export default function Home({ onNavigate }) {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.badge}>✨ Handcrafted with love</span>
          <h1 className={styles.h1}>
            Every stitch<br />tells a <em>story</em>
          </h1>
          <p className={styles.heroDesc}>
            Adorable handmade crochet creations by a 12-year-old with big dreams and colorful yarn.
            No two pieces are exactly alike — because that&apos;s the magic of handmade.
          </p>
          <div className={styles.heroBtns}>
            <button className={styles.btnPrimary} onClick={() => onNavigate('shop')}>
              Shop All Items →
            </button>
            <button className={styles.btnOutline} onClick={() => onNavigate('story')}>
              Our Story
            </button>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.yarnBall}>🧶</div>
          <div className={`${styles.floatTag} ${styles.ft1}`}>
            <div className={styles.stars}>★★★★★</div>
            <div className={styles.ftText}>&ldquo;So adorable!&rdquo;</div>
          </div>
          <div className={`${styles.floatTag} ${styles.ft2}`}>🎁 Custom orders open!</div>
          <div className={`${styles.floatTag} ${styles.ft3}`}>💝 100% handmade</div>
        </div>
      </section>

      {/* Trust bar */}
      <div className={styles.trustBar}>
        {[
          { icon: '📦', label: 'Safe Packaging', sub: 'Wrapped with care' },
          { icon: '✉️', label: 'Custom Orders', sub: 'Your design, my yarn' },
          { icon: '💌', label: 'Gift Ready', sub: 'Free gift note included' },
          { icon: '🌟', label: '100% Handmade', sub: 'Never mass produced' },
        ].map(t => (
          <div key={t.label} className={styles.trustItem}>
            <div className={styles.trustIcon}>{t.icon}</div>
            <div>
              <div className={styles.trustLabel}>{t.label}</div>
              <div className={styles.trustSub}>{t.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <section className={styles.products}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.h2}>Featured Items</h2>
            <p className={styles.sectionSub}>Fresh from the hook</p>
          </div>
          <button className={styles.seeAll} onClick={() => onNavigate('shop')}>See all →</button>
        </div>
        <div className={styles.grid}>
          {PRODUCTS.slice(0, 6).map(p => (
            <ProductCard key={p.id} product={p} onClick={setSelectedProduct} />
          ))}
        </div>
      </section>

      {/* Story CTA */}
      <section className={styles.storyCta}>
        <div className={styles.storyInner}>
          {/* <div className={styles.storyEmoji}>👧🧶</div> */}
          <div className={styles.storyEmoji}>
            <img src="/maker.jpg" alt="The maker behind Tiny Loops" className={styles.makerPhoto} />
          </div>
          <div className={styles.storyText}>
            <h2 className={styles.h2}>Made with tiny hands &amp; a big heart</h2>
            <p>
              Hi! I&apos;m 12 years old and I&apos;ve been crocheting since I was 10. I make every single
              item myself — from choosing the yarn colors to tying the last knot.
            </p>
            <p>
              Each piece takes time, care, and a lot of love. When you buy from me,
              you&apos;re supporting a kid&apos;s dream. Thank you! 💕
            </p>
            <div className={styles.storyTags}>
              {['🧶 Handmade', '💝 Made with love', '🌿 Kid entrepreneur', '🎁 Custom orders'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <button className={styles.btnPrimary} onClick={() => onNavigate('story')}>
              Read our full story →
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className={styles.reviews}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.h2}>Happy Customers</h2>
            <p className={styles.sectionSub}>Real reviews from real people</p>
          </div>
        </div>
        <div className={styles.reviewGrid}>
          {REVIEWS.map(r => (
            <div key={r.id} className={styles.reviewCard}>
              <div className={styles.reviewStars}>{'★'.repeat(r.stars)}</div>
              <p className={styles.reviewText}>&ldquo;{r.text}&rdquo;</p>
              <div className={styles.reviewer}>
                <div className={styles.reviewerAvatar}>{r.name[0]}</div>
                <div>
                  <div className={styles.reviewerName}>{r.name}</div>
                  <div className={styles.reviewerItem}>Bought: {r.item}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  )
}
