"use strict";(self.webpackChunkciencia_computacao=self.webpackChunkciencia_computacao||[]).push([[9536],{2224:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"cursos/skill-builder/getting-started","title":"Getting Started","description":"Overview","source":"@site/docs/03-cursos/01-skill-builder/01-getting-started.md","sourceDirName":"03-cursos/01-skill-builder","slug":"/cursos/skill-builder/getting-started","permalink":"/CC_site/docs/cursos/skill-builder/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"AWS Skill Builder","permalink":"/CC_site/docs/category/aws-skill-builder"},"next":{"title":"Billing and Cost","permalink":"/CC_site/docs/cursos/skill-builder/billing-cost"}}');var a=s(4848),l=s(8453);const r={sidebar_position:1},t="Getting Started",c={},o=[{value:"Overview",id:"overview",level:2},{value:"Understanding the AWS Global Infra",id:"understanding-the-aws-global-infra",level:2},{value:"Core Services Overview",id:"core-services-overview",level:2},{value:"Compute",id:"compute",level:3},{value:"EC2 types",id:"ec2-types",level:4},{value:"Amazon EC2 Auto Scaling",id:"amazon-ec2-auto-scaling",level:5},{value:"Severless",id:"severless",level:4},{value:"AWS Lambda",id:"aws-lambda",level:5},{value:"Containers",id:"containers",level:4},{value:"Storage",id:"storage",level:3},{value:"Amazon Simple Storage Service (AWS S3)",id:"amazon-simple-storage-service-aws-s3",level:4},{value:"S3 classes",id:"s3-classes",level:5},{value:"Use Cases",id:"use-cases",level:5},{value:"Amazon Elastic Block Store (AWS EBS)",id:"amazon-elastic-block-store-aws-ebs",level:4},{value:"Amazon Elastic File System (AWS EFS)",id:"amazon-elastic-file-system-aws-efs",level:4},{value:"Databases",id:"databases",level:3},{value:"Overview",id:"overview-1",level:4},{value:"Relational Databases",id:"relational-databases",level:4},{value:"Key-value Databases",id:"key-value-databases",level:4},{value:"In-memory Databases",id:"in-memory-databases",level:4},{value:"Document Databases",id:"document-databases",level:4},{value:"Wide Column Databases",id:"wide-column-databases",level:4},{value:"Graph Databases",id:"graph-databases",level:4},{value:"Time Series Databases",id:"time-series-databases",level:4},{value:"Ledger Databases",id:"ledger-databases",level:4},{value:"Networking",id:"networking",level:3},{value:"Amazon VPC",id:"amazon-vpc",level:4},{value:"Amazon Route 53",id:"amazon-route-53",level:4},{value:"Elastic Load Balancing",id:"elastic-load-balancing",level:4},{value:"Security",id:"security",level:3},{value:"Shared Responsibility Model",id:"shared-responsibility-model",level:4},{value:"Customer Responsibility",id:"customer-responsibility",level:5},{value:"AWS Responsibility",id:"aws-responsibility",level:5},{value:"AWS Compliance",id:"aws-compliance",level:4},{value:"AWS Trust Advisor",id:"aws-trust-advisor",level:4},{value:"Pricing",id:"pricing",level:3},{value:"EC2  Pricing",id:"ec2--pricing",level:4},{value:"AWS Free Tiers",id:"aws-free-tiers",level:4},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"CLOUD = Programmable Resources + Dynamic Abilities + Pay as you go"}),"\n",(0,a.jsx)(n.p,{children:"Ways to interact with AWS:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"AWS Management Console (site)"}),"\n",(0,a.jsx)(n.li,{children:"AWS Command Line Interface (AWS CLI)"}),"\n",(0,a.jsx)(n.li,{children:"AWS System Development Kits (AWS SDKs)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"AWS Core Areas"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Compute"}),"\n",(0,a.jsx)(n.li,{children:"Storage"}),"\n",(0,a.jsx)(n.li,{children:"Databases"}),"\n",(0,a.jsx)(n.li,{children:"Networking"}),"\n",(0,a.jsx)(n.li,{children:"Security"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"understanding-the-aws-global-infra",children:"Understanding the AWS Global Infra"}),"\n",(0,a.jsx)(n.p,{children:"Data Center -> Availability Zone -> AWS Region"}),"\n",(0,a.jsx)(n.h2,{id:"core-services-overview",children:"Core Services Overview"}),"\n",(0,a.jsx)(n.h3,{id:"compute",children:"Compute"}),"\n",(0,a.jsx)(n.p,{children:"There are some options of cloud compute, to list a fell:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Virtual Machines"}),"\n",(0,a.jsx)(n.li,{children:"Containers"}),"\n",(0,a.jsx)(n.li,{children:"Batch Processing Compute Resources"}),"\n",(0,a.jsx)(n.li,{children:"Serverless Compute"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Amazon Elastic Compute Cloud (EC2) -> The principal option of ",(0,a.jsx)(n.strong,{children:"virtual machine"})," in aws ecosystem."]}),"\n",(0,a.jsx)(n.h4,{id:"ec2-types",children:"EC2 types"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://aws.amazon.com/pt/ec2/instance-types/",children:"Link da documenta\xe7\xe3o oficial"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Memory Optimized (focus on RAM)","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Types: r4, r5, x1, z1"}),"\n",(0,a.jsx)(n.li,{children:"Use Case: Open-source databases, in-memory caches, and real-time big data analytics"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Accelerated Computing (focus on GPU)","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Types: f1, g3, g4, p2, p3"}),"\n",(0,a.jsx)(n.li,{children:"Use Case: ML models, computational fluid dynamics, graphical workloads"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Storage","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Types: d2, h1, i3"}),"\n",(0,a.jsx)(n.li,{children:"Use Case: I/O intensive and business-critical workloads"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["General","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Types: a1, m4, m5, t2, t3"}),"\n",(0,a.jsx)(n.li,{children:"Use Case: Web servers and code repositores"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Compute (focus on CPU)","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Types: c4, c5"}),"\n",(0,a.jsx)(n.li,{children:"Use Case: High performance web servers, high performance computing (HPC), scientific modeling, dedicated gaming servers and ad server engines, machine learning inference"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["High Performance Computing (HPC)","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Types: Hpc6a, Hpc6id"}),"\n",(0,a.jsx)(n.li,{children:"Use Case: Large, complex simulations and deep learning overloads"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h5,{id:"amazon-ec2-auto-scaling",children:"Amazon EC2 Auto Scaling"}),"\n",(0,a.jsx)(n.p,{children:"The same content we learned before."}),"\n",(0,a.jsx)(n.h4,{id:"severless",children:"Severless"}),"\n",(0,a.jsx)(n.p,{children:"Building and running applications without managing servers at al!"}),"\n",(0,a.jsxs)(n.p,{children:["Keep in mind that ",(0,a.jsx)(n.strong,{children:"serverless doesn't run idle resources"}),", so you pay what you need."]}),"\n",(0,a.jsx)(n.h5,{id:"aws-lambda",children:"AWS Lambda"}),"\n",(0,a.jsx)(n.p,{children:"Some benefits:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Multiple languages"}),"\n",(0,a.jsx)(n.li,{children:"Stateless code"}),"\n",(0,a.jsx)(n.li,{children:"Code can run on schedule or by trigger"}),"\n",(0,a.jsx)(n.li,{children:"Pricing by milisec of usage"}),"\n",(0,a.jsx)(n.li,{children:"Event-driven architectures"}),"\n",(0,a.jsx)(n.li,{children:"Totally scalable"}),"\n",(0,a.jsx)(n.li,{children:"High availability"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Some exemples of usage:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Web apps"}),"\n",(0,a.jsx)(n.li,{children:"Backend"}),"\n",(0,a.jsx)(n.li,{children:"Data processing"}),"\n",(0,a.jsx)(n.li,{children:"Chatbots"}),"\n",(0,a.jsx)(n.li,{children:"Alexa"}),"\n",(0,a.jsx)(n.li,{children:"IT automation"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"containers",children:"Containers"}),"\n",(0,a.jsxs)(n.p,{children:["There are 2 main types of ",(0,a.jsx)(n.strong,{children:"containger orchestration services"})," offer by AWS:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Amazon Elastic Container Service (AWS ECS)"}),"\n",(0,a.jsx)(n.li,{children:"Amazon Elastic Kubernetes Service (AWS EKS)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Not much information was given in the material (need to deeper in the future)."}),"\n",(0,a.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,a.jsx)(n.h4,{id:"amazon-simple-storage-service-aws-s3",children:"Amazon Simple Storage Service (AWS S3)"}),"\n",(0,a.jsx)(n.p,{children:"We can aggregate the S3 benefits in two main categories:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Durability"})," of 99.999999999 (this is the actual number, no joke)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Support for event triggers"})," that be able to be used in event-driven applications with usage of lambda for example"]}),"\n"]}),"\n",(0,a.jsx)(n.h5,{id:"s3-classes",children:"S3 classes"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://aws.amazon.com/pt/s3/storage-classes/",children:"Link for official documentation"})}),"\n",(0,a.jsx)(n.p,{children:"There are four classes that can be used to improve the benefits of S3 usage and maintain de cost at minimum possible."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Standard: Low latency and high throughput"}),"\n",(0,a.jsx)(n.li,{children:"Intelligent-Tiering: Tries to low the cost automatically moving the data to less-expensive s3 classes by volume of requests. Latency of milliseconds and high performance."}),"\n",(0,a.jsx)(n.li,{children:"Express One Zone: Runs in only one AZ. One digit milliseconds latency."}),"\n",(0,a.jsx)(n.li,{children:"Standard-IA: For data with infrequent access by low latency when necessary."}),"\n",(0,a.jsx)(n.li,{children:"One Zone-IA: Same of standard by runs in a single AZ with a reduce in 20% of the cost."}),"\n",(0,a.jsx)(n.li,{children:"Glacier Instant Retrieval: Low cost for data with long storage prevision but required milliseconds latency when necessary."}),"\n",(0,a.jsx)(n.li,{children:"Glacier Flexible Retrieval: For data needed one or two times a year and with high latency. 10% less expensive if compared with Glacier instant retrieval."}),"\n",(0,a.jsx)(n.li,{children:"Glacier Deep Archive: For clients that need to store data up do 7 years for due diligence or accountability purposes."}),"\n",(0,a.jsx)(n.li,{children:"Outposts: For data that need to be on-premises, AWS offers a way to run a kind of local AWS server locally and still have the AWS APIs to interact with the infra."}),"\n"]}),"\n",(0,a.jsx)(n.h5,{id:"use-cases",children:"Use Cases"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Content storage and distribution"}),"\n",(0,a.jsx)(n.li,{children:"Backup and archiving"}),"\n",(0,a.jsx)(n.li,{children:"Build a data lake"}),"\n",(0,a.jsx)(n.li,{children:"Backup and restore critical data"}),"\n",(0,a.jsx)(n.li,{children:"Archive data"}),"\n",(0,a.jsx)(n.li,{children:"Run cloud-native apps"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"amazon-elastic-block-store-aws-ebs",children:"Amazon Elastic Block Store (AWS EBS)"}),"\n",(0,a.jsx)(n.p,{children:"EC2 instances didn't have persistence in data. When the EC2 instance dies, the data is gone. But with EBS you can persist data which can be used by EC2 instances."}),"\n",(0,a.jsx)(n.p,{children:"Has incremental snapshots."}),"\n",(0,a.jsx)(n.p,{children:"Has encrypt option to all the data in the volume. And data traveling between instance and EBS is encrypt as well. Even the past data stored in snapshots become encrypted."}),"\n",(0,a.jsx)(n.p,{children:"The amount of SSD/HDD volume can be defined and scale only if needed."}),"\n",(0,a.jsx)(n.p,{children:"To remember: EBS is like a virtual SSD for EC2 instances."}),"\n",(0,a.jsx)(n.h4,{id:"amazon-elastic-file-system-aws-efs",children:"Amazon Elastic File System (AWS EFS)"}),"\n",(0,a.jsx)(n.p,{children:"If you need a serverless shared file system solution, you will need AWS EFS."}),"\n",(0,a.jsx)(n.p,{children:"Four types:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"NetApp ONTAP"}),"\n",(0,a.jsx)(n.li,{children:"Open ZFS"}),"\n",(0,a.jsx)(n.li,{children:"Windows File Server"}),"\n",(0,a.jsx)(n.li,{children:"Lustre"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"databases",children:"Databases"}),"\n",(0,a.jsx)(n.h4,{id:"overview-1",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"There's a lot of database solutions on AWS. We will do some brief overlook in the types and solutions available in the AWS Ecosystem."}),"\n",(0,a.jsx)(n.h4,{id:"relational-databases",children:"Relational Databases"}),"\n",(0,a.jsx)(n.p,{children:"The more tradicional type of DBMS. Works with traditional applications, ERPs, CRMs and other types of well-know demands."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Amazon Aurora"}),": MySQL or PostgreSQL compatible relational database for cloud that can run in multi AZ replicas."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Amazon RDS"}),": A\xa0web service that can run in ",(0,a.jsx)(n.strong,{children:"multiple AZs"})," for high availability. You can user RDS with a lot of engines like Aurora (MySQL or PostegreSQL), MariaDB, Oracle, SQL Server, MySQL and PostegreSQL."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Amazon Redshift"}),": A  data warehouse that uses ",(0,a.jsx)(n.strong,{children:"columnar storage"})," that enable complex queries over analytical data workloads."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"key-value-databases",children:"Key-value Databases"}),"\n",(0,a.jsx)(n.p,{children:"Well suited for high-traffic web apps, e-commerce systems and gaming."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Amazon DynamoDB"}),": Achieve a single digit millisecond latency serverless non-relational database."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"in-memory-databases",children:"In-memory Databases"}),"\n",(0,a.jsx)(n.p,{children:"For demands of really fast response and not long term storage like caching, session management, gaming leaderboards, geospatial apps."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Amazon ElastiCache"}),": Microsecond latency scalable caching service."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Amazon MemoryDB for Redis"}),": The redis approaching in the AWS ecosystem."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"document-databases",children:"Document Databases"}),"\n",(0,a.jsx)(n.p,{children:"Content management, catalogs, user profiles are some of example of usage."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Amazon DocumentDB"}),": With MongoDB compatibility, can scale JSON workloads."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"wide-column-databases",children:"Wide Column Databases"}),"\n",(0,a.jsxs)(n.p,{children:["Here is a ",(0,a.jsx)(n.a,{href:"https://budibase.com/blog/data/wide-column-database/",children:"link"})," for an article that discuss what is a wide column database. In (really) short, is a type of column database that is better suited for infrequent attributes in each entry (like attributes of products in a e-commerce SaaS)."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Amazon Keyspaces"})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"graph-databases",children:"Graph Databases"}),"\n",(0,a.jsx)(n.p,{children:"Better suited for fraud detection, social networking, recommendations engines and so on."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Amazon Neptune"}),": Focus on ",(0,a.jsx)(n.strong,{children:"relationship"})," between data for highly connected datasets."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"time-series-databases",children:"Time Series Databases"}),"\n",(0,a.jsx)(n.p,{children:"For really intensive metrics over time like IoT, DevOps, Telemetry per exemple."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Amazon Timestream"}),": Can store and analyse trillions of events per day."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"ledger-databases",children:"Ledger Databases"}),"\n",(0,a.jsx)(n.p,{children:"Systems of record, supply chain, registrations, banking transactions are some applications."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Amazon Quantum Ledger Database (AWS QLDB)"}),": Transparent, immutable and cryptographically verificable."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"networking",children:"Networking"}),"\n",(0,a.jsx)(n.h4,{id:"amazon-vpc",children:"Amazon VPC"}),"\n",(0,a.jsx)(n.p,{children:"Is a private network that provides logical isolation for the workloads. You can control the traffic in and out a VPC."}),"\n",(0,a.jsxs)(n.p,{children:["The gate of a VPC is a ",(0,a.jsx)(n.strong,{children:"Internet Gateway"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"amazon-route-53",children:"Amazon Route 53"}),"\n",(0,a.jsx)(n.p,{children:"A high available cloud DNS service. Can be used to domain registration, DNS routing and heal checking."}),"\n",(0,a.jsx)(n.h4,{id:"elastic-load-balancing",children:"Elastic Load Balancing"}),"\n",(0,a.jsx)(n.p,{children:"Like others Load Balance applications, the Elastic Load Balancing is a web service that control de inflow of traffic and redirect between the EC2 instances available (and can escalate the instances if necessary) in one ou more AZs."}),"\n",(0,a.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,a.jsx)(n.h4,{id:"shared-responsibility-model",children:"Shared Responsibility Model"}),"\n",(0,a.jsxs)(n.p,{children:["Even the AWS and the client are responsible for the security either ",(0,a.jsx)(n.strong,{children:"in"})," the cloud and ",(0,a.jsx)(n.strong,{children:"of"})," the cloud. The each share of responsibility is defined by the so called ",(0,a.jsx)(n.strong,{children:"Shared Responsibility Model"}),"."]}),"\n",(0,a.jsx)(n.h5,{id:"customer-responsibility",children:"Customer Responsibility"}),"\n",(0,a.jsxs)(n.p,{children:["Basically, the customer is responsible for the security ",(0,a.jsx)(n.strong,{children:"of the cloud"}),". To list some of his part:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Platform, apps and identity access management"}),"\n",(0,a.jsx)(n.li,{children:"Operation system, network and firewall config"}),"\n",(0,a.jsx)(n.li,{children:"Client-side data and data integrity auth"}),"\n",(0,a.jsx)(n.li,{children:"Server-side encryption"}),"\n",(0,a.jsx)(n.li,{children:"Network traffic protection"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"and so on."}),"\n",(0,a.jsx)(n.h5,{id:"aws-responsibility",children:"AWS Responsibility"}),"\n",(0,a.jsx)(n.p,{children:"The AWS' part is the infrastructure of the cloud:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"AWS software"}),"\n",(0,a.jsx)(n.li,{children:"Hardware and AWS global infra"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"aws-compliance",children:"AWS Compliance"}),"\n",(0,a.jsx)(n.p,{children:"To permit that the client achieve their goal of maintain the security in the cloud. AWS create a handful Security Services:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"AWS Identity and Access Management (AWS IAM) to control access"}),"\n",(0,a.jsx)(n.li,{children:"AWS Artifact to generate on-demand compliance reports"}),"\n",(0,a.jsx)(n.li,{children:"AWS Key Management Service (AWS KMS) to generate, manage and rotate encryption keys"}),"\n",(0,a.jsx)(n.li,{children:"AWS Shield to protect from DDoS attacks"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"aws-trust-advisor",children:"AWS Trust Advisor"}),"\n",(0,a.jsx)(n.p,{children:"Service that help the customer to reduce cost, increase performance, fault tolerance, services quotas and improve security by recommendations that help the customer to achieve the best practices."}),"\n",(0,a.jsx)(n.h3,{id:"pricing",children:"Pricing"}),"\n",(0,a.jsx)(n.p,{children:"Pricing concepts used by AWS:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Pay for what you use"}),"\n",(0,a.jsx)(n.li,{children:"Pay less when you reserve"}),"\n",(0,a.jsx)(n.li,{children:"Pay less with volume-based discounts"}),"\n",(0,a.jsx)(n.li,{children:"Pay even less as AWS grows"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"ec2--pricing",children:"EC2  Pricing"}),"\n",(0,a.jsx)(n.p,{children:"There are three categories of purchasing:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["On-demand instances:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Charged per hour"}),"\n",(0,a.jsx)(n.li,{children:"Short-term"}),"\n",(0,a.jsx)(n.li,{children:"Best fit on unpredictable workloads"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Reserved Instances/Saving Plans","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Discount by 1 or 3 year commitments"}),"\n",(0,a.jsx)(n.li,{children:"Larger the upfront payment, lager the discount"}),"\n",(0,a.jsxs)(n.li,{children:["Two offering classes:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Standard Reserved Instances -> you can modify AZ, scope, networking type and instance size in the same EC2 family"}),"\n",(0,a.jsx)(n.li,{children:"Convertible Reserved Instances -> you can exchange EC2 instances of different EC2 family, OS and tenancy"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Spot Instances","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Up to 90% discount"}),"\n",(0,a.jsx)(n.li,{children:"Best fir for aplication with flexible start and end"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"aws-free-tiers",children:"AWS Free Tiers"}),"\n",(0,a.jsx)(n.p,{children:"There are three types:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Always free"}),"\n",(0,a.jsx)(n.li,{children:"12 months free"}),"\n",(0,a.jsx)(n.li,{children:"Free trials"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsx)(n.p,{children:"There are 12 AWS certifications."}),"\n",(0,a.jsx)(n.p,{children:"There are four levels of expertise in AWS certifications:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Foundational"}),"\n",(0,a.jsx)(n.li,{children:"Associate"}),"\n",(0,a.jsx)(n.li,{children:"Professional"}),"\n",(0,a.jsx)(n.li,{children:"Specialty"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var i=s(6540);const a={},l=i.createContext(a);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);