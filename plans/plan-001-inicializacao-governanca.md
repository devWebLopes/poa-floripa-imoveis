# Plano 001 — Inicialização da Governança

## Metadados

- **Tarefa:** inicializar a estrutura de documentação, skills, agentes e planos para o projeto.
- **Nome curto:** `inicializacao-governanca`
- **Agente principal:** Project Manager
- **Agentes de apoio:** Frontend Engineer e QA Engineer
- **Skills:** `project-governance`, `quality-validation`, `frontend-react`
- **Status:** concluído
- **Data de criação:** 28 de setembro de 2026

## Contexto identificado

O repositório é uma aplicação web full-stack em TypeScript, com React/Vite no cliente, Express no servidor e uma pasta `shared/`. O produto atual é uma landing page institucional da Poa Floripa Imóveis, com foco em apresentação da marca, atuação em Porto Alegre e Florianópolis e contato por telefone/WhatsApp.

## Objetivo

Criar uma base de governança para que pessoas e agentes de IA possam entender a arquitetura, selecionar capacidades adequadas, executar tarefas com critérios claros e validar entregas de modo consistente.

## Escopo

### Incluído

- criar `docs/` e sua documentação base;
- criar `skills/` com capacidades técnicas e de governança;
- criar `agents/` com perfis especializados;
- criar o primeiro plano em `plans/`;
- criar `/agents.md` como ponto de entrada da IA.

### Não incluído

- alterações em componentes da aplicação;
- criação de novas funcionalidades de negócio;
- instalação de dependências;
- alteração de configurações de build ou deploy.

## Execução passo a passo

1. Inspecionar manifestos, configurações, estrutura de pastas e status do Git.
2. Confirmar stack, arquitetura efetiva e domínio atual do produto.
3. Verificar se os diretórios de governança já existem e definir a numeração do plano.
4. Criar documentação de arquitetura, desenvolvimento e qualidade em `docs/`.
5. Criar skills reutilizáveis para frontend, backend, qualidade e governança.
6. Criar agentes para frontend, backend, QA e gestão de projeto.
7. Criar este plano vinculando agente e skills ao objetivo.
8. Criar `agents.md` com regras rígidas e mapa de navegação.
9. Validar referências cruzadas, nomes de arquivos e conteúdo Markdown.
10. Executar verificações do projeto que não alterem o código da aplicação.

## Critérios de aceite

- [x] Existem `docs/`, `skills/`, `agents/` e `plans/`.
- [x] Cada pasta possui um `README.md` quando solicitado.
- [x] `docs/README.md` descreve stack, tipo, arquitetura e padrões.
- [x] `skills/README.md` mapeia todas as skills criadas.
- [x] `agents/README.md` descreve papéis e acionamento.
- [x] O plano identifica agente principal, skills e passos de validação.
- [x] `/agents.md` contém contexto, objetivos, mapa e regras rígidas.
- [x] Nenhum arquivo de aplicação foi alterado.
- [x] A estrutura criada é navegável por links relativos.

## Validação executada

- inspeção da estrutura e do status do Git;
- leitura de `package.json`, `tsconfig.json`, `vite.config.ts`, `components.json`, `App.tsx`, `Home.tsx` e `server/index.ts`;
- revisão de referências e consistência dos arquivos Markdown após a criação.

## Riscos e pendências

- O repositório ainda não possui suíte de testes de domínio identificada; novas funcionalidades devem criar cobertura conforme o risco.
- Autenticação e APIs de negócio aparecem apenas como infraestrutura potencial e não devem ser assumidas como funcionalidades ativas sem requisito.
- A documentação deverá ser atualizada quando o produto deixar de ser apenas institucional ou quando novos serviços forem adicionados.
