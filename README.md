# Donate App

![GitHub package.json version](https://img.shields.io/github/package-json/v/yourusername/donate-app)
![GitHub](https://img.shields.io/github/license/yourusername/donate-app)

Este é um aplicativo de doações simples apenas para estudo desenvolvido com Next.js e integrado com o MercadoPago.

## Como usar

### 1. Clone este repositório

```bash
git clone https://github.com/yourusername/donate-app.git
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave de acesso do MercadoPago:

```env
MP_ACCESS_TOKEN=sua_chave_de_acesso_aqui
```

### 4. Configure sua chave pública do MercadoPago

No arquivo `page.tsx` dentro da pasta app, adicione sua chave pública do MercadoPago no lugar de `<PUBLIC_KEY>`:

```typescript
initMercadoPago("<PUBLIC_KEY>");
```

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 6. Acesse o aplicativo em seu navegador

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Scripts disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o aplicativo para produção.
- `npm start`: Inicia o servidor de produção.
- `npm run lint`: Executa a verificação de linting do código.

## Dependências

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [MercadoPago SDK](https://www.mercadopago.com.br/developers/pt/guides/sdks/official/react/)
- [TailwindCSS](https://tailwindcss.com/docs/installation)

## Autor

[Seu nome aqui]

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença [MIT](https://opensource.org/licenses/MIT).
