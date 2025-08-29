# Como Fazer Seu Portfólio

## O que você vai criar:

**5 seções principais:**
1. Hero - sua apresentação
2. Sobre - quem você é
3. Skills - tecnologias
4. Projetos - seus trabalhos
5. Contato - como te achar

## Estrutura de pastas:

```
src/
├── components/
│   ├── sections/    # Hero.jsx, About.jsx, Projects.jsx...
│   └── layout/      # Navbar.jsx, Footer.jsx
├── data/            # projects.js (dados dos projetos)
└── assets/          # fotos, imagens
```

## Como fazer um componente:

```jsx
const MinhaSecao = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2>Título da Seção</h2>
        <p>Conteúdo aqui</p>
      </div>
    </section>
  )
}

export default MinhaSecao
```

## Classes Bootstrap que você vai usar:

- `container` - centraliza tudo
- `row` + `col-md-6` - colunas responsivas
- `py-5` - espaçamento vertical
- `text-center` - centralizar texto
- `btn btn-primary` - botões
- `card` - cartões para projetos
- `mb-4` - margem embaixo

## Exemplo de dados dos projetos:

```js
// data/projects.js
export const projects = [
  {
    title: "Meu App",
    description: "App incrível que fiz",
    image: "/assets/app.jpg",
    demo: "https://meuapp.com",
    github: "https://github.com/eu/app"
  }
]
```

## Dicas:

- Faça uma seção por vez
- Teste no navegador sempre
- Bootstrap já deixa bonito
- Coloque seus projetos reais
- Links funcionais (GitHub, LinkedIn)
- Seja você mesmo na descrição