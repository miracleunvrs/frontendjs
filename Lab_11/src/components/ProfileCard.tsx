import type { CSSProperties } from 'react'

interface Props {
  name: string
  role: string
  bio: string
  avatar?: string
}

const card: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#fff',
  padding: 20,
  margin: '16px 0',
  borderRadius: 16,
  alignItems: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  border: '1px solid #eee',
}

const avatarStyle: CSSProperties = {
  width: 80,
  height: 80,
  borderRadius: 40,
  marginRight: 16,
  objectFit: 'cover',
}

export function ProfileCard({ name, role, bio, avatar }: Props) {
  return (
    <div style={card}>
      <img
        src={avatar || 'https://via.placeholder.com/100'}
        alt=""
        style={avatarStyle}
      />
      <div style={{ flex: 1, textAlign: 'left' }}>
        <div style={{ fontSize: 22, fontWeight: 'bold' }}>{name}</div>
        <div style={{ fontSize: 16, color: '#666' }}>{role}</div>
        <div style={{ fontSize: 14, color: '#888', marginTop: 8 }}>{bio}</div>
      </div>
    </div>
  )
}
