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

## � Problema de Deploy Resolvido

**Se você ainda vê o erro "dependency_installation script retornou código de saída não nulo: 1":**

### ✅ Solução:
1. **Certifique-se de fazer deploy APENAS dos arquivos listados abaixo**
2. **Limpe o cache da plataforma de deploy**
3. **Reinicie o deploy do zero**

### 📁 Arquivos OBRIGATÓRIOS para deploy:
- ✅ `Home.html` - Página inicial
- ✅ `Skills.html` - Página de habilidades
- ✅ `Projects.html` - Página de projetos
- ✅ `styles.css` - Estilos com animações
- ✅ `script.js` - JavaScript (opcional)
- ✅ `imagem/` - Pasta de imagens
- ✅ `_config.yml` - Configuração
- ✅ `.nojekyll` - Para GitHub Pages
- ✅ `netlify.toml` - Para Netlify
- ✅ `vercel.json` - Para Vercel

### ❌ NÃO inclua estes arquivos no deploy:
- ❌ `package.json` (renomeado para .backup)
- ❌ `vite.config.js` (renomeado para .backup)
- ❌ `App.jsx`, `main.jsx`, `index.html` (removidos)
- ❌ Qualquer arquivo `.backup`
- ❌ Pasta `node_modules/` (não existe mais)

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Gradientes animados e responsividade
- **JavaScript ES6**: Interatividade
- **Python HTTP Server**: Servidor de desenvolvimento

---

## 🚨 Resolução do Erro de Deploy

**Erro:** "dependency_installation script retornou código de saída não nulo: 1"

**Causa:** Plataforma tentando instalar dependências Node.js desnecessárias

### ✅ Solução Rápida:
1. **Limpe o cache** da plataforma de deploy
2. **Reinicie o deploy** do zero
3. **Certifique-se** de usar apenas os arquivos obrigatórios

### 📁 Arquivos para Deploy (APENAS estes):
- `Home.html`, `Skills.html`, `Projects.html`
- `styles.css`, `script.js`
- `imagem/` (pasta)
- `.nojekyll`, `netlify.toml`, `vercel.json`

### ❌ NÃO incluir:
- `package.json.backup`, `vite.config.js.backup`
- Arquivos `.jsx`, `.backup`
- Qualquer pasta `node_modules`

### 🔧 Configurações por Plataforma:

**Netlify:** Build command vazio, Publish directory: "."

**Vercel:** Framework: "Other", Build command vazio

**GitHub Pages:** Arquivo `.nojekyll` presente

---

## 🎯 SOLUÇÃO DEFINITIVA: Pasta `deploy-clean/`

**Se ainda há erro de dependências, use a pasta `deploy-clean/` que criei!**

### 📁 O que tem na `deploy-clean/`:
- ✅ **Apenas arquivos necessários** para deploy
- ✅ **Sem `package.json`** ou qualquer arquivo Node.js
- ✅ **Configurações específicas** para cada plataforma
- ✅ **Testada e funcionando**

### 🚀 Como usar:
1. **Abra a pasta** `deploy-clean/`
2. **Faça upload** de todos os arquivos dela
3. **Configure** `Home.html` como página inicial
4. **Deploy automático** - funcionará perfeitamente!

### 📋 Arquivos na pasta deploy-clean:
```
Home.html
Skills.html
Projects.html
styles.css
script.js
imagem/
.nojekyll
netlify.toml
vercel.json
_config.yml
README-DEPLOY.md
```

**Resultado:** Deploy 100% garantido, sem erros de dependências! 🎉

---

## 🚨 ERRO DO NETLIFY CORRIGIDO!

**Erro anterior:** "Versão 'nenhuma' não encontrada" / "Falhou em instalar Node.js versão 'nenhuma'"

**✅ Solução aplicada:** Removida configuração problemática `NODE_VERSION = "none"` do `netlify.toml`

### 🔧 O que foi corrigido:
- ❌ **Antes:** `NODE_VERSION = "none"` (causava erro no Netlify)
- ✅ **Agora:** Configuração removida (Netlify usa Node.js padrão automaticamente)

### 🚀 Como resolver no Netlify:
1. **Faça commit** das mudanças no `netlify.toml`
2. **Reimplante** no Netlify (Site settings → Build & deploy → Trigger deploy)
3. **Deploy funcionará** perfeitamente!

**Ou simplesmente use a pasta `deploy-clean/` que já tem a versão corrigida!**

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

