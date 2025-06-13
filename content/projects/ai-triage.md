---
title: "An AI-Powered Dynamic hospital triage system"
description: "A dynamic hospital triage system that uses AI and facial recognition to triage patients based on their symptoms and medical history."
image: "/Capture.PNG"
githubUrl: "https://github.com/nassim747/McHacks12_AI_Triage_System"
liveUrl: ""
tags: ["Python", "Deepface", "OpenCV", "Flask"]
featured: false
order: 4
slug: "ai-triage"
---

# AI-Powered Dynamic Hospital Triage System


## The Problem I Wanted to Solve
This was a Hackathon (McHacks 12) where one of the proposed themes was healthcare, specifically the improvement of the patient experience in the Emergency Room.

I have personally had many experiences with Emergency Rooms in Quebec throughout my life, and the time between triage and seeing a doctor was often very unpleasant—especially for patients whose condition worsens while waiting, which can take up to ten hours!

Our goal was to develop a system to detect patients whose conditions deteriorate over time and alert healthcare personnel to the change. I decided to build a demo of a facial recognition system that identifies potential major changes in a patient’s health condition based on facial features.

## Technical Approach
 It uses a webcam and the DeepFace library to analyze patients’ facial emotions, which are logged alongside their symptoms and medical history. The triage logic, implemented in Python, sends patient data—including recent emotions—to a cloud-based LLM (via the DeepSeek API), which applies a Quebec ER triage protocol that mandates emotional distress for higher urgency levels. The system validates the LLM’s output, ensuring critical cases are only escalated if emotional criteria are met, and automatically downgrades otherwise. The backend is built with Flask, exposing an API for patient triage results, and includes automated tests to verify emotion-based triage rules. 