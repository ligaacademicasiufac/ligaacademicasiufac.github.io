# Site institucional da LASI

Site da **Liga Acadêmica de Sistemas de Informação da UFAC**, construído com Astro, TypeScript, GSAP e GitHub Pages.

## Escopo implementado

O projeto cobre as fases 1 a 4 do planejamento:

1. Fundação visual: tokens, paleta, tipografia, assets, componentes e padrões de layout.
2. MVP funcional: Home, Sobre, Áreas, Projetos, Eventos, Conquistas, Diretoria, Participe, Links da bio e página 404.
3. Motion design: hero animado, scroll reveal, parallax, contadores, linhas SVG, microinterações e suporte a `prefers-reduced-motion`.
4. Conteúdo institucional: diretoria 2026, áreas estratégicas, eventos, projetos e trilhas de formação.

## Requisitos

- Node.js 22.12 ou superior.
- npm 10 ou superior.

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor local será iniciado em `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

O repositório configurado é:

```text
ligaacademicasiufac/ligaacademicasiufac.github.io
```

A URL esperada é:

```text
https://ligaacademicasiufac.github.io/
```

No GitHub:

1. Abra **Settings → Pages**.
2. Em **Build and deployment**, selecione **GitHub Actions**.
3. Faça push na branch `main`.

O workflow `.github/workflows/deploy.yml` executará o build e a publicação.

## Como editar conteúdo

### Dados institucionais

Arquivo:

```text
src/data/site.ts
```

Atualize ali:

- links sociais;
- link direto do WhatsApp;
- diretoria;
- áreas;
- eventos;
- métricas;
- informações de eventos e seus resultados.

### Projetos

Cada projeto é um arquivo Markdown em:

```text
src/content/projects/
```

Exemplo:

```yaml
---
title: "Nome do projeto"
eyebrow: "Categoria"
summary: "Resumo curto"
year: 2026
status: "ativo"
area: "engenharia-software"
featured: true
order: 1
cover: "/projects/capa.webp"
tags:
  - "Astro"
  - "TypeScript"
---
```

### Assets

- `public/brand/`: logo, marca e cavalo.
- `public/team/`: diretoria.
- `public/social/`: QR Code e Open Graph.
- `public/projects/`: imagens dos projetos.

## Pendências editoriais

- Substituir `site.whatsapp` pelo link direto do grupo.
- Validar grafia oficial dos cargos da diretoria.
- Adicionar descrição institucional aprovada.
- Adicionar logos e imagens originais dos projetos.
- Confirmar domínio institucional, caso a UFAC forneça um subdomínio.
- Revisar autorizações de uso das fotografias.

## Stack

- Astro 7
- TypeScript
- GSAP + ScrollTrigger
- CSS modular por componente
- Content Collections
- GitHub Actions
- GitHub Pages
