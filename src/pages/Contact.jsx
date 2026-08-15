const contacts = [
  { label: 'Email', value: 'adityasurendran01@gmail.com', href: 'mailto:adityasurendran01@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/adityasurendran', href: 'https://www.linkedin.com/in/adityasurendran' },
  { label: 'Website', value: 'adityasurendran.com', href: 'https://adityasurendran.com' },
  { label: 'Phone', value: '+353 89 226 0462', href: 'tel:+353892260462' },
]

function Contact() {
  return (
    <div className="page">
      <section className="page-head">
        <h1>Contact</h1>
        <p>Open to work experience and opportunities across software engineering, AI, research and quantitative finance.</p>
      </section>

      <section className="section">
        <div className="contact-list">
          {contacts.map((c) => (
            <a className="contact-item" href={c.href} key={c.label} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noreferrer' : undefined}>
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Contact
