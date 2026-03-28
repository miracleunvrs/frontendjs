import type { Product } from '../data/products'
import { products } from '../data/products'
import { ProductItem } from '../components/ProductItem'

type Props = {
  onSelectProduct: (product: Product) => void
}

export function ProductListScreen({ onSelectProduct }: Props) {
  return (
    <section style={{ marginBottom: 24 }}>
      <h2 style={{ textAlign: 'left', marginBottom: 12 }}>Products</h2>
      <div>
        {products.map((item) => (
          <ProductItem key={item.id} product={item} onPress={onSelectProduct} />
        ))}
      </div>
    </section>
  )
}
