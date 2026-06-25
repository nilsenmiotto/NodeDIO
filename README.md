# Projeto Node

Bootcamp Sem Parar Corpay - Back-end do Zero a Prática

https://web.dio.me/track/bootcamp-corpay-backend-do-zero-a-pratica

## Estrutura do repositório

- `01-helloworld/`
  - Exemplo simples com `console.log("Hello, World!")`.
- `02-meu-primeiro-projeto/`
  - Primeiro projeto Node.js com `package.json` e uso de CommonJS.
- `03-commonjs-modules/`
  - Demonstração de módulos CommonJS usando `require` e `module.exports`.
- `04-ecmascript-modules/`
  - Exemplo de módulos ES com `import` e `export`.
- `05-npm-package-basics/`
  - Projeto com dependências externas (`chalk`, `log-symbols`).
- `06-npm-scripts/`
  - Uso de scripts npm para executar o projeto em modo de desenvolvimento e watch.
- `07-variaveis-de-ambiente/`
  - Demonstração de leitura de variáveis de ambiente com `--env-file`.
- `08-typescript/`
  - Projeto em TypeScript com `tsx`, `tsup` e configuração do `tsconfig.json`.
- `09-debug/`
  - Projeto TypeScript com build, lint e scripts de execução.

## Como usar

Cada exercício está isolado em sua própria pasta. Para executar um exemplo:

1. Abra o terminal na pasta desejada:
   ```bash
   cd 02-meu-primeiro-projeto
   ```
2. Instale as dependências, se houver:
   ```bash
   npm install
   ```
3. Execute o arquivo principal:
   ```bash
   node index.js
   ```

> Observação: nem todos os exemplos possuem `package.json` com scripts de execução. Nestes casos, use `node index.js` diretamente.

## Comandos por projeto

### `01-helloworld`
- Executar:
  ```bash
  node index.js
  ```

### `02-meu-primeiro-projeto`
- Executar:
  ```bash
  npm install
  node index.js
  ```

### `03-commonjs-modules`
- Executar:
  ```bash
  npm install
  node src/main.js
  ```

### `04-ecmascript-modules`
- Executar:
  ```bash
  npm install
  node src/index.js
  ```

### `05-npm-package-basics`
- Executar:
  ```bash
  npm install
  node src/index.js
  ```

### `06-npm-scripts`
- Executar em desenvolvimento:
  ```bash
  npm install
  npm run start:dev
  ```
- Executar em watch:
  ```bash
  npm run start:watch
  ```

### `07-variaveis-de-ambiente`
- Executar com arquivo `.env`:
  ```bash
  npm install
  npm run start:dev
  ```
- Executar com watch:
  ```bash
  npm run start:watch
  ```

### `08-typescript`
- Executar em desenvolvimento:
  ```bash
  npm install
  npm run start-dev
  ```
- Executar com watch:
  ```bash
  npm run start-watch
  ```
- Compilar e executar dist:
  ```bash
  npm run start-dist
  ```
- Compilar com `tsc`:
  ```bash
  npm run build-npx
  ```
- Compilar com `tsup`:
  ```bash
  npm run build-tsup
  ```

### `09-debug`
- Executar em desenvolvimento:
  ```bash
  npm install
  npm run start-dev
  ```
- Executar com watch:
  ```bash
  npm run start-watch
  ```
- Compilar:
  ```bash
  npm run build
  ```
- Lint:
  ```bash
  npm run lint
  ```
- Compilar dist:
  ```bash
  npm run start-dist
  ```

## Observações gerais

- Use Node.js 18+ para compatibilidade com os exemplos modernos.
- O projeto `08-typescript` e `09-debug` usam TypeScript e dependências dev para compilação.
- Para `07-variaveis-de-ambiente`, adicione um arquivo `.env` na pasta se quiser testar variáveis de ambiente.
