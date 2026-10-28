import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { CTA, CountUp, Label, Reveal, Words, ease } from "./ui.jsx";
import { CNPJ, DEPOIMENTOS, EMPRESAS, PARCELA_12X, PRECO, PRECO_AVISTA, PRECO_DE, SALARIO_PLENO, SALARIO_SUPERVISOR, WHATSAPP_URL } from "../config.js";

const fmt = (n) => Math.round(n).toLocaleString("pt-BR");

/* ---------- Topo ---------- */
export function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <img className="nav-logo" src="/img/logo.svg" alt="Mentor de Logística" width="140" height="46" />
        <CTA variant="ghost">Quero ser promovido</CTA>
      </div>
    </nav>
  );
}

/* ---------- Faixa de autoridade em logística (logo depois do hero) ---------- */
export function Logos() {
  const lista = [...EMPRESAS, ...EMPRESAS];
  return (
    <section className="authority">
      <div className="wrap center">
        <p className="authority-tit">
          <strong>Acelere a tua promoção na logística</strong> com quem foi de assistente a diretor em apenas 10 anos.
        </p>
        <p className="authority-sub">O mesmo profissional que já liderou as operações dessas grandes empresas:</p>
      </div>
      <div className="logos-mask" aria-label="Empresas do currículo">
        <div className="logos-track">
          {lista.map((e, i) => (
            <span className="logo-word" key={i}>
              {e}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Painel 1: identificação ---------- */
const frasesDor = ["Entrega mais que os outros.", "Já viu colega menos competente subir na tua frente.", "Já pensou em trocar de empresa achando que o problema era a chefia. E não era."];

export function Ident() {
  return (
    <section className="panel ident" id="dor">
      <Words as="h2" className="h2" text="Faz o trabalho de dois e na hora da promoção passam outro na tua frente" highlight={[10, 11, 12, 13, 14]} />
      <div className="frases">
        {frasesDor.map((f, i) => (
          <Reveal key={f} delay={0.08 * i} className="frase">
            <span className="frase-n">0{i + 1}</span>
            <p>{f}</p>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="ident-fecho grad">Agora é a tua vez de ser promovido!</p>
      </Reveal>
    </section>
  );
}

/* ---------- Painel 2: provas ---------- */
export function Provas() {
  return (
    <section className="panel provas">
      <div className="center">
        <Words as="h2" className="h2" text="Aplique o método e tenha resultados como esses" highlight={[5, 6, 7]} />
        <Reveal>
          <p className="lead">Funciona para quem aplica. Estes são alguns dos resultados de quem passou pelo método.</p>
        </Reveal>
      </div>
      <div className="provas-grid">
        <Reveal className="prova">
          <span className="chip">Duas promoções em 12 meses</span>
          <p>De analista pleno para analista sênior e especialista.</p>
          <small>Alek O. | Mentorado</small>
        </Reveal>
        <Reveal className="prova" delay={0.1}>
          <span className="chip y">
            De coordenador a gerente: de R$ <CountUp to={5} /> mil para R$ <CountUp to={12} /> mil em 6 meses
          </span>
          <p>Coordenador que virou gerente em seis meses.</p>
          <small>Andre A. | Gerente</small>
        </Reveal>
        <Reveal className="prova" delay={0.2}>
          <span className="chip">
            <CountUp to={6} /> de <CountUp to={6} /> contratações por indicação
          </span>
          <p>Todas as minhas contratações vieram de gente que me conhecia, nunca de processo seletivo. Ninguém indica quem não conhece.</p>
          <small>Carlos Martins | Diretor de logística</small>
        </Reveal>
      </div>
      <div className="cta-row">
        <CTA>Quero ser promovido</CTA>
      </div>
    </section>
  );
}

/* ---------- Texto gigante que acende no scroll ---------- */
function GW({ w, i, n, p }) {
  const a = i / n;
  const o = useTransform(p, [a * 0.7, a * 0.7 + 0.18], [0.12, 1]);
  return (
    <motion.span className="gw" style={{ opacity: o }}>
      {w}
    </motion.span>
  );
}

export function Giant() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const words = "O problema não é a tua técnica. É que as pessoas certas precisam saber o resultado que tu gera, não só as horas que tu trabalha.".split(" ");
  return (
    <section className="giant" ref={ref}>
      <div className="wrap">
        <p>
          {words.map((w, i) => (
            <GW key={i} w={w} i={i} n={words.length} p={scrollYProgress} />
          ))}
        </p>
      </div>
    </section>
  );
}

/* ---------- Painel 3: as 3 travas (caixas numeradas) ---------- */
const travas = [
  ["Resolve em vez de fazer resolver", "Quando alguém te pede algo, tu executa. Não delega, não questiona prazo, não pede recurso. O superior começa a pensar que “É um bom profissional, mas não está pronto para o próximo passo”."],
  ["Fala em atividade, não em resultado", "“Fiz o inventário.” “Rodei o relatório.” “Contratei o frete.” Quem decide a promoção não tem como justificar os seus resultados."],
  ["Ninguém te viu tendo iniciativa e tomando a frente de projetos que realmente têm grande impacto", "Aí a vaga vai para o outro, que já vinha dando pitaco em reunião."],
];

export function Travas() {
  return (
    <section className="panel center">
      <Words as="h2" className="h2" text="Por que ainda não te promoveram? São 3 travas." highlight={[6, 7, 8]} />
      <Reveal>
        <p className="lead">Competência técnica te trouxe até aqui. É ela que te prende aí, porque o profissional indispensável no cargo atual é o mais seguro para ficar e o mais improvável para subir.</p>
      </Reveal>
      <div className="steps">
        {travas.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.1} className="step">
            <span className="step-n">0{i + 1}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- O que é o método (3 passos) ---------- */
const passos = [
  ["Assista", "São 3 a 4 aulas por módulo. Aulas de 5 a 8 minutos cada. Cerca de 20 minutos por módulo. Faça 1 módulo por semana"],
  ["Aplique no trabalho", "A cada módulo tem um exercício de campo para você fazer no seu trabalho, e gerar resultado real na tua carreira."],
  ["Poste o entregável", "Você não está sozinho. Tu posta o que fez no grupo com seus colegas e o Carlos vai ver. Tu assume compromisso público e ganha feedback para continuar avançando."],
];

export function OQueE() {
  return (
    <>
      <section className="giant" style={{ paddingBottom: 0 }}>
        <div className="wrap center">
          <Label>método ponte</Label>
          <Words as="h2" className="h2" text="Ser considerado para a próxima promoção é mais simples do que parece" highlight={[7, 8]} />
        </div>
      </section>
      <section className="panel center">
        <Words as="h2" className="h2" text="O que é o Método PONTE?" highlight={[4]} />
        <Reveal>
          <p className="lead">Feito só para quem é da logística, que leva profissional até o próximo cargo. Dá para assistir tudo em 2 horas, mas o ritmo certo é um módulo por semana e ir aplicando.</p>
        </Reveal>
        <div className="steps">
          {passos.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1} className="step">
              <span className="step-n">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

/* ---------- Painel: para quem é ---------- */
const subareas = ["Logística em CDs", "Planejamento logístico", "Gestão de estoques", "Transportes de ecommerce", "Gestão de Frota Própria", "Comex", "PCP", "Procurement"];

export function ParaQuem() {
  const lista = [...subareas, ...subareas, ...subareas];
  return (
    <section className="panel center">
      <Words as="h2" className="h2" text="Para quem é o Método PONTE?" highlight={[3, 4]} />
      <Reveal>
        <p className="lead">Feito para assistentes, analistas, coordenadores da área de logística, compras, transportes que querem uma promoção em qualquer área do supply chain.</p>
      </Reveal>
      <h3 style={{ font: "600 24px var(--display)", margin: "30px 0 0" }}>Para quem trabalha em:</h3>
      <div className="pills" aria-hidden="true">
        <div className="pills-track">
          {lista.map((e, i) => (
            <span className="pill-i" key={i}>{e}</span>
          ))}
        </div>
        <div className="pills-track rev">
          {[...lista].reverse().map((e, i) => (
            <span className="pill-i" key={i}>{e}</span>
          ))}
        </div>
      </div>
      <div className="inner-card">
        <div>
          <h3 className="grad" style={{ display: "inline-block" }}>Ou profissional de qualquer área da logística ou supply chain</h3>
          <p>Já tenha feito faculdade, MBA e outras certificações e continue no mesmo cargo, ou nunca tenha liderado ninguém.</p>
        </div>
      </div>
      <p className="nao-e">
        Se o que tu procura é <strong>teoria acadêmica de supply chain</strong>, o método PONTE não é pra ti. Aqui é o que se faz no dia a dia da operação.
      </p>
    </section>
  );
}

/* ---------- Contraste ---------- */
const naoE = ["MBA ou pós-graduação", "Curso técnico de WMS ou TMS", "Palestra motivacional", "Coach genérico"];
const eh = ["Comportamento aplicado à tua rotina na logística", "Um exercício de campo por semana", "Pensado por quem foi de assistente a diretor em grandes empresas", "Experiência de quem acelerou a carreira de centenas de profissionais"];

export function Contraste() {
  return (
    <section className="section">
      <div className="wrap">
        <Words as="h2" className="h2" text="Isto aqui não é mais um curso" highlight={[4, 5]} />
        <Reveal>
          <p className="lead" style={{ maxWidth: 780 }}>Se tu já tem anos de experiência na logística, talvez tenha feito alguma faculdade ou até pós-graduação, e vários cursos da área, e ainda assim continua ganhando menos do que acha que merecia, sem conseguir a promoção que acha justa, você não precisa aprender mais técnica, precisa de mudança comportamental direcionada por quem toma decisões de promoção há mais de 20 anos.</p>
        </Reveal>
        <div className="cmp">
          <div className="cmp-col cmp-no">
            <h3>O que o curso NÃO é</h3>
            {naoE.map((a, i) => (
              <motion.p key={a} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease }}>
                <span className="cmp-ic">✕</span>
                <span className="cmp-strike">{a}</span>
              </motion.p>
            ))}
          </div>
          <div className="cmp-col cmp-yes">
            <h3>O que o curso É</h3>
            {eh.map((b, i) => (
              <motion.p key={b} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease }}>
                <span className="cmp-ic">✓</span>
                {b}
              </motion.p>
            ))}
          </div>
        </div>
        <div className="cta-row">
          <CTA>Quero ser promovido</CTA>
        </div>
      </div>
    </section>
  );
}

/* ---------- Depoimentos (só aparece com itens em config.js) ---------- */
export function Depoimentos() {
  if (!DEPOIMENTOS.length) return null;
  return (
    <section className="panel center">
      <Words as="h2" className="h2" text="Quem já foi promovido" highlight={[2]} />
      <div className="provas-grid">
        {DEPOIMENTOS.map((d) => (
          <Reveal key={d.nome} className="prova">
            {d.img && <img src={d.img} alt={`Depoimento de ${d.nome}`} loading="lazy" style={{ borderRadius: 12, marginBottom: 12 }} />}
            <span className="chip y">{d.prazo}</span>
            <small>
              {d.nome} | {d.cargo}, {d.empresa}
            </small>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Etapas (cartões brancos) ---------- */
const etapas = [
  { letra: "P", sem: "Semana 1", nome: "Postura", titulo: "Postura de líder antes do cargo", desc: "Tu descobre por que esforço sozinho não gera promoção e começa a agir como líder antes de ter o cargo." },
  { letra: "O", sem: "Semana 2", nome: "Operação", titulo: "Operação vista de cima", desc: "Tu para de olhar só a tua função e passa a olhar a tua área inteira, do jeito que o teu gestor enxerga." },
  { letra: "N", sem: "Semana 3", nome: "Números", titulo: "Números que a liderança lê", desc: "Tu aprende a falar em impacto e não em atividade, para mostrar o que já faz a quem decide sobre a tua promoção." },
  { letra: "T", sem: "Semana 4", nome: "Transferir", titulo: "Deixar de ser gargalo para poder subir", desc: "Tu transfere conhecimento, prepara quem fica no teu lugar e treina as pessoas ao redor, até virar referência. Quem forma sucessor sobe sem deixar um buraco." },
  { letra: "E", sem: "Semana 5", nome: "Visível", titulo: "Estar visível para quem decide", desc: "Tu faz o gerente do teu gestor passar a saber o teu nome: descobre quem são as pessoas certas e como chegar até elas." },
];

export function Etapas() {
  return (
    <section className="panel">
      <div className="center">
        <Words as="h2" className="h2" text="Tu vai percorrer 5 etapas" highlight={[4, 5]} />
        <Reveal>
          <p className="lead">Cada letra vira um módulo curto, com um exercício na tua rotina de trabalho. Os resultados começam a aparecer desde a primeira.</p>
        </Reveal>
      </div>
      <div className="etapas">
        {etapas.map((e) => (
          <motion.article key={e.letra} className="etapa" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8% 0px" }} transition={{ duration: 0.8, ease }}>
            <div>
              <span className="etapa-pill">{e.sem}</span>
              <h3>{e.titulo}</h3>
              <p>{e.desc}</p>
            </div>
            <div className="tile">
              <span className="tile-letra">{e.letra}</span>
              <span className="tile-t">{e.nome}</span>
              <span className="tile-s">{e.sem}</span>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="cta-row">
        <CTA>Quero ser promovido</CTA>
      </div>
    </section>
  );
}

/* ---------- Material incluído ---------- */
const materiais = [
  ["Diário PONTE", "Workbook central que junta os 5 módulos em um documento só. PDF preenchível e versão Notion."],
  ["Template: Mapa de área", "PDF para usar no teu trabalho."],
  ["Template: Relatório de impacto mensal", "PDF para usar no teu trabalho."],
  ["Template: Script da conversa de carreira", "PDF para usar no teu trabalho."],
  ["Template: Checklist de transferência de conhecimento", "PDF para usar no teu trabalho."],
  ["Template: POP padrão operacional", "PDF para usar no teu trabalho."],
  ["Exercícios de campo semanais", "PDF para usar no teu trabalho."],
  ["Template: Discurso de Elevador de 30 segundos", "PDF para usar no teu trabalho."],
  ["Template: E-mail da conversa de carreira", "PDF para usar no teu trabalho."],
];

export function Material() {
  return (
    <section className="section">
      <div className="wrap">
        <Words as="h2" className="h2" text="Tudo que você vai receber no Método PONTE" highlight={[6, 7]} />
        <Reveal>
          <p className="lead">Materiais complementares + Diário PONTE + templates em PDF</p>
        </Reveal>
        <div className="mat-grid">
          {materiais.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 0.08} className="mat">
              <span className="mat-ic">
                <svg viewBox="0 0 40 40"><rect x="8" y="6" width="24" height="29" rx="3" fill="none" stroke="currentColor" strokeWidth="2.4" /><path d="M14 17l3 3 6-6M14 27h12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Bônus ---------- */
const bonus = [
  ["Aulas ao vivo", "60 minutos de perguntas e respostas, no primeiro sábado de cada mês, durante 6 meses. Leve a situação real da tua operação e saia com resposta de quem já passou por ela. Todas ficam gravadas.", "Aulas", "ao vivo"],
  ["Comunidade no WhatsApp", "6 meses de grupo só de alunos, moderado pelo próprio Carlos e com a participação de ex-mentorados que já foram promovidos. Gente da logística querendo o mesmo que tu, cobrando e comemorando junto.", "Comunidade", "6 meses"],
];

export function Bonus() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="bonus-head">
          <p className="bonus-giant" aria-hidden="true">bônus</p>
          <Label>e ainda leva 2 bônus sem pagar nada a mais</Label>
        </div>
        <div className="bonus-list">
          {bonus.map(([t, d, a, b]) => (
            <Reveal key={t} className="bonus-card">
              <div>
                <img className="b-logo" src="/img/logo.svg" alt="" width="110" height="36" />
                <h3>{t}</h3>
                <span className="badge">Bônus incluso</span>
                <p>{d}</p>
              </div>
              <div className="tile">
                <span className="tile-t" style={{ fontSize: "clamp(34px, 5vw, 54px)" }}>{a}</span>
                <span className="tile-s">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="cta-row">
          <CTA>Quero ser promovido</CTA>
        </div>
      </div>
    </section>
  );
}

/* ---------- Recapitulando + preço ---------- */
const recap = [
  ["Curso Método PONTE (módulo 0 + 5 módulos)", "R$ 497"],
  ["Diário PONTE + templates", "R$ 147"],
  ["Bônus: aulas ao vivo por 6 meses", "R$ 6.000,00"],
  ["Bônus: comunidade no WhatsApp por 6 meses", "R$ 179,40"],
];

export function Oferta() {
  return (
    <section className="section" id="oferta">
      <div className="wrap recap">
        <h2 className="recap-tit">Recapitulando</h2>
        {recap.map(([t, v]) => (
          <div className="recap-linha" key={t}>
            <span>{t}</span>
            <s>{v}</s>
          </div>
        ))}
        <div className="recap-total">
          <span>Valor total:</span>
          <s>R$ {PRECO_DE}</s>
        </div>
        <div className="preco-card">
          <p className="mas">Mas hoje, para ter acesso a tudo isso, o teu investimento não é esse.</p>
          <h3>Garanta a tua vaga AGORA, por apenas</h3>
          <p className="preco-de">12x de</p>
          <p className="preco-n">
            <small>R$</small>
            <span className="g">{PARCELA_12X}</span>
          </p>
          <p className="preco-sub">ou à vista por R$ {PRECO_AVISTA}</p>
          <CTA className="cta-xl">Quero ser promovido</CTA>
          <div className="selos">
            <span>
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 2l8 4v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6z" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
              Compra segura
            </span>
            <span>
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M13 2L4 14h7l-1 8 9-12h-7z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
              Acesso imediato
            </span>
            <span>
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
              7 dias de garantia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Custo de ficar parado (comparativo do gasto) ---------- */
export function Custo() {
  const mes = SALARIO_SUPERVISOR - SALARIO_PLENO;
  const ano = mes * 12;
  return (
    <section className="panel center">
      <Label>a conta que ninguém faz</Label>
      <Words as="h2" className="h2" text="Cada mês parado no cargo errado custa 10 vezes o valor do curso" highlight={[8, 9, 10]} />
      <div className="custo-row">
        <div className="custo-cell">
          <span className="calc-cap">Analista pleno, média</span>
          <span className="calc-num">R$ {fmt(SALARIO_PLENO)}</span>
        </div>
        <span className="calc-op">→</span>
        <div className="custo-cell">
          <span className="calc-cap">Supervisor iniciante, média</span>
          <span className="calc-num">R$ {fmt(SALARIO_SUPERVISOR)}</span>
        </div>
        <span className="calc-op">=</span>
        <div className="custo-cell res">
          <span className="calc-cap">Diferença por ano</span>
          <span className="calc-big">
            R$ <CountUp to={ano} />
          </span>
          <span className="calc-sub">R$ {fmt(mes)} por mês</span>
        </div>
      </div>
      <Reveal>
        <p className="calc-pergunta">Achou caro? Faça a conta, quanto custa você não ser promovido?</p>
      </Reveal>
    </section>
  );
}

/* ---------- Garantia ---------- */
function Selo() {
  const N = 28;
  const pts = Array.from({ length: N * 2 }, (_, i) => {
    const r = i % 2 === 0 ? 100 : 91;
    const a = (Math.PI * i) / N - Math.PI / 2;
    return `${(100 + r * Math.cos(a)).toFixed(1)},${(100 + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
  return (
    <div className="seal">
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <polygon points={pts} fill="#0b7ff0" />
        <defs>
          <path id="circ" d="M100 100 m-74 0 a74 74 0 1 1 148 0 a74 74 0 1 1 -148 0" />
        </defs>
        <text fill="#fff" fontFamily="Outfit Variable, sans-serif" fontWeight="700" fontSize="11" letterSpacing="2.4">
          <textPath href="#circ">GARANTIA INCONDICIONAL · 100% DE VOLTA · GARANTIA INCONDICIONAL · 100% DE VOLTA ·</textPath>
        </text>
      </svg>
      <div className="seal-n">
        <b>7</b>
        <span>DIAS</span>
      </div>
    </div>
  );
}

export function Garantia() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="garantia-card">
          <Selo />
          <div>
            <h2>Tu não corre risco nenhum</h2>
            <p>Assista tudo, aplique o primeiro exercício de campo. Se não encontrar nada de diferente de tudo que tu já tentou para ser promovido, então, é só pedir o reembolso automático na plataforma, não precisa falar com ninguém.</p>
            <p className="forte">100% do teu dinheiro de volta, sem burocracia.</p>
            <p>O método não garante sua promoção, mas te prepara para ser a melhor opção para quando abrir a próxima vaga.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Criador ---------- */
const onde = [
  ["/img/carlos-armazem.webp", "Diretor de Supply Chain no Walmart Brasil"],
  ["/img/carlos-palco.webp", "Liderou um time de 930 pessoas na transformação digital do supply chain"],
  ["/img/quadro-promocao.webp", "Assinou a promoção de mais de 300 profissionais, e dezenas para a primeira liderança"],
  ["/img/premio-inbrasc.webp", "Prêmio INBRASC 2025 e Prêmio NSTech 2026", "50% 26%"],
];

export function Criador() {
  const lista = [...EMPRESAS];
  return (
    <section className="panel center">
      <Label>criador</Label>
      <Words as="h2" className="h2" text="Quem está por trás do Método PONTE" highlight={[4, 5]} />
      <div className="criador-top">
        <figure className="criador-foto">
          <img src="/img/carlos-bio.webp" alt="Carlos Martins, diretor de logística" loading="lazy" width="1000" height="1000" />
        </figure>
        <div>
          <h3 className="criador-nome">Carlos Martins</h3>
          <p className="quote-line">
            <span>“Eu sou tímido.”</span> <span>“Não quero ser puxa-saco.”</span>
          </p>
          <p>Eu também não. Por isso mesmo, tu não precisa virar outra pessoa nem aparecer em tudo que é reunião.</p>
          <p>Aos 18 anos, em Porto Alegre, eu era um estagiário de logística que se perguntava se um cara introvertido ia ter vez no meio de tanto profissional mais eloquente. Cheguei a diretor no Walmart Brasil porque aprendi a transformar resultado em visibilidade, sem fingir que sou outro.</p>
          <p>Hoje sou diretor de logística em atividade. E fui, antes de tudo, um cara tímido que descobriu que o resultado só vira promoção quando alguém enxerga.</p>
        </div>
      </div>
      <h3 className="onde-tit">Onde ele já esteve</h3>
      <div className="onde-grid">
        {onde.map(([img, t, pos]) => (
          <Reveal key={t} className="onde">
            <img src={img} alt="" loading="lazy" style={pos ? { objectPosition: pos } : undefined} />
            <p>{t}</p>
          </Reveal>
        ))}
      </div>
      <div className="curric">
        <small>Estão no meu currículo</small>
        <div>
          {lista.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faq = [
  ["Quanto tempo preciso por semana?", "Cerca de 20 minutos de vídeo por módulo, mais um exercício de campo aplicado na tua rotina. O curso inteiro tem cerca de 2 horas de aula."],
  ["O investimento cabe no meu salário?", "É uma fração de um mês de salário. Um exemplo: a diferença média entre analista pleno e supervisor iniciante é de R$ 3.000 por mês, então cada mês parado custa 10 vezes o valor do curso."],
  ["Eu já tenho MBA. Serve?", "Serve justamente por isso. MBA e certificação resolvem conteúdo técnico. O que trava a promoção do profissional é comportamento: como tu delega, reporta e aparece."],
  ["Minha empresa não promove. Adianta?", "O curso não muda a política da tua empresa. Muda o que tu consegue mostrar. Se o teto lá for real, o teu Portfólio PONTE e o teu Relatório de Impacto valem em qualquer processo seletivo."],
  ["Sou tímido. Funciona para mim?", "O método nasceu de uma pessoa tímida. Exposição aqui não é falar mais alto, é escolher as interações da semana que constroem a tua imagem."],
  ["Estou desempregado. Faz sentido?", "Os exercícios de campo funcionam no teu ambiente de trabalho, tu pode fazer e estar melhor preparado para se destacar quando entrar na próxima empresa."],
  ["Trabalho em uma empresa pequena. Serve pra mim?", "Serve em qualquer tamanho de empresa onde tu vê que tem espaço para crescer, em qualquer ramo da logística."],
  ["Como e quando tenho acesso?", "Logo após a confirmação do pagamento, o acesso chega no teu e-mail."],
  ["E se eu não gostar?", "Tu tem 7 dias de garantia. Assista tudo, aplique o primeiro exercício de campo. Se não encontrar nada de diferente de tudo que tu já tentou para ser promovido, então, é só pedir o reembolso automático na plataforma, não precisa falar com ninguém."],
];

export function FAQ() {
  const [aberto, setAberto] = useState(0);
  return (
    <section className="section">
      <div className="wrap narrow">
        <Label>faq</Label>
        <Words as="h2" className="h2" text="Dúvidas? Temos as respostas" highlight={[2, 3]} />
        <div className="faq-list">
          {faq.map(([q, a], i) => {
            const on = aberto === i;
            return (
              <div className={on ? "faq-item on" : "faq-item"} key={q}>
                <button className="faq-q" onClick={() => setAberto(on ? -1 : i)} aria-expanded={on}>
                  <span>{q}</span>
                  <motion.span className="faq-plus" animate={{ rotate: on ? 45 : 0 }}>
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div className="faq-a" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease }}>
                      <p>{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Fechamento ---------- */
export function Fechamento() {
  return (
    <section className="panel center fecha">
      <Words as="h2" className="h2" text="Daqui a 5 semanas tu vai estar em um de dois lugares" highlight={[8, 9, 10, 11]} />
      <Reveal>
        <p className="big">No mesmo ponto de hoje, entregando por dois e esperando que alguém note. Ou com um Portfólio PONTE na mão, uma conversa de carreira feita e o teu nome na cabeça de quem decide.</p>
      </Reveal>
      <Reveal delay={0.1}>
        <p>Eu não prometo promoção, porque quem promove é a tua empresa. Prometo que as pessoas certas vão saber o resultado que tu gera.</p>
      </Reveal>
      <div className="cta-row">
        <CTA className="cta-xl">Quero ser promovido</CTA>
        <p className="micro">Acesso imediato · 7 dias de garantia</p>
      </div>
    </section>
  );
}

export function Whats() {
  return (
    <section className="section">
      <div className="wrap whats-in">
        <h2>Dúvidas? Chame minha equipe no WhatsApp</h2>
        <CTA href={WHATSAPP_URL} variant="ghost">
          Ir para o WhatsApp
        </CTA>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <img src="/img/logo.svg" alt="Mentor de Logística" width="130" height="43" />
        <p>
          @carlosermartins · <a href="#">Termos de uso</a> · <a href="#">Política de privacidade</a>
        </p>
        <p>{CNPJ ? `CNPJ ${CNPJ} · ` : ""}Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
