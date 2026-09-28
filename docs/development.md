# Guia de Desenvolvimento

## Convenções de arquivos

- Componentes React: PascalCase, extensão `.tsx`.
- Hooks: prefixo `use`, extensão `.ts` ou `.tsx`.
- Utilitários: nomes descritivos em camelCase.
- Páginas: PascalCase em `client/src/pages/`.
- Contratos compartilhados: nomes orientados ao domínio em `shared/`.

## Processo recomendado

1. Ler `/agents.md` e o plano vigente.
2. Inspecionar os arquivos que serão afetados.
3. Implementar a menor mudança coerente com a arquitetura.
4. Reutilizar componentes e padrões existentes.
5. Validar tipos, build e testes.
6. Revisar acessibilidade, responsividade e conteúdo.
7. Registrar limitações, decisões e comandos executados na entrega.

## Commits e revisão

- Separar alterações funcionais de refatorações não relacionadas.
- Não incluir arquivos gerados, credenciais ou logs locais.
- Descrever no pull request o problema, a solução, a validação e eventuais riscos.
- Toda alteração visual deve incluir descrição do comportamento em mobile e desktop.
