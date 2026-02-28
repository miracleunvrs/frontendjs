import Card from "./Card";

export default function ProducitList() {
    const productArray = [
        { id: 1, title: 'Product 1', className: 'highlighted', description: 'This is product 1' },
        { id: 2, title: 'Product 2', description: 'This is product 2' },
        { id: 3, title: 'Product 3', className: 'highlighted', description: 'This is product 3' },
    ]

    return (
        <div style={{ padding: "20px" }}>
            <h2>Product List</h2>

            {productArray.map(product => (
                <Card key={product.id} title={product.title} className={product.className}>
                    <p>{product.description}</p>
                    <button>Buy Now</button>
                </Card>
            ))}
        </div>
            
    )
}