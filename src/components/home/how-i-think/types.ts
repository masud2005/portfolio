import React from "react";
import {
  Lightbulb,
  Target,
  Cpu,
  Code2,
  CheckCircle,
  Gauge,
} from "lucide-react";

export interface StepItem {
  step: string;
  phaseNumber: number;
  title: string;
  tagline: string;
  question: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  accentBg: string;
  keyOutputs: string[];
  metricsPreview?: {
    label: string;
    value: string;
  };
}

export const METHODOLOGY_STEPS: StepItem[] = [
  {
    step: "01",
    phaseNumber: 1,
    title: "Understand",
    tagline: "Problem Discovery & Business Context",
    question: "What are we actually trying to solve?",
    description:
      "Before writing a single line of code, I dissect the real business context, user pain points, and operational constraints to guarantee we solve the right problem.",
    icon: Lightbulb,
    accentColor: "#057A55",
    accentBg: "bg-emerald-50 text-[#057A55] border-emerald-200/80",
    keyOutputs: [
      "Root Problem Definition",
      "User Friction & Workflow Analysis",
      "Business Constraint & ROI Mapping",
    ],
    metricsPreview: {
      label: "Discovery Depth",
      value: "100% Problem Clarity",
    },
  },
  {
    step: "02",
    phaseNumber: 2,
    title: "Define",
    tagline: "Product Scope & Flow Architecture",
    question: "What should the product do and not do?",
    description:
      "Clarifying functional specifications, scope boundaries, and core product milestones upfront prevents costly architectural creep down the road.",
    icon: Target,
    accentColor: "#2563EB",
    accentBg: "bg-blue-50 text-blue-600 border-blue-200/80",
    keyOutputs: [
      "Feature Prioritization (MVP vs V2)",
      "User Journey & State Diagrams",
      "Data Contract & Schema Blueprints",
    ],
    metricsPreview: {
      label: "Scope Control",
      value: "Zero Scope Creep",
    },
  },
  {
    step: "03",
    phaseNumber: 3,
    title: "Design",
    tagline: "System Architecture & API Modeling",
    question: "How should the system work under load?",
    description:
      "Designing resilient schemas, API contracts, caching layers, and decoupled services before committing to code ensures robust performance and security.",
    icon: Cpu,
    accentColor: "#9333EA",
    accentBg: "bg-purple-50 text-purple-600 border-purple-200/80",
    keyOutputs: [
      "Relational Schema & Index Modeling",
      "REST & Real-time Webhook Contracts",
      "Security, RBAC & Auth Architecture",
    ],
    metricsPreview: {
      label: "Architecture Quality",
      value: "Sub-50ms Query Targets",
    },
  },
  {
    step: "04",
    phaseNumber: 4,
    title: "Build",
    tagline: "Type-Safe Scalable Implementation",
    question: "Turn architecture into high-performance software.",
    description:
      "Executing with clean, modular, type-safe Next.js and NestJS code, strictly adhering to SOLID principles, design patterns, and decoupled business logic.",
    icon: Code2,
    accentColor: "#057A55",
    accentBg: "bg-emerald-50 text-[#057A55] border-emerald-200/80",
    keyOutputs: [
      "Strict TypeScript & Modern Next.js",
      "Decoupled Microservices & NestJS APIs",
      "Structured Error & Audit Logging",
    ],
    metricsPreview: {
      label: "Code Standards",
      value: "Strict SOLID & Clean Code",
    },
  },
  {
    step: "05",
    phaseNumber: 5,
    title: "Validate",
    tagline: "Edge Cases, Concurrency & Quality",
    question: "Does it hold up under real-world pressure?",
    description:
      "Testing against edge cases, simulating high concurrency, verifying transactional integrity, and conducting real-world UX sanity checks.",
    icon: CheckCircle,
    accentColor: "#0D9488",
    accentBg: "bg-teal-50 text-teal-600 border-teal-200/80",
    keyOutputs: [
      "Automated End-to-End Flow Tests",
      "Concurrency & ACID Transaction Checks",
      "Intuitive UX & Device Verification",
    ],
    metricsPreview: {
      label: "Reliability Rate",
      value: "99.9% Production Ready",
    },
  },
  {
    step: "06",
    phaseNumber: 6,
    title: "Improve",
    tagline: "Profiling, Caching & Deployment",
    question: "How do we make it faster, safer and more scalable?",
    description:
      "Continuous optimization—reducing server response latency, profiling slow SQL queries, introducing Redis caching, and monitoring production uptime.",
    icon: Gauge,
    accentColor: "#EA580C",
    accentBg: "bg-amber-50 text-amber-600 border-amber-200/80",
    keyOutputs: [
      "SQL Query Indexing & Profiling",
      "Sub-Millisecond Redis Caching Layer",
      "Zero-Downtime Automated CI/CD Pipelines",
    ],
    metricsPreview: {
      label: "Optimization Target",
      value: "<100ms Response Time",
    },
  },
];

