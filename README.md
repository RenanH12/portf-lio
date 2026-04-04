# 🚀 Portfólio Completo com Gradiente Animado

Um portfólio profissional com uma animação de fundo 3D impressionante usando **gradiente CSS animado**! **Versão sem Node.js** - funciona apenas com navegador moderno.

## ✨ Funcionalidades

- 🎨 **Gradiente Animado CSS**: Fundo dinâmico com movimento contínuo
- ⚛️ **Sem dependências externas**: Funciona apenas com CSS
- 🎯 **Navegação Fluida**: Transição suave entre seções
- 📱 **100% Responsivo**: Funciona em todos os dispositivos
- 🎭 **Animações CSS**: Efeitos visuais sofisticados
- 🐍 **Servidor Python**: Desenvolvimento local sem Node.js
- ✨ **Efeitos de Luz**: Pontos de luz animados sobre o gradiente
- 🌈 **Bordas Animadas**: Bordas coloridas e animadas nos menus e seções

## 📋 Requisitos

- **Python 3** (para servidor local)
- **Navegador moderno** com suporte a CSS3

## 🛠️ Como Usar

### 1. Inicie o servidor local

```bash
python -m http.server 8000
```

### 2. Abra no navegador

Acesse: `http://localhost:8000/Home.html` (portfólio original) ou `http://localhost:8000/portfolio-final.html` (versão consolidada)

## 📁 Arquivos

- `Home.html` - Página inicial com perfil e contato
- `Skills.html` - Página de habilidades e tecnologias  
- `Projects.html` - Página de projetos realizados
- `portfolio-final.html` - Versão consolidada (opcional)
- `styles.css` - Estilos CSS com animações e gradiente
- `script.js` - JavaScript adicional (opcional)
- `imagem/` - Pasta para suas imagens

## 🎨 Personalização

### Cores do Gradiente
Edite as propriedades no `portfolio-final.html`:
```css
background: linear-gradient(-45deg, #006fc4, #8400ff, #ff00ff, #0bc9eb);
```

### Velocidade da Animação
Modifique o tempo da animação:
```css
animation: gradientShift 8s ease infinite; /* Mude 8s para outro valor */
```

### Conteúdo
Personalize:
- Texto das seções
- Imagens (adicione na pasta `imagem/`)
- Links de contato
- Projetos e habilidades

## 🏗️ Build para Produção

Para produção, basta hospedar os arquivos `portfolio-final.html`, `styles.css` e `imagem/` em qualquer servidor web estático.

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Gradientes animados e responsividade
- **JavaScript ES6**: Interatividade
- **Python HTTP Server**: Servidor de desenvolvimento

---

**🎉 Pronto!** Seu portfólio com gradiente animado está funcionando perfeitamente!

## 📁 Estrutura do Projeto

```
├── App.jsx              # Componente principal com ShaderGradient
├── main.jsx             # Entry point do React
├── index-vite.html      # HTML template
├── vite.config.js       # Configuração Vite
├── package.json         # Dependências e scripts
├── styles.css           # Estilos e animações
├── Home.html            # HTML antigo (referência)
├── Projects.html        # HTML antigo (referência)
├── Skills.html          # HTML antigo (referência)
├── script.js            # JS antigo (referência)
└── imagem/              # Pasta de imagens
```

## 🎨 Personalização do ShaderGradient

Edite o componente `<ShaderGradient>` em `App.jsx` para:

- **color1, color2, color3**: Alterar as cores do gradiente
- **brightness**: Ajustar luminosidade (0-2)
- **uSpeed**: Velocidade da animação
- **uAmplitude**: Amplitude das ondas
- **uFrequency**: Frequência das ondas

## 🔄 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Compila para produção |
| `npm run preview` | Preview da build de produção |

## 📦 Dependências Principais

- **React 18.2.0**: Biblioteca UI
- **Vite 4.3.0**: Build tool rápido
- **@shadergradient/react**: Componente de gradiente 3D
- **@shadergradient/core**: Core do ShaderGradient

## 🚀 Deployment

### Opção 1: Vercel
```bash
npm i -g vercel
vercel
```

### Opção 2: Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

### Opção 3: GitHub Pages
```bash
npm run build
# Copie o conteúdo de `dist/` para seu repositório
```

## 🐛 Troubleshooting

### ShaderGradient não carrega?
- Certifique-se de que executou `npm install`
- Limpe o cache: `rm -rf node_modules && npm install`
- Reinicie o servidor: `npm run dev`

### Erro de porta 3000 já em uso?
```bash
npm run dev -- --port 3001
```

## 📝 Licença

MIT

## 👨‍💻 Autor

Seu Nome - 2026

---

**Dica**: Se importância uma versão sem dependências externas, use o `index.html` antigo que usa React via CDN!

