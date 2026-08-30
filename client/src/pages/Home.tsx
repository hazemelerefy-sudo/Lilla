import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const cobalt = "#2615E8";

const workItems = [
  {
    title: "BUILD BRAND IDENTITY",
    meta: "BRAND IDENTITY, BRAND GUIDELINES",
    body: "Great things happen when the right people meet. That’s what Circle is all about. Bringing creatives, entrepreneurs, and changemakers into one space to share ideas.",
    image: "/manus-storage/lilla-project-bottle_ba6ecafb.jpg",
    tone: "cobalt",
  },
  {
    title: "CIRCLE BRAND IDENTITY",
    meta: "BRAND IDENTITY, BRAND GUIDELINES",
    body: "A visual language for a generous, curious community of creatives, entrepreneurs, and changemakers.",
    image: "/manus-storage/lilla-project-fashion_75a5506d.jpg",
    tone: "paper",
  },
  {
    title: "NODE BRAND IDENTITY",
    meta: "BRAND IDENTITY, STRATEGY",
    body: "A comprehensive brand direction built to communicate expertise, reliability, and a clear point of view.",
    image: "/manus-storage/lilla-hero-portrait_8296eb3a.jpg",
    tone: "lilac",
  },
];

const services = [
  ["01", "BRAND DESIGN", "Meaningful brand identities that reflect who you are, connect with the right people, and give you confidence to show up as your best self."],
  ["02", "WEB DESIGN", "Purposeful websites that tell your story, resonate with the right people, and present your brand with clarity and intention."],
  ["03", "WEB DEV", "Modern, intentional websites that look great and work seamlessly, helping your brand connect with the right people."],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main className="site-shell">
      <header className="site-nav">
        <button className="brand-mark" aria-label="Back to top" onClick={() => scrollToId("top")}>
          <img src="/manus-storage/lilla-mark_cae5d0dd.png" alt="" />
        </button>
        <nav className={menuOpen ? "nav-links nav-links-open" : "nav-links"} aria-label="Primary navigation">
          {["WORKS", "ABOUT", "SERVICES"].map((item) => (
            <button key={item} onClick={() => { scrollToId(item.toLowerCase()); closeMenu(); }}>{item}</button>
          ))}
          <a href="mailto:47thegreatt@gmail.com" onClick={closeMenu}>CONTACT</a>
        </nav>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-image-wrap"><img src="/manus-storage/lilla-hero-portrait_8296eb3a.jpg" alt="Editorial portrait of a designer" /></div>
        <div className="hero-title" id="hero-title"><span>WEB</span><span>BRAND</span><span>DESIGNER</span></div>
        <div className="hero-copy"><p>I DESIGN BOLD BRANDS &amp; WEBSITES THAT STAND OUT, SELL STRONG AND SCALE.</p><a className="solid-cta" href="mailto:47thegreatt@gmail.com">START A PROJECT <ArrowUpRight size={18} /></a></div>
        <button className="hero-arrow" onClick={() => scrollToId("works")} aria-label="Scroll to works"><ArrowDownRight /></button>
      </section>

      <section className="blue-band works" id="works" aria-labelledby="works-title">
        <div className="section-kicker">SELECTED WORK</div>
        <h2 id="works-title" className="band-heading">WORKS</h2>
        <div className="works-list">
          {workItems.map((item, index) => (
            <article className={`work-card ${item.tone}`} key={item.title}>
              <div className="work-card-copy"><span className="work-number">0{index + 1}</span><h3>{item.title}</h3><p className="work-meta">{item.meta}</p><p>{item.body}</p><a href="#contact" className="text-link">VIEW PROJECT <ArrowUpRight size={16} /></a></div>
              <div className="work-image"><img src={item.image} alt="" /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="services section-paper" id="services" aria-labelledby="services-title">
        <div className="section-kicker">WHAT I DO</div><h2 id="services-title" className="display-heading">SERVICES</h2>
        <div className="services-list">{services.map(([number, title, body]) => <article className="service-row" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p><ArrowUpRight className="service-arrow" /></article>)}</div>
      </section>

      <section className="about blue-band" id="about" aria-labelledby="about-title">
        <div className="about-top"><div className="section-kicker">(ABOUT ME)</div><h2 id="about-title">I HELP BUSINESSES BRING THEIR IDEAS TO LIFE WITH BRANDING AND WEBSITES THAT ACTUALLY WORK.</h2></div>
        <div className="about-grid"><div className="about-photo"><img src="/manus-storage/lilla-project-fashion_75a5506d.jpg" alt="Abstract fashion still life" /></div><div className="about-text"><p className="lead">My approach is simple: design with purpose, not just for looks.</p><p>I believe your brand should feel like you — clear, confident, and ready to connect with the right people.</p><p>Whether you’re launching something new or leveling up what you already have, I’m here to make the design process feel easy (and maybe even fun). I’ve been designing for over 6 years, and in that time, I’ve worked with coaches, makers, freelancers, and founders from all kinds of industries.</p></div></div>
        <div className="client-strip"><span>CLIENTS</span><strong>SMART, INTENTIONAL DESIGN THAT BRINGS YOUR BRAND TO LIFE.</strong><div className="client-words">CIRCLE&nbsp;&nbsp;&nbsp; NODE&nbsp;&nbsp;&nbsp; BECOMING&nbsp;&nbsp;&nbsp; BUILD</div></div>
      </section>

      <section className="testimonial section-paper" aria-labelledby="testimonial-title"><div className="section-kicker">TESTIMONIALS</div><div className="testimonial-grid"><h2 id="testimonial-title">“HE TOOK THE TIME TO UNDERSTAND MY VISION AND TRANSLATED IT INTO A CLEAN, COHESIVE IDENTITY THAT TRULY REFLECTS WHO I AM AND WHAT I OFFER.”</h2><div><p className="testimonial-name">JAMES SMITH</p><p>Founder</p></div></div></section>

      <section className="contact blue-band" id="contact" aria-labelledby="contact-title"><div className="contact-copy"><div className="section-kicker">HAVE A GOOD ONE?</div><h2 id="contact-title">LET&apos;S BUILD<br />SOMETHING GREAT</h2><p>Whether you have a project in mind, a question, or just want to say hello — I’d love to hear from you.</p><a className="contact-link" href="mailto:47thegreatt@gmail.com">47thegreatt@gmail.com <ArrowUpRight /></a></div><div className="contact-image"><img src="/manus-storage/lilla-hero-portrait_8296eb3a.jpg" alt="Designer portrait" /></div><footer><span>AKINBINU AKINTAYO</span><div className="socials"><a href="https://www.instagram.com/47thegreat" target="_blank" rel="noreferrer">INSTAGRAM</a><a href="https://www.behance.net/creative47" target="_blank" rel="noreferrer">BEHANCE</a><a href="https://www.linkedin.com/in/akinbi" target="_blank" rel="noreferrer">LINKEDIN</a><a href="#top">BACK TO TOP</a></div></footer></section>
    </main>
  );
}
