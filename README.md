# Multi-Project Repository

This repository contains two projects:

1. **Scroll Animation**: A smooth scrolling animation effect with card highlighting.
2. **Drag and Drop**: A feature-rich drag-and-drop interface for moving elements dynamically.

## Table of Contents

1. [Scroll Animation](#scroll-animation)
    - [Overview](#overview-1)
    - [Setup Instructions](#setup-instructions-1)
    - [Technology Choices](#technology-choices-1)
    - [Known Limitations](#known-limitations-1)
    - [Future Improvements](#future-improvements-1)
    - [Time Spent](#time-spent-1)
2. [Drag and Drop](#drag-and-drop)
    - [Overview](#overview-2)
    - [Setup Instructions](#setup-instructions-2)
    - [Technology Choices](#technology-choices-2)
    - [Known Limitations](#known-limitations-2)
    - [Future Improvements](#future-improvements-2)
    - [Time Spent](#time-spent-2)

---

## Scroll Animation

### Overview

This project is a smooth scroll animation demo featuring card elements that scale and highlight as the user scrolls through the page.

### Setup Instructions

1. **Navigate to the Scroll Animation Folder**
   ```bash
   git clone https://github.com/AvesekShrestha/Vrit-
   cd scroll
2. Run the Project Open index.html in your browser.

### Technology Choices
* HTML: Structure of the page.
* CSS: Styling and animations.
* JavaScript: Handles scroll behavior.
* No External Libraries: Keeps the implementation lightweight.

### Known Limitation 

**Cross-Browser Compatibility:**
While modern browsers are supported, older browsers may have issues with CSS features like opacity and transform.

**Scrolling Behavior:**
The animation depends on precise scroll calculations, which might feel unnatural for some users. It assumes the viewport height (window.innerHeight) remains constant.

### Future Improvements

**Lazy Loading for Performance:**
Dynamically load card content for scalability with larger datasets.

**Touch and Mobile Optimization:**
Enhance touch gesture handling and ensure responsiveness on various device sizes.

**Enhanced Visual Effects:**
Introduce additional animations or parallax effects to improve aesthetics.

### Time Spent on the Project
Planning and Design: 1 hour
Development: 45 minutes
Testing and Debugging: 15 minutes
Documentation: 10 minutes
Total Time: 2 hours 10 minutes

## Drag-and-Drop Kanban Board

## Overview

This project provides an interactive drag-and-drop feature for moving elements dynamically on the web page. Drag and Drop API has been used for this project.

### Prerequisites

Before starting, ensure the following are installed on your system:

* Node.js and npm:

### Setup Instructions

1. Clone repo and navigate to dragDrop
   ```bash
   git clone https://github.com/AvesekShrestha/Vrit-
   cd dragDrop
2. Installing Dependency 
    ```bash
    npm install
3. Run Application
    ```bash
    npm run dev
4. Application runs in localhost:5173

### Technology Choices
* React : Used for frontend interfaces
* Bootstrap : Used for beautifying UI with classes
* HTML Drag & Drop API : Used for drag and drop elements in DOM

### Known Limitations
* Not Responsibe for smaller devices.
* Limited styling for visual feedback.
* No persistence of dragged positions on refresh.

### Future Improvements

* Responsibe for smaller devices
* Save drag positions to local storage or a database.

### Time Spent
Planning: 1 hour
Development: 2.5 hours
Testing: 30 minutes
Documentation: 20 minutes
Total: 4 hours 20 minutes



