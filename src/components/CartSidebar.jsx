import { useCart } from '../hooks/useCart'
import styles from './CartSidebar.module.css'

export default function CartSidebar({ isOpen, onClose }) {
  const { items, remove, updateQty, totalPrice, totalItems, clear } = useCart()

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your Cart 🛒</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyEmoji}>🧶</div>
            <p>Your cart is empty</p>
            <span>Find something you love in the shop!</span>
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {items.map(item => (
                <li key={item.id} className={styles.item}>
                  <div className={styles.itemImg} style={{ background: item.bg }}>
                    <span>{item.emoji}</span>
                  </div>
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemPrice}>${item.price}</p>
                    <div className={styles.qtyRow}>
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className={styles.qtyBtn}>−</button>
                      <span className={styles.qty}>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className={styles.qtyBtn}>+</button>
                      <button onClick={() => remove(item.id)} className={styles.removeBtn}>Remove</button>
                    </div>
                  </div>
                  <div className={styles.itemTotal}>${item.price * item.qty}</div>
                </li>
              ))}
            </ul>

            <div className={styles.footer}>
              <div className={styles.subtotal}>
                <span>{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
                <span className={styles.total}>${totalPrice.toFixed(2)}</span>
              </div>
              <p className={styles.note}>💌 Free gift note with every order!</p>
              <button className={styles.checkoutBtn}>
                Checkout — ${totalPrice.toFixed(2)}
              </button>
              <button className={styles.clearBtn} onClick={clear}>Clear cart</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
