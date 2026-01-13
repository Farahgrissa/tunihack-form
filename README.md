# TuniHack 11 – Event Management Web Platform

## 1. Introduction

This project consists of the design and development of a **web platform for the management and promotion of the TuniHack 11 event**.

The platform provides an interactive interface allowing users to:
- Discover the event and its activities
- Consult the detailed schedule
- View previous editions
- Register online for competitions (PitchHack / TuniHack)

This project was developed in a **frontend-oriented architecture**, with an external backend service for form handling.

---

## 2. Objectives

The main objectives of this project are:

- Design a **modern, responsive, and user-friendly interface**
- Implement a **dynamic event presentation** (timeline, countdown, galleries)
- Provide an **online registration system** with team management
- Apply good practices in **React development**
- Respect software engineering principles (modularity, readability, maintainability)

---

## 3. Functionalities

### 3.1 Public Interface
- Home page with club presentation
- Animated countdown to the event
- Event timeline (Day 1 / Day 2)
- Gallery of previous events
- FAQ section
- Social media links

### 3.2 Registration System
- Choice of competition (PitchHack or TuniHack)
- Dynamic team size constraints
- Automatic price calculation
- Registration form with team members’ information
- Submission via Google Apps Script

---

## 4. Technologies Used

- **React** (Functional Components & Hooks)
- **React Router DOM** (Client-side routing)
- **Tailwind CSS** (Utility-first styling)
- **Lucide React** (Icons)
- **Google Apps Script** (Form submission backend)

---

## 5. Project Structure

src/
├── assets/              # Images and static resources
├── pages/
│   ├── Home.jsx         # Main landing page
│   └── Register.jsx     # Registration form
├── App.jsx              # Root component
├── main.jsx             # Application entry point
├── App.css              # Global component styles
└── index.css            # Global styles

