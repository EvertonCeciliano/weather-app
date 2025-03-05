# 🌤️ Clima - Aplicativo de Previsão do Tempo

Um aplicativo web moderno e responsivo para consulta de previsão do tempo, inspirado no design do Apple Weather. Desenvolvido com Next.js, TypeScript e Tailwind CSS.

![Clima App](public/preview.png)

## ✨ Características

- 🌍 Busca por cidade
- 📍 Geolocalização automática
- 🌡️ Temperatura atual
- 💨 Detalhes do clima (sensação térmica, umidade, vento)
- 📅 Previsão para 5 dias
- 🌈 Interface dinâmica que se adapta ao clima e hora do dia
- 🎨 Design moderno com efeitos de glassmorphism
- ⚡ Animações suaves com Framer Motion
- 📱 Totalmente responsivo
- 🌐 Suporte a português

## 🚀 Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [OpenWeatherMap API](https://openweathermap.org/api) - API de dados meteorológicos
- [date-fns](https://date-fns.org/) - Biblioteca de manipulação de datas
- [Heroicons](https://heroicons.com/) - Conjunto de ícones

## 🛠️ Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn
- Chave de API do OpenWeatherMap

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/clima.git
cd clima
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave de API:
```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=sua_chave_api_aqui
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📱 Como Usar

1. Digite o nome da cidade no campo de busca
2. Pressione Enter ou clique no ícone de busca
3. Use o botão de localização para obter o clima da sua cidade atual
4. Explore a previsão para os próximos 5 dias

## 🎨 Estrutura do Projeto

```
src/
├── app/
│   └── page.tsx           # Página principal
├── components/
│   ├── WeatherCard.tsx   # Card principal do clima
│   ├── WeatherDetails.tsx # Detalhes do clima
│   ├── Forecast.tsx      # Previsão para 5 dias
│   ├── SearchBar.tsx     # Barra de pesquisa
│   ├── LoadingSpinner.tsx # Spinner de carregamento
│   └── ErrorMessage.tsx  # Mensagens de erro
├── types/
│   └── weather.ts        # Tipos TypeScript
└── utils/
    └── weather.ts        # Funções utilitárias
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request


## 🙏 Agradecimentos

- [OpenWeatherMap](https://openweathermap.org/) por fornecer a API de dados meteorológicos
- [Next.js](https://nextjs.org/) pelo framework incrível
- [Tailwind CSS](https://tailwindcss.com/) pelos estilos utilitários
- [Framer Motion](https://www.framer.com/motion/) pelas animações suaves

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões, por favor, abra uma issue no GitHub.

---

Desenvolvido com ❤️ por [Seu Nome](https://github.com/evertonceciliano)
