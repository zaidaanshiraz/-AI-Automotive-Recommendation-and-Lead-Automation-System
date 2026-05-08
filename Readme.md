````md
# AI Automotive Recommendation and Lead Automation System

An advanced multi-agent AI-powered automotive sales automation platform built using n8n, Groq LLMs, WhatsApp API, Gmail API, Google Sheets, and a custom frontend dashboard.

This system automates the complete automotive dealership lead pipeline including:
- AI vehicle recommendations
- Lead qualification and scoring
- Competitor comparison
- Sales objection handling
- WhatsApp and Gmail communication
- Personalized brochure generation
- Follow-up automation
- Real-time dashboard analytics

---

# Table of Contents

- [Project Overview](#project-overview)
- [System Architecture](#system-architecture)
- [AI Agents](#ai-agents)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Workflow Pipeline](#workflow-pipeline)
- [Frontend Dashboard](#frontend-dashboard)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Frontend Locally](#Running-the-Frontend-Locally)
- [Configuration](#configuration)
- [Screenshots](#screenshots)
- [Security Notice](#security-notice)
- [Future Improvements](#future-improvements)
- [Resume Description](#resume-description)
- [Author](#author)

---

# Project Overview

This project was designed to simulate a real-world AI-driven automotive dealership automation system.

The workflow accepts customer requirements such as:
- vehicle type
- budget
- purchase purpose
- contact details

The system then processes the customer using multiple AI agents to:
- recommend vehicles
- compare alternatives
- classify lead quality
- generate sales communication
- automate follow-ups
- store structured CRM data

The complete orchestration is handled using n8n.

---

# System Architecture

```text
Frontend UI
    ↓
n8n Webhook Intake
    ↓
Car Recommendation Agent
    ↓
Comparison Agent
    ↓
Lead Scoring Agent
    ↓
Sales Conversion Agent
    ↓
Competitor Intelligence Agent
    ↓
Follow-Up Agent
    ↓
WhatsApp + Gmail Automation
    ↓
Google Sheets CRM
    ↓
Live Dashboard Analytics
````

---

# AI Agents

## 1. Car Recommendation Agent

Analyzes:

* budget
* car type
* customer purpose

Generates intelligent Indian automotive recommendations.

---

## 2. Comparison Agent

Compares top vehicle options and explains:

* strengths
* weaknesses
* best overall choice

---

## 3. Lead Scoring Agent

Classifies customers into:

* HOT LEAD
* WARM LEAD
* COLD LEAD

based on:

* budget
* purchase intent
* usage pattern

---

## 4. Test Drive Conversion Agent

Creates personalized WhatsApp sales messages inviting customers to book a test drive.

---

## 5. Sales Objection Handler Agent

Predicts likely customer objections and generates handling strategies for sales representatives.

---

## 6. Competitor Intelligence Agent

Explains why the recommended vehicle is superior to competing models in the same segment.

---

## 7. Follow-Up Message Agent

Automatically generates polite follow-up communication for inactive leads.

---

# Features

* Multi-agent AI workflow orchestration
* AI-powered automotive recommendations
* Automated lead qualification
* Real-time CRM data storage
* WhatsApp automation
* Gmail automation
* Personalized brochure generation
* Follow-up automation
* Dashboard analytics
* Google Sheets integration
* Customer scoring system
* Sales intelligence generation

---

# Technology Stack

| Technology          | Purpose                |
| ------------------- | ---------------------- |
| n8n                 | Workflow orchestration |
| Groq API            | LLM inference          |
| Llama 3 Models      | AI reasoning           |
| Google Sheets       | CRM database           |
| WhatsApp Cloud API  | Messaging automation   |
| Gmail API           | Email automation       |
| HTML/CSS/JavaScript | Frontend development   |
| Chart.js            | Dashboard analytics    |
| CloudConvert API    | PDF generation         |

---

# Workflow Pipeline

```text
Lead Intake
    ↓
AI Vehicle Recommendation
    ↓
Vehicle Comparison
    ↓
Lead Scoring
    ↓
Test Drive Conversion
    ↓
Sales Objection Handling
    ↓
Competitor Analysis
    ↓
Follow-Up Generation
    ↓
WhatsApp + Gmail Delivery
    ↓
CRM Storage
    ↓
Dashboard Visualization
```

---

# Frontend Dashboard

The project includes:

* customer intake form
* real-time analytics dashboard
* lead distribution metrics
* automotive demand visualization

Dashboard capabilities:

* total leads tracking
* hot/warm/cold lead distribution
* vehicle category analytics
* live CRM updates

---

# Project Structure

```text
AI-Automotive-Recommendation-Agent/
│
├── workflow/
│   └── Automotive Agent Final.json
│
├── frontend/
│   ├── index.html
│   └── dashboard.html
│
├── screenshots/
│   ├── workflow.png
│   ├── dashboard.png
│   ├── sheets.png
│   ├── gmail.png
│   └── whatsapp.png
│
├── README.md
│
└── demo-video-link.txt
```

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/your-username/AI-Automotive-Recommendation-Agent.git
```

---

## 2. Import Workflow into n8n

1. Open n8n
2. Click "Import Workflow"
3. Import:

   ```text
   Automotive Agent Final.json
   ```

---


## 3. Configure Credentials

Configure the following credentials in n8n:

* Groq API
* Gmail OAuth
* Google Sheets OAuth
* WhatsApp Cloud API
* CloudConvert API

---

## 4. Configure Frontend

Inside:

```text
frontend/index.html
```

Update:

```javascript
WEBHOOK_URL = "YOUR_N8N_WEBHOOK_URL"
```

Inside:

```text
frontend/dashboard.html
```

Update:

```javascript
CSV_URL = "YOUR_GOOGLE_SHEET_CSV_URL"
```

---

## 5. Activate Workflow

Activate the workflow in n8n and start submitting leads through the frontend interface.

---
## Running the Frontend Locally

The frontend dashboard and intake form are designed to run using the VS Code Live Server extension.

### Steps

1. Open the project folder in Visual Studio Code
2. Install the "Live Server" extension
3. Open:
   - `frontend/index.html`
   - or `frontend/dashboard.html`
4. Click the **"Go Live"** button located at the bottom-right corner of VS Code
5. The frontend will automatically open in the browser

### Important

Before running:
- Ensure the n8n workflow is active
- Update the webhook URL in `index.html`
- Update the Google Sheets CSV URL in `dashboard.html`

The frontend communicates directly with the n8n webhook and live Google Sheets dashboard feed.

---

# Configuration

## Required APIs

* Groq API
* WhatsApp Cloud API
* Gmail API
* Google Sheets API
* CloudConvert API

---

## Environment Requirements

* n8n instance
* Internet connectivity
* API credentials
* Google Sheets access

---

# Screenshots

Add screenshots inside:

```text
/screenshots
```

Recommended screenshots:

* workflow architecture
* frontend UI
* dashboard analytics
* WhatsApp automation
* Gmail automation
* Google Sheets CRM

---

# Security Notice

Sensitive credentials and tokens were removed before publishing this repository.

Before running the project:

* configure your own API credentials
* update webhook URLs
* configure OAuth integrations

Never expose:

* API keys
* OAuth tokens
* private webhook URLs
* WhatsApp access tokens

---

# Future Improvements

Potential future enhancements:

* voice assistant integration
* dealership inventory APIs
* payment and EMI estimation
* customer sentiment analysis
* fine-tuned automotive models
* mobile application support
* advanced CRM backend
* predictive customer analytics

---

# Resume Description

Built an AI-powered multi-agent automotive sales automation platform using n8n, Groq LLMs, WhatsApp API, Gmail API, Google Sheets, and real-time dashboards to automate vehicle recommendations, customer engagement, lead scoring, and dealership workflows.

---

# Author

Mohammed Zaidaan Shiraz

Engineering Student
AI and Automation Enthusiast

---

```
```
