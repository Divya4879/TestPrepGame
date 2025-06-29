// AWS Cloud Practitioner Test Prep Questions Database
// Total: 200 questions across 5 levels (40 questions per level)

const questionDatabase = {
    // Level 1: Cloud Fundamentals (40 questions)
    level1: [
        {
            id: 1,
            question: "What is cloud computing?",
            options: [
                "A) A way to store files on your computer",
                "B) On-demand delivery of IT resources over the Internet",
                "C) A type of weather prediction system",
                "D) A method of connecting computers with cables"
            ],
            correct: 1,
            explanation: "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing.",
            category: "Cloud Concepts"
        },
        {
            id: 2,
            question: "Which of the following is NOT a cloud computing deployment model?",
            options: [
                "A) Public cloud",
                "B) Private cloud",
                "C) Hybrid cloud",
                "D) Distributed cloud"
            ],
            correct: 3,
            explanation: "The three main cloud deployment models are public, private, and hybrid cloud. Distributed cloud is not a standard deployment model.",
            category: "Cloud Concepts"
        },
        {
            id: 3,
            question: "What does AWS stand for?",
            options: [
                "A) Amazon Web Services",
                "B) Advanced Web Solutions",
                "C) Automated Web Systems",
                "D) Amazon Website Services"
            ],
            correct: 0,
            explanation: "AWS stands for Amazon Web Services, Amazon's comprehensive cloud computing platform.",
            category: "AWS Basics"
        },
        {
            id: 4,
            question: "Which of the following is a benefit of cloud computing?",
            options: [
                "A) Higher upfront costs",
                "B) Limited scalability",
                "C) Pay-as-you-go pricing",
                "D) Increased maintenance overhead"
            ],
            correct: 2,
            explanation: "Pay-as-you-go pricing is a key benefit of cloud computing, allowing you to pay only for what you use.",
            category: "Cloud Benefits"
        },
        {
            id: 5,
            question: "What is the AWS Shared Responsibility Model?",
            options: [
                "A) AWS is responsible for everything",
                "B) Customer is responsible for everything",
                "C) Security responsibilities are shared between AWS and customer",
                "D) Only AWS support team handles security"
            ],
            correct: 2,
            explanation: "The AWS Shared Responsibility Model divides security responsibilities between AWS (security OF the cloud) and the customer (security IN the cloud).",
            category: "Security"
        },
        {
            id: 6,
            question: "How many Availability Zones does each AWS Region have at minimum?",
            options: [
                "A) 1",
                "B) 2",
                "C) 3",
                "D) 5"
            ],
            correct: 1,
            explanation: "Each AWS Region has a minimum of two Availability Zones, though most have three or more.",
            category: "Global Infrastructure"
        },
        {
            id: 7,
            question: "What is an AWS Availability Zone?",
            options: [
                "A) A geographical area with multiple data centers",
                "B) One or more discrete data centers with redundant power and networking",
                "C) A single server in AWS",
                "D) A virtual private network"
            ],
            correct: 1,
            explanation: "An Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region.",
            category: "Global Infrastructure"
        },
        {
            id: 8,
            question: "Which of the following is a characteristic of cloud computing?",
            options: [
                "A) Limited access",
                "B) On-demand self-service",
                "C) High upfront investment",
                "D) Manual scaling"
            ],
            correct: 1,
            explanation: "On-demand self-service is a key characteristic of cloud computing, allowing users to provision resources automatically.",
            category: "Cloud Concepts"
        },
        {
            id: 9,
            question: "What does 'elasticity' mean in cloud computing?",
            options: [
                "A) The ability to stretch physical servers",
                "B) The ability to automatically scale resources up or down based on demand",
                "C) The flexibility of payment methods",
                "D) The durability of data storage"
            ],
            correct: 1,
            explanation: "Elasticity refers to the ability to automatically scale computing resources up or down based on demand.",
            category: "Cloud Concepts"
        },
        {
            id: 10,
            question: "Which AWS service provides a virtual server in the cloud?",
            options: [
                "A) Amazon S3",
                "B) Amazon EC2",
                "C) Amazon RDS",
                "D) Amazon VPC"
            ],
            correct: 1,
            explanation: "Amazon EC2 (Elastic Compute Cloud) provides virtual servers in the cloud.",
            category: "Core Services"
        },
        {
            id: 11,
            question: "What is the primary benefit of using multiple Availability Zones?",
            options: [
                "A) Lower costs",
                "B) Better performance",
                "C) High availability and fault tolerance",
                "D) Easier management"
            ],
            correct: 2,
            explanation: "Using multiple Availability Zones provides high availability and fault tolerance by distributing resources across isolated locations.",
            category: "Global Infrastructure"
        },
        {
            id: 12,
            question: "Which of the following is NOT a cloud service model?",
            options: [
                "A) Infrastructure as a Service (IaaS)",
                "B) Platform as a Service (PaaS)",
                "C) Software as a Service (SaaS)",
                "D) Network as a Service (NaaS)"
            ],
            correct: 3,
            explanation: "The three main cloud service models are IaaS, PaaS, and SaaS. NaaS is not a standard cloud service model.",
            category: "Cloud Concepts"
        },
        {
            id: 13,
            question: "What is the AWS Free Tier?",
            options: [
                "A) A premium support plan",
                "B) Free usage of certain AWS services for new customers",
                "C) A type of EC2 instance",
                "D) A storage class in S3"
            ],
            correct: 1,
            explanation: "The AWS Free Tier provides free usage of certain AWS services for new customers, typically for 12 months.",
            category: "Billing"
        },
        {
            id: 14,
            question: "Which principle of cloud architecture design emphasizes building systems that can handle failure?",
            options: [
                "A) Design for success",
                "B) Design for failure",
                "C) Design for speed",
                "D) Design for simplicity"
            ],
            correct: 1,
            explanation: "Design for failure is a key principle that emphasizes building systems that can handle and recover from component failures.",
            category: "Architecture"
        },
        {
            id: 15,
            question: "What does 'pay-as-you-go' pricing mean?",
            options: [
                "A) Pay a fixed monthly fee regardless of usage",
                "B) Pay only for the resources you actually use",
                "C) Pay in advance for a full year",
                "D) Pay based on the number of users"
            ],
            correct: 1,
            explanation: "Pay-as-you-go pricing means you pay only for the resources you actually consume, with no upfront costs or long-term commitments.",
            category: "Billing"
        },
        {
            id: 16,
            question: "Which of the following best describes Infrastructure as a Service (IaaS)?",
            options: [
                "A) Complete applications delivered over the internet",
                "B) Development platforms and tools",
                "C) Virtual machines, storage, and networking",
                "D) Database management systems only"
            ],
            correct: 2,
            explanation: "IaaS provides fundamental computing resources like virtual machines, storage, and networking infrastructure.",
            category: "Cloud Concepts"
        },
        {
            id: 17,
            question: "What is an AWS Region?",
            options: [
                "A) A single data center",
                "B) A geographical area containing multiple Availability Zones",
                "C) A type of EC2 instance",
                "D) A billing unit"
            ],
            correct: 1,
            explanation: "An AWS Region is a geographical area that contains multiple, isolated Availability Zones.",
            category: "Global Infrastructure"
        },
        {
            id: 18,
            question: "Which of the following is a benefit of using cloud services?",
            options: [
                "A) Increased capital expenditure",
                "B) Reduced agility",
                "C) Global reach in minutes",
                "D) Higher maintenance costs"
            ],
            correct: 2,
            explanation: "Cloud services provide global reach in minutes, allowing you to deploy applications worldwide quickly and easily.",
            category: "Cloud Benefits"
        },
        {
            id: 19,
            question: "What does 'scalability' mean in cloud computing?",
            options: [
                "A) The ability to measure performance",
                "B) The ability to increase or decrease resources based on demand",
                "C) The ability to secure data",
                "D) The ability to backup data"
            ],
            correct: 1,
            explanation: "Scalability is the ability to increase or decrease computing resources based on demand, either manually or automatically.",
            category: "Cloud Concepts"
        },
        {
            id: 20,
            question: "Which AWS service is primarily used for object storage?",
            options: [
                "A) Amazon EBS",
                "B) Amazon S3",
                "C) Amazon EFS",
                "D) Amazon FSx"
            ],
            correct: 1,
            explanation: "Amazon S3 (Simple Storage Service) is AWS's primary object storage service.",
            category: "Core Services"
        },
        {
            id: 21,
            question: "What is the main advantage of using Reserved Instances?",
            options: [
                "A) Better performance",
                "B) Cost savings compared to On-Demand pricing",
                "C) Automatic scaling",
                "D) Enhanced security"
            ],
            correct: 1,
            explanation: "Reserved Instances provide significant cost savings (up to 75%) compared to On-Demand pricing in exchange for a commitment.",
            category: "Billing"
        },
        {
            id: 22,
            question: "Which of the following is NOT a pillar of the AWS Well-Architected Framework?",
            options: [
                "A) Security",
                "B) Reliability",
                "C) Simplicity",
                "D) Performance Efficiency"
            ],
            correct: 2,
            explanation: "The five pillars of the AWS Well-Architected Framework are: Security, Reliability, Performance Efficiency, Cost Optimization, and Operational Excellence.",
            category: "Architecture"
        },
        {
            id: 23,
            question: "What does 'high availability' mean?",
            options: [
                "A) Systems that are very expensive",
                "B) Systems that remain operational most of the time",
                "C) Systems that process data very quickly",
                "D) Systems that use the latest technology"
            ],
            correct: 1,
            explanation: "High availability refers to systems that remain operational and accessible most of the time, minimizing downtime.",
            category: "Architecture"
        },
        {
            id: 24,
            question: "Which AWS service helps you monitor your AWS resources and applications?",
            options: [
                "A) Amazon S3",
                "B) Amazon CloudWatch",
                "C) Amazon EC2",
                "D) Amazon VPC"
            ],
            correct: 1,
            explanation: "Amazon CloudWatch is AWS's monitoring service that collects and tracks metrics, logs, and events.",
            category: "Management Tools"
        },
        {
            id: 25,
            question: "What is the difference between horizontal and vertical scaling?",
            options: [
                "A) Horizontal adds more instances, vertical increases instance size",
                "B) Horizontal increases instance size, vertical adds more instances",
                "C) There is no difference",
                "D) Both refer to the same concept"
            ],
            correct: 0,
            explanation: "Horizontal scaling (scale out) adds more instances, while vertical scaling (scale up) increases the size/capacity of existing instances.",
            category: "Architecture"
        },
        {
            id: 26,
            question: "Which of the following is a benefit of using AWS instead of traditional on-premises infrastructure?",
            options: [
                "A) Higher upfront costs",
                "B) Limited global presence",
                "C) Reduced time to market",
                "D) More hardware maintenance"
            ],
            correct: 2,
            explanation: "AWS reduces time to market by providing ready-to-use infrastructure and services, eliminating the need to procure and set up hardware.",
            category: "Cloud Benefits"
        },
        {
            id: 27,
            question: "What is an Edge Location in AWS?",
            options: [
                "A) The same as an Availability Zone",
                "B) A location where content is cached for faster delivery",
                "C) A type of EC2 instance",
                "D) A billing center"
            ],
            correct: 1,
            explanation: "Edge Locations are sites where AWS caches content for faster delivery to users through services like CloudFront.",
            category: "Global Infrastructure"
        },
        {
            id: 28,
            question: "Which principle suggests that you should avoid guessing your capacity needs?",
            options: [
                "A) Design for failure",
                "B) Stop guessing about capacity",
                "C) Automate everything",
                "D) Use managed services"
            ],
            correct: 1,
            explanation: "The 'Stop guessing about capacity' principle suggests using cloud elasticity instead of trying to predict capacity needs.",
            category: "Architecture"
        },
        {
            id: 29,
            question: "What does 'fault tolerance' mean?",
            options: [
                "A) The ability to prevent all failures",
                "B) The ability to continue operating despite component failures",
                "C) The ability to detect failures quickly",
                "D) The ability to repair failures automatically"
            ],
            correct: 1,
            explanation: "Fault tolerance is the ability of a system to continue operating properly despite the failure of some of its components.",
            category: "Architecture"
        },
        {
            id: 30,
            question: "Which AWS service provides a content delivery network (CDN)?",
            options: [
                "A) Amazon S3",
                "B) Amazon CloudFront",
                "C) Amazon EC2",
                "D) Amazon Route 53"
            ],
            correct: 1,
            explanation: "Amazon CloudFront is AWS's content delivery network (CDN) service that delivers content with low latency.",
            category: "Core Services"
        },
        {
            id: 31,
            question: "What is the primary purpose of Amazon VPC?",
            options: [
                "A) To store files",
                "B) To provide isolated network environments",
                "C) To monitor applications",
                "D) To manage databases"
            ],
            correct: 1,
            explanation: "Amazon VPC (Virtual Private Cloud) provides isolated network environments where you can launch AWS resources.",
            category: "Networking"
        },
        {
            id: 32,
            question: "Which of the following is an example of Platform as a Service (PaaS)?",
            options: [
                "A) Amazon EC2",
                "B) Amazon S3",
                "C) AWS Elastic Beanstalk",
                "D) Amazon VPC"
            ],
            correct: 2,
            explanation: "AWS Elastic Beanstalk is a PaaS offering that provides a platform for deploying and managing applications.",
            category: "Cloud Concepts"
        },
        {
            id: 33,
            question: "What does 'durability' mean in the context of data storage?",
            options: [
                "A) How fast data can be accessed",
                "B) How long data is retained without loss",
                "C) How much data can be stored",
                "D) How secure the data is"
            ],
            correct: 1,
            explanation: "Durability refers to the long-term protection of data, ensuring it won't be lost over time.",
            category: "Storage"
        },
        {
            id: 34,
            question: "Which AWS service is used for DNS (Domain Name System) services?",
            options: [
                "A) Amazon CloudFront",
                "B) Amazon Route 53",
                "C) Amazon VPC",
                "D) Amazon S3"
            ],
            correct: 1,
            explanation: "Amazon Route 53 is AWS's DNS service that routes users to applications by translating domain names to IP addresses.",
            category: "Networking"
        },
        {
            id: 35,
            question: "What is the main benefit of using managed services?",
            options: [
                "A) Lower costs always",
                "B) Reduced operational overhead",
                "C) Better performance always",
                "D) More control over infrastructure"
            ],
            correct: 1,
            explanation: "Managed services reduce operational overhead by handling maintenance, patching, and management tasks for you.",
            category: "Cloud Benefits"
        },
        {
            id: 36,
            question: "Which of the following best describes 'agility' in cloud computing?",
            options: [
                "A) The speed of processors",
                "B) The ability to quickly provision and de-provision resources",
                "C) The physical flexibility of servers",
                "D) The number of available services"
            ],
            correct: 1,
            explanation: "Agility in cloud computing refers to the ability to quickly provision and de-provision resources as needed.",
            category: "Cloud Benefits"
        },
        {
            id: 37,
            question: "What is the AWS Command Line Interface (CLI)?",
            options: [
                "A) A web-based management console",
                "B) A tool for managing AWS services from the command line",
                "C) A mobile application",
                "D) A programming language"
            ],
            correct: 1,
            explanation: "The AWS CLI is a unified tool that allows you to manage AWS services from the command line interface.",
            category: "Management Tools"
        },
        {
            id: 38,
            question: "Which of the following is a characteristic of cloud-native applications?",
            options: [
                "A) They run only on physical servers",
                "B) They are designed to take advantage of cloud computing frameworks",
                "C) They cannot be scaled",
                "D) They require manual management"
            ],
            correct: 1,
            explanation: "Cloud-native applications are designed specifically to take advantage of cloud computing frameworks and services.",
            category: "Architecture"
        },
        {
            id: 39,
            question: "What does 'loose coupling' mean in system architecture?",
            options: [
                "A) Components are tightly integrated",
                "B) Components can operate independently with minimal dependencies",
                "C) Components share the same database",
                "D) Components must be deployed together"
            ],
            correct: 1,
            explanation: "Loose coupling means components can operate independently with minimal dependencies, improving system resilience and flexibility.",
            category: "Architecture"
        },
        {
            id: 40,
            question: "Which AWS service provides relational database functionality?",
            options: [
                "A) Amazon S3",
                "B) Amazon DynamoDB",
                "C) Amazon RDS",
                "D) Amazon EC2"
            ],
            correct: 2,
            explanation: "Amazon RDS (Relational Database Service) provides managed relational database functionality.",
            category: "Database"
        }
    ],

    // Level 2: Core Services (40 questions)
    level2: [
        {
            id: 41,
            question: "Which EC2 instance type is optimized for compute-intensive applications?",
            options: [
                "A) Memory optimized (R5)",
                "B) Compute optimized (C5)",
                "C) Storage optimized (I3)",
                "D) General purpose (T3)"
            ],
            correct: 1,
            explanation: "Compute optimized instances (C5) are designed for compute-intensive applications that benefit from high-performance processors.",
            category: "EC2"
        },
        {
            id: 42,
            question: "What is the maximum size of an object that can be stored in Amazon S3?",
            options: [
                "A) 5 GB",
                "B) 5 TB",
                "C) 500 GB",
                "D) 50 TB"
            ],
            correct: 1,
            explanation: "The maximum size of an object in Amazon S3 is 5 TB (terabytes).",
            category: "S3"
        },
        {
            id: 43,
            question: "Which S3 storage class is designed for data that is accessed less frequently but requires rapid access when needed?",
            options: [
                "A) S3 Standard",
                "B) S3 Standard-IA",
                "C) S3 Glacier",
                "D) S3 One Zone-IA"
            ],
            correct: 1,
            explanation: "S3 Standard-IA (Infrequent Access) is designed for data that is accessed less frequently but requires rapid access when needed.",
            category: "S3"
        },
        {
            id: 44,
            question: "What is Amazon EBS?",
            options: [
                "A) A content delivery network",
                "B) Block storage for EC2 instances",
                "C) A database service",
                "D) A monitoring service"
            ],
            correct: 1,
            explanation: "Amazon EBS (Elastic Block Store) provides block storage volumes for use with EC2 instances.",
            category: "Storage"
        },
        {
            id: 45,
            question: "Which IAM entity is used to grant permissions to AWS services?",
            options: [
                "A) IAM User",
                "B) IAM Group",
                "C) IAM Role",
                "D) IAM Policy"
            ],
            correct: 2,
            explanation: "IAM Roles are used to grant permissions to AWS services, applications, or users from other AWS accounts.",
            category: "IAM"
        },
        {
            id: 46,
            question: "What is the default limit for the number of VPCs per AWS account per region?",
            options: [
                "A) 5",
                "B) 10",
                "C) 20",
                "D) Unlimited"
            ],
            correct: 0,
            explanation: "The default limit is 5 VPCs per AWS account per region, though this can be increased by contacting AWS support.",
            category: "VPC"
        },
        {
            id: 47,
            question: "Which RDS database engine is developed by AWS?",
            options: [
                "A) MySQL",
                "B) PostgreSQL",
                "C) Aurora",
                "D) Oracle"
            ],
            correct: 2,
            explanation: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud by AWS.",
            category: "RDS"
        },
        {
            id: 48,
            question: "What is the purpose of an Internet Gateway in a VPC?",
            options: [
                "A) To connect to other VPCs",
                "B) To provide internet access to resources in the VPC",
                "C) To monitor network traffic",
                "D) To encrypt data in transit"
            ],
            correct: 1,
            explanation: "An Internet Gateway allows communication between resources in your VPC and the internet.",
            category: "VPC"
        },
        {
            id: 49,
            question: "Which EC2 pricing model offers the lowest cost for workloads with flexible start and end times?",
            options: [
                "A) On-Demand Instances",
                "B) Reserved Instances",
                "C) Spot Instances",
                "D) Dedicated Hosts"
            ],
            correct: 2,
            explanation: "Spot Instances offer the lowest cost by using spare EC2 capacity, ideal for flexible workloads.",
            category: "EC2"
        },
        {
            id: 50,
            question: "What is Amazon CloudFormation?",
            options: [
                "A) A monitoring service",
                "B) A service for provisioning AWS resources using templates",
                "C) A content delivery network",
                "D) A database service"
            ],
            correct: 1,
            explanation: "Amazon CloudFormation is a service that helps you model and set up AWS resources using templates.",
            category: "Management Tools"
        },
        {
            id: 51,
            question: "Which service would you use to send notifications from AWS services?",
            options: [
                "A) Amazon SES",
                "B) Amazon SNS",
                "C) Amazon SQS",
                "D) Amazon CloudWatch"
            ],
            correct: 1,
            explanation: "Amazon SNS (Simple Notification Service) is used to send notifications from AWS services to subscribers.",
            category: "Application Integration"
        },
        {
            id: 52,
            question: "What is the difference between Amazon S3 and Amazon EBS?",
            options: [
                "A) S3 is object storage, EBS is block storage",
                "B) S3 is block storage, EBS is object storage",
                "C) They are the same service",
                "D) S3 is for databases, EBS is for files"
            ],
            correct: 0,
            explanation: "S3 is object storage for files and data, while EBS provides block storage volumes for EC2 instances.",
            category: "Storage"
        },
        {
            id: 53,
            question: "Which AWS service provides a managed NoSQL database?",
            options: [
                "A) Amazon RDS",
                "B) Amazon DynamoDB",
                "C) Amazon Redshift",
                "D) Amazon Aurora"
            ],
            correct: 1,
            explanation: "Amazon DynamoDB is AWS's managed NoSQL database service.",
            category: "Database"
        },
        {
            id: 54,
            question: "What is the purpose of AWS Auto Scaling?",
            options: [
                "A) To automatically backup data",
                "B) To automatically adjust the number of EC2 instances based on demand",
                "C) To automatically update software",
                "D) To automatically encrypt data"
            ],
            correct: 1,
            explanation: "AWS Auto Scaling automatically adjusts the number of EC2 instances based on demand to maintain performance and minimize costs.",
            category: "Auto Scaling"
        },
        {
            id: 55,
            question: "Which service is used for serverless computing in AWS?",
            options: [
                "A) Amazon EC2",
                "B) Amazon ECS",
                "C) AWS Lambda",
                "D) Amazon EKS"
            ],
            correct: 2,
            explanation: "AWS Lambda is AWS's serverless computing service that runs code without provisioning or managing servers.",
            category: "Serverless"
        },
        {
            id: 56,
            question: "What is the maximum execution time for an AWS Lambda function?",
            options: [
                "A) 5 minutes",
                "B) 15 minutes",
                "C) 30 minutes",
                "D) 1 hour"
            ],
            correct: 1,
            explanation: "AWS Lambda functions have a maximum execution time of 15 minutes.",
            category: "Lambda"
        },
        {
            id: 57,
            question: "Which AWS service provides a message queuing service?",
            options: [
                "A) Amazon SNS",
                "B) Amazon SQS",
                "C) Amazon SES",
                "D) Amazon CloudWatch"
            ],
            correct: 1,
            explanation: "Amazon SQS (Simple Queue Service) provides a message queuing service for decoupling applications.",
            category: "Application Integration"
        },
        {
            id: 58,
            question: "What is Amazon ElastiCache used for?",
            options: [
                "A) Content delivery",
                "B) In-memory caching",
                "C) File storage",
                "D) Database backup"
            ],
            correct: 1,
            explanation: "Amazon ElastiCache is an in-memory caching service that improves application performance.",
            category: "Database"
        },
        {
            id: 59,
            question: "Which AWS service is used for container orchestration?",
            options: [
                "A) Amazon EC2",
                "B) Amazon ECS",
                "C) Amazon S3",
                "D) Amazon RDS"
            ],
            correct: 1,
            explanation: "Amazon ECS (Elastic Container Service) is used for container orchestration and management.",
            category: "Containers"
        },
        {
            id: 60,
            question: "What is the purpose of AWS CloudTrail?",
            options: [
                "A) To monitor application performance",
                "B) To log API calls and user activity",
                "C) To deliver content globally",
                "D) To manage DNS records"
            ],
            correct: 1,
            explanation: "AWS CloudTrail logs API calls and user activity for auditing and compliance purposes.",
            category: "Security"
        },
        {
            id: 61,
            question: "Which service would you use to create a data warehouse in AWS?",
            options: [
                "A) Amazon RDS",
                "B) Amazon DynamoDB",
                "C) Amazon Redshift",
                "D) Amazon S3"
            ],
            correct: 2,
            explanation: "Amazon Redshift is AWS's data warehouse service for analytics and business intelligence.",
            category: "Analytics"
        },
        {
            id: 62,
            question: "What is the difference between a security group and a NACL?",
            options: [
                "A) Security groups are stateful, NACLs are stateless",
                "B) Security groups are stateless, NACLs are stateful",
                "C) They are the same thing",
                "D) Security groups are for databases, NACLs are for EC2"
            ],
            correct: 0,
            explanation: "Security groups are stateful (return traffic is automatically allowed), while NACLs are stateless (return traffic must be explicitly allowed).",
            category: "Security"
        },
        {
            id: 63,
            question: "Which AWS service provides DNS failover capabilities?",
            options: [
                "A) Amazon CloudFront",
                "B) Amazon Route 53",
                "C) Elastic Load Balancer",
                "D) Amazon VPC"
            ],
            correct: 1,
            explanation: "Amazon Route 53 provides DNS failover capabilities to route traffic to healthy endpoints.",
            category: "Networking"
        },
        {
            id: 64,
            question: "What is the purpose of an Elastic Load Balancer?",
            options: [
                "A) To store data",
                "B) To distribute incoming traffic across multiple targets",
                "C) To monitor applications",
                "D) To encrypt data"
            ],
            correct: 1,
            explanation: "An Elastic Load Balancer distributes incoming application traffic across multiple targets for high availability.",
            category: "Networking"
        },
        {
            id: 65,
            question: "Which S3 storage class is most cost-effective for long-term archival?",
            options: [
                "A) S3 Standard",
                "B) S3 Standard-IA",
                "C) S3 Glacier Deep Archive",
                "D) S3 One Zone-IA"
            ],
            correct: 2,
            explanation: "S3 Glacier Deep Archive is the most cost-effective storage class for long-term archival with retrieval times of 12+ hours.",
            category: "S3"
        },
        {
            id: 66,
            question: "What is Amazon Cognito used for?",
            options: [
                "A) Database management",
                "B) User authentication and authorization",
                "C) Content delivery",
                "D) Server monitoring"
            ],
            correct: 1,
            explanation: "Amazon Cognito provides user authentication, authorization, and user management for web and mobile applications.",
            category: "Security"
        },
        {
            id: 67,
            question: "Which AWS service provides a fully managed Kubernetes service?",
            options: [
                "A) Amazon ECS",
                "B) Amazon EKS",
                "C) Amazon EC2",
                "D) AWS Fargate"
            ],
            correct: 1,
            explanation: "Amazon EKS (Elastic Kubernetes Service) provides a fully managed Kubernetes service.",
            category: "Containers"
        },
        {
            id: 68,
            question: "What is the purpose of AWS Systems Manager?",
            options: [
                "A) To manage databases",
                "B) To manage and configure EC2 instances and on-premises servers",
                "C) To deliver content",
                "D) To monitor applications"
            ],
            correct: 1,
            explanation: "AWS Systems Manager helps you manage and configure EC2 instances and on-premises servers at scale.",
            category: "Management Tools"
        },
        {
            id: 69,
            question: "Which service would you use for real-time data streaming?",
            options: [
                "A) Amazon S3",
                "B) Amazon Kinesis",
                "C) Amazon RDS",
                "D) Amazon EC2"
            ],
            correct: 1,
            explanation: "Amazon Kinesis is used for real-time data streaming and analytics.",
            category: "Analytics"
        },
        {
            id: 70,
            question: "What is AWS Direct Connect?",
            options: [
                "A) A VPN service",
                "B) A dedicated network connection from your premises to AWS",
                "C) A content delivery network",
                "D) A database service"
            ],
            correct: 1,
            explanation: "AWS Direct Connect provides a dedicated network connection from your premises to AWS, bypassing the internet.",
            category: "Networking"
        },
        {
            id: 71,
            question: "Which AWS service provides machine learning capabilities without requiring ML expertise?",
            options: [
                "A) Amazon SageMaker",
                "B) Amazon Rekognition",
                "C) Amazon EC2",
                "D) Amazon S3"
            ],
            correct: 1,
            explanation: "Amazon Rekognition provides pre-built machine learning capabilities for image and video analysis without requiring ML expertise.",
            category: "AI/ML"
        },
        {
            id: 72,
            question: "What is the purpose of AWS Config?",
            options: [
                "A) To configure EC2 instances",
                "B) To track resource configurations and compliance",
                "C) To manage user access",
                "D) To monitor performance"
            ],
            correct: 1,
            explanation: "AWS Config tracks resource configurations and evaluates them against compliance rules.",
            category: "Management Tools"
        },
        {
            id: 73,
            question: "Which service provides a managed Apache Spark service?",
            options: [
                "A) Amazon EMR",
                "B) Amazon EC2",
                "C) Amazon RDS",
                "D) Amazon S3"
            ],
            correct: 0,
            explanation: "Amazon EMR (Elastic MapReduce) provides a managed Apache Spark service for big data processing.",
            category: "Analytics"
        },
        {
            id: 74,
            question: "What is Amazon API Gateway used for?",
            options: [
                "A) Database management",
                "B) Creating and managing APIs",
                "C) File storage",
                "D) User authentication"
            ],
            correct: 1,
            explanation: "Amazon API Gateway is used for creating, publishing, maintaining, monitoring, and securing APIs.",
            category: "Application Integration"
        },
        {
            id: 75,
            question: "Which AWS service provides text-to-speech capabilities?",
            options: [
                "A) Amazon Transcribe",
                "B) Amazon Polly",
                "C) Amazon Translate",
                "D) Amazon Comprehend"
            ],
            correct: 1,
            explanation: "Amazon Polly is a text-to-speech service that converts text into lifelike speech.",
            category: "AI/ML"
        },
        {
            id: 76,
            question: "What is the purpose of AWS Secrets Manager?",
            options: [
                "A) To manage user passwords",
                "B) To securely store and manage secrets like database credentials",
                "C) To encrypt files",
                "D) To monitor security events"
            ],
            correct: 1,
            explanation: "AWS Secrets Manager helps you securely store and manage secrets like database credentials, API keys, and passwords.",
            category: "Security"
        },
        {
            id: 77,
            question: "Which service would you use for batch computing workloads?",
            options: [
                "A) AWS Lambda",
                "B) AWS Batch",
                "C) Amazon EC2",
                "D) Amazon ECS"
            ],
            correct: 1,
            explanation: "AWS Batch is designed for running batch computing workloads at any scale.",
            category: "Compute"
        },
        {
            id: 78,
            question: "What is Amazon WorkSpaces?",
            options: [
                "A) A file sharing service",
                "B) A virtual desktop service",
                "C) A database service",
                "D) A monitoring service"
            ],
            correct: 1,
            explanation: "Amazon WorkSpaces is a managed, secure Desktop-as-a-Service (DaaS) solution.",
            category: "End User Computing"
        },
        {
            id: 79,
            question: "Which AWS service provides a managed message broker service?",
            options: [
                "A) Amazon SQS",
                "B) Amazon MQ",
                "C) Amazon SNS",
                "D) Amazon Kinesis"
            ],
            correct: 1,
            explanation: "Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ.",
            category: "Application Integration"
        },
        {
            id: 80,
            question: "What is the purpose of AWS Organizations?",
            options: [
                "A) To organize files in S3",
                "B) To centrally manage multiple AWS accounts",
                "C) To organize EC2 instances",
                "D) To manage user groups"
            ],
            correct: 1,
            explanation: "AWS Organizations helps you centrally manage and govern multiple AWS accounts.",
            category: "Management Tools"
        }
    ],

    // Level 3: Advanced Topics (40 questions)
    level3: [
        {
            id: 81,
            question: "Which AWS service provides infrastructure as code capabilities?",
            options: [
                "A) AWS CloudFormation",
                "B) AWS CodeDeploy",
                "C) AWS CodePipeline",
                "D) AWS CodeCommit"
            ],
            correct: 0,
            explanation: "AWS CloudFormation provides infrastructure as code capabilities, allowing you to define AWS resources using templates.",
            category: "DevOps"
        },
        {
            id: 82,
            question: "What is the difference between AWS CloudFormation and AWS CDK?",
            options: [
                "A) CloudFormation uses JSON/YAML, CDK uses programming languages",
                "B) CloudFormation uses programming languages, CDK uses JSON/YAML",
                "C) They are the same service",
                "D) CloudFormation is for databases, CDK is for compute"
            ],
            correct: 0,
            explanation: "CloudFormation uses JSON/YAML templates, while CDK allows you to define infrastructure using familiar programming languages.",
            category: "DevOps"
        },
        {
            id: 83,
            question: "Which AWS service provides distributed tracing for microservices?",
            options: [
                "A) AWS CloudTrail",
                "B) AWS X-Ray",
                "C) Amazon CloudWatch",
                "D) AWS Config"
            ],
            correct: 1,
            explanation: "AWS X-Ray provides distributed tracing to help analyze and debug distributed applications and microservices.",
            category: "Monitoring"
        },
        {
            id: 84,
            question: "What is AWS Step Functions used for?",
            options: [
                "A) Managing user access",
                "B) Orchestrating serverless workflows",
                "C) Monitoring applications",
                "D) Storing data"
            ],
            correct: 1,
            explanation: "AWS Step Functions is used for orchestrating serverless workflows and coordinating multiple AWS services.",
            category: "Serverless"
        },
        {
            id: 85,
            question: "Which service provides a managed Apache Kafka service?",
            options: [
                "A) Amazon Kinesis",
                "B) Amazon MSK",
                "C) Amazon SQS",
                "D) Amazon SNS"
            ],
            correct: 1,
            explanation: "Amazon MSK (Managed Streaming for Apache Kafka) provides a fully managed Apache Kafka service.",
            category: "Analytics"
        }
    ]
};

// Export for use in game.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionDatabase;
}
