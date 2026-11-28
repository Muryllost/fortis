
import { useState } from 'react'
import { motion } from 'framer-motion'

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  Factory,
  HardHat,
  Leaf,
  Menu,
  ShieldCheck,
  Stethoscope,
  X,
  MessageCircle,
  FileCheck2,
  Activity,
  Building2,
  GraduationCap,
  Search,
  Siren,
  ClipboardList,
  Users,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
  BadgeCheck,
  Flame,
  HeartPulse,
} from 'lucide-react'

// ==========================================
// CONFIGURAÇÕES
// ==========================================

const WHATSAPP_NUMBER = '5517991231211'
const EMAIL = 'contato@fortissma.com'
const INSTAGRAM = 'https://www.instagram.com/fortis.ssma/'

// ==========================================
// SERVIÇOS
// ==========================================

const services = [
  {
    n: '01',
    icon: ShieldCheck,
    title: 'Consultoria e assessoria em SST e SSMA',
    desc: 'Diagnóstico da operação, definição de prioridades, planos de ação e acompanhamento das rotinas de segurança.',
    tags: ['Diagnóstico', 'Prevenção', 'Acompanhamento'],
  },
  {
    n: '02',
    icon: Activity,
    title: 'Gestão de riscos ocupacionais',
    desc: 'Identificação de perigos, avaliação de riscos e medidas de controle para máquinas, equipamentos e atividades críticas.',
    tags: ['Inventário de riscos', 'LOTO', 'Planos de ação'],
  },
  {
    n: '03',
    icon: Search,
    title: 'Inspeções e auditorias',
    desc: 'Verificações em campo e análise documental de proteções de máquinas, EPIs, EPCs, procedimentos e registros.',
    tags: ['Inspeção em campo', 'Relatório fotográfico', 'Auditoria'],
  },
  {
    n: '04',
    icon: FileCheck2,
    title: 'Documentação de SST',
    desc: 'Elaboração e revisão de PGR, LTCAT e demais documentos técnicos de Segurança e Saúde do Trabalho.',
    tags: ['PGR', 'LTCAT', 'PGRTR', 'POPs e Ordens de Serviço'],
  },
  {
    n: '05',
    icon: HeartPulse,
    title: 'Saúde ocupacional',
    desc: 'Organização e encaminhamento de exames ocupacionais, apoio ao PCMSO e gestão dos Atestados de Saúde Ocupacional (ASOs).',
    tags: ['Exames ocupacionais', 'PCMSO', 'ASOs'],
  },
  {
    n: '06',
    icon: GraduationCap,
    title: 'Treinamentos e integração',
    desc: 'Capacitação de equipes operacionais e lideranças, com conteúdo adaptado à atividade e prática quando aplicável.',
    tags: ['Normas Regulamentadoras', 'Integração', 'Treinamentos personalizados'],
  },
  {
    n: '07',
    icon: Flame,
    title: 'Prevenção de incêndios e emergências',
    desc: 'Apoio à regularização de AVCB e CLCB, brigadas, Plano de Atendimento a Emergências e simulados.',
    tags: ['AVCB e CLCB', 'Brigada', 'PAE e simulados'],
  },
  {
    n: '08',
    icon: ClipboardList,
    title: 'DDS e comunicação de segurança',
    desc: 'Desenvolvimento de diálogos diários, campanhas, materiais de integração, orientações e sinalização interna.',
    tags: ['DDS', 'Campanhas', 'Integração'],
  },
  {
    n: '09',
    icon: Leaf,
    title: 'Gestão ambiental',
    desc: 'Orientação para identificar impactos e organizar rotinas e controles ambientais conforme as necessidades da operação.',
    tags: ['Impactos ambientais', 'Controles', 'Boas práticas'],
  },
  {
    n: '10',
    icon: Siren,
    title: 'Investigação de acidentes e incidentes',
    desc: 'Levantamento das circunstâncias, análise das causas e definição de ações para reduzir a chance de recorrência.',
    tags: ['Análise de causas', 'Ações corretivas', 'Prevenção'],
  },
]

// ==========================================
// TREINAMENTOS
// ==========================================

const trainings = [
  ['NR-01', 'Gerenciamento de riscos ocupacionais'],
  ['NR-06', 'Uso, conservação e responsabilidades sobre EPIs'],
  ['NR-10', 'Segurança em serviços com eletricidade'],
  ['NR-11', 'Transporte, movimentação e operação de materiais'],
  ['NR-12', 'Segurança em máquinas e equipamentos'],
  ['NR-18', 'Segurança e saúde no trabalho na indústria da construção'],
  ['NR-20', 'Segurança com inflamáveis e combustíveis'],
  ['NR-23', 'Prevenção e proteção contra incêndios'],
  ['NR-33', 'Segurança em espaços confinados'],
  ['NR-34', 'Segurança na indústria da construção, reparação e desmonte naval'],
  ['NR-35', 'Segurança no trabalho em altura'],
]

const extras = [
  'Treinamento de operação de empilhadeira',
  'Treinamento de operação de PEMT',
  'LOTO',
  'Brigada de emergência',
  'Primeiros socorros',
  'Uso de extintores',
  'Treinamentos personalizados',
]

// ==========================================
// SEGMENTOS ATENDIDOS
// ==========================================

const segments = [
  ['Indústrias', Factory],
  ['Transportadoras e logística', BriefcaseBusiness],
  ['Construção civil', HardHat],
  ['Comércio e restaurantes', Building2],
  ['Prestadores de serviços', Users],
]

// ==========================================
// PROCESSO DE ATENDIMENTO
// ==========================================

const steps = [
  [
    '01',
    'Você apresenta sua necessidade',
    'Informe a cidade, o ramo de atividade, o número de colaboradores e o serviço desejado.',
  ],
  [
    '02',
    'A FORTIS avalia a operação',
    'A equipe entende o cenário e verifica se será necessária uma visita técnica.',
  ],
  [
    '03',
    'Receba uma proposta personalizada',
    'A proposta considera escopo, prazos e investimento de acordo com sua operação.',
  ],
  [
    '04',
    'Implemente as soluções',
    'O atendimento técnico acontece conforme o serviço e as condições acordadas.',
  ],
]

// ==========================================
// PERGUNTAS FREQUENTES
// ==========================================

const faqs = [
  [
    'Quais empresas a FORTIS atende?',
    'O portfólio contempla pequenas e médias empresas, indústrias, transportadoras, operações logísticas, comércios, restaurantes, construção civil e prestadores de serviços.',
  ],
  [
    'Quais cidades a FORTIS atende?',
    'A base de atendimento é Bebedouro/SP e região. Consulte a equipe para confirmar a disponibilidade na sua cidade.',
  ],
  [
    'Quais treinamentos estão disponíveis?',
    'A FORTIS oferece treinamentos das NRs NR-01, NR-06, NR-10, NR-11, NR-12, NR-18, NR-20, NR-23, NR-33, NR-34 e NR-35, além de operação de empilhadeiras, PEMT, LOTO, brigada de emergência e primeiros socorros.',
  ],
  [
    'A FORTIS elabora PGR e LTCAT?',
    'Sim. Entre os serviços apresentados estão a elaboração e revisão de PGR, LTCAT, PGRTR, inventário de riscos, planos de ação, Ordens de Serviço, POPs e outros documentos de SST.',
  ],
  [
    'A FORTIS oferece exames ocupacionais?',
    'A empresa oferece suporte relacionado à saúde ocupacional, incluindo exames ocupacionais, PCMSO e ASOs, conforme o escopo de atendimento.',
  ],
  [
    'Como funciona a contratação?',
    'A empresa informa sua cidade, atividade, quantidade de colaboradores e necessidade. A FORTIS avalia a demanda e prepara uma proposta com escopo, prazos e investimento.',
  ],
  [
    'É possível solicitar uma visita técnica?',
    'O atendimento presencial contempla visitas técnicas, inspeções em campo, treinamentos práticos, formação de brigada, simulados e levantamentos no local, conforme a proposta.',
  ],
  [
    'Como solicito um orçamento?',
    'Preencha o formulário com os dados da empresa e a necessidade. A solicitação será preparada para envio por e-mail. O WhatsApp poderá ser ativado após confirmação do número oficial.',
  ],
]

// ==========================================
// COMPONENTES REUTILIZÁVEIS
// ==========================================

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.2, 0.7, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

function Brand({ light = false }) {
  return (
    <a
      href="#inicio"
      className={`brand ${light ? 'brand-light' : ''}`}
      aria-label="FORTIS | Soluções em SSMA — início"
    >
      <img
        className="brand-logo"
        src="/fortis-logo.png"
        alt="FORTIS — Soluções em SSMA"
      />
    </a>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span />
      {children}
    </div>
  )
}

// ==========================================
// CABEÇALHO
// ==========================================

function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    ['Sobre', '#sobre'],
    ['Serviços', '#solucoes'],
    ['Treinamentos', '#treinamentos'],
    ['Como funciona', '#processo'],
    ['Contato', '#contato'],
  ]

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />

        <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a className="nav-cta" href="#contato">
            Solicitar orçamento
            <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

// ==========================================
// APLICAÇÃO PRINCIPAL
// ==========================================

function App() {
  const [faq, setFaq] = useState(0)

  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    cidade: '',
    segmento: '',
    colaboradores: '',
    interesse: 'Consultoria e assessoria em SST e SSMA',
    mensagem: '',
  })

  const [prepared, setPrepared] = useState(false)

  const update = (key, value) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }))
  }

  const createMessage = () => `
Olá, FORTIS! Gostaria de solicitar um orçamento.

Responsável: ${form.nome}
Empresa: ${form.empresa}
E-mail: ${form.email}
Telefone: ${form.telefone}
Cidade/UF: ${form.cidade}
Segmento: ${form.segmento}
Colaboradores: ${form.colaboradores}
Serviço: ${form.interesse}
Necessidade: ${form.mensagem}
  `.trim()

  const submit = (e) => {
    e.preventDefault()

    const body = encodeURIComponent(createMessage())

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${body}`,
      '_blank',
      'noopener,noreferrer'
    )

    setPrepared(true)
  }

  return (
    <div className="app-shell">
      <Header />

      <main>
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="hero-image" />
          <div className="hero-grid" />

          <div className="container hero-content">
            <div className="hero-copy">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="eyebrow"
              >
                <span className="eyebrow-line" />
                SEGURANÇA DO TRABALHO • SAÚDE • MEIO AMBIENTE
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1 }}
              >
                SUA EMPRESA
                <br />
                <em>MAIS SEGURA.</em>
                <br />
                SUA OPERAÇÃO
                <br />
                MAIS PREPARADA.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.22 }}
              >
                Consultoria em SSMA, gestão de riscos, documentação e
                treinamentos para empresas que buscam segurança,
                conformidade e eficiência operacional.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 }}
                className="hero-actions"
              >
                <a className="button button-lime" href="#contato">
                  Solicitar orçamento
                  <ArrowUpRight size={18} />
                </a>

                <a className="text-link" href="#solucoes">
                  Conhecer soluções
                  <ArrowDownRight size={17} />
                </a>
              </motion.div>

              <div className="hero-location">
                <MapPin size={15} />
                BEBEDOURO/SP E REGIÃO
              </div>
            </div>

            <div className="hero-aside">
              <div className="hero-index">
                01 <span>/ 05</span>
              </div>

              <div className="hero-aside-rule" />

              <p>
                PREVENÇÃO
                <br />
                COM PROPÓSITO.
              </p>

              <span className="aside-caption">
                Segurança, conformidade e resultados para sua empresa.
              </span>
            </div>
          </div>

          <div className="hero-bottom container">
            <span>
              <span className="pulse-dot" />
              CONSULTORIA EM SSMA
            </span>

            <span>FORTIS — SOLUÇÕES EM SSMA</span>

            <a href="#sobre">
              DESCUBRA A FORTIS
              <ArrowDownRight size={14} />
            </a>
          </div>
        </section>

        {/* AS DEMAIS SEÇÕES DO JSX ORIGINAL DEVEM SEGUIR A MESMA FORMATAÇÃO */}
      </main>
    </div>
  )
}

export default App
