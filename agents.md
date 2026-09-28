# Cérebro do Projeto — Poa Floripa Imóveis

## 1. Regra de entrada obrigatória

Antes de iniciar qualquer tarefa, modificar qualquer arquivo ou propor uma implementação, a IA **deve ler este arquivo** e consultar os documentos relevantes em `docs/`, `skills/`, `agents/` e `plans/`.

Nenhum agente deve ignorar estas diretrizes por conveniência. Em caso de conflito, a ordem de prioridade é:

1. requisitos explícitos da tarefa atual;
2. regras deste arquivo;
3. documentação arquitetural em `docs/`;
4. plano vigente em `plans/`;
5. skill e perfil do agente acionado;
6. convenções inferidas do código existente.

Se houver ambiguidade que altere o escopo, a IA deve registrar a suposição ou solicitar esclarecimento antes de implementar.

## 2. Contexto do projeto

O Poa Floripa Imóveis é uma aplicação **web full-stack** institucional para uma empresa imobiliária com atuação em Porto Alegre/RS e Florianópolis/SC. A experiência atual apresenta a marca, seus diferenciais, localidades de atuação e canais de contato, especialmente telefone e WhatsApp.

### Stack

- TypeScript 5.6 com `strict` habilitado;
- React 19 e React DOM;
- Vite 7;
- Wouter para rotas client-side;
- Express 4 no servidor;
- Tailwind CSS 4, Radix UI e componentes no padrão shadcn/ui;
- Lucide React para ícones;
- Zod para validação;
- Vitest para testes;
- pnpm como gerenciador de pacotes.

### Organização do código

- `client/`: aplicação React, páginas, componentes, hooks e estilos;
- `server/`: servidor Express e entrega do build;
- `shared/`: constantes e contratos compartilhados;
- `patches/`: patches de dependências mantidos pelo projeto.

## 3. Objetivos gerais

1. Manter uma experiência institucional clara, rápida, responsiva e acessível.
2. Evoluir o produto sem quebrar o build ou os fluxos de contato.
3. Preservar a identidade visual e a precisão das informações comerciais.
4. Permitir que agentes de IA trabalhem com autonomia controlada e rastreabilidade.
5. Garantir que mudanças sejam pequenas, verificáveis e coerentes com a arquitetura.

## 4. Mapa de governança

```text
agents.md                         Entrada obrigatória e regras globais
docs/README.md                    Índice da documentação do projeto
docs/architecture.md              Limites e decisões arquiteturais
docs/development.md               Convenções de desenvolvimento
docs/quality.md                   Portões de qualidade e entrega
skills/README.md                  Índice de capacidades dos agentes
skills/*.md                       Instruções operacionais por capacidade
agents/README.md                  Índice e seleção de agentes
agents/*.md                       Missão, responsabilidades e skills
plans/plan-*.md                   Planos versionados de tarefas
```

## 5. Regras rígidas de funcionamento

- Sempre ler `/agents.md` antes de qualquer nova tarefa.
- Sempre consultar o plano aplicável antes de editar código.
- Nunca inventar requisitos, dados de clientes, dados comerciais ou integrações.
- Nunca commitar segredos, tokens, chaves, dados pessoais ou logs sensíveis.
- Não introduzir bibliotecas novas quando a stack existente já resolver o problema.
- Não alterar arquitetura, autenticação, deploy ou contratos públicos sem explicitar impacto e risco.
- Respeitar `client/`, `server/` e `shared/` como limites de responsabilidade.
- Usar TypeScript estrito e os aliases já configurados.
- Preservar acessibilidade, responsividade, semântica e navegação por teclado.
- Manter textos de usuário em português do Brasil e coerentes com a marca.
- Validar alterações com `pnpm check` e `pnpm build`; executar Vitest quando aplicável.
- Revisar todos os arquivos criados ou alterados antes da entrega.
- Informar no resultado final o que mudou, o que foi validado e o que permanece pendente.

## 6. Seleção de agente

- **Project Manager:** inicia tarefas, organiza escopo, cria planos e coordena agentes.
- **Frontend Engineer:** atua em React, páginas, componentes, estilos, UX e responsividade.
- **Backend Engineer:** atua em Express, APIs, integrações, contratos e operação de produção.
- **QA Engineer:** valida critérios de aceite, regressões, acessibilidade e qualidade de entrega.

O agente principal deve ser o perfil mais próximo do risco dominante. Para mudanças transversais, o Project Manager coordena e delega, mantendo a responsabilidade pela consolidação.

## 7. Fluxo padrão de tarefa

1. Ler este arquivo.
2. Identificar o agente principal e as skills necessárias.
3. Ler os arquivos relevantes de `docs/`, `skills/`, `agents/` e `plans/`.
4. Inspecionar o código atual antes de assumir padrões.
5. Definir escopo, critérios de aceite, riscos e plano de execução.
6. Implementar a menor mudança completa possível.
7. Validar tipos, build, testes e experiência do usuário.
8. Revisar arquivos modificados e referências cruzadas.
9. Entregar resumo objetivo com evidências e pendências.

## 8. Plano inicial

Consulte [plans/plan-001-inicializacao-governanca.md](./plans/plan-001-inicializacao-governanca.md) para o plano que criou esta base de governança.
