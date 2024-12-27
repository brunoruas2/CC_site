"use strict";(self.webpackChunkciencia_computacao=self.webpackChunkciencia_computacao||[]).push([[4302],{2444:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>t,contentTitle:()=>d,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"puc/segundo-periodo/desenvolvimento-web-backend","title":"Desenvolvimento Web Backend","description":"Aviso","source":"@site/docs/02-puc/03-segundo-periodo/05-desenvolvimento-web-backend.md","sourceDirName":"02-puc/03-segundo-periodo","slug":"/puc/segundo-periodo/desenvolvimento-web-backend","permalink":"/CC_site/docs/puc/segundo-periodo/desenvolvimento-web-backend","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Programa\xe7\xe3o Modular","permalink":"/CC_site/docs/puc/segundo-periodo/programacao-modular"},"next":{"title":"Terceiro Per\xedodo","permalink":"/CC_site/docs/category/terceiro-per\xedodo"}}');var r=o(4848),i=o(8453);const n={sidebar_position:5},d="Desenvolvimento Web Backend",t={},c=[{value:"Aviso",id:"aviso",level:2},{value:"Arquitetura e Linguagens de Programa\xe7\xe3o de Aplica\xe7\xf5es Web Back-End",id:"arquitetura-e-linguagens-de-programa\xe7\xe3o-de-aplica\xe7\xf5es-web-back-end",level:2},{value:"Arquitetura Back-End",id:"arquitetura-back-end",level:3},{value:"Arquitetura de Software",id:"arquitetura-de-software",level:4},{value:"Estilos Arquiteturais",id:"estilos-arquiteturais",level:4},{value:"Tipos de Aplica\xe7\xf5es Web",id:"tipos-de-aplica\xe7\xf5es-web",level:4},{value:"Projeto",id:"projeto",level:2},{value:"Requisitos",id:"requisitos",level:3},{value:"Panorama do Desenvolvimento",id:"panorama-do-desenvolvimento",level:3},{value:"Commit 1 - Update Git Ignore",id:"commit-1---update-git-ignore",level:4},{value:"Commit 2 - Template padr\xe3o do ASP.NET Core",id:"commit-2---template-padr\xe3o-do-aspnet-core",level:4},{value:"Commit 3 - Models, DataContext e InMemory Database",id:"commit-3---models-datacontext-e-inmemory-database",level:4},{value:"Commit 4 - Scaffold do controller para To Do Item",id:"commit-4---scaffold-do-controller-para-to-do-item",level:4},{value:"Commit 5 - Database local parte 1 - Error",id:"commit-5---database-local-parte-1---error",level:4},{value:"Commit 6 - Database local parte 2 - Done",id:"commit-6---database-local-parte-2---done",level:4},{value:"Commit 7 - Update no Database",id:"commit-7---update-no-database",level:4},{value:"Bibliografia",id:"bibliografia",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"desenvolvimento-web-backend",children:"Desenvolvimento Web Backend"})}),"\n",(0,r.jsx)(a.h2,{id:"aviso",children:"Aviso"}),"\n",(0,r.jsxs)(a.p,{children:["Essa mat\xe9ria tem uma abordagem muito pr\xe1tica. Desse modo, escrever um passo a passo detalhado de maneira escrita \xe9 a ",(0,r.jsx)(a.strong,{children:"pior"})," maneira de ensinar esse conhecimento por ser algo extremamente enfadonho tanto para mim (que estou escrevendo) quando para voc\xeas que estar\xe3o lendo."]}),"\n",(0,r.jsx)(a.p,{children:"Dessa feita, eu vou criar um reposit\xf3rio no github dedicado para esse microfundamento onde cada commit ser\xe1 uma etapa do processo de desenvolvimento da aplica\xe7\xe3o. Aqui no material restar\xe1 apenas a parte te\xf3rica e um resumo das transforma\xe7\xf5es feitas ao longo do processo de desenvolvimento da aplica\xe7\xe3o."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://github.com/brunoruas2/repositorio_codigos/tree/main/projetoBackend",children:"Link do Reposit\xf3rio do Mini Projeto"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"arquitetura-e-linguagens-de-programa\xe7\xe3o-de-aplica\xe7\xf5es-web-back-end",children:"Arquitetura e Linguagens de Programa\xe7\xe3o de Aplica\xe7\xf5es Web Back-End"}),"\n",(0,r.jsxs)(a.p,{children:["No nosso projeto de primeiro semestre, desenvolvemos uma aplica\xe7\xe3o web front-end. Como aprendemos at\xe9 ent\xe3o, o front-end de uma aplica\xe7\xe3o \xe9 a parte da aplica\xe7\xe3o que tem foco na ",(0,r.jsx)(a.strong,{children:"interface de intera\xe7\xe3o"})," com o usu\xe1rio. Por outro lado, uma aplica\xe7\xe3o back-end tem foco nos servi\xe7os e tecnologias necess\xe1rias para atendimento das ",(0,r.jsx)(a.strong,{children:"regras de neg\xf3cio"})," que a aplica\xe7\xe3o deve obedecer."]}),"\n",(0,r.jsxs)(a.p,{children:["No back-end, temas como banco de dados, gerenciamento de rotas, sess\xe3o de usu\xe1rio, cookies, seguran\xe7a, templates e outros s\xe3o relevantes e aprenderemos um pouco sobre cada um desses assuntos ao longo da nossa forma\xe7\xe3o. Outro objetivo \xe9 o contato com as ",(0,r.jsx)(a.strong,{children:"principais linguagens"})," usadas para o desenvolvimento back-end assim como os principais frameworks para desenvolvimento de aplica\xe7\xf5es web."]}),"\n",(0,r.jsx)(a.p,{children:"Como a forma\xe7\xe3o da PUC-MG \xe9 baseada no .NET, vamos aprender a usarmos o ASP.NET Core MVC para cria\xe7\xe3o de aplica\xe7\xf5es web completas."}),"\n",(0,r.jsx)(a.h3,{id:"arquitetura-back-end",children:"Arquitetura Back-End"}),"\n",(0,r.jsx)(a.h4,{id:"arquitetura-de-software",children:"Arquitetura de Software"}),"\n",(0,r.jsxs)(a.p,{children:["Durante o desenvolvimento de uma aplica\xe7\xe3o, \xe9 comum",(0,r.jsx)(a.sup,{children:(0,r.jsx)(a.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," iniciarmos um projeto e irmos criando novas fun\xe7\xf5es e m\xf3dulos a medida que precisamos. Essa maneira de desenvolvimento recebe o apelido de ",(0,r.jsx)(a.strong,{children:"bola de lama"}),' por sua representa\xe7\xe3o visual de liga\xe7\xe3o entre as classes parecer uma "bola".']}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"45-big-ball-mud.png",src:o(5276).A+"",width:"948",height:"809"})}),"\n",(0,r.jsxs)(a.p,{children:["Na norma ISO/IEC/IEEE 42010, temos a defini\xe7\xe3o de ",(0,r.jsx)(a.strong,{children:"Arquitetura de Software"}),' como sendo os "conceitos ou propriedades fundamentais de um sistema em seu ambiente incorporados em seus elementos, relacionamentos e nos princ\xedpios de seu design e evolu\xe7\xe3o". Dessa frase, podemos depreender que uma arquitetura de software \xe9 parte fundamental de um sistema. Esse sistema existe em um ambiente que \xe9 considerado pela arquitetura.']}),"\n",(0,r.jsxs)(a.p,{children:['Em Clements e Kazman (2012) temos outra defini\xe7\xe3o de arquitetura de software: "A arquitetura de software de um programa ou sistema de computa\xe7\xe3o \xe9 a estrutura ou estruturas do sistema, que compreendem elementos de software, as propriedades externamente vis\xedveis desses elementos e as rela\xe7\xf5es entre eles". Ou seja, a arquitetura de software \xe9 uma ',(0,r.jsx)(a.strong,{children:"abstra\xe7\xe3o"})," de um sistema de software que serve de base para a constru\xe7\xe3o do pr\xf3prio sistema."]}),"\n",(0,r.jsx)(a.p,{children:"Ao elicitar os requisitos necess\xe1rios para o atendimento de uma determinada demanda, o pr\xf3ximo passo \xe9 justamente definir as caracter\xedsticas arquitet\xf4nicas que compor\xe3o a solu\xe7\xe3o de software. Desse modo, podemos ver que al\xe9m da codifica\xe7\xe3o e do design, uma solu\xe7\xe3o de software tamb\xe9m possui uma camada de arquitetura em sua constru\xe7\xe3o."}),"\n",(0,r.jsx)(a.p,{children:"Tal qual aprendemos nas boas pr\xe1ticas de desenvolvimento e design de aplica\xe7\xf5es, a arquitetura de software tamb\xe9m possui atributos de qualidade para sua avalia\xe7\xe3o. Normalmente, podemos separar esses atributos em tr\xeas grandes grupos:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Operacional"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Disponibilidade"}),"\n",(0,r.jsx)(a.li,{children:"Desempenho"}),"\n",(0,r.jsx)(a.li,{children:"Recuperabilidade"}),"\n",(0,r.jsx)(a.li,{children:"Confiabilidade\\Seguran\xe7a"}),"\n",(0,r.jsx)(a.li,{children:"Robustez"}),"\n",(0,r.jsx)(a.li,{children:"Escalabilidade"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Estrutural"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Configurabilidade"}),"\n",(0,r.jsx)(a.li,{children:"Extensibilidade"}),"\n",(0,r.jsx)(a.li,{children:"Installabilty"}),"\n",(0,r.jsx)(a.li,{children:"Localiza\xe7\xe3o\\Tradu\xe7\xe3o"}),"\n",(0,r.jsx)(a.li,{children:"Capacidade de Manuten\xe7\xe3o"}),"\n",(0,r.jsx)(a.li,{children:"Portabilidade"}),"\n",(0,r.jsx)(a.li,{children:"Suportabilidade"}),"\n",(0,r.jsx)(a.li,{children:"Capacidade de Atualiza\xe7\xe3o"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Transversal"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Acessibilidade"}),"\n",(0,r.jsx)(a.li,{children:"Arquivabilidade"}),"\n",(0,r.jsx)(a.li,{children:"Autentica\xe7\xe3o"}),"\n",(0,r.jsx)(a.li,{children:"Autoriza\xe7\xe3o"}),"\n",(0,r.jsx)(a.li,{children:"Privacidade"}),"\n",(0,r.jsx)(a.li,{children:"Seguran\xe7a"}),"\n",(0,r.jsx)(a.li,{children:"Legal"}),"\n",(0,r.jsx)(a.li,{children:"Usabilidade\\Capacidade de Realiza\xe7\xe3o"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Coment\xe1rio:"})," Infelizmente, enquanto eu escrevo essa parte do material, estou com pouqu\xedssimo tempo dispon\xedvel para me aprofundar mais em alguns t\xf3picos. Em tempo oportuno voltaremos a rever essas se\xe7\xf5es com a devida aten\xe7\xe3o que elas merecem."]}),"\n",(0,r.jsx)(a.h4,{id:"estilos-arquiteturais",children:"Estilos Arquiteturais"}),"\n",(0,r.jsx)(a.p,{children:"J\xe1 entendemos que, na constru\xe7\xe3o de uma solu\xe7\xe3o, precisaremos nos perguntar qual ser\xe1 o tipo de arquitetura de software que ser\xe1 usada para preencher todos os requisitos elicitados na etapa inicial de planejamento. Nessa se\xe7\xe3o, vamos ver os principais modelos\\estilos de arquiteturas de back-end usados hoje em dia."}),"\n",(0,r.jsx)(a.p,{children:"Podemos agrupar alguns modelos segundo suas formas de organizar o sistema em componentes que interagem entre si. Entretanto, precisamos estar sempre cientes que essas divis\xf5es s\xe3o apenas para fins did\xe1ticos. Na vida real, o mais comum \xe9 vermos v\xe1rias caracter\xedsticas de modelos de arquiteturas integradas em uma mesma solu\xe7\xe3o."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Arquitetura Monol\xedtica"})}),"\n",(0,r.jsx)(a.p,{children:"\xc9 o modelo de arquitetura baseado em um alto acoplamento onde o programa \xe9 projetado para funcionar como uma unidade \xfanica e independente. Esse modelo era mais utilizado nos prim\xf3rdios do desenvolvimento quando n\xe3o existia uma clara separa\xe7\xe3o entre hardware e software. Hoje em dia, podemos ver um espelho desse tipo de arquitetura nos sistemas embarcados e em produtos de tecnologia que executam apenas uma aplica\xe7\xe3o."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Arquitetura Microkernel (Baseada em Plugins)"})}),"\n",(0,r.jsx)(a.p,{children:"Esse tipo de arquitetura permite a inser\xe7\xe3o de extens\xf5es din\xe2micas por meio de plugins. O melhor exemplo hoje em dia \xe9 o navegador que permite a instala\xe7\xe3o de extens\xf5es de terceiros para extender as funcionalidades dos navegadores. A vantagem \xe9 que esse tipo de arquitetura permite a extensibilidade de funcionalidades de modo mais simples quando comparamos com o modelo monol\xedtico que demandaria a recompila\xe7\xe3o de toda a aplica\xe7\xe3o sempre que houver alguma mudan\xe7a."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Arquitetura Pipes and Filters (Pipeline)"})}),"\n",(0,r.jsx)(a.p,{children:"Esse modelo de constru\xe7\xe3o \xe9 usado quando temos processos de tratamento de informa\xe7\xf5es seriadas. Imaginemos que temos um arquivo a ser processado por um programa para gerar informa\xe7\xf5es \xfateis para o usu\xe1rio. Ao usarmos a arquitetura de pipeline, n\xf3s criamos uma s\xe9rie de etapas de processamento (chamadas de filters) que s\xe3o independentes entre si e interconectadas pelos pipes que nada mais s\xe3o que as liga\xe7\xf5es l\xf3gicas entre os filters onde o resultado de um filter \xe9 recebido como input do pr\xf3ximo filter por meio do pipe."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Arquitetura em Camadas (Layred)"})}),"\n",(0,r.jsx)(a.p,{children:"Uma maneira de se evitar a complexidade gerada por alto acoplamento na arquitetura monol\xedtica \xe9 a separa\xe7\xe3o das fun\xe7\xf5es do sistema em camadas que podem, ou n\xe3o, se comunicar livremente entre si. A arquitetura web \xe9 a principal implementa\xe7\xe3o desse tipo de arquitetura (camada de user, camada de api, camada de banco de dados e etc). Quando separamos um sistema em camadas, podemos definir a capacidade de cada em emitir e receber dados de modo a termos um controle da seguran\xe7a dos dados e desempenho."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Coment\xe1rio:"})," Na literatura, podemos achar o termo multi-tier que se refere a separa\xe7\xe3o ",(0,r.jsx)(a.strong,{children:"f\xedsica"})," entre as camadas e multi-layer que se refere a separa\xe7\xe3o ",(0,r.jsx)(a.strong,{children:"l\xf3gica"}),"."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Arquitetura Cliente/Servidor"})}),"\n",(0,r.jsx)(a.p,{children:"\xc9 um tipo especial de arquitetura em camadas de duas camadas. \xc9 amplamente usada para solu\xe7\xf5es web onde trabalhamos as comunica\xe7\xf5es entre as camadas usando um protocolo de request/response. A principal dificuldade \xe9 a escalabilidade para p\xe1ginas que possuem um grande volume de acessos que poderiam inviabilizar a resposta pelo servidor."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Arquitetura Peer-to-Peer"})}),"\n",(0,r.jsx)(a.p,{children:"Esse \xe9 o mais novo tipo de arquitetura onde cada n\xf3 da rede \xe9 tido como simultaneamente um cliente e um servidor. \xc9 amplamente usado para escalabilidade de solu\xe7\xf5es e \xe9 um dos motores da chamada web 3.0. Como exemplo, temos os torrents e as blockchains usados para a cria\xe7\xe3o e manuten\xe7\xe3o das criptomoedas."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Coment\xe1rio:"})," Como dito no in\xedcio, essas separa\xe7\xf5es s\xe3o apenas did\xe1ticas e n\xe3o definitivas. N\xe3o existe arquitetura errada. Tudo depende do problema a ser resolvido."]}),"\n",(0,r.jsx)(a.h4,{id:"tipos-de-aplica\xe7\xf5es-web",children:"Tipos de Aplica\xe7\xf5es Web"}),"\n",(0,r.jsx)(a.p,{children:"Quando definimos que um dado problema ser\xe1 resolvido por meio de uma aplica\xe7\xe3o web. Temos que decidir a arquitetura dessa aplica\xe7\xe3o levando-se em conta coisas como: desempenho esperado, custos de servidor, seguran\xe7a da informa\xe7\xe3o e etc. Nessa se\xe7\xe3o vamos aprender sobre os principais modelos de constru\xe7\xe3o de solu\xe7\xf5es web usadas na atualidade."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Multi-Page Application (MPA)"})}),"\n",(0,r.jsx)(a.p,{children:"Tem como vantagens: a) Um melhor desempenho nos sistemas de pesquisa SEO pois as p\xe1ginas s\xe3o servidas com as metatags otimizadas para os mecanismos de busca; b) Um tempo de inicializa\xe7\xe3o mais r\xe1pido devido o fato do processamento estar muito focado na camada do servidor que envia a p\xe1gina j\xe1 renderizada para o client apenas mostrar para o user."}),"\n",(0,r.jsx)(a.p,{children:"Tem como desvantagens: a) Uma experi\xeancia mais desagrad\xe1vel para o user que precisa ver a p\xe1gina inteira ser renderizada sempre que fizer uma solicita\xe7\xe3o de nova informa\xe7\xe3o; b) Alto acoplamento entre front e back-end visto que o server precisa ter o controle das camadas de front-end para o processamento adequado do html a ser servido no client com alto controle sobre rotas."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Single Page Applicatoin (SPA)"})}),"\n",(0,r.jsx)(a.p,{children:'Tem como vantagens: a) Uma \xfanica "viagem" de ida e volta ao server pois no primeiro acesso, os dados de visualiza\xe7\xe3o s\xe3o baixados e salvos nos cookies do client evitando a din\xe2mica de ter que baixar todo o front-end em cada p\xe1gina nova o que melhora a experi\xeancia do usu\xe1rio; b) Controle de rotas mais eficiente porque o novo conte\xfado \xe9 renderizado dentro do mesmo arquivo html sem a necessidade de v\xe1rias rotas novas; c) Como a quantidade de arquivos servidor \xe9 menor, tamb\xe9m temos uma melhora no desempenho da aplica\xe7\xe3o a depender do SDK JS usado.'}),"\n",(0,r.jsx)(a.p,{children:"Tem como desvantagens: a) Uma piora nos mecanismos de pesquisa uma vez que o conte\xfado das SPA \xe9 dinamicamente gerado de modo que os crawlers n\xe3o conseguem tagear de maneira eficiente os sites que usam essa tecnologia; b) Tempo de carregamento inicial mais alto devido o fato de, no primeiro acesso, toda a carga de assets usados no front-end ser servida pelo server para o client."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Server-Side Rendered (SSR)"})}),"\n",(0,r.jsxs)(a.p,{children:["Com o advento do Node.js em 2009, o JS se tornou uma linguagem que pode ser usada tanto no front quanto no back-end",(0,r.jsx)(a.sup,{children:(0,r.jsx)(a.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),". Agora, podemos pensar em aplica\xe7\xf5es que atuam como um intermedi\xe1rio entre as abordagens SPA e MPA com o uso do JS isom\xf3rfico."]}),"\n",(0,r.jsx)(a.p,{children:"Tem como vantagens: a) Tempo de carregamento mais r\xe1pido; b) Melhor suporte de SEO e c) Melhor experi\xeancia do user pois a visualiza\xe7\xe3o se parece muito com o SPA."}),"\n",(0,r.jsx)(a.p,{children:"Tem com desvantagens: a) A necessidade de um server em Node.js e b) Possui um desenvolvimento mais complexo com gest\xe3o de plugins e pacotes de terceiros que podem gerar muitos problemas em aplica\xe7\xf5es grandes."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Static Site Generators (SSG)"})}),"\n",(0,r.jsx)(a.p,{children:"Uma outra abordagem \xe9 a de se gerar todas as p\xe1ginas antecipadamente no server e envia-las todas de uma vez ao client no acesso ao site."}),"\n",(0,r.jsx)(a.p,{children:"Tem como vantagens: a) Tempo de inicializa\xe7\xe3o mais r\xe1pido porque o consumo \xe9 de p\xe1ginas html est\xe1ticas; b) Otimizado para SEO; c) Implanta\xe7\xe3o mais simples porque s\xf3 lidamos com p\xe1ginas html est\xe1ticas sem camada de servidor."}),"\n",(0,r.jsx)(a.p,{children:"Tem como desvantagens: a) Falta de suporte no server side que impede qualquer processamento mais elaborado de dados e b) Sem renderiza\xe7\xe3o em tempo real que prejudica a customiza\xe7\xe3o da experi\xeancia de uso."}),"\n",(0,r.jsx)(a.h2,{id:"projeto",children:"Projeto"}),"\n",(0,r.jsx)(a.p,{children:"Pois bem, agora vamos colocar a m\xe3o na massa."}),"\n",(0,r.jsxs)(a.p,{children:["Como o projeto \xe9 de Backend, vamos fazer um ",(0,r.jsx)(a.strong,{children:"WEB API"})," com ASP.NET Core usando como material a pr\xf3pria documenta\xe7\xe3o no ",(0,r.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-9.0&tabs=visual-studio",children:"site da microsoft"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["Tamb\xe9m n\xe3o vamos perder tempo desenvolvendo nada de interface. No final, vamos ter uma aplica\xe7\xe3o que recebe chamadas http   via swagger",(0,r.jsx)(a.sup,{children:(0,r.jsx)(a.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," e retorna um json."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Aviso:"})," Eu vou seguir um modelo de arquitetura chamado ",(0,r.jsx)(a.strong,{children:"Controller-Based API"})," mas o ASP.NET Core tamb\xe9m permite a constru\xe7\xe3o via ",(0,r.jsx)(a.strong,{children:"Minimal API"}),". Para entender melhor sobre esses estilos basta ler essa ",(0,r.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/apis?view=aspnetcore-9.0",children:"p\xe1gina"}),(0,r.jsx)(a.sup,{children:(0,r.jsx)(a.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"requisitos",children:"Requisitos"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Receber requisi\xe7\xe3o HTTP GET/POST/PUT/DELETE"}),"\n",(0,r.jsx)(a.li,{children:"Retornar um JSON como resposta"}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"panorama-do-desenvolvimento",children:"Panorama do Desenvolvimento"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"88-commits-backend.png",src:o(2181).A+"",width:"627",height:"557"})}),"\n",(0,r.jsx)(a.h4,{id:"commit-1---update-git-ignore",children:"Commit 1 - Update Git Ignore"}),"\n",(0,r.jsx)(a.p,{children:"Nada de mais aqui, s\xf3 colocando algumas coisas no git ignore pra gente n\xe3o ter que ficar olhando pra arquivos desnecess\xe1rios (faltou colocar o .db ai tamb\xe9m)."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://github.com/brunoruas2/repositorio_codigos/commit/1bd18d4ab2907b1a1b9789506aa486c6ef8c6455",children:"Link do Commit"})}),"\n",(0,r.jsx)(a.h4,{id:"commit-2---template-padr\xe3o-do-aspnet-core",children:"Commit 2 - Template padr\xe3o do ASP.NET Core"}),"\n",(0,r.jsx)(a.p,{children:"Tirado da pr\xf3pria documenta\xe7\xe3o do .NET, podemos ver que existem 3 tipos de runtime para executar aplicativos .NET. O ASP.NET Core \xe9 a parte para aplica\xe7\xf5es web mas al\xe9m dele tem o Desktop e a parte de CLI."}),"\n",(0,r.jsx)(a.p,{children:'Aqui nesse commit eu criei um app padr\xe3o s\xf3 pra gente sentir a "temperatura". Tem v\xe1rios arquivos que s\xe3o gerados automaticamente pelo Visual Studio 2022 mas eu deixei um coment\xe1rio nos mais importantes.'}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://github.com/brunoruas2/repositorio_codigos/commit/4c42dad7155e865d93e7703e48ad9dd66bf745a5",children:"Link do Commit"})}),"\n",(0,r.jsx)(a.h4,{id:"commit-3---models-datacontext-e-inmemory-database",children:"Commit 3 - Models, DataContext e InMemory Database"}),"\n",(0,r.jsx)(a.p,{children:"Aqui n\xf3s pegamos o template do ASP.NET Core e come\xe7amos a criar nossa aplica\xe7\xe3o."}),"\n",(0,r.jsx)(a.p,{children:"Primeiro, criamos o modelo da classe de item TO DO e tamb\xe9m a classe que representa a conex\xe3o com o banco de dados."}),"\n",(0,r.jsx)(a.p,{children:"Falando em banco de dados, nesse primeiro momento, vamos usar um banco alocado diretamente na mem\xf3ria RAM do computador, ou seja, desligando o app, perdemos todos os dados."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://github.com/brunoruas2/repositorio_codigos/commit/939ede2af40b02b5bf89804b5b3188577e951f7e",children:"Link do Commit"})}),"\n",(0,r.jsx)(a.h4,{id:"commit-4---scaffold-do-controller-para-to-do-item",children:"Commit 4 - Scaffold do controller para To Do Item"}),"\n",(0,r.jsx)(a.p,{children:"Nessa etapa a gente cria o controller da nossa aplica\xe7\xe3o usando uma automa\xe7\xe3o chamada Scaffold onde s\xf3 precisamos dizer a classe de datacontext e da tabela que o VS 2022 faz praticamente tudo no CRUD (o que significa que a gente tem que saber muito mais do que criar apenas CRUD)."}),"\n",(0,r.jsx)(a.p,{children:"Tem um monte de outros arquivos tamb\xe9m mas s\xf3 foca no que eu comentei."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://github.com/brunoruas2/repositorio_codigos/commit/0ebcdbbc1cd1e5b96e327cc0e2f0252ea2916480",children:"Link do Commit"})}),"\n",(0,r.jsx)(a.p,{children:"Rodando o projeto, podemos ver que agora temos os nossos endpoints no swagger."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"swagger",src:o(4569).A+"",width:"1280",height:"477"})}),"\n",(0,r.jsx)(a.h4,{id:"commit-5---database-local-parte-1---error",children:"Commit 5 - Database local parte 1 - Error"}),"\n",(0,r.jsxs)(a.p,{children:["Agora, queremos salvar as informa\xe7\xf5es de maneira persistente. Para isso, vamos abandonar a estrat\xe9gia de ",(0,r.jsx)(a.code,{children:"InMemoryDatabase"})," para um banco de dados que \xe9 super simples chamado ",(0,r.jsx)(a.code,{children:"sqlite"}),"."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://www.sqlite.org/cli.html",children:"Documenta\xe7\xe3o oficial"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"cli sqlite",src:o(2043).A+"",width:"1280",height:"218"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://github.com/brunoruas2/repositorio_codigos/commit/3a6890bef19cb922372db82202c4f6fa6c420190#r150727419",children:"Link do Commit"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"error",src:o(1320).A+"",width:"1280",height:"548"})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Aten\xe7\xe3o"}),": Aprendam a ler logs de erro! S\xe9rio, um programador passa mais tempo lendo logs de erro e interpretando eles do que escrevendo c\xf3digo. Ent\xe3o vejam que eu apontei na ",(0,r.jsx)(a.code,{children:"stacktrace"})," onde o nosso c\xf3digo quebrou. Vejam que tem um monte de coisa antes mas o que importa \xe9 saber onde no nosso c\xf3digo precisamos resolver."]}),"\n",(0,r.jsx)(a.h4,{id:"commit-6---database-local-parte-2---done",children:"Commit 6 - Database local parte 2 - Done"}),"\n",(0,r.jsxs)(a.p,{children:["Para resolver o problema eu tive que pesquisar no ",(0,r.jsx)(a.a,{href:"https://stackoverflow.com/questions/75150958/entity-framework-sqlite-error-1-no-such-table-efmigrationshistory-databa",children:(0,r.jsx)(a.code,{children:"stackoverflow"})}),", ",(0,r.jsx)(a.a,{href:"https://macoratti.net/21/08/aspc_sqlite1.htm",children:(0,r.jsx)(a.code,{children:"macoratti"})})," e no ",(0,r.jsx)(a.code,{children:"chatgpt"}),". Basicamente, ficaram faltando algumas libs e o ",(0,r.jsx)(a.code,{children:"appsettings.json"})," tinha um erro porque eu coloquei a refer\xeancia para o banco de dados dentro das chaves da parte de log."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://github.com/brunoruas2/repositorio_codigos/commit/a1b1af70696ba9b6debcf60ab477b68e79653ef7#r150727548",children:"Link do Commit"})}),"\n",(0,r.jsx)(a.h4,{id:"commit-7---update-no-database",children:"Commit 7 - Update no Database"}),"\n",(0,r.jsx)(a.p,{children:"Esse \xfaltimo commit \xe9 s\xf3 salvando os dados do teste que eu fiz com os dados persistindo no banco. Logo abaixo eu mostro a consulta no banco."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"banco",src:o(9205).A+"",width:"605",height:"216"})}),"\n",(0,r.jsx)(a.h2,{id:"bibliografia",children:"Bibliografia"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Ingeno, Joseph. ",(0,r.jsx)(a.strong,{children:"Software Architect's Handbook"}),". Packt Publishing, 2018."]}),"\n",(0,r.jsxs)(a.li,{children:["Lauret, Arnaud. ",(0,r.jsx)(a.strong,{children:"Web Application Architecture: Principles, Protocols and Practices"}),", 2nd Edition. Wiley. 2009."]}),"\n",(0,r.jsxs)(a.li,{children:["Lock, Andrew. ",(0,r.jsx)(a.strong,{children:"ASP.NET Core in Action"}),", Second Edition. Manning Publications. 2021"]}),"\n",(0,r.jsxs)(a.li,{children:["Mead, Andrew. ",(0,r.jsx)(a.strong,{children:"Learning Node.js Development"}),". Packt Publishing. 2018."]}),"\n",(0,r.jsxs)(a.li,{children:["Tatroe, Kevin; MacIntyre, Peter. ",(0,r.jsx)(a.strong,{children:"Programming PHP"}),", 4th Edition. O'Reilly Media, Inc. 2020."]}),"\n",(0,r.jsxs)(a.li,{children:["FinTech. ",(0,r.jsx)(a.strong,{children:"Web Application Architecture: Principles, Protocols and Practices"}),", 2nd Edition. Wiley. 2009."]}),"\n",(0,r.jsxs)(a.li,{children:["Bass, Len; Clements, Paul; Kazman, Rick. ",(0,r.jsx)(a.strong,{children:"Software Architecture in Practice"}),", Third Edition. Addison-Wesley Professional, 2012."]}),"\n",(0,r.jsxs)(a.li,{children:["Kok, Lau Tiam. ",(0,r.jsx)(a.strong,{children:"Hands-on Nuxt.js Web Development"}),". Packt Publishing. 2020."]}),"\n",(0,r.jsxs)(a.li,{children:["Richards, Mark. ",(0,r.jsx)(a.strong,{children:"Software Architecture Patterns"}),". O'Reilly Media, Inc., 2015."]}),"\n",(0,r.jsxs)(a.li,{children:["Richards, Mark; Ford, Neal. ",(0,r.jsx)(a.strong,{children:"Fundamentals of Software Architecture"}),". O'Reilly Media, Inc., 2020."]}),"\n",(0,r.jsxs)(a.li,{children:["Sanctis, Valerio De. ",(0,r.jsx)(a.strong,{children:"ASP.NET Core 2 and Angular 5"}),". Packt Publishing. 2017."]}),"\n",(0,r.jsxs)(a.li,{children:["ASP.NET. ",(0,r.jsx)(a.strong,{children:"Essential ASP.NET with Examples in C#"}),". Addison-Wesley Professional. 2003"]}),"\n",(0,r.jsxs)(a.li,{children:["Busuioc, Alexandru; Carr, David; Gray, Markus; Joshi, Vijay; McCollum, Mark; McLeod, Bart; Tonu, M A Hossain. ",(0,r.jsx)(a.strong,{children:"The PHP Workshop"}),". Packt Publishing. 2019."]}),"\n"]}),"\n","\n",(0,r.jsxs)(a.section,{"data-footnotes":!0,className:"footnotes",children:[(0,r.jsx)(a.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{id:"user-content-fn-1",children:["\n",(0,r.jsxs)(a.p,{children:["Principalmente para aqueles que aprendem a programar por conta pr\xf3pria. ",(0,r.jsx)(a.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{id:"user-content-fn-2",children:["\n",(0,r.jsxs)(a.p,{children:["Chamamos essa caracter\xedstica de isom\xf3rfica. ",(0,r.jsx)(a.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{id:"user-content-fn-4",children:["\n",(0,r.jsxs)(a.p,{children:["Pode ser feita via ",(0,r.jsx)(a.a,{href:"https://www.postman.com/",children:"postman"})," ou ",(0,r.jsx)(a.a,{href:"https://insomnia.rest/download",children:"insomnia"})," tamb\xe9m. ",(0,r.jsx)(a.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{id:"user-content-fn-3",children:["\n",(0,r.jsxs)(a.p,{children:["J\xe1 que voc\xea est\xe1 come\xe7ando. Vale a pena fazer os 2 modelos pra aprender. ",(0,r.jsx)(a.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},5276:(e,a,o)=>{o.d(a,{A:()=>s});const s=o.p+"assets/images/45-big-ball-mud-028ab507e6966e221385c1d78335dd95.png"},2181:(e,a,o)=>{o.d(a,{A:()=>s});const s=o.p+"assets/images/88-commits-backend-097d946e911d35d4fbe76d7949a6542b.png"},4569:(e,a,o)=>{o.d(a,{A:()=>s});const s=o.p+"assets/images/89-swagger-b1d8a9b592295cd8ae5bb76f4c348988.jpg"},2043:(e,a,o)=>{o.d(a,{A:()=>s});const s=o.p+"assets/images/90-sqlite-8412fb903ee2b2fd0ffeb40124d78aa0.jpg"},1320:(e,a,o)=>{o.d(a,{A:()=>s});const s=o.p+"assets/images/91-error-database-ef5c8f21bdc6360def2e7790fd7df40f.jpg"},9205:(e,a,o)=>{o.d(a,{A:()=>s});const s=o.p+"assets/images/92-tudo-certo-10ac9d999b01eb4660dc10682392085d.jpg"},8453:(e,a,o)=>{o.d(a,{R:()=>n,x:()=>d});var s=o(6540);const r={},i=s.createContext(r);function n(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);