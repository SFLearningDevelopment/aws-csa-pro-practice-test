/* =============================================================================
   AWS Certified Solutions Architect – Professional (SAP-C02)
   Question Bank
   -----------------------------------------------------------------------------
   Exposed as: window.SAP_C02_QUESTION_BANK

   Structure:
     window.SAP_C02_QUESTION_BANK = {
       meta: {...},
       domains: [
         {
           id: "d1",
           name: "Domain 1: Design Solutions for Organizational Complexity",
           topics: [ "Architect network connectivity strategies", ... ],
           questions: [
             {
               id: "d1-q001",
               question: "....",
               options: ["A ...", "B ...", "C ...", "D ...", "E ..."],
               answer: [1],            // 0-indexed; array supports multi-select
               type: "single" | "multi",
               explanation: "....",
               topic: "Architect network connectivity strategies",
               difficulty: "medium"
             },
             ...
           ]
         },
         ...
       ]
     }

   Randomization note: each domain holds well above the per-exam draw size, so a
   per-learner random subset has a vanishingly small chance of full overlap.
   ============================================================================= */

(function () {
  const QB = {
    meta: {
      certification: "AWS Certified Solutions Architect - Professional",
      examCode: "SAP-C02",
      version: "1.0.0",
      generated: "2026-06-15",
      passThresholdPct: 75,
      note:
        "Questions are practice items written to mirror SAP-C02 style and domain weighting. They are not real exam questions."
    },
    domains: []
  };

  /* ---------------------------------------------------------------------------
     DOMAIN 1 — Design Solutions for Organizational Complexity
     (Official weighting ~26%)
     Folds in the requested topics:
       - Architect network connectivity strategies
       - Prescribe security controls
       - Design reliable and resilient architecture
       - Design a multi-account AWS environment
       - Determine cost optimization and visibility strategies
  --------------------------------------------------------------------------- */
  QB.domains.push({
    id: "d1",
    name: "Domain 1: Design Solutions for Organizational Complexity",
    weightPct: 26,
    topics: [
      "Architect network connectivity strategies",
      "Prescribe security controls",
      "Design reliable and resilient architecture",
      "Design a multi-account AWS environment",
      "Determine cost optimization and visibility strategies"
    ],
    questions: [
      {
        id: "d1-q001",
        question:
          "A company runs 30 AWS accounts under AWS Organizations. Each account needs outbound internet access and private access to shared services hosted in a central account, with the fewest VPC peering connections to manage. Which design BEST meets these requirements?",
        options: [
          "Create a full mesh of VPC peering connections between all accounts.",
          "Deploy AWS Transit Gateway in the shared services account and share it via AWS Resource Access Manager; attach each VPC to it.",
          "Use a VPN connection from each account to the shared services account.",
          "Place all workloads in a single VPC shared across accounts via VPC sharing only."
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
          "An IAM permissions boundary applied in each account.",
          "A service control policy (SCP) attached to the organizational unit.",
          "An IAM managed policy attached to all roles.",
          "A resource-based policy on the CloudTrail trail."
        ],
        answer: [1],
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
          "A NAT gateway in a public subnet.",
          "An interface VPC endpoint (AWS PrivateLink) for S3.",
          "A gateway VPC endpoint for S3.",
          "An internet gateway with a restrictive security group."
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
          "Use AWS Organizations with dedicated OUs for Security and Infrastructure.",
          "Disable AWS Config to reduce cost across accounts.",
          "Replace all SCPs with network ACLs."
        ],
        answer: [0, 2],
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
          "Amazon RDS Single-AZ with automated backups.",
          "Amazon RDS Multi-AZ with synchronous standby replication.",
          "A self-managed database on a single large EC2 instance with EBS snapshots.",
          "Amazon RDS read replica in the same AZ."
        ],
        answer: [1],
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
          "Enable Cost Explorer and activate cost allocation tags at the management account; review consolidated billing.",
          "Export each account's bill manually to a spreadsheet monthly.",
          "Build a custom Lambda to scrape the billing console.",
          "Use Amazon CloudWatch billing alarms only."
        ],
        answer: [0],
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
          "Add a second Direct Connect connection at a different Direct Connect location.",
          "Replace Direct Connect with a single Site-to-Site VPN.",
          "Add a backup Site-to-Site VPN over the internet as failover for the Direct Connect connection.",
          "Use a NAT gateway as a backup path."
        ],
        answer: [2],
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
          "An SCP using the aws:RequestedRegion condition to deny actions outside approved Regions.",
          "A Lambda function that deletes resources in disallowed Regions after creation.",
          "IAM policies in each account listing every allowed action per Region.",
          "Network ACLs restricting cross-Region traffic."
        ],
        answer: [0],
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
          "DynamoDB on-demand backups restored manually in another Region.",
          "DynamoDB global tables with multi-Region active-active replication.",
          "Daily exports to S3 in the same Region.",
          "A single-Region table with point-in-time recovery only."
        ],
        answer: [1],
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
          "AWS Service Catalog only.",
          "AWS Control Tower Account Factory.",
          "AWS Systems Manager State Manager.",
          "Amazon EventBridge scheduled rules."
        ],
        answer: [1],
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
          "On-Demand Instances.",
          "Compute Savings Plans for a three-year term.",
          "Spot Instances for the whole fleet.",
          "Standard Reserved Instances for a one-year term with no flexibility."
        ],
        answer: [1],
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
          "Deploy AWS Network Firewall in an inspection VPC attached to a Transit Gateway; route spoke traffic through it.",
          "Apply security groups on every instance and rely on those alone.",
          "Use a NAT gateway as a firewall.",
          "Enable VPC Flow Logs and block traffic with Athena queries."
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
          "Permissions boundaries attached when roles are created.",
          "An S3 bucket policy.",
          "A resource-based policy on KMS keys.",
          "CloudWatch alarms on IAM events."
        ],
        answer: [0],
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
          "Enable S3 Transfer Acceleration only.",
          "Put Amazon CloudFront in front of the S3 origin with appropriate cache behaviors.",
          "Replicate the bucket to every Region.",
          "Increase the EC2 instance size of the web tier."
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
          "Reducing cost by deleting logs frequently.",
          "Separation of duties through a centralized, immutable logging account.",
          "Increasing blast radius for faster recovery.",
          "Eliminating the need for SCPs."
        ],
        answer: [1],
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
          "AWS Config with managed and custom rules, aggregated across accounts.",
          "Amazon Inspector for EC2 only.",
          "AWS Trusted Advisor free tier only.",
          "Amazon Macie for all resource types."
        ],
        answer: [0],
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
          "AWS Budgets with budget actions and alerts.",
          "Cost Explorer historical reports only.",
          "AWS Pricing Calculator.",
          "Amazon CloudWatch Logs Insights."
        ],
        answer: [0],
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
          "Amazon Route 53 simple routing to the primary only.",
          "Amazon Route 53 failover routing with health checks on the primary endpoint.",
          "A static IP hardcoded in clients.",
          "Weighted routing split 50/50 between Regions."
        ],
        answer: [1],
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
          "Standard VPC peering between the two VPCs.",
          "Use PrivateLink to expose specific services via interface endpoints, avoiding routing the overlapping CIDRs.",
          "Attach both to the same Transit Gateway route table without changes.",
          "Enable IPv6 only and ignore the overlap."
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
          "VPC peering.",
          "VPC sharing via AWS Resource Access Manager.",
          "Transit Gateway only.",
          "AWS PrivateLink."
        ],
        answer: [1],
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
          "Amazon GuardDuty enabled organization-wide.",
          "AWS WAF on every load balancer.",
          "Amazon Detective alone.",
          "AWS Shield Standard."
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
          "On-Demand Instances.",
          "EC2 Spot Instances with checkpointing.",
          "One-year Standard Reserved Instances.",
          "Dedicated Hosts."
        ],
        answer: [1],
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
          "S3 Versioning alone.",
          "S3 Object Lock in compliance mode with a retention period.",
          "An SCP denying s3:DeleteObject.",
          "Lifecycle policy transitioning to Glacier."
        ],
        answer: [1],
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
          "It removes the need for any monitoring.",
          "It allows the application to tolerate the loss of one AZ while maintaining capacity through scaling.",
          "It guarantees zero cost during failover.",
          "It eliminates the need for database backups."
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
          "AWS Compute Optimizer for rightsizing recommendations.",
          "AWS Cost Explorer Savings Plans and rightsizing recommendations.",
          "Amazon QuickSight as the only source of recommendations.",
          "AWS CloudFormation drift detection.",
          "Amazon Inspector findings."
        ],
        answer: [0, 1],
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
        "An SCP that denies organizations:LeaveOrganization across all OUs.",
        "An IAM policy in each account denying root login.",
        "An SCP that denies sensitive actions when the principal is the root user.",
        "A NACL blocking the AWS Organizations API.",
        "A Lambda that re-invites accounts that leave."
      ],
      answer: [0, 2],
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
        "VPC peering mesh plus a VPN per VPC.",
        "A Transit Gateway in each Region, peered together, with a Direct Connect gateway for on-premises.",
        "A single VPC shared to all accounts via RAM.",
        "PrivateLink endpoints between every pair of VPCs."
      ],
      answer: [1],
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
        "Use AWS KMS customer managed keys with automatic rotation and CloudTrail logging of key usage.",
        "Use only AWS owned keys with no logging.",
        "Encrypt data manually in the application with a static password.",
        "Disable encryption and rely on network controls."
      ],
      answer: [0],
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
        "Deploy across all three AZs but size capacity so any single AZ can serve 100% of peak.",
        "Deploy across all three AZs and size each AZ to serve one-third of peak.",
        "Run in a single AZ with a large instance.",
        "Use two AZs with no extra capacity headroom."
      ],
      answer: [0],
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
        "Cost Categories and cost allocation tags in AWS Cost Explorer / Cost and Usage Report.",
        "CloudWatch metrics only.",
        "AWS Config aggregators.",
        "S3 access logs."
      ],
      answer: [0],
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
        "Create a VPC peering connection with the vendor.",
        "Publish the service via AWS PrivateLink as an endpoint service the vendor consumes through an interface endpoint.",
        "Open a security group rule to the vendor's public IP.",
        "Share the VPC with the vendor via RAM."
      ],
      answer: [1],
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
        "AWS IAM Identity Center (successor to AWS SSO) with permission sets and external IdP federation.",
        "An IAM user per employee in every account.",
        "Access keys shared via email.",
        "Cognito user pools for workforce access to the console."
      ],
      answer: [0],
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
        "Enable S3 Cross-Region Replication to a second Region and run the pipeline active in both with idempotent processing.",
        "Take weekly snapshots of the bucket.",
        "Store data in one Region and restore manually after failure.",
        "Use S3 Versioning only."
      ],
      answer: [0],
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
        "Enforce account-level Block Public Access via an SCP/guardrail so it cannot be disabled.",
        "Rely on each team to set bucket ACLs.",
        "Make all buckets public and use WAF.",
        "Disable CloudTrail to reduce noise."
      ],
      answer: [0, 1],
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
        "Cover baseline with Savings Plans/Reserved Instances and handle spikes with On-Demand and Spot.",
        "Run the entire fleet on On-Demand.",
        "Run the entire fleet on Spot.",
        "Buy Reserved Instances for peak capacity."
      ],
      answer: [0],
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
        "VPC sharing via RAM, where the owner manages networking and participants deploy workloads.",
        "Each app account creates its own VPC and peers to others.",
        "Transit Gateway with no shared subnets.",
        "A single IAM role shared across accounts."
      ],
      answer: [0],
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
        "Email keys to a smaller distribution list.",
        "Store keys in a shared S3 bucket with versioning.",
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
        "Amazon Route 53 Resolver inbound and outbound endpoints with forwarding rules.",
        "A public hosted zone only.",
        "Editing /etc/hosts on each instance.",
        "An internet gateway."
      ],
      answer: [0],
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
        "Deliver CloudTrail logs to a dedicated log archive account's S3 bucket with Object Lock (compliance mode) and a 7-year retention.",
        "Store logs on an EC2 instance with restricted SSH.",
        "Keep logs in each account's default bucket.",
        "Email a monthly log summary to auditors."
      ],
      answer: [0],
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
        "An AWS Config rule that checks for required tags.",
        "Amazon EventBridge to route noncompliance notifications to the team.",
        "A weekly manual spreadsheet review.",
        "Disabling tagging requirements.",
        "An S3 lifecycle rule."
      ],
      answer: [0, 1],
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
        "Deploy a NAT gateway in each AZ's public subnet and route private subnets to the NAT gateway in the same AZ.",
        "Place instances in public subnets with public IPs.",
        "Use a single NAT gateway in one AZ for all subnets.",
        "Attach an internet gateway route to the private subnets."
      ],
      answer: [0],
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
        "Use AWS Organizations delegated administration and auto-enable these services for new accounts.",
        "Manually enable each service per account after creation.",
        "Enable them only in the management account.",
        "Rely on Trusted Advisor."
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
        "Use AWS WAF with rate-based rules at the application layer.",
        "Rely on a single NAT gateway.",
        "Disable CloudFront.",
        "Use security groups alone."
      ],
      answer: [0, 1],
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
        "An SCP combined with a Config rule restricting approved AMI IDs, with EC2 launch denied for others.",
        "A CloudWatch dashboard listing AMIs.",
        "A NACL blocking EC2.",
        "Manual review after launch."
      ],
      answer: [0],
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
        "AWS Fault Injection Service (FIS).",
        "Amazon Inspector.",
        "AWS Budgets.",
        "Amazon Macie."
      ],
      answer: [0],
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
        "Use topology-aware routing so callers prefer same-AZ targets while keeping multi-AZ capacity for failover.",
        "Collapse everything into one AZ.",
        "Disable the load balancer.",
        "Increase instance sizes."
      ],
      answer: [0],
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
        "Create a cross-account IAM role with least-privilege read access that auditors assume.",
        "Share the root credentials.",
        "Make the logs public.",
        "Create IAM users for auditors in the production account with admin."
      ],
      answer: [0],
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
        "Share the Transit Gateway with the account via AWS RAM.",
        "Create a TGW attachment from the new VPC and associate it with the appropriate TGW route table.",
        "Create a full mesh of VPC peering.",
        "Open an internet gateway route.",
        "Disable route propagation entirely."
      ],
      answer: [0, 1],
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
        "Copy backups to a separate, locked-down backup account using AWS Backup with vault lock and cross-account copy.",
        "Keep backups in the same account with versioning.",
        "Store backups on the same EBS volume.",
        "Email backup files to administrators."
      ],
      answer: [0],
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
        "AWS Cost Anomaly Detection.",
        "Amazon GuardDuty.",
        "AWS Config.",
        "Amazon CloudWatch Synthetics."
      ],
      answer: [0],
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
        "Latency-based routing with health checks on each Regional endpoint.",
        "Simple routing to one Region.",
        "Failover routing with a single record.",
        "Weighted routing fixed at 50/50 without health checks."
      ],
      answer: [0],
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
        "AWS Firewall Manager.",
        "Amazon Inspector.",
        "AWS Config only.",
        "Amazon Macie."
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
        "Use AWS Instance Scheduler (or EventBridge + Lambda) to stop non-production instances outside business hours.",
        "Buy Reserved Instances for dev/test.",
        "Increase instance sizes.",
        "Delete the VPC nightly."
      ],
      answer: [0],
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
        "Use VPC endpoints (gateway and interface/PrivateLink) for the AWS services in use.",
        "Use a public NAT gateway for all service traffic.",
        "Whitelist AWS public IP ranges in security groups.",
        "Disable DNS resolution."
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
        "Preventive SCP guardrails denying creation of internet gateways/public load balancers in those OUs, plus detective Config rules.",
        "Trust developers to follow a wiki policy.",
        "Manual review after deployment only.",
        "A CloudWatch alarm on billing."
      ],
      answer: [0],
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
        "Use IAM Identity Center permission sets with session duration limits and CloudTrail logging, or a temporary role assumption workflow.",
        "Share root credentials in a vault for emergencies.",
        "Create a permanent admin IAM user.",
        "Disable MFA to speed access."
      ],
      answer: [0],
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
        "Amazon Aurora Global Database with a secondary Region for fast cross-Region failover.",
        "A single-Region Aurora cluster with snapshots.",
        "RDS Single-AZ with manual restore.",
        "DynamoDB with a relational wrapper."
      ],
      answer: [0],
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
        "Use separate KMS keys per business unit with key policies and grants scoped to each unit's principals.",
        "Use one shared KMS key for everyone.",
        "Disable KMS and use plaintext.",
        "Rotate a single key more often."
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
        "Control Tower Account Factory with account customization and OU assignment (e.g., via AFT).",
        "Manually moving accounts after creation.",
        "A spreadsheet of account-to-OU mappings.",
        "Disabling OUs entirely."
      ],
      answer: [0],
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
        "The Cost and Usage Report (CUR) queried in Athena, filtered by resource and usage type.",
        "A CloudWatch CPU dashboard.",
        "AWS Trusted Advisor security checks.",
        "VPC Flow Logs."
      ],
      answer: [0],
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
        "Place the sensitive workload in its own account/OU to minimize blast radius and apply strict SCPs.",
        "Co-locate it with all other workloads to simplify management.",
        "Use a single shared account for everything.",
        "Rely only on security groups within a shared VPC."
      ],
      answer: [0],
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
        "Run an IPsec VPN over the Direct Connect public/transit VIF (or use MACsec where supported).",
        "Rely on Direct Connect being inherently encrypted.",
        "Use plaintext and trust the private circuit.",
        "Enable S3 encryption only."
      ],
      answer: [0],
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
        "Reduce shared fate by partitioning into cells/bulkheads so one failure does not cascade across all customers.",
        "Centralize everything behind a single shared component.",
        "Remove all redundancy to simplify.",
        "Scale the shared dependency vertically only."
      ],
      answer: [0],
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
        "Tag policies in AWS Organizations combined with SCPs that deny creation of untagged resources where supported.",
        "Ask teams to add tags later.",
        "A monthly tag cleanup script only.",
        "Disable cost allocation tags."
      ],
      answer: [0],
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
        "Enforce IMDSv2 (token-required) on all instances.",
        "Disable security groups.",
        "Use IMDSv1 for compatibility.",
        "Store credentials in user data."
      ],
      answer: [0],
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
        "AWS Security Hub with organization-wide aggregation.",
        "Amazon CloudWatch dashboards only.",
        "AWS Budgets.",
        "Amazon QuickSight."
      ],
      answer: [0],
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
        "AWS Transit Gateway with AWS Site-to-Site VPN and accelerated/managed connectivity, using BGP route propagation.",
        "A separate VPC and VPN per branch with static routes.",
        "VPC peering to each branch.",
        "Public internet exposure of internal services."
      ],
      answer: [0],
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
        "Separate environments (prod/non-prod) into distinct accounts with their own roles and SCPs.",
        "Use one role with broad permissions for all environments.",
        "Disable IAM logging.",
        "Share one VPC across all environments only."
      ],
      answer: [0],
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
        "AWS Trusted Advisor cost optimization checks across the organization.",
        "AWS Compute Optimizer for EC2/EBS/Lambda rightsizing.",
        "Amazon GuardDuty findings.",
        "AWS WAF logs.",
        "Amazon SES analytics."
      ],
      answer: [0, 1],
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
        "Two Direct Connect connections at different locations, with a Site-to-Site VPN as additional backup.",
        "A single Direct Connect with no backup.",
        "Only a Site-to-Site VPN over the internet.",
        "VPC peering to on-premises."
      ],
      answer: [0],
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
        "Use Route 53 Application Recovery Controller with readiness checks and routing controls for orchestrated failover.",
        "Manually update DNS when alerted.",
        "Hardcode the primary Region IP in clients.",
        "Rely on a single-Region deployment."
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
        "An SCP denying config:StopConfigurationRecorder and related actions in member accounts.",
        "An IAM group policy in each account.",
        "A NACL.",
        "A CloudWatch alarm only."
      ],
      answer: [0],
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
        "Cost Explorer Savings Plans coverage and utilization reports.",
        "Amazon CloudWatch metrics.",
        "AWS Config.",
        "Amazon Macie."
      ],
      answer: [0],
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
        "Centralize interface endpoints in a shared services VPC and share access via Transit Gateway with private hosted zone resolution.",
        "Create duplicate interface endpoints in every account.",
        "Use public endpoints for all services.",
        "Peer every account to every other account."
      ],
      answer: [0],
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
        "Capture IAM changes via CloudTrail delivered to an immutable, centralized log store.",
        "Require changes through a CI/CD pipeline with approvals (policy-as-code review).",
        "Allow ad hoc console edits with no logging.",
        "Disable CloudTrail in production.",
        "Grant all engineers IAM full access."
      ],
      answer: [0, 1],
      type: "multi",
      explanation:
        "CloudTrail to an immutable store provides the audit record, and policy-as-code through a pipeline with approvals enforces review before changes apply.",
      topic: "Prescribe security controls",
      difficulty: "medium"
      }
    ]
  });

  /* ---------------------------------------------------------------------------
     DOMAIN 2 — Design for New Solutions (Official weighting ~29%)
  --------------------------------------------------------------------------- */
  QB.domains.push({
    id: "d2",
    name: "Domain 2: Design for New Solutions",
    weightPct: 29,
    topics: [
      "Design deployment strategies",
      "Design solutions for business continuity",
      "Determine security controls for new solutions",
      "Design for reliability and high availability",
      "Determine performance objectives",
      "Determine cost-optimized solutions"
    ],
    questions: [
      {
        id: "d2-q001",
        question:
          "A new application must process spiky, unpredictable traffic and scale to zero when idle, with no server management. Which compute choice BEST fits?",
        options: [
          "Amazon EC2 with a fixed-size fleet.",
          "AWS Lambda behind Amazon API Gateway.",
          "Amazon EC2 Reserved Instances.",
          "A single large EC2 instance with cron jobs."
        ],
        answer: [1],
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
          "In-place deployment overwriting running instances.",
          "Blue/green deployment with traffic shifting and rollback.",
          "Manual deployment during a maintenance window.",
          "Recreating all instances simultaneously."
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
          "Backup and restore.",
          "Pilot light.",
          "Warm standby running at full capacity.",
          "Multi-Region active-active."
        ],
        answer: [1],
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
          "Provision a certificate in AWS Certificate Manager and attach it to an HTTPS listener.",
          "Store private keys in plaintext on each instance.",
          "Use an Application Load Balancer HTTPS listener.",
          "Disable TLS to reduce latency.",
          "Use a self-signed certificate distributed manually."
        ],
        answer: [0, 2],
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
          "Use a single key prefix for all objects.",
          "Rely on S3's automatic scaling; distribute requests across key name space and use parallel multipart reads.",
          "Store all data in one large object.",
          "Disable request retries."
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
          "Amazon Aurora with multiple read replicas and Multi-AZ.",
          "A single RDS instance with manual snapshots.",
          "Self-managed MySQL on one EC2 instance.",
          "Amazon DynamoDB with a relational schema."
        ],
        answer: [0],
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
          "Amazon Cognito user pools for sign-in/federation.",
          "Hardcoded IAM user access keys in the app.",
          "Amazon Cognito identity pools for temporary AWS credentials.",
          "An EC2 instance storing all user passwords.",
          "AWS Shield Advanced."
        ],
        answer: [0, 2],
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
          "Amazon SNS only.",
          "Amazon SQS with a dead-letter queue.",
          "Amazon Kinesis Data Firehose only.",
          "Direct synchronous HTTP calls."
        ],
        answer: [1],
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
          "Amazon CloudFront only.",
          "AWS Global Accelerator.",
          "A Network Load Balancer in one Region.",
          "Route 53 latency routing without health checks."
        ],
        answer: [1],
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
          "Run containers on Amazon ECS with Fargate Spot only for all tasks.",
          "Run a baseline of tasks on Fargate (On-Demand) across AZs and burst with Fargate Spot for non-critical capacity.",
          "Run a single ECS task on one EC2 instance.",
          "Use only the largest Fargate task size for everything."
        ],
        answer: [1],
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
          "Manual snapshots taken weekly.",
          "Amazon RDS automated backups with point-in-time recovery enabled.",
          "Copying data to S3 nightly with a script.",
          "EBS snapshots without coordination."
        ],
        answer: [1],
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
          "Deploy the service in private subnets.",
          "Attach a public IP and rely on security groups only.",
          "Expose it through an internal load balancer and access it over Direct Connect/VPN.",
          "Use an internet gateway with open ingress.",
          "Publish the endpoint in public DNS with no restrictions."
        ],
        answer: [0, 2],
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
          "A single Amazon RDS for PostgreSQL instance.",
          "Amazon Redshift.",
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
          "Multi-Region deployment of the application stack.",
          "A single Region with Multi-AZ only.",
          "Amazon Route 53 health checks with failover or latency routing across Regions.",
          "A NAT gateway in each subnet.",
          "An S3 bucket in one Region only."
        ],
        answer: [0, 2],
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
          "AWS CodePipeline with stages and a manual approval action.",
          "Amazon EventBridge alone.",
          "AWS Config rules.",
          "Amazon CloudWatch dashboards."
        ],
        answer: [0],
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
          "General-purpose instances only.",
          "AWS Inferentia-based (Inf) instances.",
          "Burstable T-family instances.",
          "Memory-optimized instances."
        ],
        answer: [1],
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
          "Environment variables committed to source control.",
          "An S3 object with public read.",
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
          "Canary deployment.",
          "Backup and restore.",
          "Cold standby."
        ],
        answer: [1],
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
          "Add an Amazon ElastiCache caching layer in front of the database.",
          "Increase RDS storage size only.",
          "Move all data to S3.",
          "Disable connection pooling."
        ],
        answer: [0],
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
          "Amazon Kinesis Data Firehose.",
          "Amazon SQS standard queue.",
          "AWS Batch.",
          "Amazon EFS."
        ],
        answer: [0],
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
          "Manual console configuration documented in a wiki.",
          "Shell scripts run ad hoc.",
          "Amazon QuickSight."
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
          "Amazon SQS standard queue.",
          "Amazon SQS FIFO queue.",
          "Amazon SNS standard topic.",
          "Amazon EventBridge bus."
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
          "Host the SPA assets in Amazon S3.",
          "Run the SPA on an always-on EC2 fleet.",
          "Distribute via Amazon CloudFront.",
          "Use a Multi-AZ RDS to serve HTML.",
          "Deploy on Dedicated Hosts."
        ],
        answer: [0, 2],
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
          "Default encryption with SSE-KMS plus a bucket policy denying unencrypted PutObject.",
          "Client-side encryption optional, no policy.",
          "Rely on users to set encryption headers voluntarily.",
          "Enable versioning only."
        ],
        answer: [0],
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
          "Amazon EBS attached to one instance.",
          "Amazon EFS.",
          "Instance store volumes.",
          "Amazon S3 mounted as a block device."
        ],
        answer: [1],
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
        "Upload to S3, trigger AWS Lambda via S3 event notifications to process images, store results in S3.",
        "Run a fixed fleet of EC2 instances polling a folder.",
        "Process synchronously on a single large EC2 instance.",
        "Use a nightly batch job on EMR."
      ],
      answer: [0],
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
        "Amazon Aurora (or RDS) Multi-AZ with synchronous replication and automatic failover.",
        "RDS Single-AZ with read replicas in the same AZ.",
        "DynamoDB single-Region without backups.",
        "Self-managed DB on one instance with hourly snapshots."
      ],
      answer: [0],
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
        "Amazon API Gateway with usage plans and API keys.",
        "An Application Load Balancer alone.",
        "A raw EC2 web server.",
        "Amazon SQS."
      ],
      answer: [0],
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
        "Use AWS KMS customer managed keys for at-rest encryption with key policies controlling access.",
        "Store PII unencrypted in a private subnet.",
        "Use a static application-level password.",
        "Rely on physical security only."
      ],
      answer: [0],
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
        "Use a pooled (shared) database with tenant isolation enforced in the data model and IAM/row-level controls.",
        "Provision a separate AWS account per tenant from day one regardless of size.",
        "Store all tenants' data in one unpartitioned table with no isolation.",
        "Use a single EC2 instance per tenant."
      ],
      answer: [0],
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
        "Amazon Athena.",
        "Amazon EMR with a permanent cluster.",
        "Amazon RDS.",
        "Amazon ElastiCache."
      ],
      answer: [0],
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
        "Amazon SQS FIFO queues with message group ID per customer and content-based deduplication.",
        "SNS standard topic with multiple subscribers.",
        "A standard SQS queue with no dedup.",
        "Direct synchronous calls without queuing."
      ],
      answer: [0],
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
        "Amazon CloudFront for global content delivery and caching.",
        "AWS WAF associated with CloudFront for web attack protection.",
        "A single-Region EC2 instance with a public IP.",
        "No CDN, relying on origin scaling only.",
        "Disabling TLS for speed."
      ],
      answer: [0, 1],
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
        "Multi-Region active-active (or hot standby) with continuous data replication.",
        "Backup and restore.",
        "Pilot light.",
        "Single-Region Multi-AZ only."
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
        "AWS IAM Identity Center federated to the corporate SAML IdP.",
        "Individual IAM users for every employee.",
        "Amazon Cognito identity pools only with no IdP.",
        "Hardcoded credentials in the app."
      ],
      answer: [0],
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
        "Amazon ElastiCache for Redis (or DynamoDB with DAX) for sub-millisecond access.",
        "Amazon RDS for PostgreSQL.",
        "Amazon Redshift.",
        "Amazon S3."
      ],
      answer: [0],
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
        "Canary deployment with CloudWatch alarms triggering automatic rollback.",
        "In-place deployment to all instances at once.",
        "Manual deployment with no monitoring.",
        "Blue/green with no health checks."
      ],
      answer: [0],
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
        "Amazon S3 with lifecycle policies for cost-tiering.",
        "AWS Lake Formation for fine-grained data access governance.",
        "A single EBS volume for all data.",
        "Amazon ElastiCache as the data lake store.",
        "Storing all data in one DynamoDB table."
      ],
      answer: [0, 1],
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
        "Amazon ECS on AWS Fargate (with appropriate task scaling).",
        "A fixed EC2 Auto Scaling group at minimum size 10.",
        "AWS Lambda for jobs that run several hours.",
        "A single always-on EC2 instance."
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
        "An Auto Scaling group spanning multiple AZs.",
        "Health checks (ELB/EC2) integrated with Auto Scaling to replace unhealthy instances.",
        "A single instance with a static IP.",
        "Manual instance replacement on alert.",
        "Disabling health checks to avoid churn."
      ],
      answer: [0, 1],
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
        "Amazon Kinesis Data Streams with per-device partition keys.",
        "A standard SQS queue.",
        "Amazon SES.",
        "Amazon RDS."
      ],
      answer: [0],
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
        "Enable CloudTrail delivering to an S3 bucket with Object Lock and restricted access.",
        "Log to local instance files only.",
        "Disable logging to reduce cost.",
        "Keep logs in a public bucket."
      ],
      answer: [0],
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
        "Amazon DynamoDB global tables.",
        "A single-Region RDS instance.",
        "Self-managed MongoDB on one EC2 instance.",
        "Amazon Redshift."
      ],
      answer: [0],
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
        "AWS Step Functions to orchestrate the workflow with built-in retries and state tracking.",
        "A single Lambda doing everything sequentially.",
        "Cron on EC2.",
        "An SQS queue with no orchestration."
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
        "Trigger a scanning workflow (e.g., Lambda invoking a managed/3rd-party scanner) on S3 upload before marking files usable.",
        "Assume files are clean and skip scanning.",
        "Scan files manually once a month.",
        "Disable uploads entirely."
      ],
      answer: [0],
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
        "EC2 Spot Instances (or Fargate Spot) with checkpointing.",
        "Reserved Instances for 24/7.",
        "On-Demand at the largest size.",
        "Dedicated Hosts."
      ],
      answer: [0],
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
        "In-place rolling update only.",
        "Recreate (all at once).",
        "Manual nightly deploys."
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
        "Store sessions in Amazon DynamoDB or ElastiCache, keeping the app tier stateless.",
        "Store sessions on local instance disk.",
        "Pin each user to one instance with sticky sessions only.",
        "Keep sessions in instance memory only."
      ],
      answer: [0],
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
        "AWS Glue jobs for serverless ETL/format conversion.",
        "AWS Glue Data Catalog for schema/metadata.",
        "A permanent EMR cluster running 24/7.",
        "Manual conversion on a laptop.",
        "Amazon SES for cataloging."
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
        "API Gateway throttling/usage plans plus AWS WAF rate-based rules.",
        "No limits, scale infinitely.",
        "Block all traffic above a fixed IP count.",
        "Disable the API during peak."
      ],
      answer: [0],
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
        "Amazon Aurora Serverless v2.",
        "A fixed large RDS instance.",
        "Self-managed MySQL on EC2.",
        "DynamoDB with provisioned capacity."
      ],
      answer: [0],
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
        "Unlimited retries with no timeout.",
        "Synchronous tight coupling everywhere.",
        "Remove health checks."
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
        "Serve via CloudFront with range requests over an S3 origin.",
        "Serve directly from one EC2 instance.",
        "Store files in DynamoDB.",
        "Use a single-Region NLB without caching."
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
        "Store credentials in AWS Secrets Manager with rotation and retrieve them at runtime via IAM permissions.",
        "Embed credentials in environment variables in code.",
        "Store credentials in a public S3 object.",
        "Pass credentials as query strings."
      ],
      answer: [0],
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
        "Multi-AZ deployment behind a load balancer with Auto Scaling and health checks.",
        "Single instance in one AZ.",
        "Two instances in the same AZ.",
        "On-premises only."
      ],
      answer: [0],
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
        "Write daily snapshots to S3 with Object Lock and catalog them for query via Athena.",
        "Overwrite a single file each day.",
        "Keep data only in a mutable database.",
        "Email reports without storage."
      ],
      answer: [0],
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
        "AWS Step Functions with choice states and catch/retry.",
        "A single monolithic Lambda with nested if-statements and no retries.",
        "Cron jobs on EC2.",
        "An SQS queue alone."
      ],
      answer: [0],
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
        "Cluster placement group with Elastic Fabric Adapter (EFA).",
        "Spread placement group across Regions.",
        "Instances in different AZs with NAT.",
        "Single instance scaling vertically."
      ],
      answer: [0],
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
        "Generate S3 presigned URLs (or presigned POST with conditions) from the backend.",
        "Make the bucket public for uploads.",
        "Proxy all uploads through EC2.",
        "Email files to an inbox."
      ],
      answer: [0],
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
        "Implement graceful degradation with fallbacks/caching when the dependency is unavailable.",
        "Fail the entire request if any dependency is slow.",
        "Retry indefinitely with no fallback.",
        "Remove the dependency check."
      ],
      answer: [0],
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
        "S3 Standard-Infrequent Access (or Glacier Instant Retrieval for archival with fast access).",
        "S3 Standard for everything.",
        "S3 Glacier Deep Archive for minute-level retrieval.",
        "EBS volumes."
      ],
      answer: [0],
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
        "Policy-as-code checks (e.g., CloudFormation Guard/linting) in the CI/CD pipeline before deploy.",
        "Review security after go-live only.",
        "Disable security checks to ship faster.",
        "Manual eyeballing of templates occasionally."
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
        "Use Amazon Redshift Serverless (or pause/resume) so capacity scales with usage.",
        "Run a large provisioned Redshift cluster 24/7.",
        "Use a single RDS instance for petabyte analytics.",
        "Keep an EMR cluster always on."
      ],
      answer: [0],
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
        "Run Lambda in a VPC with egress restricted via security groups, VPC endpoints, and a controlled NAT/egress path.",
        "Allow all outbound traffic by default.",
        "Disable VPC integration entirely.",
        "Use public subnets with open egress."
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
        "Amazon FSx for Lustre linked to S3 for high-throughput training data.",
        "A single EBS volume attached to one node.",
        "S3 mounted directly as a block device.",
        "Instance store on one node."
      ],
      answer: [0],
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
        "Staged/percentage-based rollout with automatic stop conditions (e.g., CodeDeploy deployment configs / deployment alarms).",
        "Deploy to all at once with no stop conditions.",
        "Manual deploy device by device.",
        "No monitoring during rollout."
      ],
      answer: [0],
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
        "Amazon EventBridge with event pattern rules routing to targets.",
        "A single SQS queue polled by all consumers.",
        "Direct synchronous calls.",
        "Amazon SES."
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
        "Use AWS Certificate Manager to provision and auto-renew certificates.",
        "Attach the ACM certificate to a CloudFront distribution or ALB HTTPS listener.",
        "Generate self-signed certs and rotate manually.",
        "Disable HTTPS to reduce overhead.",
        "Store private keys in application code."
      ],
      answer: [0, 1],
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
        "Amazon Kinesis Data Streams for ingestion.",
        "Managed stream processing (e.g., Kinesis Data Analytics / managed Flink) for aggregation.",
        "A single cron job on EC2.",
        "Amazon SES for aggregation.",
        "A manual nightly batch."
      ],
      answer: [0, 1],
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
        "Apply per-tenant throttling/quotas and isolate critical capacity (bulkheading).",
        "Share one unbounded pool with no limits.",
        "Give the largest tenant unlimited priority.",
        "Disable rate limiting."
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
        "Cache query results (e.g., ElastiCache or materialized views) with a suitable TTL.",
        "Query the primary database on every page load with no caching.",
        "Scale the database vertically only.",
        "Disable indexes."
      ],
      answer: [0],
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
        "Warm standby.",
        "Backup and restore.",
        "Pilot light.",
        "Multi-Region active-active."
      ],
      answer: [0],
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
        "Use IAM roles/SigV4 (or mTLS via a service mesh like App Mesh) for service identity and authorization.",
        "Hardcode shared secrets in each service.",
        "Allow all internal calls without authentication.",
        "Use a single API key for everything."
      ],
      answer: [0],
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
        "Configure provisioned concurrency for the function during business hours.",
        "Increase the function timeout.",
        "Reduce memory to the minimum.",
        "Disable the function outside business hours."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Provisioned concurrency keeps function instances warm, eliminating cold-start latency for critical endpoints.",
      topic: "Determine performance objectives",
      difficulty: "medium"
      }
    ]
  });

  /* ---------------------------------------------------------------------------
     DOMAIN 3 — Continuous Improvement for Existing Solutions
     (Official weighting ~25%)
  --------------------------------------------------------------------------- */
  QB.domains.push({
    id: "d3",
    name: "Domain 3: Continuous Improvement for Existing Solutions",
    weightPct: 25,
    topics: [
      "Determine a strategy to improve overall operational excellence",
      "Determine a strategy to improve security",
      "Determine a strategy to improve performance",
      "Determine a strategy to improve reliability",
      "Identify opportunities for cost optimizations"
    ],
    questions: [
      {
        id: "d3-q001",
        question:
          "An existing application logs to local instance disks, making troubleshooting hard after instances terminate. Which improvement centralizes logs with minimal code change?",
        options: [
          "Install the CloudWatch agent to ship logs to Amazon CloudWatch Logs.",
          "Increase instance disk size.",
          "Email logs nightly to administrators.",
          "Store logs only on the local file system."
        ],
        answer: [0],
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
          "Rotate the keys monthly by hand.",
          "Replace embedded keys with IAM roles for EC2 (instance profiles).",
          "Store the keys in a public S3 bucket for easy access.",
          "Share one key across all applications."
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
          "Add read replicas and direct reporting queries to them.",
          "Increase the backup retention period.",
          "Disable Multi-AZ.",
          "Reduce the instance size."
        ],
        answer: [0],
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
          "Move the application to a larger single instance.",
          "Distribute instances across multiple AZs behind a load balancer with Auto Scaling.",
          "Add more EBS volumes to the existing instance.",
          "Schedule nightly reboots."
        ],
        answer: [1],
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
          "Apply AWS Compute Optimizer rightsizing recommendations.",
          "Buy more On-Demand capacity.",
          "Increase all instance sizes for headroom.",
          "Disable monitoring to save cost."
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
          "Automate remediation with AWS Systems Manager Automation runbooks triggered by alarms.",
          "Add more operators to the on-call rotation.",
          "Increase alarm thresholds so alerts fire less often.",
          "Disable the alarms."
        ],
        answer: [0],
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
          "Place AWS WAF with managed rule groups in front of the application.",
          "Move the database to a private subnet only.",
          "Increase the EC2 instance count.",
          "Disable logging."
        ],
        answer: [0],
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
          "Add Amazon CloudFront caching in front of the origin.",
          "Increase origin instance size only.",
          "Move the origin to a smaller Region.",
          "Disable compression."
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
          "Decouple producers and workers with Amazon SQS and use visibility timeout plus a DLQ.",
          "Run all jobs synchronously on a single instance.",
          "Remove retries to avoid duplicates.",
          "Increase the worker instance size."
        ],
        answer: [0],
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
          "Use S3 Intelligent-Tiering to automatically move objects between access tiers.",
          "Delete the data.",
          "Move everything to S3 Glacier Deep Archive immediately.",
          "Copy the data to EBS."
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
          "Enable an organization trail in AWS CloudTrail delivering to a central, restricted S3 bucket.",
          "Ask each team to keep their own change log.",
          "Enable CloudTrail only in the management account.",
          "Rely on CloudWatch dashboards."
        ],
        answer: [0],
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
          "Implement timeouts, retries with backoff, and circuit breaking toward the dependency.",
          "Remove all timeouts so requests always complete.",
          "Increase thread pools without limits.",
          "Disable health checks."
        ],
        answer: [0],
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
          "Enable Concurrency Scaling to add transient capacity for bursts.",
          "Reduce the number of nodes.",
          "Disable result caching.",
          "Convert all tables to a single distribution key at random."
        ],
        answer: [0],
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
          "Manual quarterly audits only.",
          "Automatic remediation via Systems Manager Automation documents triggered by Config.",
          "Turning off Config to reduce noise.",
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
          "Purchase Savings Plans or Reserved Instances matching the steady usage.",
          "Move everything to Spot Instances.",
          "Increase instance sizes.",
          "Add more On-Demand instances."
        ],
        answer: [0],
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
          "Deploy only on Fridays.",
          "Stop testing to speed releases.",
          "Apply changes manually faster."
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
          "Use VPC endpoints for supported AWS services and cache/host packages internally to cut NAT traffic.",
          "Add more NAT gateways.",
          "Move instances to public subnets with public IPs (ignoring security).",
          "Increase instance sizes."
        ],
        answer: [0],
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
          "Migrate to Amazon Aurora, which offers faster failover than traditional RDS Multi-AZ.",
          "Increase the backup window.",
          "Disable automated backups.",
          "Use a single-AZ deployment."
        ],
        answer: [0],
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
          "Add Amazon CloudWatch Synthetics canaries and RUM to monitor user-facing endpoints.",
          "Reduce metric retention.",
          "Disable detailed monitoring.",
          "Alert only on CPU."
        ],
        answer: [0],
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
          "AWS Security Hub with organization aggregation.",
          "Amazon CloudWatch dashboards only.",
          "A manually maintained wiki.",
          "AWS Cost Explorer."
        ],
        answer: [0],
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
          "Configure reserved concurrency for the function and use provisioned concurrency for latency-critical paths.",
          "Reduce the function timeout.",
          "Remove error handling.",
          "Increase the deployment package size."
        ],
        answer: [0],
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
          "AWS Trusted Advisor cost optimization checks (and Cost Explorer recommendations).",
          "Amazon GuardDuty.",
          "AWS WAF logs.",
          "Amazon SNS topics."
        ],
        answer: [0],
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
          "Incrementally decompose into microservices using the strangler-fig pattern behind an API layer.",
          "Rewrite everything at once in production.",
          "Add more memory to the monolith only.",
          "Stop deploying changes."
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
          "Redesign the key schema to distribute writes across more partition keys (avoid hot partitions).",
          "Reduce provisioned capacity.",
          "Use a single global secondary index for all reads and writes.",
          "Switch to strongly consistent reads only."
        ],
        answer: [0],
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
          "Enable automatic rotation and restrict access with least-privilege IAM and KMS key policies.",
          "Share secrets across all functions for convenience.",
          "Log secrets to CloudWatch for debugging.",
          "Disable encryption to reduce latency."
        ],
        answer: [0],
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
        "Install the CloudWatch agent to centralize logs in CloudWatch Logs.",
        "Increase EBS volume size.",
        "Take nightly AMIs.",
        "Email logs to admins."
      ],
      answer: [0],
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
        "Move credentials to AWS Secrets Manager and grant the app IAM access to retrieve them at runtime.",
        "Move the config file to a private S3 bucket.",
        "Obfuscate the credentials in the repo.",
        "Rotate the credentials but keep them in the repo."
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
        "Add read replicas and route analytical/reporting queries to them.",
        "Increase backup retention.",
        "Disable Multi-AZ.",
        "Add more indexes to every table blindly."
      ],
      answer: [0],
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
        "Spread instances across multiple AZs behind a load balancer with Auto Scaling.",
        "Move to a bigger single instance.",
        "Add more EBS volumes.",
        "Reboot nightly."
      ],
      answer: [0],
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
        "AWS Compute Optimizer.",
        "Amazon GuardDuty.",
        "AWS WAF.",
        "Amazon SES."
      ],
      answer: [0],
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
        "Use Systems Manager Automation runbooks invoked by CloudWatch alarms/EventBridge.",
        "Add more on-call engineers.",
        "Raise alarm thresholds so fewer alerts fire.",
        "Document steps in a wiki only."
      ],
      answer: [0],
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
        "Add AWS WAF with managed rule groups in front of the app.",
        "Move the database to a private subnet only.",
        "Increase instance count.",
        "Disable logging."
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
        "Add CloudFront caching in front of the origin.",
        "Increase origin instance size only.",
        "Disable compression.",
        "Move the origin to a smaller Region."
      ],
      answer: [0],
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
        "Decouple with SQS using visibility timeout and a dead-letter queue for poison messages.",
        "Run jobs synchronously on one instance.",
        "Remove retries to avoid duplicates.",
        "Increase worker size."
      ],
      answer: [0],
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
        "Use S3 Intelligent-Tiering.",
        "Delete the data.",
        "Move everything to Glacier Deep Archive.",
        "Copy to EBS."
      ],
      answer: [0],
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
        "Configure an organization CloudTrail delivering to a central, restricted S3 bucket with Object Lock.",
        "Each team keeps its own log.",
        "Enable CloudTrail only in the management account.",
        "Rely on dashboards."
      ],
      answer: [0],
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
        "Add timeouts, bounded retries with backoff, and a circuit breaker toward the dependency.",
        "Remove all timeouts.",
        "Increase thread pools without limit.",
        "Disable health checks."
      ],
      answer: [0],
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
        "Enable Concurrency Scaling.",
        "Reduce node count.",
        "Disable result caching.",
        "Randomize distribution keys."
      ],
      answer: [0],
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
        "AWS Config rules to detect noncompliance.",
        "Systems Manager Automation remediation triggered by Config.",
        "Manual quarterly audits only.",
        "Turning off Config.",
        "A static spreadsheet."
      ],
      answer: [0, 1],
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
        "Purchase Savings Plans/Reserved Instances matching the steady usage.",
        "Move everything to Spot.",
        "Increase instance sizes.",
        "Add more On-Demand instances."
      ],
      answer: [0],
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
        "Deploy only on Fridays.",
        "Stop testing to ship faster.",
        "Apply changes manually but faster."
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
        "Use VPC endpoints for AWS services and host/cache packages internally to cut NAT traffic.",
        "Add more NAT gateways.",
        "Move instances to public subnets (ignoring security).",
        "Increase instance sizes."
      ],
      answer: [0],
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
        "Migrate to Amazon Aurora, which generally fails over faster by promoting a replica.",
        "Increase the backup window.",
        "Disable automated backups.",
        "Move to single-AZ."
      ],
      answer: [0],
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
        "Add CloudWatch Synthetics canaries and RUM to monitor user-facing endpoints.",
        "Reduce metric retention.",
        "Disable detailed monitoring.",
        "Alert on disk only."
      ],
      answer: [0],
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
        "AWS Security Hub with organization aggregation.",
        "CloudWatch dashboards only.",
        "A wiki.",
        "Cost Explorer."
      ],
      answer: [0],
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
        "Configure reserved concurrency for the function and provisioned concurrency for the latency-critical path.",
        "Reduce the timeout.",
        "Remove error handling.",
        "Increase package size."
      ],
      answer: [0],
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
        "AWS Trusted Advisor cost optimization checks (organization-wide).",
        "Amazon GuardDuty.",
        "AWS WAF logs.",
        "Amazon SNS."
      ],
      answer: [0],
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
        "Rewrite everything at once in production.",
        "Add more memory only.",
        "Stop deploying changes."
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
        "Redesign the key schema to distribute writes across more partition key values.",
        "Reduce provisioned capacity.",
        "Use strongly consistent reads only.",
        "Add a single GSI for all access."
      ],
      answer: [0],
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
        "Enable rotation and apply least-privilege IAM and scoped KMS key policies.",
        "Share secrets across all functions.",
        "Log secrets for debugging.",
        "Disable encryption for speed."
      ],
      answer: [0],
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
        "Scale storage/IOPS (e.g., move to gp3/io2 or larger instance) and add read replicas for read scaling.",
        "Delete historical data without analysis.",
        "Disable backups to free IOPS.",
        "Move to single-AZ."
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
        "Implement backups/replication to a second Region (pilot light) as a foundation for DR.",
        "Do nothing until a full active-active rewrite is funded.",
        "Move to a single larger instance.",
        "Disable Multi-AZ to simplify."
      ],
      answer: [0],
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
        "AWS Cost Anomaly Detection.",
        "Amazon Inspector.",
        "AWS Config.",
        "Amazon Macie."
      ],
      answer: [0],
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
        "Adopt blue/green deployments with automated rollback on failure.",
        "Deploy in place during business hours.",
        "Remove health checks.",
        "Deploy less frequently with bigger batches."
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
        "Use cross-account IAM role assumption (sts:AssumeRole) instead of long-lived keys.",
        "Email keys quarterly.",
        "Store keys in a shared bucket.",
        "Lengthen the keys."
      ],
      answer: [0],
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
        "Add an ElastiCache caching layer in front of the database.",
        "Increase storage size only.",
        "Move data to S3.",
        "Disable connection pooling."
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
        "Enforce tagging via tag policies/SCPs and activate cost allocation tags.",
        "Guess ownership manually each month.",
        "Disable cost allocation tags.",
        "Delete untagged resources without review."
      ],
      answer: [0],
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
        "Partition into cells/bulkheads so a failure is contained rather than global.",
        "Centralize further behind one component.",
        "Remove redundancy.",
        "Scale the shared component vertically only."
      ],
      answer: [0],
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
        "Use AWS Systems Manager Patch Manager with maintenance windows.",
        "Patch by SSHing into each instance manually.",
        "Disable patching to avoid downtime.",
        "Rebuild instances by hand monthly."
      ],
      answer: [0],
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
        "Use DynamoDB on-demand or auto scaling to match actual traffic.",
        "Set provisioned capacity to the maximum observed peak permanently.",
        "Disable auto scaling.",
        "Move to a single RDS instance."
      ],
      answer: [0],
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
        "Use AWS Config rules to detect overly permissive security groups.",
        "Use AWS Firewall Manager to centrally enforce security group policies.",
        "Open all ports for simplicity.",
        "Disable Config to reduce noise.",
        "Rely on manual review only."
      ],
      answer: [0, 1],
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
        "Host the static site in S3 and serve via CloudFront, removing the EC2 fleet.",
        "Add more EC2 instances.",
        "Move to larger instances.",
        "Use Dedicated Hosts."
      ],
      answer: [0],
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
        "Prefer same-AZ routing/affinity for service calls while retaining multi-AZ capacity for failover.",
        "Collapse into one AZ.",
        "Remove the load balancer.",
        "Increase instance sizes."
      ],
      answer: [0],
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
        "AWS Fault Injection Service (FIS).",
        "Amazon Inspector.",
        "AWS Budgets.",
        "Amazon Macie."
      ],
      answer: [0],
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
        "Deploy a NAT gateway per AZ and route each private subnet to its same-AZ NAT gateway.",
        "Use one larger NAT gateway.",
        "Move all instances to public subnets.",
        "Remove outbound access."
      ],
      answer: [0],
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
        "Enable AWS X-Ray (or OpenTelemetry) tracing across services.",
        "Add more CPU alarms.",
        "Disable logging.",
        "Increase instance count."
      ],
      answer: [0],
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
        "Copy backups to a separate, locked-down account using AWS Backup with vault lock.",
        "Keep backups in the same bucket with versioning only.",
        "Store backups on the same EBS volume.",
        "Email backups to admins."
      ],
      answer: [0],
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
        "Wait for user complaints.",
        "Disable metrics to reduce cost.",
        "Increase log retention only."
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
        "Convert data to columnar Parquet and partition it so queries scan less data.",
        "Run queries more frequently.",
        "Store data as uncompressed CSV.",
        "Disable the Glue Data Catalog."
      ],
      answer: [0],
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
        "Use IAM Access Analyzer (and last-accessed data) to identify and remove unused permissions.",
        "Grant administrator access to simplify.",
        "Disable IAM logging.",
        "Add more permissions to avoid errors."
      ],
      answer: [0],
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
        "Enable provisioned concurrency for the critical function during peak hours.",
        "Increase the timeout.",
        "Reduce memory to minimum.",
        "Disable the function off-peak."
      ],
      answer: [0],
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
        "Cost Explorer Savings Plans coverage and utilization reports.",
        "Amazon GuardDuty.",
        "AWS Config.",
        "Amazon Macie."
      ],
      answer: [0],
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
        "Adopt infrastructure as code (CloudFormation/CDK) for repeatable, version-controlled environments.",
        "Document steps in a chat thread.",
        "Have one person do all deployments.",
        "Deploy less often."
      ],
      answer: [0],
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
        "Add AWS WAF rate-based rules (and Shield) in front of the endpoint.",
        "Increase instance count indefinitely.",
        "Block all traffic during floods.",
        "Disable the endpoint."
      ],
      answer: [0],
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
        "Orchestrate the workflow with AWS Step Functions, gaining built-in retries and error handling.",
        "Add more memory to each Lambda.",
        "Remove error handling.",
        "Invoke functions in a tight loop."
      ],
      answer: [0],
      type: "single",
      explanation:
        "Step Functions add durable orchestration with retries and catch logic, preventing dropped steps on transient errors.",
      topic: "Determine a strategy to improve reliability",
      difficulty: "medium"
      }
    ]
  });

  /* ---------------------------------------------------------------------------
     DOMAIN 4 — Accelerate Workload Migration and Modernization
     (Official weighting ~20%)
  --------------------------------------------------------------------------- */
  QB.domains.push({
    id: "d4",
    name: "Domain 4: Accelerate Workload Migration and Modernization",
    weightPct: 20,
    topics: [
      "Select existing workloads and processes for potential migration",
      "Determine the optimal migration approach for existing workloads",
      "Determine a new architecture for existing workloads",
      "Determine opportunities for modernization and enhancements"
    ],
    questions: [
      {
        id: "d4-q001",
        question:
          "A company wants to inventory its on-premises servers and get right-sizing and dependency data before migrating. Which service is BEST for discovery?",
        options: [
          "AWS Application Discovery Service.",
          "Amazon CloudWatch.",
          "AWS Budgets.",
          "Amazon Inspector."
        ],
        answer: [0],
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
          "AWS Application Migration Service (MGN).",
          "AWS Glue.",
          "Amazon Kinesis.",
          "AWS Step Functions."
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
          "Upload directly over the internet.",
          "Order an AWS Snowball Edge device for offline data transfer.",
          "Use S3 Transfer Acceleration over the same link.",
          "Email the data."
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
          "AWS Database Migration Service (DMS) to move the data.",
          "AWS Schema Conversion Tool (SCT) to convert the schema.",
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
          "Refactor into microservices.",
          "Retain (keep as-is) or rehost minimally given the short remaining life.",
          "Re-platform onto a managed database.",
          "Repurchase a SaaS replacement immediately."
        ],
        answer: [1],
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
          "Amazon ECS on AWS Fargate.",
          "A single large EC2 instance.",
          "AWS Lambda with a 15-minute monolith function.",
          "On-premises VMs."
        ],
        answer: [0],
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
          "DMS full load plus ongoing change data capture (CDC) replication.",
          "A one-time export only.",
          "Manual mysqldump at cutover only.",
          "Disabling the source during the entire migration."
        ],
        answer: [0],
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
          "Amazon RDS for MySQL.",
          "Amazon DynamoDB.",
          "Amazon Redshift.",
          "Self-managed MySQL on EC2."
        ],
        answer: [0],
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
          "Amazon FSx for Windows File Server.",
          "Amazon EFS.",
          "Amazon S3 only.",
          "Instance store."
        ],
        answer: [0],
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
          "AWS DataSync.",
          "Manual SCP scripts.",
          "Amazon SES.",
          "AWS Budgets."
        ],
        answer: [0],
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
          "Put the web tier behind an Application Load Balancer with Auto Scaling.",
          "Introduce a message queue (SQS) between web and app tiers for decoupling.",
          "Run everything on one instance for simplicity.",
          "Remove all load balancing.",
          "Use a static IP hardcoded in clients."
        ],
        answer: [0, 1],
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
          "AWS Migration Evaluator (with Application Discovery data).",
          "Amazon CloudWatch alarms.",
          "AWS WAF.",
          "Amazon Macie."
        ],
        answer: [0],
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
          "Use AWS Glue for serverless ETL.",
          "Orchestrate with AWS Step Functions or EventBridge Scheduler.",
          "Keep cron on a 24/7 EC2 instance.",
          "Run the ETL manually each night.",
          "Use Amazon SNS as the ETL engine."
        ],
        answer: [0, 1],
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
          "Use MGN test instances to validate before cutover, then perform a final sync and cutover.",
          "Cut over directly without testing.",
          "Delete the source before testing.",
          "Skip validation to save time."
        ],
        answer: [0],
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
          "Externalize session state to Amazon ElastiCache or DynamoDB.",
          "Store sessions on local instance disks.",
          "Pin users to a single instance permanently.",
          "Disable Auto Scaling."
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
          "AWS Site-to-Site VPN or Direct Connect between on-premises and the VPC.",
          "Public internet with no encryption.",
          "An S3 gateway endpoint.",
          "An internet gateway only."
        ],
        answer: [0],
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
          "Repurchase (move to a SaaS/commercial product).",
          "Rehost.",
          "Retain.",
          "Relocate."
        ],
        answer: [0],
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
          "Single big-bang migration of all systems overnight.",
          "Random ordering with no dependency analysis.",
          "Migrating databases after their dependent apps."
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
          "Amazon Redshift.",
          "Amazon RDS for SQL Server.",
          "Amazon DynamoDB.",
          "Amazon ElastiCache."
        ],
        answer: [0],
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
          "AWS Storage Gateway (File Gateway).",
          "Amazon SES.",
          "AWS Budgets.",
          "Amazon Cognito."
        ],
        answer: [0],
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
          "Publish events to Amazon EventBridge or SNS.",
          "Process asynchronously with AWS Lambda or SQS-driven workers.",
          "Make all calls synchronous and blocking.",
          "Run a single-threaded process on one instance.",
          "Remove retries entirely."
        ],
        answer: [0, 1],
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
          "AWS Snowmobile or many Snowball devices for exabyte/petabyte-scale offline transfer.",
          "S3 multipart upload over the internet.",
          "Emailing compressed archives.",
          "AWS DataSync over a 10 Mbps link."
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
          "Land workloads into a Control Tower-governed account structure with SCP guardrails and baseline IAM.",
          "Grant administrator access to all migration engineers permanently.",
          "Disable SCPs during migration.",
          "Skip IAM until after go-live."
        ],
        answer: [0],
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
        "AWS Application Migration Service (MGN).",
        "AWS Glue.",
        "Amazon Kinesis.",
        "AWS Step Functions."
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
        "Order AWS Snowball Edge devices for offline transfer.",
        "Upload directly over the internet.",
        "Use S3 Transfer Acceleration on the same link.",
        "Email compressed archives."
      ],
      answer: [0],
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
        "AWS Schema Conversion Tool (SCT) to convert schema/code.",
        "AWS Database Migration Service (DMS) to migrate data with CDC.",
        "Amazon CloudFront.",
        "AWS Budgets.",
        "Amazon SES."
      ],
      answer: [0, 1],
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
        "AWS Application Discovery Service.",
        "Amazon CloudWatch.",
        "AWS WAF.",
        "Amazon Macie."
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
        "Retain or minimal rehost given the short remaining life.",
        "Refactor into microservices.",
        "Repurchase a SaaS replacement now.",
        "Re-platform onto a managed database."
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
        "Full load plus ongoing change data capture (CDC).",
        "One-time export only.",
        "Manual dump at cutover only.",
        "Taking the source offline for the whole migration."
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
        "Amazon FSx for Windows File Server.",
        "Amazon EFS.",
        "Amazon S3 only.",
        "Instance store."
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
        "AWS Migration Hub.",
        "Amazon QuickSight.",
        "AWS Config.",
        "Amazon EventBridge."
      ],
      answer: [0],
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
        "AWS DataSync.",
        "Manual rsync scripts.",
        "Amazon SES.",
        "AWS Budgets."
      ],
      answer: [0],
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
        "Amazon RDS for PostgreSQL (or Aurora PostgreSQL).",
        "Amazon DynamoDB.",
        "Amazon Redshift.",
        "Self-managed PostgreSQL on EC2."
      ],
      answer: [0],
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
        "Launching test instances from replicated volumes prior to cutover.",
        "Deleting the source before testing.",
        "Skipping validation to save time.",
        "Cutting over directly with no test."
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
        "Amazon ECS on AWS Fargate.",
        "A single large EC2 instance.",
        "AWS Lambda for a multi-hour monolith.",
        "On-premises VMs."
      ],
      answer: [0],
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
        "AWS Migration Evaluator.",
        "Amazon CloudWatch alarms.",
        "AWS WAF.",
        "Amazon Macie."
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
        "Move session state to ElastiCache or DynamoDB.",
        "Store sessions on local disk.",
        "Pin users to one instance permanently.",
        "Disable Auto Scaling."
      ],
      answer: [0],
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
        "AWS Site-to-Site VPN or Direct Connect between on-premises and the VPC.",
        "Public internet with no encryption.",
        "An S3 gateway endpoint.",
        "An internet gateway only."
      ],
      answer: [0],
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
        "Repurchase.",
        "Rehost.",
        "Retain.",
        "Relocate."
      ],
      answer: [0],
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
        "Big-bang overnight migration.",
        "Random ordering with no dependency analysis.",
        "Migrating databases after dependent apps."
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
        "Amazon Redshift.",
        "Amazon RDS for SQL Server.",
        "Amazon DynamoDB.",
        "Amazon ElastiCache."
      ],
      answer: [0],
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
        "AWS Storage Gateway (File Gateway).",
        "Amazon SES.",
        "AWS Budgets.",
        "Amazon Cognito."
      ],
      answer: [0],
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
        "Publish events to Amazon EventBridge or SNS.",
        "Process asynchronously with Lambda or SQS-driven workers.",
        "Make all calls synchronous and blocking.",
        "Run a single-threaded process on one instance.",
        "Remove retries entirely."
      ],
      answer: [0, 1],
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
        "AWS Snowmobile or a large fleet of Snowball devices for exabyte/petabyte-scale offline transfer.",
        "S3 multipart upload over the internet.",
        "Emailing archives.",
        "DataSync over a 10 Mbps link."
      ],
      answer: [0],
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
        "Land workloads into AWS Control Tower-governed accounts with SCP guardrails and baseline IAM.",
        "Grant admin to all migration engineers permanently.",
        "Disable SCPs during migration.",
        "Skip IAM until after go-live."
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
        "AWS Glue for serverless ETL.",
        "AWS Step Functions or EventBridge Scheduler for orchestration.",
        "Keep cron on a 24/7 EC2 instance.",
        "Run the ETL manually nightly.",
        "Use Amazon SNS as the ETL engine."
      ],
      answer: [0, 1],
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
        "Put the web tier behind an ALB with Auto Scaling.",
        "Introduce an SQS queue between web and app tiers.",
        "Run everything on one instance.",
        "Remove all load balancing.",
        "Hardcode a static IP in clients."
      ],
      answer: [0, 1],
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
        "Amazon RDS for SQL Server.",
        "Amazon DynamoDB.",
        "Amazon Redshift.",
        "Self-managed SQL Server on EC2 with manual backups."
      ],
      answer: [0],
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
        "Amazon EMR reading data from Amazon S3.",
        "A single large EC2 instance running Hadoop.",
        "Amazon RDS.",
        "Amazon ElastiCache."
      ],
      answer: [0],
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
        "Use Application Discovery Service agents/agentless collectors to gather utilization and dependencies over time.",
        "Guess based on server names.",
        "Migrate all servers without assessment.",
        "Use CloudWatch on servers not yet in AWS."
      ],
      answer: [0],
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
        "Amazon EFS mounted by the containers.",
        "Instance store.",
        "A single EBS volume attached to one task.",
        "Local container ephemeral storage only."
      ],
      answer: [0],
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
        "VMware Cloud on AWS (or AWS MGN for rehost to EC2).",
        "Amazon SES.",
        "AWS Budgets.",
        "Amazon Cognito."
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
        "Amazon Cognito (user pools with federation).",
        "Hardcoded credentials.",
        "A self-managed auth server on one instance.",
        "Amazon SES."
      ],
      answer: [0],
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
        "Use DMS with ongoing CDC to minimize downtime.",
        "Use DMS data validation to verify migrated data.",
        "Take the source offline for the entire migration.",
        "Skip validation to save time.",
        "Email the data."
      ],
      answer: [0, 1],
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
        "Amazon MQ (managed ActiveMQ/RabbitMQ).",
        "Amazon DynamoDB.",
        "Amazon Redshift.",
        "Amazon S3."
      ],
      answer: [0],
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
        "AWS CloudFormation (or CDK).",
        "Manual console setup.",
        "Ad hoc shell scripts run once.",
        "Amazon QuickSight."
      ],
      answer: [0],
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
        "AWS DataSync (with the appropriate location type) for scheduled transfer to S3.",
        "Manual downloads then re-uploads.",
        "Amazon SES.",
        "AWS Budgets."
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
        "AWS CodePipeline for orchestration.",
        "AWS CodeBuild for build/test.",
        "Manual deploys from a laptop.",
        "Emailing artifacts.",
        "Amazon SES as the build server."
      ],
      answer: [0, 1],
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
        "Use a VPC with chosen CIDRs connected via Direct Connect/VPN and keep services in private subnets.",
        "Place services in public subnets with open ingress.",
        "Use only an internet gateway.",
        "Rely on S3 endpoints for app traffic."
      ],
      answer: [0],
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
        "Run a parallel-run/validation phase against the migrated target before cutover.",
        "Cut over directly with no testing.",
        "Delete the source first.",
        "Skip validation to save time."
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
        "Amazon CloudWatch for metrics and logs.",
        "AWS X-Ray for distributed tracing.",
        "No monitoring to reduce cost.",
        "Local log files only.",
        "Amazon SES for tracing."
      ],
      answer: [0, 1],
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
        "AWS Service Catalog.",
        "Amazon SES.",
        "AWS Budgets.",
        "Amazon Macie."
      ],
      answer: [0],
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
        "Rehost (lift-and-shift).",
        "Refactor.",
        "Repurchase.",
        "Retire."
      ],
      answer: [0],
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
        "Retire.",
        "Rehost.",
        "Re-platform.",
        "Relocate."
      ],
      answer: [0],
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
        "Add read replicas and route reporting queries to them.",
        "Increase backup retention.",
        "Disable Multi-AZ.",
        "Move to a single instance."
      ],
      answer: [0],
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
        "A single EC2 instance running Docker.",
        "On-premises Kubernetes only.",
        "Amazon SES."
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
        "AWS Schema Conversion Tool (SCT) with its assessment report.",
        "Amazon CloudWatch.",
        "AWS Budgets.",
        "Amazon Macie."
      ],
      answer: [0],
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
        "Use Route 53 weighted routing to split traffic between on-premises and AWS endpoints.",
        "Cut over all traffic at once.",
        "Hardcode the AWS IP in all clients immediately.",
        "Disable DNS."
      ],
      answer: [0],
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
        "Use polyglot persistence: choose the right database per service's access pattern.",
        "Force all services to share one relational database.",
        "Store everything in S3 only.",
        "Use one DynamoDB table for all access patterns."
      ],
      answer: [0],
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
        "AWS Application Migration Service (MGN) with continuous block-level replication.",
        "AWS Glue.",
        "Amazon SES.",
        "AWS Budgets."
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
        "EC2 Auto Scaling groups across AZs.",
        "Health checks integrated with Auto Scaling for self-healing.",
        "A single fixed instance.",
        "Manual capacity changes only.",
        "Disabling health checks."
      ],
      answer: [0, 1],
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
        "A dependency map feeding wave-based migration plans with rollback criteria.",
        "An alphabetical list of servers.",
        "A single big-bang plan with no rollback.",
        "A random migration order."
      ],
      answer: [0],
      type: "single",
      explanation:
        "A dependency map driving wave-based plans with rollback criteria sequences interdependent apps safely.",
      topic: "Select existing workloads and processes for potential migration",
      difficulty: "medium"
      }
    ]
  });

  // Convenience counts
  QB.meta.totalQuestions = QB.domains.reduce(function (n, d) {
    return n + d.questions.length;
  }, 0);
  QB.meta.questionsPerDomain = QB.domains.map(function (d) {
    return { domain: d.id, count: d.questions.length };
  });

  // Expose globally
  window.SAP_C02_QUESTION_BANK = QB;
})();
