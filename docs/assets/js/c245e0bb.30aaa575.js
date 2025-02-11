"use strict";(self.webpackChunkciencia_computacao=self.webpackChunkciencia_computacao||[]).push([[3142],{56774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var o=n(13848),r=n(74848),i=n(28453);const a={slug:"template-unit-test-dotnet",title:"Template para teste unit\xe1rio em projetos .NET",authors:["ruasbr"],tags:["tip","dotnet"]},s=void 0,u={authorsImageUrls:[void 0]},c=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Melhor template de teste unit\xe1rio que eu conhe\xe7o para projeto .NET"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'using Microsoft.Extensions.Configuration;\nusing Moq.AutoMock;\nusing Xunit;\nusing AutoFixture;\nusing Moq;\n\nprivate readonly IConfiguration _configuration = GetIConfiguration();\n\npublic static IConfiguration GetIConfiguration()\n{\n\treturn (IConfiguration)new ConfigurationBuilder()\n\t.SetBasePath(Regex.Replace(Directory.GetCurrentDirectory(), "\\\\\\\\bin.+", ""))\n\t.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)\n\t.Build();\n}\n\npublic void Test_Should_Do_Something()\n{\n\t// Arrange\n\tvar autoMocker = new AutoMocker();\n\tvar fixture = new Fixture();\n\tfixture.Behaviors.Add(new OmitOnRecursionBehavior());\n\tfixture.Behaviors.Remove(new ThrowingRecursionBehavior());\n\tfixture.Inject(_configuration)\n\n\t// create the SUT class with all injection config mocked allready\n\tvar SUT = autoMocker.CreateInstance<ClassOfSut>();\n\t\n\t// if you need mock some injection configured behavior\n\tvar someInjectedDependence = autoMocker.GetMock<ClassOfInjectedDependecy>();\n\tsomeInjectedDependence.Setup().Returns();\n\t\n\t// to create some object\n\tvar someObject = fixture.Build<ObjectClass>()\n\t\t.With(x => x.SomePropertie, AsignedValue)\n\t\t.Create();\n\n\t// rest of the test\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(96540);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}},13848:e=>{e.exports=JSON.parse('{"permalink":"/CC_site/blog/template-unit-test-dotnet","source":"@site/blog/2025-01-15-template-unit-test-dotnet.md","title":"Template para teste unit\xe1rio em projetos .NET","description":"Melhor template de teste unit\xe1rio que eu conhe\xe7o para projeto .NET","date":"2025-01-15T00:00:00.000Z","tags":[{"inline":false,"label":"Tip","permalink":"/CC_site/blog/tags/tip","description":"Some developer tips to make our lives better."},{"inline":false,"label":"DotNet","permalink":"/CC_site/blog/tags/dotnet","description":"Content related to DotNet dev."}],"readingTime":0.6,"hasTruncateMarker":true,"authors":[{"name":"Bruno de Melo Ruas","title":"Desenvolvedor/Bacharel em Economia","url":"https://github.com/brunoruas2","socials":{"x":"https://x.com/bruno_ruas2","linkedin":"https://www.linkedin.com/in/brunoruas2/","github":"https://github.com/brunoruas2"},"imageURL":"https://github.com/brunoruas2.png","key":"ruasbr","page":null}],"frontMatter":{"slug":"template-unit-test-dotnet","title":"Template para teste unit\xe1rio em projetos .NET","authors":["ruasbr"],"tags":["tip","dotnet"]},"unlisted":false,"prevItem":{"title":"Template de Retry para processos iterados em .NET","permalink":"/CC_site/blog/template-retry-dotnet"},"nextItem":{"title":"Abrindo Chrome em Modo Debugg","permalink":"/CC_site/blog/chrome-debugger"}}')}}]);