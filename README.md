# Instituto Vozes Fortes

Educação, Cultura, Comunicação e Desenvolvimento Social.

O Instituto Vozes Fortes dá espaço à voz de quem luta contra a dependência química e a codependência. Atuamos com formação, conscientização e produção de conteúdo para inspirar esperança e transformar realidades.

## Como apoiar

Na seção "Amplifique essas Vozes" do site você encontra 4 formas de apoio:

- Doação financeira: mantém oficinas, equipamentos e a divulgação de histórias reais.
- Voluntariado: doe seu tempo e talento (tecnologia, design, psicologia, comunicação, mentoria etc.).
- Parcerias: empresas podem apoiar via patrocínio e cocriação de ações de impacto.
- Compartilhar o projeto: a forma mais simples de ampliar nosso alcance.

Contato/WhatsApp: +55 14 99733-5195

Site: https://vozesfortes.com.br/

## Tecnologias

- React + Vite
- TypeScript
- Tailwind CSS
- shadcn/ui (Radix)
- Lucide Icons

## Desenvolvimento

Requisitos: Node.js 18+ e npm 9+

```sh
npm i
npm run dev
```

Build e preview:

```sh
npm run build
npm run preview
```

## Estrutura (resumo)

```
VozesFortes/
  public/
  src/
    assets/
    components/
    pages/
    hooks/, lib/
  index.html
  tailwind.config.ts
  vite.config.ts
```

## Deploy

O build gera estáticos em `dist/`, prontos para Vercel, Netlify ou qualquer host estático.

## Onde editar conteúdo

- Textos das seções: `src/components/*Section.tsx`
- Metatags e favicon: `index.html`
