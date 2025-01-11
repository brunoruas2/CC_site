"use strict";(self.webpackChunkciencia_computacao=self.webpackChunkciencia_computacao||[]).push([[5801],{8051:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"puc/segundo-periodo/engenharia-requisitos","title":"Engenharia de Requisitos","description":"","source":"@site/docs/02-puc/03-segundo-periodo/02-engenharia-requisitos.md","sourceDirName":"02-puc/03-segundo-periodo","slug":"/puc/segundo-periodo/engenharia-requisitos","permalink":"/CC_site/docs/puc/segundo-periodo/engenharia-requisitos","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Engenharia de Requisitos","description":""},"sidebar":"materiasSidebar","previous":{"title":"Algoritmo e Estrutura de Dados","permalink":"/CC_site/docs/puc/segundo-periodo/algoritmo-estrutura-dados"},"next":{"title":"Design de Intera\xe7\xe3o","permalink":"/CC_site/docs/puc/segundo-periodo/design-interacao"}}');var i=a(4848),n=a(8453);const r={sidebar_position:2,title:"Engenharia de Requisitos",description:""},d="Engenharia de Requisitos",t={},c=[{value:"Tipos e Elicita\xe7\xe3o de Requisitos de Software",id:"tipos-e-elicita\xe7\xe3o-de-requisitos-de-software",level:2},{value:"Caracter\xedsticas e Tipos de Requisitos",id:"caracter\xedsticas-e-tipos-de-requisitos",level:3},{value:"Conceitos e Caracter\xedsticas de Requisitos",id:"conceitos-e-caracter\xedsticas-de-requisitos",level:4},{value:"Tipos de Requisitos",id:"tipos-de-requisitos",level:4},{value:"Elicita\xe7\xe3o de Requisitos de Software",id:"elicita\xe7\xe3o-de-requisitos-de-software",level:3},{value:"Processos da Engenharia de Requisitos e T\xe9cnicas de Elicita\xe7\xe3o",id:"processos-da-engenharia-de-requisitos-e-t\xe9cnicas-de-elicita\xe7\xe3o",level:4},{value:"Modelagem, Valida\xe7\xe3o e Verifica\xe7\xe3o de Requisitos",id:"modelagem-valida\xe7\xe3o-e-verifica\xe7\xe3o-de-requisitos",level:2},{value:"Modelagem de Requisitos",id:"modelagem-de-requisitos",level:3},{value:"Modelagem de Requisitos e Introdu\xe7\xe3o \xe0 UML",id:"modelagem-de-requisitos-e-introdu\xe7\xe3o-\xe0-uml",level:4},{value:"Modelagem de Casos de Uso UML",id:"modelagem-de-casos-de-uso-uml",level:4},{value:"Pr\xe1ticas de Diagrama de Casos de Uso",id:"pr\xe1ticas-de-diagrama-de-casos-de-uso",level:4},{value:"Modelagem de Classes UML",id:"modelagem-de-classes-uml",level:4},{value:"Modelagem de Pacotes UML",id:"modelagem-de-pacotes-uml",level:4},{value:"Valida\xe7\xe3o e Verifica\xe7\xe3o de Requisitos",id:"valida\xe7\xe3o-e-verifica\xe7\xe3o-de-requisitos",level:3},{value:"Valida\xe7\xe3o e Verifica\xe7\xe3o de Requisitos",id:"valida\xe7\xe3o-e-verifica\xe7\xe3o-de-requisitos-1",level:4},{value:"Bibliografia",id:"bibliografia",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"engenharia-de-requisitos",children:"Engenharia de Requisitos"})}),"\n",(0,i.jsx)(s.admonition,{title:"Info",type:"info",children:(0,i.jsxs)(s.p,{children:["Essa mat\xe9ria ir\xe1 aprofundar o conte\xfado que aprendemos na disciplina de ",(0,i.jsx)(s.a,{href:"/CC_site/docs/puc/primeiro-periodo/fundamentos-engenharia-software",children:"Fundamentos de Engenharia de Software"}),"."]})}),"\n",(0,i.jsx)(s.h2,{id:"tipos-e-elicita\xe7\xe3o-de-requisitos-de-software",children:"Tipos e Elicita\xe7\xe3o de Requisitos de Software"}),"\n",(0,i.jsx)(s.h3,{id:"caracter\xedsticas-e-tipos-de-requisitos",children:"Caracter\xedsticas e Tipos de Requisitos"}),"\n",(0,i.jsx)(s.h4,{id:"conceitos-e-caracter\xedsticas-de-requisitos",children:"Conceitos e Caracter\xedsticas de Requisitos"}),"\n",(0,i.jsxs)(s.p,{children:["Os ",(0,i.jsx)(s.strong,{children:"conceitos"})," s\xe3o palavras dotadas de significados objetivos. Ao longo de todos os nossos estudos, n\xf3s, basicamente, estamos aumentando nosso repert\xf3rio de conceitos e ligando conceitos novos aos que j\xe1 aprendemos previamente. Desse modo, n\xe3o \xe9 nenhuma novidade come\xe7ar nosso estudo por meio da defini\xe7\xe3o dos conceitos que vamos usar ao longo do microfundamento."]}),"\n",(0,i.jsxs)(s.p,{children:["Chamamos de ",(0,i.jsx)(s.strong,{children:"Requisito"})," toda Caracter\xedstica que um produto deve possui para ser aceito. Dessa feita, podemos definir como ",(0,i.jsx)(s.strong,{children:"Engenharia de Requisitos"}),", o conjunto das t\xe9cnicas usadas para levantamento, detalhamento e valida\xe7\xe3o desses requisitos de um produto."]}),"\n",(0,i.jsx)(s.p,{children:"Ao tomarmos notas a respeito dos requisitos, precisaremos garantir que os mesmos tenham as seguintes Caracter\xedsticas:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Completude"})," - Descri\xe7\xe3o integral da necessidade a ser atendida."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Corre\xe7\xe3o"})," - Descri\xe7\xe3o exata e associada ao software que ser\xe1 desenvolvido."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Exequidade"})," - Um requisito de ser pass\xedvel de execu\xe7\xe3o."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Prioridade"})," - Descri\xe7\xe3o do n\xedvel: Obrigat\xf3rio, Desej\xe1vel ou Opcional."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Modifica\xe7\xe3o"})," - Capacidade de altera\xe7\xe3o do requisito ao longo do processo."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Verificabilidade"})," - Capacidade de se realizar testes que verifiquem se o requisito fora alcan\xe7ado."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Rastreabilidade"})," - Rela\xe7\xe3o entre c\xf3digo e requisito de maneira clara e rec\xedproca."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"tipos-de-requisitos",children:"Tipos de Requisitos"}),"\n",(0,i.jsx)(s.p,{children:"Podemos separar os requisitos segundo a sua rela\xe7\xe3o com a funcionalidade do software:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Requisito Funcional"})," - \xc9 diretamente relacionado ao funcionamento do programa. Descreve uma fun\xe7\xe3o a ser desempenhada pelo produto com maior foco no neg\xf3cio e n\xe3o na tecnologia."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Requisito N\xe3o Funcional"})," - \xc9 relacionado a tecnologia de desenvolvimento. Ele especifica/restringem o comportamento desejado do software."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Requisito de Desempenho - Especifica atributos como velocidade ou consumo de mem\xf3ria que o sistema deve ter."}),"\n",(0,i.jsx)(s.li,{children:"Requisito de Confiabilidade - Especifica a taxa aceit\xe1vel de falhas do sistema."}),"\n",(0,i.jsx)(s.li,{children:"Requisito de Prote\xe7\xe3o - Relacionado a seguran\xe7a do software."}),"\n",(0,i.jsx)(s.li,{children:"Requisito de Usabilidade - Caracter\xedsticas desejadas de usabilidade."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"elicita\xe7\xe3o-de-requisitos-de-software",children:"Elicita\xe7\xe3o de Requisitos de Software"}),"\n",(0,i.jsx)(s.h4,{id:"processos-da-engenharia-de-requisitos-e-t\xe9cnicas-de-elicita\xe7\xe3o",children:"Processos da Engenharia de Requisitos e T\xe9cnicas de Elicita\xe7\xe3o"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Elicitar"})," \xe9 o processo de extrair ou obter o m\xe1ximo de informa\xe7\xe3o poss\xedvel para o conhecimento de um objeto desejado. Logo, ",(0,i.jsx)(s.strong,{children:"Elicita\xe7\xe3o de Requisitos"})," \xe9 o processo de extrair dos clientes as reais necessidades da demanda dele, ou seja, os requisitos da demanda. Al\xe9m disso, a classifica\xe7\xe3o desses requisitos nas categorias que aprendemos na se\xe7\xe3o passada."]}),"\n",(0,i.jsx)(s.p,{children:"Para se extrair essas informa\xe7\xf5es podemos usar uma mir\xedade de t\xe9cnicas:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Entrevista - Com roteiro para as principais quest\xf5es. Prioritariamente algo r\xe1pido e n\xe3o cansativo. Pode ser individual ou em grupo."}),"\n",(0,i.jsx)(s.li,{children:"Brainstorming - Reuni\xe3o sem roteiro definido. A criatividade \xe9 o foco na constru\xe7\xe3o de propostas de resolu\xe7\xe3o de um determinado problema."}),"\n",(0,i.jsx)(s.li,{children:"Question\xe1rio - Com perguntas fechadas ou abertas. Tem como vantagem a praticidade."}),"\n",(0,i.jsx)(s.li,{children:"Prot\xf3tipo - \xc9 indicado para situa\xe7\xf5es onde o user n\xe3o tem facilidade em se expressar. A elicita\xe7\xe3o \xe9 feita pela intera\xe7\xe3o entre user e prot\xf3tipo."}),"\n",(0,i.jsx)(s.li,{children:"Etnografia - \xc9 a observa\xe7\xe3o da realidade do cliente por um per\xedodo."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Ap\xf3s as coletas de todas as informa\xe7\xf5es, passamos para fase de ",(0,i.jsx)(s.strong,{children:"Estudo de Documentos"})," em que os dados ser\xe3o convertidos em requisitos funcionais e n\xe3o funcionais do projeto."]}),"\n",(0,i.jsx)(s.h2,{id:"modelagem-valida\xe7\xe3o-e-verifica\xe7\xe3o-de-requisitos",children:"Modelagem, Valida\xe7\xe3o e Verifica\xe7\xe3o de Requisitos"}),"\n",(0,i.jsx)(s.h3,{id:"modelagem-de-requisitos",children:"Modelagem de Requisitos"}),"\n",(0,i.jsx)(s.h4,{id:"modelagem-de-requisitos-e-introdu\xe7\xe3o-\xe0-uml",children:"Modelagem de Requisitos e Introdu\xe7\xe3o \xe0 UML"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.a,{href:"https://www.uml.org",children:(0,i.jsx)(s.strong,{children:"Unified Modeling Language (UML)"})})," \xe9 uma linguagem de modelagem unificada. Surgida em 1997 como resultado de um esfor\xe7o de v\xe1rias empresas para a constru\xe7\xe3o de um padr\xe3o para a modelagem de engenharia de software. Vale ressaltar que a UML n\xe3o \xe9 uma metodologia e apenas uma maneira de expor processos de software."]}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"Modelagem de Requisitos ou An\xe1lise de Requisitos"})," \xe9 a produ\xe7\xe3o da lista de requisitos funcionais e n\xe3o-funcionais para um projeto. Para padroniza\xe7\xe3o desses produtos, usamos a UML como linguagem de representa\xe7\xe3o."]}),"\n",(0,i.jsx)(s.p,{children:"A UML possui 3 tipos de diagramas:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Diagrama de Estrutura - Foco na vis\xe3o est\xe1tica."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Diagrama de Classes"}),"\n",(0,i.jsx)(s.li,{children:"Diagrama de Pacotes"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Diagrama de Comportamento - Foco na vis\xe3o din\xe2mica."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Diagrama de Caso de Uso"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Diagrama de Intera\xe7\xe3o - Representa\xe7\xe3o da comunica\xe7\xe3o entre objetos."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"modelagem-de-casos-de-uso-uml",children:"Modelagem de Casos de Uso UML"}),"\n",(0,i.jsx)(s.p,{children:"Como acabamos de ver, o diagrama de casos de uso \xe9 um tipo de diagrama de comportamento e, logicamente, tem foco no comportamento din\xe2mico entre as partes envolvidas no funcionamento do sistema."}),"\n",(0,i.jsxs)(s.p,{children:["O diagrama de casos de uso \xe9 geralmente o primeiro diagrama UML usado na fase de requisitos pois permite o detalhe dos requisitos funcionais na fase de elicita\xe7\xe3o. \xc9 importante notar que, por ter foco na intera\xe7\xe3o entre as partes, esse tipo de diagrama ",(0,i.jsx)(s.strong,{children:"n\xe3o"})," \xe9 usado para elicita\xe7\xe3o dos requisitos n\xe3o-funcionais."]}),"\n",(0,i.jsx)(s.p,{children:"As partes integrantes do diagrama de casos de uso s\xe3o:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Atores"})," - S\xe3o as representa\xe7\xf5es da entidades que interagem com o sistema. Sejam elas seres humanos, sensores ou outros sistemas."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Casos de Uso"})," - S\xe3o as transa\xe7\xf5es entre as partes."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Relacionamentos"})," - Podem ser divididos em quatro tipos:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Associa\xe7\xe3o - \xc9 o relacionamento mais comum. Representado por uma seta aberta (ou uma linha reta) que liga os atores aos casos de uso. N\xe3o pode ligar atores a atores ou casos de uso a casos de uso."}),"\n",(0,i.jsx)(s.li,{children:"Generaliza\xe7\xe3o - Acontece quando h\xe1 uma rela\xe7\xe3o de heran\xe7a entre elementos. Pode acontecer entre atores e atores e casos de uso e casos de uso."}),"\n",(0,i.jsx)(s.li,{children:"Inclus\xe3o (Include) - S\xe3o usados para representar rotinas comuns entre transa\xe7\xf5es do sistema por meio do uso de uma seta pontilhada com a lable de include. S\xf3 ocorre entre casos de uso."}),"\n",(0,i.jsx)(s.li,{children:"Exclus\xe3o (Extend) - \xc9 usada para indicar exce\xe7\xf5es. Tem a nota\xe7\xe3o parecida com o include mas no lable est\xe1 escrito exclude."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Abaixo temos um exemplo desse diagrama."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"38-casos-de-uso.png",src:a(9154).A+"",width:"540",height:"441"})}),"\n",(0,i.jsx)(s.h4,{id:"pr\xe1ticas-de-diagrama-de-casos-de-uso",children:"Pr\xe1ticas de Diagrama de Casos de Uso"}),"\n",(0,i.jsx)(s.p,{children:"Essa se\xe7\xe3o \xe9 um exerc\xedcio proposto de constru\xe7\xe3o de um diagrama de casos de uso. O problema proposto \xe9:"}),"\n",(0,i.jsx)(s.p,{children:"O cliente cadastra os dados pessoais, depois do ve\xedculo e finalmente a proposta da seguradora."}),"\n",(0,i.jsx)(s.p,{children:'Alguns clientes s\xe3o da categoria "especial" do programa de fidelidade da seguradora e cadastram as propostas de seguros com desconto.'}),"\n",(0,i.jsx)(s.p,{children:"A seguradora formata a proposta baseada nos dados dos ve\xedculos cadastrados. Depois, os clientes pagam as presta\xe7\xf5es do seguro."}),"\n",(0,i.jsx)(s.p,{children:"Caso haja inadimpl\xeancia, a seguradora cancela o seguro. Comunicando o cliente."}),"\n",(0,i.jsx)(s.p,{children:"Em caso de acidente, o cliente comunica o sinistro \xe0 seguradora. Ela paga as despesas do conserto. Em casos raros, a seguradora paga ao cliente o valor integral do ve\xedculo."}),"\n",(0,i.jsx)(s.admonition,{title:"Coment\xe1rio",type:"note",children:(0,i.jsxs)(s.p,{children:["Antes de olhar como ficou. Tente fazer o diagrama sozinho. Uma boa ferramenta para isso \xe9 o ",(0,i.jsx)(s.a,{href:"https://www.lucidchart.com/pages/pt/landing?utm_source=google&utm_medium=cpc&utm_campaign=_chart_pt_allcountries_mixed_search_brand_exact_&km_CPC_CampaignId=1500131167&km_CPC_AdGroupID=59412156898&km_CPC_Keyword=lucid%20chart&km_CPC_MatchType=e&km_CPC_ExtensionID=&km_CPC_Network=g&km_CPC_AdPosition=&km_CPC_Creative=294337318271&km_CPC_TargetID=kwd-55720648523&km_CPC_Country=1001511&km_CPC_Device=c&km_CPC_placement=&km_CPC_target=&gclid=EAIaIQobChMIvub9rbam-gIVKClMCh0xyAyZEAAYASAAEgISVvD_BwE",children:"Lucidchart"})," ou o ",(0,i.jsx)(s.a,{href:"https://app.diagrams.net/",children:"Draw.io"}),"."]})}),"\n",(0,i.jsx)(s.p,{children:"Abaixo temos uma representa\xe7\xe3o de caso de uso poss\xedvel para o caso exemplo."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"39-exemplo-casos.png",src:a(982).A+"",width:"1213",height:"777"})}),"\n",(0,i.jsx)(s.h4,{id:"modelagem-de-classes-uml",children:"Modelagem de Classes UML"}),"\n",(0,i.jsx)(s.p,{children:"Come\xe7aremos a ver os diagramas de estrutura pelo Diagrama de Classes de UML. Seu objetivo \xe9 definir a estrutura est\xe1tica de relacionamento entre classes."}),"\n",(0,i.jsx)(s.p,{children:"L\xe1 em programa\xe7\xe3o modular n\xf3s aprendemos que uma classe \xe9 um conjunto de objetos com propriedades similares. Toda classe tem um nome e atributos que descrevem as suas propriedades. Al\xe9m disso, possuem m\xe9todos que s\xe3o as fun\xe7\xf5es internas da classe."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"40-uml-class.png",src:a(4229).A+"",width:"408",height:"242"})}),"\n",(0,i.jsx)(s.admonition,{title:"Coment\xe1rio",type:"note",children:(0,i.jsx)(s.p,{children:"Esse \xfaltimo par\xe1grafo faz muito sentido para todos que j\xe1 passaram pela mat\xe9ria de programa\xe7\xe3o modular. Se n\xe3o for o seu caso, corre l\xe1 depois que terminar esse microfundamento."})}),"\n",(0,i.jsxs)(s.p,{children:["Tamb\xe9m sabemos que classes podem ser relacionadas entre si pela rela\xe7\xe3o de ",(0,i.jsx)(s.strong,{children:"heran\xe7a"})," que \xe9 um dos pilares da programa\xe7\xe3o orientada \xe0 objetos. No contexto da UML, podemos chamar essa rela\xe7\xe3o de heran\xe7a de ",(0,i.jsx)(s.strong,{children:"Generaliza\xe7\xe3o-Especializa\xe7\xe3o"}),". A representa\xe7\xe3o entre a superclasse e as classes filhas \xe9 feita com o uso de uma seta de ponta fechada onde a seta ",(0,i.jsx)(s.strong,{children:"sempre"})," sai da subclasse e aponta para a superclasse."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"41-uml-heranca.png",src:a(6356).A+"",width:"796",height:"483"})}),"\n",(0,i.jsxs)(s.p,{children:["O outro modelo de relacionamento \xe9 a ",(0,i.jsx)(s.strong,{children:"agrega\xe7\xe3o ou Estrutura Todo-Parte"}),". Nesse relacionamento n\xe3o h\xe1 heran\xe7a, entretanto, existe alguma rela\xe7\xe3o de pertin\xeancia de modo que cada parte \xe9 um elemento do todo. Possui a representa\xe7\xe3o da ",(0,i.jsx)(s.strong,{children:"multiplicidade (1...*)"})," para indicar a quantidade de itens que o relacionamento suporta."]}),"\n",(0,i.jsxs)(s.p,{children:["A agrega\xe7\xe3o pode ser representada de dois modos. Na ",(0,i.jsx)(s.strong,{children:"Agrega\xe7\xe3o Simples"})," usamos um losango em branco e indica que a parte possui vida al\xe9m do todo",(0,i.jsx)(s.sup,{children:(0,i.jsx)(s.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),". Por outro lado, na ",(0,i.jsx)(s.strong,{children:"Agrega\xe7\xe3o por Composi\xe7\xe3o"}),", usamos o losango preenchido para indicar que a parte n\xe3o tem vida al\xe9m do todo."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"42-uml-agregacao.png",src:a(5649).A+"",width:"738",height:"507"})}),"\n",(0,i.jsx)(s.admonition,{title:"Coment\xe1rio",type:"note",children:(0,i.jsxs)(s.p,{children:['A ideia nessa dota\xe7\xe3o da multiplicidade \xe9 simples. Imagine que temos uma classe "Estoque" e uma classe "Produto". Uma vez que um estoque \xe9 justamente o todo dos produtos armazenados, \xe9 plenamente poss\xedvel termos a rela\xe7\xe3o entre essas classes. Podemos usar a rela\xe7\xe3o de agrega\xe7\xe3o para indicar esse caso. Quando ligamos as classes, n\xf3s indicamos quantos objetos s\xe3o aceitos na rela\xe7\xe3o. No nosso exemplo \xe9 poss\xedvel termos um estoque de zero itens',(0,i.jsx)(s.sup,{children:(0,i.jsx)(s.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," de cada produto, logo, a multiplicidade indicada ser\xe1 de ",(0,i.jsx)(s.code,{children:"0...*"}),' que deve ser lida como ``Podemos ter entre zero e n produtos no nos" estoque".']})}),"\n",(0,i.jsxs)(s.p,{children:["Para terminar essa se\xe7\xe3o, temos apenas mais uma rela\xe7\xe3o a ser aprendida. Na ",(0,i.jsx)(s.strong,{children:"Associa\xe7\xe3o"}),", tamb\xe9m n\xe3o temos rela\xe7\xe3o de heran\xe7a e tamb\xe9m temos multiplicidade. A diferen\xe7a est\xe1 no fato que ",(0,i.jsx)(s.strong,{children:"n\xe3o"})," existe rela\xe7\xe3o de todo e parte, ou seja, o v\xednculo entre as classes \xe9 mais fraco."]}),"\n",(0,i.jsx)(s.p,{children:'Normalmente, a associa\xe7\xe3o \xe9 indicada por uma linha reta entre as classes com as multiplicidades com asteriscos nos dois lados. Al\xe9m disso, podemos ter uma classe `"endurada" entre a associa\xe7\xe3o para indicar o modo.'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"43-uml-associacao.png",src:a(30).A+"",width:"1014",height:"440"})}),"\n",(0,i.jsx)(s.h4,{id:"modelagem-de-pacotes-uml",children:"Modelagem de Pacotes UML"}),"\n",(0,i.jsxs)(s.p,{children:['Uma vez que tenhamos feito nossos diagrama de classes, temos um diagrama que \xe9 capaz de "empacotar" classes relacionadas. Esse diagrama recebe o nome de ',(0,i.jsx)(s.strong,{children:"Diagrama de Pacotes"}),". Tal qual o diagrama de classes, o diagrama de pacotes \xe9 um digrama estrutural da UML."]}),"\n",(0,i.jsx)(s.p,{children:"N\xe3o existe muita exatid\xe3o no processo de constru\xe7\xe3o de pacotes. A ideia \xe9 que a associa\xe7\xe3o entre classes fa\xe7a sentido e, nessas horas, o bom senso \xe9 a nossa melhor ferramenta."}),"\n",(0,i.jsx)(s.p,{children:"No geral, podemos elencar algumas regras para nos ajudar na cria\xe7\xe3o de pacotes:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Deve ter duas ou mais classes"}),"\n",(0,i.jsx)(s.li,{children:"Nome gen\xe9rico ou da classe mais importante"}),"\n",(0,i.jsx)(s.li,{children:"Representa\xe7\xe3o na UML pelo \xedcone da uma pasta"}),"\n",(0,i.jsx)(s.li,{children:"Uma classe pode pertencer a mais de um pacote"}),"\n",(0,i.jsx)(s.li,{children:"Nenhuma classe deve ficar fora do diagrama de pacotes"}),"\n",(0,i.jsx)(s.li,{children:"Um pacote pode depender de outros pacotes"}),"\n",(0,i.jsx)(s.li,{children:"A depend\xeancia de pacotes \xe9 dada no UML pelo uso de uma seta pontilhada"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"44-uml-pacotes.png",src:a(7880).A+"",width:"1678",height:"688"})}),"\n",(0,i.jsx)(s.h3,{id:"valida\xe7\xe3o-e-verifica\xe7\xe3o-de-requisitos",children:"Valida\xe7\xe3o e Verifica\xe7\xe3o de Requisitos"}),"\n",(0,i.jsx)(s.h4,{id:"valida\xe7\xe3o-e-verifica\xe7\xe3o-de-requisitos-1",children:"Valida\xe7\xe3o e Verifica\xe7\xe3o de Requisitos"}),"\n",(0,i.jsxs)(s.p,{children:['Uma vez que temos nosso sistema modelado, podemos nos perguntar se ``estamos construindo o pro"to certo". Chamamos de ',(0,i.jsx)(s.strong,{children:"valida\xe7\xe3o"})," o trabalho de verifica\xe7\xe3o da resposta a essa pergunta. Ou seja, estamos verificando a efic\xe1cia da nossa solu\xe7\xe3o."]}),"\n",(0,i.jsxs)(s.p,{children:["Do outro lado, dizemos que a ",(0,i.jsx)(s.strong,{children:"verifica\xe7\xe3o"})," tem rela\xe7\xe3o com a efici\xeancia. Isso quer dizer que queremos saber se al\xe9m de cumprir o objetivo, nossa solu\xe7\xe3o o faz com a otiliza\xe7\xe3o dos recursos de maneira certa."]}),"\n",(0,i.jsxs)(s.p,{children:["Para realizarmos essas duas verifica\xe7\xf5es podemos fazer uso da ",(0,i.jsx)(s.strong,{children:"Revis\xe3o T\xe9cnica"})," que avalia esses aspectos por meio um time das partes envolvidas no processo para a busca das seguintes falhas:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"erros no conte\xfado\\interpreta\xe7\xe3o"}),"\n",(0,i.jsx)(s.li,{children:"informa\xe7\xf5es faltantes"}),"\n",(0,i.jsx)(s.li,{children:"inconsist\xeancias"}),"\n",(0,i.jsx)(s.li,{children:"requisitos conflitantes\\irreais"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Para realizar essas verifica\xe7\xf5es, podemos usar v\xe1rias abordagens:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Inspe\xe7\xf5es de C\xf3digo"}),"\n",(0,i.jsx)(s.li,{children:"Comandos de Banco de Dados"}),"\n",(0,i.jsx)(s.li,{children:"An\xe1lise dos Requisitos"}),"\n",(0,i.jsx)(s.li,{children:"Testes de Software"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"bibliografia",children:"Bibliografia"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["SOMMERVILLE, Ian. ",(0,i.jsx)(s.strong,{children:"Engenharia de Software"}),". S\xe3o Paulo: Pearson, 2019."]}),"\n",(0,i.jsxs)(s.li,{children:["BEZERRA, Eduardo. ",(0,i.jsx)(s.strong,{children:"Princ\xedpios de An\xe1lise e Projeto de Sistemas com UML"}),". S\xe3o Paulo: Elsevier, 2006."]}),"\n",(0,i.jsxs)(s.li,{children:["PRESSMAN, Roger; MAXIM, Bruce. ",(0,i.jsx)(s.strong,{children:"Engenharia de Software"}),". S\xe3o Paulo: Bookman, 2016."]}),"\n",(0,i.jsxs)(s.li,{children:["LARMAN, Craig. ",(0,i.jsx)(s.strong,{children:"Utilizando UML e padr\xf5es: uma introdu\xe7\xe3o \xe1 an\xe1lise e ao projeto orientados a objetos e desenvolvimento iterativo"}),". 3. ed. Porto Alegre: Bookman, 2007. E-book (695 p\xe1ginas) ISBN 9788577800476."]}),"\n",(0,i.jsxs)(s.li,{children:["PAULA FILHO, Wilson de P\xe1dua. ",(0,i.jsx)(s.strong,{children:"Engenharia de software"}),", v. 2 projetos e processos. 4. Rio de Janeiro LTC 2019 1 recurso online ISBN 9788521636748."]}),"\n",(0,i.jsxs)(s.li,{children:["WAZLAWICK, Raul Sidnei. ",(0,i.jsx)(s.strong,{children:"Engenharia de software conceitos e pr\xe1ticas"}),". Rio de Janeiro GEN LTC 2013 1 recurso online ISBN 9788595156173."]}),"\n",(0,i.jsxs)(s.li,{children:["GUEDES, Gilleanes. ",(0,i.jsx)(s.strong,{children:"UML 2 - Uma Abordagem Pr\xe1tica"}),". S\xe3o Paulo: Novatec, 2018."]}),"\n"]}),"\n","\n",(0,i.jsxs)(s.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(s.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(s.p,{children:["Isso \xe9 um jeito estranho de dizer que a parte n\xe3o est\xe1 inteiramente contida no todo. ",(0,i.jsx)(s.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{id:"user-content-fn-2",children:["\n",(0,i.jsxs)(s.p,{children:["Ou seja, \xe9 o caso onde n\xe3o temos o produto estocado. ",(0,i.jsx)(s.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9154:(e,s,a)=>{a.d(s,{A:()=>o});const o=a.p+"assets/images/38-casos-de-uso-3a66d4f9b4b2f3170eadaac10f22ea30.png"},982:(e,s,a)=>{a.d(s,{A:()=>o});const o=a.p+"assets/images/39-exemplo-casos-b5d431a0588b0afa57a2de4c6ec99e28.png"},4229:(e,s,a)=>{a.d(s,{A:()=>o});const o=a.p+"assets/images/40-uml-class-6b2359f2bc45d9e5e2455d27eb85c956.png"},6356:(e,s,a)=>{a.d(s,{A:()=>o});const o=a.p+"assets/images/41-uml-heranca-8c9ff2c912e19cd61ffe893dc3426b56.png"},5649:(e,s,a)=>{a.d(s,{A:()=>o});const o=a.p+"assets/images/42-uml-agregacao-1d7648dfff1842ef24224867d0f786c7.png"},30:(e,s,a)=>{a.d(s,{A:()=>o});const o=a.p+"assets/images/43-uml-associacao-248216c980884d14d32086f93a72754e.png"},7880:(e,s,a)=>{a.d(s,{A:()=>o});const o=a.p+"assets/images/44-uml-pacotes-4f9ec8a05e7275f7e01656f197c2670b.png"},8453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>d});var o=a(6540);const i={},n=o.createContext(i);function r(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);