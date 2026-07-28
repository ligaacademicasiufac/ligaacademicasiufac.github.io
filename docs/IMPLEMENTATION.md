# Implementação das fases 1 a 4

## Fase 1 — Fundação visual

- Paleta institucional centralizada em `src/styles/tokens.css`.
- Tipografia de impacto com Archivo Black e Space Grotesk.
- Componentes com fundos azul-marinho, gradientes violeta, linhas técnicas e transparências.
- Assets processados em `public/brand`, `public/team` e `public/social`.
- Layout responsivo e padrões reutilizáveis de botões, painéis, tags e títulos.

## Fase 2 — MVP funcional

Rotas implementadas:

- `/`
- `/sobre/`
- `/areas/`
- `/areas/[slug]/`
- `/projetos/`
- `/projetos/[slug]/`
- `/eventos/`
- `/conquistas/`
- `/diretoria/`
- `/participe/`
- `/links/`
- `/404/`

O site está configurado para geração estática e publicação no GitHub Pages.

## Fase 3 — Motion design

- Timeline de entrada no hero.
- Revelação progressiva durante o scroll.
- Parallax moderado.
- Contadores animados.
- Linhas SVG desenhadas progressivamente.
- Botões magnéticos no desktop.
- Brilho que acompanha o ponteiro.
- Fallback completo para `prefers-reduced-motion`.

## Fase 4 — Conteúdo institucional

- Diretoria 2026.
- Três áreas estratégicas.
- Eventos e seus resultados.
- Projetos em Content Collections.
- Agenda inicial e chamadas para participação.
- Hub de links para a bio do Instagram.

## Decisões técnicas

- Astro para geração estática e roteamento.
- Content Collections para conteúdo versionado.
- GSAP e ScrollTrigger somente nas interações que exigem timeline.
- CSS nativo para microinterações e responsividade.
- GitHub Actions para deploy.

## Próximas validações

- Confirmar o link direto do grupo do WhatsApp.
- Revisar textos institucionais com a diretoria.
- Substituir imagens derivadas das artes por arquivos originais quando disponíveis.
- Executar `npm install` e `npm run build` em ambiente com acesso ao registro npm.
- Validar Lighthouse, navegação por teclado e contraste após o primeiro deploy.
