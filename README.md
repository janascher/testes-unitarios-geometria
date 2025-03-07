<div  align="center">
	<h1>
		📝📐 Projeto de Testes Unitários para Cálculos Geométricos com Jest
	</h1>
</div>

## 🧐 Descrição

Este projeto é parte da atividade de testes unitários do curso "Formação em Teste de Software" da [Iterasys](https://iterasys.com.br/pt). Ele inclui testes para cálculos geométricos básicos de figuras como quadrado, paralelogramo e triângulo, utilizando o framework Jest para testes unitários.

## 🚀 Funcionalidades Testadas

As seguintes funcionalidades da calculadora foram testadas:

- **Área de quadrado:** testada com diferentes valores.
- **Área de paralelogramo:** utiliza uma massa em formato de lista para verificar a área com diferentes combinações.
- **Área de triângulo:** utiliza uma massa em formato JSON para testar a área com diferentes combinações.

## 📊 Resumo dos Testes
Este projeto contém **3 suítes de teste** que cobrem as funcionalidades de cálculo de área para quadrado, paralelogramo e triângulo. No total, são **19 testes** que garantem a robustez e precisão das funções implementadas.

## 📚 Tecnologias Utilizadas

- **IDE:** VS Code
- **Linguagem:** JavaScript (Node.js)
- **Teste de Unidade:** Jest
- **Gerenciador de Pacotes:** npm
- **Ferramenta de Formatação:** Prettier

## ⚙️ Configuração do Ambiente

### Instalar o Node.js (caso necessário)
Se você ainda não tiver o Node.js instalado, acesse o site oficial do [Node.js](https://nodejs.org/en/download/) e siga as instruções de instalação para o seu sistema operacional.

### Definir a versão do Node.js (caso necessário)
Certifique-se de que você está usando a versão correta do Node.js. Caso necessário, use o NVM para definir a versão:
```sh
nvm use 22.14.0
```

Alternativamente, crie um arquivo `.nvmrc` na raiz do projeto para especificar a versão do Node.js:
```sh
echo "22.14.0" > .nvmrc
```

### Clonar o repositório
Execute o seguinte comando:
```sh
git clone https://github.com/janascher/testes-unitarios-geometria.git
```

### Instalar Dependências
Após clonar o repositório, instale as dependências usando o comando:
```sh
npm install
```

### Scripts de Teste
Os scripts de teste foram configurados manualmente no arquivo `package.json`. A criação desses scripts não foi abordada nas aulas, mas foi implementada para facilitar a execução dos testes.

```json
"scripts": {
  "test": "jest",
  "test:verbose": "jest --verbose"
}
```

## 🧪 Executar os Testes
Para executar os testes unitários, você pode usar os seguintes comandos:

- **Execução Padrão:**
```sh
npm test
```
- **Execução com Saída Detalhada (Verbose):**
```sh
npm run test:verbose
```

## 🦸🏻‍♀️ Autor

<div align="center">
  <a href="https://github.com/janascher">
    <img src="https://avatars.githubusercontent.com/u/79182711?v=4" width="150px;" alt="Janaína Scher" style="border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.2);">
    <br />
    <sub>
      <b>Janaína Scher</b> 👩🏻‍💻
    </sub>
    <br />
    <i>Profissional em Teste de Software e Garantia da Qualidade (QA)</i>
  </a>
</div>