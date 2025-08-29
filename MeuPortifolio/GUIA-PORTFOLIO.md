# Guia Rápido - Portfólio de Desenvolvedor

## Estrutura que você vai criar:

```
src/
├── components/
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # Hero, About, Projects, Skills, Contact
│   └── common/         # Button, Card (se precisar)
├── data/               # projects.js, skills.js
├── assets/             # suas fotos, CV, imagens dos projetos
└── styles/             # CSS personalizado (opcional)
```

## Seções do seu portfólio:

1. **Hero** - Sua apresentação + foto
2. **About** - Quem você é, sua história
3. **Skills** - Tecnologias que domina
4. **Projects** - Seus projetos com links
5. **Contact** - Como te encontrar

## Classes Bootstrap mais úteis:

**Layout:**
- `container` - centraliza conteúdo
- `row` + `col-md-6` - grid responsivo
- `py-5` - padding vertical

**Componentes:**
- `card` - para projetos
- `btn btn-primary` - botões
- `navbar` - menu de navegação
- `badge` - tags de tecnologias

**Utilitários:**
- `text-center` - centralizar texto
- `mb-4` - margem bottom
- `d-flex justify-content-center` - flexbox

## Como organizar os dados:

Crie arquivos em `/data/` tipo:
```js
// data/projects.js
export const projects = [
  {
    title: "Meu App",
    description: "Descrição do projeto",
    image: "/assets/projeto1.jpg",
    demo: "https://link-demo.com",
    github: "https://github.com/seu-user/projeto",
    tech: ["React", "Node.js"]
  }
]
```

## Dica de ouro:
Comece simples - crie uma seção por vez, teste no navegador, depois vai para a próxima. Bootstrap já deixa tudo bonito por padrão!