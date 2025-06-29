// Enhanced Question Types for AWS Test Prep Game

const enhancedQuestions = [
    // Image-based question
    {
        id: 201,
        type: 'image',
        question: "Looking at this AWS Console screenshot, which service is being configured?",
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjMyZjNlIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVDMiBEYXNoYm9hcmQ8L3RleHQ+Cjwvc3ZnPgo=",
        options: [
            "A) Amazon S3",
            "B) Amazon EC2",
            "C) Amazon RDS",
            "D) Amazon VPC"
        ],
        correct: 1,
        explanation: "The screenshot shows the EC2 Dashboard, which is used to manage virtual servers in AWS.",
        category: "Visual Recognition"
    },
    
    // Scenario-based question
    {
        id: 202,
        type: 'scenario',
        question: "Based on the scenario below, what is the most cost-effective solution?",
        scenario: "A startup company needs to host a simple website that will have unpredictable traffic patterns. They want to minimize costs and don't want to manage servers. The website is mostly static content with some dynamic features.",
        options: [
            "A) EC2 instances with Auto Scaling",
            "B) S3 static website hosting + Lambda for dynamic content",
            "C) Dedicated servers in a data center",
            "D) ECS with Fargate"
        ],
        correct: 1,
        explanation: "S3 static hosting is very cost-effective for static content, and Lambda provides serverless compute for dynamic features with pay-per-use pricing.",
        category: "Architecture Design"
    },
    
    // Drag and drop architecture question
    {
        id: 203,
        type: 'dragdrop',
        question: "Arrange these components to create a highly available web application architecture:",
        dragItems: [
            "Load Balancer",
            "Web Servers (Multi-AZ)",
            "Database (Multi-AZ)",
            "Auto Scaling Group",
            "CloudFront CDN"
        ],
        correctOrder: [4, 0, 3, 1, 2], // CloudFront -> Load Balancer -> Auto Scaling -> Web Servers -> Database
        options: [
            "A) Internet -> CloudFront -> Load Balancer -> Auto Scaling -> Web Servers -> Database",
            "B) Internet -> Load Balancer -> Web Servers -> Database -> CloudFront",
            "C) Internet -> Web Servers -> Load Balancer -> Database",
            "D) Internet -> Database -> Web Servers -> Load Balancer"
        ],
        correct: 0,
        explanation: "The correct flow is: Users -> CloudFront (CDN) -> Load Balancer -> Auto Scaling Group -> Web Servers (Multi-AZ) -> Database (Multi-AZ). This provides global content delivery, load distribution, automatic scaling, and high availability.",
        category: "Architecture"
    },
    
    // Cost calculation question
    {
        id: 204,
        type: 'calculator',
        question: "Calculate the monthly cost for this EC2 setup:",
        costInputs: [
            {
                key: 'instances',
                label: 'Number of t3.medium instances',
                price: 30.37, // per instance per month
                unit: 'instances'
            },
            {
                key: 'storage',
                label: 'EBS storage (GB)',
                price: 0.10, // per GB per month
                unit: 'GB'
            },
            {
                key: 'dataTransfer',
                label: 'Data transfer out (GB)',
                price: 0.09, // per GB
                unit: 'GB'
            }
        ],
        options: [
            "A) $45.55/month (2 instances, 50GB storage, 10GB transfer)",
            "B) $65.74/month (2 instances, 50GB storage, 10GB transfer)",
            "C) $91.10/month (3 instances, 100GB storage, 20GB transfer)",
            "D) $125.50/month (4 instances, 150GB storage, 30GB transfer)"
        ],
        correct: 1,
        explanation: "Cost breakdown: 2 × $30.37 (instances) + 50 × $0.10 (storage) + 10 × $0.09 (transfer) = $60.74 + $5.00 + $0.90 = $66.64/month (closest to option B).",
        category: "Pricing"
    },
    
    // Debugging question
    {
        id: 205,
        type: 'scenario',
        question: "What's wrong with this AWS setup?",
        scenario: "A company has deployed a web application on EC2 instances in a single Availability Zone. They're experiencing downtime whenever AWS performs maintenance in that AZ. The application uses RDS database in the same AZ. Users complain about slow loading times from different geographic locations.",
        options: [
            "A) Nothing is wrong, this is normal AWS behavior",
            "B) Single AZ deployment lacks high availability, no global content delivery",
            "C) The application should use Lambda instead of EC2",
            "D) RDS is not suitable for web applications"
        ],
        correct: 1,
        explanation: "The main issues are: 1) Single AZ deployment creates a single point of failure, 2) No Multi-AZ setup for high availability, 3) No CloudFront CDN for global content delivery to improve loading times worldwide.",
        category: "Troubleshooting"
    },
    
    // Multi-part scenario question
    {
        id: 206,
        type: 'scenario',
        question: "A company wants to migrate their on-premises application to AWS. What's the best approach?",
        scenario: "Current setup: 3-tier application (web, app, database) running on physical servers. Peak traffic during business hours (9 AM - 6 PM). Database contains sensitive customer data. They want to reduce costs and improve scalability while maintaining security compliance.",
        options: [
            "A) Lift-and-shift to EC2 instances with the same configuration",
            "B) Redesign as serverless with Lambda, API Gateway, and DynamoDB",
            "C) Use Auto Scaling EC2 for web/app tiers, RDS Multi-AZ for database, implement proper security groups and encryption",
            "D) Move everything to containers using ECS"
        ],
        correct: 2,
        explanation: "Option C provides the best balance: Auto Scaling handles variable traffic and reduces costs, RDS Multi-AZ ensures high availability for the database, and proper security groups + encryption address compliance requirements. This approach maintains the familiar 3-tier architecture while adding cloud benefits.",
        category: "Migration Strategy"
    }
];

// Add enhanced questions to the main database
if (typeof questionDatabase !== 'undefined') {
    // Add to level 3 for advanced topics
    questionDatabase.level3 = questionDatabase.level3 || [];
    questionDatabase.level3.push(...enhancedQuestions);
}
