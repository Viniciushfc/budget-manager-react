


# Budget Manager - Gerenciador de Finanças

Este é um aplicativo de gerenciamento de finanças pessoais, desenvolvido com **React** e **TypeScript**, utilizando **Firebase** para autenticação e armazenamento de dados, e **Chart.js** para visualização gráfica de despesas e receitas. O objetivo principal é facilitar o controle financeiro, permitindo que o usuário registre e gerencie suas receitas e despesas de maneira intuitiva e visual.

## Funcionalidades

- **Gerenciamento de Despesas e Receitas**: Adicione, edite e exclua despesas e receitas, mantendo um controle financeiro eficiente.
- **Autenticação com Firebase**: Login utilizando sua conta do Google ou registre-se com email e senha.
- **Gráficos Interativos**: Visualize suas finanças com gráficos dinâmicos e intuitivos utilizando **Chart.js**.
- **Interface Responsiva**: Aplicação totalmente responsiva e acessível em dispositivos móveis.
  
## Tecnologias Utilizadas

- **React** com **TypeScript** para a construção da interface do usuário.
- **Firebase** para autenticação, banco de dados e hospedagem.
- **Chart.js** para criação de gráficos.
- **CSS** para estilização da aplicação.
  
## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/budget-manager.git
   ```

2. Instale as dependências:
   ```bash
   cd budget-manager
   npm install
   ```

3. Configure o Firebase:

   - Crie um projeto no Firebase Console.
   - Habilite a autenticação com Google e Email/Senha.
   - Adicione as configurações do Firebase no arquivo `.env` ou diretamente no código (exemplo no firebaseConfig).

4. Rode a aplicação:
   ```bash
   npm start
   ```

## Configuração do Firebase

No Firebase, habilite os seguintes serviços:

- **Autenticação**: com Google e Email/Senha.
- **Firestore**: para armazenar os dados das receitas e despesas.

Adicione suas configurações do Firebase ao projeto:

```typescript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
};
```

## Meu Primeiro Projeto com Firebase

Este foi meu primeiro projeto utilizando o Firebase para implementar autenticação e armazenamento de dados. A integração com o Firebase facilitou a implementação de login com o Google e a criação de contas utilizando email e senha. O aprendizado com esse projeto foi significativo, permitindo explorar tanto a parte de autenticação quanto a manipulação de dados em tempo real.

## Contribuições

Contribuições são sempre bem-vindas! Se você tiver sugestões, melhorias ou encontrar bugs, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License.

---

Obrigado por conferir o projeto!


