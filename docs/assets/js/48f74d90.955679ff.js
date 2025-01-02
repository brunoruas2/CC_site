"use strict";(self.webpackChunkciencia_computacao=self.webpackChunkciencia_computacao||[]).push([[7189],{8520:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"puc/quarto-periodo/banco-nosql","title":"Banco de Dados NoSQL","description":"","source":"@site/docs/02-puc/05-quarto-periodo/06-banco-nosql.md","sourceDirName":"02-puc/05-quarto-periodo","slug":"/puc/quarto-periodo/banco-nosql","permalink":"/CC_site/docs/puc/quarto-periodo/banco-nosql","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Banco de Dados NoSQL","description":""},"sidebar":"tutorialSidebar","previous":{"title":"Testes de Software","permalink":"/CC_site/docs/puc/quarto-periodo/testes"},"next":{"title":"Quinto Per\xedodo","permalink":"/CC_site/docs/category/quinto-per\xedodo"}}');var n=s(4848),a=s(8453);const d={sidebar_position:6,title:"Banco de Dados NoSQL",description:""},t="Bancos de Dados NoSQL",l={},r=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Conceitos B\xe1sicos",id:"conceitos-b\xe1sicos",level:3},{value:"Terminologia",id:"terminologia",level:4},{value:"Hist\xf3ria",id:"hist\xf3ria",level:4},{value:"Caracter\xedsticas",id:"caracter\xedsticas",level:4},{value:"Benef\xedcios",id:"benef\xedcios",level:4},{value:"Taxonomia de Bancos NoSQL",id:"taxonomia-de-bancos-nosql",level:3},{value:"Tipos de Bancos",id:"tipos-de-bancos",level:4},{value:"Casos de Uso",id:"casos-de-uso",level:4},{value:"Aspectos Arquiteturais",id:"aspectos-arquiteturais",level:4},{value:"SGBDS NoSQL",id:"sgbds-nosql",level:2},{value:"Modelos de Dados NoSQL",id:"modelos-de-dados-nosql",level:3},{value:"Tabular",id:"tabular",level:4},{value:"Chave-Valor",id:"chave-valor",level:4},{value:"Coluna",id:"coluna",level:4},{value:"Documento",id:"documento",level:4},{value:"Grafos",id:"grafos",level:4},{value:"Sistemas de Bancos NoSQL",id:"sistemas-de-bancos-nosql",level:3},{value:"Cassandra",id:"cassandra",level:4},{value:"MongoDB",id:"mongodb",level:4},{value:"Neo4J",id:"neo4j",level:4},{value:"Redis",id:"redis",level:4}];function c(e){const o={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"bancos-de-dados-nosql",children:"Bancos de Dados NoSQL"})}),"\n",(0,n.jsx)(o.admonition,{title:"Aula em Elabora\xe7\xe3o",type:"tip",children:(0,n.jsx)(o.p,{children:"Infelizmente eu ainda n\xe3o terminei esse material. Voc\xea pode aproveitar para ir vendo os outros conte\xfados enquanto isso! \ud83d\ude1c"})}),"\n",(0,n.jsx)(o.h2,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsx)(o.h3,{id:"conceitos-b\xe1sicos",children:"Conceitos B\xe1sicos"}),"\n",(0,n.jsx)(o.h4,{id:"terminologia",children:"Terminologia"}),"\n",(0,n.jsx)(o.h4,{id:"hist\xf3ria",children:"Hist\xf3ria"}),"\n",(0,n.jsx)(o.h4,{id:"caracter\xedsticas",children:"Caracter\xedsticas"}),"\n",(0,n.jsx)(o.h4,{id:"benef\xedcios",children:"Benef\xedcios"}),"\n",(0,n.jsx)(o.h3,{id:"taxonomia-de-bancos-nosql",children:"Taxonomia de Bancos NoSQL"}),"\n",(0,n.jsx)(o.h4,{id:"tipos-de-bancos",children:"Tipos de Bancos"}),"\n",(0,n.jsx)(o.h4,{id:"casos-de-uso",children:"Casos de Uso"}),"\n",(0,n.jsx)(o.h4,{id:"aspectos-arquiteturais",children:"Aspectos Arquiteturais"}),"\n",(0,n.jsx)(o.h2,{id:"sgbds-nosql",children:"SGBDS NoSQL"}),"\n",(0,n.jsx)(o.h3,{id:"modelos-de-dados-nosql",children:"Modelos de Dados NoSQL"}),"\n",(0,n.jsx)(o.h4,{id:"tabular",children:"Tabular"}),"\n",(0,n.jsx)(o.h4,{id:"chave-valor",children:"Chave-Valor"}),"\n",(0,n.jsx)(o.h4,{id:"coluna",children:"Coluna"}),"\n",(0,n.jsx)(o.h4,{id:"documento",children:"Documento"}),"\n",(0,n.jsx)(o.h4,{id:"grafos",children:"Grafos"}),"\n",(0,n.jsx)(o.h3,{id:"sistemas-de-bancos-nosql",children:"Sistemas de Bancos NoSQL"}),"\n",(0,n.jsx)(o.h4,{id:"cassandra",children:"Cassandra"}),"\n",(0,n.jsx)(o.h4,{id:"mongodb",children:"MongoDB"}),"\n",(0,n.jsx)(o.h4,{id:"neo4j",children:"Neo4J"}),"\n",(0,n.jsx)(o.h4,{id:"redis",children:"Redis"})]})}function u(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>d,x:()=>t});var i=s(6540);const n={},a=i.createContext(n);function d(e){const o=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(a.Provider,{value:o},e.children)}}}]);