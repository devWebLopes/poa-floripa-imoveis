import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Check,
  Compass,
  Instagram,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Waves,
  X,
} from "lucide-react";

const phoneDisplay = "(51) 98523-8208";
const phoneHref = "tel:+5551985238208";
const whatsappHref =
  "https://wa.me/5551985238208?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Poa%20Floripa%20Im%C3%B3veis.";

const faqs = [
  {
    question: "Em quais regiões a Poa Floripa Imóveis atua?",
    answer:
      "Atuamos em Porto Alegre, Florianópolis e no litoral de Santa Catarina, com atendimento próximo e orientação em cada etapa.",
  },
  {
    question: "Posso falar com a equipe pelo WhatsApp?",
    answer:
      "Sim. Você pode chamar no WhatsApp pelo número (51) 98523-8208 e contar o que está buscando.",
  },
  {
    question: "A Poa Floripa Imóveis atende quem quer comprar e vender?",
    answer:
      "Sim. Conversamos sobre o seu objetivo para entender o momento e orientar a próxima decisão com clareza.",
  },
];

function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="whatsapp-logo">
      <path
        fill="currentColor"
        d="M16.02 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.1 28.8l6.57-1.82a12.75 12.75 0 0 0 6.35 1.68h.01c7.05 0 12.79-5.74 12.79-12.8S23.08 3.2 16.02 3.2Zm0 23.34h-.01a10.55 10.55 0 0 1-5.38-1.47l-.38-.22-3.9 1.08 1.04-3.8-.24-.39a10.6 10.6 0 1 1 8.87 4.8Zm5.81-7.93c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.33-.84 1.05-1.03 1.27-.19.22-.38.25-.7.08-.32-.16-1.35-.5-2.57-1.6-.95-.84-1.6-1.88-1.79-2.2-.19-.33-.02-.5.14-.66.14-.14.32-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.79-1.02-2.45-.27-.64-.55-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71 0 1.6 1.17 3.15 1.33 3.37.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.87.69.79.25 1.5.22 2.06.13.63-.09 1.9-.78 2.17-1.53.27-.76.27-1.41.19-1.55-.08-.14-.3-.22-.62-.38Z"
      />
    </svg>
  );
}

const focusAreas = [
  {
    number: "01",
    title: "Encontrar",
    text: "Leitura cuidadosa do que você procura para aproximar pessoas dos lugares certos.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Orientar",
    text: "Uma conversa clara em cada etapa, do primeiro contato à decisão.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Conectar",
    text: "Presença local e atendimento próximo para negócios mais tranquilos.",
    icon: Waves,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6fbfa] text-[#12343a]">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="site-shell flex items-center justify-between py-5 lg:py-7">
          <a
            href="#inicio"
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

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navegação principal"
          >
            <a href="#atuacao" className="nav-link">
              Nossa atuação
            </a>
            <a href="#presenca" className="nav-link">
              Onde estamos
            </a>
            <a href="#contato" className="nav-link">
              Contato
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
            >
              Fale conosco <ArrowUpRight size={15} strokeWidth={2.4} />
            </a>
          </nav>

          <button
            type="button"
            className="mobile-menu-button lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu lg:hidden">
            <a href="#atuacao" onClick={closeMenu}>
              Nossa atuação
            </a>
            <a href="#presenca" onClick={closeMenu}>
              Onde estamos
            </a>
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mobile-menu-cta"
            >
              Fale conosco <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-texture" aria-hidden="true" />
          <div className="site-shell relative z-10 grid min-h-[760px] items-end gap-12 pb-16 pt-32 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-16 lg:pb-20 lg:pt-36">
            <div className="max-w-2xl">
              <div className="eyebrow eyebrow-light">
                <Sparkles size={14} fill="currentColor" />
                <span>Imóveis com jeito de casa</span>
              </div>
              <h1 className="display-title text-white">
                O lugar certo começa com uma <em>boa conversa.</em>
              </h1>
              <p className="hero-copy">
                A Poa Floripa Imóveis aproxima você de oportunidades em Porto
                Alegre, Florianópolis e no litoral de Santa Catarina — com
                clareza, cuidado e presença.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  Quero conversar <ArrowUpRight size={17} />
                </a>
                <a href="#atuacao" className="button-ghost">
                  Conheça nosso jeito <span>↓</span>
                </a>
              </div>
              <div className="hero-proof">
                <div className="proof-avatars" aria-hidden="true">
                  <span>PF</span>
                  <span>+</span>
                </div>
                <p>
                  Atendimento próximo
                  <br />
                  <strong>para decisões importantes.</strong>
                </p>
              </div>
            </div>

            <div className="hero-visual-wrap">
              <div
                className="hero-visual"
                role="img"
                aria-label="Casa com piscina e vista para o mar"
              >
                <img
                  src="/images/hero-piscina.jpg"
                  alt="Casa com piscina e vista para o mar"
                />
                <div className="image-wash" />
                <div className="visual-caption">
                  <span className="caption-label">PRESENÇA LOCAL</span>
                  <span className="caption-place">
                    <MapPin size={13} /> Sul do Brasil
                  </span>
                </div>
              </div>
              <div className="hero-stamp" aria-hidden="true">
                <span>POA</span>
                <span>FLORIPA</span>
                <small>desde sempre, perto de você</small>
              </div>
            </div>
          </div>
          <div className="hero-bottom-line" aria-hidden="true">
            <span /> <span />
          </div>
        </section>

        <section id="atuacao" className="section-pad bg-[#f6fbfa]">
          <div className="site-shell">
            <div className="section-heading grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
              <div>
                <div className="eyebrow eyebrow-dark">
                  <span className="eyebrow-dot" /> Nosso jeito
                </div>
                <h2 className="section-title">
                  Imobiliária,
                  <br />
                  <em>sem complicação.</em>
                </h2>
              </div>
              <p className="section-lead">
                Comprar, vender ou encontrar um novo endereço é uma decisão
                grande. Nosso papel é deixar o caminho mais claro, humano e
                seguro — com atenção aos detalhes que fazem diferença.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {focusAreas.map(({ number, title, text, icon: Icon }) => (
                <article key={number} className="focus-card">
                  <div className="flex items-start justify-between">
                    <span className="focus-number">{number}</span>
                    <Icon className="focus-icon" size={25} strokeWidth={1.5} />
                  </div>
                  <div className="mt-16">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <ul
            className="mt-10 grid gap-3 text-sm text-[#557277] md:grid-cols-3"
            aria-label="Diferenciais do atendimento"
          >
            <li className="rounded-xl border border-[#d8ebe7] bg-white px-5 py-4">
              Atendimento próximo e claro
            </li>
            <li className="rounded-xl border border-[#d8ebe7] bg-white px-5 py-4">
              Leitura cuidadosa do seu objetivo
            </li>
            <li className="rounded-xl border border-[#d8ebe7] bg-white px-5 py-4">
              Presença local em duas capitais
            </li>
          </ul>
        </section>

        <section id="presenca" className="presence-section">
          <div className="site-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
            <div
              className="presence-map"
              aria-label="Áreas de atuação: Porto Alegre, Florianópolis e litoral de Santa Catarina"
            >
              <div className="map-grid" aria-hidden="true" />
              <div className="map-water" aria-hidden="true" />
              <div className="map-route route-one" aria-hidden="true" />
              <div className="map-route route-two" aria-hidden="true" />
              <div className="map-pin pin-poa">
                <span>POA</span>
                <i />
              </div>
              <div className="map-pin pin-floripa">
                <span>FLORIPA</span>
                <i />
              </div>
              <div className="map-note">
                <MapPin size={14} /> Santa Catarina & Rio Grande do Sul
              </div>
            </div>
            <div>
              <div className="eyebrow eyebrow-dark">
                <span className="eyebrow-dot" /> Onde estamos
              </div>
              <h2 className="section-title">
                Duas cidades.
                <br />
                <em>Um olhar próximo.</em>
              </h2>
              <p className="section-lead mt-6">
                De Porto Alegre a Florianópolis, levamos conhecimento local e um
                atendimento que respeita o seu tempo. Porque o melhor imóvel
                também precisa fazer sentido para a sua vida.
              </p>
              <div className="location-list">
                <div>
                  <span>01</span>
                  <strong>Porto Alegre</strong>
                  <small>Rio Grande do Sul</small>
                </div>
                <div>
                  <span>02</span>
                  <strong>Florianópolis</strong>
                  <small>Santa Catarina</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="contact-section">
          <div className="contact-glow" aria-hidden="true" />
          <div className="site-shell relative z-10 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <div className="eyebrow eyebrow-light">
                <span className="eyebrow-dot light" /> Vamos conversar
              </div>
              <h2 className="contact-title">
                Seu próximo
                <br />
                <em>endereço começa aqui.</em>
              </h2>
              <p className="contact-copy">
                Conte o que você está buscando. A gente responde com atenção.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button-primary button-primary-light"
              >
                Chamar no WhatsApp <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="contact-details">
              <a href={phoneHref} className="contact-row">
                <span className="contact-icon">
                  <Phone size={17} />
                </span>
                <span>
                  <small>Telefone / WhatsApp</small>
                  <strong>{phoneDisplay}</strong>
                </span>
                <ArrowUpRight className="contact-arrow" size={18} />
              </a>
              <div className="contact-row contact-row-static">
                <span className="contact-icon">
                  <Building2 size={17} />
                </span>
                <span>
                  <small>Razão social</small>
                  <strong>TSR Assessoria Empresarial</strong>
                </span>
              </div>
              <div className="contact-row contact-row-static">
                <span className="contact-icon">
                  <MapPin size={17} />
                </span>
                <span>
                  <small>Base administrativa</small>
                  <strong>Florianópolis · SC</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="perguntas" className="section-pad bg-[#eef8f5]">
          <div className="site-shell">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Perguntas frequentes
            </div>
            <h2 className="section-title mt-5 max-w-2xl">
              Informação clara para você avançar com segurança.
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {faqs.map(faq => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-[#d1e8e2] bg-white p-6"
                >
                  <h3 className="text-lg font-semibold leading-snug text-[#12343a]">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f777b]">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell flex flex-col gap-7 py-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <a href="#inicio" className="brand-lockup footer-brand">
              <span className="brand-mark" aria-hidden="true">
                <span />
                <span />
              </span>
              <span>
                <strong>Poa Floripa</strong>
                <small>IMÓVEIS</small>
              </span>
            </a>
            <p className="footer-tagline">
              Presença local. Escolhas com sentido.
            </p>
          </div>
          <div className="footer-meta">
            <div className="footer-legal">
              <span>
                <Check size={13} /> CNPJ 49.975.398/0001-70
              </span>
              <span>
                <Check size={13} /> Responsável: Tiago dos Santos Rosin
              </span>
              <span>
                <Check size={13} /> Rua Procópio Manoel Pires, 84 ·
                Florianópolis/SC
              </span>
            </div>
            <div className="flex items-center justify-between gap-6 pt-4 text-xs text-[#6b8588] lg:justify-end">
              <span>© 2026 Poa Floripa Imóveis</span>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                aria-label="Falar pelo WhatsApp"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Falar com a Poa Floripa Imóveis pelo WhatsApp"
        title="Fale conosco pelo WhatsApp"
      >
        <WhatsAppLogo />
        <span className="whatsapp-float-label">Fale conosco</span>
      </a>
    </div>
  );
}
