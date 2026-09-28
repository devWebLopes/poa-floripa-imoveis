# Skill: Full-stack Express

## Capacidade

Criar ou alterar endpoints Express, integrações e contratos compartilhados sem quebrar o empacotamento de produção.

## Regras

- Validar entradas na fronteira, preferencialmente com Zod.
- Manter tipos e constantes compartilhados em `shared/` quando consumidos por cliente e servidor.
- Não expor credenciais, dados pessoais ou detalhes internos em respostas e logs.
- Preservar o fallback de rotas client-side e o serviço de arquivos estáticos.
- Tratar erros explicitamente e definir status HTTP coerentes.

## Entregáveis

- rota ou serviço implementado;
- contrato de entrada/saída;
- testes ou validação manual documentada;
- confirmação de `pnpm check` e `pnpm build`.
