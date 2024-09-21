# Projeto TP3 EXPO

## 💼 Conta de administrador padrão para acesso ao sistema.
- **Login:** **admin@teste.com**
- **Senha:** **123456**

## 📋 Funcionalidades

- **Cadastro e Login**: Permite que os usuários se cadastrem e façam login usando o Firebase Authentication.
- **Edição de Perfil**: Os usuários podem atualizar suas informações de perfil, incluindo foto e dados pessoais.
- **Gerenciamento de Itens de Lista**: Os usuários podem criar, editar e remover itens de uma lista, com suporte para upload de até 5 imagens.
- **Funcionalidade Offline**: O aplicativo permite que os usuários interajam com seus dados mesmo sem conexão à internet, sincronizando automaticamente quando a conexão é restabelecida.
- **Troca de Tema**: Os usuários podem escolher entre temas claro, escuro ou automático.
- **Interface Atraente**: Utiliza componentes do React Native Paper para criar uma interface amigável e moderna.

## 🚀 Tecnologias Utilizadas

- **React Native**: Framework para construção de aplicativos móveis.
- **Firebase**: Plataforma para autenticação, armazenamento e banco de dados em tempo real.
- **React Native Paper**: Biblioteca de componentes que seguem as diretrizes do Material Design.
- **Expo**: Ferramenta para desenvolvimento e publicação de aplicativos React Native.

## ⚙️ Configuração do Firebase

Para que o projeto funcione corretamente, você precisa configurar o Firebase no projeto. Siga os passos abaixo:

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Habilite o Firestore Database e o Authentication no seu projeto Firebase.
3. Crie um arquivo `firebase.js` dentro da pasta `src/services/` com o seguinte conteúdo:

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

## 🛠️ Como Rodar o Projeto

Para rodar o projeto localmente, siga as etapas abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Marcus-Boni/Development-React-Native-AT.git
   ```
2. Naveque até o diretório do projeto
   ```bash
   cd seu-projeto
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o projeto:
   ```bash
   npm start
   ```
5. O projeto estará disponível em http://localhost:8081.

## 📚 Documentação

- Para mais detalhes sobre como usar e configurar o projeto, consulte a documentação oficial do <a href="https://console.firebase.google.com/u/0/?hl=pt-br" target="_blank">Firebase</a>.

## 🤝 Contribuição

- Sinta-se à vontade para contribuir com o projeto através de pull requests ou abrindo issues.

