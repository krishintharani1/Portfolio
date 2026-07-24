import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import resumeUrl from '../Krishin Lal - AI Engineer & Data Scientist.pdf?url'

const metrics = [
  { value: '1,467', label: 'hours saved / year' },
  { value: '116', label: 'opportunity zones' },
  { value: '600-700', label: 'daily requests / endpoint' },
  { value: '~85%', label: 'forecast accuracy' },
]

const projects = [
  {
    number: '01',
    eyebrow: 'Document intelligence',
    title: 'Procurement Invoice Intelligence',
    summary: 'A production-ready, multi-class invoice pipeline that gave finance back 10 hours every working day.',
    problem: 'Finance teams manually processed 150 Class A, B, and C vendor invoices each day, with each invoice taking roughly five minutes.',
    built: 'An end-to-end extraction and validation pipeline using Azure Document Intelligence and GPT-4o, exposed through a production FastAPI service.',
    stack: ['Azure Document Intelligence', 'GPT-4o', 'FastAPI'],
    metric: '80%',
    metricLabel: 'faster processing',
    proof: '5 min to 1 min per invoice',
    tone: 'cyan',
  },
  {
    number: '02',
    eyebrow: 'OCR + LLM validation',
    title: 'Trade Document Automation',
    summary: 'Handwritten trade cover pages went from a five-hour manual process to a 15-minute automated workflow.',
    problem: 'UBL teams spent five hours each day manually processing trade batch cover pages, including difficult handwritten content.',
    built: 'A Python OCR workflow with Azure Document Intelligence and a custom LLM validation layer designed to handle handwritten fields reliably.',
    stack: ['Python', 'Azure Document Intelligence', 'LLM validation'],
    metric: '1,467',
    metricLabel: 'hours saved annually',
    proof: '1,500 to 33 hours per year',
    tone: 'violet',
  },
  {
    number: '03',
    eyebrow: 'Geospatial intelligence',
    title: 'Branch Expansion Planning',
    summary: 'A decision system that found where UBL could expand, backed by competitor density rather than intuition.',
    problem: 'Expansion teams needed to identify high-value branch locations while accounting for competitors and avoiding cannibalization of existing UBL branches.',
    built: 'Mapped 2,200+ UBL and Silk Bank branches, geocoded 8,000+ competitor locations, built 1 x 1 km grids, then excluded areas within 500 m of existing UBL branches.',
    stack: ['SERP API', 'Geocoding', 'Spatial grid analysis', 'Python'],
    metric: '116',
    metricLabel: 'viable opportunity zones',
    proof: 'Direct input to executive expansion decisions',
    tone: 'cyan',
  },
  {
    number: '04',
    eyebrow: 'Semantic entity resolution',
    title: 'NTB / ETB Matching Engine',
    summary: 'A multi-stage matching engine that turned noisy CRM names into verified acquisition prospects.',
    problem: 'Thousands of inconsistent Apollo CRM company names had to be reconciled against bank records to separate new-to-bank from existing-to-bank prospects.',
    built: 'Combined normalized exact matching, containment checks, compact blocking indexes, domain-noise filtering, and embedding similarity with configurable confidence thresholds.',
    stack: ['SentenceTransformers', 'all-MiniLM-L6-v2', 'Cosine similarity', 'Python'],
    metric: '2,479',
    metricLabel: 'companies classified',
    proof: 'Enabled targeted acquisition outreach',
    tone: 'violet',
  },
  {
    number: '05',
    eyebrow: 'Deep learning forecasting',
    title: 'Branch Cash Optimization',
    summary: 'Hourly cash-demand forecasts that help branches hold what they need, not what they fear they might need.',
    problem: 'Branches needed a more accurate way to size daily cash reserves and reduce excessive vault holdings without compromising operational needs.',
    built: 'Per-branch N-BEATS forecasting at hourly granularity with walk-forward validation, benchmarked against SARIMA, ARIMA, and DeepAR.',
    stack: ['NeuralForecast', 'N-BEATS', 'DeepAR', 'SARIMA', 'ARIMA'],
    metric: '~85%',
    metricLabel: 'held-out accuracy',
    proof: 'Measured within a +/-25% tolerance band',
    tone: 'cyan',
  },
  {
    number: '06',
    eyebrow: 'Enterprise OCR',
    title: 'Account Opening Automation',
    summary: 'A reusable in-house document framework for forms arriving from every UBL branch nationwide.',
    problem: 'Account-opening forms contain mixed structured and unstructured fields, while processing depended on a costly third-party vendor.',
    built: 'An end-to-end OCR pipeline extracting KYC details, customer information, and signatures into validated JSON ready for direct system integration.',
    stack: ['Document OCR', 'Field validation', 'JSON integration'],
    metric: '0',
    metricLabel: 'external vendor dependency',
    proof: 'Reusable across document workflows',
    tone: 'violet',
  },
]

const additionalWork = [
  {
    index: 'A',
    title: 'Production ML Infrastructure',
    copy: 'Containerized and deployed 5-6 production models on Azure ML with authenticated FastAPI endpoints, request validation, and monitoring dashboards.',
    meta: '600-700 requests daily per endpoint',
  },
  {
    index: 'B',
    title: 'Multi-Agent Narrative System',
    copy: 'LangGraph and Google Gemini system with a Director agent, persistent character memory, distinct personality profiles, and inter-agent context sharing.',
    meta: 'Hackfest x Datathon 2024',
  },
  {
    index: 'C',
    title: 'EDNOVA',
    copy: 'Multi-tenant MERN learning platform with real-time engagement tracking, a reward engine, dynamic leaderboards, and at-risk student analytics.',
    meta: 'Final year project, 2024-2025',
  },
]

const expertise = [
  { title: 'LLM & Agentic AI', items: ['RAG architecture', 'LangChain', 'LangGraph', 'Azure OpenAI', 'Multi-agent orchestration', 'Prompt engineering'] },
  { title: 'Document Intelligence', items: ['Azure Document Intelligence', 'Handwriting recognition', 'Table extraction', 'Layout analysis', 'Image preprocessing'] },
  { title: 'ML & Forecasting', items: ['Scikit-learn', 'TensorFlow', 'XGBoost', 'N-BEATS', 'NHITS', 'DeepAR', 'NeuralForecast'] },
  { title: 'Search & Matching', items: ['SentenceTransformers', 'Hugging Face', 'Vector embeddings', 'ChromaDB', 'Cosine similarity', 'Semantic blocking'] },
  { title: 'Cloud & MLOps', items: ['Azure Machine Learning', 'FastAPI', 'Docker', 'API authentication', 'Request validation', 'Endpoint monitoring'] },
  { title: 'Data & Geospatial', items: ['Pandas', 'NumPy', 'SQL', 'Teradata', 'MongoDB', 'Spatial grids', 'Opportunity mapping'] },
]

const links = {
  email: 'mailto:krishintharani1@gmail.com?subject=Project%20inquiry%20for%20Krishin',
  linkedin: 'https://www.linkedin.com/in/krishin-lal-283311257/',
  github: 'https://github.com/krishintharani1',
}

function ArrowIcon({ diagonal = false }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4" fill="none">
      {diagonal ? <path d="M5 15 15 5M7 5h8v8" /> : <path d="M3 10h14m-5-5 5 5-5 5" />}
    </svg>
  )
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const navLinks = [['About', '#about'], ['Work', '#work'], ['Expertise', '#expertise'], ['Experience', '#experience']]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/6 bg-[#070b12]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="font-display text-lg font-semibold tracking-[-0.04em] text-white" aria-label="Krishin Lal, back to top">
          KL<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
        </nav>
        <a href="#contact" className="button-small hidden sm:inline-flex">Start a project <ArrowIcon /></a>
        <button
          type="button"
          className="relative z-10 flex size-10 items-center justify-center rounded-full border border-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className={`menu-line ${open ? 'translate-y-[3px] rotate-45' : '-translate-y-[3px]'}`} />
          <span className={`menu-line absolute ${open ? '-rotate-45' : 'translate-y-[3px]'}`} />
        </button>
      </div>
      {open && (
        <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-white/6 bg-[#070b12] px-5 py-6 md:hidden">
          {navLinks.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/8 py-4 font-display text-2xl text-white">{label}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} className="button-primary mt-6 w-full justify-center">Start a project <ArrowIcon /></a>
        </motion.nav>
      )}
    </header>
  )
}

function Hero() {
  const reduceMotion = useReducedMotion()
  return (
    <section id="top" className="hero-grid relative flex min-h-screen items-center overflow-hidden border-b border-white/7 pt-24">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted sm:text-xs">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Available for select AI projects
        </motion.div>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl font-display text-[clamp(3.6rem,9.5vw,9rem)] font-medium leading-[0.83] tracking-[-0.075em] text-white"
        >
          Applied AI<span className="text-accent">,</span><br />built for <span className="text-outline">impact.</span>
        </motion.h1>
        <div className="mt-12 grid gap-9 lg:grid-cols-[1fr_1fr] lg:items-end">
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="max-w-xl text-lg leading-8 text-secondary sm:text-xl">
            I&apos;m <strong className="font-semibold text-white">Krishin Lal</strong>, an AI Engineer and Data Scientist turning document-heavy, manual operations into fast, measurable production systems.
          </motion.p>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.7 }} className="flex flex-wrap gap-3 lg:justify-end">
            <a href="#work" className="button-primary">Explore selected work <ArrowIcon /></a>
            <a href={links.email} className="button-secondary">Discuss a project <ArrowIcon diagonal /></a>
          </motion.div>
        </div>
        <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="mt-20 grid grid-cols-2 border-l border-t border-white/8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-b border-r border-white/8 px-4 py-6 sm:px-6 sm:py-7">
              <div className="font-display text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">{metric.value}</div>
              <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.13em] text-muted sm:text-[10px]">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <a href="#about" aria-label="Scroll to about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted lg:flex">
        Scroll <span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </a>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-shell">
      <SectionLabel number="01">About</SectionLabel>
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <Reveal>
          <p className="font-mono text-xs uppercase leading-6 tracking-[0.15em] text-accent">Karachi, Pakistan<br />Production AI systems</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="section-heading max-w-4xl">I work where AI leaves the demo and meets the <span className="text-secondary">real operation.</span></h2>
          <div className="mt-9 grid gap-6 text-base leading-7 text-secondary sm:grid-cols-2 sm:text-lg sm:leading-8">
            <p>My strongest work is end-to-end: understanding the business bottleneck, choosing the right model, building the data path, and shipping a monitored service teams can depend on.</p>
            <p>At UBL, that has meant OCR systems for handwritten and structured documents, semantic matching at scale, geospatial decision intelligence, and deep-learning forecasts deployed on Azure.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Project({ project, index }) {
  const reverse = index % 2 === 1
  return (
    <article className="project-row">
      <Reveal className={`min-w-0 ${reverse ? 'lg:order-2' : ''}`}>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.15em] text-accent">{project.number}</span>
          <span className="h-px w-10 bg-white/15" />
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">{project.eyebrow}</span>
        </div>
        <h3 className="mt-7 font-display text-4xl font-medium leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl xl:text-6xl">{project.title}</h3>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary">{project.summary}</p>
        <div className="mt-9 grid gap-6 border-t border-white/8 pt-7 sm:grid-cols-2">
          <div>
            <h4 className="detail-label">The problem</h4>
            <p className="mt-3 text-sm leading-6 text-muted">{project.problem}</p>
          </div>
          <div>
            <h4 className="detail-label">The system</h4>
            <p className="mt-3 text-sm leading-6 text-muted">{project.built}</p>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((item) => <span key={item} className="tech-pill">{item}</span>)}
        </div>
      </Reveal>
      <Reveal delay={0.12} className={reverse ? 'lg:order-1' : ''}>
        <div className={`metric-panel ${project.tone === 'violet' ? 'metric-violet' : 'metric-cyan'}`}>
          <div className="metric-grid" aria-hidden="true" />
          <div className="relative z-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Measured outcome</span>
            <div className="mt-8 font-display text-[clamp(4.8rem,10vw,8rem)] font-medium leading-none tracking-[-0.08em] text-white">{project.metric}</div>
            <div className="mt-2 font-display text-xl tracking-[-0.025em] text-white sm:text-2xl">{project.metricLabel}</div>
          </div>
          <div className="relative z-10 mt-16 border-t border-white/10 pt-5 font-mono text-[10px] uppercase leading-5 tracking-[0.13em] text-muted">{project.proof}</div>
        </div>
      </Reveal>
    </article>
  )
}

function Work() {
  return (
    <section id="work" className="border-t border-white/7">
      <div className="section-shell pb-4 sm:pb-8">
        <SectionLabel number="02">Selected work</SectionLabel>
        <Reveal className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="section-heading">Systems with a job to do.</h2>
          <p className="max-w-xl text-base leading-7 text-secondary lg:justify-self-end">Production AI built around measurable operating outcomes: fewer manual hours, better decisions, and infrastructure that holds up after launch.</p>
        </Reveal>
      </div>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {projects.map((project, index) => <Project key={project.title} project={project} index={index} />)}
      </div>
      <div className="section-shell pt-12 sm:pt-16">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-6">
            <h3 className="font-display text-3xl font-medium tracking-[-0.045em] text-white sm:text-4xl">More shipped systems</h3>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-muted sm:block">Beyond the case studies</span>
          </div>
        </Reveal>
        <div className="grid border-l border-t border-white/8 lg:grid-cols-3">
          {additionalWork.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="h-full">
              <article className="additional-card">
                <div className="font-mono text-[10px] text-accent">[{item.index}]</div>
                <h4 className="mt-12 font-display text-2xl font-medium tracking-[-0.035em] text-white">{item.title}</h4>
                <p className="mt-4 text-sm leading-6 text-secondary">{item.copy}</p>
                <p className="mt-auto border-t border-white/8 pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">{item.meta}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section id="expertise" className="section-shell border-t border-white/7">
      <SectionLabel number="03">Expertise</SectionLabel>
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <h2 className="section-heading">Deep enough to build. Broad enough to ship.</h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-secondary">From model selection to authenticated endpoints, I cover the full path between an AI opportunity and a working production system.</p>
        </Reveal>
        <div className="border-t border-white/10">
          {expertise.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <div className="expertise-row">
                <div className="flex items-start gap-4">
                  <span className="mt-1 font-mono text-[9px] text-accent">0{index + 1}</span>
                  <h3 className="font-display text-xl font-medium tracking-[-0.03em] text-white sm:text-2xl">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 lg:justify-end">
                  {group.items.map((item) => <span key={item} className="text-sm text-muted">{item}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section-shell border-t border-white/7">
      <SectionLabel number="04">Experience</SectionLabel>
      <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
        <Reveal><h2 className="section-heading">Built in the real world.</h2></Reveal>
        <div>
          <Reveal>
            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">United Bank Limited</p>
                  <h3 className="mt-3 font-display text-3xl font-medium tracking-[-0.045em] text-white sm:text-4xl">Data Scientist</h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">Jul 2025 - Present</span>
              </div>
              <p className="mt-6 max-w-3xl text-base leading-7 text-secondary">Building production document intelligence, semantic matching, forecasting, geospatial analytics, and Azure-hosted ML services at one of Pakistan&apos;s largest banks.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['Production AI', 'Azure ML', 'Document intelligence', 'Forecasting', 'Geospatial'].map((item) => <span className="tech-pill" key={item}>{item}</span>)}
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="timeline-item border-b-0 pb-0">
              <div className="timeline-dot timeline-dot-muted" />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">Iqra University, Karachi</p>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl">BS Computer Science</h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">Oct 2021 - Jun 2025</span>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section relative overflow-hidden border-t border-white/7">
      <div className="contact-glow" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <SectionLabel number="05">Contact</SectionLabel>
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-accent">Have a system that should work smarter?</p>
          <h2 className="mt-7 max-w-5xl font-display text-[clamp(3.2rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.07em] text-white">Let&apos;s turn the bottleneck into an advantage.</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 flex flex-col gap-7 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a href={links.email} className="group inline-flex items-center gap-3 break-all font-display text-base font-medium tracking-[-0.03em] text-white sm:break-normal sm:text-2xl">
            krishintharani1@gmail.com
            <span className="flex size-9 items-center justify-center rounded-full border border-white/15 transition group-hover:border-accent group-hover:text-accent"><ArrowIcon diagonal /></span>
          </a>
          <div className="flex flex-wrap gap-3">
            <a className="button-secondary" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a>
            <a className="button-secondary" href={links.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
            <a className="button-secondary" href={resumeUrl} download="Krishin-Lal-Resume.pdf">Resume <ArrowIcon /></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/7 bg-[#05080d]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-7 font-mono text-[9px] uppercase tracking-[0.13em] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span>Krishin Lal / AI Engineer & Data Scientist</span>
        <span>Karachi, Pakistan / {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-white selection:bg-accent selection:text-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Expertise />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
