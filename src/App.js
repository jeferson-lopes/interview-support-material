import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [topics, setTopics] = useState([]);
  //   {},
  //   {
  //     category: "React",
  //     infos: [
  //       {
  //         title: "Functional component",
  //         content: [
  //           "Um Functional Component, recebe esse nome por se tratar de uma função que aceita um único argumento de objeto chamado “props” (propriedades), e retorna dados com um elemento React. Não tem o Hooks",
  //         ],
  //       },
  //       {
  //         title: "Class component ",
  //         content: [
  //           "Já um Class Component estende um Component padrão do React, e ao fazer isso, criamos uma herança do React.Component e podemos acessar suas funções, e com o método render retornamos HTML.",
  //         ],
  //       },
  //       {
  //         title: "Hooks",
  //         content: [
  //           "useState() useState é um dos hooks mais importantes e usados do React, ele lida com dados relativos, ou seja, ele lida com os estados. ",
  //           "useEffect() Um dos problemas que os Functional Components tinham era lidar com side-effects como chamadas à API, tarefas assíncronas e outros. ",
  //           "useMemo() O hooks useMemo nos permite armazenar o valor de retorno de uma função a partir dos parâmetros recebidos (memoization). Ele nos ajuda a tornar os processamentos mais rápidos, já que só executa a função caso o valor não tenha sido guardado anteriormente. ",
  //           "useRef() O useRef nos permite persistir valores entre renderizações, ele pode ser usado para armazenar o valor de uma variável mutável que não provoca uma re-renderização, ou para acessar um elemento DOM diretamente.",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     category: "Api",
  //     infos: [
  //       {
  //         title: "Rest Api",
  //         content: [
  //           "POST: criar dados no servidor;",
  //           "GET: leitura de dados no host;",
  //           "DELETE: excluir as informações;",
  //           "PUT: atualizações de registros.",
  //         ],
  //       },
  //       {
  //         title: "Graphql",
  //         content: [
  //           "GraphQL significa Graph Query Language, como o nome sugere é uma linguagem de query assim como SQL (Structured Query Language) porém seu uso não envolve implementar banco de dados, mas sim, definir dados seja para API ou servidor.",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     category: "Acessibilidade",
  //     infos: [
  //       {
  //         title: "O que é?",
  //         content: [
  //           "A acessibilidade web ajuda pessoas com deficiência a navegarem por um site e a acessarem conteúdos através de ferramentas específicas, como um leitor de tela, ao tornar seu site acessível, você permite que mais pessoas possam interagir com ele e ter uma boa experiência, além de gerar mais tráfego para as suas páginas.",
  //         ],
  //       },
  //       {
  //         title: "HTML semântico",
  //         content: [
  //           "Atualmente o papel da HTML não é apenas estruturar documentos para a web, mas também descrever o significado do conteúdo presente nesses documentos por meio de tags semânticas. ",
  //         ],
  //       },
  //       {
  //         title: "Textos alternativos",
  //         content: [
  //           "O texto alternativo é um elemento muito importante para a composição de qualquer imagem. Seja em sites ou em redes sociais, ele é essencial para garantir mais acessibilidade para pessoas cegas ou que dependem de leitores de tela.",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     category: "Micro Front End",
  //     infos: [
  //       {
  //         title: "O que é?",
  //         content: [
  //           "Micro Front-end é um estilo arquitetônico que separa uma aplicação de front em várias camadas menores, cada uma sendo responsável por um módulo específico da aplicação, normalmente separadas por domínios ou contextos de uso, permitindo assim, que diferentes times cuidem dessas funcionalidades de forma independente.",
  //         ],
  //       },
  //       {
  //         title: "Vantagens",
  //         content: [
  //           "Mais facilidade na correção de bugs",
  //           "Facilidade na integração de novas pessoas no projeto",
  //           "Mais facilidade de implementação de novas features",
  //           "Facilidade na coordenação entre times",
  //           "Times mais independentes",
  //         ],
  //       },
  //       {
  //         title: "Desvantagens",
  //         content: [
  //           "Complexidade na instalação",
  //           "Caso as equipes não estejam alinhadas em layout e componentes, pode haver desavensas no estilo dos componente das páginas",
  //         ],
  //       },
  //       {
  //         title: "Single-spa e Server Side Rendering",
  //         content: [
  //           "Single-spa biblioteca para integração do micro front end",
  //           "Server Side Rendering redenrização das páginas pelo back end",
  //         ],
  //       },
  //     ],
  //   },
  // ];
  useEffect(() => {
    fetch("https://api.npoint.io/ad714939a201afd1f37a")
      .then((response) => response.json())
      .then((data) => setTopics(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ backgroundColor: "#282c34" }}>
      <div className="App">
        {topics?.map((topic) => (
          <>
            <h1>{topic.category.toUpperCase()}</h1>
            {topic.infos.map((info) => (
              <div
                style={{
                  marginLeft: "20px",
                  backgroundColor: "rgb(51 57 71)",
                  paddingLeft: "10px",
                  borderRadius: "5px",
                }}
              >
                <h3>{info.title}</h3>
                {info.content.map((content, index) => (
                  <div style={{ marginLeft: "20px" }}>
                    <p> {index + 1 + ". " + content}</p>
                  </div>
                ))}
              </div>
            ))}
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
