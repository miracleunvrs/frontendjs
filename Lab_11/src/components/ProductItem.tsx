import type { Product } from '../data/products'

type Props = {
  product: Product
  onPress: (product: Product) => void
}

export function ProductItem({ product, onPress }: Props) {
  return (
    <button
      type="button"
      onClick={() => onPress(product)}
      style={{
        display: 'block',
        width: '100%',
        textAlign: 'left',
        border: '1px solid #e5e4e7',
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        background: 'var(--bg, #fff)',
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <img
          src={product.image}
          alt=""
          width={80}
          height={80}
          style={{ objectFit: 'cover', borderRadius: 8 }}
        />
        <div>
          <div style={{ fontWeight: 600 }}>{product.name}</div>
          <div style={{ color: '#666' }}>{product.price}$</div>
        </div>
      </div>
    </button>
  )
}
