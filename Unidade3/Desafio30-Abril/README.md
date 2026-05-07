# O Rei da Pizza - Asa Norte

Site Original : <a href="https://oreidapizzabsb.ola.click/">O rei da pizza</a>

Melhoria do site institucional e cardápio digital desenvolvido para a pizzaria **O Rei da Pizza - Asa Norte**, com foco em apresentação moderna, navegação simples, acessibilidade, semântica HTML e boa experiência para clientes em dispositivos móveis, tablets e desktop.

O projeto foi desenvolvido em **HTML, CSS e JavaScript puro**, sem dependência de frameworks, com a página inicial separada da página de cardápio.

---

## Visão geral

O site apresenta a identidade da pizzaria, conta sua história, divulga seus principais sabores e disponibiliza um cardápio digital organizado somente com pizzas.

A proposta visual combina tradição e modernidade, mantendo a identidade vermelha da marca, imagens reais dos produtos e navegação clara para facilitar o acesso do cliente ao cardápio.

---

## Páginas do projeto

### `index.html`

Página inicial do site.

Contém:

- Cabeçalho com navegação principal;
- Banner de apresentação;
- Chamada para acessar o cardápio;
- Seção **Sobre**, com a história da pizzaria;
- Destaques da marca;
- Informações de contato;
- Rodapé institucional;
- Botão flutuante de acessibilidade.

### `products.html`

Página exclusiva do cardápio.

Contém:

- Cardápio somente com pizzas;
- Cards com imagens reais dos produtos;
- Nome, descrição e preço das pizzas;
- Busca por sabores;
- Filtros por categorias;
- Botões de pedido;
- Interface responsiva;
- Recursos de acessibilidade.

---

## Funcionalidades

- Layout moderno e responsivo;
- Página inicial separada do cardápio;
- Cardápio exclusivo para pizzas;
- Imagens reais dos produtos;
- Busca por sabores;
- Filtros por categorias;
- Botões de chamada para ação;
- Link para WhatsApp;
- Seção **Sobre** com história da pizzaria;
- Botão flutuante de acessibilidade;
- Navegação amigável em celulares;
- Código organizado em arquivos separados;
- Estrutura semântica com HTML5.

---

## Requisitos da atividade

O projeto foi ajustado para atender às missões propostas na atividade de HTML semântico, acessibilidade, SEO e debug.

### Missão 1 — Estrutura Base

**Status:** concluída.

Foram criadas e utilizadas corretamente as principais áreas estruturais da página:

- `<header>`;
- `<main>`;
- `<footer>`.

Essas tags ajudam a organizar melhor o conteúdo do site e facilitam a leitura por navegadores, mecanismos de busca e tecnologias assistivas.

---

### Missão 2 — Semântica

**Status:** concluída.

Foram utilizadas tags semânticas no lugar de estruturas genéricas sempre que possível.

Exemplos de tags utilizadas:

- `<nav>` para menus de navegação;
- `<section>` para blocos principais de conteúdo;
- `<article>` para cards e conteúdos independentes;
- `<aside>` para conteúdos complementares;
- `<footer>` para informações finais do site.

Essa organização torna o código mais claro, acessível e profissional.

---

### Missão 3 — Acessibilidade

**Status:** concluída.

Foram aplicadas melhorias de acessibilidade no site.

Recursos implementados:

- Imagens com atributo `alt`;
- Campos de formulário com `label`;
- Botões com nome acessível;
- Foco visível para navegação por teclado;
- Botão flutuante de acessibilidade;
- Opção de aumentar fonte;
- Opção de reduzir fonte;
- Opção de alto contraste;
- Opção de reduzir movimento;
- Melhor organização visual e textual para facilitar a navegação.

O botão de acessibilidade possui `aria-label`, garantindo que leitores de tela identifiquem corretamente sua função.

---

### Missão 4 — SEO

**Status:** concluída.

A hierarquia de títulos foi organizada corretamente para melhorar a estrutura da página e o SEO.

Boas práticas aplicadas:

- Apenas um `<h1>` principal por página;
- Uso de `<h2>` para seções principais;
- Uso de `<h3>` para subtítulos e cards;
- Conteúdo organizado de forma lógica;
- Textos descritivos e objetivos;
- Estrutura HTML mais compreensível para mecanismos de busca.

---

### Missão 5 — Debug

**Status:** concluída.

Foram corrigidos problemas relacionados à estrutura, semântica, acessibilidade e organização do código.

Correções aplicadas:

- Melhor organização das tags HTML;
- Uso adequado de tags semânticas;
- Correção de imagens dos produtos;
- Remoção de bebidas do cardápio;
- Ajuste do cardápio para exibir somente pizzas;
- Correção da navegação do menu **Sobre**;
- Ajuste do botão de acessibilidade;
- Melhoria dos textos alternativos das imagens;
- Organização da estrutura entre página inicial e página de cardápio.

---

### Missão Secreta — Skip link e aria-live

**Status:** concluída.

O site possui recursos adicionais de acessibilidade:

- **Skip link**, permitindo pular diretamente para o conteúdo principal;
- Região com `aria-live`, usada para informar dinamicamente ações ao usuário, como alterações de acessibilidade ou feedbacks do sistema.

Exemplo de recurso implementado:

```html
<a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
```

E também:

```html
<div id="live-region" class="sr-only" aria-live="polite" aria-atomic="true"></div>
```

Esses recursos melhoram a experiência de usuários que navegam por teclado ou utilizam leitores de tela.

---

## Resumo de atendimento das missões

| Missão | Requisito | Status |
|---|---|---|
| Missão 1 | Criar `header`, `main` e `footer` corretamente | Concluído |
| Missão 2 | Substituir `divs` por tags semânticas | Concluído |
| Missão 3 | Adicionar `alt` em imagens e `label` em formulários | Concluído |
| Missão 4 | Organizar hierarquia correta de títulos | Concluído |
| Missão 5 | Corrigir erros de semântica e acessibilidade | Concluído |
| Missão Secreta | Implementar `skip link` e `aria-live` corretamente | Concluído |

---

## Acessibilidade

O site possui recursos de acessibilidade para melhorar a experiência de diferentes usuários.

Recursos implementados:

- Botão flutuante de acessibilidade no canto inferior direito;
- Aumento de fonte;
- Redução de fonte;
- Alto contraste;
- Redução de movimento/animações;
- Foco visível para navegação por teclado;
- Uso de textos alternativos em imagens;
- Estrutura semântica com HTML;
- Melhor organização de títulos;
- Navegação clara entre seções;
- Skip link para acesso rápido ao conteúdo;
- Região `aria-live` para mensagens dinâmicas.

> Observação: o projeto segue boas práticas de acessibilidade e está alinhado aos requisitos da atividade. Uma validação 100% oficial de acessibilidade exigiria auditoria técnica com ferramentas especializadas e testes manuais com leitores de tela.

---

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript;
- Flexbox;
- CSS Grid;
- Design responsivo;
- Git;
- GitHub.

---

## Estrutura de pastas

```text
rei_pizza_somente_pizzas/
│
├── index.html
├── products.html
│
├── assets/
│   ├── images/
│   │   ├── 4 queijos.webp
│   │   ├── A moda do rei.webp
│   │   ├── Calabresa especial.webp
│   │   ├── California.webp
│   │   ├── Chocolate.webp
│   │   ├── doce de leite com banana.webp
│   │   ├── Frango Cheddar e bacon.webp
│   │   ├── Margherita.webp
│   │   ├── milho.webp
│   │   └── Mussarela.webp
│   │
│   ├── styles.css
│   └── script.js
│
└── README.md
```

---

## Identidade visual

O projeto utiliza uma identidade visual inspirada em pizzarias tradicionais e modernas.

Principais características:

- Vermelho como cor principal da marca;
- Fundo claro para melhor leitura;
- Cards com bordas arredondadas;
- Imagens reais dos produtos;
- Botões destacados;
- Tipografia moderna e limpa;
- Layout simples e elegante;
- Experiência otimizada para celular.

---
## Autor

Projeto desenvolvido para fins de estudo, modernização visual e criação de cardápio digital para a pizzaria **O Rei da Pizza - Asa Norte**.

---

## Fontes
Foi retirado imagens do site original (https://oreidapizzabsb.ola.click/)
icones retirados devicon.dev
No projeto em questão foi feito o uso das seguintes AIs
- Chatgpt
- claude

## Participantes
- Vinícius Alves da Costa Silva 22508475
- Ian Guilherme Oliveira Clauhs 22511625
- jorge Murilo Paiva dos Santos 22510162

