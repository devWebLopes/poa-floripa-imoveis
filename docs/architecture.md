# Padrões Arquiteturais

## Objetivo

Definir limites claros entre apresentação, execução no servidor e contratos compartilhados, mantendo o projeto adequado a uma aplicação institucional pequena e evolutiva.

## Fluxo de execução

```text
Navegador
  -> React/Vite em client/
  -> Rotas Wouter
  -> Componentes e hooks
  -> APIs Express quando existirem
  -> Contratos/constantes em shared/
```

Em produção, o build gera os artefatos do cliente e o Express os entrega como arquivos estáticos, com fallback para `index.html` para suportar rotas client-side.

## Regras de dependência

- `client/` pode consumir `shared/`.
- `server/` pode consumir `shared/`.
- `shared/` não pode importar de `client/` ou `server/`.
- Componentes visuais não devem conhecer detalhes de infraestrutura.
- Chamadas HTTP devem ser isoladas em funções/hooks próprios quando deixarem de ser triviais.
- Regras de negócio devem ser independentes de JSX sempre que tiverem complexidade relevante.

## Evolução para novas funcionalidades

Ao adicionar uma funcionalidade:

1. definir o caso de uso e seus critérios de aceite;
2. escolher o limite correto entre página, componente, hook, servidor e `shared/`;
3. definir os tipos de entrada e saída;
4. validar dados na fronteira do sistema;
5. criar feedback de carregamento, sucesso e erro;
6. cobrir o comportamento crítico com teste;
7. atualizar a documentação se o fluxo alterar arquitetura ou operação.

## Decisões atuais

- React é usado sem RSC; o arquivo `components.json` registra `rsc: false`.
- Wouter atende ao roteamento atual, que é simples e client-side.
- Express é responsável pela entrega do build e poderá hospedar endpoints quando necessário.
- Radix UI/shadcn é a base para primitives acessíveis; componentes de domínio ficam fora de `components/ui/`.
