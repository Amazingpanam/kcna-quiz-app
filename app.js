// Questions embedded directly (first 5 questions - add all later)
let questions = [
  {
    "question": "What native runtime is Open Container Initiative (OCI) compliant?",
    "options": ["runC", "runV", "kata-containers", "gvisor"],
    "answer": "runC"
  },
  {
    "question": "Which API object is the recommended way to run a scalable, stateless application?",
    "options": ["ReplicaSet", "Deployment", "DaemonSet", "Pod"],
    "answer": "Deployment"
  },
  {
    "question": "What happens when a CronJob runs?",
    "options": [
      "Kubelet runs Pod directly",
      "Scheduler handles CronJob",
      "CronJob creates Pod directly",
      "CronJob creates Job, then Job creates Pod"
    ],
    "answer": "CronJob creates Job, then Job creates Pod"
  },
  {
    "question": "What is kubelet?",
    "options": [
      "Dashboard",
      "Network proxy",
      "Scheduler",
      "Agent that ensures containers run in Pods"
    ],
    "answer": "Agent that ensures containers run in Pods"
  },
  {
    "question": "Default authorization mode in Kubernetes API server?",
    "options": ["RBAC", "AlwaysAllow", "AlwaysDeny", "ABAC"],
    "answer": "AlwaysAllow"
  },
  {
    "question": "Most cost-effective burst workload solution?",
    "options": [
      "Dedicated nodes",
      "Cluster Autoscaler",
      "Reserved instances",
      "Priority classes"
    ],
    "answer": "Cluster Autoscaler"
  },
  {
    "question": "Service with no cluster IP?",
    "options": ["Headless Service", "Nodeless Service", "IPLess Service", "Specless Service"],
    "answer": "Headless Service"
  },
  {
    "question": "CI/CD stands for?",
    "options": [
      "Continuous Info/Development",
      "Continuous Integration/Development",
      "Cloud Integration/Cloud Development",
      "Continuous Integration/Continuous Deployment"
    ],
    "answer": "Continuous Integration/Continuous Deployment"
  },
  {
    "question": "How are Secrets stored?",
    "options": ["AES encrypted", "Plain text", "SHA256", "Base64 encoded"],
    "answer": "Base64 encoded"
  },
  {
    "question": "What does kube-proxy do?",
    "options": [
      "Ingress control",
      "Forward traffic to endpoints",
      "Manage egress",
      "Manage API access"
    ],
    "answer": "Forward traffic to endpoints"
  },
  {
    "question": "How long is a deprecated API supported?",
    "options": ["9 months", "24 months", "12 months", "6 months"],
    "answer": "12 months"
  },
  {
    "question": "Lightweight Kubernetes for IoT?",
    "options": ["OpenShift", "k3s", "RKE", "k1s"],
    "answer": "k3s"
  },
  {
    "question": "Automatically manage nodes?",
    "options": [
      "Node Autoscaler",
      "Cluster Autoscaler",
      "HPA",
      "VPA"
    ],
    "answer": "Cluster Autoscaler"
  },
  {
    "question": "OPA function?",
    "options": [
      "Python policies only",
      "Validates requests and applies policies",
      "Test only after publishing",
      "Only Kubernetes"
    ],
    "answer": "Validates requests and applies policies"
  },
  {
    "question": "IaC stands for?",
    "options": [
      "Infrastructure and Code",
      "Infrastructure as Code",
      "Infrastructure above Code",
      "Infrastructure across Code"
    ],
    "answer": "Infrastructure as Code"
  },
  {
    "question": "Framework without managing infra?",
    "options": ["Docker Swarm", "Kubernetes", "Mesos", "Serverless"],
    "answer": "Serverless"
  },
  {
    "question": "Container orchestration feature?",
    "options": [
      "Message distribution",
      "Dynamic scheduling",
      "JAR deployment",
      "VM distribution"
    ],
    "answer": "Dynamic scheduling"
  },
  {
    "question": "Workload needing headless service?",
    "options": ["StatefulSet", "CronJob", "Deployment", "DaemonSet"],
    "answer": "StatefulSet"
  },
  {
    "question": "What is Helm?",
    "options": [
      "Dashboard",
      "Package manager",
      "Scheduler",
      "Testing tool"
    ],
    "answer": "Package manager"
  },
  {
    "question": "Real-time logs command?",
    "options": [
      "kubectl logs -p",
      "kubectl logs -c",
      "kubectl logs -l",
      "kubectl logs -f"
    ],
    "answer": "kubectl logs -f"
  },
  {
    "question": "How to load data before Pod startup?",
    "options": [
      "Init container with shared storage",
      "PVC only",
      "Sidecar container",
      "Another pod"
    ],
    "answer": "Init container with shared storage"
  },
  {
    "question": "Core functionality of GitOps tools?",
    "options": [
      "Track human changes",
      "Replace human ops",
      "Create PRs automatically",
      "Compare desired vs actual state"
    ],
    "answer": "Compare desired vs actual state"
  },
  {
    "question": "Which ensures all nodes run a Pod?",
    "options": ["ReplicaSet", "StatefulSet", "DaemonSet", "Deployment"],
    "answer": "DaemonSet"
  },
  {
    "question": "CRD stands for?",
    "options": [
      "Custom Resource Definition",
      "Custom Restricted Definition",
      "Custom RUST Definition",
      "Custom Resource Data"
    ],
    "answer": "Custom Resource Definition"
  },
  {
    "question": "SIG stands for?",
    "options": [
      "Special Interest Group",
      "Software Installation Guide",
      "Support Info Group",
      "Strategy Group"
    ],
    "answer": "Special Interest Group"
  },
  {
    "question": "Order of 4C security?",
    "options": [
      "Cloud -> Container -> Cluster -> Code",
      "Container -> Cluster -> Code -> Cloud",
      "Cluster -> Container -> Code -> Cloud",
      "Code -> Container -> Cluster -> Cloud"
    ],
    "answer": "Code -> Container -> Cluster -> Cloud"
  },
  {
    "question": "Secure container runtimes?",
    "options": [
      "runc, cgroups",
      "docker, containerd",
      "runsc, kata",
      "crun, cri-o"
    ],
    "answer": "runsc, kata"
  },
  {
    "question": "Service Mesh standard?",
    "options": [
      "SMS",
      "SMT",
      "SMI",
      "SMF"
    ],
    "answer": "SMI"
  },
  {
    "question": "Ingress does what?",
    "options": [
      "Track endpoints",
      "Service type",
      "Pod communication rules",
      "Expose routes externally"
    ],
    "answer": "Expose routes externally"
  },
  {
    "question": "Service discovery means?",
    "options": [
      "Apps locate each other",
      "Find MAC address",
      "Assign IPs",
      "DNS conversion"
    ],
    "answer": "Apps locate each other"
  },
  {
    "question": "Service mesh components?",
    "options": [
      "Tracing & logs",
      "Circuit breaking",
      "Runtime plane",
      "Proxy & control plane"
    ],
    "answer": "Proxy & control plane"
  },
  {
    "question": "Self-scaling storage operator?",
    "options": [
      "Rook",
      "Kubernetes",
      "Helm",
      "CSI"
    ],
    "answer": "Rook"
  },
  {
    "question": "Required fields in YAML?",
    "options": [
      "apiVersion, kind, metadata",
      "kind, namespace",
      "apiVersion, namespace",
      "kind, data"
    ],
    "answer": "apiVersion, kind, metadata"
  },
  {
    "question": "SRE responsibility?",
    "options": [
      "Build features",
      "Monitoring baseline",
      "Budgeting",
      "Policy writing"
    ],
    "answer": "Monitoring baseline"
  },
  {
    "question": "Default namespaces?",
    "options": [
      "default, kube-system, kube-public, kube-node-lease",
      "default, system",
      "kube-main",
      "kube-primary"
    ],
    "answer": "default, kube-system, kube-public, kube-node-lease"
  },
  {
    "question": "What is a probe?",
    "options": [
      "Monitoring API",
      "kubectl scope",
      "Diagnostic by kubelet",
      "Logging tool"
    ],
    "answer": "Diagnostic by kubelet"
  },
  {
    "question": "Prevent split brain?",
    "options": [
      "Replication",
      "Consensus",
      "Rolling updates",
      "StatefulSet"
    ],
    "answer": "StatefulSet"
  },
  {
    "question": "CNI feature for traffic control?",
    "options": [
      "BGP",
      "IPAM",
      "PSP",
      "Network Policies"
    ],
    "answer": "Network Policies"
  },
  {
    "question": "Kubernetes DNS role?",
    "options": [
      "External DNS",
      "DNS service hosting",
      "IPv6 conversion",
      "Service name resolution"
    ],
    "answer": "Service name resolution"
  },
  {
    "question": "LoadBalancer pending issue?",
    "options": [
      "Cloud Controller Manager",
      "LB Manager",
      "Cloud Manager",
      "LB Controller"
    ],
    "answer": "Cloud Controller Manager"
  },
  {
    "question": "What does a Horizontal Pod Autoscaler (HPA) do?",
    "options": [
      "Scales nodes",
      "Scales pods based on metrics",
      "Scales storage",
      "Scales containers manually"
    ],
    "answer": "Scales pods based on metrics"
  },
  {
    "question": "What is the purpose of a Namespace?",
    "options": [
      "Isolate resources",
      "Assign IP",
      "Manage nodes",
      "Store secrets"
    ],
    "answer": "Isolate resources"
  },
  {
    "question": "What is etcd?",
    "options": [
      "Container runtime",
      "Distributed key-value store",
      "Scheduler",
      "CLI tool"
    ],
    "answer": "Distributed key-value store"
  },
  {
    "question": "Which component schedules pods?",
    "options": [
      "kubelet",
      "kube-proxy",
      "scheduler",
      "controller manager"
    ],
    "answer": "scheduler"
  },
  {
    "question": "What does kubectl do?",
    "options": [
      "Runs containers",
      "CLI to interact with cluster",
      "Schedules pods",
      "Stores data"
    ],
    "answer": "CLI to interact with cluster"
  },
  {
    "question": "What is a Pod?",
    "options": [
      "Single container only",
      "Group of containers",
      "Node",
      "Cluster"
    ],
    "answer": "Group of containers"
  },
  {
    "question": "What is a ReplicaSet?",
    "options": [
      "Ensures desired number of pods",
      "Schedules nodes",
      "Manages storage",
      "Handles networking"
    ],
    "answer": "Ensures desired number of pods"
  },
  {
    "question": "What is a Deployment?",
    "options": [
      "Manages ReplicaSets",
      "Stores secrets",
      "Schedules pods",
      "Manages nodes"
    ],
    "answer": "Manages ReplicaSets"
  },
  {
    "question": "What is a StatefulSet?",
    "options": [
      "Stateless workloads",
      "Stateful workloads with identity",
      "Node management",
      "Logging"
    ],
    "answer": "Stateful workloads with identity"
  },
  {
    "question": "What is a DaemonSet?",
    "options": [
      "Runs one pod per node",
      "Runs pods randomly",
      "Runs multiple containers",
      "Runs storage"
    ],
    "answer": "Runs one pod per node"
  },
  {
    "question": "What is a Service?",
    "options": [
      "Expose pods",
      "Store data",
      "Manage nodes",
      "Run containers"
    ],
    "answer": "Expose pods"
  },
  {
    "question": "What is Ingress?",
    "options": [
      "Internal routing",
      "External access rules",
      "Node communication",
      "Pod storage"
    ],
    "answer": "External access rules"
  },
  {
    "question": "What is ConfigMap?",
    "options": [
      "Stores secrets",
      "Stores config data",
      "Manages pods",
      "Schedules nodes"
    ],
    "answer": "Stores config data"
  },
  {
    "question": "What is Secret?",
    "options": [
      "Plain config",
      "Sensitive data storage",
      "Pod storage",
      "Node config"
    ],
    "answer": "Sensitive data storage"
  },
  {
    "question": "What is a Volume?",
    "options": [
      "Temporary storage",
      "Persistent storage for pods",
      "Network storage",
      "Cluster storage"
    ],
    "answer": "Persistent storage for pods"
  },
  {
    "question": "What is PersistentVolume (PV)?",
    "options": [
      "Storage request",
      "Actual storage resource",
      "Pod storage",
      "Temporary storage"
    ],
    "answer": "Actual storage resource"
  },
  {
    "question": "What is PersistentVolumeClaim (PVC)?",
    "options": [
      "Storage request",
      "Actual storage",
      "Node storage",
      "Temporary storage"
    ],
    "answer": "Storage request"
  },
  {
    "question": "What is Docker?",
    "options": [
      "Container runtime",
      "Cloud provider",
      "Scheduler",
      "Database"
    ],
    "answer": "Container runtime"
  },
  {
    "question": "What is Kubernetes?",
    "options": [
      "Container orchestration platform",
      "Database",
      "Programming language",
      "OS"
    ],
    "answer": "Container orchestration platform"
  },
  {
    "question": "What is CI?",
    "options": [
      "Continuous Integration",
      "Cloud Integration",
      "Code Integration",
      "Continuous Inspection"
    ],
    "answer": "Continuous Integration"
  },
  {
    "question": "What is CD?",
    "options": [
      "Continuous Deployment",
      "Code Deployment",
      "Cloud Deployment",
      "Continuous Delivery"
    ],
    "answer": "Continuous Deployment"
  },
  {
    "question": "What is Git?",
    "options": [
      "Version control system",
      "Database",
      "Cloud platform",
      "Programming language"
    ],
    "answer": "Version control system"
  },
  {
    "question": "What is GitOps?",
    "options": [
      "Git-based deployment model",
      "Git hosting",
      "Git storage",
      "Git networking"
    ],
    "answer": "Git-based deployment model"
  },
  {
    "question": "What is monitoring?",
    "options": [
      "Tracking system metrics",
      "Deploying apps",
      "Managing nodes",
      "Writing code"
    ],
    "answer": "Tracking system metrics"
  },
  {
    "question": "What is logging?",
    "options": [
      "Recording events",
      "Tracking metrics",
      "Deploying apps",
      "Managing nodes"
    ],
    "answer": "Recording events"
  },
  {
    "question": "What is Prometheus?",
    "options": [
      "Monitoring tool",
      "Database",
      "Scheduler",
      "Container runtime"
    ],
    "answer": "Monitoring tool"
  },
  {
    "question": "What is Grafana?",
    "options": [
      "Visualization tool",
      "Database",
      "Scheduler",
      "Container runtime"
    ],
    "answer": "Visualization tool"
  },
  {
    "question": "What is alerting?",
    "options": [
      "Sending notifications",
      "Tracking logs",
      "Deploying apps",
      "Managing nodes"
    ],
    "answer": "Sending notifications"
  },
  {
    "question": "What is a container?",
    "options": [
      "Lightweight virtual environment",
      "Full virtual machine",
      "Operating system",
      "Database"
    ],
    "answer": "Lightweight virtual environment"
  },
  {
    "question": "What is container orchestration?",
    "options": [
      "Managing containers at scale",
      "Running a single container",
      "Building containers",
      "Storing containers"
    ],
    "answer": "Managing containers at scale"
  },
  {
    "question": "What is a node in Kubernetes?",
    "options": [
      "Worker machine",
      "Pod",
      "Cluster",
      "Service"
    ],
    "answer": "Worker machine"
  },
  {
    "question": "What is a cluster?",
    "options": [
      "Group of nodes",
      "Single node",
      "Single pod",
      "Single container"
    ],
    "answer": "Group of nodes"
  },
  {
    "question": "What is kube-apiserver?",
    "options": [
      "Entry point to Kubernetes",
      "Scheduler",
      "Proxy",
      "Storage"
    ],
    "answer": "Entry point to Kubernetes"
  },
  {
    "question": "What is kube-scheduler?",
    "options": [
      "Assigns pods to nodes",
      "Runs containers",
      "Stores data",
      "Manages networking"
    ],
    "answer": "Assigns pods to nodes"
  },
  {
    "question": "What is controller manager?",
    "options": [
      "Maintains desired state",
      "Runs containers",
      "Stores logs",
      "Manages nodes"
    ],
    "answer": "Maintains desired state"
  },
  {
    "question": "What is containerd?",
    "options": [
      "Container runtime",
      "Scheduler",
      "Monitoring tool",
      "Database"
    ],
    "answer": "Container runtime"
  },
  {
    "question": "What is CRI?",
    "options": [
      "Container Runtime Interface",
      "Cluster Runtime Interface",
      "Container Resource Interface",
      "Cluster Resource Interface"
    ],
    "answer": "Container Runtime Interface"
  },
  {
    "question": "What is CNI?",
    "options": [
      "Container Network Interface",
      "Cluster Network Interface",
      "Container Node Interface",
      "Cluster Node Interface"
    ],
    "answer": "Container Network Interface"
  },
  {
    "question": "What is CSI?",
    "options": [
      "Container Storage Interface",
      "Cluster Storage Interface",
      "Container Service Interface",
      "Cluster Service Interface"
    ],
    "answer": "Container Storage Interface"
  },
  {
    "question": "What is a sidecar container?",
    "options": [
      "Helper container",
      "Main container",
      "Node container",
      "Cluster container"
    ],
    "answer": "Helper container"
  },
  {
    "question": "What is blue-green deployment?",
    "options": [
      "Two environments switch",
      "Single deployment",
      "Rolling update",
      "Manual deployment"
    ],
    "answer": "Two environments switch"
  },
  {
    "question": "What is canary deployment?",
    "options": [
      "Gradual rollout",
      "Full rollout",
      "Manual rollout",
      "Rollback"
    ],
    "answer": "Gradual rollout"
  },
  {
    "question": "What is rolling update?",
    "options": [
      "Update gradually",
      "Replace all at once",
      "Manual update",
      "Stop deployment"
    ],
    "answer": "Update gradually"
  },
  {
    "question": "What is rollback?",
    "options": [
      "Revert to previous version",
      "Delete app",
      "Update app",
      "Restart app"
    ],
    "answer": "Revert to previous version"
  },
  {
    "question": "What is SLA?",
    "options": [
      "Service Level Agreement",
      "Service Load Agreement",
      "System Level Agreement",
      "Storage Level Agreement"
    ],
    "answer": "Service Level Agreement"
  },
  {
    "question": "What is SLO?",
    "options": [
      "Service Level Objective",
      "System Level Objective",
      "Service Load Objective",
      "Storage Level Objective"
    ],
    "answer": "Service Level Objective"
  },
  {
    "question": "What is SLI?",
    "options": [
      "Service Level Indicator",
      "System Level Indicator",
      "Service Load Indicator",
      "Storage Level Indicator"
    ],
    "answer": "Service Level Indicator"
  },
  {
    "question": "What is observability?",
    "options": [
      "Understanding system behavior",
      "Deploying apps",
      "Managing nodes",
      "Writing code"
    ],
    "answer": "Understanding system behavior"
  },
  {
    "question": "What is tracing?",
    "options": [
      "Track request flow",
      "Track logs",
      "Track metrics",
      "Track nodes"
    ],
    "answer": "Track request flow"
  },
  {
    "question": "What is latency?",
    "options": [
      "Response delay",
      "Throughput",
      "Bandwidth",
      "CPU usage"
    ],
    "answer": "Response delay"
  },
  {
    "question": "What is throughput?",
    "options": [
      "Amount processed",
      "Delay",
      "CPU usage",
      "Memory usage"
    ],
    "answer": "Amount processed"
  },
  {
    "question": "What is high availability?",
    "options": [
      "System uptime",
      "System downtime",
      "System storage",
      "System logs"
    ],
    "answer": "System uptime"
  },
  {
    "question": "What is fault tolerance?",
    "options": [
      "Handle failures",
      "Avoid failures",
      "Create failures",
      "Ignore failures"
    ],
    "answer": "Handle failures"
  },
  {
    "question": "What is scalability?",
    "options": [
      "Handle growth",
      "Reduce load",
      "Delete resources",
      "Stop system"
    ],
    "answer": "Handle growth"
  },
  {
    "question": "What is elasticity?",
    "options": [
      "Auto scale resources",
      "Manual scaling",
      "Stop scaling",
      "Delete scaling"
    ],
    "answer": "Auto scale resources"
  },
  {
    "question": "What is load balancing?",
    "options": [
      "Distribute traffic",
      "Store data",
      "Run containers",
      "Monitor systems"
    ],
    "answer": "Distribute traffic"
  }
];

let currentQuestion = 0;
let score = 0;
let canAnswer = true;

function showQuestion() {
  if (!questions.length || currentQuestion >= questions.length) return;
  
  const q = questions[currentQuestion];
  const questionNumber = currentQuestion + 1;
  
  document.getElementById("question").innerHTML = `Question ${questionNumber}/${questions.length}<br>${q.question}`;
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  canAnswer = true;

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function updateScore() {
  document.getElementById("score").innerHTML = `📊 Score: ${score} / ${questions.length}`;
}

function checkAnswer(selected) {
  if (!canAnswer) return;
  canAnswer = false;
  
  const correct = questions[currentQuestion].answer;
  const isCorrect = (selected === correct);
  
  if (isCorrect) {
    score++;
  }
  
  const messageDiv = document.createElement("div");
  messageDiv.className = "message";
  
  if (isCorrect) {
    messageDiv.innerHTML = "✅ Correct!";
    messageDiv.style.backgroundColor = "#d4edda";
    messageDiv.style.color = "#155724";
  } else {
    messageDiv.innerHTML = `❌ Wrong! Correct answer: ${correct}`;
    messageDiv.style.backgroundColor = "#f8d7da";
    messageDiv.style.color = "#721c24";
  }
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.appendChild(messageDiv);
  updateScore();
  
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(btn => btn.disabled = true);
  
  setTimeout(() => {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      completeQuiz();
    }
  }, 1500);
}

function completeQuiz() {
  const percentage = Math.round((score / questions.length) * 100);
  document.getElementById("question").innerHTML = `🏆 Quiz Complete! 🏆<br><br>Your Score: ${score} / ${questions.length}<br>(${percentage}%)`;
  document.getElementById("options").innerHTML = "";
  document.getElementById("nextBtn").style.display = "none";
  
  const restartBtn = document.createElement("button");
  restartBtn.innerText = "🔄 Restart Quiz";
  restartBtn.className = "restart-btn";
  restartBtn.onclick = () => location.reload();
  document.querySelector(".container").appendChild(restartBtn);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  const btns = document.querySelectorAll(".option-btn");
  if (btns.length > 0 && btns[0].disabled && btns[0].parentElement.querySelector(".message")) {
    return;
  }
  
  if (currentQuestion < questions.length && !canAnswer) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      completeQuiz();
    }
  }
});

// Initialize
showQuestion();
updateScore();
