import { useState } from 'react'
import { CartProvider } from './hooks/useCart'
import Navbar from './components/Navbar'
import CartSidebar from './components/CartSidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Story from './pages/Story'
import Custom from './pages/Custom'
import Reviews from './pages/Reviews'

function AppContent() {
  const [page, setPage] = useState('home')
  const [cartOpen, setCartOpen] = useState(false)

  function navigate(p) {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pages = {
    home: <Home onNavigate={navigate} />,
    shop: <Shop />,
    story: <Story onNavigate={navigate} />,
    custom: <Custom />,
    reviews: <Reviews />,
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onCartOpen={() => setCartOpen(true)} onNavigate={navigate} currentPage={page} />
      <div style={{ flex: 1 }}>
        {pages[page] ?? pages.home}
      </div>
      <Footer onNavigate={navigate} />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}
