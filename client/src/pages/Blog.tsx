import { ArrowUpRight, BookOpen, MapPin } from "lucide-react";

const articles = [
  {
    title: "Como escolher entre Porto Alegre e Florianópolis para morar",
    description:
      "Compare rotina, localização e estilo de vida antes de decidir onde encontrar seu próximo endereço.",
    tag: "Localização",
  },
  {
    title: "O que observar antes de visitar um imóvel",
    description:
      "Uma lista prática para organizar a visita, fazer perguntas importantes e tomar uma decisão com mais clareza.",
    tag: "Compra",
  },
  {
    title: "Por que uma boa conversa muda a escolha do imóvel",
    description:
      "Entenda como alinhar necessidades, orçamento e objetivos torna a jornada imobiliária mais tranquila.",
    tag: "Orientação",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#f6fbfa] text-[#12343a]">
      <header className="border-b border-[#d8ebe7] bg-white/80">
        <div className="site-shell flex items-center justify-between py-5">
          <a
            href="/"
            className="brand-lockup"
            aria-label="Poa Floripa Imóveis - início"
          >
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
            </span>
            <span>
              <strong>Poa Floripa</strong>
              <small>IMÓVEIS</small>
            </span>
          </a>
          <a href="/" className="nav-cta">
            Voltar ao início <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <main>
        <section className="site-shell section-pad">
          <div className="eyebrow">
            <BookOpen size={14} />
            <span>Conteúdos Poa Floripa</span>
          </div>
          <h1 className="section-title mt-5 max-w-3xl">
            Decisões imobiliárias ficam mais leves quando você tem clareza.
          </h1>
          <p className="section-copy mt-5 max-w-2xl">
            Informações práticas para quem está pensando em comprar, vender ou
            encontrar um imóvel em Porto Alegre, Florianópolis e no litoral de
            Santa Catarina.
          </p>

          <ul
            className="mt-12 grid gap-5 lg:grid-cols-3"
            aria-label="Conteúdos em destaque"
          >
            {articles.map(article => (
              <li
                key={article.title}
                className="focus-card flex min-h-0 flex-col rounded-2xl border border-[#d8ebe7] bg-white p-7 shadow-sm"
              >
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#2c9b91]">
                  {article.tag}
                </span>
                <h2 className="mt-5 text-2xl font-semibold leading-tight text-[#12343a]">
                  {article.title}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#5f777b]">
                  {article.description}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#17614d]">
                  Leia a orientação <ArrowUpRight size={16} />
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-2xl bg-[#0b4c57] p-7 text-white sm:p-9">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-[#61c9bb]" size={22} />
              <div>
                <h2 className="text-2xl font-semibold">
                  Quer conversar sobre o seu momento?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#d8efeb]">
                  Conte o que você está buscando e receba uma orientação
                  próxima, sem pressa e sem promessas que não podemos cumprir.
                </p>
                <a
                  href="https://wa.me/5551985238208?text=Ol%C3%A1%2C%20vim%20pelos%20conte%C3%BAdos%20da%20Poa%20Floripa%20Im%C3%B3veis."
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary button-primary-light mt-6"
                >
                  Falar no WhatsApp <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
