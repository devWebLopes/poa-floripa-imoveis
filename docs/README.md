# Documentação do Projeto — Poa Floripa Imóveis

## 1. Visão geral

O Poa Floripa Imóveis é uma aplicação web institucional para apresentar a marca, comunicar sua atuação imobiliária regional e facilitar o contato de clientes por telefone e WhatsApp.

O projeto deve priorizar clareza da comunicação comercial, experiência responsiva, acessibilidade, carregamento rápido e manutenção simples por equipes humanas e agentes de IA.

## 2. Stack confirmada

| Área | Tecnologia / padrão |
| --- | --- |
| Linguagem | TypeScript 5.6 em modo `strict` |
| Frontend | React 19, React DOM e Vite 7 |
| Roteamento | Wouter |
| Backend | Node.js com Express 4 |
| Build | Vite para o cliente e esbuild para o servidor |
| Estilos | Tailwind CSS 4, CSS customizado e `tw-animate-css` |
| Componentes | Radix UI e componentes no padrão shadcn/ui |
| Ícones | Lucide React |
| Validação | Zod |
| Testes | Vitest |
| Formatação | Prettier |
| Gerenciador | pnpm |

## 3. Arquitetura

O projeto utiliza uma arquitetura full-stack compacta, organizada por responsabilidade:

```text
client/   Aplicação React, páginas, componentes, hooks e estilos
server/   Servidor Express e entrega dos artefatos em produção
shared/   Constantes e contratos compartilhados entre cliente e servidor
docs/     Documentação de arquitetura e operação
skills/   Capacidades reutilizáveis dos agentes de IA
agents/   Perfis operacionais dos agentes
plans/    Planos versionados de execução de tarefas
```

### 3.1 Cliente

- `client/src/App.tsx` é o ponto de composição da aplicação, providers e rotas.
- `client/src/pages/` contém páginas orientadas a rota.
- `client/src/components/` contém componentes de domínio e componentes reutilizáveis.
- `client/src/components/ui/` contém primitives visuais baseadas em Radix/shadcn.
- `client/src/hooks/` contém hooks reutilizáveis.
- `client/src/lib/` contém utilitários transversais.
- `client/src/index.css` concentra tokens, estilos globais e customizações visuais.

### 3.2 Servidor

- `server/index.ts` inicializa o Express e serve os artefatos compilados.
- Novas rotas de API devem ser adicionadas de forma explícita, com validação de entrada e tratamento de erro.
- O servidor não deve absorver regras visuais ou lógica exclusiva de apresentação.

### 3.3 Código compartilhado

- `shared/` é reservado para constantes, tipos e contratos realmente compartilhados.
- Não mover componentes React ou dependências específicas do navegador para `shared/`.

## 4. Padrões de código

1. Usar TypeScript estrito; evitar `any` e casts sem justificativa.
2. Respeitar os aliases configurados: `@/*`, `@shared/*` e `@assets/*`.
3. Manter imports organizados e componentes pequenos, com uma responsabilidade clara.
4. Preferir composição de componentes a duplicação de markup.
5. Usar tokens e classes já existentes antes de criar novas regras visuais.
6. Manter a formatação conforme `.prettierrc`: 2 espaços, ponto e vírgula, aspas duplas e largura de 80 colunas.
7. Textos voltados ao usuário devem estar em português do Brasil e preservar o tom institucional da marca.
8. Links externos devem declarar `target="_blank"` com `rel="noreferrer"` quando aplicável.
9. Interações precisam ter estados acessíveis: foco, teclado, `aria-label`, `aria-expanded` e feedback de erro/sucesso quando necessário.
10. Não introduzir dependências novas sem justificar o impacto e verificar se uma solução existente atende ao caso.

## 5. Padrões de UI e conteúdo

- Preservar a identidade visual já estabelecida em `Home.tsx` e `index.css`.
- Usar `lucide-react` para ícones, salvo necessidade de um ícone de marca específico.
- Manter responsividade mobile-first.
- Priorizar HTML semântico (`header`, `nav`, `main`, `section`, `footer`, headings hierárquicos).
- Imagens devem ter `alt` descritivo; elementos puramente decorativos devem ser ocultados de leitores de tela.
- Informações comerciais, telefone, WhatsApp, CNPJ e endereço devem ser tratados como conteúdo sensível à revisão: nunca inventar ou alterar sem requisito explícito.

## 6. Qualidade e validação

Antes de entregar uma alteração, executar, quando aplicável:

```bash
pnpm check
pnpm build
```

Para testes automatizados:

```bash
pnpm exec vitest run
```

Também revisar manualmente a experiência em viewport móvel e desktop e confirmar que rotas desconhecidas continuam direcionando para a tela 404.

## 7. Segurança e operação

- Segredos e chaves devem permanecer em variáveis de ambiente; nunca commitá-los.
- Validar dados externos antes de usar em APIs, links ou renderização.
- Não registrar dados pessoais de clientes em logs de debug.
- Preservar o comportamento de produção do servidor Express ao alterar o build.
- Mudanças de infraestrutura ou autenticação exigem plano específico e validação adicional.

## 8. Documentos relacionados

- [Padrões arquiteturais](./architecture.md)
- [Padrões de desenvolvimento](./development.md)
- [Guia de qualidade e entrega](./quality.md)
