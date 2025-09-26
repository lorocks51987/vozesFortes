# Instituto Vozes Fortes – Landing Page

> Educação, Cultura, Comunicação e Desenvolvimento Social

Landing page do Instituto Vozes Fortes construída com Vite, React, TypeScript, Tailwind CSS e componentes shadcn.

## Tecnologias

- Vite (React + SWC)
- TypeScript
- Tailwind CSS
- shadcn/ui (componentes Radix)
- Lucide Icons

## Requisitos

- Node.js LTS (18+ recomendado)
- npm 9+

## Como rodar localmente

```sh
npm i
npm run dev
```
- A aplicação iniciará em: http://localhost:5173

## Build e Preview

```sh
npm run build       # Gera artefatos em ./dist
npm run preview     # Sobe um server local para revisar o build
```

## Scripts úteis

- `npm run dev`: desenvolvimento com HMR
- `npm run build`: build de produção
- `npm run preview`: servidor estático para pré-visualização do build
- `npm run lint`: checagem de lint

## Estrutura do projeto (resumo)

```
VozesFortes/
  public/                 # Assets públicos (servidos como estáticos)
  src/
    assets/               # Imagens do site (logo, banners, fotos de seções)
    components/           # Componentes de UI e seções (Hero, Footer, etc.)
    pages/                # Páginas (Index)
    hooks/, lib/          # Hooks utilitários e helpers
  index.html              # Metadados, título e favicon
  tailwind.config.ts      # Configuração do Tailwind
  vite.config.ts          # Configuração do Vite
```

## Personalizações principais

- Remoção completa de referências a Lovable (deps, metadados e README).
- Favicon atualizado para `src/assets/logo.png`.
- Hero com banner e logo do instituto, botões de CTA.
- Seção “O Que Fazemos” com ícones e textos institucionais.
- Seção “Da Pele para Dentro” com logo ao lado do título e conteúdo expandido.
- Seções de Produção Editorial, Cursos e Projetos Digitais com imagens e descrições.

## Onde alterar conteúdo/Imagens

- Títulos/descrições de seções: `src/components/*Section.tsx`
- Banner do herói: `src/components/HeroSection.tsx` (variável `heroBackground`)
- Logo do herói: `src/assets/logo.png` (importado no `HeroSection`)
- Logo “Da Pele para Dentro”: `src/assets/PelePraDentro.png` (usado em `ConsciousnessSection`)
- Metatags (título, descrição, open graph, twitter): `index.html`
- Favicon: `index.html` → `<link rel="icon" href="/src/assets/logo.png" />`

## Estilo e UI

- Tailwind CSS utilitários (classes responsivas `sm/ md/ lg/ ...`).
- Componentes shadcn/ui baseados em Radix (ex.: Button, Card, Dialog, etc.).
- Ícones via `lucide-react`.

## Deploy

- O build gera estáticos em `dist/` que podem ser servidos por qualquer host estático (Vercel, Netlify, GitHub Pages, Nginx, S3/CloudFront, etc.).
- Exemplo (Vercel): conectar o repositório e usar o comando padrão `npm run build`. Output: `dist`.

## Convenções

- Código em TypeScript com foco em legibilidade.
- Seguir padrões de formatação do projeto e evitar mudar estilos não relacionados durante edições.

## Suporte

Caso precise de ajustes de conteúdo/estilo (imagens, textos, posições de logos e CTAs), abra um issue ou descreva a necessidade no canal de suporte do projeto.
