import { useState, type CSSProperties, type FormEvent } from 'react'

const container: CSSProperties = {
  margin: '16px 0',
  padding: 20,
  backgroundColor: '#fff',
  borderRadius: 16,
  border: '1px solid #eee',
  textAlign: 'left',
}

const inputStyle: CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: '#eee',
  padding: 10,
  marginBottom: 10,
  border: 'none',
  borderRadius: 8,
  font: 'inherit',
}

export function ContactSection() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email && phone && message) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div style={container}>
      <h2 style={{ marginTop: 0, marginBottom: 12 }}>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={inputStyle}
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          style={{ ...inputStyle, height: 80, resize: 'vertical' }}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#0066cc',
            color: '#fff',
            padding: 12,
            border: 'none',
            borderRadius: 8,
            width: '100%',
            cursor: 'pointer',
            font: 'inherit',
          }}
        >
          Send
        </button>
      </form>
      {submitted && <p style={{ color: 'green', marginTop: 10 }}>Sent!</p>}
    </div>
  )
}
