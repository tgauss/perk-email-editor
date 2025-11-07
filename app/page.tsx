import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          marginBottom: '20px'
        }}>
          🎨 Perk Email Builder
        </h1>
        <p style={{
          fontSize: '20px',
          marginBottom: '40px',
          opacity: 0.9
        }}>
          GrapeJS-based email builder with custom loyalty blocks
        </p>
        <Link
          href="/email-builder"
          style={{
            display: 'inline-block',
            padding: '15px 40px',
            backgroundColor: 'white',
            color: '#764ba2',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 600,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s'
          }}
        >
          Launch Email Builder →
        </Link>

        <div style={{
          marginTop: '60px',
          padding: '30px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '12px',
          textAlign: 'left'
        }}>
          <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Features:</h2>
          <ul style={{ fontSize: '16px', lineHeight: '2' }}>
            <li>✅ 7 custom loyalty blocks</li>
            <li>✅ 80+ merge tags for personalization</li>
            <li>✅ Drag-and-drop interface</li>
            <li>✅ Mobile responsive emails</li>
            <li>✅ Export HTML for Postmark</li>
            <li>✅ Role-based permissions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
