import { useEffect, useState } from 'react'
import './Site.css'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
]

function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="/" aria-label="Tidekind home">
      <span className="brand-mark" aria-hidden="true"><span /></span>
      <span>tidekind</span>
    </a>
  )
}

function Header({ isAbout }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              className={isAbout === (item.href === '/about') ? 'nav-link active' : 'nav-link'}
              href={item.href}
              key={item.label}
              aria-current={isAbout === (item.href === '/about') ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="button button-small" href="mailto:hello@tidekind.org?subject=I%27d%20like%20to%20support%20Tidekind">
            Support our work <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Brand light />
          <p>Good things grow when we<br />show up for the shore.</p>
        </div>
        <div className="footer-links">
          <span className="footer-label">Find your way</span>
          <a href="/">Home</a>
          <a href="/about">Our story</a>
        </div>
        <div className="footer-links">
          <span className="footer-label">Come say hello</span>
          <a href="mailto:hello@tidekind.org">hello@tidekind.org</a>
          <span>Pacific Northwest, USA</span>
        </div>
        <a className="footer-cta" href="mailto:hello@tidekind.org?subject=Count%20me%20in">
          There’s room for you here <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Tidekind Collective</span>
        <span>Made for the places that make us.</span>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <main>
      <section className="home-hero reveal">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> A community for the coast</div>
          <h1>We all belong<br />by the <span>water.</span></h1>
          <p className="hero-description">A healthier coast starts with people who care. Join your neighbors in bringing shorelines and wild places back to life.</p>
          <div className="hero-actions">
            <a className="text-link" href="#our-work">Learn more <span aria-hidden="true">›</span></a>
            <a className="button button-blue" href="mailto:hello@tidekind.org?subject=Join%20a%20shoreline%20day">Join the community <span aria-hidden="true">›</span></a>
          </div>
        </div>
        <div className="hero-photo">
          <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=85" alt="Sunlight falling across gentle ocean waves" />
        </div>
        <div className="hero-caption"><span>For the love of our living coastline.</span><span>Pacific Northwest, USA</span></div>
      </section>

      <section className="impact-strip reveal" aria-label="Our impact">
        <p>Care for the coast,<br /><em>from the ground up.</em></p>
        <div className="impact-stat"><strong>4,800<span>+</span></strong><span>volunteer hours<br />given back</span></div>
        <div className="impact-stat"><strong>26</strong><span>shoreline days<br />and counting</span></div>
        <div className="impact-stat"><strong>1.2<span>t</span></strong><span>litter kept from<br />the water</span></div>
        <span className="impact-year">Since 2018</span>
      </section>

      <section className="work-section reveal" id="our-work">
        <div className="section-heading">
          <div><span className="eyebrow eyebrow-dark">The good we grow</span><h2>Care has many<br /><em>shorelines.</em></h2></div>
          <p>There’s no single way to show up for the coast. We make space for the many small, practical ways people can help it thrive.</p>
        </div>
        <div className="work-grid">
          <article className="work-card work-card-green">
            <div className="work-number">01 <span>RESTORE</span></div>
            <div className="work-image"><img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80" alt="A green, thriving coastal forest" /></div>
            <h3>Make room for wild</h3><p>We remove invasive plants and restore the native habitats that give coastal wildlife a place to thrive.</p>
            <a className="text-link" href="mailto:hello@tidekind.org?subject=Habitat%20restoration">Get involved <span aria-hidden="true">↗</span></a>
          </article>
          <article className="work-card work-card-yellow">
            <div className="work-number">02 <span>RECONNECT</span></div>
            <div className="work-image"><img src="https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=900&q=80" alt="A person walking beside a peaceful beach" /></div>
            <h3>Meet us at the water</h3><p>Our monthly shoreline days turn a morning outdoors into a cleaner coast and a stronger community.</p>
            <a className="text-link" href="mailto:hello@tidekind.org?subject=Shoreline%20day">Join a shoreline day <span aria-hidden="true">↗</span></a>
          </article>
          <article className="work-card work-card-coral">
            <div className="work-number">03 <span>PASS IT ON</span></div>
            <div className="work-image"><img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80" alt="Young green leaves growing in the sunlight" /></div>
            <h3>Grow the next wave</h3><p>We bring hands-on coastal learning to local classrooms, so the next generation can lead with care.</p>
            <a className="text-link" href="mailto:hello@tidekind.org?subject=Coastal%20learning">Bring us to your school <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section className="home-callout reveal">
        <div className="callout-image"><img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85" alt="Blue-green waves rolling toward the shore" /></div>
        <div className="callout-copy"><span className="eyebrow eyebrow-dark">Good things are better together</span><h2>The shore is<br />better <em>with you.</em></h2><p>Bring your curiosity, your old sneakers, or just a little time. We’ll take it from there.</p><a className="button button-dark" href="mailto:hello@tidekind.org?subject=Count%20me%20in">Count me in <span aria-hidden="true">↗</span></a></div>
      </section>
    </main>
  )
}

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero reveal">
        <div className="about-heading"><span className="eyebrow eyebrow-dark">A little about us</span><h1>Good people.<br /><em>Shared ground.</em></h1><p>We’re a small, neighbor-powered nonprofit with a big soft spot for the Pacific coast.</p></div>
        <div className="about-image"><img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=85" alt="Sunlit trees along a lush Pacific Northwest shoreline" /><span className="image-label">Our kind of office</span></div>
      </section>
      <section className="story-section reveal">
        <div className="story-aside"><span className="eyebrow eyebrow-dark">Why Tidekind</span><span className="story-aside-mark" aria-hidden="true">TK.</span></div>
        <div className="story-copy"><h2>It started with<br />a borrowed bucket.</h2><p>In 2018, a few neighbors met at a stretch of shoreline they loved and spent a Saturday picking up what the tide had left behind. They came back the next month. Then friends brought friends.</p><p>That simple ritual became Tidekind: a nonprofit built on the belief that caring for a place starts by showing up for it, together. Today, we bring volunteers, local educators, and conservation partners together to restore coastal habitat and make caring for the shoreline part of everyday life.</p><p>We’re not here to save the coast on our own. We’re here to help more people feel that it belongs to them, too.</p><a className="text-link" href="mailto:hello@tidekind.org?subject=Say%20hello">Say hello <span aria-hidden="true">↗</span></a></div>
      </section>
      <section className="values-section reveal">
        <div className="values-intro"><span className="eyebrow eyebrow-dark">What we believe</span><h2>How we show<br /><em>up matters.</em></h2></div>
        <div className="values-list">
          <article><span className="value-index">01</span><div><h3>Care is a practice.</h3><p>Meaningful change grows from steady, hands-on care, not one perfect day.</p></div><span className="value-symbol" aria-hidden="true">✳</span></article>
          <article><span className="value-index">02</span><div><h3>Everyone has a place.</h3><p>There’s no special gear or expertise required. Curiosity and a little time go a long way.</p></div><span className="value-symbol" aria-hidden="true">✳</span></article>
          <article><span className="value-index">03</span><div><h3>Nature is our neighbor.</h3><p>Healthy coastlines support the people, plants, and wildlife who share them.</p></div><span className="value-symbol" aria-hidden="true">✳</span></article>
        </div>
      </section>
      <section className="about-quote reveal"><span className="eyebrow">A note from our community</span><blockquote>“You come for the beach cleanup. You stay because these people feel like your people.”</blockquote><span className="quote-credit">A Tidekind volunteer, shoreline regular since 2021</span></section>
      <section className="about-bottom reveal"><div><span className="eyebrow eyebrow-dark">Pull up a chair</span><h2>There’s a place<br />for <em>you here.</em></h2></div><a className="button button-blue" href="mailto:hello@tidekind.org?subject=I%27d%20love%20to%20meet%20Tidekind">Come meet us <span aria-hidden="true">›</span></a></section>
    </main>
  )
}

function App() {
  const isAbout = window.location.pathname.replace(/\/$/, '') === '/about'

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isAbout])

  return (
    <>
      <Header isAbout={isAbout} />
      {isAbout ? <AboutPage /> : <HomePage />}
      <Footer />
    </>
  )
}

export default App
