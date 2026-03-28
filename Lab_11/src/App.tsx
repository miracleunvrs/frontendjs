import { useState } from 'react'
import './App.css'
import type { Product } from './data/products'
import { ProductListScreen } from './screens/ProductListScreen'
import { ProductDetailScreen } from './screens/ProductDetailScreen'
import { ProfileCard } from './components/ProfileCard'
import { ContactSection } from './components/ContactSection'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  if (selectedProduct) {
    return (
      <div className="lab-app">
        <ProductDetailScreen
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      </div>
    )
  }

  return (
    <div className="lab-app">
      <ProductListScreen onSelectProduct={setSelectedProduct} />
      <ProfileCard
        name="Alex Developer"
        role="Student"
        bio="Building apps with React and TypeScript."
      />
      <ContactSection />
    </div>
  )
}
