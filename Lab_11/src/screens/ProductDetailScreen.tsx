import type { Product } from '../data/products'

type Props = {
  product: Product
  onBack: () => void
}

export function ProductDetailScreen({ product, onBack }: Props) {
  return (
    <section style={{ textAlign: 'left' }}>
      <button
        type="button"
        onClick={onBack}
        style={{
          marginBottom: 16,
          padding: '8px 14px',
          borderRadius: 8,
          border: '1px solid var(--border, #e5e4e7)',
          background: 'var(--bg, #fff)',
          cursor: 'pointer',
        }}
      >
        ← Back
      </button>
      <img
        src={product.image}
        alt=""
        width={200}
        height={200}
        style={{ display: 'block', borderRadius: 12, objectFit: 'cover' }}
      />
      <h2 style={{ marginTop: 16 }}>{product.name}</h2>
      <p style={{ color: 'var(--text, #6b6375)' }}>{product.description}</p>
      <p style={{ fontWeight: 600 }}>{product.price}$</p>
    </section>
  )
}
