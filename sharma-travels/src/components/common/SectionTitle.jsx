function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h2 style={{ fontSize: '32px', fontWeight: '600' }}>
        {title}
      </h2>
      <p style={{ color: 'var(--light-text)', marginTop: '10px' }}>
        {subtitle}
      </p>
    </div>
  )
}

export default SectionTitle