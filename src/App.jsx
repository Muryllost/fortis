import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, Check, ChevronDown, ClipboardCheck, Factory,
  HardHat, Leaf, Menu, ShieldCheck, Stethoscope, X, MessageCircle, FileCheck2,
  Activity, Building2, GraduationCap, Search, Siren, ClipboardList, Users,
  BriefcaseBusiness, Mail, MapPin, Phone, BadgeCheck, Flame, HeartPulse
} from 'lucide-react'

const WHATSAPP_NUMBER = '5517991231211'
const EMAIL = 'contato@fortissma.com'
const INSTAGRAM = 'https://www.instagram.com/fortis.ssma/'

const services = [
  { n: '01', icon: ShieldCheck, title: 'Consultoria e assessoria em SST e SSMA', desc: 'Diagnóstico da operação, definição de prioridades, planos de ação e acompanhamento das rotinas de segurança.', tags: ['Diagnóstico', 'Prevenção', 'Acompanhamento'] },
  { n: '02', icon: Activity, title: 'Gestão de riscos ocupacionais', desc: 'Identificação de perigos, avaliação de riscos e medidas de controle para máquinas, equipamentos e atividades críticas.', tags: ['Inventário de riscos', 'LOTO', 'Planos de ação'] },
  { n: '03', icon: Search, title: 'Inspeções e auditorias', desc: 'Verificações em campo e análise documental de proteções de máquinas, EPIs, EPCs, procedimentos e registros.', tags: ['Inspeção em campo', 'Relatório fotográfico', 'Auditoria'] },
  { n: '04', icon: FileCheck2, title: 'Documentação de SST', desc: 'Elaboração e revisão de documentos e registros conforme a atividade, o porte e as necessidades da operação.', tags: ['PGR', 'PGRTR', 'POPs e Ordens de Serviço'] },
  { n: '05', icon: HeartPulse, title: 'Saúde ocupacional', desc: 'Apoio na elaboração do PCMSO com médico responsável, organização de exames, controle de vencimentos e gestão de ASOs.', tags: ['PCMSO', 'Exames ocupacionais', 'ASOs'] },
  { n: '06', icon: GraduationCap, title: 'Treinamentos e integração', desc: 'Capacitação de equipes operacionais e lideranças, com conteúdo adaptado à atividade e prática quando aplicável.', tags: ['Normas Regulamentadoras', 'Integração', 'Treinamentos personalizados'] },
  { n: '07', icon: Flame, title: 'Prevenção de incêndios e emergências', desc: 'Apoio à regularização de AVCB e CLCB, brigadas, Plano de Atendimento a Emergências e simulados.', tags: ['AVCB e CLCB', 'Brigada', 'PAE e simulados'] },
  { n: '08', icon: ClipboardList, title: 'DDS e comunicação de segurança', desc: 'Desenvolvimento de diálogos diários, campanhas, materiais de integração, orientações e sinalização interna.', tags: ['DDS', 'Campanhas', 'Integração'] },
  { n: '09', icon: Leaf, title: 'Gestão ambiental', desc: 'Orientação para identificar impactos e organizar rotinas e controles ambientais conforme as necessidades da operação.', tags: ['Impactos ambientais', 'Controles', 'Boas práticas'] },
  { n: '10', icon: Siren, title: 'Investigação de acidentes e incidentes', desc: 'Levantamento das circunstâncias, análise das causas e definição de ações para reduzir a chance de recorrência.', tags: ['Análise de causas', 'Ações corretivas', 'Prevenção'] },
]

const trainings = [
  ['NR-01', 'Integração de segurança e riscos ocupacionais'],
  ['NR-06', 'Uso, conservação e responsabilidades sobre EPIs'],
  ['NR-10', 'Segurança em serviços com eletricidade'],
  ['NR-11', 'Operação segura de empilhadeiras'],
  ['NR-12', 'Segurança em máquinas e equipamentos'],
  ['NR-20', 'Inflamáveis e combustíveis'],
  ['NR-23', 'Prevenção e proteção contra incêndios'],
  ['NR-33', 'Segurança em espaços confinados'],
  ['NR-35', 'Segurança no trabalho em altura'],
]
const extras = ['LOTO', 'Brigada de emergência', 'Primeiros socorros', 'Uso de extintores', 'Treinamentos personalizados']
const segments = [
  ['Indústrias', Factory], ['Transportadoras e logística', BriefcaseBusiness], ['Construção civil', HardHat],
  ['Comércio e restaurantes', Building2], ['Prestadores de serviços', Users]
]
const steps = [
  ['01', 'Você apresenta sua necessidade', 'Informe a cidade, o ramo de atividade, o número de colaboradores e o serviço desejado.'],
  ['02', 'A FORTIS avalia a operação', 'A equipe entende o cenário e verifica se será necessária uma visita técnica.'],
  ['03', 'Receba uma proposta personalizada', 'A proposta considera escopo, prazos e investimento de acordo com sua operação.'],
  ['04', 'Implemente as soluções', 'O atendimento técnico acontece conforme o serviço e as condições acordadas.'],
]
const faqs = [
  ['Quais empresas a FORTIS atende?', 'O portfólio contempla pequenas e médias empresas, indústrias, transportadoras, operações logísticas, comércios, restaurantes, construção civil e prestadores de serviços.'],
  ['Quais cidades a FORTIS atende?', 'A base de atendimento é Bebedouro/SP e região. Consulte a equipe para confirmar a disponibilidade na sua cidade.'],
  ['Quais treinamentos estão disponíveis?', 'O portfólio apresenta NR-01, NR-06, NR-10, NR-11, NR-12, NR-20, NR-23, NR-33 e NR-35, além de LOTO, brigada, primeiros socorros, uso de extintores e treinamentos personalizados.'],
  ['A FORTIS elabora documentos como PGR e PGRTR?', 'O escopo apresentado inclui elaboração e revisão de PGR, PGRTR, inventário de riscos, planos de ação, Ordens de Serviço, POPs, fichas de EPI e outros documentos de SST.'],
  ['Como funciona a contratação?', 'A empresa informa sua cidade, atividade, quantidade de colaboradores e necessidade. A FORTIS avalia a demanda e prepara uma proposta com escopo, prazos e investimento.'],
  ['É possível solicitar uma visita técnica?', 'O atendimento presencial contempla visitas técnicas, inspeções em campo, treinamentos práticos, formação de brigada, simulados e levantamentos no local, conforme a proposta.'],
  ['Como solicito um orçamento?', 'Preencha o formulário com os dados da empresa e a necessidade. A solicitação será preparada para envio por e-mail. O WhatsApp poderá ser ativado após confirmação do número oficial.'],
]

function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .6, delay, ease: [.2, .7, .2, 1] }}>{children}</motion.div>
}
function Brand({ light = false }) {
  return <a href="#inicio" className={`brand ${light ? 'brand-light' : ''}`} aria-label="FORTIS | Soluções em SSMA — início">
    <img className="brand-logo" src="/fortis-logo.png" alt="FORTIS — Soluções em SSMA" />
  </a>
}
function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Sobre', '#sobre'], ['Serviços', '#solucoes'], ['Treinamentos', '#treinamentos'], ['Como funciona', '#processo'], ['Contato', '#contato']]
  return <header className="site-header"><div className="container nav-wrap"><Brand/><nav className={`nav-links ${open ? 'nav-open' : ''}`}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contato">Solicitar orçamento <ArrowUpRight size={15}/></a></nav><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X/> : <Menu/>}</button></div></header>
}
function SectionLabel({ children }) { return <div className="section-label"><span/>{children}</div> }
function App() {
  const [faq, setFaq] = useState(0)
  const [form, setForm] = useState({ nome: '', empresa: '', email: '', telefone: '', cidade: '', segmento: '', colaboradores: '', interesse: 'Consultoria e assessoria em SST e SSMA', mensagem: '' })
  const [prepared, setPrepared] = useState(false)
  const update = (key, value) => setForm(current => ({ ...current, [key]: value }))
  const createMessage = () => `Olá, FORTIS! Gostaria de solicitar um orçamento.\n\nResponsável: ${form.nome}\nEmpresa: ${form.empresa}\nE-mail: ${form.email}\nTelefone: ${form.telefone}\nCidade/UF: ${form.cidade}\nSegmento: ${form.segmento}\nColaboradores: ${form.colaboradores}\nServiço: ${form.interesse}\nNecessidade: ${form.mensagem}`
  const submit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(createMessage())
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${body}`, '_blank', 'noopener,noreferrer')
    setPrepared(true)
  }
  return <div className="app-shell">
    <Header/>
    <main>
      <section id="inicio" className="hero"><div className="hero-image"/><div className="hero-grid"/><div className="container hero-content"><div className="hero-copy">
        <motion.div initial={{opacity:0,x:-16}} animate={{opacity:1,x:0}} transition={{duration:.6}} className="eyebrow"><span className="eyebrow-line"/> SEGURANÇA DO TRABALHO • SAÚDE • MEIO AMBIENTE</motion.div>
        <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.1}}>SUA EMPRESA<br/><em>MAIS SEGURA.</em><br/>SUA OPERAÇÃO<br/>MAIS PREPARADA.</motion.h1>
        <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.22}}>Consultoria em SSMA, gestão de riscos, documentação e treinamentos para empresas que buscam segurança, conformidade e eficiência operacional.</motion.p>
        <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.55,delay:.35}} className="hero-actions"><a className="button button-lime" href="#contato">Solicitar orçamento <ArrowUpRight size={18}/></a><a className="text-link" href="#solucoes">Conhecer soluções <ArrowDownRight size={17}/></a></motion.div>
        <div className="hero-location"><MapPin size={15}/> BEBEDOURO/SP E REGIÃO</div>
      </div><div className="hero-aside"><div className="hero-index">01 <span>/ 05</span></div><div className="hero-aside-rule"/><p>PREVENÇÃO<br/>COM PROPÓSITO.</p><span className="aside-caption">Segurança, conformidade e resultados para sua empresa.</span></div></div><div className="hero-bottom container"><span><span className="pulse-dot"/> CONSULTORIA EM SSMA</span><span>FORTIS — SOLUÇÕES EM SSMA</span><a href="#sobre">DESCUBRA A FORTIS <ArrowDownRight size={14}/></a></div></section>

      <section className="trust-strip"><div className="container trust-inner"><span>ATUAÇÃO PARA DIFERENTES OPERAÇÕES</span><div><Factory/><b>INDÚSTRIAS</b></div><div><BriefcaseBusiness/><b>LOGÍSTICA</b></div><div><HardHat/><b>CONSTRUÇÃO</b></div><div><Building2/><b>COMÉRCIO</b></div></div></section>

      <section id="sobre" className="intro-section section-pad"><div className="container intro-grid"><Reveal><SectionLabel>01 — QUEM SOMOS</SectionLabel><h2>Segurança, saúde e meio ambiente.<br/><span>Na realidade da sua operação.</span></h2></Reveal><Reveal delay={.12} className="intro-text"><p className="lead">Prevenção precisa fazer parte das decisões — não apenas dos documentos.</p><p>A FORTIS é uma consultoria de Segurança do Trabalho, Saúde Ocupacional e Meio Ambiente com atuação em Bebedouro/SP e região. Ajudamos empresas a identificar riscos, organizar a documentação de SST e capacitar suas equipes. O atendimento é definido de acordo com a atividade, o porte e as necessidades de cada operação.</p><a href="#contato" className="arrow-link">Converse com a FORTIS <ArrowUpRight size={17}/></a></Reveal></div>
        <div className="container pillars-grid"><div className="pillar"><ShieldCheck/><div><b>SEGURANÇA</b><span>Identificação e controle de riscos ocupacionais.</span></div></div><div className="pillar"><HeartPulse/><div><b>SAÚDE</b><span>Apoio à organização da saúde ocupacional.</span></div></div><div className="pillar"><Leaf/><div><b>MEIO AMBIENTE</b><span>Rotinas e controles ambientais adequados à operação.</span></div></div></div>
        <div className="container intro-visual"><div className="intro-photo"><div className="photo-caption"><span>GESTÃO EM SSMA</span><b>Prevenir é agir antes.</b></div></div><div className="intro-note"><span className="note-symbol">F.</span><p>Uma abordagem que conecta pessoas, processos e responsabilidade.</p><span className="note-index">BEBEDOURO / SP</span></div></div>
      </section>

      <section id="solucoes" className="services-section section-pad"><div className="container"><div className="section-heading"><Reveal><SectionLabel>02 — SERVIÇOS E ESPECIALIDADES</SectionLabel><h2>Soluções técnicas para<br/><span>uma operação mais segura.</span></h2></Reveal><Reveal delay={.12}><p>Da avaliação de riscos à organização documental e capacitação das equipes, as frentes de atuação são definidas conforme a necessidade de cada empresa.</p></Reveal></div>
        <div className="service-grid service-grid-v2">
  {services.map((s,i)=>{
    const Icon=s.icon;
    return (
      <Reveal delay={(i%3)*.06} key={s.n}>
        <article className="service-card">
          <div className="card-top">
            <span>{s.n} / 10</span>
            <Icon size={23}/>
          </div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <div className="tag-row">
            {s.tags.map(t=><span key={t}>{t}</span>)}
          </div>
          <a href="#contato" aria-label={`Solicitar orçamento para ${s.title}`}>
            <ArrowUpRight/>
          </a>
        </article>
      </Reveal>
    );
  })}
</div>
      </div></section>

      <section className="statement-section"><div className="statement-bg"/><div className="container statement-content"><Reveal><SectionLabel>PREVENÇÃO É ESTRATÉGIA</SectionLabel><h2>O risco não espera.<br/><span>A prevenção também não.</span></h2><p>Transforme segurança em parte da rotina, das decisões e do crescimento da sua operação.</p><a className="button button-lime" href="#contato">Solicitar uma avaliação <ArrowUpRight size={18}/></a></Reveal><div className="statement-stamp"><ShieldCheck size={48}/><span>PROTEGER<br/>É AVANÇAR</span></div></div></section>

      <section id="treinamentos" className="training-section section-pad"><div className="container"><div className="section-heading"><Reveal><SectionLabel>03 — TREINAMENTOS E CAPACITAÇÃO</SectionLabel><h2>Conhecimento que<br/><span>fortalece a prevenção.</span></h2></Reveal><Reveal delay={.12}><p>Capacitação para equipes operacionais e lideranças, com conteúdos adaptados à atividade e prática supervisionada quando aplicável.</p></Reveal></div>
        <div className="training-layout"><div className="training-intro"><div className="training-symbol"><GraduationCap size={34}/></div><h3>Treinamentos apresentados no portfólio</h3><p>Consulte a equipe para definir o treinamento adequado à atividade, aos riscos e às necessidades da sua operação.</p><a className="arrow-link" href="#contato">Solicitar treinamento <ArrowUpRight size={17}/></a></div><div className="training-grid">{trainings.map(([nr,desc])=><article className="training-card" key={nr}><span>{nr}</span><p>{desc}</p><a href="#contato" aria-label={`Solicitar treinamento ${nr}`}><ArrowUpRight size={16}/></a></article>)}</div></div>
        <div className="extra-training"><span>OUTRAS CAPACITAÇÕES</span><div>{extras.map(x=><b key={x}>{x}</b>)}</div></div>
      </div></section>

      <section className="credibility-section section-pad"><div className="container credibility-grid"><Reveal><SectionLabel>04 — EXPERIÊNCIA TÉCNICA</SectionLabel><h2>Conhecimento aplicado<br/><span>ao ambiente de trabalho.</span></h2><p className="process-lead">A experiência apresentada pela equipe contempla diferentes contextos operacionais e atividades críticas.</p></Reveal><div className="credibility-list">{[['Ambientes industriais','Vivência em operações e rotinas de segurança.'],['Gestão de riscos e inspeções','Identificação de perigos, auditorias e acompanhamento de ações.'],['Investigação e prevenção','Análise de acidentes e incidentes e definição de medidas preventivas.'],['Capacitação e emergências','Treinamentos, brigadas, simulados, CIPA e LOTO.']].map(([title,desc],i)=><Reveal key={title} delay={i*.06}><div className="credibility-item"><BadgeCheck/><div><b>{title}</b><span>{desc}</span></div></div></Reveal>)}</div></div><div className="container credibility-note"><span>COMPROMISSO COM A TRANSPARÊNCIA</span><p>Qualificações, registros profissionais, certificações, indicadores e cases serão apresentados após validação e autorização da empresa.</p></div></section>

      <section className="audience-section audience-v2"><div className="container"><div className="section-heading"><Reveal><SectionLabel>05 — SEGMENTOS ATENDIDOS</SectionLabel><h2>Entendemos diferentes<br/><span>realidades de negócio.</span></h2></Reveal><Reveal delay={.1}><p>O portfólio contempla empresas de diferentes portes e atividades que precisam organizar a prevenção e a segurança ocupacional.</p></Reveal></div><div className="segment-grid">{segments.map(([name,Icon])=><div className="segment-card" key={name}><Icon/><b>{name}</b><ArrowUpRight size={17}/></div>)}</div></div></section>

      <section id="processo" className="process-section section-pad"><div className="container process-grid"><Reveal><SectionLabel>06 — COMO FUNCIONA</SectionLabel><h2>Da necessidade à<br/><span>proposta personalizada.</span></h2><p className="process-lead">O primeiro passo é entender o cenário da empresa. A partir disso, a FORTIS avalia o escopo e os próximos passos.</p><a className="arrow-link" href="#contato">Solicitar orçamento <ArrowUpRight size={17}/></a></Reveal><div className="process-steps">{steps.map(([n,t,d],i)=><Reveal key={n} delay={i*.08}><div className="process-step"><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><Check size={17}/></div></Reveal>)}</div></div></section>

      <section className="faq-section section-pad"><div className="container faq-grid"><Reveal><SectionLabel>07 — DÚVIDAS FREQUENTES</SectionLabel><h2>Antes de avançar,<br/><span>vamos esclarecer.</span></h2><p>Não encontrou sua dúvida? Envie uma solicitação para a equipe.</p><a className="arrow-link" href="#contato">Fale com a FORTIS <ArrowUpRight size={17}/></a></Reveal><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${faq===i?'faq-active':''}`} key={q}><button onClick={()=>setFaq(faq===i?-1:i)} aria-expanded={faq===i}><span>{q}</span><ChevronDown size={18}/></button>{faq===i&&<motion.p initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}}>{a}</motion.p>}</div>)}</div></div></section>

      <section id="contato" className="contact-section section-pad"><div className="container contact-grid"><Reveal><SectionLabel>08 — SOLICITE UM ORÇAMENTO</SectionLabel><h2>Conte o que sua<br/><span>empresa precisa.</span></h2><p>Informe sua cidade, atividade, quantidade de colaboradores e o serviço desejado. A FORTIS avalia a demanda e prepara uma proposta de acordo com sua operação.</p><div className="contact-direct"><Mail/><div><span>E-MAIL COMERCIAL</span><b>{EMAIL}</b></div><a href={`mailto:${EMAIL}`} aria-label="Enviar e-mail"><ArrowUpRight/></a></div><div className="contact-location"><span>BASE DE ATENDIMENTO</span><b>Bebedouro — SP e região</b></div><div className="contact-channels"><a className="contact-channel" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle/><span><small>WHATSAPP COMERCIAL</small><b>(17) 99123-1211</b></span><ArrowUpRight/></a><a className="contact-channel" href={INSTAGRAM} target="_blank" rel="noreferrer"><Activity/><span><small>INSTAGRAM</small><b>@Fortis.SSMA</b></span><ArrowUpRight/></a></div></Reveal>
        <Reveal delay={.12}><form className="contact-form" onSubmit={submit}><div className="form-head"><span>DADOS PARA SUA PROPOSTA</span><span>FORTIS / ORÇAMENTO</span></div><div className="form-two"><label>Seu nome<input required value={form.nome} onChange={e=>update('nome',e.target.value)} placeholder="Nome do responsável"/></label><label>Empresa<input required value={form.empresa} onChange={e=>update('empresa',e.target.value)} placeholder="Nome da empresa"/></label></div><div className="form-two"><label>E-mail<input required type="email" value={form.email} onChange={e=>update('email',e.target.value)} placeholder="voce@empresa.com"/></label><label>Telefone<input value={form.telefone} onChange={e=>update('telefone',e.target.value)} placeholder="(00) 00000-0000"/></label></div><div className="form-two"><label>Cidade / Estado<input required value={form.cidade} onChange={e=>update('cidade',e.target.value)} placeholder="Ex.: Bebedouro / SP"/></label><label>Quantidade de colaboradores<select required value={form.colaboradores} onChange={e=>update('colaboradores',e.target.value)}><option value="">Selecione</option><option>1 a 10</option><option>11 a 20</option><option>21 a 50</option><option>51 a 100</option><option>101 a 200</option><option>Mais de 200</option></select></label></div><label>Segmento de atuação<select required value={form.segmento} onChange={e=>update('segmento',e.target.value)}><option value="">Selecione o segmento</option><option>Indústria</option><option>Transporte e logística</option><option>Construção civil</option><option>Comércio</option><option>Restaurante</option><option>Prestação de serviços</option><option>Outro</option></select></label><label>Serviço desejado<select value={form.interesse} onChange={e=>update('interesse',e.target.value)}>{services.map(s=><option key={s.n}>{s.title}</option>)}<option>Treinamentos e NRs</option><option>Outro / preciso de orientação</option></select></label><label>Conte um pouco sobre sua necessidade<textarea rows="3" value={form.mensagem} onChange={e=>update('mensagem',e.target.value)} placeholder="Descreva brevemente o que sua empresa precisa..."/></label><button className="button button-lime form-submit" type="submit">Preparar solicitação <ArrowUpRight size={18}/></button>{prepared&&<p className="form-success">Sua solicitação foi preparada. Confira a mensagem e envie pelo WhatsApp para concluir o pedido de orçamento.</p>}<small className="form-privacy">Seus dados serão incluídos na mensagem do WhatsApp. Revise as informações antes de enviar.</small></form></Reveal>
      </div></section>
    </main>
    <a className="floating-whatsapp" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="Conversar com a FORTIS pelo WhatsApp"><MessageCircle size={19}/> Falar com a FORTIS</a>
    <footer className="footer"><div className="container footer-main"><div><Brand light/><p>Segurança do Trabalho, Saúde Ocupacional e Meio Ambiente.<br/>Soluções para fortalecer a prevenção nas empresas.</p></div><div className="footer-links"><span>NAVEGAÇÃO</span><a href="#sobre">Sobre a FORTIS</a><a href="#solucoes">Serviços</a><a href="#treinamentos">Treinamentos</a><a href="#processo">Como funciona</a></div><div className="footer-links"><span>CONTATO</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>Bebedouro — SP e região</span><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">WhatsApp: (17) 99123-1211</a><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram: @Fortis.SSMA</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} FORTIS | Soluções em SSMA. Todos os direitos reservados.</span><span>SEGURANÇA • CONFORMIDADE • PREVENÇÃO</span></div></footer>
  </div>
}
export default App
