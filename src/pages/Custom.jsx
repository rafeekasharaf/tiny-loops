import { useState } from 'react'
import styles from './Custom.module.css'

export default function Custom() {
  const [form, setForm] = useState({ name: '', email: '', item: '', color: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className={styles.page}>
        <div className={styles.success}>
          <div className={styles.successEmoji}>🎉</div>
          <h1 className={styles.h1}>Request Received!</h1>
          <p>Thank you, {form.name}! I&apos;ll get back to you at <strong>{form.email}</strong> within 2–3 days to discuss your custom order.</p>
          <p className={styles.note}>Can&apos;t wait to make something special for you! 💕</p>
          <button className={styles.btn} onClick={() => setSubmitted(false)}>Submit another request</button>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.h1}>Custom Orders 🎨</h1>
        <p className={styles.sub}>
          Want something made just for you? Fill out this form and I&apos;ll reach out to
          chat about your idea!
        </p>
      </div>

      <div className={styles.layout}>
        <div className={styles.info}>
          <div className={styles.infoCard}>
            <h2 className={styles.infoTitle}>How it works</h2>
            <div className={styles.steps}>
              {[
                { n: '1', t: 'Fill out the form', d: 'Tell me what you have in mind — any item, color, or character!' },
                { n: '2', t: 'I\'ll reach out', d: 'Within 2–3 days I\'ll reply to discuss details and share a price.' },
                { n: '3', t: 'Making time!', d: 'Once agreed, I start crocheting. Custom items take 1–2 weeks.' },
                { n: '4', t: 'Delivery', d: 'Your special item is shipped with care and a personal note.' },
              ].map(s => (
                <div key={s.n} className={styles.step}>
                  <div className={styles.stepNum}>{s.n}</div>
                  <div>
                    <div className={styles.stepTitle}>{s.t}</div>
                    <div className={styles.stepDesc}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.examplesCard}>
            <h3 className={styles.exTitle}>Popular custom requests</h3>
            <div className={styles.examples}>
              {['Your pet as an amigurumi 🐾', 'Favorite animal plushie 🦊', 'Custom color keychains 🔑', 'Character from your fav show ✨', 'Gifts with initials 💌', 'School mascot plushie 🏫'].map(e => (
                <span key={e} className={styles.exTag}>{e}</span>
              ))}
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Send your request</h2>

          <div className={styles.field}>
            <label className={styles.label}>Your name *</label>
            <input className={styles.input} name="name" value={form.name} onChange={handleChange} placeholder="e.g. Emma" required />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email address *</label>
            <input className={styles.input} type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>What would you like? *</label>
            <input className={styles.input} name="item" value={form.item} onChange={handleChange} placeholder="e.g. A bunny that looks like my pet rabbit" required />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Preferred colors</label>
            <input className={styles.input} name="color" value={form.color} onChange={handleChange} placeholder="e.g. Pink and white, or surprise me!" />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Anything else to know?</label>
            <textarea className={styles.textarea} name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Size, special details, occasion, deadline..." />
          </div>

          <button className={styles.submitBtn} type="submit">
            Send Custom Order Request →
          </button>

          <p className={styles.formNote}>💌 I reply to every single request personally!</p>
        </form>
      </div>
    </main>
  )
}
