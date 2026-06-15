/* =============================================================================
   AWS Certified Solutions Architect – Professional (SAP-C02)
   Question Bank
   -----------------------------------------------------------------------------
   Exposed as: window.SAP_C02_QUESTION_BANK
   Note: answer option order is randomized and distractors are length-balanced
   to avoid position bias and length cues.
   ============================================================================= */

(function () {
  const QB = {
    "meta": {
      "certification": "AWS Certified Solutions Architect - Professional",
      "examCode": "SAP-C02",
      "version": "1.0.0",
      "generated": "2026-06-15",
      "passThresholdPct": 75,
      "note": "Questions are practice items written to mirror SAP-C02 style and domain weighting. They are not real exam questions.",
      "totalQuestions": 300,
      "questionsPerDomain": [
        {
          "domain": "d1",
          "count": 75
        },
        {
          "domain": "d2",
          "count": 75
        },
        {
          "domain": "d3",
          "count": 75
        },
        {
          "domain": "d4",
          "count": 75
        }
      ]
    },
    "domains": []
  };

  QB.domains = [];

  QB.domains.push({
    id: "d1",
    name: "Domain 1: Design Solutions for Organizational Complexity",
    weightPct: 26,
    topics: ["Architect network connectivity strategies","Prescribe security controls","Design reliable and resilient architecture","Design a multi-account AWS environment","Determine cost optimization and visibility strategies"],
    questions: [
      {
      id: "d1-q001",
      question:
        "A company runs 30 AWS accounts under AWS Organizations. Each account needs outbound internet access and private access to shared services hosted in a central account, with the fewest VPC peering connections to manage. Which design BEST meets these requirements?",
      options: [
        "Place all workloads into one large shared VPC distributed across accounts using VPC sharing alone.",
        "Deploy AWS Transit Gateway in the shared services account and share it via Resource Access Manager, attaching each VPC.",
        "Establish individual Site-to-Site VPN connections from every account into the shared services account VPC.",
        "Create a full mesh of VPC peering connections between every pair of accounts and maintain the routes manually."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Transit Gateway provides hub-and-spoke routing that scales to many VPCs/accounts and is shared across the org with RAM, avoiding the O(n^2) growth of peering.",
      topic: "Architect network connectivity strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q002",
      question:
        "An organization wants every new AWS account it creates to automatically deny the ability to disable AWS CloudTrail, regardless of the account's own IAM policies. Which control enforces this?",
      options: [
        "An IAM managed policy attached to all roles and users across the member accounts.",
        "A resource-based policy configured directly on the CloudTrail trail in each account.",
        "A service control policy attached to the organizational unit that denies the disabling action.",
        "An IAM permissions boundary applied to every role created within each member account."
      ],
      answer: [2],
      type: "single",
      explanation:
        "SCPs set the maximum available permissions for member accounts and can deny actions like cloudtrail:StopLogging org-wide, which IAM policies cannot override.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q003",
      question:
        "A solutions architect must give an application in a private subnet access to Amazon S3 without traversing the public internet and without per-GB data processing charges. Which option is MOST appropriate?",
      options: [
        "An internet gateway paired with a restrictive security group on the instances.",
        "An interface VPC endpoint using AWS PrivateLink, billed hourly and per gigabyte.",
        "A gateway VPC endpoint for Amazon S3 with no hourly or data processing charges.",
        "A NAT gateway deployed in a public subnet with a route from the private subnet."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Gateway endpoints for S3 (and DynamoDB) keep traffic on the AWS network and incur no hourly or data processing charges, unlike interface endpoints or NAT gateways.",
      topic: "Architect network connectivity strategies",
      difficulty: "easy"
      },
      {
      id: "d1-q004",
      question:
        "A company needs a multi-account strategy where security, logging, and networking are centralized, and application teams get isolated accounts. Which combination BEST establishes this baseline? (Select TWO.)",
      options: [
        "Use AWS Control Tower to set up a landing zone with a multi-account structure and guardrails.",
        "Create one large account and separate teams using IAM groups only.",
        "Disable AWS Config to reduce cost across accounts.",
        "Replace all SCPs with network ACLs.",
        "Use AWS Organizations with dedicated OUs for Security and Infrastructure."
      ],
      answer: [0, 4],
      type: "multi",
      explanation:
        "Control Tower automates a landing zone (log archive, audit accounts, guardrails) on top of Organizations; dedicated OUs let policies target Security/Infrastructure functions.",
      topic: "Design a multi-account AWS environment",
      difficulty: "medium"
      },
      {
      id: "d1-q005",
      question:
        "A regulated workload must withstand the loss of an entire Availability Zone with no data loss and near-zero downtime for its relational database. Which configuration meets this?",
      options: [
        "Amazon RDS in a Single-AZ deployment with automated daily backups enabled.",
        "A self-managed database engine on one large EC2 instance with scheduled EBS snapshots.",
        "Amazon RDS Multi-AZ with synchronous standby replication and automatic failover.",
        "An Amazon RDS read replica placed in the same Availability Zone as the primary."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Multi-AZ uses synchronous replication to a standby in another AZ with automatic failover, providing AZ-failure resilience without data loss.",
      topic: "Design reliable and resilient architecture",
      difficulty: "easy"
      },
      {
      id: "d1-q006",
      question:
        "A company wants consolidated visibility into spend across 40 accounts and the ability to attribute cost to teams via tags. Which approach provides this with the LEAST custom development?",
      options: [
        "Build a custom Lambda function that scrapes figures from the billing console pages.",
        "Configure Amazon CloudWatch billing alarms in each account and review them monthly.",
        "Enable Cost Explorer and activate cost allocation tags at the management account.",
        "Export each member account's monthly bill by hand into a consolidated spreadsheet."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Consolidated billing plus Cost Explorer and activated cost allocation tags give cross-account, tag-based cost attribution natively.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "easy"
      },
      {
      id: "d1-q007",
      question:
        "An on-premises data center connects to AWS over a single AWS Direct Connect connection. The company needs to eliminate this single point of failure while keeping consistent low latency. Which design is BEST?",
      options: [
        "Provision a second Direct Connect connection terminating at a different DX location.",
        "Configure a NAT gateway to act as the backup path when Direct Connect is unavailable.",
        "Replace the Direct Connect link entirely with a single Site-to-Site VPN tunnel.",
        "Add a backup Site-to-Site VPN over the internet as failover for the Direct Connect link."
      ],
      answer: [3],
      type: "single",
      explanation:
        "A Site-to-Site VPN backup provides resilient failover at lower cost; a second DX connection is more resilient/expensive but the VPN backup is the common cost-aware HA pattern. (Either redundant DX or DX+VPN is valid; VPN backup is the BEST low-cost resilient answer offered here.)",
      topic: "Architect network connectivity strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q008",
      question:
        "A company must ensure that resources in member accounts can only be created in approved AWS Regions. Which control is the MOST effective and scalable?",
      options: [
        "Network ACLs configured in each VPC to restrict cross-Region network traffic flows.",
        "A Lambda function that periodically deletes any resources found in disallowed Regions.",
        "IAM policies in each account that enumerate every allowed action on a per-Region basis.",
        "An SCP that uses the aws:RequestedRegion condition to deny actions outside approved Regions."
      ],
      answer: [3],
      type: "single",
      explanation:
        "An SCP with aws:RequestedRegion denies API calls in disallowed Regions across all accounts in the OU, preventing creation rather than reacting to it.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q009",
      question:
        "A workload needs to recover from a Regional failure with an RTO of minutes and an RPO of seconds for a DynamoDB-backed application. Which feature BEST supports this?",
      options: [
        "A single-Region DynamoDB table relying solely on point-in-time recovery for restores.",
        "Daily table exports written to Amazon S3 within the same Region as the source.",
        "DynamoDB global tables providing multi-Region active-active replication within seconds.",
        "DynamoDB on-demand backups that are restored by hand into the secondary Region."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Global tables replicate within seconds across Regions, enabling fast multi-Region failover that meets a seconds-level RPO and minutes-level RTO.",
      topic: "Design reliable and resilient architecture",
      difficulty: "medium"
      },
      {
      id: "d1-q010",
      question:
        "A company wants newly provisioned accounts to inherit a standard set of networking, logging, and security configurations automatically. Which service automates account provisioning with these baselines?",
      options: [
        "AWS Systems Manager State Manager associations applied after account creation.",
        "Amazon EventBridge scheduled rules that configure resources on a timer.",
        "AWS Control Tower Account Factory, which provisions accounts with baselines.",
        "AWS Service Catalog products provisioned manually for each new account."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Account Factory in Control Tower provisions accounts with predefined network and baseline configurations and applies guardrails automatically.",
      topic: "Design a multi-account AWS environment",
      difficulty: "easy"
      },
      {
      id: "d1-q011",
      question:
        "A finance team wants to reduce the cost of a steady-state EC2 fleet running 24/7 for at least the next three years, with maximum savings and flexibility across instance families. Which purchasing option is BEST?",
      options: [
        "On-Demand Instances billed per second with no upfront commitment of any kind.",
        "Standard Reserved Instances on a one-year term locked to a single instance family.",
        "Compute Savings Plans on a three-year term for flexible, deep committed discounts.",
        "Spot Instances for the entire fleet, accepting interruption at any moment."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Compute Savings Plans give the deepest commitment-based discount with flexibility across families, sizes, and Regions for steady workloads.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q012",
      question:
        "An architect needs to centrally inspect all east-west and north-south traffic between many VPCs and the internet with a managed firewall. Which design fits BEST?",
      options: [
        "Deploy AWS Network Firewall in an inspection VPC attached to the Transit Gateway.",
        "Use a NAT gateway as the traffic inspection and filtering point for all VPCs.",
        "Apply security groups on every individual instance and rely on those rules alone.",
        "Enable VPC Flow Logs and attempt to block unwanted traffic using Athena queries."
      ],
      answer: [0],
      type: "single",
      explanation:
        "A centralized inspection VPC with Network Firewall behind Transit Gateway lets all inter-VPC and egress traffic be inspected by a managed stateful firewall.",
      topic: "Architect network connectivity strategies",
      difficulty: "hard"
      },
      {
      id: "d1-q013",
      question:
        "A company requires that all member-account IAM roles cannot grant themselves administrative permissions beyond a defined ceiling, even when account admins create new roles. Which mechanism enforces the ceiling on those roles?",
      options: [
        "A resource-based policy on the account's KMS keys limiting role permissions.",
        "An Amazon S3 bucket policy restricting which principals may assume the roles.",
        "Amazon CloudWatch alarms that trigger whenever IAM role events are recorded.",
        "Permissions boundaries attached to the roles at the time they are created."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Permissions boundaries cap the maximum permissions an identity can have; combined with SCPs, they limit privilege escalation within accounts.",
      topic: "Prescribe security controls",
      difficulty: "hard"
      },
      {
      id: "d1-q014",
      question:
        "An application's static assets are served globally and the company wants lower latency and reduced origin load while keeping a single S3 origin. Which addition BEST achieves this?",
      options: [
        "Increase the instance size of the web tier serving requests to the origin.",
        "Put Amazon CloudFront in front of the S3 origin with appropriate cache behaviors.",
        "Replicate the source bucket into every AWS Region where users are located.",
        "Enable Amazon S3 Transfer Acceleration on the bucket serving the assets."
      ],
      answer: [1],
      type: "single",
      explanation:
        "CloudFront caches content at edge locations, lowering latency for global users and offloading repeated requests from the S3 origin.",
      topic: "Design reliable and resilient architecture",
      difficulty: "easy"
      },
      {
      id: "d1-q015",
      question:
        "A company centralizes its VPC flow logs, CloudTrail logs, and Config data into a dedicated log archive account that application teams cannot modify. Which design principle does this BEST reflect?",
      options: [
        "Eliminating the need for service control policies across the organization.",
        "Reducing storage cost by deleting the collected logs on a frequent schedule.",
        "Increasing the blast radius deliberately so that recovery completes faster.",
        "Separation of duties through a centralized, immutable logging account."
      ],
      answer: [3],
      type: "single",
      explanation:
        "A dedicated log archive account that workload teams cannot alter enforces separation of duties and protects audit data integrity.",
      topic: "Design a multi-account AWS environment",
      difficulty: "medium"
      },
      {
      id: "d1-q016",
      question:
        "A company wants automated, account-wide detection of misconfigured resources (e.g., public S3 buckets) with continuous evaluation against rules. Which service is MOST appropriate?",
      options: [
        "AWS Trusted Advisor on the free support tier with its limited check set.",
        "Amazon Macie applied across all resource types regardless of data content.",
        "AWS Config with managed and custom rules, aggregated across the accounts.",
        "Amazon Inspector restricted to scanning Amazon EC2 instances for this purpose."
      ],
      answer: [2],
      type: "single",
      explanation:
        "AWS Config continuously evaluates resource configurations against rules and can aggregate findings across an organization.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q017",
      question:
        "An architect wants to forecast and cap spend, receiving alerts when actual or forecasted cost exceeds a threshold per team. Which tool is designed for this?",
      options: [
        "Amazon CloudWatch Logs Insights queries run against billing log data.",
        "AWS Cost Explorer historical reports reviewed at the end of each month.",
        "AWS Budgets with configured budget actions and threshold-based alerts.",
        "The AWS Pricing Calculator used to model expected spend before launch."
      ],
      answer: [2],
      type: "single",
      explanation:
        "AWS Budgets supports cost/usage thresholds, forecast-based alerts, and automated actions when limits are approached or exceeded.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "easy"
      },
      {
      id: "d1-q018",
      question:
        "A multi-Region active-passive web application must fail over automatically to a secondary Region when the primary's health checks fail. Which DNS configuration achieves this?",
      options: [
        "Amazon Route 53 simple routing pointing only at the primary Region endpoint.",
        "Amazon Route 53 weighted routing split evenly between the two Regions.",
        "Amazon Route 53 failover routing with health checks on the primary endpoint.",
        "A static IP address hardcoded into every client that connects to the service."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Route 53 failover routing with health checks directs traffic to the secondary Region automatically when the primary becomes unhealthy.",
      topic: "Design reliable and resilient architecture",
      difficulty: "medium"
      },
      {
      id: "d1-q019",
      question:
        "Two VPCs in different accounts must communicate, but their CIDR ranges overlap. Which approach enables connectivity despite the overlap?",
      options: [
        "Enable IPv6 addressing on both VPCs and disregard the overlapping IPv4 ranges.",
        "Use AWS PrivateLink to expose specific services, avoiding the overlapping CIDRs.",
        "Attach both VPCs to one Transit Gateway route table without other changes.",
        "Standard VPC peering established directly between the two overlapping VPCs."
      ],
      answer: [1],
      type: "single",
      explanation:
        "PrivateLink exposes specific services through endpoints without requiring non-overlapping routable CIDRs, solving the overlap problem.",
      topic: "Architect network connectivity strategies",
      difficulty: "hard"
      },
      {
      id: "d1-q020",
      question:
        "A company wants to share a centrally managed subnet with multiple accounts so workloads run in the same VPC while IAM and billing remain per-account. Which feature enables this?",
      options: [
        "VPC sharing through AWS Resource Access Manager for shared subnets.",
        "VPC peering connections created between the participant accounts.",
        "AWS PrivateLink endpoints exposing each workload individually.",
        "An AWS Transit Gateway attachment used in place of shared subnets."
      ],
      answer: [0],
      type: "single",
      explanation:
        "VPC sharing through RAM lets a central owner share subnets so participant accounts deploy resources into the shared VPC while keeping separate IAM and billing.",
      topic: "Design a multi-account AWS environment",
      difficulty: "medium"
      },
      {
      id: "d1-q021",
      question:
        "An architect needs to detect threats such as compromised credentials and crypto-mining across all accounts using machine learning on logs, with minimal setup. Which service fits?",
      options: [
        "Amazon GuardDuty enabled across the entire organization centrally.",
        "AWS WAF deployed on every Application Load Balancer in each account.",
        "Amazon Detective used on its own without other detection sources.",
        "AWS Shield Standard relied upon for threat detection across accounts."
      ],
      answer: [0],
      type: "single",
      explanation:
        "GuardDuty analyzes CloudTrail, VPC Flow Logs, and DNS logs to surface threats and can be delegated and enabled across an organization.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q022",
      question:
        "A batch processing job is fault-tolerant and can be interrupted. The company wants the lowest possible compute cost. Which option is BEST?",
      options: [
        "Amazon EC2 Spot Instances combined with checkpointing of job progress.",
        "On-Demand Instances that run uninterrupted regardless of capacity pricing.",
        "Dedicated Hosts reserved for the batch workload throughout its runtime.",
        "One-year Standard Reserved Instances committed to a single instance type."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Spot Instances offer the deepest discount for interruption-tolerant workloads; checkpointing handles reclamation gracefully.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "easy"
      },
      {
      id: "d1-q023",
      question:
        "A company must guarantee that data in a critical S3 bucket cannot be deleted or overwritten for a fixed retention period, even by administrators. Which feature enforces this?",
      options: [
        "Amazon S3 Versioning enabled on the bucket without any retention controls.",
        "A service control policy denying the s3:DeleteObject action on the bucket.",
        "Amazon S3 Object Lock in compliance mode with a defined retention period.",
        "A lifecycle policy transitioning the critical objects into Amazon S3 Glacier."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Object Lock in compliance mode enforces WORM retention that not even the root user can shorten or override during the retention window.",
      topic: "Prescribe security controls",
      difficulty: "hard"
      },
      {
      id: "d1-q024",
      question:
        "An architect designs a system spanning three AZs with stateless web servers behind an Application Load Balancer and an Auto Scaling group. Which statement BEST describes the resilience benefit?",
      options: [
        "It eliminates the requirement to take regular backups of the database tier.",
        "It lets the application tolerate the loss of one AZ while scaling to hold capacity.",
        "It removes the need for any monitoring of the application's health.",
        "It guarantees that no additional cost is incurred during a failover event."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Spreading stateless instances across AZs behind an ALB with Auto Scaling lets the app survive an AZ loss and replace lost capacity automatically.",
      topic: "Design reliable and resilient architecture",
      difficulty: "easy"
      },
      {
      id: "d1-q025",
      question:
        "A company wants a single place to view rightsizing recommendations, idle resources, and Savings Plans opportunities across the organization. Which combination is BEST? (Select TWO.)",
      options: [
        "Amazon Inspector findings.",
        "AWS Compute Optimizer for rightsizing recommendations.",
        "AWS Cost Explorer Savings Plans and rightsizing recommendations.",
        "AWS CloudFormation drift detection.",
        "Amazon QuickSight as the only source of recommendations."
      ],
      answer: [1, 2],
      type: "multi",
      explanation:
        "Compute Optimizer provides rightsizing guidance, and Cost Explorer surfaces Savings Plans and rightsizing/idle recommendations; together they cover cost optimization visibility.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q026",
      question:
        "SCENARIO: A multinational has 80 AWS accounts. The security team mandates that no member account can leave AWS Organizations and that root user actions are restricted. A central team owns networking. Which set of controls BEST enforces these mandates org-wide? (Select TWO.)",
      options: [
        "An SCP that denies sensitive actions when the principal is the root user.",
        "A Lambda that re-invites accounts that leave.",
        "An IAM policy in each account denying root login.",
        "A NACL blocking the AWS Organizations API.",
        "An SCP that denies organizations:LeaveOrganization across all OUs."
      ],
      answer: [0, 4],
      type: "multi",
      explanation:
        "SCPs can deny organizations:LeaveOrganization and can condition denies on aws:PrincipalArn matching the root user, enforcing both mandates centrally. IAM policies cannot restrict the root user.",
      topic: "Design a multi-account AWS environment",
      difficulty: "hard"
      },
      {
      id: "d1-q027",
      question:
        "SCENARIO: A company connects 12 VPCs across 3 Regions and its on-premises data center. They need transitive routing between all VPCs and on-premises with centralized route management spanning Regions. Which design is BEST?",
      options: [
        "A single shared VPC made available to all accounts through Resource Access Manager.",
        "PrivateLink endpoints created between every individual pair of VPCs in scope.",
        "A VPC peering mesh combined with a separate VPN connection for each VPC.",
        "A Transit Gateway in each Region, peered together, with a Direct Connect gateway."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Per-Region Transit Gateways with inter-Region TGW peering provide transitive multi-Region routing, and a Direct Connect gateway connects on-premises to multiple TGWs.",
      topic: "Architect network connectivity strategies",
      difficulty: "hard"
      },
      {
      id: "d1-q028",
      question:
        "A company wants all data stored in Amazon EBS, RDS, and S3 to be encrypted at rest using keys whose usage is auditable and whose rotation is automatic. Which approach is BEST?",
      options: [
        "Disable encryption at rest entirely and depend on network controls for safety.",
        "Use AWS KMS customer managed keys with automatic rotation and usage logging.",
        "Encrypt the data inside the application using a static, manually held password.",
        "Use only AWS owned keys and forgo any logging of how keys are used."
      ],
      answer: [1],
      type: "single",
      explanation:
        "KMS customer managed keys support automatic annual rotation and log every use in CloudTrail, giving auditable, rotating encryption across services.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q029",
      question:
        "SCENARIO: A retailer's checkout service must remain available even if two of three AZs fail simultaneously during a regional event. The team accepts higher cost. Which architecture BEST meets this requirement?",
      options: [
        "Deploy across all three AZs and size each AZ to carry one-third of peak load.",
        "Run the workload in a single Availability Zone using one very large instance.",
        "Deploy across all three AZs and size capacity so one AZ can serve full peak load.",
        "Use only two Availability Zones with no additional capacity headroom reserved."
      ],
      answer: [2],
      type: "single",
      explanation:
        "To survive the loss of two of three AZs, the surviving AZ must carry full peak load, so each AZ is sized for 100% (static stability).",
      topic: "Design reliable and resilient architecture",
      difficulty: "hard"
      },
      {
      id: "d1-q030",
      question:
        "A company wants chargeback reports allocating shared costs (data transfer, support) proportionally to business units identified by tags. Which feature set BEST enables this?",
      options: [
        "Amazon CloudWatch metrics collected per account and reviewed for spend.",
        "Cost Categories and cost allocation tags within Cost Explorer and the CUR.",
        "AWS Config aggregators that summarize configuration data across accounts.",
        "Amazon S3 server access logs analyzed to attribute shared service costs."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Cost Categories group accounts/tags into business dimensions, and the Cost and Usage Report with allocation tags supports detailed chargeback.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q031",
      question:
        "SCENARIO: An enterprise must allow a third-party SaaS vendor to access a specific internal microservice in the company's VPC without exposing it to the internet and without sharing network CIDRs. Which solution is BEST?",
      options: [
        "Share the company's VPC with the vendor account using Resource Access Manager.",
        "Create a VPC peering connection between the company VPC and the vendor's VPC.",
        "Open a security group rule permitting inbound access from the vendor's public IP.",
        "Publish the service through AWS PrivateLink as an endpoint service the vendor consumes."
      ],
      answer: [3],
      type: "single",
      explanation:
        "PrivateLink endpoint services expose a single service privately to consumers without peering, CIDR coordination, or internet exposure.",
      topic: "Architect network connectivity strategies",
      difficulty: "hard"
      },
      {
      id: "d1-q032",
      question:
        "A company requires that IAM access across all accounts be granted through centrally managed permission sets mapped to its corporate identity provider. Which service is BEST?",
      options: [
        "An individual IAM user created for every employee in every member account.",
        "Amazon Cognito user pools providing the workforce with AWS console access.",
        "AWS IAM Identity Center with permission sets and external identity provider federation.",
        "Long-lived access keys distributed to employees by email for console access."
      ],
      answer: [2],
      type: "single",
      explanation:
        "IAM Identity Center centralizes workforce access with permission sets and federates to a corporate IdP, replacing per-account IAM users.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q033",
      question:
        "SCENARIO: A company's nightly data pipeline writes to S3, then triggers downstream processing. Occasionally an entire Region is degraded and the pipeline must continue elsewhere with no manual steps. Which design BEST provides regional resilience for the storage layer?",
      options: [
        "Enable Amazon S3 Versioning on the bucket and rely on it for regional resilience.",
        "Take weekly snapshots of the source bucket and store them in the same Region.",
        "Enable S3 Cross-Region Replication and run the pipeline idempotently in both Regions.",
        "Keep data in one Region and restore it manually after a regional failure occurs."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Cross-Region Replication keeps a second Region's bucket current; running idempotent pipelines in both Regions allows continued processing during a regional event.",
      topic: "Design reliable and resilient architecture",
      difficulty: "hard"
      },
      {
      id: "d1-q034",
      question:
        "A company wants to prevent accidental public exposure of any S3 bucket across all accounts, enforced regardless of individual bucket policies. Which combination is BEST? (Select TWO.)",
      options: [
        "Enable S3 Block Public Access at the account level in every account.",
        "Disable CloudTrail to reduce noise.",
        "Enforce account-level Block Public Access via an SCP/guardrail so it cannot be disabled.",
        "Rely on each team to set bucket ACLs.",
        "Make all buckets public and use WAF."
      ],
      answer: [0, 2],
      type: "multi",
      explanation:
        "Account-level Block Public Access prevents public buckets, and enforcing it through a guardrail/SCP stops teams from turning it off.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q035",
      question:
        "SCENARIO: A company runs a large fleet with steady baseline load and unpredictable spikes. They want to minimize cost for the baseline while handling spikes elastically. Which purchasing mix is BEST?",
      options: [
        "Purchase Reserved Instances sized to the unpredictable peak rather than the baseline.",
        "Cover the baseline with Savings Plans or RIs and absorb spikes with On-Demand and Spot.",
        "Run the entire fleet on On-Demand Instances regardless of the steady baseline load.",
        "Run the entire fleet on Spot Instances and accept interruptions to the baseline."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Committing to the predictable baseline with Savings Plans/RIs and absorbing spikes with On-Demand/Spot optimizes cost without sacrificing elasticity.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q036",
      question:
        "A central networking team must share subnets with application accounts while retaining ownership of route tables, NAT gateways, and network ACLs. Which model is BEST?",
      options: [
        "Each application account builds its own VPC and peers it with the others.",
        "A Transit Gateway attachment used instead of any shared subnets at all.",
        "A single IAM role shared across the accounts to manage the networking.",
        "VPC sharing via RAM, where the owner keeps networking control and others deploy."
      ],
      answer: [3],
      type: "single",
      explanation:
        "With VPC sharing, the owner account retains control of routing, NAT, and ACLs while participants deploy into shared subnets.",
      topic: "Design a multi-account AWS environment",
      difficulty: "medium"
      },
      {
      id: "d1-q037",
      question:
        "SCENARIO: A company suffered a breach where a leaked long-lived access key was used from an unusual location. Leadership wants to eliminate long-lived credentials for workloads and detect anomalous API use going forward. Which two changes BEST address this? (Select TWO.)",
      options: [
        "Replace static keys with IAM roles (instance profiles, IRSA, or role assumption).",
        "Enable Amazon GuardDuty to detect anomalous API activity.",
        "Store keys in a shared S3 bucket with versioning.",
        "Email keys to a smaller distribution list.",
        "Increase the key length."
      ],
      answer: [0, 1],
      type: "multi",
      explanation:
        "IAM roles remove long-lived keys for workloads, and GuardDuty surfaces anomalous credential use such as access from unusual locations.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q038",
      question:
        "A company needs DNS resolution between on-premises and multiple VPCs, including conditional forwarding to on-premises domains. Which service is BEST?",
      options: [
        "An internet gateway attached to the VPC to enable name resolution outbound.",
        "Manual edits to the /etc/hosts file on every instance that needs resolution.",
        "Amazon Route 53 Resolver inbound and outbound endpoints with forwarding rules.",
        "A single Amazon Route 53 public hosted zone serving the required records."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Route 53 Resolver endpoints enable bidirectional DNS resolution and conditional forwarding between on-premises and VPCs.",
      topic: "Architect network connectivity strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q039",
      question:
        "SCENARIO: A company's auditors require proof that no one can tamper with audit logs, even administrators, for seven years. Which design BEST satisfies this?",
      options: [
        "Email a monthly summary of the log activity to the auditors for their records.",
        "Keep the logs in each account's default bucket with standard access controls.",
        "Store the logs on an EC2 instance secured with tightly restricted SSH access.",
        "Deliver CloudTrail logs to a dedicated log archive account with Object Lock retention."
      ],
      answer: [3],
      type: "single",
      explanation:
        "A separate log archive account with S3 Object Lock in compliance mode enforces immutable WORM retention that even administrators cannot alter.",
      topic: "Design a multi-account AWS environment",
      difficulty: "hard"
      },
      {
      id: "d1-q040",
      question:
        "A company wants to detect, in near real time, when a resource is created without required tags and notify the owning team. Which combination is BEST? (Select TWO.)",
      options: [
        "A weekly manual spreadsheet review.",
        "Amazon EventBridge to route noncompliance notifications to the team.",
        "Disabling tagging requirements.",
        "An AWS Config rule that checks for required tags.",
        "An S3 lifecycle rule."
      ],
      answer: [1, 3],
      type: "multi",
      explanation:
        "A Config rule flags untagged resources and EventBridge can route the compliance change event to notify the owning team quickly.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q041",
      question:
        "SCENARIO: An application tier in private subnets needs outbound internet for OS patching but must never accept inbound connections from the internet. The team wants high availability for the egress path. Which design is BEST?",
      options: [
        "Place the application instances in public subnets and assign them public IPs.",
        "Use a single NAT gateway in one AZ shared by all of the private subnets.",
        "Deploy a NAT gateway per AZ and route each private subnet to its same-AZ gateway.",
        "Attach an internet gateway route directly to each of the private subnets."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Per-AZ NAT gateways provide highly available outbound-only internet access; private subnets route to the NAT gateway in their own AZ to avoid cross-AZ dependency.",
      topic: "Architect network connectivity strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q042",
      question:
        "A company wants every account to automatically enable GuardDuty, Security Hub, and Config when created, managed from a single delegated administrator account. Which approach is BEST?",
      options: [
        "Use AWS Organizations delegated administration to auto-enable the services.",
        "Rely on AWS Trusted Advisor to surface the gaps in each member account.",
        "Manually enable each security service in every account after it is created.",
        "Enable the services only in the management account for the whole organization."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Delegated administration with auto-enable settings turns on GuardDuty, Security Hub, and Config automatically for new member accounts.",
      topic: "Design a multi-account AWS environment",
      difficulty: "medium"
      },
      {
      id: "d1-q043",
      question:
        "SCENARIO: A company's web application must mitigate large-scale DDoS attacks at the network and application layers with cost protection for scaling during attacks. Which combination is BEST? (Select TWO.)",
      options: [
        "Subscribe to AWS Shield Advanced for enhanced DDoS protection and cost protection.",
        "Disable CloudFront.",
        "Use security groups alone.",
        "Rely on a single NAT gateway.",
        "Use AWS WAF with rate-based rules at the application layer."
      ],
      answer: [0, 4],
      type: "multi",
      explanation:
        "Shield Advanced provides layer 3/4 DDoS protection plus scaling cost protection, while WAF rate-based rules handle layer 7 floods.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q044",
      question:
        "A company wants to enforce that production OUs cannot launch resources using unapproved AMIs. Which control is MOST appropriate?",
      options: [
        "A network ACL configured to block the Amazon EC2 service endpoints.",
        "An Amazon CloudWatch dashboard that lists the AMIs currently in use.",
        "A manual review of launched instances performed after they are created.",
        "An SCP plus a Config rule restricting approved AMI IDs and denying other launches."
      ],
      answer: [3],
      type: "single",
      explanation:
        "SCPs/permission conditions plus a Config rule for approved AMIs prevent and detect launches from unapproved images.",
      topic: "Prescribe security controls",
      difficulty: "hard"
      },
      {
      id: "d1-q045",
      question:
        "SCENARIO: A company runs a critical workload and wants to validate resilience by injecting controlled failures (AZ loss, instance termination) safely. Which service supports these experiments?",
      options: [
        "Amazon Inspector for assessing software vulnerabilities on the instances.",
        "Amazon Macie for discovering sensitive data within the workload's storage.",
        "AWS Budgets for tracking the cost impact of the resilience testing work.",
        "AWS Fault Injection Service for running controlled resilience experiments."
      ],
      answer: [3],
      type: "single",
      explanation:
        "AWS FIS runs controlled chaos engineering experiments (e.g., terminating instances, simulating AZ issues) to validate resilience.",
      topic: "Design reliable and resilient architecture",
      difficulty: "medium"
      },
      {
      id: "d1-q046",
      question:
        "A company wants to reduce cross-AZ data transfer costs for a chatty microservices application. Which change helps MOST without harming availability?",
      options: [
        "Disable the load balancer so that traffic no longer crosses Availability Zones.",
        "Use topology-aware routing so callers prefer same-AZ targets, keeping multi-AZ failover.",
        "Increase the size of the instances to reduce the number of cross-AZ calls made.",
        "Collapse all of the microservices into a single Availability Zone to cut transfer."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Preferring same-AZ targets (e.g., via zonal routing/affinity) cuts cross-AZ transfer while retaining multi-AZ deployment for resilience.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "hard"
      },
      {
      id: "d1-q047",
      question:
        "SCENARIO: A company must let auditors in a separate AWS account read specific CloudWatch metrics and logs without granting broad access. Which approach is BEST?",
      options: [
        "Share the production account's root credentials with the auditors directly.",
        "Make the relevant logs and metrics publicly readable so auditors can view them.",
        "Create a cross-account IAM role with least-privilege read access for auditors to assume.",
        "Create IAM users for the auditors in the production account with admin rights."
      ],
      answer: [2],
      type: "single",
      explanation:
        "A cross-account role with scoped read permissions lets auditors assume access to only the needed observability data.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q048",
      question:
        "A company needs to connect a new VPC to an existing Transit Gateway in another account and control which route tables it can reach. Which steps are required? (Select TWO.)",
      options: [
        "Create a full mesh of VPC peering.",
        "Share the Transit Gateway with the account via AWS RAM.",
        "Open an internet gateway route.",
        "Disable route propagation entirely.",
        "Create a TGW attachment from the new VPC and associate it with the appropriate TGW route table."
      ],
      answer: [1, 4],
      type: "multi",
      explanation:
        "Sharing the TGW via RAM and creating/associating the attachment to the correct route table controls reachability for the new VPC.",
      topic: "Architect network connectivity strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q049",
      question:
        "SCENARIO: A company's backups must be protected from a compromised administrator who could delete them in the production account. Which design BEST protects backups?",
      options: [
        "Keep the backups in the same account and rely on versioning for protection.",
        "Store the backups on the same EBS volume that holds the production data.",
        "Copy backups to a separate, locked-down account using AWS Backup with vault lock.",
        "Email the backup files to administrators so a copy exists outside the account."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Cross-account AWS Backup copies into a separate account with Backup Vault Lock isolate backups from a compromised production administrator.",
      topic: "Design a multi-account AWS environment",
      difficulty: "hard"
      },
      {
      id: "d1-q050",
      question:
        "A company wants a single dashboard of organization-wide cost anomalies with automated alerts when spend deviates from expected patterns. Which service is BEST?",
      options: [
        "Amazon GuardDuty, which analyzes logs for security threats across accounts.",
        "Amazon CloudWatch Synthetics, which runs canaries against application endpoints.",
        "AWS Cost Anomaly Detection, which uses machine learning to flag unusual spend.",
        "AWS Config, which evaluates resource configurations against defined rules."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Cost Anomaly Detection uses machine learning to flag unexpected spend and sends alerts, providing proactive cost visibility.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "easy"
      },
      {
      id: "d1-q051",
      question:
        "SCENARIO: A company runs workloads in two Regions and wants active-active traffic distribution based on lowest latency, automatically removing unhealthy endpoints. Which Route 53 configuration is BEST?",
      options: [
        "Simple routing that always directs traffic to one designated Region only.",
        "Weighted routing fixed at an even split with no health checks configured.",
        "Latency-based routing combined with health checks on each Regional endpoint.",
        "Failover routing using a single record pointing at the primary Region."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Latency-based routing sends users to the lowest-latency Region, and health checks remove unhealthy endpoints automatically for active-active operation.",
      topic: "Design reliable and resilient architecture",
      difficulty: "medium"
      },
      {
      id: "d1-q052",
      question:
        "A company wants to centrally manage firewall rules (security group-like) and audit them across all accounts and VPCs. Which service is BEST?",
      options: [
        "AWS Firewall Manager for centrally configuring and auditing the policies.",
        "Amazon Macie for classifying sensitive data stored across the accounts.",
        "AWS Config on its own for recording the configuration of each resource.",
        "Amazon Inspector for scanning instances for vulnerabilities and exposure."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Firewall Manager centrally configures and audits WAF, Shield, security groups, and Network Firewall policies across accounts.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q053",
      question:
        "SCENARIO: A company's developers frequently leave idle dev/test EC2 instances running overnight and on weekends, inflating cost. Which automated approach reduces this waste?",
      options: [
        "Delete and recreate the VPC each night to ensure nothing is left running.",
        "Use AWS Instance Scheduler to stop non-production instances outside business hours.",
        "Purchase Reserved Instances for the development and test instances to cut cost.",
        "Increase the size of the instances so fewer of them are needed overnight."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Scheduling stop/start of non-production instances during off-hours directly cuts idle compute cost.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "easy"
      },
      {
      id: "d1-q054",
      question:
        "A company requires that data leaving the VPC to AWS services never traverses the public internet for compliance. Which approach BEST achieves this broadly?",
      options: [
        "Use VPC endpoints, both gateway and interface, for the AWS services in use.",
        "Whitelist the published AWS public IP ranges in the instance security groups.",
        "Route all service traffic through a public NAT gateway in a public subnet.",
        "Disable DNS resolution within the VPC to keep traffic on the private network."
      ],
      answer: [0],
      type: "single",
      explanation:
        "VPC endpoints keep traffic to supported AWS services on the AWS private network, avoiding the public internet.",
      topic: "Architect network connectivity strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q055",
      question:
        "SCENARIO: A company is designing guardrails so that developers can self-serve infrastructure but cannot create internet-facing resources in restricted OUs. Which control approach is BEST?",
      options: [
        "Configure an Amazon CloudWatch alarm on billing to catch unexpected usage.",
        "Trust developers to follow an internal wiki policy describing what is allowed.",
        "Preventive SCP guardrails denying internet-facing resources, plus detective Config rules.",
        "Perform a manual review of each deployment only after resources are created."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Preventive SCPs block the risky actions while detective Config rules catch drift, balancing self-service with guardrails.",
      topic: "Design a multi-account AWS environment",
      difficulty: "hard"
      },
      {
      id: "d1-q056",
      question:
        "A company needs to grant temporary, time-bound elevated access for break-glass scenarios with full audit. Which approach is BEST?",
      options: [
        "Create a permanent admin IAM user that is reserved for break-glass access.",
        "Use IAM Identity Center permission sets with session limits and CloudTrail logging.",
        "Disable MFA on the emergency account so that access is not slowed down.",
        "Store the root credentials in a shared vault for use during emergencies."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Time-bound role/permission-set assumption with logging provides auditable, temporary elevated access for emergencies.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q057",
      question:
        "SCENARIO: A company's multi-tier app must continue serving reads if the primary database Region fails, with an RPO of seconds for relational data. Which design is BEST?",
      options: [
        "A single-Region Aurora cluster relying on periodic snapshots for recovery.",
        "Amazon DynamoDB fronted by a relational wrapper to mimic the schema.",
        "Amazon RDS in a Single-AZ deployment restored by hand after a failure.",
        "Amazon Aurora Global Database with a secondary Region for fast failover."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Aurora Global Database replicates with typical sub-second lag and supports fast cross-Region failover for relational workloads.",
      topic: "Design reliable and resilient architecture",
      difficulty: "hard"
      },
      {
      id: "d1-q058",
      question:
        "A company wants to ensure encryption keys for one business unit cannot be used by another, even within the same account structure. Which approach is BEST?",
      options: [
        "Use separate KMS keys per business unit with policies scoped to each unit.",
        "Use one shared KMS key for every business unit across the environment.",
        "Disable KMS encryption and store the data in plaintext to avoid sharing.",
        "Rotate a single shared key more frequently to limit cross-unit exposure."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Separate KMS keys with scoped key policies/grants enforce cryptographic isolation between business units.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q059",
      question:
        "SCENARIO: A company wants new accounts placed into the correct OU automatically based on workload type, inheriting the right guardrails without manual steps. Which capability supports this?",
      options: [
        "Manually moving each new account into the correct OU after it is created.",
        "Control Tower Account Factory with account customization and OU assignment.",
        "Maintaining a spreadsheet that records the account-to-OU mappings by hand.",
        "Disabling organizational units entirely so guardrails apply uniformly."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Account Factory (and Account Factory for Terraform) can place accounts into the right OU with customizations and guardrails automatically.",
      topic: "Design a multi-account AWS environment",
      difficulty: "medium"
      },
      {
      id: "d1-q060",
      question:
        "A company needs visibility into which specific resources drive a sudden spike in a single account's bill. Which tool gives the MOST granular breakdown?",
      options: [
        "Amazon VPC Flow Logs analyzed to understand the source of the spend.",
        "AWS Trusted Advisor security checks reviewed for the affected account.",
        "The Cost and Usage Report queried in Athena and filtered by resource and usage.",
        "An Amazon CloudWatch dashboard tracking CPU utilization for the account."
      ],
      answer: [2],
      type: "single",
      explanation:
        "The CUR offers line-item, resource-level detail that, queried in Athena, pinpoints what drove a spike.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q061",
      question:
        "SCENARIO: A company must isolate a highly sensitive workload so that even a misconfiguration in another team's account cannot affect it. Which multi-account principle applies BEST?",
      options: [
        "Use a single shared account for everything to centralize administration.",
        "Place the sensitive workload in its own account and OU and apply strict SCPs.",
        "Co-locate the workload with all other workloads to simplify management.",
        "Rely only on security groups within a shared VPC to isolate the workload."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Account-level isolation with dedicated OU and strict SCPs minimizes blast radius for sensitive workloads.",
      topic: "Design a multi-account AWS environment",
      difficulty: "medium"
      },
      {
      id: "d1-q062",
      question:
        "A company wants to ensure that traffic between its on-premises network and AWS over Direct Connect is encrypted. Which approach is BEST?",
      options: [
        "Rely on Direct Connect being inherently encrypted along the private circuit.",
        "Enable Amazon S3 encryption only and leave the link traffic unencrypted.",
        "Run an IPsec VPN over the Direct Connect VIF, or use MACsec where supported.",
        "Use plaintext over the link and trust that the private circuit is secure."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Direct Connect is not encrypted by default; running a VPN over it (or MACsec on supported connections) adds encryption in transit.",
      topic: "Architect network connectivity strategies",
      difficulty: "hard"
      },
      {
      id: "d1-q063",
      question:
        "SCENARIO: A company experiences occasional correlated failures because many services share one dependency. Leadership wants to reduce systemic risk. Which architectural principle should guide the redesign?",
      options: [
        "Remove all redundancy from the design to reduce the number of moving parts.",
        "Reduce shared fate by partitioning into cells so one failure does not cascade.",
        "Scale the single shared dependency vertically rather than partitioning it.",
        "Centralize everything behind a single shared component to simplify operations."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Cell-based (bulkhead) architecture partitions workloads so a failure is contained to one cell rather than affecting everyone.",
      topic: "Design reliable and resilient architecture",
      difficulty: "hard"
      },
      {
      id: "d1-q064",
      question:
        "A company wants to enforce mandatory tags at resource creation time for cost allocation across the organization. Which approach is MOST effective?",
      options: [
        "Ask the teams to add the required tags to their resources at a later time.",
        "Disable cost allocation tags so that tagging is no longer a requirement.",
        "Tag policies in AWS Organizations plus SCPs that deny creation of untagged resources.",
        "Run a monthly tag cleanup script to add missing tags after the fact."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Tag policies standardize tags and SCP conditions can deny creation without required tags, enforcing tagging at creation.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q065",
      question:
        "SCENARIO: A company's security team wants to ensure that even if an EC2 instance is compromised, the attacker cannot retrieve credentials via the instance metadata service using SSRF. Which configuration helps MOST?",
      options: [
        "Use IMDSv1 for broad compatibility with the existing application code.",
        "Store the instance credentials in user data so they are not fetched at runtime.",
        "Enforce IMDSv2, which requires a session token, on all of the instances.",
        "Disable the security groups so the metadata service is no longer reachable."
      ],
      answer: [2],
      type: "single",
      explanation:
        "IMDSv2 requires session tokens, mitigating SSRF-based credential theft from the metadata service.",
      topic: "Prescribe security controls",
      difficulty: "hard"
      },
      {
      id: "d1-q066",
      question:
        "A company wants to centrally aggregate findings from GuardDuty, Inspector, and Config across the organization with severity-based prioritization. Which service is BEST?",
      options: [
        "Amazon CloudWatch dashboards built per account to track the findings.",
        "AWS Security Hub with organization-wide aggregation of the findings.",
        "AWS Budgets configured to alert when security spend grows unexpectedly.",
        "Amazon QuickSight dashboards assembled from exported finding data."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Security Hub aggregates and prioritizes findings from multiple security services across all accounts.",
      topic: "Prescribe security controls",
      difficulty: "easy"
      },
      {
      id: "d1-q067",
      question:
        "SCENARIO: A company must connect 50 branch offices to AWS with simplified, scalable VPN management and automatic propagation of routes to a Transit Gateway. Which solution is BEST?",
      options: [
        "VPC peering connections established individually to each branch office.",
        "AWS Transit Gateway with Site-to-Site VPN using BGP route propagation.",
        "A separate VPC and VPN per branch office configured with static routes.",
        "Public internet exposure of the internal services for each branch office."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Terminating Site-to-Site VPNs on a Transit Gateway with BGP centralizes and scales branch connectivity with dynamic route propagation.",
      topic: "Architect network connectivity strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q068",
      question:
        "A company wants to reduce the risk that a single compromised IAM role in a shared account grants access to all environments. Which structural change helps MOST?",
      options: [
        "Share one VPC across all environments and rely on subnets for separation.",
        "Separate prod and non-prod into distinct accounts with their own roles and SCPs.",
        "Use one role with broad permissions shared across all of the environments.",
        "Disable IAM logging so that role activity is not recorded in the account."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Account-per-environment separation limits the blast radius of a compromised role to a single environment.",
      topic: "Design a multi-account AWS environment",
      difficulty: "medium"
      },
      {
      id: "d1-q069",
      question:
        "SCENARIO: A company wants automated cost optimization recommendations and the ability to act on idle load balancers, unattached EBS volumes, and old snapshots across accounts. Which combination is BEST? (Select TWO.)",
      options: [
        "AWS WAF logs.",
        "AWS Trusted Advisor cost optimization checks across the organization.",
        "Amazon GuardDuty findings.",
        "AWS Compute Optimizer for EC2/EBS/Lambda rightsizing.",
        "Amazon SES analytics."
      ],
      answer: [1, 3],
      type: "multi",
      explanation:
        "Trusted Advisor flags idle/unattached resources and Compute Optimizer adds rightsizing, together driving cost optimization.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q070",
      question:
        "A company needs private, redundant connectivity from on-premises to AWS with a committed bandwidth and consistent latency, plus a failover path. Which design is BEST?",
      options: [
        "VPC peering established to the on-premises network for private connectivity.",
        "Two Direct Connect connections at different locations plus a Site-to-Site VPN backup.",
        "A single Direct Connect connection with no backup path configured at all.",
        "Only a Site-to-Site VPN over the public internet with no Direct Connect."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Redundant Direct Connect at separate locations gives committed, low-latency private links, and a VPN backup adds another failover path.",
      topic: "Architect network connectivity strategies",
      difficulty: "medium"
      },
      {
      id: "d1-q071",
      question:
        "SCENARIO: A company must ensure that if a deployment introduces a regional outage, customer traffic shifts to a healthy Region within minutes without manual DNS changes. Which approach is BEST?",
      options: [
        "Use Route 53 Application Recovery Controller with readiness checks and routing controls.",
        "Hardcode the primary Region's IP address into the clients that connect.",
        "Rely on a single-Region deployment and accept downtime during a failure.",
        "Manually update the DNS records whenever an operator is alerted to a failure."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Route 53 Application Recovery Controller provides readiness checks and routing controls for reliable, fast multi-Region failover.",
      topic: "Design reliable and resilient architecture",
      difficulty: "hard"
      },
      {
      id: "d1-q072",
      question:
        "A company wants member accounts to be unable to disable or modify the organization's centrally managed AWS Config recorder. Which control enforces this?",
      options: [
        "An IAM group policy applied within each member account to the relevant users.",
        "An SCP denying config:StopConfigurationRecorder and related actions in accounts.",
        "A network ACL configured to block access to the AWS Config service endpoint.",
        "An Amazon CloudWatch alarm that fires when the recorder is stopped."
      ],
      answer: [1],
      type: "single",
      explanation:
        "An SCP denying the relevant Config actions prevents member accounts from disabling the centrally managed recorder.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      },
      {
      id: "d1-q073",
      question:
        "SCENARIO: A company's finance team wants to see committed-use coverage and utilization to decide whether to buy more Savings Plans. Which tool provides this analysis?",
      options: [
        "Amazon Macie findings used to understand the spend across the accounts.",
        "Amazon CloudWatch metrics reviewed to estimate committed-use coverage.",
        "AWS Config data examined to determine how instances are being used.",
        "Cost Explorer Savings Plans coverage and utilization reports for the analysis."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Cost Explorer's Savings Plans coverage and utilization reports inform commitment-purchase decisions.",
      topic: "Determine cost optimization and visibility strategies",
      difficulty: "easy"
      },
      {
      id: "d1-q074",
      question:
        "A company must allow application accounts to resolve and reach a centralized set of interface endpoints (PrivateLink) hosted in a shared services VPC. Which approach scales BEST?",
      options: [
        "Peer every account to every other account to reach the shared endpoints.",
        "Centralize interface endpoints in a shared VPC and share access via Transit Gateway.",
        "Create duplicate interface endpoints in every account that needs the services.",
        "Use public service endpoints from all accounts instead of private endpoints."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Centralizing interface endpoints and routing access via Transit Gateway with shared private DNS avoids duplicating endpoints per account.",
      topic: "Architect network connectivity strategies",
      difficulty: "hard"
      },
      {
      id: "d1-q075",
      question:
        "SCENARIO: After an incident, leadership requires that any change to production IAM policies triggers a review and is logged immutably. Which combination BEST supports this governance? (Select TWO.)",
      options: [
        "Allow ad hoc console edits with no logging.",
        "Disable CloudTrail in production.",
        "Capture IAM changes via CloudTrail delivered to an immutable, centralized log store.",
        "Require changes through a CI/CD pipeline with approvals (policy-as-code review).",
        "Grant all engineers IAM full access."
      ],
      answer: [2, 3],
      type: "multi",
      explanation:
        "CloudTrail to an immutable store provides the audit record, and policy-as-code through a pipeline with approvals enforces review before changes apply.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      }
    ]
  });

  QB.domains.push({
    id: "d2",
    name: "Domain 2: Design for New Solutions",
    weightPct: 29,
    topics: ["Design deployment strategies","Design solutions for business continuity","Determine security controls for new solutions","Design for reliability and high availability","Determine performance objectives","Determine cost-optimized solutions"],
    questions: [
      {
      id: "d2-q001",
      question:
        "A new application must process spiky, unpredictable traffic and scale to zero when idle, with no server management. Which compute choice BEST fits?",
      options: [
        "Amazon EC2 with a fixed-size fleet.",
        "Amazon EC2 Reserved Instances.",
        "A single large EC2 instance with cron jobs.",
        "AWS Lambda behind Amazon API Gateway."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Lambda scales automatically to zero and up with demand and removes server management, ideal for spiky, event-driven workloads.",
      topic: "Determine cost-optimized solutions",
      difficulty: "easy"
      },
      {
      id: "d2-q002",
      question:
        "A new microservices platform requires zero-downtime deployments with the ability to instantly roll back a bad release. Which deployment strategy BEST meets this?",
      options: [
        "A manual deployment carried out by the team during a scheduled maintenance window.",
        "A blue/green deployment that shifts traffic to a new environment with rollback.",
        "A recreate strategy that replaces all running instances at the same time.",
        "An in-place deployment that overwrites the running instances during the release."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Blue/green keeps the old environment intact while the new one is validated, enabling instant rollback by shifting traffic back.",
      topic: "Design deployment strategies",
      difficulty: "easy"
      },
      {
      id: "d2-q003",
      question:
        "A company designs a business continuity plan with an RTO of 4 hours and an RPO of 1 hour at the lowest cost. Which disaster recovery strategy is MOST appropriate?",
      options: [
        "Multi-Region active-active.",
        "Warm standby running at full capacity.",
        "Pilot light.",
        "Backup and restore."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Pilot light keeps minimal core infrastructure running and data replicated, allowing recovery within hours at lower cost than warm standby or active-active.",
      topic: "Design solutions for business continuity",
      difficulty: "medium"
      },
      {
      id: "d2-q004",
      question:
        "A new web tier must encrypt data in transit to clients and terminate TLS at the load balancer using a managed certificate. Which combination is BEST? (Select TWO.)",
      options: [
        "Use an Application Load Balancer HTTPS listener.",
        "Disable TLS to reduce latency.",
        "Use a self-signed certificate distributed manually.",
        "Store private keys in plaintext on each instance.",
        "Provision a certificate in AWS Certificate Manager and attach it to an HTTPS listener."
      ],
      answer: [0, 4],
      type: "multi",
      explanation:
        "ACM issues and renews managed certificates; attaching one to an ALB HTTPS listener terminates TLS without manual key handling.",
      topic: "Determine security controls for new solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q005",
      question:
        "A new analytics workload reads large objects from S3 with high throughput from thousands of parallel clients. Which design consideration improves performance MOST?",
      options: [
        "Place every object under a single shared key prefix to simplify the design.",
        "Rely on S3 automatic scaling, spreading requests and using parallel multipart reads.",
        "Disable request retries on the clients so failed reads are not reattempted.",
        "Store all of the analytics data inside one very large object in the bucket."
      ],
      answer: [1],
      type: "single",
      explanation:
        "S3 scales request rate automatically; spreading requests and using parallel/multipart reads maximizes aggregate throughput.",
      topic: "Determine performance objectives",
      difficulty: "medium"
      },
      {
      id: "d2-q006",
      question:
        "A new stateful application needs a relational database that automatically scales read throughput and provides sub-second failover across AZs. Which option BEST fits?",
      options: [
        "A single Amazon RDS instance backed up only by manual snapshots.",
        "Amazon Aurora with multiple read replicas and a Multi-AZ configuration.",
        "Amazon DynamoDB forced into a relational schema for the application.",
        "A self-managed MySQL engine running on a single Amazon EC2 instance."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Aurora scales reads with replicas, offers fast failover across AZs, and provides a managed relational engine.",
      topic: "Design for reliability and high availability",
      difficulty: "medium"
      },
      {
      id: "d2-q007",
      question:
        "A new mobile backend must authenticate users via social identity providers and grant temporary AWS credentials scoped to each user. Which services BEST deliver this? (Select TWO.)",
      options: [
        "AWS Shield Advanced.",
        "Hardcoded IAM user access keys in the app.",
        "Amazon Cognito identity pools for temporary AWS credentials.",
        "An EC2 instance storing all user passwords.",
        "Amazon Cognito user pools for sign-in/federation."
      ],
      answer: [2, 4],
      type: "multi",
      explanation:
        "Cognito user pools handle authentication and federation; identity pools exchange tokens for scoped temporary AWS credentials.",
      topic: "Determine security controls for new solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q008",
      question:
        "A new event-driven pipeline must decouple producers from consumers and guarantee that each message is processed at least once with retries and a dead-letter queue. Which service is BEST?",
      options: [
        "Amazon SNS used on its own to deliver messages to the consumers.",
        "Amazon Kinesis Data Firehose used by itself for the message pipeline.",
        "Amazon SQS configured with a dead-letter queue for failed messages.",
        "Direct synchronous HTTP calls made from producers to consumers."
      ],
      answer: [2],
      type: "single",
      explanation:
        "SQS decouples components, retries delivery, and supports a DLQ for messages that exceed the maximum receive count.",
      topic: "Design for reliability and high availability",
      difficulty: "easy"
      },
      {
      id: "d2-q009",
      question:
        "A new global API must deliver consistently low latency to users worldwide and provide a static anycast entry point with fast failover between Regional endpoints. Which service is BEST?",
      options: [
        "A Network Load Balancer in one Region.",
        "Route 53 latency routing without health checks.",
        "AWS Global Accelerator.",
        "Amazon CloudFront only."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Global Accelerator provides static anycast IPs and routes over the AWS backbone with fast Regional failover, improving latency and availability for non-cacheable APIs.",
      topic: "Determine performance objectives",
      difficulty: "hard"
      },
      {
      id: "d2-q010",
      question:
        "A new workload's cost must be minimized while meeting a strict 99.9% availability SLA for a containerized service. Which approach balances both?",
      options: [
        "Run all of the tasks on Amazon ECS using Fargate Spot capacity only.",
        "Use only the largest available Fargate task size for every task in the service.",
        "Run a single Amazon ECS task on one Amazon EC2 instance for the service.",
        "Run a baseline of tasks on Fargate On-Demand across AZs and burst with Fargate Spot."
      ],
      answer: [3],
      type: "single",
      explanation:
        "A stable On-Demand baseline across AZs meets the SLA, while Fargate Spot for burst capacity reduces cost without risking core availability.",
      topic: "Determine cost-optimized solutions",
      difficulty: "hard"
      },
      {
      id: "d2-q011",
      question:
        "A new application requires automated, point-in-time recovery of its database for the past 35 days with minimal operational effort. Which option BEST provides this?",
      options: [
        "A nightly script that copies the database contents into Amazon S3.",
        "Manual database snapshots taken on a weekly schedule by the team.",
        "Amazon RDS automated backups with point-in-time recovery enabled.",
        "Uncoordinated EBS snapshots taken of the database storage volumes."
      ],
      answer: [2],
      type: "single",
      explanation:
        "RDS automated backups support point-in-time restore within the retention window (up to 35 days) with no custom tooling.",
      topic: "Design solutions for business continuity",
      difficulty: "easy"
      },
      {
      id: "d2-q012",
      question:
        "A new internal tool will be accessed only from corporate networks and must never be reachable from the internet. Which combination enforces this? (Select TWO.)",
      options: [
        "Publish the endpoint in public DNS with no restrictions.",
        "Deploy the service in private subnets.",
        "Use an internet gateway with open ingress.",
        "Expose it through an internal load balancer and access it over Direct Connect/VPN.",
        "Attach a public IP and rely on security groups only."
      ],
      answer: [1, 3],
      type: "multi",
      explanation:
        "Private subnets plus an internal load balancer reached via private connectivity (DX/VPN) keep the service off the public internet.",
      topic: "Determine security controls for new solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q013",
      question:
        "A new high-write time-series workload needs single-digit millisecond latency at massive scale with a flexible schema. Which database is BEST suited?",
      options: [
        "Amazon DynamoDB.",
        "Amazon Redshift.",
        "A single Amazon RDS for PostgreSQL instance.",
        "Amazon Neptune."
      ],
      answer: [0],
      type: "single",
      explanation:
        "DynamoDB delivers consistent low-latency performance at scale with a flexible key-value/document model, suiting high-write workloads.",
      topic: "Determine performance objectives",
      difficulty: "medium"
      },
      {
      id: "d2-q014",
      question:
        "A new system must continue serving traffic if an entire Region becomes unavailable, with users automatically directed to a healthy Region. Which pair is required? (Select TWO.)",
      options: [
        "A NAT gateway in each subnet.",
        "Multi-Region deployment of the application stack.",
        "An S3 bucket in one Region only.",
        "Amazon Route 53 health checks with failover or latency routing across Regions.",
        "A single Region with Multi-AZ only."
      ],
      answer: [1, 3],
      type: "multi",
      explanation:
        "Regional failure tolerance requires the stack in multiple Regions and Route 53 routing/health checks to redirect users automatically.",
      topic: "Design solutions for business continuity",
      difficulty: "medium"
      },
      {
      id: "d2-q015",
      question:
        "A new deployment pipeline should automatically test infrastructure changes and require manual approval before production release. Which AWS service orchestrates this pipeline?",
      options: [
        "AWS Config rules evaluated to gate the deployment before production.",
        "Amazon CloudWatch dashboards reviewed manually before each release.",
        "AWS CodePipeline with build and test stages and a manual approval action.",
        "Amazon EventBridge used alone to coordinate the deployment activities."
      ],
      answer: [2],
      type: "single",
      explanation:
        "CodePipeline models multi-stage delivery, including automated test stages and manual approval actions before production.",
      topic: "Design deployment strategies",
      difficulty: "easy"
      },
      {
      id: "d2-q016",
      question:
        "A new compute-heavy ML inference service needs the best price/performance and can use AWS-managed accelerators. Which instance choice is MOST cost-effective for inference?",
      options: [
        "General-purpose instances chosen for the inference service workload.",
        "Memory-optimized instances chosen for their large available memory.",
        "Burstable T-family instances selected to keep the baseline cost low.",
        "AWS Inferentia-based instances purpose-built for cost-effective inference."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Inferentia-based instances are purpose-built for cost-effective, high-throughput ML inference.",
      topic: "Determine cost-optimized solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q017",
      question:
        "A new application requires that secrets such as database credentials are rotated automatically and never stored in code. Which service is BEST?",
      options: [
        "AWS Secrets Manager with automatic rotation.",
        "An S3 object with public read.",
        "Environment variables committed to source control.",
        "Parameter Store standard parameters without rotation."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Secrets Manager stores secrets encrypted and supports automatic rotation via Lambda, removing credentials from code.",
      topic: "Determine security controls for new solutions",
      difficulty: "easy"
      },
      {
      id: "d2-q018",
      question:
        "A new gradual-rollout strategy should shift a small percentage of production traffic to a new version, monitor metrics, then increase exposure. Which deployment pattern is this?",
      options: [
        "Big-bang deployment.",
        "Cold standby.",
        "Canary deployment.",
        "Backup and restore."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Canary releases expose the new version to a small traffic slice first, expanding only after metrics confirm health.",
      topic: "Design deployment strategies",
      difficulty: "easy"
      },
      {
      id: "d2-q019",
      question:
        "A new read-heavy web application repeatedly queries the same data and needs to reduce database load with microsecond-to-millisecond response times. Which addition is BEST?",
      options: [
        "Move all of the application's data into Amazon S3 to reduce database load.",
        "Add an Amazon ElastiCache caching layer in front of the database tier.",
        "Increase the Amazon RDS storage size to give the database more headroom.",
        "Disable connection pooling so each request opens a fresh connection."
      ],
      answer: [1],
      type: "single",
      explanation:
        "ElastiCache caches hot reads in memory, lowering database load and latency for repeated queries.",
      topic: "Determine performance objectives",
      difficulty: "easy"
      },
      {
      id: "d2-q020",
      question:
        "A new solution must ingest streaming clickstream data, buffer it, transform it, and deliver it to S3 and Redshift with minimal management. Which service is BEST for the delivery pipeline?",
      options: [
        "Amazon EFS used as the staging layer for the clickstream delivery.",
        "AWS Batch jobs scheduled to move the streaming data to its destinations.",
        "Amazon Kinesis Data Firehose to buffer, transform, and deliver the data.",
        "An Amazon SQS standard queue used as the streaming delivery pipeline."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Kinesis Data Firehose buffers, optionally transforms, and delivers streaming data to destinations like S3 and Redshift without managing infrastructure.",
      topic: "Determine performance objectives",
      difficulty: "medium"
      },
      {
      id: "d2-q021",
      question:
        "A new application needs infrastructure defined as code that is repeatable across accounts and Regions, with drift detection. Which service is BEST?",
      options: [
        "AWS CloudFormation.",
        "Shell scripts run ad hoc.",
        "Amazon QuickSight.",
        "Manual console configuration documented in a wiki."
      ],
      answer: [0],
      type: "single",
      explanation:
        "CloudFormation provisions repeatable infrastructure as code with stack sets for multi-account/Region and built-in drift detection.",
      topic: "Design deployment strategies",
      difficulty: "easy"
      },
      {
      id: "d2-q022",
      question:
        "A new workload needs to guarantee message ordering and exactly-once processing within a message group. Which option provides this?",
      options: [
        "Amazon EventBridge bus.",
        "Amazon SQS FIFO queue.",
        "Amazon SQS standard queue.",
        "Amazon SNS standard topic."
      ],
      answer: [1],
      type: "single",
      explanation:
        "SQS FIFO queues preserve ordering and provide exactly-once processing within a message group.",
      topic: "Design for reliability and high availability",
      difficulty: "medium"
      },
      {
      id: "d2-q023",
      question:
        "A new cost-optimized architecture serves a static single-page application with a globally distributed CDN and no servers. Which combination is BEST? (Select TWO.)",
      options: [
        "Use a Multi-AZ RDS to serve HTML.",
        "Distribute via Amazon CloudFront.",
        "Host the SPA assets in Amazon S3.",
        "Deploy on Dedicated Hosts.",
        "Run the SPA on an always-on EC2 fleet."
      ],
      answer: [1, 2],
      type: "multi",
      explanation:
        "S3 static hosting plus CloudFront delivers a serverless, globally cached SPA at low cost.",
      topic: "Determine cost-optimized solutions",
      difficulty: "easy"
      },
      {
      id: "d2-q024",
      question:
        "A new solution must enforce that all data written to a new S3 bucket is encrypted with a customer-managed KMS key. Which configuration enforces this?",
      options: [
        "Reliance on users to set the encryption headers voluntarily on each upload.",
        "Default SSE-KMS encryption plus a bucket policy denying unencrypted uploads.",
        "Amazon S3 Versioning enabled on the bucket without any encryption controls.",
        "Client-side encryption left optional with no bucket policy enforcing it."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Setting SSE-KMS default encryption and a bucket policy that denies non-KMS uploads guarantees all objects use the chosen key.",
      topic: "Determine security controls for new solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q025",
      question:
        "A new workload requires shared file storage accessible by hundreds of Linux EC2 instances across multiple AZs concurrently. Which storage service is BEST?",
      options: [
        "Instance store volumes.",
        "Amazon EBS attached to one instance.",
        "Amazon EFS.",
        "Amazon S3 mounted as a block device."
      ],
      answer: [2],
      type: "single",
      explanation:
        "EFS provides a shared, elastic NFS file system accessible concurrently from many instances across AZs.",
      topic: "Design for reliability and high availability",
      difficulty: "easy"
      },
      {
      id: "d2-q026",
      question:
        "SCENARIO: A startup is designing a new image-processing service. Users upload images that must be resized into several formats within seconds, with unpredictable bursty load and no idle cost. Which design is BEST?",
      options: [
        "Process every image synchronously on a single large Amazon EC2 instance.",
        "Upload to S3 and trigger AWS Lambda via event notifications to process images.",
        "Run a fixed fleet of Amazon EC2 instances that poll a folder for new uploads.",
        "Schedule a nightly Amazon EMR batch job to resize the uploaded images."
      ],
      answer: [1],
      type: "single",
      explanation:
        "S3 event-driven Lambda scales with bursts, costs nothing when idle, and processes uploads within seconds.",
      topic: "Determine cost-optimized solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q027",
      question:
        "SCENARIO: A new payment service requires that no single AZ failure causes downtime and that database writes are never lost. Which database configuration is BEST?",
      options: [
        "Amazon DynamoDB deployed in a single Region with no backups configured.",
        "Amazon Aurora or RDS Multi-AZ with synchronous replication and auto failover.",
        "A self-managed database on one instance protected by hourly snapshots.",
        "Amazon RDS Single-AZ with read replicas placed in the same Availability Zone."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Multi-AZ synchronous replication with automatic failover prevents data loss and downtime from a single AZ failure.",
      topic: "Design for reliability and high availability",
      difficulty: "medium"
      },
      {
      id: "d2-q028",
      question:
        "SCENARIO: A new B2B API must allow partners to call it with throttling per partner, usage plans, API keys, and request validation. Which service is BEST?",
      options: [
        "An Application Load Balancer used on its own to front the partner API.",
        "Amazon API Gateway configured with usage plans and per-partner API keys.",
        "Amazon SQS used to receive and throttle the partner API requests.",
        "A raw Amazon EC2 web server exposed directly to the partner traffic."
      ],
      answer: [1],
      type: "single",
      explanation:
        "API Gateway provides usage plans, API keys, throttling, and request validation for partner-facing APIs.",
      topic: "Determine performance objectives",
      difficulty: "medium"
      },
      {
      id: "d2-q029",
      question:
        "SCENARIO: A new application stores PII and must encrypt data at rest with keys the company controls and can revoke. Which approach is BEST?",
      options: [
        "Protect the data with a single static application-level password instead.",
        "Store the PII unencrypted but keep it inside a private subnet for safety.",
        "Use AWS KMS customer managed keys for at-rest encryption with key policies.",
        "Rely on physical data center security rather than encryption at rest."
      ],
      answer: [2],
      type: "single",
      explanation:
        "KMS customer managed keys let the company control, audit, rotate, and revoke access to encryption keys protecting PII.",
      topic: "Determine security controls for new solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q030",
      question:
        "SCENARIO: A new SaaS product must onboard tenants quickly, isolate their data, and scale per tenant. Architects want pooled compute but isolated data with row-level security. Which approach is reasonable for cost efficiency at small scale?",
      options: [
        "Provision a separate AWS account for every tenant from day one regardless of size.",
        "Store all tenants' data in one unpartitioned table with no isolation at all.",
        "Use a pooled database with tenant isolation enforced through row-level controls.",
        "Run a dedicated Amazon EC2 instance for each tenant in the platform."
      ],
      answer: [2],
      type: "single",
      explanation:
        "A pooled model with enforced tenant isolation is cost-efficient at small scale; full account-per-tenant is heavier and used selectively for strict isolation needs.",
      topic: "Determine cost-optimized solutions",
      difficulty: "hard"
      },
      {
      id: "d2-q031",
      question:
        "SCENARIO: A new analytics platform must run ad hoc SQL over data in S3 without managing servers and pay only per query. Which service is BEST?",
      options: [
        "Amazon ElastiCache.",
        "Amazon EMR with a permanent cluster.",
        "Amazon Athena.",
        "Amazon RDS."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Athena runs serverless SQL directly on S3 data with per-query pricing and no infrastructure to manage.",
      topic: "Determine cost-optimized solutions",
      difficulty: "easy"
      },
      {
      id: "d2-q032",
      question:
        "SCENARIO: A new system must process orders exactly once and in order per customer, even under retries. Which messaging design is BEST?",
      options: [
        "A standard Amazon SQS queue with no deduplication of the messages.",
        "Direct synchronous service calls made without any queuing in between.",
        "An Amazon SNS standard topic delivering to multiple subscriber endpoints.",
        "Amazon SQS FIFO queues with a per-customer group ID and deduplication."
      ],
      answer: [3],
      type: "single",
      explanation:
        "FIFO queues preserve per-group ordering and provide exactly-once processing with deduplication, ideal for per-customer order processing.",
      topic: "Design for reliability and high availability",
      difficulty: "hard"
      },
      {
      id: "d2-q033",
      question:
        "SCENARIO: A new global e-commerce site must serve dynamic and static content with low latency worldwide and protect against common web attacks. Which combination is BEST? (Select TWO.)",
      options: [
        "Disabling TLS for speed.",
        "A single-Region EC2 instance with a public IP.",
        "No CDN, relying on origin scaling only.",
        "Amazon CloudFront for global content delivery and caching.",
        "AWS WAF associated with CloudFront for web attack protection."
      ],
      answer: [3, 4],
      type: "multi",
      explanation:
        "CloudFront lowers global latency and offloads the origin; WAF on CloudFront blocks common web attacks at the edge.",
      topic: "Determine performance objectives",
      difficulty: "medium"
      },
      {
      id: "d2-q034",
      question:
        "SCENARIO: A new workload has strict RTO of 5 minutes and RPO near zero across Regions and budget is not a primary concern. Which DR strategy is BEST?",
      options: [
        "Multi-Region active-active or hot standby with continuous data replication.",
        "A single-Region deployment using only Multi-AZ for its resilience.",
        "A pilot light strategy keeping minimal core infrastructure warm in a Region.",
        "A backup-and-restore strategy that recovers from stored backups after failure."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Active-active/hot standby with continuous replication meets very low RTO/RPO across Regions when budget allows.",
      topic: "Design solutions for business continuity",
      difficulty: "medium"
      },
      {
      id: "d2-q035",
      question:
        "SCENARIO: A new internal app for employees must authenticate against the company's existing corporate identity provider via SAML and grant role-based AWS console/app access. Which service is BEST?",
      options: [
        "Individual IAM users created for every employee across the accounts.",
        "AWS IAM Identity Center federated to the corporate SAML identity provider.",
        "Amazon Cognito identity pools used alone without any identity provider.",
        "Credentials hardcoded directly into the internal application's code."
      ],
      answer: [1],
      type: "single",
      explanation:
        "IAM Identity Center federates with corporate SAML IdPs and maps users to permission sets for role-based access.",
      topic: "Determine security controls for new solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q036",
      question:
        "SCENARIO: A new high-traffic gaming leaderboard needs sub-millisecond reads and writes at very high request rates with simple key access. Which service is BEST?",
      options: [
        "Amazon S3 used to store and retrieve the leaderboard entries on each call.",
        "Amazon Redshift queried directly to serve the leaderboard read traffic.",
        "Amazon RDS for PostgreSQL used as the backing store for the leaderboard.",
        "Amazon ElastiCache for Redis, or DynamoDB with DAX, for sub-millisecond reads."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Redis (or DynamoDB + DAX) delivers sub-millisecond latency at high throughput for leaderboard-style access.",
      topic: "Determine performance objectives",
      difficulty: "medium"
      },
      {
      id: "d2-q037",
      question:
        "SCENARIO: A new microservice deployment must let the team validate a new version with real production traffic on a small slice, then automatically roll back if error rates rise. Which approach is BEST?",
      options: [
        "A manual deployment performed with no monitoring of the new version.",
        "An in-place deployment pushed to all instances at the same time.",
        "A canary deployment with CloudWatch alarms triggering automatic rollback.",
        "A blue/green deployment configured without any health checks at all."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Canary releases shift a small slice of traffic and roll back automatically when alarms detect elevated errors.",
      topic: "Design deployment strategies",
      difficulty: "medium"
      },
      {
      id: "d2-q038",
      question:
        "SCENARIO: A new data lake must store raw, processed, and curated data cheaply with lifecycle transitions and fine-grained access control per dataset. Which combination is BEST? (Select TWO.)",
      options: [
        "Amazon ElastiCache as the data lake store.",
        "AWS Lake Formation for fine-grained data access governance.",
        "Storing all data in one DynamoDB table.",
        "Amazon S3 with lifecycle policies for cost-tiering.",
        "A single EBS volume for all data."
      ],
      answer: [1, 3],
      type: "multi",
      explanation:
        "S3 provides cheap tiered storage with lifecycle rules, and Lake Formation adds fine-grained governance over datasets.",
      topic: "Determine cost-optimized solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q039",
      question:
        "SCENARIO: A new application's background jobs vary from seconds to hours and must run in containers with no server management, scaling to zero when idle. Which compute is BEST?",
      options: [
        "Amazon ECS on AWS Fargate with task scaling tuned to the workload.",
        "A fixed Amazon EC2 Auto Scaling group held at a minimum size of ten.",
        "AWS Lambda used for jobs that frequently run for several hours each.",
        "A single always-on Amazon EC2 instance processing the background jobs."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Fargate runs containers without server management and scales tasks based on demand; Lambda's 15-minute limit rules it out for hours-long jobs.",
      topic: "Determine cost-optimized solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q040",
      question:
        "SCENARIO: A new web tier must automatically replace unhealthy instances and maintain capacity during AZ failure. Which combination is required? (Select TWO.)",
      options: [
        "A single instance with a static IP.",
        "An Auto Scaling group spanning multiple AZs.",
        "Manual instance replacement on alert.",
        "Health checks (ELB/EC2) integrated with Auto Scaling to replace unhealthy instances.",
        "Disabling health checks to avoid churn."
      ],
      answer: [1, 3],
      type: "multi",
      explanation:
        "A multi-AZ Auto Scaling group with health checks replaces unhealthy instances and maintains capacity across AZ failures.",
      topic: "Design for reliability and high availability",
      difficulty: "easy"
      },
      {
      id: "d2-q041",
      question:
        "SCENARIO: A new IoT platform ingests millions of small messages per second and must buffer and process them in order per device with replay capability. Which service is BEST for ingestion?",
      options: [
        "Amazon RDS written to directly by every device sending messages.",
        "Amazon Kinesis Data Streams keyed by device for per-device ordering.",
        "A standard Amazon SQS queue used to ingest the device messages.",
        "Amazon SES used as the ingestion layer for the device messages."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Kinesis Data Streams handles high-throughput ingestion, preserves order within a shard via partition key, and supports replay.",
      topic: "Determine performance objectives",
      difficulty: "hard"
      },
      {
      id: "d2-q042",
      question:
        "SCENARIO: A new compliance requirement says all API calls in the new workload must be logged and retained immutably for audits. Which design is BEST?",
      options: [
        "Keep the API logs in a publicly readable bucket for easy auditing.",
        "Log all of the API activity to local instance files on each server.",
        "Enable CloudTrail delivering to an S3 bucket with Object Lock and restricted access.",
        "Disable logging of API calls entirely to reduce the storage cost."
      ],
      answer: [2],
      type: "single",
      explanation:
        "CloudTrail to an Object Lock-protected, access-restricted bucket provides immutable, auditable API logs.",
      topic: "Determine security controls for new solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q043",
      question:
        "SCENARIO: A new mobile app backend must scale reads massively and tolerate Regional failure with low-latency global access. Which database design is BEST?",
      options: [
        "Self-managed MongoDB on one EC2 instance.",
        "A single-Region RDS instance.",
        "Amazon Redshift.",
        "Amazon DynamoDB global tables."
      ],
      answer: [3],
      type: "single",
      explanation:
        "DynamoDB global tables provide multi-Region, low-latency, highly scalable access with Regional failure tolerance.",
      topic: "Design solutions for business continuity",
      difficulty: "medium"
      },
      {
      id: "d2-q044",
      question:
        "SCENARIO: A new service must guarantee that a long-running workflow with many steps is durable, retried on failure, and visually traceable. Which service is BEST?",
      options: [
        "AWS Step Functions to orchestrate the workflow with retries and state tracking.",
        "A cron job on Amazon EC2 that runs the multi-step workflow on a timer.",
        "An Amazon SQS queue used without any orchestration of the workflow steps.",
        "A single AWS Lambda function performing every step of the workflow in sequence."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Step Functions orchestrate multi-step workflows with durable state, retries, and visual execution history.",
      topic: "Design for reliability and high availability",
      difficulty: "medium"
      },
      {
      id: "d2-q045",
      question:
        "SCENARIO: A new application must serve users in two continents with the lowest possible TCP/UDP latency and a static entry point, but the content is non-cacheable. Which service is BEST?",
      options: [
        "AWS Global Accelerator.",
        "Amazon CloudFront.",
        "A single Regional NLB.",
        "Route 53 simple routing."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Global Accelerator routes non-cacheable traffic over the AWS backbone with static anycast IPs, minimizing latency.",
      topic: "Determine performance objectives",
      difficulty: "medium"
      },
      {
      id: "d2-q046",
      question:
        "SCENARIO: A new system processes sensitive files that must be scanned for malware before use. Which approach integrates scanning with minimal custom infrastructure?",
      options: [
        "Assume the uploaded files are clean and skip the malware scanning step.",
        "Disable file uploads entirely so that no scanning is ever required.",
        "Scan the uploaded files by hand on roughly a once-a-month schedule.",
        "Trigger a scanning workflow on S3 upload before the files are marked usable."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Event-driven scanning on upload (Lambda + a scanner) gates file usage with minimal standing infrastructure.",
      topic: "Determine security controls for new solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q047",
      question:
        "SCENARIO: A new cost-sensitive workload runs nightly for two hours and is interruption-tolerant. Which compute purchasing choice minimizes cost?",
      options: [
        "Dedicated Hosts reserved for the interruption-tolerant nightly workload.",
        "Amazon EC2 Spot Instances, or Fargate Spot, combined with checkpointing.",
        "Reserved Instances purchased for a workload that only runs two hours nightly.",
        "On-Demand Instances at the largest available size for the short nightly job."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Spot offers the deepest discount for short, interruption-tolerant jobs; checkpointing handles reclamation.",
      topic: "Determine cost-optimized solutions",
      difficulty: "easy"
      },
      {
      id: "d2-q048",
      question:
        "SCENARIO: A new application must keep working during deployments with the ability to instantly switch back if the new version misbehaves, and the team can afford duplicate environments briefly. Which strategy is BEST?",
      options: [
        "Blue/green deployment.",
        "Manual nightly deploys.",
        "Recreate (all at once).",
        "In-place rolling update only."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Blue/green keeps the old environment available for instant rollback during deployments.",
      topic: "Design deployment strategies",
      difficulty: "easy"
      },
      {
      id: "d2-q049",
      question:
        "SCENARIO: A new web app must store user session state so any instance can serve any request and sessions survive instance termination. Which approach is BEST?",
      options: [
        "Keep the session state only in the memory of the instance serving the user.",
        "Store the session state on the local disk of each application instance.",
        "Store sessions in Amazon DynamoDB or ElastiCache, keeping the tier stateless.",
        "Pin each user to a single instance using sticky sessions for the whole session."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Externalizing sessions to DynamoDB/ElastiCache keeps the tier stateless and resilient to instance loss.",
      topic: "Design for reliability and high availability",
      difficulty: "medium"
      },
      {
      id: "d2-q050",
      question:
        "SCENARIO: A new data pipeline must transform large CSV files into Parquet and catalog them for analytics with minimal operational effort. Which combination is BEST? (Select TWO.)",
      options: [
        "AWS Glue Data Catalog for schema/metadata.",
        "AWS Glue jobs for serverless ETL/format conversion.",
        "Amazon SES for cataloging.",
        "Manual conversion on a laptop.",
        "A permanent EMR cluster running 24/7."
      ],
      answer: [0, 1],
      type: "multi",
      explanation:
        "Glue jobs convert formats serverlessly and the Glue Data Catalog registers schemas for analytics tools like Athena.",
      topic: "Determine cost-optimized solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q051",
      question:
        "SCENARIO: A new public API must prevent abuse from individual clients sending excessive requests while allowing legitimate bursts. Which control is BEST?",
      options: [
        "Disabling the API during peak periods to avoid abuse from clients.",
        "No request limits at all, scaling the backend infinitely to absorb traffic.",
        "API Gateway throttling and usage plans combined with WAF rate-based rules.",
        "Blocking all traffic once a fixed number of source IPs has been reached."
      ],
      answer: [2],
      type: "single",
      explanation:
        "API Gateway throttling and WAF rate-based rules curb abusive clients while permitting normal bursts.",
      topic: "Determine security controls for new solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q052",
      question:
        "SCENARIO: A new application needs a relational database but the team cannot predict capacity and wants it to scale automatically and pause when idle to save cost. Which option is BEST?",
      options: [
        "DynamoDB with provisioned capacity.",
        "Amazon Aurora Serverless v2.",
        "Self-managed MySQL on EC2.",
        "A fixed large RDS instance."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Aurora Serverless v2 scales relational capacity automatically with demand, fitting unpredictable workloads cost-effectively.",
      topic: "Determine cost-optimized solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q053",
      question:
        "SCENARIO: A new workload must ensure that an outage in one microservice does not exhaust resources and bring down callers. Which design pattern is BEST?",
      options: [
        "Apply timeouts, bounded retries with backoff, and circuit breakers between services.",
        "Remove the health checks so that slow instances are not taken out of service.",
        "Keep tight synchronous coupling everywhere so failures surface immediately.",
        "Configure unlimited retries with no timeout on calls to the dependency."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Timeouts, capped retries with backoff, and circuit breakers contain failures and protect callers.",
      topic: "Design for reliability and high availability",
      difficulty: "hard"
      },
      {
      id: "d2-q054",
      question:
        "SCENARIO: A new design must deliver large media files to users globally and resume interrupted downloads efficiently while offloading the origin. Which approach is BEST?",
      options: [
        "Serve via Amazon CloudFront using range requests over an Amazon S3 origin.",
        "Store the large media files inside Amazon DynamoDB and serve them from there.",
        "Use a single-Region Network Load Balancer without any edge caching.",
        "Serve the large media files directly from a single Amazon EC2 instance."
      ],
      answer: [0],
      type: "single",
      explanation:
        "CloudFront with byte-range caching over S3 supports efficient, resumable global delivery and offloads the origin.",
      topic: "Determine performance objectives",
      difficulty: "medium"
      },
      {
      id: "d2-q055",
      question:
        "SCENARIO: A new system requires that database credentials used by Lambda are never hardcoded and rotate automatically without code changes. Which approach is BEST?",
      options: [
        "Pass the credentials to the function as query string parameters on each call.",
        "Place the credentials in a publicly readable Amazon S3 object for the function.",
        "Embed the credentials in environment variables defined within the function code.",
        "Store the credentials in AWS Secrets Manager with rotation, retrieving them at runtime."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Secrets Manager with rotation supplies credentials at runtime to the function with no hardcoding and automatic rotation.",
      topic: "Determine security controls for new solutions",
      difficulty: "easy"
      },
      {
      id: "d2-q056",
      question:
        "SCENARIO: A new workload must guarantee 99.99% availability for a stateless API. Which deployment topology BEST supports that target?",
      options: [
        "An on-premises-only deployment of the API with no AWS footprint.",
        "Two instances placed in the same Availability Zone behind the load balancer.",
        "A single instance running in one Availability Zone for the stateless API.",
        "A Multi-AZ deployment behind a load balancer with Auto Scaling and health checks."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Spreading a stateless API across AZs behind a load balancer with Auto Scaling and health checks supports high availability targets.",
      topic: "Design for reliability and high availability",
      difficulty: "easy"
      },
      {
      id: "d2-q057",
      question:
        "SCENARIO: A new financial reporting system must produce a daily immutable snapshot of data for audit and allow point-in-time queries. Which approach is BEST?",
      options: [
        "Overwrite a single file each day with the latest copy of the data.",
        "Write daily snapshots to S3 with Object Lock and catalog them for Athena queries.",
        "Keep the reporting data only in a mutable database that changes over time.",
        "Email the daily reports to recipients without storing them durably."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Immutable daily snapshots in S3 with Object Lock, queryable via Athena, satisfy audit and point-in-time needs.",
      topic: "Design solutions for business continuity",
      difficulty: "medium"
      },
      {
      id: "d2-q058",
      question:
        "SCENARIO: A new app must process uploaded documents through several optional steps depending on document type, with clear branching logic and error handling. Which service models this BEST?",
      options: [
        "A single monolithic AWS Lambda with nested conditionals and no retries.",
        "AWS Step Functions with choice states and catch/retry for the branching logic.",
        "Cron jobs on Amazon EC2 that run the document-processing steps on a timer.",
        "An Amazon SQS queue used alone to drive the conditional processing steps."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Step Functions choice states model conditional branching with built-in error handling and retries.",
      topic: "Design deployment strategies",
      difficulty: "medium"
      },
      {
      id: "d2-q059",
      question:
        "SCENARIO: A new high-performance computing job needs tightly coupled, low-latency networking between many instances. Which feature is BEST?",
      options: [
        "A single instance scaled vertically to run the tightly coupled workload.",
        "Instances placed in different Availability Zones communicating via NAT.",
        "A spread placement group distributing the instances across Regions.",
        "A cluster placement group combined with the Elastic Fabric Adapter."
      ],
      answer: [3],
      type: "single",
      explanation:
        "A cluster placement group with EFA delivers the low-latency, high-bandwidth networking HPC workloads require.",
      topic: "Determine performance objectives",
      difficulty: "hard"
      },
      {
      id: "d2-q060",
      question:
        "SCENARIO: A new app must let customers upload directly to S3 without routing large files through the application servers, while restricting where/what they can upload. Which approach is BEST?",
      options: [
        "Proxy all of the client uploads through the Amazon EC2 application tier.",
        "Generate S3 presigned URLs, or presigned POST with conditions, from the backend.",
        "Make the destination bucket public so clients can upload directly to it.",
        "Have clients email their files to an inbox that ingests them into S3."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Presigned URLs/POST let clients upload directly to S3 with backend-defined constraints, bypassing the app servers.",
      topic: "Determine cost-optimized solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q061",
      question:
        "SCENARIO: A new service must continue functioning if a dependency's region is degraded, by serving cached or default responses. Which resilience approach is BEST?",
      options: [
        "Fail the entire request whenever any single dependency responds slowly.",
        "Remove the dependency health check so failures are not detected at all.",
        "Retry the dependency indefinitely with no fallback path for the request.",
        "Implement graceful degradation with fallbacks and caching when the dependency fails."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Graceful degradation with fallbacks/caching keeps the service useful when a dependency is impaired.",
      topic: "Design for reliability and high availability",
      difficulty: "hard"
      },
      {
      id: "d2-q062",
      question:
        "SCENARIO: A new design must minimize cost for infrequently accessed backups that still need retrieval within minutes occasionally. Which S3 storage class is BEST?",
      options: [
        "Amazon S3 Glacier Deep Archive relied on for minute-level retrieval needs.",
        "Amazon EBS volumes used to hold the infrequently accessed backup data.",
        "Amazon S3 Standard-IA, or Glacier Instant Retrieval, for fast infrequent access.",
        "Amazon S3 Standard kept for everything regardless of how often it is read."
      ],
      answer: [2],
      type: "single",
      explanation:
        "S3 Standard-IA (or Glacier Instant Retrieval) lowers cost for infrequent access while keeping fast retrieval.",
      topic: "Determine cost-optimized solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q063",
      question:
        "SCENARIO: A new application must validate that infrastructure changes meet security policies before deployment (e.g., no open security groups). Which approach embeds this in the pipeline?",
      options: [
        "Policy-as-code checks such as CloudFormation Guard run in the pipeline before deploy.",
        "A security review carried out only after the change has gone live in production.",
        "Disabling the security checks in the pipeline so that releases ship faster.",
        "Occasional manual eyeballing of the templates by a reviewer before deploy."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Policy-as-code validation in the pipeline blocks noncompliant infrastructure before deployment.",
      topic: "Design deployment strategies",
      difficulty: "medium"
      },
      {
      id: "d2-q064",
      question:
        "SCENARIO: A new reporting workload runs heavy queries a few hours per day and must minimize warehouse cost outside those hours. Which approach is BEST?",
      options: [
        "A single Amazon RDS instance used for the petabyte-scale analytics workload.",
        "Amazon Redshift Serverless, or pause/resume, so capacity scales with query usage.",
        "An Amazon EMR cluster kept always on to serve the periodic reporting queries.",
        "A large provisioned Amazon Redshift cluster left running around the clock."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Redshift Serverless (or pause/resume) aligns cost with actual query usage for bursty reporting.",
      topic: "Determine cost-optimized solutions",
      difficulty: "medium"
      },
      {
      id: "d2-q065",
      question:
        "SCENARIO: A new app must restrict outbound traffic from Lambda functions to only approved endpoints for data exfiltration prevention. Which approach is BEST?",
      options: [
        "Run Lambda in a VPC with egress restricted via security groups and endpoints.",
        "Place the functions in public subnets with open outbound internet egress.",
        "Disable VPC integration for the functions so egress cannot be controlled.",
        "Allow all outbound traffic from the functions by default with no restrictions."
      ],
      answer: [0],
      type: "single",
      explanation:
        "VPC-attached Lambda with restricted egress (security groups, endpoints, controlled NAT) limits where functions can send data.",
      topic: "Determine security controls for new solutions",
      difficulty: "hard"
      },
      {
      id: "d2-q066",
      question:
        "SCENARIO: A new workload requires shared, high-throughput file storage for an ML training cluster reading the same dataset repeatedly. Which storage is BEST?",
      options: [
        "Instance store volumes on a single node holding the shared training data.",
        "A single Amazon EBS volume attached to one node of the training cluster.",
        "Amazon FSx for Lustre linked to Amazon S3 for high-throughput training data.",
        "Amazon S3 mounted directly as a block device on each training node."
      ],
      answer: [2],
      type: "single",
      explanation:
        "FSx for Lustre provides high-throughput, low-latency shared storage and integrates with S3 for ML training datasets.",
      topic: "Determine performance objectives",
      difficulty: "hard"
      },
      {
      id: "d2-q067",
      question:
        "SCENARIO: A new system must roll out changes to thousands of edge devices/accounts gradually and halt automatically if failures exceed a threshold. Which deployment capability supports this?",
      options: [
        "A rollout with no monitoring in place while the change is being applied.",
        "A deployment pushed to all targets at once with no stop conditions set.",
        "A manual deployment performed one device or account at a time by hand.",
        "A staged percentage-based rollout with automatic stop conditions on failure."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Percentage-based rollouts with automatic stop/rollback on alarm thresholds limit blast radius during large deployments.",
      topic: "Design deployment strategies",
      difficulty: "medium"
      },
      {
      id: "d2-q068",
      question:
        "SCENARIO: A new event-driven architecture must route different event types to different consumers with filtering, without consumers polling. Which service is BEST?",
      options: [
        "Amazon EventBridge with event pattern rules that route events to targets.",
        "Direct synchronous calls made from producers to each of the consumers.",
        "Amazon SES used to fan out the different event types to the consumers.",
        "A single Amazon SQS queue that every consumer polls for all event types."
      ],
      answer: [0],
      type: "single",
      explanation:
        "EventBridge rules filter and route events to the right targets, decoupling producers from consumers.",
      topic: "Design for reliability and high availability",
      difficulty: "medium"
      },
      {
      id: "d2-q069",
      question:
        "SCENARIO: A new public web app must encrypt traffic end to end, terminate TLS, and automatically renew certificates. Which combination is BEST? (Select TWO.)",
      options: [
        "Disable HTTPS to reduce overhead.",
        "Attach the ACM certificate to a CloudFront distribution or ALB HTTPS listener.",
        "Use AWS Certificate Manager to provision and auto-renew certificates.",
        "Generate self-signed certs and rotate manually.",
        "Store private keys in application code."
      ],
      answer: [1, 2],
      type: "multi",
      explanation:
        "ACM issues and auto-renews certificates; attaching them to CloudFront/ALB terminates TLS without manual key handling.",
      topic: "Determine security controls for new solutions",
      difficulty: "easy"
      },
      {
      id: "d2-q070",
      question:
        "SCENARIO: A new design must process a stream and deliver aggregated results to a dashboard with minimal latency and no server management. Which combination is BEST? (Select TWO.)",
      options: [
        "A single cron job on EC2.",
        "Amazon Kinesis Data Streams for ingestion.",
        "Amazon SES for aggregation.",
        "A manual nightly batch.",
        "Managed stream processing (e.g., Kinesis Data Analytics / managed Flink) for aggregation."
      ],
      answer: [1, 4],
      type: "multi",
      explanation:
        "Kinesis Data Streams plus managed stream processing aggregate data in near real time without managing servers.",
      topic: "Determine performance objectives",
      difficulty: "hard"
      },
      {
      id: "d2-q071",
      question:
        "SCENARIO: A new tenant-facing service must ensure one noisy tenant cannot consume all capacity and degrade others. Which approach is BEST?",
      options: [
        "Apply per-tenant throttling and quotas and isolate critical capacity by bulkheading.",
        "Disable rate limiting so that tenants are never throttled on the service.",
        "Give the single largest tenant unlimited priority over the shared capacity.",
        "Share one unbounded capacity pool across all tenants with no limits applied."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Per-tenant quotas and bulkheading prevent a single tenant from starving others of capacity.",
      topic: "Design for reliability and high availability",
      difficulty: "hard"
      },
      {
      id: "d2-q072",
      question:
        "SCENARIO: A new analytics dashboard reads aggregates that change hourly; the team wants to cut database load and cost from repeated identical queries. Which approach is BEST?",
      options: [
        "Query the primary database on every page load with no caching in place.",
        "Scale the database vertically only to handle the repeated identical queries.",
        "Cache the query results using ElastiCache or materialized views with a TTL.",
        "Disable the database indexes to speed up the repeated aggregate queries."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Caching hourly-changing aggregates with an appropriate TTL reduces repeated query load and cost.",
      topic: "Determine performance objectives",
      difficulty: "medium"
      },
      {
      id: "d2-q073",
      question:
        "SCENARIO: A new system must support a 1-hour RPO and a 2-hour RTO at moderate cost by keeping a scaled-down copy of core infrastructure running in a second Region. Which DR strategy is this?",
      options: [
        "Pilot light.",
        "Backup and restore.",
        "Warm standby.",
        "Multi-Region active-active."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Warm standby keeps a scaled-down but running copy in another Region, enabling faster recovery than pilot light at moderate cost.",
      topic: "Design solutions for business continuity",
      difficulty: "medium"
      },
      {
      id: "d2-q074",
      question:
        "SCENARIO: A new microservices platform needs service-to-service authentication and fine-grained authorization without managing custom token infrastructure. Which approach is reasonable on AWS?",
      options: [
        "Use one shared API key across every service for authentication and authorization.",
        "Allow all internal service-to-service calls without any authentication.",
        "Hardcode a shared secret into each service to authenticate the calls.",
        "Use IAM roles and SigV4, or mTLS via a service mesh, for service identity."
      ],
      answer: [3],
      type: "single",
      explanation:
        "IAM/SigV4 or mTLS via a service mesh provides service identity and authorization without bespoke token systems.",
      topic: "Determine security controls for new solutions",
      difficulty: "hard"
      },
      {
      id: "d2-q075",
      question:
        "SCENARIO: A new workload must minimize cold-start latency for a latency-critical Lambda endpoint during business hours. Which approach is BEST?",
      options: [
        "Reduce the function's memory to the minimum to lower the cold-start time.",
        "Increase the function timeout so it has longer to complete each invocation.",
        "Disable the function outside business hours to avoid paying for idle time.",
        "Configure provisioned concurrency for the function during business hours."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Provisioned concurrency keeps function instances warm, eliminating cold-start latency for critical endpoints.",
      topic: "Determine performance objectives",
      difficulty: "medium"
      }
    ]
  });

  QB.domains.push({
    id: "d3",
    name: "Domain 3: Continuous Improvement for Existing Solutions",
    weightPct: 25,
    topics: ["Determine a strategy to improve overall operational excellence","Determine a strategy to improve security","Determine a strategy to improve performance","Determine a strategy to improve reliability","Identify opportunities for cost optimizations"],
    questions: [
      {
      id: "d3-q001",
      question:
        "An existing application logs to local instance disks, making troubleshooting hard after instances terminate. Which improvement centralizes logs with minimal code change?",
      options: [
        "Increase the instance disk size so more log data can be retained locally.",
        "Continue storing the logs only on the local file system of each instance.",
        "Email the collected logs to the administrators on a nightly schedule.",
        "Install the CloudWatch agent to ship the logs to Amazon CloudWatch Logs."
      ],
      answer: [3],
      type: "single",
      explanation:
        "The CloudWatch agent forwards logs to CloudWatch Logs, centralizing and retaining them independent of instance lifecycle.",
      topic: "Determine a strategy to improve overall operational excellence",
      difficulty: "easy"
      },
      {
      id: "d3-q002",
      question:
        "An existing fleet uses long-lived IAM user access keys embedded in application code. Which change MOST improves the security posture?",
      options: [
        "Share a single access key across all of the applications in the fleet.",
        "Replace the embedded keys with IAM roles using EC2 instance profiles.",
        "Rotate the embedded access keys by hand on a monthly schedule.",
        "Move the keys into a public S3 bucket so the fleet can read them easily."
      ],
      answer: [1],
      type: "single",
      explanation:
        "IAM roles provide automatically rotated temporary credentials, eliminating long-lived embedded keys.",
      topic: "Determine a strategy to improve security",
      difficulty: "easy"
      },
      {
      id: "d3-q003",
      question:
        "An existing relational database is CPU-bound during read-heavy reporting that runs alongside transactional traffic. Which change improves performance MOST without altering the app's writes?",
      options: [
        "Increase the backup retention period for the database.",
        "Disable the Multi-AZ configuration on the database.",
        "Reduce the size of the database instance to cut cost.",
        "Add read replicas and direct the reporting queries to them."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Offloading read/reporting traffic to read replicas relieves the primary's CPU pressure while writes continue on the primary.",
      topic: "Determine a strategy to improve performance",
      difficulty: "medium"
      },
      {
      id: "d3-q004",
      question:
        "An existing single-AZ application suffered an outage when its AZ failed. Which change MOST improves reliability with the least redesign?",
      options: [
        "Add more EBS volumes to the existing single application instance.",
        "Move the application onto a single, larger instance for more capacity.",
        "Schedule nightly reboots of the instance to improve its reliability.",
        "Distribute instances across multiple AZs behind a load balancer with Auto Scaling."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Spreading across AZs behind a load balancer with Auto Scaling removes the single-AZ dependency and self-heals capacity.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "easy"
      },
      {
      id: "d3-q005",
      question:
        "An existing environment runs many oversized EC2 instances at low utilization. Which action provides the BEST data-driven cost reduction?",
      options: [
        "Apply the rightsizing recommendations from AWS Compute Optimizer.",
        "Increase the size of every instance to provide extra headroom.",
        "Disable monitoring on the instances to reduce the overall cost.",
        "Purchase additional On-Demand capacity to cover the current usage."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Compute Optimizer analyzes utilization and recommends rightsized instance types, reducing waste with data backing the change.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "easy"
      },
      {
      id: "d3-q006",
      question:
        "An existing manual runbook requires operators to remediate a common incident by hand. Which improvement increases operational excellence?",
      options: [
        "Increase the alarm thresholds so that the alerts fire much less often.",
        "Automate the remediation with Systems Manager Automation runbooks on alarms.",
        "Disable the alarms so that the recurring incident no longer pages anyone.",
        "Add more operators to the on-call rotation to handle the incident faster."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Systems Manager Automation runbooks codify and automate remediation, reducing manual toil and mean time to repair.",
      topic: "Determine a strategy to improve overall operational excellence",
      difficulty: "medium"
      },
      {
      id: "d3-q007",
      question:
        "An existing public-facing web application is increasingly targeted by SQL injection and bad bots. Which addition improves security with the least application change?",
      options: [
        "Increase the number of Amazon EC2 instances serving the application.",
        "Move the database into a private subnet and leave the rest unchanged.",
        "Disable application logging to reduce the noise from the attacks.",
        "Place AWS WAF with managed rule groups in front of the application."
      ],
      answer: [3],
      type: "single",
      explanation:
        "AWS WAF with managed rules filters common web exploits like SQL injection and bad bots at the edge or load balancer.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q008",
      question:
        "An existing global website has high latency for distant users because all requests hit the origin. Which change improves performance MOST?",
      options: [
        "Add Amazon CloudFront caching in front of the existing origin.",
        "Disable response compression to reduce the processing overhead.",
        "Increase the size of the origin instance without other changes.",
        "Move the origin into a physically smaller AWS Region instead."
      ],
      answer: [0],
      type: "single",
      explanation:
        "CloudFront caches content close to users at edge locations, cutting latency and origin load.",
      topic: "Determine a strategy to improve performance",
      difficulty: "easy"
      },
      {
      id: "d3-q009",
      question:
        "An existing batch system occasionally loses jobs when a worker crashes mid-processing. Which change MOST improves reliability?",
      options: [
        "Increase the size of the worker instances to make crashes less likely.",
        "Decouple producers and workers with Amazon SQS using visibility timeout and a DLQ.",
        "Run all of the jobs synchronously on a single instance to avoid loss.",
        "Remove retries from the workers so that duplicate jobs never occur."
      ],
      answer: [1],
      type: "single",
      explanation:
        "With SQS, a crashed worker's message becomes visible again after the visibility timeout and is retried; persistent failures go to a DLQ.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "medium"
      },
      {
      id: "d3-q010",
      question:
        "An existing workload stores rarely accessed data on S3 Standard, driving up cost. Which change reduces cost while keeping millisecond access when needed?",
      options: [
        "Use S3 Intelligent-Tiering to move objects between access tiers automatically.",
        "Delete the rarely accessed data to remove its storage cost entirely.",
        "Move all of the data into S3 Glacier Deep Archive immediately to save cost.",
        "Copy the rarely accessed data onto Amazon EBS volumes instead of S3."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Intelligent-Tiering moves objects between frequent and infrequent access tiers automatically based on usage, lowering cost without retrieval delays for active data.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "medium"
      },
      {
      id: "d3-q011",
      question:
        "An existing multi-account setup lacks visibility into who changed what across accounts. Which improvement provides a centralized, tamper-resistant audit trail?",
      options: [
        "Enable CloudTrail only in the management account for the whole organization.",
        "Ask each team in the organization to keep their own manual change log.",
        "Enable an organization trail in CloudTrail delivering to a central, restricted bucket.",
        "Rely on Amazon CloudWatch dashboards to surface who changed what."
      ],
      answer: [2],
      type: "single",
      explanation:
        "An organization CloudTrail captures API activity across all accounts into a central, access-restricted bucket for a unified audit trail.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q012",
      question:
        "An existing API experiences cascading failures when a downstream dependency slows down. Which resilience pattern MOST improves stability?",
      options: [
        "Increase the thread pools without any limit to absorb the slow responses.",
        "Implement timeouts, retries with backoff, and circuit breaking toward the dependency.",
        "Disable the health checks so slow instances are not removed from service.",
        "Remove all of the timeouts so that requests are always allowed to complete."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Timeouts, capped retries with backoff, and circuit breaking prevent a slow dependency from exhausting resources and cascading failures.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "hard"
      },
      {
      id: "d3-q013",
      question:
        "An existing data warehouse query workload is slow during peak reporting. Which Redshift improvement increases performance for concurrent queries?",
      options: [
        "Disable result caching so that every query is recomputed from scratch.",
        "Reduce the number of nodes in the Amazon Redshift cluster to cut cost.",
        "Convert all of the tables to a single random distribution key for balance.",
        "Enable Concurrency Scaling to add transient capacity during query bursts."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Concurrency Scaling adds transient clusters during query spikes, improving throughput for concurrent reporting queries.",
      topic: "Determine a strategy to improve performance",
      difficulty: "medium"
      },
      {
      id: "d3-q014",
      question:
        "An existing organization wants to detect and automatically remediate noncompliant resources (e.g., unencrypted volumes). Which combination achieves this? (Select TWO.)",
      options: [
        "AWS Config rules to detect noncompliance.",
        "Turning off Config to reduce noise.",
        "Automatic remediation via Systems Manager Automation documents triggered by Config.",
        "Manual quarterly audits only.",
        "A spreadsheet of known issues."
      ],
      answer: [0, 2],
      type: "multi",
      explanation:
        "Config detects noncompliant resources and can invoke SSM Automation remediation documents to fix them automatically.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q015",
      question:
        "An existing workload runs 24/7 on On-Demand instances with stable, predictable usage. Which change reduces cost the MOST without affecting availability?",
      options: [
        "Add more On-Demand instances to the fleet to handle the steady usage.",
        "Move the entire steady workload onto Amazon EC2 Spot Instances.",
        "Increase the instance sizes to provide extra headroom for the workload.",
        "Purchase Savings Plans or Reserved Instances matching the steady usage."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Committing to Savings Plans or RIs for steady 24/7 usage yields significant discounts without changing availability.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "easy"
      },
      {
      id: "d3-q016",
      question:
        "An existing deployment process causes occasional outages because changes are applied directly to production. Which operational improvement reduces this risk?",
      options: [
        "Introduce staged environments and automated CI/CD with approvals before production.",
        "Continue applying changes manually but train the team to do it faster.",
        "Restrict deployments so they only ever happen on Fridays each week.",
        "Stop running tests before releases so that changes ship more quickly."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Staged environments plus automated pipelines with approvals catch issues before production and make releases repeatable and reversible.",
      topic: "Determine a strategy to improve overall operational excellence",
      difficulty: "easy"
      },
      {
      id: "d3-q017",
      question:
        "An existing application's NAT gateway data processing charges are high because instances download large packages from the internet frequently. Which change reduces cost?",
      options: [
        "Increase the instance sizes so that fewer downloads are needed overall.",
        "Add more NAT gateways to spread the data processing load across them.",
        "Use VPC endpoints for AWS services and cache packages internally to cut NAT traffic.",
        "Move the instances into public subnets with public IPs, ignoring the security risk."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Routing AWS-service traffic through VPC endpoints and reducing internet downloads lowers NAT gateway data processing costs.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "hard"
      },
      {
      id: "d3-q018",
      question:
        "An existing system's database failover takes too long, breaching the reliability target. Which change reduces failover time?",
      options: [
        "Disable automated backups so they do not interfere with the failover.",
        "Move the database to a single-AZ deployment to simplify the failover.",
        "Increase the backup window so that backups finish before the failover.",
        "Migrate to Amazon Aurora, which fails over faster than traditional RDS Multi-AZ."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Aurora typically fails over faster than standard RDS Multi-AZ by promoting a replica, improving the reliability target.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "medium"
      },
      {
      id: "d3-q019",
      question:
        "An existing monitoring setup only alerts on infrastructure metrics, missing user-facing latency issues. Which improvement provides end-user experience visibility?",
      options: [
        "Reduce the metric retention period to lower the monitoring overhead.",
        "Configure alerting that fires only on CPU utilization for the instances.",
        "Disable detailed monitoring on the resources to cut the monitoring noise.",
        "Add CloudWatch Synthetics canaries and RUM to monitor user-facing endpoints."
      ],
      answer: [3],
      type: "single",
      explanation:
        "CloudWatch Synthetics canaries probe endpoints proactively and RUM captures real user performance, surfacing user-facing latency.",
      topic: "Determine a strategy to improve performance",
      difficulty: "medium"
      },
      {
      id: "d3-q020",
      question:
        "An existing set of accounts has inconsistent security configurations. Which service provides a centralized view of security findings and prioritized recommendations across accounts?",
      options: [
        "A manually maintained wiki page tracking the security configurations.",
        "Amazon CloudWatch dashboards built per account to view the findings.",
        "AWS Security Hub with organization-wide aggregation of the findings.",
        "AWS Cost Explorer reviewed to understand the security posture gaps."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Security Hub aggregates and prioritizes findings from multiple services across accounts, giving a centralized security posture view.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q021",
      question:
        "An existing Lambda function is occasionally throttled during traffic spikes, causing errors. Which change improves reliability for critical invocations?",
      options: [
        "Reduce the function timeout so throttled invocations fail faster.",
        "Remove the error handling so the function does not retry on throttling.",
        "Configure reserved concurrency plus provisioned concurrency for critical paths.",
        "Increase the deployment package size to give the function more capacity."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Reserved concurrency guarantees capacity for the function, and provisioned concurrency reduces cold-start latency for critical paths.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "hard"
      },
      {
      id: "d3-q022",
      question:
        "An existing organization wants to continuously identify idle and underutilized resources to cut waste. Which AWS source provides these recommendations broadly?",
      options: [
        "AWS WAF logs analyzed to find where resources are being underused.",
        "Amazon GuardDuty used to surface the idle and underutilized resources.",
        "Amazon SNS topics configured to report on the underutilized resources.",
        "AWS Trusted Advisor cost optimization checks, with Cost Explorer recommendations."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Trusted Advisor surfaces idle/underutilized resources and cost optimization checks; Cost Explorer adds rightsizing/Savings Plans guidance.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "easy"
      },
      {
      id: "d3-q023",
      question:
        "An existing tightly coupled monolith is hard to deploy and scale. Which strategy improves operational excellence and scalability over time?",
      options: [
        "Incrementally decompose into microservices using the strangler-fig pattern.",
        "Rewrite the entire monolith at once directly in the production environment.",
        "Stop deploying changes to the monolith so it remains stable over time.",
        "Add more memory to the existing monolith without any other changes."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Incremental decomposition (strangler-fig) lets teams migrate functionality gradually, improving deployability and scalability with lower risk.",
      topic: "Determine a strategy to improve overall operational excellence",
      difficulty: "hard"
      },
      {
      id: "d3-q024",
      question:
        "An existing high-throughput application makes many small writes to a single DynamoDB partition key, causing throttling. Which change improves performance?",
      options: [
        "Use a single global secondary index to handle all of the reads and writes.",
        "Switch the application to use strongly consistent reads exclusively.",
        "Reduce the provisioned capacity on the table to relieve the throttling.",
        "Redesign the key schema to spread writes across more partition key values."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Spreading writes across more distinct partition key values prevents hot partitions and throttling, improving throughput.",
      topic: "Determine a strategy to improve performance",
      difficulty: "hard"
      },
      {
      id: "d3-q025",
      question:
        "An existing application stores secrets in plaintext environment variables. Beyond moving to a secrets store, which additional improvement strengthens security?",
      options: [
        "Share the secrets across all of the functions for convenience and reuse.",
        "Disable encryption on the secrets to reduce the retrieval latency.",
        "Log the secret values to CloudWatch so they can be used for debugging.",
        "Enable rotation and restrict access with least-privilege IAM and KMS key policies."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Rotation plus least-privilege access and tightly scoped KMS key policies limit exposure even if one component is compromised.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q026",
      question:
        "SCENARIO: An existing app stores all logs on EC2 instances. After autoscaling terminates instances, troubleshooting data is lost. Which change improves operations with the least code change?",
      options: [
        "Email the logs to administrators before the instances terminate.",
        "Install the CloudWatch agent to centralize the logs in CloudWatch Logs.",
        "Increase the EBS volume size so that more log data can be retained.",
        "Take nightly AMIs of the instances to preserve their log files."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Centralizing logs in CloudWatch Logs via the agent preserves troubleshooting data beyond instance lifecycle.",
      topic: "Determine a strategy to improve overall operational excellence",
      difficulty: "easy"
      },
      {
      id: "d3-q027",
      question:
        "SCENARIO: An existing public app stores database credentials in a config file in the repo. Security wants to remediate quickly. Which change is BEST?",
      options: [
        "Move the credentials to AWS Secrets Manager and grant the app IAM access at runtime.",
        "Move the configuration file containing the credentials to a private S3 bucket.",
        "Obfuscate the credentials within the repository so they are harder to read.",
        "Rotate the credentials regularly but continue to store them in the repository."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Secrets Manager removes credentials from the repo, encrypts them, and supports rotation with IAM-controlled retrieval.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q028",
      question:
        "SCENARIO: An existing reporting database slows transactional traffic during business hours due to heavy analytical queries. Which change improves performance with minimal rework?",
      options: [
        "Increase the backup retention period on the reporting database.",
        "Add read replicas and route the analytical and reporting queries to them.",
        "Add more indexes to every table without analyzing the query patterns.",
        "Disable the Multi-AZ configuration to free up database resources."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Offloading reporting to read replicas relieves the primary so transactional traffic is unaffected.",
      topic: "Determine a strategy to improve performance",
      difficulty: "medium"
      },
      {
      id: "d3-q029",
      question:
        "SCENARIO: An existing single-AZ application failed when its AZ went down. The team wants improved reliability without a major rewrite. Which change is BEST?",
      options: [
        "Reboot the instance every night to keep the application healthy.",
        "Add more EBS volumes to the existing instance to improve reliability.",
        "Spread instances across multiple AZs behind a load balancer with Auto Scaling.",
        "Move the application onto a single, bigger instance for resilience."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Multi-AZ distribution with a load balancer and Auto Scaling removes the single-AZ dependency.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "easy"
      },
      {
      id: "d3-q030",
      question:
        "SCENARIO: An existing account has many low-utilization EC2 instances. Finance wants data-driven rightsizing. Which service provides recommendations?",
      options: [
        "Amazon SES reports used to surface the rightsizing opportunities.",
        "AWS Compute Optimizer for data-driven rightsizing recommendations.",
        "Amazon GuardDuty used to identify the underutilized instances.",
        "AWS WAF analyzed to find the instances with low utilization."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Compute Optimizer analyzes utilization and recommends rightsized instance types, reducing waste.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "easy"
      },
      {
      id: "d3-q031",
      question:
        "SCENARIO: An existing manual incident-response process is slow and error-prone. The team wants consistent, automated remediation triggered by alarms. Which approach is BEST?",
      options: [
        "Document the remediation steps in a wiki for engineers to follow by hand.",
        "Add more on-call engineers to handle the incident more consistently.",
        "Raise the alarm thresholds so that fewer alerts fire for the incident.",
        "Use Systems Manager Automation runbooks invoked by CloudWatch alarms."
      ],
      answer: [3],
      type: "single",
      explanation:
        "SSM Automation runbooks triggered by alarms standardize and speed remediation, reducing manual error.",
      topic: "Determine a strategy to improve overall operational excellence",
      difficulty: "medium"
      },
      {
      id: "d3-q032",
      question:
        "SCENARIO: An existing web app is hit by SQL injection and bot traffic. Security wants protection without rewriting the app. Which change is BEST?",
      options: [
        "Add AWS WAF with managed rule groups in front of the application.",
        "Disable the application logging to cut down on the attack noise.",
        "Increase the number of instances serving the application traffic.",
        "Move the database into a private subnet and change nothing else."
      ],
      answer: [0],
      type: "single",
      explanation:
        "WAF managed rules filter SQL injection and bots at the edge/load balancer without code changes.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q033",
      question:
        "SCENARIO: An existing global site is slow for distant users because all requests reach the origin directly. Which change improves performance MOST?",
      options: [
        "Disable response compression to lower the processing overhead.",
        "Add Amazon CloudFront caching in front of the application origin.",
        "Move the origin into a smaller AWS Region to reduce the latency.",
        "Increase the origin instance size without any other change."
      ],
      answer: [1],
      type: "single",
      explanation:
        "CloudFront caches at edge locations near users, lowering latency and origin load.",
      topic: "Determine a strategy to improve performance",
      difficulty: "easy"
      },
      {
      id: "d3-q034",
      question:
        "SCENARIO: An existing batch processor loses jobs when workers crash mid-task. Which change MOST improves reliability?",
      options: [
        "Increase the size of the worker instances to make crashes less likely.",
        "Decouple with SQS using visibility timeout and a DLQ for poison messages.",
        "Remove retries from the workers so that duplicates never get created.",
        "Run the batch jobs synchronously on a single instance to avoid loss."
      ],
      answer: [1],
      type: "single",
      explanation:
        "With SQS, a crashed worker's message reappears after the visibility timeout and is retried; persistent failures go to a DLQ.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "medium"
      },
      {
      id: "d3-q035",
      question:
        "SCENARIO: An existing workload stores rarely accessed data in S3 Standard, inflating cost, but occasionally needs immediate access. Which change reduces cost while keeping fast access?",
      options: [
        "Copy to EBS.",
        "Use S3 Intelligent-Tiering.",
        "Delete the data.",
        "Move everything to Glacier Deep Archive."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Intelligent-Tiering moves objects between tiers automatically based on access, cutting cost without retrieval delays for active data.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "medium"
      },
      {
      id: "d3-q036",
      question:
        "SCENARIO: An existing multi-account org lacks a unified change audit trail. Which change provides centralized, tamper-resistant logging?",
      options: [
        "Enable CloudTrail only in the management account for the organization.",
        "Rely on dashboards to provide the unified change audit trail.",
        "Have each team keep its own log of changes across the accounts.",
        "Configure an organization CloudTrail delivering to a central, restricted bucket with Object Lock."
      ],
      answer: [3],
      type: "single",
      explanation:
        "An organization trail to a central, immutable bucket gives a unified, tamper-resistant audit trail across accounts.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q037",
      question:
        "SCENARIO: An existing API cascades into failure when a downstream service slows. Which resilience improvement MOST helps?",
      options: [
        "Remove all of the timeouts so requests are never cut short by a timeout.",
        "Add timeouts, bounded retries with backoff, and a circuit breaker toward the dependency.",
        "Disable the health checks so unhealthy instances stay in rotation.",
        "Increase the thread pools without any limit to absorb the slow calls."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Timeouts, capped retries with backoff, and circuit breaking stop a slow dependency from exhausting resources.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "hard"
      },
      {
      id: "d3-q038",
      question:
        "SCENARIO: An existing Redshift warehouse slows under concurrent reporting at peak. Which change improves concurrency performance?",
      options: [
        "Randomize distribution keys.",
        "Reduce node count.",
        "Enable Concurrency Scaling.",
        "Disable result caching."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Concurrency Scaling adds transient capacity during query spikes to maintain performance.",
      topic: "Determine a strategy to improve performance",
      difficulty: "medium"
      },
      {
      id: "d3-q039",
      question:
        "SCENARIO: An existing org wants to detect AND auto-remediate noncompliant resources like unencrypted EBS volumes. Which combination is BEST? (Select TWO.)",
      options: [
        "A static spreadsheet.",
        "Systems Manager Automation remediation triggered by Config.",
        "AWS Config rules to detect noncompliance.",
        "Turning off Config.",
        "Manual quarterly audits only."
      ],
      answer: [1, 2],
      type: "multi",
      explanation:
        "Config detects noncompliance and SSM Automation remediation fixes it automatically.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q040",
      question:
        "SCENARIO: An existing steady 24/7 fleet runs entirely On-Demand. Finance wants cost reduction without availability impact. Which change is BEST?",
      options: [
        "Add more On-Demand instances to the fleet to handle the steady load.",
        "Move the entire steady fleet onto Amazon EC2 Spot Instances to cut cost.",
        "Increase the instance sizes across the fleet to provide more headroom.",
        "Purchase Savings Plans or Reserved Instances that match the steady usage."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Committing to steady usage via Savings Plans/RIs cuts cost without affecting availability.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "easy"
      },
      {
      id: "d3-q041",
      question:
        "SCENARIO: An existing deployment applies changes directly to production, causing periodic outages. Which operational improvement reduces this risk MOST?",
      options: [
        "Introduce staged environments and automated CI/CD with approvals before production.",
        "Restrict deployments so that they only happen on Fridays each week.",
        "Keep applying changes manually to production but do it more quickly.",
        "Stop running tests before releases so that changes ship to users faster."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Staged environments and automated pipelines with approvals catch issues before production.",
      topic: "Determine a strategy to improve overall operational excellence",
      difficulty: "easy"
      },
      {
      id: "d3-q042",
      question:
        "SCENARIO: An existing app's NAT gateway data processing charges are high due to frequent large internet downloads from instances. Which change reduces cost?",
      options: [
        "Move the instances into public subnets, accepting the reduced security.",
        "Add more NAT gateways to spread the data processing charges across them.",
        "Increase the instance sizes so that fewer internet downloads are needed.",
        "Use VPC endpoints for AWS services and host packages internally to cut NAT traffic."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Routing AWS-service traffic through endpoints and reducing internet downloads lowers NAT data processing cost.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "hard"
      },
      {
      id: "d3-q043",
      question:
        "SCENARIO: An existing RDS Multi-AZ database's failover time breaches the reliability SLA. Which change reduces failover time?",
      options: [
        "Move the database to a single-AZ deployment to simplify failover.",
        "Migrate to Amazon Aurora, which generally fails over faster by promoting a replica.",
        "Increase the backup window so backups finish ahead of any failover.",
        "Disable automated backups so they do not slow down the failover."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Aurora typically fails over faster than standard RDS Multi-AZ, improving the reliability target.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "medium"
      },
      {
      id: "d3-q044",
      question:
        "SCENARIO: Existing monitoring alerts only on CPU and memory, missing user-facing latency regressions. Which improvement adds end-user visibility?",
      options: [
        "Configure alerting that fires only on disk utilization for the instances.",
        "Reduce the metric retention period to lower the monitoring overhead.",
        "Disable detailed monitoring on the resources to reduce the noise.",
        "Add CloudWatch Synthetics canaries and RUM to monitor user-facing endpoints."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Synthetics canaries probe endpoints and RUM captures real user performance, surfacing latency regressions.",
      topic: "Determine a strategy to improve performance",
      difficulty: "medium"
      },
      {
      id: "d3-q045",
      question:
        "SCENARIO: An existing set of accounts has inconsistent security configurations and findings are scattered. Which service centralizes and prioritizes them?",
      options: [
        "A manually maintained wiki page describing the security posture.",
        "Amazon CloudWatch dashboards built per account to track findings.",
        "AWS Security Hub with organization-wide aggregation of the findings.",
        "AWS Cost Explorer reviewed to centralize the security findings."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Security Hub aggregates and prioritizes findings across accounts for a unified posture view.",
      topic: "Determine a strategy to improve security",
      difficulty: "easy"
      },
      {
      id: "d3-q046",
      question:
        "SCENARIO: An existing Lambda is throttled during spikes, causing errors for a critical path. Which change improves reliability for that path?",
      options: [
        "Increase the deployment package size to give the function more room.",
        "Reduce the function timeout so that throttled invocations fail sooner.",
        "Configure reserved concurrency plus provisioned concurrency for the critical path.",
        "Remove the error handling so the function does not retry on throttling."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Reserved concurrency guarantees capacity and provisioned concurrency reduces cold-starts for critical paths.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "hard"
      },
      {
      id: "d3-q047",
      question:
        "SCENARIO: An existing org wants ongoing identification of idle load balancers, unattached EBS, and old snapshots across accounts. Which source provides this broadly?",
      options: [
        "Amazon GuardDuty used to identify the idle and unattached resources.",
        "Amazon SNS topics configured to report on the idle resources.",
        "AWS WAF logs analyzed to surface the underutilized resources.",
        "AWS Trusted Advisor cost optimization checks run across the organization."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Trusted Advisor flags idle/unattached resources and other cost optimization opportunities.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "easy"
      },
      {
      id: "d3-q048",
      question:
        "SCENARIO: An existing tightly coupled monolith is hard to deploy and scale. Which strategy improves operability with lower risk?",
      options: [
        "Incrementally decompose using the strangler-fig pattern behind an API layer.",
        "Rewrite the entire monolith at once directly in the production environment.",
        "Stop deploying changes to the monolith so that it stays stable.",
        "Add more memory to the existing monolith without any other change."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Incremental decomposition (strangler-fig) migrates functionality gradually, improving deployability with lower risk.",
      topic: "Determine a strategy to improve overall operational excellence",
      difficulty: "hard"
      },
      {
      id: "d3-q049",
      question:
        "SCENARIO: An existing DynamoDB table throttles because many writes hit one partition key. Which change improves performance?",
      options: [
        "Add a single global secondary index to handle all of the access.",
        "Reduce the provisioned capacity on the table to relieve the throttling.",
        "Redesign the key schema to spread writes across more partition key values.",
        "Switch the application to use strongly consistent reads exclusively."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Spreading writes across more partition key values eliminates hot partitions and throttling.",
      topic: "Determine a strategy to improve performance",
      difficulty: "hard"
      },
      {
      id: "d3-q050",
      question:
        "SCENARIO: An existing app stores secrets in plaintext env vars. Beyond moving to a secrets store, which additional change strengthens security MOST?",
      options: [
        "Disable encryption on the secrets to reduce the retrieval latency.",
        "Log the secret values for debugging when the functions run.",
        "Share the secrets across all of the functions for easier management.",
        "Enable rotation and apply least-privilege IAM and scoped KMS key policies."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Rotation plus least-privilege access and scoped KMS policies limit exposure if a component is compromised.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q051",
      question:
        "SCENARIO: An existing app's database is approaching storage and IOPS limits, causing slow queries during peak. Which change improves performance with least disruption?",
      options: [
        "Scale storage and IOPS, such as gp3 or io2, and add read replicas for reads.",
        "Disable backups on the database to free up IOPS during peak periods.",
        "Move the database to a single-AZ deployment to improve its performance.",
        "Delete historical data from the database without analyzing the impact."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Provisioning higher IOPS/storage and offloading reads to replicas relieves peak pressure with minimal disruption.",
      topic: "Determine a strategy to improve performance",
      difficulty: "medium"
      },
      {
      id: "d3-q052",
      question:
        "SCENARIO: An existing app uses one large region-locked deployment. Leadership wants to improve reliability against Regional failure incrementally. Which first step is reasonable?",
      options: [
        "Do nothing until a full active-active rewrite of the system is funded.",
        "Move the workload onto a single, larger instance for more resilience.",
        "Implement backups and replication to a second Region as a pilot light foundation.",
        "Disable the Multi-AZ configuration to simplify the deployment."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Establishing cross-Region backups/replication (pilot light) is a practical incremental step toward Regional resilience.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "medium"
      },
      {
      id: "d3-q053",
      question:
        "SCENARIO: An existing org wants automated detection of unexpected spend increases per service. Which service is BEST?",
      options: [
        "Amazon Inspector used to detect the unexpected increases in spend.",
        "AWS Config evaluated to find the source of the cost increases.",
        "Amazon Macie used to identify which service drove the spend change.",
        "AWS Cost Anomaly Detection for automated spend-change detection per service."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Cost Anomaly Detection uses ML to flag unexpected spend changes and alert owners.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "easy"
      },
      {
      id: "d3-q054",
      question:
        "SCENARIO: An existing app's deployments occasionally fail and leave the system in a broken state with no quick recovery. Which deployment improvement helps MOST?",
      options: [
        "Adopt blue/green deployments with automated rollback when a release fails.",
        "Deploy changes in place during business hours to catch issues sooner.",
        "Deploy less frequently but in larger batches to reduce the risk window.",
        "Remove the health checks so deployments are not blocked by them."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Blue/green with automated rollback lets a failed deployment revert instantly to the healthy environment.",
      topic: "Determine a strategy to improve overall operational excellence",
      difficulty: "medium"
      },
      {
      id: "d3-q055",
      question:
        "SCENARIO: An existing fleet uses long-lived IAM access keys for cross-account access. Security wants to eliminate them. Which change is BEST?",
      options: [
        "Store the access keys in a shared S3 bucket for cross-account use.",
        "Email the access keys to the other account on a quarterly schedule.",
        "Use cross-account IAM role assumption instead of long-lived access keys.",
        "Lengthen the access keys so that they are harder to compromise."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Cross-account role assumption provides temporary credentials, removing long-lived keys.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q056",
      question:
        "SCENARIO: An existing high-read app repeatedly queries the same hot data, overloading the database. Which change reduces load and latency MOST?",
      options: [
        "Add an Amazon ElastiCache caching layer in front of the database.",
        "Increase the database storage size without any other changes.",
        "Move the application's data into Amazon S3 to offload the database.",
        "Disable connection pooling so each request opens a new connection."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Caching hot reads in ElastiCache lowers database load and latency for repeated queries.",
      topic: "Determine a strategy to improve performance",
      difficulty: "easy"
      },
      {
      id: "d3-q057",
      question:
        "SCENARIO: An existing org cannot tell which team owns runaway costs because resources are untagged. Which improvement enables cost attribution going forward?",
      options: [
        "Delete the untagged resources without reviewing what they are first.",
        "Guess the ownership of resources manually at the end of each month.",
        "Disable cost allocation tags so that tagging is no longer required.",
        "Enforce tagging via tag policies and SCPs and activate cost allocation tags."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Enforced tagging plus activated cost allocation tags enable accurate, ongoing cost attribution.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "medium"
      },
      {
      id: "d3-q058",
      question:
        "SCENARIO: An existing service experiences correlated failures because all components depend on one shared component. Which redesign principle reduces systemic risk?",
      options: [
        "Remove redundancy from the system to reduce the number of components.",
        "Scale the single shared component vertically rather than partitioning it.",
        "Centralize the design further behind one shared component for simplicity.",
        "Partition into cells or bulkheads so a failure is contained rather than global."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Cell/bulkhead partitioning contains failures to one partition instead of affecting everyone.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "hard"
      },
      {
      id: "d3-q059",
      question:
        "SCENARIO: An existing team manually patches OS on dozens of instances inconsistently. Which improvement standardizes and automates patching?",
      options: [
        "Disable patching on the instances to avoid any downtime from updates.",
        "Use AWS Systems Manager Patch Manager with scheduled maintenance windows.",
        "Patch each instance by hand by connecting over SSH to apply updates.",
        "Rebuild the instances by hand each month to apply the latest patches."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Patch Manager automates and standardizes patching across instances via maintenance windows.",
      topic: "Determine a strategy to improve overall operational excellence",
      difficulty: "easy"
      },
      {
      id: "d3-q060",
      question:
        "SCENARIO: An existing app over-provisions DynamoDB throughput for steady traffic, wasting cost, with occasional spikes. Which change optimizes cost?",
      options: [
        "Disable auto scaling so the table holds a fixed amount of capacity.",
        "Set the provisioned capacity to the maximum observed peak permanently.",
        "Move the workload onto a single Amazon RDS instance to cut cost.",
        "Use DynamoDB on-demand or auto scaling so capacity matches actual traffic."
      ],
      answer: [3],
      type: "single",
      explanation:
        "On-demand or auto scaling aligns DynamoDB capacity (and cost) with actual traffic, including spikes.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "medium"
      },
      {
      id: "d3-q061",
      question:
        "SCENARIO: An existing app's security group allows broad inbound access that grew over time. Security wants to detect and tighten such rules across accounts. Which combination is BEST? (Select TWO.)",
      options: [
        "Open all ports for simplicity.",
        "Rely on manual review only.",
        "Use AWS Firewall Manager to centrally enforce security group policies.",
        "Use AWS Config rules to detect overly permissive security groups.",
        "Disable Config to reduce noise."
      ],
      answer: [2, 3],
      type: "multi",
      explanation:
        "Config detects permissive rules and Firewall Manager enforces standardized security group policies across accounts.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q062",
      question:
        "SCENARIO: An existing static website is served from EC2 instances, incurring ongoing compute cost. Which change reduces cost while improving scalability?",
      options: [
        "Move the static site onto larger Amazon EC2 instances to scale it.",
        "Host the static site in Amazon S3 and serve via CloudFront, removing the fleet.",
        "Add more Amazon EC2 instances to the fleet serving the static site.",
        "Run the static site on Dedicated Hosts reserved for the workload."
      ],
      answer: [1],
      type: "single",
      explanation:
        "S3 static hosting with CloudFront removes server cost and scales globally.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "easy"
      },
      {
      id: "d3-q063",
      question:
        "SCENARIO: An existing app's data transfer costs are high due to chatty cross-AZ microservice calls. Which change reduces cost while keeping multi-AZ resilience?",
      options: [
        "Collapse all of the services into a single Availability Zone to cut transfer.",
        "Increase the instance sizes to reduce the number of cross-AZ calls.",
        "Remove the load balancer so that traffic no longer crosses zones.",
        "Prefer same-AZ routing for service calls while keeping multi-AZ capacity for failover."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Same-AZ routing reduces cross-AZ transfer charges while multi-AZ deployment preserves resilience.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "hard"
      },
      {
      id: "d3-q064",
      question:
        "SCENARIO: An existing org wants to verify resilience by safely injecting failures into production-like environments. Which service supports this?",
      options: [
        "Amazon Macie used to find sensitive data exposed during failures.",
        "Amazon Inspector used to assess the resilience of the workload.",
        "AWS Budgets used to track the cost of the resilience experiments.",
        "AWS Fault Injection Service for safely injecting failures into the environment."
      ],
      answer: [3],
      type: "single",
      explanation:
        "FIS runs controlled fault-injection experiments to validate and improve resilience.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "medium"
      },
      {
      id: "d3-q065",
      question:
        "SCENARIO: An existing app relies on a single NAT gateway in one AZ; an AZ outage broke outbound access for all subnets. Which change improves reliability?",
      options: [
        "Use one larger NAT gateway shared across all of the private subnets.",
        "Move all of the instances into public subnets to restore outbound access.",
        "Deploy a NAT gateway per AZ and route each private subnet to its same-AZ gateway.",
        "Remove outbound internet access entirely so the dependency disappears."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Per-AZ NAT gateways remove the single-AZ dependency for outbound traffic.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "medium"
      },
      {
      id: "d3-q066",
      question:
        "SCENARIO: An existing team lacks visibility into why a deployment degraded performance. Which improvement provides distributed request tracing?",
      options: [
        "Disable logging on the services to reduce the troubleshooting noise.",
        "Increase the instance count to rule out capacity as the cause.",
        "Enable AWS X-Ray or OpenTelemetry tracing across the services for visibility.",
        "Add more CPU utilization alarms to detect the performance regression."
      ],
      answer: [2],
      type: "single",
      explanation:
        "X-Ray/OpenTelemetry tracing reveals latency across service hops, pinpointing performance regressions.",
      topic: "Determine a strategy to improve performance",
      difficulty: "medium"
      },
      {
      id: "d3-q067",
      question:
        "SCENARIO: An existing workload's backups reside in the same account and could be deleted by a compromised admin. Which change improves resilience of backups?",
      options: [
        "Keep the backups in the same bucket and rely on versioning for protection.",
        "Copy backups to a separate, locked-down account using AWS Backup with vault lock.",
        "Store the backups on the same EBS volume that holds the production data.",
        "Email the backup files to administrators so a copy exists elsewhere."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Cross-account AWS Backup with Vault Lock isolates backups from a compromised production admin.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "hard"
      },
      {
      id: "d3-q068",
      question:
        "SCENARIO: An existing app has no alerting on error-rate spikes, so issues are found by users. Which improvement provides proactive detection?",
      options: [
        "Create CloudWatch alarms on error-rate and latency metrics with notifications.",
        "Wait for users to complain before investigating the error-rate spikes.",
        "Disable the metrics on the application to reduce the monitoring cost.",
        "Increase the log retention period without adding any alerting."
      ],
      answer: [0],
      type: "single",
      explanation:
        "CloudWatch alarms on error/latency metrics detect problems before users report them.",
      topic: "Determine a strategy to improve overall operational excellence",
      difficulty: "easy"
      },
      {
      id: "d3-q069",
      question:
        "SCENARIO: An existing analytics workload re-scans entire S3 datasets per query, driving up Athena cost. Which change reduces cost MOST?",
      options: [
        "Disable the Glue Data Catalog to reduce the cost of each query.",
        "Run the queries more frequently to keep the results warm in cache.",
        "Convert the data to columnar Parquet and partition it so queries scan less.",
        "Store the data as uncompressed CSV to simplify the query process."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Columnar formats and partitioning reduce data scanned per Athena query, cutting cost.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "hard"
      },
      {
      id: "d3-q070",
      question:
        "SCENARIO: An existing service's IAM roles have accumulated excessive permissions over time. Which approach helps tighten them to least privilege?",
      options: [
        "Grant administrator access to the roles to simplify their management.",
        "Add more permissions to the roles to avoid access-denied errors.",
        "Use IAM Access Analyzer and last-accessed data to remove unused permissions.",
        "Disable IAM logging so that permission usage is no longer recorded."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Access Analyzer and last-accessed information reveal unused permissions to right-size policies toward least privilege.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q071",
      question:
        "SCENARIO: An existing app suffers slow cold starts on a critical Lambda path during peak hours. Which change improves performance?",
      options: [
        "Disable the function during off-peak hours to save on idle cost.",
        "Reduce the function memory to the minimum to shorten the cold start.",
        "Enable provisioned concurrency for the critical function during peak hours.",
        "Increase the function timeout so cold starts have longer to complete."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Provisioned concurrency keeps instances warm, removing cold-start latency on the critical path.",
      topic: "Determine a strategy to improve performance",
      difficulty: "medium"
      },
      {
      id: "d3-q072",
      question:
        "SCENARIO: An existing org wants Savings Plans coverage/utilization insight before committing more. Which tool provides it?",
      options: [
        "Amazon Macie findings used to inform the commitment decision.",
        "AWS Config data examined to determine the coverage and utilization.",
        "Amazon GuardDuty used to assess the Savings Plans coverage.",
        "Cost Explorer Savings Plans coverage and utilization reports for the analysis."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Cost Explorer's Savings Plans reports inform commitment decisions with coverage/utilization data.",
      topic: "Identify opportunities for cost optimizations",
      difficulty: "easy"
      },
      {
      id: "d3-q073",
      question:
        "SCENARIO: An existing deployment process is entirely manual and undocumented, causing inconsistent environments. Which improvement increases operational excellence MOST?",
      options: [
        "Document the deployment steps in a chat thread for the team to follow.",
        "Have a single person perform all of the deployments for consistency.",
        "Deploy changes less often so that fewer inconsistencies are introduced.",
        "Adopt infrastructure as code for repeatable, version-controlled environments."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Infrastructure as code makes environments repeatable, reviewable, and consistent across stages.",
      topic: "Determine a strategy to improve overall operational excellence",
      difficulty: "easy"
      },
      {
      id: "d3-q074",
      question:
        "SCENARIO: An existing public endpoint is occasionally overwhelmed by traffic floods from specific IPs. Which change mitigates this with least app change?",
      options: [
        "Disable the endpoint so it is unavailable while floods are happening.",
        "Add AWS WAF rate-based rules, with Shield, in front of the endpoint.",
        "Increase the instance count indefinitely to absorb the traffic floods.",
        "Block all traffic to the endpoint during the periods of flooding."
      ],
      answer: [1],
      type: "single",
      explanation:
        "WAF rate-based rules throttle abusive sources, and Shield adds DDoS protection without app changes.",
      topic: "Determine a strategy to improve security",
      difficulty: "medium"
      },
      {
      id: "d3-q075",
      question:
        "SCENARIO: An existing workflow chains several Lambdas via direct invocation with no retries, occasionally dropping steps on transient errors. Which change improves reliability?",
      options: [
        "Invoke the chained functions in a tight loop to retry on transient errors.",
        "Add more memory to each Lambda so that the steps are less likely to fail.",
        "Orchestrate the workflow with AWS Step Functions for retries and error handling.",
        "Remove the error handling so the workflow runs without interruption."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Step Functions add durable orchestration with retries and catch logic, preventing dropped steps on transient errors.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "medium"
      }
    ]
  });

  QB.domains.push({
    id: "d4",
    name: "Domain 4: Accelerate Workload Migration and Modernization",
    weightPct: 20,
    topics: ["Select existing workloads and processes for potential migration","Determine the optimal migration approach for existing workloads","Determine a new architecture for existing workloads","Determine opportunities for modernization and enhancements"],
    questions: [
      {
      id: "d4-q001",
      question:
        "A company wants to inventory its on-premises servers and get right-sizing and dependency data before migrating. Which service is BEST for discovery?",
      options: [
        "AWS Budgets used to estimate the cost of the planned migration.",
        "AWS Application Discovery Service for collecting the inventory data.",
        "Amazon Inspector used to assess the on-premises servers first.",
        "Amazon CloudWatch used to gather the on-premises server metrics."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Application Discovery Service collects configuration, performance, and dependency data from on-premises servers to plan migrations.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "easy"
      },
      {
      id: "d4-q002",
      question:
        "A company must migrate hundreds of VMs to AWS with minimal changes and fastest timeline (lift-and-shift). Which service automates the rehosting?",
      options: [
        "AWS Application Migration Service for automated rehosting at scale.",
        "AWS Step Functions used to orchestrate the rehosting workflow.",
        "AWS Glue used to move the virtual machines into Amazon EC2.",
        "Amazon Kinesis used to stream the server data during migration."
      ],
      answer: [0],
      type: "single",
      explanation:
        "AWS MGN performs block-level replication and automated rehosting of servers to EC2, ideal for large-scale lift-and-shift.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q003",
      question:
        "A company has 200 TB to transfer to AWS over a slow, unreliable internet link within two weeks. Which option is BEST?",
      options: [
        "Use Amazon S3 Transfer Acceleration over the same slow link.",
        "Order an AWS Snowball Edge device for offline data transfer.",
        "Upload the data directly over the existing internet connection.",
        "Email the data to AWS for ingestion into the destination bucket."
      ],
      answer: [1],
      type: "single",
      explanation:
        "For large datasets with poor connectivity, Snowball Edge ships data physically, meeting tight timelines that the network cannot.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q004",
      question:
        "A company wants to migrate a commercial Oracle database to a managed AWS database while changing the engine to reduce licensing cost. Which combination supports this heterogeneous migration? (Select TWO.)",
      options: [
        "AWS Schema Conversion Tool (SCT) to convert the schema.",
        "AWS Database Migration Service (DMS) to move the data.",
        "Amazon CloudFront to cache the database.",
        "AWS Budgets to convert the schema.",
        "Amazon SQS to replicate tables."
      ],
      answer: [0, 1],
      type: "multi",
      explanation:
        "SCT converts the schema/code to the target engine and DMS migrates the data, together enabling heterogeneous database migration.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q005",
      question:
        "A company is choosing a migration strategy for a legacy app that will be retired in 12 months. Which '7 Rs' approach is MOST appropriate?",
      options: [
        "Retain or rehost the application minimally given its short remaining life.",
        "Repurchase a SaaS replacement for the application immediately.",
        "Refactor the application into microservices before migrating it.",
        "Re-platform the application onto a managed database service."
      ],
      answer: [0],
      type: "single",
      explanation:
        "For an app near end-of-life, retaining it or doing a minimal rehost avoids investing heavily in something soon to be retired.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "medium"
      },
      {
      id: "d4-q006",
      question:
        "A company wants to modernize a monolithic Java app into containers without managing servers, with the least operational overhead. Which target is BEST?",
      options: [
        "A single large EC2 instance.",
        "On-premises VMs.",
        "Amazon ECS on AWS Fargate.",
        "AWS Lambda with a 15-minute monolith function."
      ],
      answer: [2],
      type: "single",
      explanation:
        "ECS on Fargate runs containers without managing servers, reducing operational overhead during modernization.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q007",
      question:
        "A company wants minimal-downtime database migration with continuous replication until cutover. Which DMS capability supports this?",
      options: [
        "Disabling the source database for the entire duration of the migration.",
        "A one-time export of the database performed at cutover only.",
        "A manual mysqldump taken at the cutover point during migration.",
        "DMS full load followed by ongoing change data capture replication."
      ],
      answer: [3],
      type: "single",
      explanation:
        "DMS performs a full load and then continuous CDC, keeping the target in sync so cutover downtime is minimal.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q008",
      question:
        "A company wants to track and orchestrate a large migration program across many servers with grouping, status, and automation. Which service provides this management plane?",
      options: [
        "AWS Migration Hub.",
        "Amazon QuickSight.",
        "AWS Config.",
        "Amazon EventBridge."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Migration Hub centralizes tracking and status of migrations across tools and provides program-level visibility.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "easy"
      },
      {
      id: "d4-q009",
      question:
        "A company re-platforming a self-managed MySQL database wants a managed service with minimal changes while gaining automated backups and Multi-AZ. Which target is BEST?",
      options: [
        "Amazon DynamoDB.",
        "Amazon RDS for MySQL.",
        "Self-managed MySQL on EC2.",
        "Amazon Redshift."
      ],
      answer: [1],
      type: "single",
      explanation:
        "RDS for MySQL is a managed equivalent requiring minimal app changes while adding automated backups and Multi-AZ.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "easy"
      },
      {
      id: "d4-q010",
      question:
        "A company wants to modernize file shares used by Windows applications to a managed, fully compatible service. Which target is BEST?",
      options: [
        "Amazon S3 used on its own to replace the Windows file shares.",
        "Instance store volumes used to host the Windows file shares.",
        "Amazon EFS used as the file store for the Windows applications.",
        "Amazon FSx for Windows File Server as the managed file service."
      ],
      answer: [3],
      type: "single",
      explanation:
        "FSx for Windows File Server provides managed, SMB-compatible Windows file storage with Active Directory integration.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q011",
      question:
        "A company wants a low-effort way to migrate large numbers of files from on-premises NFS/SMB shares to AWS storage with scheduling and verification. Which service is BEST?",
      options: [
        "AWS Budgets.",
        "Amazon SES.",
        "Manual SCP scripts.",
        "AWS DataSync."
      ],
      answer: [3],
      type: "single",
      explanation:
        "DataSync automates and accelerates online transfer of file data with scheduling, encryption, and integrity verification.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "easy"
      },
      {
      id: "d4-q012",
      question:
        "A company migrating a three-tier app wants to modernize the web tier to scale automatically and decouple it from the app tier. Which combination is appropriate? (Select TWO.)",
      options: [
        "Run everything on one instance for simplicity.",
        "Use a static IP hardcoded in clients.",
        "Introduce a message queue (SQS) between web and app tiers for decoupling.",
        "Remove all load balancing.",
        "Put the web tier behind an Application Load Balancer with Auto Scaling."
      ],
      answer: [2, 4],
      type: "multi",
      explanation:
        "An ALB with Auto Scaling lets the web tier scale, and an SQS queue decouples it from the app tier for resilience.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q013",
      question:
        "A company wants to assess on-premises application portfolios and build a business case for migration including TCO. Which AWS tooling supports portfolio assessment?",
      options: [
        "Amazon CloudWatch alarms used to assess the application portfolio.",
        "Amazon Macie used to assess the portfolio before migration.",
        "AWS WAF analyzed to build the migration business case and TCO.",
        "AWS Migration Evaluator combined with Application Discovery data."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Migration Evaluator builds a data-driven business case and TCO analysis to prioritize and justify migrations.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "medium"
      },
      {
      id: "d4-q014",
      question:
        "A company wants to refactor a scheduled nightly ETL job off a server-based cron to a serverless, managed orchestration. Which combination is BEST? (Select TWO.)",
      options: [
        "Orchestrate with AWS Step Functions or EventBridge Scheduler.",
        "Keep cron on a 24/7 EC2 instance.",
        "Run the ETL manually each night.",
        "Use Amazon SNS as the ETL engine.",
        "Use AWS Glue for serverless ETL."
      ],
      answer: [0, 4],
      type: "multi",
      explanation:
        "Glue provides serverless ETL, and Step Functions/EventBridge Scheduler orchestrate it without managing servers.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q015",
      question:
        "A company has a tight cutover window and needs to test the migrated environment before switching production traffic. Which approach reduces cutover risk?",
      options: [
        "Cut over to the migrated environment directly without any testing.",
        "Use MGN test instances to validate, then do a final sync and cutover.",
        "Delete the source environment before testing the migrated one.",
        "Skip the validation step entirely in order to save time at cutover."
      ],
      answer: [1],
      type: "single",
      explanation:
        "MGN supports launching test instances from replicated data to validate functionality before the final cutover, reducing risk.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q016",
      question:
        "A company wants to modernize session state in a migrated web app so instances can be added or removed freely. Which change enables statelessness?",
      options: [
        "Externalize the session state to Amazon ElastiCache or DynamoDB.",
        "Pin each user to a single instance permanently for the whole session.",
        "Store the session state on the local disks of each application instance.",
        "Disable Auto Scaling so the set of instances never changes."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Moving session state to a shared store (ElastiCache/DynamoDB) makes the tier stateless, allowing free scaling and replacement.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q017",
      question:
        "A company is migrating a workload that must keep its existing private IP addresses and connect back to on-premises during migration. Which connectivity option supports hybrid access during the transition?",
      options: [
        "An Amazon S3 gateway endpoint used for the hybrid connectivity.",
        "An internet gateway used on its own for the connection during migration.",
        "AWS Site-to-Site VPN or Direct Connect between on-premises and the VPC.",
        "A public internet connection with no encryption between the sites."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Site-to-Site VPN or Direct Connect provides secure hybrid connectivity so migrated and on-premises components communicate during transition.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q018",
      question:
        "A company wants to repurchase rather than rehost an aging self-managed CRM. Which '7 Rs' strategy does this represent?",
      options: [
        "Relocate the CRM to AWS while keeping the same hypervisor.",
        "Rehost the aging CRM as-is onto Amazon EC2 instances.",
        "Retain the aging CRM in place without migrating it at all.",
        "Repurchase, moving from the self-managed CRM to a SaaS product."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Repurchasing replaces the self-managed product with a SaaS or off-the-shelf alternative, one of the 7 Rs.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "easy"
      },
      {
      id: "d4-q019",
      question:
        "A company migrating containerized workloads from on-premises Kubernetes wants a managed control plane with minimal changes to manifests. Which target is BEST?",
      options: [
        "Amazon EKS.",
        "Amazon Lightsail.",
        "AWS Lambda.",
        "Amazon SQS."
      ],
      answer: [0],
      type: "single",
      explanation:
        "EKS provides a managed Kubernetes control plane, letting teams migrate existing Kubernetes workloads with minimal manifest changes.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "easy"
      },
      {
      id: "d4-q020",
      question:
        "A company wants to reduce migration risk by moving workloads in small, reversible waves rather than all at once. Which planning approach reflects this?",
      options: [
        "Wave-based migration planning grouped by application dependencies.",
        "A single big-bang migration of all of the systems carried out overnight.",
        "Migrating the databases only after their dependent applications move.",
        "A random ordering of the migration with no dependency analysis done."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Wave-based planning groups interdependent applications and migrates them in manageable, reversible increments to reduce risk.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q021",
      question:
        "A company re-platforming a reporting database wants a fully managed petabyte-scale analytics warehouse. Which target is BEST?",
      options: [
        "Amazon ElastiCache.",
        "Amazon RDS for SQL Server.",
        "Amazon DynamoDB.",
        "Amazon Redshift."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Redshift is a managed, petabyte-scale data warehouse suited to large analytics/reporting workloads.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "easy"
      },
      {
      id: "d4-q022",
      question:
        "During migration, a company needs to keep an on-premises NFS share and AWS in sync with low-latency local access while gradually moving data. Which hybrid service helps?",
      options: [
        "Amazon SES used to keep the on-premises share in sync with AWS.",
        "Amazon Cognito used to provide the hybrid file access during migration.",
        "AWS Budgets used to manage the gradual movement of the data.",
        "AWS Storage Gateway in File Gateway mode for the hybrid access."
      ],
      answer: [3],
      type: "single",
      explanation:
        "File Gateway presents a local NFS/SMB interface backed by S3, enabling hybrid access and gradual data movement to AWS.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q023",
      question:
        "A company wants to modernize a request/response monolith into event-driven processing to absorb spikes and decouple components. Which combination is BEST? (Select TWO.)",
      options: [
        "Remove retries entirely.",
        "Make all calls synchronous and blocking.",
        "Process asynchronously with AWS Lambda or SQS-driven workers.",
        "Run a single-threaded process on one instance.",
        "Publish events to Amazon EventBridge or SNS."
      ],
      answer: [2, 4],
      type: "multi",
      explanation:
        "Publishing events (EventBridge/SNS) and processing them asynchronously (Lambda/SQS) decouples components and absorbs spikes.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "hard"
      },
      {
      id: "d4-q024",
      question:
        "A company must migrate 5 PB of archival data to AWS where network transfer is impractical. Which option is BEST?",
      options: [
        "AWS Snowmobile or many Snowball devices for petabyte-scale offline transfer.",
        "AWS DataSync run over a 10 Mbps link to move the archival data.",
        "Amazon S3 multipart upload performed over the existing internet link.",
        "Emailing the compressed archives to AWS for ingestion into storage."
      ],
      answer: [0],
      type: "single",
      explanation:
        "For petabyte/exabyte-scale offline transfer, Snowmobile or large Snow device fleets move data physically far faster than the network.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q025",
      question:
        "A company wants migrated workloads to follow least-privilege and consistent guardrails automatically as part of landing in AWS. Which approach embeds governance into the migration?",
      options: [
        "Defer setting up IAM until after the workloads have gone live.",
        "Land workloads into a Control Tower-governed structure with SCP guardrails.",
        "Grant administrator access to all of the migration engineers permanently.",
        "Disable SCPs during the migration so engineers are not blocked."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Landing migrated workloads into Control Tower-governed accounts applies guardrails and least-privilege baselines automatically.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q026",
      question:
        "SCENARIO: A company must migrate 500 on-premises VMs to AWS within three months with minimal changes. They need automated replication and orchestrated cutover. Which service is BEST?",
      options: [
        "AWS Application Migration Service for automated rehosting at scale.",
        "AWS Step Functions used to coordinate the rehosting process.",
        "Amazon Kinesis used to stream the servers during the migration.",
        "AWS Glue used to migrate the virtual machines to Amazon EC2."
      ],
      answer: [0],
      type: "single",
      explanation:
        "MGN automates lift-and-shift rehosting at scale with continuous replication and orchestrated cutover.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "easy"
      },
      {
      id: "d4-q027",
      question:
        "SCENARIO: A company must move 400 TB to AWS within three weeks over an unreliable 100 Mbps internet link. Which option meets the timeline?",
      options: [
        "Upload the data directly over the existing 100 Mbps internet link.",
        "Order AWS Snowball Edge devices for offline transfer of the data.",
        "Email the compressed archives to AWS for ingestion into storage.",
        "Use Amazon S3 Transfer Acceleration over the same unreliable link."
      ],
      answer: [1],
      type: "single",
      explanation:
        "For large datasets over slow links, Snowball Edge ships data physically to meet tight timelines.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q028",
      question:
        "SCENARIO: A company migrates a commercial Oracle database to Aurora PostgreSQL to cut licensing costs. Which two services support this heterogeneous migration? (Select TWO.)",
      options: [
        "Amazon SES.",
        "AWS Database Migration Service (DMS) to migrate data with CDC.",
        "AWS Budgets.",
        "Amazon CloudFront.",
        "AWS Schema Conversion Tool (SCT) to convert schema/code."
      ],
      answer: [1, 4],
      type: "multi",
      explanation:
        "SCT converts the schema and code to the target engine; DMS migrates data with minimal downtime via CDC.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q029",
      question:
        "SCENARIO: A company has hundreds of applications and needs to decide which to migrate first based on dependencies and effort. Which service helps discover dependencies?",
      options: [
        "AWS Application Discovery Service to discover the dependencies.",
        "AWS WAF analyzed to determine the migration sequencing.",
        "Amazon Macie used to discover the application dependencies.",
        "Amazon CloudWatch used to map the application dependencies."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Application Discovery Service collects configuration, performance, and dependency data to prioritize migrations.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "easy"
      },
      {
      id: "d4-q030",
      question:
        "SCENARIO: A legacy app will be retired in nine months. The company wants to spend as little as possible to operate it on AWS until then. Which '7 Rs' approach fits BEST?",
      options: [
        "Retain or do a minimal rehost given the application's short remaining life.",
        "Re-platform the application onto a managed database service.",
        "Repurchase a SaaS replacement for the application right away.",
        "Refactor the application into microservices before its retirement."
      ],
      answer: [0],
      type: "single",
      explanation:
        "For a soon-to-retire app, retaining or minimally rehosting avoids heavy investment.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "medium"
      },
      {
      id: "d4-q031",
      question:
        "SCENARIO: A company wants minimal-downtime database migration, keeping source and target in sync until a brief cutover. Which DMS capability enables this?",
      options: [
        "A full load followed by ongoing change data capture replication.",
        "A one-time export of the source performed only at the cutover.",
        "Taking the source database offline for the whole migration window.",
        "A manual database dump taken at the cutover point of the migration."
      ],
      answer: [0],
      type: "single",
      explanation:
        "DMS full load + CDC keeps the target synchronized so cutover downtime is minimal.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q032",
      question:
        "SCENARIO: A company migrating a Windows file server workload wants a managed, fully SMB-compatible service with Active Directory integration. Which target is BEST?",
      options: [
        "Amazon FSx for Windows File Server as the managed SMB service.",
        "Amazon EFS used as the managed store for the Windows workload.",
        "Instance store volumes used for the Windows file server data.",
        "Amazon S3 used on its own to host the Windows file shares."
      ],
      answer: [0],
      type: "single",
      explanation:
        "FSx for Windows File Server provides managed SMB storage with AD integration, matching Windows workloads.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q033",
      question:
        "SCENARIO: A company needs to track and report progress of a large migration program across many tools and servers. Which service provides the management plane?",
      options: [
        "Amazon EventBridge.",
        "Amazon QuickSight.",
        "AWS Migration Hub.",
        "AWS Config."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Migration Hub centralizes tracking and status across migration tools for program-level visibility.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "easy"
      },
      {
      id: "d4-q034",
      question:
        "SCENARIO: A company wants to move large volumes of on-premises NFS data to AWS storage repeatedly, with scheduling, encryption, and integrity checks. Which service is BEST?",
      options: [
        "Amazon SES.",
        "Manual rsync scripts.",
        "AWS DataSync.",
        "AWS Budgets."
      ],
      answer: [2],
      type: "single",
      explanation:
        "DataSync automates and accelerates online file transfer with scheduling, encryption, and verification.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "easy"
      },
      {
      id: "d4-q035",
      question:
        "SCENARIO: A company re-platforming a self-managed PostgreSQL wants a managed service with automated backups and Multi-AZ, with minimal app changes. Which target is BEST?",
      options: [
        "Amazon Redshift used as the managed target for the PostgreSQL data.",
        "Amazon RDS for PostgreSQL, or Aurora PostgreSQL, as the target.",
        "A self-managed PostgreSQL engine running on Amazon EC2.",
        "Amazon DynamoDB used as the managed target for the database."
      ],
      answer: [1],
      type: "single",
      explanation:
        "RDS/Aurora for PostgreSQL is a managed equivalent with automated backups and Multi-AZ and minimal app changes.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "easy"
      },
      {
      id: "d4-q036",
      question:
        "SCENARIO: A company wants to validate migrated servers before cutover by launching test instances from replicated data. Which MGN feature supports this?",
      options: [
        "Launching test instances from the replicated volumes prior to cutover.",
        "Deleting the source environment before testing the migrated servers.",
        "Cutting over to the migrated servers directly with no testing done.",
        "Skipping the validation step in order to save time before cutover."
      ],
      answer: [0],
      type: "single",
      explanation:
        "MGN can launch test instances from replicated data to validate functionality before the final cutover.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q037",
      question:
        "SCENARIO: A company modernizing a monolith into containers wants no server management and the least operational overhead. Which target is BEST?",
      options: [
        "A single large EC2 instance.",
        "AWS Lambda for a multi-hour monolith.",
        "Amazon ECS on AWS Fargate.",
        "On-premises VMs."
      ],
      answer: [2],
      type: "single",
      explanation:
        "ECS on Fargate runs containers without managing servers, lowering operational overhead during modernization.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q038",
      question:
        "SCENARIO: A company migrating from on-premises Kubernetes wants a managed control plane with minimal manifest changes. Which target is BEST?",
      options: [
        "Amazon EKS.",
        "Amazon Lightsail.",
        "AWS Lambda.",
        "Amazon SQS."
      ],
      answer: [0],
      type: "single",
      explanation:
        "EKS provides a managed Kubernetes control plane, letting existing workloads migrate with minimal manifest changes.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "easy"
      },
      {
      id: "d4-q039",
      question:
        "SCENARIO: A company wants to build a data-driven business case and TCO analysis to justify migration to leadership. Which tool is BEST?",
      options: [
        "AWS Migration Evaluator for building the TCO and business case.",
        "Amazon CloudWatch alarms used to justify the migration to leadership.",
        "AWS WAF analyzed to support the migration business case.",
        "Amazon Macie used to build the TCO analysis for the migration."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Migration Evaluator produces TCO and business-case analysis to prioritize and justify migrations.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "medium"
      },
      {
      id: "d4-q040",
      question:
        "SCENARIO: A company modernizing a migrated web app wants instances to be freely added/removed by externalizing session state. Which change enables statelessness?",
      options: [
        "Store the session state on the local disk of each application instance.",
        "Disable Auto Scaling so that the set of instances does not change.",
        "Pin each user to a single instance permanently for the entire session.",
        "Move the session state to Amazon ElastiCache or DynamoDB to externalize it."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Externalizing sessions to a shared store makes the tier stateless for free scaling and replacement.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q041",
      question:
        "SCENARIO: During migration, a company needs secure connectivity between on-premises and the VPC so migrated and remaining components can communicate. Which option is BEST?",
      options: [
        "A public internet path with no encryption between the two sites.",
        "An internet gateway used on its own for the hybrid connectivity.",
        "AWS Site-to-Site VPN or Direct Connect between on-premises and the VPC.",
        "An Amazon S3 gateway endpoint used for the connectivity during migration."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Site-to-Site VPN or Direct Connect provides secure hybrid connectivity during the transition.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q042",
      question:
        "SCENARIO: A company decides to replace an aging self-managed CRM with a SaaS product instead of migrating it as-is. Which '7 Rs' strategy is this?",
      options: [
        "Rehost the existing product as-is onto Amazon EC2 instances.",
        "Retain the existing product in place without migrating it.",
        "Repurchase, replacing the self-managed product with a SaaS option.",
        "Relocate the product to AWS while keeping its current platform."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Repurchasing replaces the self-managed product with a SaaS/off-the-shelf alternative.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "easy"
      },
      {
      id: "d4-q043",
      question:
        "SCENARIO: A company wants to migrate workloads in small, reversible waves grouped by application dependencies to reduce risk. Which planning approach is this?",
      options: [
        "Wave-based migration planning.",
        "Migrating databases after dependent apps.",
        "Random ordering with no dependency analysis.",
        "Big-bang overnight migration."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Wave-based planning migrates interdependent apps in manageable, reversible increments.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q044",
      question:
        "SCENARIO: A company re-platforming a reporting database needs a managed, petabyte-scale analytics warehouse. Which target is BEST?",
      options: [
        "Amazon ElastiCache.",
        "Amazon Redshift.",
        "Amazon RDS for SQL Server.",
        "Amazon DynamoDB."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Redshift is a managed, petabyte-scale warehouse suited to large analytics/reporting workloads.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "easy"
      },
      {
      id: "d4-q045",
      question:
        "SCENARIO: During migration a company must keep an on-premises NFS share and AWS in sync with low-latency local access while gradually moving data. Which service helps?",
      options: [
        "Amazon SES used to keep the on-premises share synced with AWS.",
        "AWS Storage Gateway in File Gateway mode for the hybrid file access.",
        "Amazon Cognito used to provide the hybrid file access during migration.",
        "AWS Budgets used to manage the gradual movement of the file data."
      ],
      answer: [1],
      type: "single",
      explanation:
        "File Gateway presents a local NFS/SMB interface backed by S3 for hybrid access and gradual data movement.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q046",
      question:
        "SCENARIO: A company modernizing a request/response monolith wants to absorb traffic spikes and decouple components into event-driven processing. Which combination is BEST? (Select TWO.)",
      options: [
        "Make all calls synchronous and blocking.",
        "Process asynchronously with Lambda or SQS-driven workers.",
        "Remove retries entirely.",
        "Publish events to Amazon EventBridge or SNS.",
        "Run a single-threaded process on one instance."
      ],
      answer: [1, 3],
      type: "multi",
      explanation:
        "Publishing events and processing them asynchronously decouples components and absorbs spikes.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "hard"
      },
      {
      id: "d4-q047",
      question:
        "SCENARIO: A company must migrate 6 PB of archival data where network transfer is impractical. Which option is BEST?",
      options: [
        "AWS DataSync run over a 10 Mbps link to move the archival data.",
        "Emailing the archival data to AWS for ingestion into the storage.",
        "AWS Snowmobile or a large fleet of Snowball devices for offline transfer.",
        "Amazon S3 multipart upload performed over the existing internet link."
      ],
      answer: [2],
      type: "single",
      explanation:
        "For petabyte/exabyte-scale offline transfer, Snowmobile or many Snow devices move data far faster than the network.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q048",
      question:
        "SCENARIO: A company wants migrated workloads to land in governed accounts that automatically apply guardrails and least-privilege baselines. Which approach embeds governance?",
      options: [
        "Land workloads into Control Tower-governed accounts with SCP guardrails.",
        "Disable SCPs during the migration so the engineers are not blocked.",
        "Grant administrator access to all of the migration engineers permanently.",
        "Defer setting up IAM until after the workloads have gone live."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Control Tower-governed accounts apply guardrails and least-privilege baselines automatically to migrated workloads.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q049",
      question:
        "SCENARIO: A company is refactoring a nightly cron-based ETL on EC2 into a serverless, managed pipeline. Which combination is BEST? (Select TWO.)",
      options: [
        "Use Amazon SNS as the ETL engine.",
        "AWS Step Functions or EventBridge Scheduler for orchestration.",
        "Run the ETL manually nightly.",
        "AWS Glue for serverless ETL.",
        "Keep cron on a 24/7 EC2 instance."
      ],
      answer: [1, 3],
      type: "multi",
      explanation:
        "Glue provides serverless ETL and Step Functions/EventBridge Scheduler orchestrate it without servers.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q050",
      question:
        "SCENARIO: A company modernizing a three-tier app wants the web tier to scale and be decoupled from the app tier. Which combination is appropriate? (Select TWO.)",
      options: [
        "Hardcode a static IP in clients.",
        "Introduce an SQS queue between web and app tiers.",
        "Put the web tier behind an ALB with Auto Scaling.",
        "Remove all load balancing.",
        "Run everything on one instance."
      ],
      answer: [1, 2],
      type: "multi",
      explanation:
        "An ALB with Auto Scaling scales the web tier and an SQS queue decouples it from the app tier.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q051",
      question:
        "SCENARIO: A company wants to migrate a SQL Server database to AWS while keeping the same engine and reducing operational burden. Which target is BEST?",
      options: [
        "Self-managed SQL Server on EC2 with manual backups.",
        "Amazon RDS for SQL Server.",
        "Amazon Redshift.",
        "Amazon DynamoDB."
      ],
      answer: [1],
      type: "single",
      explanation:
        "RDS for SQL Server keeps the same engine while offloading backups, patching, and Multi-AZ management.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "easy"
      },
      {
      id: "d4-q052",
      question:
        "SCENARIO: A company migrating a large on-premises Hadoop workload wants a managed, scalable big-data platform that can decouple storage from compute. Which target is BEST?",
      options: [
        "A single large Amazon EC2 instance running the Hadoop workload.",
        "Amazon EMR reading the data directly from Amazon S3 storage.",
        "Amazon RDS used as the managed target for the Hadoop data.",
        "Amazon ElastiCache used as the managed big-data platform."
      ],
      answer: [1],
      type: "single",
      explanation:
        "EMR with data in S3 decouples storage from compute and provides a managed, scalable big-data platform.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q053",
      question:
        "SCENARIO: A company wants to assess which on-premises servers are good rehost candidates based on utilization collected over weeks. Which approach is BEST?",
      options: [
        "Use Amazon CloudWatch on servers that are not yet running in AWS.",
        "Migrate all of the servers without performing any assessment first.",
        "Guess the rehost candidates based on the names of the servers.",
        "Use Application Discovery Service collectors to gather utilization over time."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Application Discovery Service collects utilization and dependency data over time to identify rehost candidates.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "medium"
      },
      {
      id: "d4-q054",
      question:
        "SCENARIO: A company migrating a stateful app to containers wants persistent shared storage accessible by multiple tasks across AZs. Which storage is BEST?",
      options: [
        "Local container ephemeral storage only.",
        "Amazon EFS mounted by the containers.",
        "Instance store.",
        "A single EBS volume attached to one task."
      ],
      answer: [1],
      type: "single",
      explanation:
        "EFS provides shared, persistent, multi-AZ file storage that multiple containers/tasks can mount.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q055",
      question:
        "SCENARIO: A company wants to migrate VMware workloads to AWS quickly while keeping VMware tooling during transition. Which option supports this?",
      options: [
        "VMware Cloud on AWS, or AWS MGN for a rehost to Amazon EC2.",
        "AWS Budgets used to plan the VMware migration to AWS.",
        "Amazon Cognito used during the VMware migration to AWS.",
        "Amazon SES used to migrate the VMware workloads to AWS."
      ],
      answer: [0],
      type: "single",
      explanation:
        "VMware Cloud on AWS lets teams run native VMware on AWS during transition; MGN is the rehost-to-EC2 path.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q056",
      question:
        "SCENARIO: A company is modernizing authentication for a migrated app to support social and enterprise logins with managed user directories. Which service is BEST?",
      options: [
        "Amazon SES used as the authentication service for the application.",
        "Amazon Cognito user pools providing social and enterprise federation.",
        "A self-managed authentication server running on a single instance.",
        "Credentials hardcoded directly into the migrated application's code."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Cognito user pools provide managed user directories with social/enterprise federation for app authentication.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q057",
      question:
        "SCENARIO: A company migrating a database with very large objects wants to minimize cutover downtime and validate data integrity after migration. Which combination is BEST? (Select TWO.)",
      options: [
        "Use DMS data validation to verify migrated data.",
        "Skip validation to save time.",
        "Email the data.",
        "Use DMS with ongoing CDC to minimize downtime.",
        "Take the source offline for the entire migration."
      ],
      answer: [0, 3],
      type: "multi",
      explanation:
        "DMS CDC minimizes downtime and DMS data validation confirms the target matches the source.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "hard"
      },
      {
      id: "d4-q058",
      question:
        "SCENARIO: A company wants to re-platform an application's messaging from a self-managed broker to a managed service compatible with existing protocols. Which target is BEST?",
      options: [
        "Amazon DynamoDB used as the managed messaging target.",
        "Amazon Redshift used as the managed broker for the messaging.",
        "Amazon S3 used as the managed messaging service replacement.",
        "Amazon MQ, a managed ActiveMQ and RabbitMQ broker service."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Amazon MQ provides managed ActiveMQ/RabbitMQ compatible with existing messaging protocols, easing re-platforming.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q059",
      question:
        "SCENARIO: A company migrating a workload wants automated, repeatable provisioning of the target AWS environment as code. Which service is BEST?",
      options: [
        "Ad hoc shell scripts run once.",
        "AWS CloudFormation (or CDK).",
        "Manual console setup.",
        "Amazon QuickSight."
      ],
      answer: [1],
      type: "single",
      explanation:
        "CloudFormation/CDK provisions the target environment as repeatable, version-controlled code.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "easy"
      },
      {
      id: "d4-q060",
      question:
        "SCENARIO: A company wants to migrate a large object store from another cloud to S3 efficiently and on a schedule. Which service is BEST?",
      options: [
        "AWS DataSync, with the appropriate location type, for scheduled transfer to S3.",
        "Amazon SES used to migrate the object store to Amazon S3.",
        "AWS Budgets used to schedule the transfer to Amazon S3.",
        "Manual downloads of the objects followed by re-uploads to Amazon S3."
      ],
      answer: [0],
      type: "single",
      explanation:
        "DataSync supports scheduled, verified transfers into S3, including from other cloud/object sources where supported.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q061",
      question:
        "SCENARIO: A company wants to modernize a migrated app's deployment with automated build, test, and release. Which combination is BEST? (Select TWO.)",
      options: [
        "Manual deploys from a laptop.",
        "AWS CodeBuild for build/test.",
        "Emailing artifacts.",
        "Amazon SES as the build server.",
        "AWS CodePipeline for orchestration."
      ],
      answer: [1, 4],
      type: "multi",
      explanation:
        "CodePipeline orchestrates stages and CodeBuild runs builds/tests, modernizing the release process.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "easy"
      },
      {
      id: "d4-q062",
      question:
        "SCENARIO: A company migrating must preserve specific private IPs and connect securely to on-premises during transition without exposing services publicly. Which approach is BEST?",
      options: [
        "Rely on Amazon S3 endpoints to carry the application's hybrid traffic.",
        "Use only an internet gateway for the connectivity during the migration.",
        "Place the migrated services in public subnets with open inbound ingress.",
        "Use a VPC with chosen CIDRs via Direct Connect/VPN and private subnets."
      ],
      answer: [3],
      type: "single",
      explanation:
        "A VPC with chosen CIDRs, private subnets, and DX/VPN preserves private addressing and secure hybrid access.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "hard"
      },
      {
      id: "d4-q063",
      question:
        "SCENARIO: A company wants to reduce risk during a database cutover by testing the migrated database with production-like queries before switching. Which approach is BEST?",
      options: [
        "Run a parallel-run and validation phase against the migrated target first.",
        "Delete the source database first and then test the migrated target.",
        "Cut over to the migrated database directly with no testing beforehand.",
        "Skip the validation phase entirely in order to save time at cutover."
      ],
      answer: [0],
      type: "single",
      explanation:
        "A parallel-run/validation phase confirms the target behaves correctly before cutover, reducing risk.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q064",
      question:
        "SCENARIO: A company modernizing a migrated app wants to add observability (metrics, logs, traces) with minimal custom tooling. Which combination is BEST? (Select TWO.)",
      options: [
        "No monitoring to reduce cost.",
        "AWS X-Ray for distributed tracing.",
        "Amazon SES for tracing.",
        "Amazon CloudWatch for metrics and logs.",
        "Local log files only."
      ],
      answer: [1, 3],
      type: "multi",
      explanation:
        "CloudWatch covers metrics/logs and X-Ray adds tracing, providing observability with minimal custom tooling.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "easy"
      },
      {
      id: "d4-q065",
      question:
        "SCENARIO: A company migrating a workload to AWS wants to standardize and reuse approved infrastructure patterns for teams to self-provision. Which service is BEST?",
      options: [
        "Amazon Macie used to provide the standardized infrastructure products.",
        "AWS Budgets used to publish the approved infrastructure patterns.",
        "Amazon SES used to standardize the reusable infrastructure patterns.",
        "AWS Service Catalog for self-service of approved infrastructure products."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Service Catalog lets teams self-provision approved, standardized infrastructure products.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q066",
      question:
        "SCENARIO: A company wants to migrate a small set of servers with the least effort and no third-party tools, keeping the same OS and apps. Which '7 Rs' strategy is this?",
      options: [
        "Retire the servers instead of migrating them to AWS.",
        "Rehost, a lift-and-shift of the servers as-is to AWS.",
        "Refactor the servers into a new architecture on AWS.",
        "Repurchase a SaaS replacement for the migrated servers."
      ],
      answer: [1],
      type: "single",
      explanation:
        "Rehost (lift-and-shift) moves servers as-is with the least effort, keeping OS and apps.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "easy"
      },
      {
      id: "d4-q067",
      question:
        "SCENARIO: A company migrating wants to identify applications that are no longer used and should simply be decommissioned. Which '7 Rs' strategy applies?",
      options: [
        "Rehost.",
        "Relocate.",
        "Re-platform.",
        "Retire."
      ],
      answer: [3],
      type: "single",
      explanation:
        "Retire decommissions applications that are no longer needed, reducing scope and cost.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "easy"
      },
      {
      id: "d4-q068",
      question:
        "SCENARIO: A company modernizing a migrated relational workload wants to offload read-heavy reporting without changing the primary. Which change is BEST?",
      options: [
        "Disable the Multi-AZ configuration on the migrated database.",
        "Increase the backup retention period on the migrated database.",
        "Add read replicas and route the reporting queries to them.",
        "Move the workload onto a single database instance instead."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Read replicas offload reporting from the primary, improving performance without primary changes.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q069",
      question:
        "SCENARIO: A company wants to migrate containerized workloads but keep them serverless and integrated with AWS networking and IAM. Which target is BEST?",
      options: [
        "Amazon ECS or EKS on AWS Fargate.",
        "Amazon SES.",
        "On-premises Kubernetes only.",
        "A single EC2 instance running Docker."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Fargate runs ECS/EKS tasks serverlessly with native AWS networking and IAM integration.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q070",
      question:
        "SCENARIO: A company migrating a database wants to convert stored procedures and schema from a commercial engine and get an assessment of conversion effort first. Which tool is BEST?",
      options: [
        "Amazon CloudWatch used to convert the schema and procedures.",
        "AWS Schema Conversion Tool together with its assessment report.",
        "AWS Budgets used to estimate the conversion effort for the database.",
        "Amazon Macie used to convert the schema before the migration."
      ],
      answer: [1],
      type: "single",
      explanation:
        "SCT converts schema/procedures and produces an assessment report estimating conversion effort.",
      topic: "Determine a new architecture for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q071",
      question:
        "SCENARIO: A company wants to migrate gradually while routing a percentage of user traffic to the new AWS environment and the rest to on-premises. Which approach supports this?",
      options: [
        "Disable DNS so that traffic shifts gradually toward AWS over time.",
        "Hardcode the AWS IP address into all of the clients immediately.",
        "Use Route 53 weighted routing to split traffic between on-premises and AWS.",
        "Cut over all of the user traffic to AWS at once during the migration."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Route 53 weighted routing gradually shifts a percentage of traffic to AWS during migration.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q072",
      question:
        "SCENARIO: A company modernizing a migrated app wants to break a large database into purpose-built data stores per service. Which principle guides this?",
      options: [
        "Force all of the services to share one large relational database.",
        "Store everything in Amazon S3 only across all of the services.",
        "Use polyglot persistence, choosing the right database per access pattern.",
        "Use one DynamoDB table to serve all of the service access patterns."
      ],
      answer: [2],
      type: "single",
      explanation:
        "Polyglot persistence assigns each service the database best suited to its access pattern, aiding modernization.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "hard"
      },
      {
      id: "d4-q073",
      question:
        "SCENARIO: A company migrating wants to minimize downtime for a stateful application by replicating block-level changes continuously until a brief cutover. Which service is BEST?",
      options: [
        "AWS Application Migration Service with continuous block-level replication.",
        "AWS Budgets used to plan the cutover for the stateful application.",
        "AWS Glue used to replicate the stateful application to AWS.",
        "Amazon SES used to minimize downtime during the migration."
      ],
      answer: [0],
      type: "single",
      explanation:
        "MGN continuously replicates at the block level so cutover downtime is brief.",
      topic: "Determine the optimal migration approach for existing workloads",
      difficulty: "medium"
      },
      {
      id: "d4-q074",
      question:
        "SCENARIO: A company wants migrated workloads to automatically scale and self-heal, replacing the fixed-capacity on-premises model. Which combination is BEST? (Select TWO.)",
      options: [
        "Disabling health checks.",
        "A single fixed instance.",
        "Health checks integrated with Auto Scaling for self-healing.",
        "Manual capacity changes only.",
        "EC2 Auto Scaling groups across AZs."
      ],
      answer: [2, 4],
      type: "multi",
      explanation:
        "Auto Scaling across AZs with health checks provides elastic, self-healing capacity, replacing fixed on-premises sizing.",
      topic: "Determine opportunities for modernization and enhancements",
      difficulty: "medium"
      },
      {
      id: "d4-q075",
      question:
        "SCENARIO: A company has many interdependent applications and wants to sequence migration so dependencies move together and rollback is possible. Which planning artifact is MOST useful?",
      options: [
        "A random ordering chosen for the migration of the servers.",
        "A single big-bang migration plan that has no rollback path.",
        "A dependency map feeding wave-based migration plans with rollback criteria.",
        "An alphabetical list of the servers to be migrated to AWS."
      ],
      answer: [2],
      type: "single",
      explanation:
        "A dependency map driving wave-based plans with rollback criteria sequences interdependent apps safely.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "medium"
      }
    ]
  });

  // Convenience counts
  QB.meta.totalQuestions = QB.domains.reduce(function (n, d) { return n + d.questions.length; }, 0);
  QB.meta.questionsPerDomain = QB.domains.map(function (d) { return { domain: d.id, count: d.questions.length }; });

  window.SAP_C02_QUESTION_BANK = QB;
})();
