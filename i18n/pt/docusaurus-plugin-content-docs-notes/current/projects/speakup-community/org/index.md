---
title: "Estrutura de Cargos — visão geral"
description: "Como o SpeakUp Community se organiza: Heads, Líderes de Área, ADMs e Voluntários."
slug: "/projects/speakup-community/org"
sidebar_position: 0
image: /img/speakup/speakup-og.png
---

## Navegação rápida

- [Heads](./heads) - Heads do SpeakUp Community, responsáveis por organizar e coordenar as atividades da comunidade.
- [Líderes de Área](./area-leads) - Líderes que supervisionam áreas específicas dentro da comunidade.

## Diagrama da hierarquia

<div className="alert alert--info"><span>Os componentes do diagrama são clicáveis e levam a seções específicas da documentação.</span></div>
<br/>

```mermaid
%%{init: {
  'securityLevel': 'loose',
  'flowchart': {
    'htmlLabels': false,
    'useMaxWidth': true,
    'nodeSpacing': 50,
    'rankSpacing': 80
  }
}}%%
flowchart LR
  H1["Head de Encontros & Dinâmicas"]
  H2["Head de Marketing"]
  H3["Head de Comunidade & Clubes"]
  H4["Head de Plataforma & Infra"]

  H1 --> L1["Líder de Organização & Logística (remoto)"]
  H1 --> L2["Líder de Moderação & Facilitação Comunitária (remoto)"]
  H1 --> L3["Líder de Dinâmicas & Salas Temáticas (remoto)"]
  H1 --> L4["Líder de Operações & Logística (presencial)"]
  H1 --> L5["Líder de Dinâmicas & Eventos Temáticos (presencial)"]

  H2 --> L6["Líder de Marketing (remoto)"]
  H2 --> L7["Líder de Marketing (presencial)"]

  H3 --> L8["Líder de Comunidade (RH)"]
  H3 --> L9["Líder de Clubes"]

  H4 --> L10["Líder de Projetos Tech"]
  H4 --> L11["Líder do Discord"]

  %% ADMs e Voluntários por área (nós distintos)
  L1 --> A1["ADMs (Org & Log rem)"]
  A1 --> V1["Voluntários (Org & Log rem)"]

  L2 --> A2["ADMs (Mod & Facil rem)"]
  A2 --> V2["Voluntários (Mod & Facil rem)"]

  L3 --> A3["ADMs (Dinâmicas & Salas rem)"]
  A3 --> V3["Voluntários (Dinâmicas & Salas rem)"]

  L4 --> A4["ADMs (Operações & Log pres)"]
  A4 --> V4["Voluntários (Operações & Log pres)"]

  L5 --> A5["ADMs (Dinâmicas & Temáticos pres)"]
  A5 --> V5["Voluntários (Dinâmicas & Temáticos pres)"]

  L6 --> A6["ADMs (Marketing rem)"]
  A6 --> V6["Voluntários (Marketing rem)"]

  L7 --> A7["ADMs (Marketing pres)"]
  A7 --> V7["Voluntários (Marketing pres)"]

  L8 --> A8["ADMs (Comunidade)"]
  A8 --> V8["Voluntários (Comunidade)"]

  L9 --> A9["ADMs (Clubes)"]
  A9 --> V9["Voluntários (Clubes)"]

  L10 --> A10["ADMs (Projetos Tech)"]
  A10 --> V10["Voluntários (Projetos Tech)"]

  L11 --> A11["ADMs (Discord)"]
  A11 --> V11["Voluntários (Discord)"]

  %% Links clicáveis
  click H1 "./heads#head-events-activities" "Abrir Head de Encontros & Dinâmicas"
  click H2 "./heads#head-marketing" "Abrir Head de Marketing"
  click H3 "./heads#head-community-clubs" "Abrir Head de Comunidade & Clubes"
  click H4 "./heads#head-platform-infra" "Abrir Head de Plataforma & Infra"

  click L1 "./area-leads#remote-organization-logistics" "Organização & Logística (remoto)"
  click L2 "./area-leads#remote-moderation-facilitation" "Moderação & Facilitação (remoto)"
  click L3 "./area-leads#remote-activities-rooms" "Dinâmicas & Salas (remoto)"
  click L4 "./area-leads#in-person-operations-logistics" "Operações & Logística (presencial)"
  click L5 "./area-leads#in-person-activities-thematic-events" "Dinâmicas & Eventos Temáticos (presencial)"
  click L6 "./area-leads#remote-marketing" "Marketing (remoto)"
  click L7 "./area-leads#in-person-marketing" "Marketing (presencial)"
  click L8 "./area-leads#community-hr" "Líder de Comunidade (RH)"
  click L9 "./area-leads#clubs" "Líder de Clubes"
  click L10 "./area-leads#tech-projects" "Líder de Projetos Tech"
  click L11 "./area-leads#discord" "Líder do Discord"

  click A1 "./areas/remote-organization-logistics#area-admin" "ADMs (Org & Log rem)"
  click A2 "./areas/remote-moderation-facilitation#area-admin" "ADMs (Mod & Facil rem)"
  click A3 "./areas/remote-activities-rooms#area-admin" "ADMs (Dinâmicas & Salas rem)"
  click A4 "./areas/in-person-operations-logistics#area-admin" "ADMs (Operações & Log pres)"
  click A5 "./areas/in-person-activities-thematic-events#area-admin" "ADMs (Dinâmicas & Temáticos pres)"
  click A6 "./areas/remote-marketing#area-admin" "ADMs (Marketing rem)"
  click A7 "./areas/in-person-marketing#area-admin" "ADMs (Marketing pres)"
  click A8 "./areas/community-hr#area-admin" "ADMs (Comunidade)"
  click A9 "./areas/clubs#area-admin" "ADMs (Clubes)"
  click A10 "./areas/tech-projects#area-admin" "ADMs (Projetos Tech)"
  click A11 "./areas/discord#area-admin" "ADMs (Discord)"

  click V1 "./areas/remote-organization-logistics#area-volunteer" "Voluntários (Org & Log rem)"
  click V2 "./areas/remote-moderation-facilitation#area-volunteer" "Voluntários (Mod & Facil rem)"
  click V3 "./areas/remote-activities-rooms#area-volunteer" "Voluntários (Dinâmicas & Salas rem)"
  click V4 "./areas/in-person-operations-logistics#area-volunteer" "Voluntários (Operações & Log pres)"
  click V5 "./areas/in-person-activities-thematic-events#area-volunteer" "Voluntários (Dinâmicas & Temáticos pres)"
  click V6 "./areas/remote-marketing#area-volunteer" "Voluntários (Marketing rem)"
  click V7 "./areas/in-person-marketing#area-volunteer" "Voluntários (Marketing pres)"
  click V8 "./areas/community-hr#area-volunteer" "Voluntários (Comunidade)"
  click V9 "./areas/clubs#area-volunteer" "Voluntários (Clubes)"
  click V10 "./areas/tech-projects#area-volunteer" "Voluntários (Projetos Tech)"
  click V11 "./areas/discord#area-volunteer" "Voluntários (Discord)"
```
