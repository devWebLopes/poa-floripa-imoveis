# Qualidade, Testes e Entrega

## Portões mínimos

| Portão | Comando / verificação |
| --- | --- |
| Tipos | `pnpm check` |
| Build | `pnpm build` |
| Testes | `pnpm exec vitest run`, quando houver testes aplicáveis |
| Formatação | `pnpm exec prettier --check .` ou revisão equivalente |
| UX | Navegação por teclado, viewport móvel, links e estados interativos |
| Conteúdo | Telefone, WhatsApp, localidades e textos revisados |

## Critérios de aceite para UI

- Não há overflow horizontal em viewport móvel.
- Navegação e CTA funcionam com mouse e teclado.
- Contraste e foco permanecem visíveis.
- Links de telefone e WhatsApp usam destinos corretos.
- Erros de rota exibem a página 404.
- O build de produção é concluído sem erro.

## Relatório de entrega

Toda entrega deve informar:

- arquivos alterados;
- comportamento implementado;
- validações executadas e resultado;
- limitações ou pendências;
- riscos de rollout, se houver.
