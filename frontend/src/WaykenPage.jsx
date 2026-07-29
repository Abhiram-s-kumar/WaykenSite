function WaykenPage() {
const teamMembers = [
  {
    initials: 'CEO',
    image: '/assets/Ceo.jpeg',
    role: 'Chief Executive Officer',
    name: 'Chief Executive Officer',
    bio: 'Brings structured investment analysis and sector expertise across healthcare and technology. Oversees the due diligence and portfolio evaluation process.'
  },
  {
    initials: 'PM',
    image: '/assets/Foundingdirector.jpeg',
    role: 'Patron & Chief Mentor',
    name: 'Patron & Chief Mentor',
    bio: 'Executive MBA graduate with a deep background in business strategy and investment evaluation. Leads the overall direction and capital allocation decisions of Wayken.'
  },
  {
    initials: 'GC',
    image: '/assets/Globalchairman.jpeg',
    role: 'Global Chairman',
    name: 'Global Chairman',
    bio: 'Provides long-term strategic direction, institutional perspective, and global relationship guidance for the Wayken platform.'
  },
  {
    initials: 'IC',
    image: '/assets/Indianchairman.jpeg',
    role: 'Indian Chairman',
    name: 'Indian Chairman',
    bio: 'Guides India-focused relationships, local governance standards, and long-term collaboration across the Wayken network.'
  },
  {
    initials: 'CFO',
    image: '/assets/Cfo.jpeg',
    role: 'Strategy & Operations',
    name: 'Chief Financial Officer',
    bio: 'Specializes in post-investment value creation, working alongside portfolio companies to build operational capabilities and governance infrastructure.'
  },
  {
    initials: 'D1',
    image: '/assets/Director.jpeg',
    role: 'Director',
    name: 'Director',
    bio: 'Supports ethical standards, transparent reporting, and portfolio governance practices that protect stakeholder trust.'
  },
  {
    initials: 'D2',
    image: '/assets/Director2.jpeg',
    role: 'Director',
    name: 'Director',
    bio: 'Works with portfolio companies on operational discipline, capability building, and durable value creation.'
  },
  {
    initials: 'D3',
    image: '/assets/Director3.jpeg',
    role: 'Director',
    name: 'Director',
    bio: 'Contributes market intelligence, competitive analysis, and investment theme development for long-term opportunities.'
  }
];

  return (
    <>
      <div className="custom-cursor-dot" id="cursorDot" aria-hidden="true" />
      <div className="custom-cursor-ring" id="cursorRing" aria-hidden="true" />
      <div>
  {/* NAV */}
  <nav id="mainNav">
    <a href="#home" className="nav-logo">
      <img src="/assets/WaykenLohgo.png" alt="Wayken Holdings" className="nav-logo-img" />
    </a>
    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#philosophy">Philosophy</a></li>
      <li><a href="#sectors">Sectors</a></li>
      <li><a href="#responsible">Responsibility</a></li>
      <li><a href="#leadership">Leadership</a></li>
      <li><a href="#partners">Partners</a></li>
      <li><a href="#insights">Insights</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button className="hamburger" id="hamburger" aria-label="Menu">
      <span /><span /><span />
    </button>
  </nav>
  {/* MOBILE NAV */}
  <div className="mobile-nav" id="mobileNav">
    <button className="mobile-close" id="mobileClose">✕</button>
    <a href="#about" className="mobile-link">About</a>
    <a href="#philosophy" className="mobile-link">Philosophy</a>
    <a href="#sectors" className="mobile-link">Sectors</a>
    <a href="#responsible" className="mobile-link">Responsibility</a>
    <a href="#leadership" className="mobile-link">Leadership</a>
    <a href="#partners" className="mobile-link">Partners</a>
    <a href="#insights" className="mobile-link">Insights</a>
    <a href="#contact" className="mobile-link">Contact</a>
  </div>
  {/* ═══ HOME ═══ */}
  <section id="home">
    <div className="hero-bg" />
    <div className="hero-line-v" />
    <div className="hero-content">
      <div className="hero-eyebrow">Investment Management</div>
      <h1 className="hero-h1">Long-Term Capital.<br /><em>Enduring Value.</em></h1>
      <p className="hero-descriptor">Wayken Holding Pvt Ltd brings together investors, entrepreneurs, and experienced professionals to build strong businesses — not over quarters, but over generations.</p>
      <div className="hero-cta">
        <a href="#about" className="btn-primary">Discover Wayken</a>
        <a href="#philosophy" className="btn-ghost">Our Philosophy</a>
      </div>
    </div>
    <div className="hero-stats">
      <div className="hero-stat">
        <span className="hero-stat-num">1,000</span>
        <span className="hero-stat-label">Companies — 100-Year Vision</span>
      </div>
      <div className="hero-stat">
        <span className="hero-stat-num">Win³</span>
        <span className="hero-stat-label">Investor · Company · Society</span>
      </div>
    </div>
  </section>
  {/* AMBITION STRIP */}
  <div className="ambition-strip">
    <span className="ambition-text">Our 100-year ambition: support and develop 1,000 companies that create enduring value for investors, businesses, and society.</span>
  </div>
  {/* ═══ ABOUT ═══ */}
  <section id="about">
    <div className="section-inner">
      <div className="about-grid">
        <div className="about-visual reveal">
          <div className="about-box">
            <img src="/assets/Home.png" alt="Boardroom investment review" className="about-image" />
            <div className="about-box-inner">
              <div className="about-founded">Est. — Kochi, India</div>
              <div className="about-tagline">"Capital deployed responsibly. Businesses built to endure."</div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <div className="section-tag reveal">About Wayken</div>
          <h2 className="section-title reveal reveal-delay-1">A Platform for <em>Responsible</em> Capital</h2>
          <p className="reveal reveal-delay-2">Wayken Holding Pvt Ltd is a long-term investment management company that brings together investors, entrepreneurs, and experienced professionals to build strong businesses over time.</p>
          <p className="reveal reveal-delay-3">The company pools capital from investors and allocates it into carefully selected companies after proper research, due diligence, and strategic evaluation. The goal is not just financial returns, but the creation of sustainable businesses that can grow for decades.</p>
          <p className="reveal reveal-delay-4">Founded by alumni of an Executive MBA program, Wayken was built to apply rigorous business knowledge in real-world investments — and to act as a platform for long-term collaboration among professionals and partners.</p>
          <div className="about-pillars reveal">
            <div className="pillar">
              <div className="pillar-num">01</div>
              <div className="pillar-label">Transparency</div>
            </div>
            <div className="pillar">
              <div className="pillar-num">02</div>
              <div className="pillar-label">Unity</div>
            </div>
            <div className="pillar">
              <div className="pillar-num">03</div>
              <div className="pillar-label">Ethical</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ PHILOSOPHY ═══ */}
  <section id="philosophy">
    <div className="section-inner">
      <div className="philosophy-layout">
        <div className="philosophy-sticky">
          <div className="section-tag reveal">Investment Philosophy</div>
          <h2 className="section-title reveal reveal-delay-1">Built on <em>Discipline</em></h2>
          <p className="section-lead reveal reveal-delay-2">Every decision at Wayken is guided by a set of core principles that have been deliberate from inception. We do not deviate from these in search of short-term gain.</p>
          <div className="h-rule reveal reveal-delay-3" />
          <p className="section-lead reveal reveal-delay-3" style={{fontSize: '0.8rem', color: 'var(--muted)'}}>Wayken is not built around speculation or short-term gains. Instead, it focuses on businesses that create real value — and holds them through cycles, challenges, and change.</p>
        </div>
        <div className="philosophy-principles">
          <div className="principle reveal">
            <span className="principle-num">01</span>
            <div>
              <div className="principle-title">Long-Term Orientation</div>
              <div className="principle-body">We invest with decade-long horizons. Quarterly noise is irrelevant to us. We seek businesses that compound value through genuine competitive advantage, not cyclical momentum.</div>
            </div>
          </div>
          <div className="principle reveal reveal-delay-1">
            <span className="principle-num">02</span>
            <div>
              <div className="principle-title">Rigorous Due Diligence</div>
              <div className="principle-body">Capital allocation decisions are preceded by thorough research and strategic evaluation. We understand what we own, why we own it, and what would change our thesis.</div>
            </div>
          </div>
          <div className="principle reveal reveal-delay-2">
            <span className="principle-num">03</span>
            <div>
              <div className="principle-title">Responsible Capital</div>
              <div className="principle-body">Every investment decision is guided by discipline, transparency, and ethical responsibility toward investors and portfolio companies. Capital is not just a number — it is trust.</div>
            </div>
          </div>
          <div className="principle reveal reveal-delay-3">
            <span className="principle-num">04</span>
            <div>
              <div className="principle-title">Collaborative Growth</div>
              <div className="principle-body">Wayken acts as a platform for long-term collaboration. Professionals and partners grow together, creating structured investment opportunities and shared knowledge.</div>
            </div>
          </div>
          <div className="principle reveal reveal-delay-4">
            <span className="principle-num">05</span>
            <div>
              <div className="principle-title">Real Value Creation</div>
              <div className="principle-body">We focus on sectors that create tangible impact — healthcare, education, technology-enabled services, consumer businesses, and alternative assets with structural tailwinds.</div>
            </div>
          </div>
          <div className="win-banner reveal">
            <div className="win-banner-title">The Win–Win–Win Philosophy</div>
            <div className="win-banner-body">Investors receive transparent returns. Portfolio companies gain the capital and strategic support needed to grow. And the organization itself evolves through shared knowledge and long-term wealth creation. Every stakeholder wins, or we reconsider the allocation.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ SECTORS ═══ */}
  <section id="sectors">
    <div className="section-inner">
      <div className="section-tag reveal">Sectors</div>
      <h2 className="section-title reveal reveal-delay-1">Where We <em>Invest</em></h2>
      <p className="section-lead reveal reveal-delay-2">We focus on sectors with structural long-term demand, where patient capital and operational expertise create differentiated outcomes.</p>
      <div className="sectors-grid">
        <div className="sector-card reveal">
          <div className="sector-icon">
            <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
          </div>
          <div className="sector-name">Healthcare</div>
          <div className="sector-desc">Investing in businesses that improve patient outcomes, reduce systemic costs, and expand access — from diagnostics to care delivery.</div>
        </div>
        <div className="sector-card reveal reveal-delay-1">
          <div className="sector-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
          </div>
          <div className="sector-name">Education</div>
          <div className="sector-desc">Supporting institutions and platforms that build human capital — the most durable asset class of all. From early learning to professional development.</div>
        </div>
        <div className="sector-card reveal reveal-delay-2">
          <div className="sector-icon">
            <svg viewBox="0 0 24 24"><rect x={2} y={3} width={20} height={14} rx={2} /><path d="M8 21h8M12 17v4" /></svg>
          </div>
          <div className="sector-name">Technology-Enabled Services</div>
          <div className="sector-desc">Businesses where technology amplifies service delivery, improving unit economics and scalability across traditional sectors.</div>
        </div>
        <div className="sector-card reveal reveal-delay-1">
          <div className="sector-icon">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1={3} y1={6} x2={21} y2={6} /><path d="M16 10a4 4 0 01-8 0" /></svg>
          </div>
          <div className="sector-name">Consumer Businesses</div>
          <div className="sector-desc">Brands and platforms with loyal customer bases, strong unit economics, and the capacity to build generational relevance.</div>
        </div>
        <div className="sector-card reveal reveal-delay-2">
          <div className="sector-icon">
            <svg viewBox="0 0 24 24"><line x1={12} y1={1} x2={12} y2={23} /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
          </div>
          <div className="sector-name">Alternative Assets</div>
          <div className="sector-desc">Carefully selected positions in asset classes with structural tailwinds — providing portfolio balance and uncorrelated return streams.</div>
        </div>
        <div className="sector-card reveal reveal-delay-3">
          <div className="sector-icon">
            <svg viewBox="0 0 24 24"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
          </div>
          <div className="sector-name">Beyond Boundaries</div>
          <div className="sector-desc">With a 100-year mandate, we remain open to sectors not yet defined. Long-term thinking demands the intellectual humility to evolve.</div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ RESPONSIBLE ═══ */}
  <section id="responsible">
    <div className="section-inner">
      <div className="section-tag reveal">Responsible Investing</div>
      <h2 className="section-title reveal reveal-delay-1">Capital With <em>Conscience</em></h2>
      <div className="responsible-grid">
        <div>
          <div className="responsible-text">
            <p className="reveal">At Wayken, responsible investing is not a regulatory box to check — it is foundational to the kind of firm we intend to become and the kind of capital we seek to represent.</p>
            <p className="reveal reveal-delay-1">We believe that businesses built with ethical foundations, genuine accountability, and respect for all stakeholders are structurally more durable. Our investment process integrates these considerations at every stage.</p>
          </div>
          <ul className="esg-list">
            <li className="esg-item reveal">
              <span className="esg-letter">E</span>
              <div className="esg-content">
                <div className="esg-title">Environmental Consideration</div>
                <div className="esg-desc">We evaluate how portfolio companies manage environmental risk and opportunity, preferring businesses that operate sustainably within planetary boundaries.</div>
              </div>
            </li>
            <li className="esg-item reveal reveal-delay-1">
              <span className="esg-letter">S</span>
              <div className="esg-content">
                <div className="esg-title">Social Accountability</div>
                <div className="esg-desc">We support businesses that treat employees, communities, and customers as essential stakeholders — not afterthoughts.</div>
              </div>
            </li>
            <li className="esg-item reveal reveal-delay-2">
              <span className="esg-letter">G</span>
              <div className="esg-content">
                <div className="esg-title">Governance Standards</div>
                <div className="esg-desc">Strong governance is non-negotiable. We require transparency, accountability, and ethical conduct from every company we are associated with.</div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className="commitment-block reveal">
            <div className="commitment-quote">"Capital should be deployed responsibly. Every decision is guided by discipline, transparency, and ethical responsibility."</div>
            <div className="commitment-items">
              <div className="commitment-item">Independent governance structures that protect all stakeholders</div>
              <div className="commitment-item">Transparent reporting on investment performance and portfolio developments</div>
              <div className="commitment-item">Excluding businesses with harmful externalities regardless of return potential</div>
              <div className="commitment-item">Active engagement with portfolio companies on governance improvement</div>
              <div className="commitment-item">Long-term orientation that aligns our incentives with investor interests</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ LEADERSHIP ═══ */}
  <section id="leadership">
    <div className="section-inner">
      <div className="leadership-intro">
        <div>
          <div className="section-tag reveal">Leadership &amp; Governance</div>
          <h2 className="section-title reveal reveal-delay-1">Grounded in <em>Experience</em></h2>
        </div>
        <div>
          <p className="section-lead reveal reveal-delay-2">Wayken was founded by alumni of an Executive MBA program who chose to apply their business knowledge in real-world investments. Our leadership combines institutional discipline with entrepreneurial conviction.</p>
        </div>
      </div>
      <div className="team-carousel">
        <div className="team-carousel-actions" aria-label="Leadership carousel controls">
          <button className="team-scroll-btn" type="button" data-team-scroll="-1" aria-label="Previous team member">‹</button>
          <button className="team-scroll-btn" type="button" data-team-scroll="1" aria-label="Next team member">›</button>
        </div>
        <div className="team-grid team-scroll" tabIndex={0} aria-label="Leadership members">
          {teamMembers.map((member, index) => (
            <div className={`team-card reveal ${index % 4 ? `reveal-delay-${index % 4}` : ''}`} key={member.image}>
              <div className="team-card-visual">
                <div className="team-initials">{member.initials}</div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.hidden = true;
                  }}
                />
              </div>
              <div className="team-role">{member.role}</div>
              <div className="team-name">{member.name}</div>
              <div className="team-bio">{member.bio}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="governance-banner reveal">
        <div>
          <div className="governance-label">Governance</div>
          <div className="governance-title">Structured for<br /><em>Trust</em></div>
        </div>
        <div className="governance-items">
          <div className="governance-item">
            <strong>Investment Committee</strong>
            All allocation decisions reviewed by an independent committee before commitment.
          </div>
          <div className="governance-item">
            <strong>Investor Reporting</strong>
            Regular, transparent reporting on portfolio performance and organizational developments.
          </div>
          <div className="governance-item">
            <strong>Conflict of Interest Policy</strong>
            Strict protocols to ensure decisions are made in the interest of investors and portfolio companies.
          </div>
          <div className="governance-item">
            <strong>Ethical Charter</strong>
            A founding document that defines the values and behaviors all Wayken representatives uphold.
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ PARTNERS ═══ */}
  <section id="partners">
    <div className="section-inner">
      <div className="section-tag reveal">Partners</div>
      <h2 className="section-title reveal reveal-delay-1">Built for <em>Collaboration</em></h2>
      <p className="section-lead reveal reveal-delay-2">Wayken exists as a platform for long-term collaboration. We welcome investors, entrepreneurs, professionals, and strategic partners aligned with our long-term mission.</p>
      <div className="partners-content">
        <div className="partner-types">
          <div className="partner-type reveal">
            <div className="partner-type-name">Investors</div>
            <div className="partner-type-desc">Individuals and institutions seeking disciplined, long-term capital deployment in high-quality businesses. We offer transparency, structured governance, and alignment of interests.</div>
          </div>
          <div className="partner-type reveal reveal-delay-1">
            <div className="partner-type-name">Entrepreneurs</div>
            <div className="partner-type-desc">Founders building businesses in sectors we understand deeply. We bring more than capital — we bring strategic support, governance expertise, and a long-term perspective that respects the builder's vision.</div>
          </div>
          <div className="partner-type reveal reveal-delay-2">
            <div className="partner-type-name">Professionals &amp; Advisors</div>
            <div className="partner-type-desc">Experienced individuals who contribute domain expertise, networks, and judgment to Wayken's investment process and portfolio companies.</div>
          </div>
          <div className="partner-type reveal reveal-delay-3">
            <div className="partner-type-name">Strategic Partners</div>
            <div className="partner-type-desc">Organizations and institutions whose capabilities complement our portfolio and amplify value for the businesses we back.</div>
          </div>
        </div>
        <div className="partner-cta-block reveal">
          <div className="section-tag" style={{marginBottom: 28}}>Work With Us</div>
          <p>Whether you are an investor looking for a disciplined long-term partner, an entrepreneur seeking capital and strategic support, or a professional interested in contributing to our platform — we welcome the conversation.</p>
          <p>We do not transact. We build relationships first, and let those relationships determine whether an investment is the right structure for both parties.</p>
          <div className="h-rule" />
          <a href="#contact" className="btn-primary" style={{marginTop: 8}}>Initiate a Conversation</a>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ INSIGHTS ═══ */}
  <section id="insights">
    <div className="section-inner">
      <div className="section-tag reveal">Insights</div>
      <h2 className="section-title reveal reveal-delay-1">Thinking on <em>Markets &amp; Capital</em></h2>
      <p className="section-lead reveal reveal-delay-2">Our perspectives on long-term investing, governance, and the businesses we find most compelling.</p>
      <div className="insights-grid">
        <a href="#" className="insight-card reveal">
          <div className="insight-type">Investment Thinking</div>
          <div className="insight-title">Why Patient Capital Outperforms in Emerging Markets</div>
          <div className="insight-excerpt">The compounding advantage of long-term orientation is more pronounced in markets with institutional inefficiency — and India presents precisely that opportunity.</div>
          <div className="insight-arrow">Read more</div>
        </a>
        <a href="#" className="insight-card reveal reveal-delay-1">
          <div className="insight-type">Governance</div>
          <div className="insight-title">The Case for Independent Governance in Private Equity</div>
          <div className="insight-excerpt">Most governance failures in private markets stem from the same root: the absence of independent oversight. We examine what proper structures look like.</div>
          <div className="insight-arrow">Read more</div>
        </a>
        <a href="#" className="insight-card reveal reveal-delay-2">
          <div className="insight-type">Sector View</div>
          <div className="insight-title">Healthcare as a Structural Investment Opportunity in India</div>
          <div className="insight-excerpt">Demographic shifts, rising incomes, and persistent supply gaps make Indian healthcare one of the most compelling multi-decade investment themes available.</div>
          <div className="insight-arrow">Read more</div>
        </a>
      </div>
    </div>
  </section>
  {/* ═══ CONTACT ═══ */}
  <section id="contact">
    <div className="section-inner">
      <div className="contact-layout">
        <div className="contact-info">
          <div className="section-tag reveal">Contact</div>
          <h2 className="section-title reveal reveal-delay-1">Begin the <em>Conversation</em></h2>
          <p className="reveal reveal-delay-2">We welcome enquiries from investors, entrepreneurs, and professionals who share our belief in long-term, responsible capital allocation. There is no standard form here — every relationship begins with a genuine conversation.</p>
          <div className="contact-details reveal reveal-delay-3">
            <div className="contact-detail-item">
              <span className="contact-detail-label">Location</span>
              <span className="contact-detail-value">Kochi, Kerala, India</span>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">Email</span>
              <span className="contact-detail-value">contact@waykenholdng.com</span>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">Enquiries</span>
              <span className="contact-detail-value">Investor Relations · Entrepreneurial Partnerships · Career</span>
            </div>
          </div>
        </div>
        <div className="contact-form reveal reveal-delay-2">
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">First Name</label>
              <input type="text" className="form-input" placeholder="Your first name" />
            </div>
            <div className="form-field">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-input" placeholder="Your last name" />
            </div>
          </div>
          <div className="form-field">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" placeholder="your@email.com" />
          </div>
          <div className="form-field">
            <label className="form-label">Organisation</label>
            <input type="text" className="form-input" placeholder="Your company or institution" />
          </div>
          <div className="form-field">
            <label className="form-label">Nature of Enquiry</label>
            <select className="form-select">
              <option value="" disabled>Select enquiry type</option>
              <option>Investor Relations</option>
              <option>Entrepreneurial Partnership</option>
              <option>Professional Advisory</option>
              <option>Strategic Partnership</option>
              <option>Career Opportunity</option>
              <option>General Enquiry</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="Share a brief context on your enquiry…" defaultValue={""} />
          </div>
          <button className="form-submit" type="button">Submit Enquiry →</button>
        </div>
      </div>
    </div>
  </section>
  {/* FOOTER */}
  <footer>
    <div className="footer-inner">
      <div className="footer-top">
        <div>
          <img src="/assets/WaykenLohgo.png" alt="Wayken Holdings" className="footer-brand-logo" />
          <div className="footer-brand-desc">Long-term investment management. Responsible capital allocation. Building businesses for the next 100 years.</div>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            <li><a href="#about">About Wayken</a></li>
            <li><a href="#philosophy">Investment Philosophy</a></li>
            <li><a href="#leadership">Leadership</a></li>
            <li><a href="#responsible">Responsible Investing</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Investment</div>
          <ul className="footer-links">
            <li><a href="#sectors">Sectors</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#insights">Insights</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Connect</div>
          <ul className="footer-links">
            <li><a href="#contact">Investor Relations</a></li>
            <li><a href="#contact">Entrepreneurial Partnerships</a></li>
            <li><a href="#contact">Career</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Wayken Holding Pvt Ltd. All rights reserved.</span>
        <span style={{color: 'var(--border)'}}>Kochi, Kerala, India</span>
      </div>
    </div>
  </footer>
</div>
    </>
  );
}

export default WaykenPage;

