import styles from './Story.module.css'

export default function Story({ onNavigate }) {
  return (
    <main className={styles.page}>
      {/* <div className={styles.hero}>
        <span className={styles.heroEmoji}>👧</span>
        <h1 className={styles.h1}>Our Story</h1>
        <p className={styles.heroSub}>A kid, some yarn, and a big dream</p>
      </div> */}

      <div className={styles.hero}>
        <img src="/maker.jpg" alt="The maker behind Tiny Loops" className={styles.makerPhoto} />
        <h1 className={styles.h1}>My <em>Story</em></h1>
        <p className={styles.heroSub}>A kid, some yarn, and a big dream</p>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.sectionEmoji}>🧶</div>
          <div>
            <h2 className={styles.h2}>How it all started</h2>
            <p>
              When I was 11 years old, I stumbled across a crochet video on YouTube — and I
              was completely hooked! I watched it over and over until I figured it out myself.
              My very first creation was a tiny little flower, and even though it wasn't perfect,
              I was so proud of it.
            </p>
            <p>
              From that day on I couldn't stop. I kept watching more videos, trying new things,
              and getting better with every stitch. Soon my room was full of little creations —
              and my mom suggested I start selling them. That's how Tiny Loops was born! 🧶
            </p>

          </div>
        </div>

        <div className={`${styles.section} ${styles.reversed}`}>
          <div className={styles.sectionEmoji}>💡</div>
          <div>
            <h2 className={styles.h2}>Why it matters to me</h2>
            <p>
              I&apos;m 12 now, and running Tiny Loops has taught me so much — not just about
              crochet, but about business, money, and how to make people smile with something
              made by hand.
            </p>
            <p>
              Every item in my shop was made by me, with yarn I carefully picked out. I think
              about who might receive it as a gift. I want everyone who gets a Tiny Loops
              item to feel the love and care in every single stitch.
            </p>
          </div>
        </div>

        <div className={styles.highlightBox}>
          <div className={styles.highlightGrid}>
            {[
              { num: '2 years', label: 'crocheting' },
              { num: '100+', label: 'items made' },
              { num: '8', label: 'product types' },
              { num: '★★★★★', label: 'every review' },
            ].map(h => (
              <div key={h.label} className={styles.stat}>
                <div className={styles.statNum}>{h.num}</div>
                <div className={styles.statLabel}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionEmoji}>🌈</div>
          <div>
            <h2 className={styles.h2}>What I make</h2>
            <p>
              I specialize in amigurumi (crocheted stuffed animals and characters), accessories
              like hair clips and headbands, cute keychains, and home décor items like pot covers
              and tote bags.
            </p>
            <p>
              I love using soft cotton yarn in the brightest, happiest colors. I also take
              custom orders — if you can dream it, I&apos;ll try to make it!
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to shop?</h2>
          <p>Each item I sell helps me save for art supplies and more yarn (always more yarn 🧶).</p>
          <button className={styles.ctaBtn} onClick={() => onNavigate('shop')}>
            Shop All Items →
          </button>
        </div>
      </div>
    </main>
  )
}
