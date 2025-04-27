# CP5

Este projeto é uma aplicação React que demonstra a integração com a API RandomUser para exibir perfis de usuários aleatórios.

## Funcionalidades

- Exibição de perfis de usuários aleatórios
- Atualização dinâmica dos perfis através de um botão de refresh
- Interface responsiva e moderna
- Integração com a API RandomUser.me

## Tecnologias Utilizadas

- React
- Tailwind CSS
- Iconify para ícones
- API RandomUser.me

## Componentes

### FakeUser

O componente principal `FakeUser` é responsável por:
- Fazer requisições à API RandomUser
- Gerenciar o estado do usuário atual
- Exibir as informações do usuário (nome, username, email e foto)
- Permitir a atualização do usuário através de um botão

## Como Executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Execute o projeto:
```bash
npm run dev
```

## API Utilizada

O projeto utiliza a API RandomUser.me para gerar dados de usuários aleatórios. Cada usuário contém:
- Nome completo
- Username
- Email
- Foto de perfil

## Estrutura do Projeto

```
CP5-Webdev/
├── src/
│   ├── FakeUser.jsx    # Componente principal
│   └── ...
├── README.md
└── package.json
```

## Estilização

O projeto utiliza Tailwind CSS para estilização, proporcionando:
- Layout flexbox responsivo
- Cores e espaçamentos consistentes
- Efeitos de hover
- Animações de loading

## Integrantes do Grupo

- Maria Eduarda Ferrés - RM 560418
- Julia Sayuri Yokoo - RM 560541
- Gabriela Queiroga Cocuzza da Silva - RM 560035
