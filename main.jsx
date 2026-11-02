import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  X,
  FileText,
  Zap,
  TrendingUp,
  Cpu,
  Shield,
  Sparkles
} from 'lucide-react';
import './index.css';

const FREE = 'https://usevaultcraft.gumroad.com/l/vaultcraft-starter-guide?wanted=true';
const CORE = 'https://usevaultcraft.gumroad.com/l/vaultcraft?wanted=true';

const modules = [
  {
    tag: '01',
    name: 'Mindset',
    subtitle: '8 lessons · Included in The System',
    desc: 'Shift from endless consumption to building downloadable assets you own.',
    lessons: [
      'The Two-Day Window',
      'The System Is The Product',
      'Attention Is Leverage, Not A Business',
      'Attention Without A System Still Fails',
      'You Already Experienced The System',
      'Proof Comes From The Build',
      'The Three Tests',
      'Rent Nothing You Can Own'
    ]
  },
  {
    tag: '02',
    name: 'Operations',
    subtitle: '8 lessons · Included in The System',
    desc: 'Wire up your checkout, automated delivery, and single environment workspace.',
    lessons: [
      'The Infrastructure Org Chart',
      'Five Moves From Stranger To Buyer',
      'Own The Checkout',
      'The Moment After Payment',
      'One Environment, Not Twelve Tabs',
      'Where Upgrades Get Discovered',
      'The Objection Library',
      'Chargebacks Are A Signal'
    ]
  },
  {
    tag: '03',
    name: 'Marketing',
    subtitle: '7 lessons · Included in The System',
    desc: 'Turn attention into buyers through deliberate hooks and high-converting funnels.',
    lessons: [
      'Kill The Word Course',
      'Show The Complexity, Explain Nothing',
      'Consistency Buys You Time',
      'Copy What’s Already Working',
      'The Four-Part Hook',
      'Comments Are Currency',
      'Protect The Account Before You Need To'
    ]
  },
  {
    tag: '04',
    name: 'Pricing',
    subtitle: '8 lessons · Included in The System',
    desc: 'Create clear pricing doors, ascension paths, and action-based guarantees.',
    lessons: [
      'Two Doors, Not Four',
      'Discovery Over Pressure',
      'The Honest Tease',
      'Price Follows Proof',
      'Discounts Are For Relationships',
      'The Guarantee That Can’t Be Gamed',
      'Qualified Ascension',
      'A Different Kind Of Customer'
    ]
  },
  {
    tag: '05',
    name: 'The AI Engine',
    subtitle: '11 lessons · AI Engine Exclusive',
    desc: 'Let AI agents generate your backend, vault notes, and delivery infrastructure.',
    lessons: [
      'Your First Hire',
      'Give It Keys To The Building',
      'The Source Of Truth',
      'Building The Vault Without Sounding Like AI',
      'The Backend, By Instruction',
      'Money In, Vault Out',
      'Look Like A Business',
      'The Template Becomes Yours',
      'Before You Go Live',
      'When Something Breaks',
      'Your Business Now Has Context'
    ]
  }
];

const faqs = [
  [
    'Isn’t this just another course?',
    'A course gives you information and video playlists. VaultCraft provides the actual operational system: the framework, the Obsidian assets, and the Claude-driven AI infrastructure needed to execute product, content, funnel, automation, and sales. You don’t need 40 hours of talk—you need connected assets.'
  ],
  [
    'What exactly do I get?',
    'Instant access to your tier of the vault the moment you checkout. The System gets you the complete business model & curriculum. The AI Engine adds the Business OS, website template, prompt library, backend AI tools, automated delivery, and 30 days of 1:1 support.'
  ],
  [
    'What’s the difference between £29 and £79?',
    '£29 teaches you the model: Mindset, Operations, Marketing, and Pricing. £79 adds the implementation layer: the Obsidian Business OS, site template, AI agent prompts, automated backend delivery, and direct 1:1 support.'
  ],
  [
    'Do I need technical skills or coding?',
    'No. The AI Engine is configured so AI agents (like Claude or Codex) write and wire the backend, site, and delivery while you direct them as the business owner.'
  ],
  [
    'Is income guaranteed?',
    'No, and anyone promising guaranteed earnings online is lying. We provide a 14-day action-based guarantee: put the system to work, and if the system itself doesn’t deliver what it promised, you get a full refund.'
  ]
];

function InteractiveGraph() {
  const [selected, setSelected] = useState(0);
  const groups = [
    { x: 90, y: 90, color: '#b99aff', name: 'PRODUCT' },
    { x: 240, y: 75, color: '#7bd8d5', name: 'CONTENT' },
    { x: 110, y: 205, color: '#cf9af3', name: 'FUNNEL' },
    { x: 265, y: 190, color: '#93a9ff', name: 'AUTOMATION' }
  ];
  const offsets = [[-45, -18], [-32, -40], [-10, -28], [16, -45], [38, -22], [50, 4], [26, 25], [-12, 34], [-40, 16], [-18, -8], [15, 8]];
  const nodes = groups.flatMap((g, i) => offsets.map(([dx, dy], j) => ({ x: g.x + dx + (j % 3 - 1) * 3, y: g.y + dy + (j % 2 ? 2 : -2), group: i, id: i + '-' + j })));

  return (
    <div className="graph-wrap organic-graph">
      <div className="graph-top">
        <span className="dots"><i /><i /><i /></span>
        <span>VAULTCRAFT / BUSINESS OS GRAPH</span>
        <span className="live"><b></b> SYSTEM OPERATIONAL</span>
      </div>
      <div className="organic-map-body">
        <svg viewBox="0 0 355 290" aria-label="Interactive Obsidian knowledge map">
          <g className="organic-crosslinks">
            {[[0, 1], [1, 3], [3, 2], [2, 0], [0, 3]].map(([u, v], i) => (
              <line key={i} x1={groups[u].x} y1={groups[u].y} x2={groups[v].x} y2={groups[v].y} stroke="#9c87bf" strokeOpacity=".18" strokeWidth=".9" />
            ))}
          </g>
          {nodes.map((n, k) => {
            const g = groups[n.group];
            return (
              <g key={n.id} className={'organic-leaf ' + (selected === n.group ? 'lit' : 'dim')} style={{ animationDelay: (k % 9) * -.41 + 's' }}>
                <line x1={g.x} y1={g.y} x2={n.x} y2={n.y} stroke={g.color} strokeOpacity={selected === n.group ? .55 : .16} strokeWidth=".85" />
                <circle cx={n.x} cy={n.y} r={selected === n.group ? 2.3 : 1.6} fill={g.color} opacity={selected === n.group ? 1 : .5} />
              </g>
            );
          })}
          {groups.map((g, i) => (
            <g key={g.name} className={'organic-hub ' + (selected === i ? 'selected' : '')} onClick={() => setSelected(i)} tabIndex="0" role="button">
              <circle cx={g.x} cy={g.y} r="18" fill="transparent" />
              <circle className="hub-halo" cx={g.x} cy={g.y} r={selected === i ? 11 : 7} fill={g.color} fillOpacity={selected === i ? .15 : .05} stroke={g.color} strokeOpacity={selected === i ? .8 : .4} strokeWidth=".9" />
              <circle cx={g.x} cy={g.y} r={selected === i ? 4 : 3} fill={g.color} />
              <text x={g.x} y={g.y + 24} textAnchor="middle" fontSize="8.5" fontWeight={selected === i ? '800' : '600'} fill={selected === i ? '#fff' : '#afa6bd'}>{g.name}</text>
            </g>
          ))}
        </svg>
        <span className="organic-caption">CONNECTED OBSIDIAN GRAPH — CLICK NODES TO EXPLORE</span>
      </div>
      <div className="simple-detail">
        <div>
          <span className="detail-step">STAGE 0{selected + 1} / SYSTEM NODE</span>
          <strong>{modules[selected].name} Engine</strong>
          <p>{modules[selected].desc}</p>
        </div>
        <a href="#vault">EXPLORE LESSONS ↗</a>
      </div>
      <div className="graph-bottom">
        <span>5 MODULES · 42 CONNECTED LESSONS</span>
        <span>ONE-CLICK ACCESS</span>
      </div>
    </div>
  );
}

export function App() {
  const [openMod, setOpenMod] = useState(0);
  const [faq, setFaq] = useState(-1);
  const [menu, setMenu] = useState(false);

  return (
    <div className="site" id="top">
      {/* HEADER */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="logo">
            <span className="mark">✳</span> VaultCraft
          </a>
          <nav className={menu ? 'nav-links open' : 'nav-links'}>
            <a onClick={() => setMenu(false)} href="#proof">PROOF</a>
            <a onClick={() => setMenu(false)} href="#system">THE SYSTEM</a>
            <a onClick={() => setMenu(false)} href="#vault">VAULT</a>
            <a onClick={() => setMenu(false)} href="#pricing">PRICING</a>
            <a onClick={() => setMenu(false)} href="#faq">FAQ</a>
          </nav>
          <a className="nav-cta" href={CORE} target="_blank" rel="noreferrer">
            GET THE SYSTEM <ArrowUpRight size={15} />
          </a>
          <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse" /> [ attention → system → ownership ]
            </div>
            <h1>
              Stop Consuming.<br />
              <span>Build Something You Own.</span>
            </h1>
            <p className="hero-lead">Turn what you know into something you own.</p>
            <p className="hero-body">
              VaultCraft is the system for building the digital product, the content that sells it, and the funnel that runs it—end to end—using Claude + Obsidian.
            </p>
            <div className="hero-actions">
              <a className="button button-white" href={CORE} target="_blank" rel="noreferrer">
                GET THE SYSTEM — £29 <ArrowUpRight size={18} />
              </a>
              <a className="button button-outline" href={CORE} target="_blank" rel="noreferrer">
                GET THE AI ENGINE — £79 <ArrowRight size={18} />
              </a>
            </div>
            <div className="hero-meta">
              <span><Check size={14} /> INSTANT ACCESS</span>
              <span><Check size={14} /> NO INFRASTRUCTURE RENT</span>
              <span><Check size={14} /> NO CODE REQUIRED</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-halo" />
            <InteractiveGraph />
            <div className="hero-stamp">BUILT, TESTED & RUNNING LIVE</div>
          </div>
        </section>

        {/* LINEAR PROCESS FLOW TICKER */}
        <div className="ticker">
          <div className="ticker-inner">
            <span>IDEA</span>
            <span className="arr">→</span>
            <span>PRODUCT</span>
            <span className="arr">→</span>
            <span>CONTENT</span>
            <span className="arr">→</span>
            <span>FUNNEL</span>
            <span className="arr">→</span>
            <span>AUTOMATION</span>
            <span className="arr">→</span>
            <span>SALE</span>
          </div>
        </div>

        {/* REAL PROOF SECTION */}
        <section className="section shell" id="proof">
          <div className="section-head">
            <div>
              <div className="kicker">01 / PROOF OF EXECUTION</div>
              <h2>REAL PROOF.<br /><i>NOT PROMISES.</i></h2>
            </div>
            <p>From content to checkout to payment: a complete system built to deliver real outcomes without renting platform infrastructure.</p>
          </div>
          <div className="proof-grid">
            <div className="proof-card main-proof">
              <div className="proof-tag"><Zap size={14} strokeWidth={2.5}/> REAL STRIPE TRANSACTION</div>
              <div className="proof-amount">£29.00</div>
              <div className="proof-status">Payment Succeeded · 2 Days After Launch</div>
              <p>We built the product, put the content and funnel into motion, and two days later a real customer paid for what was created.</p>
            </div>
            <div className="proof-card stat-card">
              <div className="stat-num">286K+</div>
              <div className="stat-label">Real Organic Reel Views</div>
              <p>Generated by the identical content engine taught inside the vault.</p>
            </div>
            <div className="proof-card stat-card">
              <div className="stat-num">61.4%</div>
              <div className="stat-label">Funnel Click-Through Rate</div>
              <p>Feeding real traffic directly from short-form content into checkout.</p>
            </div>
          </div>
        </section>

        {/* THE FOUR QUESTIONS SECTION */}
        <section className="section section-dark" id="system">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="kicker">02 / THE BOTTLENECK</div>
                <h2>YOUR PROBLEM ISN’T<br /><i>INFORMATION.</i></h2>
              </div>
              <p>You want to build something online. But between the idea and an actual sale sit four questions nobody answers for you:</p>
            </div>
            <div className="problems-grid">
              <div className="prob-card">
                <span className="prob-num">01</span>
                <h3>What To Build</h3>
                <p>You know things worth paying for, but turning that into an actual product with a shape, a price, and delivery is a separate skill.</p>
              </div>
              <div className="prob-card">
                <span className="prob-num">02</span>
                <h3>How To Package It</h3>
                <p>Knowledge sitting in your head isn’t a product. It needs connected Obsidian structure before anyone can buy it.</p>
              </div>
              <div className="prob-card">
                <span className="prob-num">03</span>
                <h3>How To Get Attention</h3>
                <p>Content that gets views and content that gets buyers are not the same thing. Learn the hook mechanics that convert.</p>
              </div>
              <div className="prob-card">
                <span className="prob-num">04</span>
                <h3>How To Automate It</h3>
                <p>You can’t manually DM every comment. Without automated pipeline delivery, attention just leaks away.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ATTENTION -> SYSTEM -> OWNERSHIP SECTION */}
        <section className="section shell">
          <div className="section-head">
            <div>
              <div className="kicker">03 / THE TRIAD</div>
              <h2>THE MISSING<br /><i>SYSTEM.</i></h2>
            </div>
            <p>Attention → System → Ownership</p>
          </div>
          <div className="triad-grid">
            <div className="triad-card">
              <div className="triad-icon"><TrendingUp /></div>
              <h3>Attention</h3>
              <p>Content that gets you seen. It creates distribution, but by itself it doesn’t pay anything. It’s reach, not revenue.</p>
            </div>
            <div className="triad-card highlight">
              <div className="triad-icon"><Cpu /></div>
              <h3>System</h3>
              <p>What turns reach into a customer: the funnel, offer, checkout, and delivery flow from watching to buying.</p>
            </div>
            <div className="triad-card">
              <div className="triad-icon"><Shield /></div>
              <h3>Ownership</h3>
              <p>Whether you run on infrastructure you control, or rent every piece from third parties. That determines if it’s yours.</p>
            </div>
          </div>
        </section>

        {/* INSIDE THE VAULT (ACCORDIONS + EXPLORER) */}
        <section className="section section-dark" id="vault">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="kicker">04 / THE SYSTEM ARCHITECTURE</div>
                <h2>5 MODULES. 42 LESSONS.<br /><i>ONE CONNECTED SYSTEM.</i></h2>
              </div>
              <p>Structured as a linked knowledge vault, not a folder of disconnected PDFs or bloated video courses.</p>
            </div>

            <div className="curriculum-container">
              {modules.map((m, idx) => (
                <div className={'curr-module ' + (openMod === idx ? 'open' : '')} key={m.name}>
                  <button className="curr-header" onClick={() => setOpenMod(openMod === idx ? -1 : idx)}>
                    <span className="curr-tag">{m.tag}</span>
                    <div className="curr-title-wrap">
                      <h3>{m.name}</h3>
                      <span className="curr-sub">{m.subtitle}</span>
                    </div>
                    <ChevronDown className={'curr-chevron ' + (openMod === idx ? 'turn' : '')} />
                  </button>
                  {openMod === idx && (
                    <div className="curr-body">
                      <p className="curr-desc">{m.desc}</p>
                      <div className="lessons-grid">
                        {m.lessons.map((les) => (
                          <div className="lesson-pill" key={les}>
                            <FileText size={13} />
                            <span>{les}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* COMPARISON GRID */}
            <div className="comparison-wrap">
              <div className="comp-col comp-self">
                <h3>You could do this yourself...</h3>
                <ul>
                  <li>Figure out product structure from scratch</li>
                  <li>Build funnels with no working template</li>
                  <li>Piece together DM automations through trial and error</li>
                  <li>Design and write sales copy alone</li>
                  <li>Wire checkout to delivery by hand</li>
                </ul>
              </div>
              <div className="comp-col comp-system">
                <h3>Or use the system:</h3>
                <ul>
                  <li><Check size={16}/> <b>No Blank Page:</b> Working Obsidian OS starting vault</li>
                  <li><Check size={16}/> <b>AI Writes It With You:</b> Pre-configured agent prompts</li>
                  <li><Check size={16}/> <b>Wired Payments to Delivery:</b> End-to-end checkout pipeline</li>
                  <li><Check size={16}/> <b>It Keeps Working:</b> A connected operating environment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING (TWO DOORS) */}
        <section className="section shell" id="pricing">
          <div className="section-head">
            <div>
              <div className="kicker">05 / THE OFFER</div>
              <h2>TWO DOORS.<br /><i>PICK YOURS.</i></h2>
            </div>
            <p>Understand the business model, or build and own it directly. Choose the tier matching where you are.</p>
          </div>

          <div className="prices">
            {/* DOOR 1 */}
            <article className="price">
              <div className="price-top">
                <span>01 / UNDERSTAND IT</span>
                <span>ENTRY TIER</span>
              </div>
              <h3>The System</h3>
              <p>Complete business model: Mindset, Operations, Marketing, Pricing, Funnel & Offer Architecture.</p>
              <div className="amount">£29 <small>/ LIFETIME</small></div>
              <a className="button button-outline price-btn" href={CORE} target="_blank" rel="noreferrer">
                GET THE SYSTEM — £29 <ArrowUpRight size={17} />
              </a>
              <div className="price-list">
                <div><Check size={17} /> 31 lessons across 4 core modules</div>
                <div><Check size={17} /> Digital product business framework</div>
                <div><Check size={17} /> Funnel, offer & checkout blueprint</div>
                <div><Check size={17} /> Pricing psychology & price ladders</div>
                <div><Check size={17} /> Infrastructure ownership principles</div>
              </div>
            </article>

            {/* DOOR 2 */}
            <article className="price featured">
              <div className="price-badge">MOST POPULAR</div>
              <div className="price-top">
                <span>02 / BUILD IT</span>
                <span>COMPLETE ENGINE</span>
              </div>
              <h3>The AI Engine</h3>
              <p>Everything in The System + Obsidian Business OS, website template, prompt library & automated delivery setup.</p>
              <div className="amount">£79 <small>/ LIFETIME</small></div>
              <a className="button button-white price-btn" href={CORE} target="_blank" rel="noreferrer">
                GET THE AI ENGINE — £79 <ArrowUpRight size={17} />
              </a>
              <div className="price-list">
                <div><Check size={17} /> <b>Everything in The System, plus:</b></div>
                <div><Check size={17} /> AI-written prompts that build your backend & site</div>
                <div><Check size={17} /> Ready-to-ship website template & Obsidian OS</div>
                <div><Check size={17} /> Payments & automated delivery wired end to end</div>
                <div><Check size={17} /> 11 implementation lessons (5th Module)</div>
                <div className="support-highlight">
                  <Sparkles size={16}/> <b>30 Days of 1:1 Direct Support Included</b>
                </div>
              </div>
            </article>
          </div>

          {/* ACTION BASED GUARANTEE */}
          <div className="guarantee-box">
            <div className="guarantee-head">
              <Shield size={22} />
              <h3>14-Day Action-Based Guarantee</h3>
            </div>
            <p>
              Fourteen days, and it only works one way: you actually do the work. Go through the material, apply it to something real, and show us what you built. If the system itself didn't deliver what it promised, you receive a full refund. No income promises—just an operational guarantee.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-dark" id="faq">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="kicker">06 / QUESTIONS</div>
                <h2>QUESTIONS.<br /><i>STRAIGHT ANSWERS.</i></h2>
              </div>
              <p>Everything you need to know before joining.</p>
            </div>
            <div className="faq">
              {faqs.map(([q, a], i) => (
                <div className="faq-item" key={q}>
                  <button onClick={() => setFaq(faq === i ? -1 : i)} aria-expanded={faq === i}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {q}
                    <ChevronDown size={19} className={faq === i ? 'turn' : ''} />
                  </button>
                  {faq === i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL ENDCAP CTA */}
        <section className="endcap">
          <div className="shell">
            <div className="kicker">BUILD SOMETHING YOU OWN</div>
            <h2>MAKE WHAT YOU<br />KNOW <i>MATTER.</i></h2>
            <p>Start building your operational system with the tools you already have.</p>
            <div className="end-actions">
              <a href={CORE} target="_blank" rel="noreferrer" className="button button-white">
                GET THE SYSTEM — £29 <ArrowUpRight size={18} />
              </a>
              <a href={CORE} target="_blank" rel="noreferrer" className="button button-outline">
                GET THE AI ENGINE — £79 <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer shell">
        <a href="#top" className="logo">
          <span className="mark">✳</span> VaultCraft
        </a>
        <p>Created by VaultCraft · support@usevaultcraft.com</p>
        <p>© 2026 VaultCraft. All rights reserved.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);