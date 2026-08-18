export interface CaseStudy {
  problem: string;
  approach: string;
  architecture: string[];
  implementation: string;
  result: string;
  lessons: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  status: string;
  statusType: 'production' | 'pilot' | 'prototype' | 'active' | 'completed' | 'winner';
  description: string;
  stack: string[];
  gridSize: 'large' | 'medium' | 'small' | 'wide';
  visualType: 'waveform' | 'callFlow' | 'threatGraph' | 'dashboard' | 'contentPipeline' | 'trafficDiagram' | 'socialChart' | 'cloudArch' | 'carbonScore';
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    id: 'vox-ai',
    number: '01 / AI VOICE PLATFORM',
    title: 'Vox AI',
    category: 'AI Voice Platform',
    year: '2026',
    status: 'IN PRODUCTION',
    statusType: 'production',
    description: 'Converts recorded calls into structured notes and actionable follow-up tasks, eliminating manual transcription and administrative logging.',
    stack: ['OPENAI', 'WHISPER', 'FASTAPI', 'PYTHON'],
    gridSize: 'large',
    visualType: 'waveform',
    caseStudy: {
      problem: 'Administrative bottleneck where sales and support teams spent 15+ hours weekly manually transcribing recorded call conversations into CRM systems, leading to missed action items and data inaccuracy.',
      approach: 'Engineered an asynchronous voice processing service leveraging OpenAI Whisper for high-precision audio tokenization and custom LLM prompt orchestration for extraction of key entities, decisions, and follow-up tasks.',
      architecture: [
        'Client Audio Recording Upload (WAV / MP3 / M4A)',
        'FastAPI Async Processing Queue',
        'Whisper STT Tokenizer & Diarization Engine',
        'Context Window Orchestrator & Task Extraction Prompt',
        'Structured Output Verification (JSON Schema)',
        'Automated CRM Task Webhook Dispatch'
      ],
      implementation: 'Built with FastAPI and Python async workers to process multi-minute audio files without blocking main loop. Implemented custom schema enforcement ensuring 100% deterministic JSON output format.',
      result: 'Eliminated manual admin call logging entirely for pilot users, reducing record creation latency from 25 minutes per call to under 12 seconds with 98.4% task extraction accuracy.',
      lessons: 'Nondeterministic LLM outputs can be rendered production-grade by wrapping prompt evaluation in strict JSON Schema validation loops and retries.'
    }
  },
  {
    id: 'omniconnect',
    number: '02 / AI VOICE AGENT',
    title: 'OmniConnect',
    category: 'AI Voice Agent',
    year: '2026',
    status: 'LIVE PILOT',
    statusType: 'pilot',
    description: 'Autonomous AI receptionist that answers incoming calls, qualifies callers using structured conversational logic, and books appointments directly into client calendars.',
    stack: ['OPENAI', 'ELEVENLABS', 'N8N', 'REST API'],
    gridSize: 'medium',
    visualType: 'callFlow',
    caseStudy: {
      problem: 'Small businesses and service providers miss high-intent leads during off-hours, losing up to 40% of potential bookings due to delayed phone response times.',
      approach: 'Developed an end-to-end autonomous voice receptionist integrating low-latency speech synthesis, conversational state machines, and calendar availability APIs.',
      architecture: [
        'Inbound Telephony Webhook',
        'Real-time Speech-to-Text Tokenizer',
        'OpenAI Conversational State Router',
        'ElevenLabs Low-Latency Streaming Voice Synthesis',
        'n8n Calendar & CRM Orchestration Workflow'
      ],
      implementation: 'Orchestrated n8n workflows linking WebRTC call sessions with ElevenLabs streaming voice generation to maintain sub-600ms conversational turn-taking latency.',
      result: 'Currently deployed in live pilot with 3 commercial clients, processing over 120 inbound calls per week with zero missed lead qualification opportunities.',
      lessons: 'Conversational latency is the single most critical factor for AI voice agents—optimizing chunk sizes during audio streaming makes or breaks caller trust.'
    }
  },
  {
    id: 'leakage-guard',
    number: '03 / SECURITY & DLP',
    title: 'Leakage Guard',
    category: 'Security & Data Loss Prevention AI',
    year: '2026',
    status: 'PROTOTYPE',
    statusType: 'prototype',
    description: 'AI-driven Data Loss Prevention system monitoring network traffic in real time and evaluating ML import pipelines to detect exfiltration threats.',
    stack: ['PYTHON', 'SCIKIT-LEARN', 'MACHINE LEARNING', 'NETWORK SECURITY'],
    gridSize: 'medium',
    visualType: 'threatGraph',
    caseStudy: {
      problem: 'Modern ML development pipelines often leak sensitive enterprise IP when unvetted data import scripts or public LLM endpoints transfer payloads across corporate boundaries.',
      approach: 'Built a real-time network packet inspection and payload evaluation engine using supervised ML classification models trained on exfiltration patterns.',
      architecture: [
        'Real-time Packet Stream Listener',
        'Feature Extractor (Entropy, Vector Length, Payload Density)',
        'Scikit-Learn Random Forest Classifier',
        'Anomaly Score & Threat Evaluation Matrix',
        'Automated Socket Block & Alert Dispatcher'
      ],
      implementation: 'Developed in Python using Scikit-Learn classifiers to calculate real-time data exfiltration probability scores on outbound TCP stream slices.',
      result: 'Achieved 94.2% detection rate on synthetic exfiltration benchmark datasets with low false-positive rates during model cross-validation.',
      lessons: 'Feature engineering—specifically calculating entropy across payload byte distributions—yields far better threat detection than raw keyword matching.'
    }
  },
  {
    id: 'omnimate-health',
    number: '04 / HEALTHCARE SAAS',
    title: 'Omnimate Health System',
    category: 'Healthcare SaaS Platform',
    year: '2026',
    status: 'ACTIVE REPO',
    statusType: 'active',
    description: 'Full-stack healthcare management backbone built under Omnimate to streamline patient scheduling, medical records, and practice workflows.',
    stack: ['NODE.JS', 'EXPRESS', 'POSTGRESQL', 'REST API'],
    gridSize: 'wide',
    visualType: 'dashboard',
    caseStudy: {
      problem: 'Clinical practices suffer from fragmented software tools for patient intake, record keeping, and appointment management, leading to data synchronization errors.',
      approach: 'Architected a unified relational backend and API suite tailored for HIPAA-compliant clinical workflows, patient history tracking, and role-based staff access.',
      architecture: [
        'Node.js / Express Modular Monolith API',
        'PostgreSQL Relational Schema (ACID Compliant)',
        'JWT & RBAC Middleware Authorization Layer',
        'Patient Encounter & EHR Data Pipelines',
        'Audit Logging & Security Audit Middleware'
      ],
      implementation: 'Engineered normalized PostgreSQL relational schemas with foreign key constraints and indexed queries to ensure instant retrieval of patient histories.',
      result: 'Built complete core backend supporting practice workflows, sub-10ms API query responses, and scalable patient record indexing.',
      lessons: 'In healthcare SaaS, data integrity and strict audit logging must be engineered into the database schema layer from day zero.'
    }
  },
  {
    id: 'content-engine',
    number: '05 / AUTOMATION PIPELINE',
    title: 'AI Content Engine',
    category: 'Workflow Automation Engine',
    year: '2026',
    status: 'PRODUCTION',
    statusType: 'production',
    description: 'End-to-end automated video engine orchestrating scriptwriting, voice synthesis, image generation, visual assembly, and multi-channel publishing.',
    stack: ['PYTHON', 'ELEVENLABS', 'RUNWAY ML', 'MIDJOURNEY', 'N8N'],
    gridSize: 'large',
    visualType: 'contentPipeline',
    caseStudy: {
      problem: 'Media agencies require hundreds of short-form video assets monthly, requiring unsustainable human labor for scriptwriting, voice recording, image sourcing, and publishing.',
      approach: 'Created an autonomous content orchestration pipeline connecting generative text, audio, and visual AI APIs into a automated rendering and scheduling system.',
      architecture: [
        'Topic Generator & Scripting Module (LLM Orchestration)',
        'Voice Synthesis Engine (ElevenLabs API)',
        'Visual Prompt Generator & Image Synthesizer (Midjourney / Runway)',
        'Automated FFMPEG Timeline Stitching & Render Pipeline',
        'Multi-Channel Social Webhook Publisher'
      ],
      implementation: 'Configured n8n automation nodes to orchestrate multi-modal API calls, using Python scripts for FFMPEG audio-visual alignment and metadata tagging.',
      result: 'Automated 90% of video creation workflow, reducing production cost per video from $150 down to $1.80 while boosting output frequency tenfold.',
      lessons: 'Complex multi-API generative pipelines require robust retry handlers and fallback assets for when model endpoints rate-limit or fail.'
    }
  },
  {
    id: 'traffic-signal',
    number: '06 / COMPUTER VISION',
    title: 'AI Traffic Signal System',
    category: 'Computer Vision & Infrastructure',
    year: '2025',
    status: 'PROTOTYPE',
    statusType: 'prototype',
    description: 'Intelligent traffic system that analyzes real-time road camera feeds using computer vision to dynamically adjust signal timings based on vehicle density.',
    stack: ['PYTHON', 'OPENCV', 'COMPUTER VISION', 'PREDICTIVE ANALYTICS'],
    gridSize: 'medium',
    visualType: 'trafficDiagram',
    caseStudy: {
      problem: 'Fixed-timer traffic signals cause unnecessary intersection delays, fuel wastage, and congestion by failing to adapt to real-time traffic volume disparities.',
      approach: 'Built a computer vision video analysis pipeline that counts vehicles per lane in real-time and computes optimal dynamic green-light durations using predictive algorithms.',
      architecture: [
        'RTSP Video Feed Reader (OpenCV)',
        'Frame Pre-processing & Bounding Box Vehicle Detection',
        'Lane Density Calculator & Queue Length Analytics',
        'Dynamic Signal Timing Algorithm',
        'Virtual Traffic Light Controller Interface'
      ],
      implementation: 'Utilized OpenCV frame analysis with background subtraction and contour tracking to count stationary and moving vehicles per intersection lane.',
      result: 'Simulated intersection tests demonstrated a 22% reduction in average vehicle wait time compared to traditional fixed-interval signal timing.',
      lessons: 'Real-time computer vision on edge streams requires lightweight frame sampling rates rather than processing every raw video frame.'
    }
  },
  {
    id: 'tiktok-analytics',
    number: '07 / SOCIAL ANALYTICS',
    title: 'TikTok Analysis Engine',
    category: 'Social Analytics Platform',
    year: '2025',
    status: 'COMPLETED',
    statusType: 'completed',
    description: 'Social trend-scraping engine utilizing sentiment analysis and data visualization libraries to generate virality reports and engagement insights.',
    stack: ['PYTHON', 'NLP', 'MATPLOTLIB', 'SEABORN'],
    gridSize: 'small',
    visualType: 'socialChart',
    caseStudy: {
      problem: 'Content strategists lack quantitative metrics on why specific short-form video hooks achieve viral reach across emerging audience segments.',
      approach: 'Engineered a trend analysis scraper and NLP pipeline that computes audio sentiment scores, keyword velocity, and engagement ratios.',
      architecture: [
        'Data Ingestion & Hashtag Trend Scraper',
        'VADER & Transformer Sentiment Scoring Engine',
        'Engagement Velocity Calculator (Shares / Views Ratio)',
        'Matplotlib & Seaborn Chart Generator',
        'Virality Insight Report Exporter'
      ],
      implementation: 'Built modular Python pipelines to process video metadata, extract transcript text, and plot engagement metrics across time-series charts.',
      result: 'Successfully identified top 5 virality indicators across 10,000+ analyzed posts with automated visual report generation.',
      lessons: 'Engagement velocity in the first 2 hours of posting correlates far higher with overall virality than total follower count.'
    }
  },
  {
    id: 'cloud-storage',
    number: '08 / CLOUD INFRASTRUCTURE',
    title: 'Cloud File Storage System',
    category: 'Enterprise Cloud Infrastructure',
    year: '2025',
    status: 'COMPLETED',
    statusType: 'completed',
    description: 'Enterprise-grade cloud storage system featuring JWT user authentication, role-based access control (RBAC), and AWS S3 encrypted hosting.',
    stack: ['NODE.JS', 'EXPRESS', 'AWS S3', 'JWT', 'RBAC'],
    gridSize: 'medium',
    visualType: 'cloudArch',
    caseStudy: {
      problem: 'Organizations require secure, self-hosted document storage with fine-grained permission control without relying on expensive SaaS pricing tiers.',
      approach: 'Engineered a secure Node.js REST API layer that handles user authentication, signed AWS S3 upload/download URLs, and encrypted file access.',
      architecture: [
        'Express REST API Endpoint Handler',
        'JWT Token Authentication & RBAC Guard Middleware',
        'AWS S3 Pre-signed URL Generator',
        'AES-256 File Encryption Pipeline',
        'User Role & Bucket Permission Storage'
      ],
      implementation: 'Implemented pre-signed S3 URLs so client applications upload files directly to AWS S3 without overloading backend API bandwidth.',
      result: 'Built complete secure cloud file infrastructure capable of handling large binary uploads securely with zero backend server bandwidth bloat.',
      lessons: 'Leveraging pre-signed cloud storage URLs offloads upload bandwidth entirely while keeping authentication strictly governed by the API.'
    }
  },
  {
    id: 'carbon-calculator',
    number: '09 / FULL-STACK BUILD',
    title: 'Carbon Emission Calculator',
    category: 'Full-Stack Environmental App',
    year: '2025',
    status: 'HACKATHON WINNER',
    statusType: 'winner',
    description: 'Full-stack environmental assessment application built in 48 hours to calculate personalized carbon footprints based on lifestyle inputs.',
    stack: ['JAVASCRIPT', 'NODE.JS', 'REST APIS', 'TAILWIND'],
    gridSize: 'medium',
    visualType: 'carbonScore',
    caseStudy: {
      problem: 'Individuals lack clear, actionable data regarding how daily commute, dietary, and energy habits contribute to personal carbon emissions.',
      approach: 'Built an interactive 48-hour hackathon web application that calculates emission breakdowns in real time across transport, diet, and utilities.',
      architecture: [
        'Interactive Questionnaire Frontend Component',
        'Emissions Calculation Formula Engine',
        'DEFRA & EPA Environmental Factor Database Integration',
        'Visual Breakdown & Category Analytics Interface',
        'Personalized Reduction Action Recommender'
      ],
      implementation: 'Engineered responsive full-stack web application during HackSprint 1.0, utilizing modular calculations and sleek UI visualization cards.',
      result: 'Won 1st Place at HackSprint 1.0 Hackathon for UX clarity, mathematical accuracy of emission models, and complete feature delivery in 48 hours.',
      lessons: 'Hackathon success comes from narrowing focus to a single polished core workflow executed with zero technical bugs.'
    }
  }
];
