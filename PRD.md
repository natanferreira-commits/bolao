# PRD — Bolão da Convocação 2026

**Produto:** Landing page de bolão da pré-convocação da Seleção Brasileira pra Copa do Mundo 2026
**Versão deste documento:** 0.1 (MVP)
**Data:** 2026-05-14
**Owner do produto:** Natan Puggian
**Status:** Em planejamento — pré-desenvolvimento
**Janela de operação:** Esta semana (lançamento sex/sáb · fechamento dom 23h59 · convocação real segunda · divulgação vencedor quarta)

---

## 1. Sumário Executivo

O **Bolão da Convocação 2026** é uma campanha relâmpago de fim de semana que aproveita o **momento exato da convocação oficial da Seleção Brasileira pra Copa do Mundo 2026** (segunda-feira) pra capturar CPA qualificado e construir base pro grupo VIP da Copa.

A mecânica é simples e adictiva: o usuário monta sua própria escalação de 26 jogadores escolhendo de uma pré-lista já divulgada de **52 nomes**, divididos em 4 posições (goleiros, defensores, meio, atacantes). Quem chegar mais perto da convocação real do Ancelotti **leva um prêmio MUITO foda** (a definir interno — proposta: viagem pra jogo da Copa 2026 ou R$ 10.000 cash).

Pra validar a participação, o usuário precisa:
1. Criar conta numa das casas parceiras pelo link de afiliado **do afiliado Arena que o trouxe**
2. Enviar print de depósito a partir de R$50

Quem completa o gate ganha **acesso ao Grupo VIP do Mateus** com tips diárias da Copa.

A campanha é divulgada simultaneamente por **6 afiliados Arena**, cada um com seu próprio referral, e os links de cada casa são personalizados por afiliado (matriz afiliado × casa).

---

## 2. Contexto e Problema

### Situação atual

- Convocação oficial da Seleção sai **segunda-feira** — pico de atenção do público
- Pré-lista de 52 nomes **já foi divulgada** pela CBF, reduzindo incerteza
- Audiência das redes Arena está fervendo discutindo "quem o Ancelotti vai chamar"
- Existe um repo funcional (`github.com/natanferreira-commits/bolao`) com fluxo de bolão do Brasileirão que pode ser fork-ado e adaptado
- Arena tem 6 afiliados ativos prontos pra divulgar simultaneamente
- A Dupla Aposta tem grupo VIP do Mateus já estruturado — esta campanha alimenta ele

### Problemas que a campanha resolve

1. **Captação de CPA aproveitando momento cultural** — convocação é o assunto da semana
2. **Diversificação de mecânica** — bolão de escalação é diferente do pacote/giro/aposta segura, refresca o portfólio
3. **Ativação coordenada de afiliados** — 6 afiliados Arena divulgando junto cria efeito de massa
4. **Construção de base pro grupo VIP da Copa** — quem entra agora vira audiência cativa pelos próximos 60 dias até o início do mundial
5. **Atribuição limpa por afiliado** — sistema de referral identifica qual afiliado gerou cada CPA, justificando pagamento proporcional

### Oportunidade

- Pré-Copa é o **maior momento de captação do ano** pra casas de apostas
- Cada afiliado Arena tem audiência distinta (futebol, NBA, lives) — o bolão é universal o suficiente pra converter todos
- O grupo VIP pós-conversão tem valor recorrente: tips diárias mantém usuário engajado e gerando receita pra casa

---

## 3. Objetivos

### Objetivos primários
- **Captar 500-1.500 CPAs qualificados** (com depósito a partir de R$50) entre sex/dom
- **Adicionar 500+ membros ao Grupo VIP da Copa** do Mateus
- **Distribuir conversões entre os 6 afiliados Arena** com atribuição limpa via referral

### Objetivos secundários
- Validar mecânica de bolão de escalação pra próximas campanhas (oitavas, quartas, semifinais da Copa)
- Coletar base de email + WhatsApp pra remarketing pré-Copa
- Testar a infra de **links de afiliado por (afiliado × casa)** que será reusada em todas as próximas campanhas Arena

### Não-objetivos
- ❌ Não é campanha de longo prazo — é relâmpago de fim de semana
- ❌ Não substitui o Pacote Premiado — roda em paralelo, com mecânica diferente
- ❌ Não é apenas captação — o prêmio precisa ser real e entregue (campanha tem reputação em jogo)

---

## 4. Público-Alvo

### Persona primária — "Apostador casual com paixão pela Seleção"
- Homem, 22-45 anos
- Acompanha futebol em nível médio-alto
- Tem opinião sobre quem deveria ser convocado
- Já apostou online algumas vezes ou nunca apostou
- Consome conteúdo dos afiliados Arena (Mateus, Barba, ZZ, Rayo, Rennan + 1)
- Sensível a **timing emocional** — convocação é assunto de bar

### Persona secundária — "Caçador de promoção"
- Já apostou em várias casas
- Procura ativamente bônus e promoções
- Vai criar conta nova se o gancho for forte
- **Cuidado:** este perfil tende a depositar R$50 e sair → educa a casa a marcar a campanha como bônus abuse se for maioria

### Tom de voz
- Casual, brasileiro, sem firula corporativa
- Foco em **"qual é a sua escalação?"** — convida participação
- Evita promessa de ganho garantido
- Compliance: +18, jogo responsável, telefone 0800

---

## 5. Mecânica do Bolão

### 5.1 Pré-lista oficial (52 nomes — já divulgada pela CBF)

**Goleiros (6)**
- Alisson (Liverpool)
- Bento (Al-Nassr)
- Ederson (Fenerbahçe)
- Hugo Souza (Corinthians)
- John (Nottingham Forest)
- Weverton (Grêmio)

**Defensores (20)**
- Alex Sandro (Flamengo)
- Alexsandro Ribeiro (Lille)
- Bremer (Juventus)
- Carlos Augusto (Inter de Milão)
- Danilo (Flamengo)
- Douglas Santos (Zenit)
- Fabricio Bruno (Cruzeiro)
- Gabriel Magalhães (Arsenal)
- Ibañez (Al-Ahli)
- Kaiki Bruno (Cruzeiro)
- Leo Ortiz (Flamengo)
- Leo Pereira (Flamengo)
- Luciano Juba (Bahia)
- Marquinhos (PSG)
- Natan (Betis)
- Paulo Henrique (Vasco)
- Thiago Silva (Porto)
- Vitinho (Botafogo)
- Vitor Reis (Girona)
- Wesley (Roma)

**Meio-campo (12)**
- Andreas Pereira (Palmeiras)
- Andrey Santos (Chelsea)
- Bruno Guimarães (Newcastle)
- Casemiro (Manchester United)
- Danilo (Botafogo)
- Ederson (Atalanta)
- Fabinho (Al-Ittihad)
- Gabriel Sara (Galatasaray)
- Gerson (Cruzeiro)
- João Gomes (Wolverhampton)
- Lucas Paquetá (Flamengo)
- Matheus Pereira (Cruzeiro)

**Atacantes (16)**
- Antony (Betis)
- Endrick (Lyon)
- Gabriel Martinelli (Arsenal)
- Gabriel Jesus (Arsenal)
- Igor Jesus (Nottingham Forest)
- Igor Thiago (Brentford)
- João Pedro (Chelsea)
- Kaio Jorge (Cruzeiro)
- Luiz Henrique (Zenit)
- Matheus Cunha (Manchester United)
- Neymar (Santos)
- Pedro (Flamengo)
- Raphinha (Barcelona)
- Rayan (Bournemouth)
- Richarlison (Tottenham)
- Samuel Lino (Flamengo)
- Vini Jr (Real Madrid)

### 5.2 Regra de seleção
- O usuário escolhe **exatamente 26 jogadores** dos 52
- Distribuição livre dentro de cada posição, mas precisa ter **pelo menos** 3 goleiros, 7 defensores, 5 meios, 4 atacantes (regra padrão de convocação Copa 2026)
- Não pode escolher menos nem mais que 26

### 5.3 Pontuação — "Acerto Cego"
- **+1 ponto** por cada jogador que o usuário escolheu que estiver na convocação real
- Pontuação máxima possível: **26 pontos** (todos certos)
- Pontuação mínima de campeonato esperada: **15-18 pontos** (base óbvia)

### 5.4 Critério de desempate
- Se 1 pessoa tiver pontuação máxima → vence sozinha
- Se 2+ pessoas empatarem com pontuação máxima → **sorteio ao vivo** transmitido no canal do Mateus na quarta-feira (gera engajamento extra)
- **NÃO divide o prêmio** — sorteio é mais hype

### 5.5 Janela de participação
- **Abre:** sexta 20h
- **Fecha:** domingo 23h59 (a convocação real é segunda)
- **Convocação real:** segunda (horário a confirmar)
- **Divulgação vencedor:** quarta no canal do Mateus

---

## 6. Funil do Usuário

### Tela 1 — Hero
> 🇧🇷 **BOLÃO DA CONVOCAÇÃO**
> Monte os 26 nomes que o Ancelotti vai chamar pra Copa
> Quem chegar mais perto leva [PRÊMIO]
> +18 · Jogo responsável

CTA: **"COMEÇAR MEU BOLÃO →"**

### Tela 2 — Form de dados
- Nome completo
- Email
- WhatsApp
- Casa de cadastro (escolhe uma das parceiras)

### Tela 3 — Montar escalação
- 4 abas/seções: Goleiros · Defensores · Meio · Atacantes
- Cards com foto + nome + clube
- Contador no topo: **"15/26 selecionados"**
- Indicador de mínimos por posição
- Botão de **"Confirmar minha escalação"** só ativa quando bate 26 com mínimos cumpridos

### Tela 4 — Validate (cadastro)
> **PASSO 1 DE 2**
> Crie sua conta na [casa escolhida] pelo nosso link de parceiro
> [BOTÃO: Criar conta na [casa] →]

Link de afiliado **personalizado pelo afiliado Arena** que trouxe o usuário (matriz vendor × casa).

### Tela 5 — Upload de print
> **PASSO 2 DE 2**
> Fez seu primeiro depósito a partir de R$50?
> Manda o print aqui pra validar tua participação:
> [BOTÃO: Enviar print →]

Aceita JPG/PNG, max 5MB.
Salva em Supabase Storage.
Status do registro: `aguardando_validacao`.

### Tela 6 — Pending
> ⏳ **Tua participação está em análise.**
> Em até 6 horas a gente valida e libera teu acesso ao Grupo VIP da Copa do Mateus.
> Enquanto isso, segue [@duplaaposta] e o canal do [@afiliado] no Insta.

### Tela 7 — Approved (após admin aprovar)
> ✅ **Liberado, [nome]!**
> Bem-vindo ao Grupo VIP da Copa do Mateus.
> [BOTÃO: Entrar no grupo →]
>
> Tua escalação tá registrada — fica de olho na convocação de segunda e na divulgação do vencedor na quarta.

---

## 7. Stack Técnico

### Base — fork do repo `github.com/natanferreira-commits/bolao`

| Camada | Tech | Reuso |
|---|---|---|
| Framework | React + Vite | ✅ 100% reuso |
| Estilização | CSS puro (App.css) | ✅ 80% reuso, ajusta tema pra Copa |
| Persistência | Google Sheets API (`lib/sheets.js`) | ✅ 100% reuso |
| Storage de prints | Supabase Storage (`lib/supabase.js`) | ✅ Já tá conectado, só falta usar |
| Atribuição vendor | `vendors.js` + `?v=CODIGO` | ⚙️ Adaptar pra `?ref=` Arena |
| Links de casa | `houses.js` | ⚠️ **Refatorar** pra matriz vendor × casa |
| Tracking | Google Analytics (window.gtag) | ✅ 100% reuso |
| Hosting | Vercel (já configurado em `vercel.json`) | ✅ 100% reuso |
| Admin | `AdminScreen.jsx` | ⚙️ Adaptar pra fluxo de aprovação de prints |

### Adaptações necessárias

#### a) `vendors.js` — vira `affiliates.js`
```js
export const AFFILIATES = {
  MATEUS:  { name: "Mateus",  whatsappUrl: "...", instagram: "..." },
  BARBA:   { name: "El Barba", whatsappUrl: "...", instagram: "..." },
  ZZ:      { name: "ZZ",       whatsappUrl: "...", instagram: "..." },
  RAYO:    { name: "Rayo",     whatsappUrl: "...", instagram: "..." },
  RENNAN:  { name: "Rennan",   whatsappUrl: "...", instagram: "..." },
  [SEXTO]: { ... }
}
```

#### b) `houses.js` — refatora pra matriz
```js
export const HOUSES = [
  {
    id: "stake",
    name: "Stake",
    logo: "/logos/stake.png",
    affiliateLinks: {
      MATEUS: "https://stake.com/?c=mateus",
      BARBA:  "https://stake.com/?c=barba",
      ZZ:     "https://stake.com/?c=zz",
      RAYO:   "https://stake.com/?c=rayo",
      RENNAN: "https://stake.com/?c=rennan",
      [SEXTO]: "...",
      DEFAULT: "https://stake.com/?c=duplaaposta" // fallback
    }
  },
  // demais casas...
]

export function getHouseLink(houseId, affiliateCode) {
  const house = HOUSES.find(h => h.id === houseId);
  return house?.affiliateLinks?.[affiliateCode] ?? house?.affiliateLinks?.DEFAULT;
}
```

#### c) `games.js` → `players.js`
```js
export const PLAYERS = {
  goalkeepers: [
    { id: 'alisson', name: 'Alisson', club: 'Liverpool', photo: '/players/alisson.png' },
    // ...
  ],
  defenders: [...],
  midfielders: [...],
  forwards: [...]
}

export const SELECTION_RULES = {
  total: 26,
  minByPosition: { goalkeepers: 3, defenders: 7, midfielders: 5, forwards: 4 }
}
```

#### d) Novo `LineupScreen.jsx`
- 4 abas (Goleiros/Defensores/Meio/Atacantes)
- Grid de cards selecionáveis
- Estado de seleção persistido
- Validação de mínimos antes de submit

#### e) Nova `UploadProofScreen.jsx`
- Input file (image/jpg, image/png)
- Preview da imagem antes do envio
- Upload pra Supabase Storage no bucket `proofs`
- Atualiza linha do Google Sheets com URL do print + status `aguardando_validacao`

#### f) `AdminScreen.jsx` — adaptar
- Lista de submissões pendentes
- Preview do print
- Botões: **Aprovar / Rejeitar / Pedir novo**
- Aprovar dispara: muda status no Sheets + envia mensagem WhatsApp via webhook + envia email com link do grupo

---

## 7.5 Painel Administrativo — Detalhamento

O admin é o **coração operacional** da campanha. Sem ele funcionando bem, a campanha trava no funil. Por isso merece um capítulo próprio.

### 7.5.1 Acesso e autenticação

**URL:** `bolaoconvocacao.duplaaposta.com/admin`

**Autenticação:**
- Login via **magic link por email** (Supabase Auth) — sem senha pra gerenciar
- Whitelist de emails autorizados em variável de ambiente
- Sessão dura 7 dias

**Whitelist inicial (sugestão):**
- natan.ferreira@grupodupla.com.br (admin master)
- 2-3 emails do time de operação Dupla
- 1 email do Mateus (visualização do ranking)

**Roles:**
| Role | Permissões |
|---|---|
| `admin` | Tudo: aprovar, rejeitar, ver dados, editar prêmio, exportar, ver audit log |
| `validator` | Só aprovar/rejeitar prints + ver fila |
| `viewer` | Só visualização (Mateus pra ver ranking) |

### 7.5.2 Tela principal — Dashboard

Ao entrar, o admin vê:

**Linha de KPIs em tempo real (topo):**
- 🔵 **Total de cadastros:** [N]
- 🟡 **Aguardando validação:** [N] (com badge piscando se > 50)
- 🟢 **Aprovados:** [N]
- 🔴 **Rejeitados:** [N]
- ⏱️ **Tempo médio de aprovação:** [HHh MMm]
- 🎯 **Conversão (lead → aprovado):** [N%]

**Filtros laterais:**
- Por afiliado (MATEUS, BARBA, ZZ, RAYO, RENNAN, [6º])
- Por casa (Stake, BetMGM, Superbet…)
- Por status (todos, pendente, aprovado, rejeitado)
- Por período (hoje, últimas 24h, sábado, domingo)
- Busca por nome, email, WhatsApp ou entry_id

**Tabela principal (lista de submissões):**
| ID | Nome | WhatsApp | Casa | Afiliado | Print | Status | Enviado há | Ações |
|---|---|---|---|---|---|---|---|---|
| BP-X9F2-K8L1 | João Silva | (21) 99999-9999 | Stake | MATEUS | 🖼️ | 🟡 Pendente | 12 min | [Abrir →] |

Ordenação default: **mais antigos primeiro** (FIFO — evita print ficar parado).

### 7.5.3 Tela de detalhe da submissão

Ao clicar em uma linha, abre modal/página com:

**Coluna esquerda — Preview do print**
- Imagem em tamanho cheio
- Botões: 🔍 Zoom · 📥 Download · 🔄 Girar (caso o cara mande tombado)

**Coluna direita — Dados do participante**
- Nome, email, WhatsApp (clicáveis pra copiar)
- Casa escolhida + link de afiliado usado
- Afiliado de origem (referral)
- Data/hora do cadastro
- Tempo na fila
- IP + dispositivo (pra detectar fraude múltipla)
- **Escalação completa** (lista dos 26 jogadores escolhidos)

**Botões de ação (rodapé sticky):**
- ✅ **Aprovar** (verde, ação primária)
- ❌ **Rejeitar** (vermelho, abre modal com motivo)
- 🔁 **Pedir novo print** (amarelo, manda mensagem automática)
- ⚠️ **Marcar como suspeito** (cinza, vai pra fila de revisão sênior)

### 7.5.4 Ações disparadas

#### ✅ Aprovar
1. Status no Sheets → `aprovado`
2. Marca `approved_at` e `approved_by`
3. Webhook dispara → mensagem WhatsApp via Z-API pro participante com link do Grupo VIP
4. Email automático com link do grupo (fallback se WhatsApp falhar)
5. Notificação pro afiliado de origem: "+1 CPA validado"
6. Atualiza contador do dashboard em tempo real

#### ❌ Rejeitar
- Abre modal com motivos pré-definidos (checkbox):
  - [ ] Print não mostra valor de depósito
  - [ ] Valor abaixo de R$50
  - [ ] Print de outra casa que não a cadastrada
  - [ ] Imagem ilegível
  - [ ] Suspeita de edição/photoshop
  - [ ] Conta não criada via link do afiliado
  - [ ] Outro (campo livre)
- Mensagem automática pro participante com motivo + link pra reenviar
- Permite reenvio até 2 vezes (3ª tentativa vai pra revisão sênior)

#### 🔁 Pedir novo print
- Mantém status `aguardando_validacao`
- Manda WhatsApp pedindo print mais claro
- Não consome tentativa de reenvio

#### ⚠️ Marcar como suspeito
- Status → `revisao_senior`
- Tira da fila padrão
- Só admin master pode resolver
- Útil pra prints suspeitos de photoshop ou padrões repetidos (mesmo IP, mesmo print reaproveitado)

### 7.5.5 Cross-check com casas parceiras

Esse é o **mecanismo anti-fraude mais importante** e merece destaque.

**Problema:** print pode ser photoshop. O admin olhando a olho nu não consegue distinguir 100%.

**Solução em camadas:**

**Camada 1 — Validação visual rápida (no momento da aprovação)**
- Admin confere: usuário na print bate com nome do form? valor ≥ R$50? casa bate com a escolhida?
- 80% dos casos resolve aqui

**Camada 2 — Cross-check em lote (domingo à noite e segunda)**
- Cada casa parceira manda planilha de CPAs gerados no fim de semana
- Admin compara com aprovados no sistema
- Status `aprovado` vira `aprovado_confirmado` ou `aprovado_nao_encontrado`
- `aprovado_nao_encontrado` → revisão manual e contato com participante

**Camada 3 — Bloqueio de prêmio até confirmação**
- Vencedor é anunciado quarta
- Mas pagamento do prêmio só rola após confirmação cruzada
- Termo de adesão deve deixar isso claro: "prêmio sujeito a validação da casa parceira"

### 7.5.6 Notificações pro time

Quando chega print novo:
- 🔔 Notificação push no navegador (se admin estiver com a aba aberta)
- 📧 Email a cada 10 prints novos acumulados (digest, não spam)
- 📱 Mensagem no grupo interno do Telegram a cada 50 prints (alerta de pico)

Quando fila ultrapassa 100 pendentes:
- 🚨 Alerta sonoro no admin
- 📱 Mensagem direta pro admin master

### 7.5.7 Painel de Ranking (pós-convocação)

Aba separada no admin: **"Ranking & Vencedor"**

**Disponível apenas após admin marcar `convocacao_oficial_publicada`.**

**Fluxo:**
1. Admin recebe convocação oficial segunda
2. Vai em "Ranking" → "Cadastrar convocação oficial"
3. Marca os 26 jogadores convocados (checkbox dos 52)
4. Clica em "Calcular pontuação"
5. Sistema processa todas as submissões aprovadas e calcula `score`
6. Ranking aparece ordenado por pontuação desc

**Tabela de ranking:**
| Posição | Nome | Score | Afiliado | Status |
|---|---|---|---|---|
| 1 | Maria Souza | 26 | MATEUS | 🏆 Vencedor |
| 1 | João Silva | 26 | BARBA | 🏆 Empate |
| 2 | Pedro Lima | 25 | RAYO | - |

**Em caso de empate (mais de 1 com pontuação máxima):**
- Botão **"Sortear vencedor"** (executa sorteio aleatório seedado)
- Sistema gera **comprovante de sorteio** com hash + timestamp pra auditoria
- Hash é compartilhável publicamente (transparência)
- Resultado fica gravado e pode ser auditado a qualquer momento

### 7.5.8 Métricas operacionais em tempo real

Aba **"Operação"** — dashboard pro Natan/gestor acompanhar saúde da campanha:

**Conversão por etapa do funil:**
- Hero visualizado → Form completo: X%
- Form completo → Escalação completa: X%
- Escalação completa → Cadastro casa: X%
- Cadastro casa → Print enviado: X%
- Print enviado → Aprovado: X%

**Distribuição por afiliado:**
- Gráfico de pizza: % de aprovados por afiliado
- Útil pra detectar afiliado underperforming ou bug de atribuição

**Distribuição por casa:**
- Quantos cadastros foram pra cada casa
- Conversão de cadastro → aprovado por casa
- Útil pra renegociar com casas

**Performance temporal:**
- Cadastros por hora (heatmap)
- Picos de aprovação (saber quando dimensionar equipe)

### 7.5.9 Exportação de dados

Botão **"Exportar"** com opções:
- 📊 CSV completo (todas as colunas)
- 📋 CSV simplificado (nome + WhatsApp + status + afiliado — pra usar em remarketing)
- 🏆 CSV de aprovados (lista limpa pra subir no grupo VIP)
- 📞 CSV de rejeitados (lista pra remarketing com nova chance)
- 📈 Relatório PDF (resumo executivo da campanha)

### 7.5.10 Audit log

Toda ação do admin é logada. Aba **"Histórico"**:

| Quando | Quem | Ação | Alvo | Detalhes |
|---|---|---|---|---|
| 17/05 14:32 | natan@... | Aprovou | BP-X9F2-K8L1 | - |
| 17/05 14:35 | operador@... | Rejeitou | BP-K3M9-P2N4 | Motivo: valor < R$50 |
| 17/05 14:40 | natan@... | Reverteu rejeição | BP-K3M9-P2N4 | Cliente contestou |

Útil pra:
- Auditar se houve aprovação incorreta
- Resolver disputas ("eu não rejeitei isso")
- Compliance interno

### 7.5.11 Stack técnica do admin

| Camada | Tech |
|---|---|
| Frontend | Mesmo React do site (componente `AdminScreen` + sub-rotas) |
| Auth | Supabase Auth (magic link) |
| Storage de prints | Supabase Storage |
| Banco de dados | Google Sheets (MVP) ou Supabase Postgres (se escalar) |
| Notificações | Browser push + email via Resend + Z-API pra WhatsApp |
| Hosting | Mesma Vercel do site, rota `/admin` |

> ⚠️ **MVP vs escala:** Google Sheets aguenta até ~5.000 linhas com performance OK. Se a campanha bombar e ultrapassar isso, migrar pra Supabase Postgres (que já tá no projeto). Decidir baseado nos primeiros dados de sábado.

### 7.5.12 Resumo das telas do admin

```
/admin
├── /login                  → Magic link
├── /                       → Dashboard (KPIs + fila)
├── /pendentes              → Fila de aprovação (default)
├── /aprovados              → Lista de aprovados
├── /rejeitados             → Lista de rejeitados
├── /revisao-senior         → Casos suspeitos
├── /detalhe/:id            → Detalhe da submissão
├── /ranking                → Pontuação + vencedor
├── /operacao               → Métricas em tempo real
├── /historico              → Audit log
├── /exportar               → Exports
└── /config                 → Whitelist + prêmio + casas (admin master)
```

---

## 8. Estrutura de Dados

### Google Sheets (`entries`)
| Coluna | Tipo | Origem |
|---|---|---|
| `entry_id` | string | gerado `BP-XXXX-XXXX` |
| `created_at` | datetime | auto |
| `affiliate_code` | string | `?ref=` ou `?v=` |
| `referred_by` | string | url param `ref` |
| `name` | string | form |
| `email` | string | form |
| `whatsapp` | string | form |
| `house_chosen` | string | form |
| `lineup` | json | 26 player IDs |
| `proof_url` | string | Supabase Storage URL |
| `status` | enum | `aguardando_validacao` / `aprovado` / `rejeitado` |
| `approved_at` | datetime | quando admin aprovou |
| `approved_by` | string | quem aprovou |
| `score` | int | calculado segunda após convocação |
| `winner` | bool | true se for vencedor |

### Supabase Storage
- Bucket: `bolao-convocacao-proofs`
- Path: `/{entry_id}/{timestamp}.{ext}`
- ACL: privado (acessível só pelo admin)

---

## 9. Operação — O que precisa estar pronto

### Inputs operacionais (você coleta)
- [ ] Lista dos 6 afiliados (nome + código + WhatsApp + IG)
- [ ] **Links de afiliado de cada afiliado em cada casa** (6 afiliados × N casas)
- [ ] Decisão final do prêmio
- [ ] Regulamento da campanha (termos, +18, jogo responsável, prazos)
- [ ] Fotos dos 52 jogadores (pode usar API pública ou wikimedia)

### Equipe de validação de prints
- Quem aprova? Provavelmente o próprio Natan + alguém do time
- SLA: **até 6h** entre envio e aprovação
- Picos esperados: sábado 14h-22h e domingo 14h-23h59

### Casas parceiras participantes
Sugestão: começa com **3 casas** pra reduzir complexidade operacional de coletar links:
- Stake (principal)
- BetMGM
- Superbet

Se sobrar tempo, adiciona o resto.

### Domínio e DNS
- Sugestão: `bolaoconvocacao.duplaaposta.com` ou `convocacao.bolao.site`
- Configurar no Vercel + Cloudflare

---

## 10. Timeline (relâmpago)

| Dia | Quando | O quê | Responsável |
|---|---|---|---|
| **Hoje (qua)** | tarde/noite | PRD aprovado · prêmio definido · links coletados | Natan |
| **Quinta** | manhã | Fork repo + adaptação de `affiliates.js` + `houses.js` + `players.js` | Dev/Claude |
| **Quinta** | tarde | `LineupScreen` + `UploadProofScreen` | Dev/Claude |
| **Quinta** | noite | `AdminScreen` adaptada + integração Supabase Storage | Dev/Claude |
| **Sexta** | manhã | QA · ajustes de copy · fotos dos jogadores | Natan + Dev |
| **Sexta** | tarde | Deploy Vercel · DNS · GA · testes E2E | Dev |
| **Sexta** | 20h | 🚀 **GO LIVE** + divulgação coordenada dos 6 afiliados | Todos |
| **Sábado** | dia todo | Monitoramento · aprovação de prints · suporte | Time |
| **Domingo** | 23h59 | Fechamento das inscrições | Sistema |
| **Segunda** | após convocação | Cálculo de pontuação + ranking | Sistema/Natan |
| **Quarta** | live | Anúncio vencedor + sorteio se empate | Mateus |

---

## 11. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Casas detectam padrão de depósito e marcam CPA como bônus abuse | Média | Alto | Print "a partir de R$50" (não fixo) + distribuir entre 3+ casas |
| Empate massivo na pontuação máxima | Alta | Médio | Sorteio ao vivo no canal do Mateus — vira conteúdo extra |
| Equipe não dá conta de aprovar prints na velocidade do tráfego | Alta | Alto | Definir 2-3 pessoas com acesso ao admin + SLA de 6h comunicado claramente |
| Afiliado não coleta links a tempo | Média | Alto | Fallback pra link DEFAULT (Dupla institucional) por casa |
| Prêmio "viagem" trava em logística e atrasa entrega | Média | Alto | Decidir até quinta · alternativa pronta (R$ 10k cash) se travar |
| Reclamação pública se vencedor demorar a receber | Baixa | Alto | Cláusula clara de "entrega em até 30 dias" + comunicação ativa |
| Print fraudado (photoshop) | Média | Médio | Cross-check com casa parceira via dashboard de CPA antes de aprovar definitivamente |
| Repo `bolao` tem bug não documentado | Baixa | Médio | Manter o repo original intacto + criar fork novo |

---

## 12. Métricas de Sucesso

### KPIs primários
- **CPAs validados:** meta 500 / stretch 1.500
- **Conversão Lead → CPA:** meta 25%+ (alta porque o gancho é forte)
- **Custo por CPA Arena:** abaixo de R$ X (a calcular com base no orçamento do prêmio)

### KPIs secundários
- Membros adicionados ao Grupo VIP do Mateus
- Distribuição de CPAs por afiliado (sanidade da matriz vendor × casa)
- Distribuição de CPAs por casa
- Taxa de empate na pontuação máxima
- Engajamento no anúncio do vencedor (live do Mateus na quarta)

### Métricas de produto
- Tempo médio de preenchimento da escalação (deve ser 2-5 min)
- Drop-off por tela (onde o cara sai)
- Taxa de upload de print após cadastro

---

## 13. Compliance

### Lei 14.790/2023 + diretrizes SPA
- [x] +18 visível em todas as telas
- [x] Aviso de jogo responsável no footer
- [x] Telefone de apoio (0800 026 1818)
- [x] Sem promessa de "ganho garantido"
- [x] Termo "presente" / "prêmio" / "boas-vindas" no lugar de "lucro"

### Regulamento da campanha (obrigatório)
- Critério de elegibilidade (+18, residente Brasil, conta nova)
- Janela de participação
- Critério de pontuação
- Critério de desempate (sorteio)
- Prazo de entrega do prêmio
- Foro de eleição
- Cláusula de não-vínculo com CBF/Seleção Brasileira

### Casas parceiras
- Comunicar campanha ao gerente de afiliação de cada casa **antes** do go-live
- Garantir que cada casa autorizou usar o link de afiliado nesta campanha

---

## 14. Roadmap pós-campanha

Esta campanha é o piloto da infraestrutura de **bolão Arena**. Se der certo:

- **Próxima edição:** Bolão dos 11 titulares (uma semana antes do 1º jogo da Copa)
- **Sequência:** Bolão da fase de grupos, oitavas, quartas, semis, final
- **Aproveitamento:** Mesma infra, troca-se players.js + ajusta-se mecânica de pontuação
- **Long tail:** A base de 1.500+ membros do Grupo VIP fica ativa por 60 dias até o início da Copa + 30 dias durante a Copa = 3 meses de receita recorrente pras casas via tips

---

## 15. Avaliação Honesta do Potencial

### 🟢 Por que tem MUITO potencial de dar certo

1. **Timing perfeito.** Convocação é o assunto da semana. Audiência tá fervendo. Cada conversa de bar nos próximos 5 dias é sobre quem o Ancelotti vai chamar. O bolão monta em cima disso.

2. **Mecânica nova mas familiar.** Bolão todo mundo já jogou. Montar escalação todo mundo já fez (FIFA, Cartola). Combinar os dois é zero curva de aprendizado.

3. **Pré-lista já divulgada.** 52 nomes oficiais elimina o problema de "quem entra na lista?". O jogo é só sobre selecionar 26 — escolha pura, sem ambiguidade.

4. **Base obvia gera engajamento.** 90% das pessoas vão acertar a base óbvia (Alisson, Marquinhos, Vini Jr, Neymar etc). A diferença vai estar nos 4-5 nomes da bolha (Lino, Rayan, Igor Thiago). **Isso gera conversa** — "quem você botou no meio?", "também coloquei o Andrey".

5. **Reaproveita 70% de um repo que já funciona.** Você não tá começando do zero. O `bolao` já tem fluxo, vendor system, tracking, sheets, supabase. **Quinta de tarde dá pra estar 80% pronto.**

6. **6 afiliados divulgando = compound effect.** Cada um atinge ~50-500k pessoas/dia. Se 5% engaja e 2% converte, é volume forte.

7. **Pós-conversão tem valor recorrente.** Grupo VIP da Copa do Mateus é receita recorrente pras casas por 3 meses. CPA + LTV alto = ROI absurdo.

8. **Infra reaproveitável.** A matriz vendor × casa que você precisa construir aqui serve **pra todas as próximas campanhas do Arena**. Não é trabalho perdido.

### 🟡 Pontos de atenção (não impeditivos)

1. **Equipe de aprovação de prints.** Se vocês não tiverem 2-3 pessoas dedicadas a aprovar prints sábado e domingo, vira gargalo. Comunique SLA claro no fluxo (6h é ok).

2. **Empate massivo.** Pra mecânica de acerto cego, com base óbvia, é provável que 5-20 pessoas cheguem em 24-26 pontos. Sorteio ao vivo resolve **e vira conteúdo**, mas precisa ser comunicado desde o início.

3. **Detecção da casa.** Mesmo com print variável, se a casa ver 1.000 cadastros vindos de 6 perfis Arena no mesmo fim de semana com mesmo padrão de depósito baixo, pode marcar. **Mitigação:** distribui entre 3+ casas e comunica gerente de afiliação antes.

4. **Prêmio operacional.** "Viagem pra Copa" é o gancho mais forte mas a logística é pesada (ingresso, hotel, passagem, vistos pra EUA/Canadá/México). **Plano B obrigatório:** R$ 10.000 cash + camisa autografada.

### 🔴 Riscos reais que podem matar a campanha

1. **Coleta de links de afiliado por afiliado × casa.** Esse é o gargalo mais provável de atrasar. 6 afiliados × 3 casas = 18 links pra coletar até quinta. Se um afiliado atrasar, o link dele vira fallback genérico e ele perde atribuição.

2. **Print fraudado em escala.** Photoshop é fácil. Se a campanha bombar e tiver 1.000 prints, sem cross-check com a casa não dá pra distinguir real de fake. **Mitigação:** combinar com cada casa pra validar lote no domingo via dashboard de CPA.

3. **Prêmio não decidido a tempo.** Se segunda-feira o vencedor é anunciado mas o prêmio ainda tá em discussão interna, vira fiasco público.

### 📊 Veredito

**Probabilidade de dar certo: ALTA (75-85%)** — se três condições forem cumpridas:

1. ✅ **Prêmio decidido até quinta-feira manhã**
2. ✅ **Links de afiliado coletados até quinta-feira tarde**
3. ✅ **2-3 pessoas dedicadas a aprovar prints sábado/domingo**

Se as três bater, **roda redondo e vira referência interna pra campanhas seguintes**. Se uma falhar, ainda funciona mas com fricção. Se duas falharem, melhor adiar uma semana.

**Recomendação:** Vai. Mas trate as 3 condições acima como gates obrigatórios. Tem ainda 24h pra fechar o prêmio e começar a coletar links — janela apertada, mas factível.

---

© 2026 Dupla Aposta · Arena Afiliados · CNPJ 36.213.131/0001-02
