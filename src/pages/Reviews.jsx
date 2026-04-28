import { REVIEWS } from '../data/products'
import styles from './Reviews.module.css'

export default function Reviews() {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.h1}>Customer Reviews 💬</h1>
        <div className={styles.summary}>
          <div className={styles.bigStar}>★★★★★</div>
          <div className={styles.summaryText}>
            <div className={styles.summaryScore}>5.0</div>
            <div className={styles.summaryCount}>Based on {REVIEWS.length} reviews</div>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {REVIEWS.map(r => (
          <div key={r.id} className={styles.card}>
            <div className={styles.stars}>{'★'.repeat(r.stars)}</div>
            <p className={styles.text}>&ldquo;{r.text}&rdquo;</p>
            <div className={styles.reviewer}>
              <div className={styles.avatar}>{r.name[0]}</div>
              <div>
                <div className={styles.name}>{r.name}</div>
                <div className={styles.item}>Bought: {r.item}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <p>Ordered from Tiny Loops? I&apos;d love to hear from you!</p>
        <a href="mailto:hello@tinyloops.com" className={styles.ctaBtn}>Leave a Review →</a>
      </div>
    </main>
  )
}
