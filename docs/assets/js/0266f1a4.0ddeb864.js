"use strict";(self.webpackChunkciencia_computacao=self.webpackChunkciencia_computacao||[]).push([[1521],{7044:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"cursos/skill-builder/cloud-practictioner","title":"Cloud Practioner","description":"Notas R\xe1pidas de Estudo AWS","source":"@site/docs/03-cursos/01-skill-builder/04-cloud-practictioner.md","sourceDirName":"03-cursos/01-skill-builder","slug":"/cursos/skill-builder/cloud-practictioner","permalink":"/CC_site/docs/cursos/skill-builder/cloud-practictioner","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"materiasSidebar","previous":{"title":"Cloud Acquisiton","permalink":"/CC_site/docs/cursos/skill-builder/cloud-acquisition"},"next":{"title":"Roadmap.sh","permalink":"/CC_site/docs/category/roadmapsh"}}');var a=i(4848),t=i(8453);const r={sidebar_position:4},l="Cloud Practioner",o={},c=[{value:"Notas R\xe1pidas de Estudo AWS",id:"notas-r\xe1pidas-de-estudo-aws",level:2},{value:"Module 1 - Intro + Module 2 - The Cloud",id:"module-1---intro--module-2---the-cloud",level:3},{value:"Module 3 - Global Infra and Reliability",id:"module-3---global-infra-and-reliability",level:3},{value:"Module 4 - Networking",id:"module-4---networking",level:3},{value:"Module 5 - Databases and Storage",id:"module-5---databases-and-storage",level:3},{value:"Module 6 - Security",id:"module-6---security",level:3},{value:"Module 7 - Monitoring",id:"module-7---monitoring",level:3},{value:"Module 8 - Billing",id:"module-8---billing",level:3},{value:"Module 9 - Migration and Innovation",id:"module-9---migration-and-innovation",level:3},{value:"Module 10 - The Cloud Journey",id:"module-10---the-cloud-journey",level:3},{value:"Module 11 - AWS Certified Cloud Practitioner Basics",id:"module-11---aws-certified-cloud-practitioner-basics",level:3}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"cloud-practioner",children:"Cloud Practioner"})}),"\n",(0,a.jsx)(n.h2,{id:"notas-r\xe1pidas-de-estudo-aws",children:"Notas R\xe1pidas de Estudo AWS"}),"\n",(0,a.jsx)(n.h3,{id:"module-1---intro--module-2---the-cloud",children:"Module 1 - Intro + Module 2 - The Cloud"}),"\n",(0,a.jsx)(n.p,{children:"Cloud computing -> pay as you go withou pay beforehand."}),"\n",(0,a.jsx)(n.p,{children:"Ec2 (elastic cloud computing)."}),"\n",(0,a.jsx)(n.p,{children:"Ec2 types -> general, compute, memory, accelerated and storage."}),"\n",(0,a.jsx)(n.p,{children:"Ec2 pricing -> on-demand, reserved (type, plataform or tenancy), saving plans (1 or 3 years), spot\n(90% off, runs in not used machines at time) and dedicated hosts."}),"\n",(0,a.jsx)(n.p,{children:"Load balance"}),"\n",(0,a.jsx)(n.p,{children:"Lambda"}),"\n",(0,a.jsx)(n.p,{children:"SNS -> Topic post"}),"\n",(0,a.jsx)(n.p,{children:"SQS -> Message broker"}),"\n",(0,a.jsx)(n.p,{children:"ECS -> EKS da amazon"}),"\n",(0,a.jsx)(n.p,{children:"EKS -> orquestrador de containers docker"}),"\n",(0,a.jsx)(n.p,{children:"AWS Fargate (serveless para containers)"}),"\n",(0,a.jsx)(n.h3,{id:"module-3---global-infra-and-reliability",children:"Module 3 - Global Infra and Reliability"}),"\n",(0,a.jsx)(n.p,{children:"4 factors to chose region (compliance, proximity, features and price)."}),"\n",(0,a.jsx)(n.p,{children:"Availability Zone (AZ) -> group of data centers indicates in final of a region ex es-east-1a, b or c."}),"\n",(0,a.jsx)(n.p,{children:"AWS Regions -> group of az isolated geographically"}),"\n",(0,a.jsx)(n.p,{children:"Edge Location -> cache coping to places there are not close to a region to reduce the latency that use AWS Cloudfront to deliver."}),"\n",(0,a.jsx)(n.p,{children:"AWS Cloudfront -> CDN da amazon."}),"\n",(0,a.jsx)(n.p,{children:"AWS Route 53 -> DNS da amazon."}),"\n",(0,a.jsx)(n.p,{children:"AWS Outpost -> an kind of mini region run by amazon inside our building."}),"\n",(0,a.jsx)(n.p,{children:"how to create/update aws resources -> AWS Management Console (Browser), AWS CLI, AWS SDKs, AWS Elastic Beastalk and AWS Cloudformation."}),"\n",(0,a.jsx)(n.p,{children:"AWS Elastic Beanstalk -> Ferramenta que faz deploy de app php, .net, java, python e etc. Baseados em alguns presets."}),"\n",(0,a.jsx)(n.p,{children:"AWS Cloudformation -> Infra as code tool (yaml or json)."}),"\n",(0,a.jsx)(n.p,{children:"Advice: run at least across 2 AZ in each region."}),"\n",(0,a.jsx)(n.h3,{id:"module-4---networking",children:"Module 4 - Networking"}),"\n",(0,a.jsx)(n.p,{children:"AWS VPC -> Provision of isolated aws cloud separated by subnets that contains resources."}),"\n",(0,a.jsx)(n.p,{children:"Subnet -> A group of resources based on security or operacional needs. Can be public (through a internet gateway) or private (through a vpc)."}),"\n",(0,a.jsx)(n.p,{children:"Internet Gateway (IGW) -> Used to allow internet access to a VPC."}),"\n",(0,a.jsx)(n.p,{children:"AWS Virtual Private Gateway -> A virtual VPN to my vpc and a private network (aka intranet)."}),"\n",(0,a.jsx)(n.p,{children:"AWS Direct Connect -> Dedicated private connection fiber with a AWS Direct Connect endpoint."}),"\n",(0,a.jsx)(n.p,{children:"Packet -> A unit of data sent over the internet or network"}),"\n",(0,a.jsx)(n.p,{children:"Acces Control List (ACL) -> The component that checks packets permitions for subnets. Default is to allow in and out traffic."}),"\n",(0,a.jsx)(n.p,{children:"Security Group -> The component that check packets permission for aws components (like ec2). Is Stateful and returns always allowed. Default is block in and allow out traffic."}),"\n",(0,a.jsx)(n.p,{children:"Edge Location"}),"\n",(0,a.jsx)(n.p,{children:"AWS Cloudfront"}),"\n",(0,a.jsx)(n.p,{children:"AWS Route 53"}),"\n",(0,a.jsx)(n.p,{children:"Types of Load Balances:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Application -> Flexible feature set with HTTP and HTTPS traffic."}),"\n",(0,a.jsx)(n.li,{children:"Network -> Ultra-high performance. TLS. UDP. Static IP and so on. Capable to handle millions of requests per second."}),"\n",(0,a.jsx)(n.li,{children:"Gateway -> Deploy and manage third-party virtual apps that suports GENEVE."}),"\n",(0,a.jsx)(n.li,{children:"Classic"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"module-5---databases-and-storage",children:"Module 5 - Databases and Storage"}),"\n",(0,a.jsx)(n.p,{children:"Block Level Storage -> Place to store file in a way that can be updated block by block and not by the hole file"}),"\n",(0,a.jsx)(n.p,{children:"EC2 Storage -> Instance Store Volumens that dies within the ec2 machine"}),"\n",(0,a.jsx)(n.p,{children:"AWS Elastic Block Store (EBS) -> A way to save persistence data for ec2 instances. Block storage that can be updated partially. Run in a AZ (not region). Kind of SSD/HDD for EC2."}),"\n",(0,a.jsx)(n.p,{children:"Snapshots -> Incremental backups for EBS"}),"\n",(0,a.jsx)(n.p,{children:"AWS Simple Store Service (S3) -> Store data as objects with versions in buckets (like a file equivalent). Can receive objects until 5TB!"}),"\n",(0,a.jsx)(n.p,{children:"S3 Lifecycle Policies -> Rules that can move data for s3 tiers automatically for better storage and cost"}),"\n",(0,a.jsx)(n.p,{children:"S3 Classes aka Tiers ->"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Standard (99.9999999% prob of availability in a year)"}),"\n",(0,a.jsx)(n.li,{children:"Static Website Hosting"}),"\n",(0,a.jsx)(n.li,{children:"Standard-Infrequent Access Data aka Standard-IA (not so frequently until we need it, like a backup)"}),"\n",(0,a.jsx)(n.li,{children:"Glacier Flexible Retrieval (Retain data for audit or compliance in valts). Accept policies like Write one - read many (worm)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"AWS Elastic File System (EFS) -> Is a serverless shared file system. Scales automatically. Run in a region. Can be access by premises by AWS Direct Connect."}),"\n",(0,a.jsx)(n.p,{children:"AWS Relational Database Service (RDS) -> Support dbms with automated patching, backups, redundancy, fail over and disaster recovery"}),"\n",(0,a.jsx)(n.p,{children:"lift-and-shift -> Migrate from an on-premisses dbms"}),"\n",(0,a.jsx)(n.p,{children:"AWS RDS database engines ->"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"AWS Aurora (compatible with MySQL and PostegreSQL)"}),"\n",(0,a.jsx)(n.li,{children:"MySQL"}),"\n",(0,a.jsx)(n.li,{children:"PostegreSQL"}),"\n",(0,a.jsx)(n.li,{children:"MariaDB"}),"\n",(0,a.jsx)(n.li,{children:"Oracle"}),"\n",(0,a.jsx)(n.li,{children:"MSSQLServer"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"AWS DynamoDB -> Serverless database. NoSQL with item + attribute. Purpose built."}),"\n",(0,a.jsx)(n.p,{children:"Data warehouses -> Storage of data to post ante analysis with focus in the past data and not real time updates."}),"\n",(0,a.jsx)(n.p,{children:"AWS Redshift -> Focus in data analysis. Data warehouse as a service. 10x faster than traditional databases for queries in multiple databases."}),"\n",(0,a.jsx)(n.p,{children:"AWS Database Migration Service (DMS) -> A way to migrate onpremisses databases to aws cloud solutions (with source db still in use!). Can be homogeneous or heterogeneous (with need a aditional convert step). Can be used to bring to dev env the prod data, consolidate multiple db into one and continous replication of on db into many targets."}),"\n",(0,a.jsx)(n.p,{children:"Other Database Services -> AWS DocumentDB (with mongoDB compatibility), AWS Neptune (graph database), AWS Managed Blockchain, AWS QLDB (Quantum Ledger DB), Database Acelerators (with AWS Elasticache) or DAX (DynamoDB Acelerator)"}),"\n",(0,a.jsx)(n.h3,{id:"module-6---security",children:"Module 6 - Security"}),"\n",(0,a.jsx)(n.p,{children:'Share Responsability Model -> aws resp "of the cloud" + user resp "in the cloud"'}),"\n",(0,a.jsx)(n.p,{children:"AWS part -> physical + network + hypervisor"}),"\n",(0,a.jsx)(n.p,{children:"user part -> Operation System + Application + Data"}),"\n",(0,a.jsx)(n.p,{children:"AWS Root User -> Owner of the aws account"}),"\n",(0,a.jsx)(n.p,{children:"Multifactor Authoriation (MFA)"}),"\n",(0,a.jsx)(n.p,{children:"AWS Identity and Access Management (IAM) -> Least privileged principle (user start of zero allowed powers)"}),"\n",(0,a.jsx)(n.p,{children:"Policies -> Permition json that effect (allow or deny) + action (api call) + resource"}),"\n",(0,a.jsx)(n.p,{children:"IAM Groups -> a better way to manage the permitions by attach users in groups"}),"\n",(0,a.jsx)(n.p,{children:"IAM Roles -> temporary permitions"}),"\n",(0,a.jsx)(n.p,{children:"AWS Organizations ->"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Central local to manage multiple AWS accounts"}),"\n",(0,a.jsx)(n.li,{children:"Consolidade billing"}),"\n",(0,a.jsx)(n.li,{children:"Hierarchical group accounts"}),"\n",(0,a.jsx)(n.li,{children:"Control AWS Service and API Actions (Service Control Polices - SCP)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Organization Units -> The name of each AWS organization"}),"\n",(0,a.jsx)(n.p,{children:"AWS Compliance -> A LOT of best practices that AWS already follow"}),"\n",(0,a.jsx)(n.p,{children:"AWS Artifact -> Service that provide on-demand access to AWS Security and compliance reports"}),"\n",(0,a.jsx)(n.p,{children:"Denial-of-service Attacks ->"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"UDF Flood (api weather)"}),"\n",(0,a.jsx)(n.li,{children:"HTTP Level Attacks (multiple http clients)"}),"\n",(0,a.jsx)(n.li,{children:"Slowloris Attack (slow connection fake to stop de queue)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Defenses of DDoS by AWS ->"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Security Groups (the bad api calls does not reach the server)"}),"\n",(0,a.jsx)(n.li,{children:"AWS Shield with AWS WAF (Machine learning and other stuff)"}),"\n",(0,a.jsx)(n.li,{children:"Elastic Load Balancer (each track is segregated)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"AWS Shield -> Service that protects applications against DDoS attacks (two levels: stantad -no cost- and advanced)"}),"\n",(0,a.jsx)(n.p,{children:"Encryption -> A way to ensure that only permitioned peaple can access to the data"}),"\n",(0,a.jsx)(n.p,{children:"AWS Key Management Service (KMS) -> Encryption operations by a key"}),"\n",(0,a.jsx)(n.p,{children:"AWS WAF -> web applicatoin firewall that checks that the request is not from a bloqued IP addr"}),"\n",(0,a.jsx)(n.p,{children:"AWS Inspector -> Automated security assessments to avaluate your app and give some advices to improve the security"}),"\n",(0,a.jsx)(n.p,{children:"AWS GuardDuty -> Inteligent threat detection by monitoring the network activity and account behavior"}),"\n",(0,a.jsx)(n.p,{children:"There are services that permits security assessments or penetration tests without a prior approval of AWS:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"EC2"}),"\n",(0,a.jsx)(n.li,{children:"RDS"}),"\n",(0,a.jsx)(n.li,{children:"Cloudfront"}),"\n",(0,a.jsx)(n.li,{children:"Aurora"}),"\n",(0,a.jsx)(n.li,{children:"API Gateway"}),"\n",(0,a.jsx)(n.li,{children:"Lambda"}),"\n",(0,a.jsx)(n.li,{children:"Lightsail"}),"\n",(0,a.jsx)(n.li,{children:"Elastic Beanstalk"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"But there some services which a prior approval is required:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"DNS via Route 53"}),"\n",(0,a.jsx)(n.li,{children:"DDoS attacks"}),"\n",(0,a.jsx)(n.li,{children:"Port flooding"}),"\n",(0,a.jsx)(n.li,{children:"Protocol flooding"}),"\n",(0,a.jsx)(n.li,{children:"Request flooding"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"AWS Security Tools with IA:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Macie -> Machine Learning to discover, classify and protect sensive data."}),"\n",(0,a.jsx)(n.li,{children:"Rekognition -> Same as Macie but used to image and videos analysis."}),"\n",(0,a.jsx)(n.li,{children:"GuardDuty -> Threat detection service."}),"\n",(0,a.jsx)(n.li,{children:"Cognito -> Sign-in tool for web and mobile apps."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"module-7---monitoring",children:"Module 7 - Monitoring"}),"\n",(0,a.jsx)(n.p,{children:"AWS CloudWatch -> Monitoring your aws infra by metrics. Reduce Mean Time To Resolution (MTTR) and improve Total Costume Ownership (TCO)"}),"\n",(0,a.jsx)(n.p,{children:"Cloudwatch Alarm -> An alert that can be integrated with sns"}),"\n",(0,a.jsx)(n.p,{children:"Cloudwatch Dashboard -> a dashboard, simple as it"}),"\n",(0,a.jsx)(n.p,{children:"AWS CloudTrail -> A compreensive api for audition. Every call in aws saves a log in cloudtrail that can be save in s3 buckets"}),"\n",(0,a.jsx)(n.p,{children:"CloudTrail Insigns -> Automatic detect unusual API activities in my aws account"}),"\n",(0,a.jsx)(n.p,{children:"AWS Trusted Advisor -> Avaluate by 5 pillars: Cost optmization, Performance, Security, Fault tolerance and Service limits. Some are free and others paid. 3 actions: Action recomendation, Investigation recomendation and alright."}),"\n",(0,a.jsx)(n.p,{children:"AWS Health page -> A page that alerts when AWS is having some difficult that may impact your applications."}),"\n",(0,a.jsx)(n.p,{children:"AWS Database Migration Service (AWS DMS) -> Tool for migrate the on-premisses database to AWS RDS."}),"\n",(0,a.jsx)(n.h3,{id:"module-8---billing",children:"Module 8 - Billing"}),"\n",(0,a.jsx)(n.p,{children:"AWS Free Tier -> 3 ways: aways free, 12 months free and trial"}),"\n",(0,a.jsx)(n.p,{children:"How AWS price works ->"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Pay for what you user"}),"\n",(0,a.jsx)(n.li,{children:"Pay less when you reserve"}),"\n",(0,a.jsx)(n.li,{children:"Pay less with volumed-based discounts when you use more"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"AWS Princing Calculator"}),"\n",(0,a.jsx)(n.p,{children:"AWS Billing Dashboard -> Painel to pay the aws bill"}),"\n",(0,a.jsx)(n.p,{children:"AWS Consolidate Billing -> Centralize the bill process + share saving across accounts +  it's free"}),"\n",(0,a.jsx)(n.p,{children:"AWS Budged -> 4 types: cost, usage, reservation and saving plans. Custom alerts to keep the control on time"}),"\n",(0,a.jsx)(n.p,{children:"AWS Cost explore -> drill down to know where you are allocating the cost. Can be group by tag to keep track of projects or other group of services"}),"\n",(0,a.jsx)(n.p,{children:"AWS Support plans ->"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Basic support:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"24/7 customer service"}),"\n",(0,a.jsx)(n.li,{children:"documentation"}),"\n",(0,a.jsx)(n.li,{children:"whitepapers"}),"\n",(0,a.jsx)(n.li,{children:"aws trusted advisor"}),"\n",(0,a.jsx)(n.li,{children:"aws personal health dashboard"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Developer support:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Email support 24 hours to response"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Business support:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"aws trusted advisor full power"}),"\n",(0,a.jsx)(n.li,{children:"direct phone to cloud support team (4 hour to response)"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Enterprise On-Ramp support:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"30 minutes response for critical workload"}),"\n",(0,a.jsx)(n.li,{children:"access to a pool of Technical Account Managers (TAMs)"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Enterprise support:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"15 minutes response"}),"\n",(0,a.jsx)(n.li,{children:"Designated Technical Account Manager (TAM)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Technical Account Manager (TAM) -> A consigliere to keep the aws account running in conformity of the 6 pillars of well-architectured framework (more in module 10):"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Operational Excellence"}),"\n",(0,a.jsx)(n.li,{children:"Security"}),"\n",(0,a.jsx)(n.li,{children:"Reliability"}),"\n",(0,a.jsx)(n.li,{children:"Performance Efficiency"}),"\n",(0,a.jsx)(n.li,{children:"Cost Optimization"}),"\n",(0,a.jsx)(n.li,{children:"Sustainability"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"AWS Marketplace -> A market for enterprise services of third parties in a bunch of categories like devops, infra, Iot, machine learning and more"}),"\n",(0,a.jsx)(n.h3,{id:"module-9---migration-and-innovation",children:"Module 9 - Migration and Innovation"}),"\n",(0,a.jsx)(n.p,{children:"AWS Adoption Framework (CAF) -> Advice to make a smooth change for cloud in 6 perspectives:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Business"}),"\n",(0,a.jsx)(n.li,{children:"People -> Bridge between tech and business."}),"\n",(0,a.jsx)(n.li,{children:"Governance -> Orchestration cloud initiatives, max benefits and low the risks."}),"\n",(0,a.jsx)(n.li,{children:"Platform"}),"\n",(0,a.jsx)(n.li,{children:"Security -> Data and workload sec."}),"\n",(0,a.jsx)(n.li,{children:"Operations -> Cloud services that meet business need with involving of stakeholders like infra and operations leaders."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The first 3 focus on business and the last 3 focus on technical capabilities"}),"\n",(0,a.jsx)(n.p,{children:"AWS CAF Action Plan -> Guide to make a migration"}),"\n",(0,a.jsx)(n.p,{children:"Migration Strategies (6 R's) ->"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Re-hosting (lift and shift)"}),"\n",(0,a.jsx)(n.li,{children:"Re-platforming (lift, tinker and shift)"}),"\n",(0,a.jsx)(n.li,{children:"Retire (die apps not needed anymore)"}),"\n",(0,a.jsx)(n.li,{children:"Retain (make app life only for a short period of time on premisses until then die)"}),"\n",(0,a.jsx)(n.li,{children:"Repurchasing (buy new software inted of use the old ones)"}),"\n",(0,a.jsx)(n.li,{children:"Refactoring (re-code part of your software)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"AWS Snow Family ->"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"AWS Snowcone - A hardware that you receive from amazon, plug in your data center, copy the data and send back to amazon to send this to the cloud. Store up to 14TB"}),"\n",(0,a.jsx)(n.li,{children:"AWS Snowball Edge - A device suited for large-scale data migrations. Can be Storage focused or Compute focused. 80TB"}),"\n",(0,a.jsx)(n.li,{children:"AWS Snowmobile - 100PB. Like a container to plug in your on-premises data center"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Innovation in AWS -> VMWare Cloud AWS, Amazon SageMakes (machine learning pre-trained models), Amazon Augmented AI (2AI), Amazon Lex (the heart of Alexa), Amazon Textract (extract text), AWS DeepRacer, Iot, AWS Groud Station (for satelities)"}),"\n",(0,a.jsx)(n.p,{children:"AWS Q Developer -> TODO: Search this topic"}),"\n",(0,a.jsx)(n.p,{children:"AWS Code Control:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"AWS CodeCommit"}),"\n",(0,a.jsx)(n.li,{children:"AWS CodeBuild"}),"\n",(0,a.jsx)(n.li,{children:"AWS CodePipeline"}),"\n",(0,a.jsx)(n.li,{children:"AWS CodeDeploy"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"module-10---the-cloud-journey",children:"Module 10 - The Cloud Journey"}),"\n",(0,a.jsx)(n.p,{children:"6 pillars of Well-Architectured framework ->"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Operational Excellence (running and monitoring systems)"}),"\n",(0,a.jsx)(n.li,{children:"Security (integrity of data and users)"}),"\n",(0,a.jsx)(n.li,{children:"Reliability (recovery plannings and handle changes)"}),"\n",(0,a.jsx)(n.li,{children:"Performance Efficiency (compute resources used in the best way)"}),"\n",(0,a.jsx)(n.li,{children:"Cost Optimization (optimize full cost)"}),"\n",(0,a.jsx)(n.li,{children:"Sustainability (minimize the environmental impact)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Well-Architectured tool -> A service that evaluate your aws account by the 6 pillars above by a form of questions"}),"\n",(0,a.jsx)(n.p,{children:"6 main benefits to use cloud ->"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"pay as you use (not upfront cost) and the cost is not fixed"}),"\n",(0,a.jsx)(n.li,{children:"benefit from massive scale"}),"\n",(0,a.jsx)(n.li,{children:"stop guessing capacity and scale fast when needed"}),"\n",(0,a.jsx)(n.li,{children:"increase speed and agility by trying and failing fast and cheap"}),"\n",(0,a.jsx)(n.li,{children:"stop wasting money hosting data centers and focus on the business"}),"\n",(0,a.jsx)(n.li,{children:"go global in minutes"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"module-11---aws-certified-cloud-practitioner-basics",children:"Module 11 - AWS Certified Cloud Practitioner Basics"}),"\n",(0,a.jsx)(n.p,{children:"There are 12 AWS Certifications."}),"\n",(0,a.jsx)(n.p,{children:"4 Domains ->"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Cloud Concepts (24%)"}),"\n",(0,a.jsx)(n.li,{children:"Security and Compliance (30%)"}),"\n",(0,a.jsx)(n.li,{children:"Technology (34%)"}),"\n",(0,a.jsx)(n.li,{children:"Billing and Pricing (12%)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Exam Details ->"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"65 questions"}),"\n",(0,a.jsx)(n.li,{children:"90 minutes"}),"\n",(0,a.jsx)(n.li,{children:"Minimum score is 700"}),"\n",(0,a.jsx)(n.li,{children:"Two types of questions (multiple-choice and multiple-response)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Exam Strategies ->"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Read the full question"}),"\n",(0,a.jsx)(n.li,{children:"Predict the answers before reading the options"}),"\n",(0,a.jsx)(n.li,{children:"Eliminate the wrong options"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const a={},t=s.createContext(a);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);