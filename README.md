# ISPH Swimming Portal

This project is a React-based web application designed as a swimming progress tracking portal, specifically tailored for the ISPH (International School of ParkCity Hanoi) swimming program.  It utilizes Firebase for authentication, Material UI for the user interface, React Router for navigation, and Vite as the build tool.  The application displays a user's progress through various swimming levels and objectives based on the Swim England stages, presented in an interactive timeline.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Firebase Configuration](#firebase-configuration)
- [Data Source](#data-source)

## Project Structure

``` 
.
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel deployment config
├── vite.config.ts          # Vite configuration
├── public/                 # Static assets (not used in this project structure)
├── src/
│   ├── App.tsx             # Main app component (auth, routing)
│   ├── SessionContext.tsx  # User session context
│   ├── main.tsx            # Entry point
│   ├── vite-env.d.ts       # Vite TypeScript declarations
│   ├── assets/             # (Empty - .gitkeep for structure)
│   ├── components/
│   │   └── progressTimeline/  # Progress timeline components
│   │       ├── progressTimeline.tsx    # Main timeline
│   │       ├── objectiveList/
│   │       │   └── objectiveList.tsx   # Objective list
│   │       └── stageItem/
│   │           └── stageItem.tsx       # Single stage/level
│   ├── data/
│   │   └── stages.ts           # Swimming stage data
│   ├── firebase/
│   │   ├── auth.ts             # Firebase auth logic
│   │   └── firebaseConfig.ts   # Firebase initialization
│   ├── layouts/
│   │   └── dashboard.tsx       # Authenticated user layout
│   ├── pages/
│   │   ├── index.tsx           # Main page
│   │   └── signin.tsx          # Sign-in page
│   └── types/
│       └── objectives.ts       # TypeScript interfaces (Objective, Level)
└── utils/                      # Utility files
    ├── SwimEnglandStages.csv   # CSV data for stages
    └── formatStages.py         # Python script to generate stages.ts
```

## Features

- **Authentication:**
  - Google Sign-In.
  - Email/Password Sign-In.
  - Persistent login state (using localStorage).
  - Sign-Out functionality.
  - Session management using React Context.
- **Progress Tracking:**
  - Displays swimming levels (stages) in a timeline format.
  - Shows completed and incomplete levels.
  - Displays individual objectives within each level.
  - Interactive checkboxes for objectives (currently visual only, no data persistence).
  - Accordion-style display for levels to expand/collapse objective details.

## Technologies Used

- **React (v19):**  JavaScript library for building user interfaces.
- **TypeScript (v5):**  Superset of JavaScript that adds static typing.
- **Vite (v5):**  Fast build tool and development server.
- **Firebase (v11):**  Backend-as-a-Service (BaaS) platform for authentication.
  - Firebase Authentication:  Handles user login and session management.
- **Material UI (v6):**  React component library for building UI elements.
    - `@mui/material`: Core Material UI components.
    - `@mui/icons-material`: Material UI icons.
    - `@emotion/react` & `@emotion/styled`: Styling for Material UI.
    - `@mui/lab`: Material UI Lab components (Timeline).
- **React Router (v7):**  Library for handling navigation and routing within the application.
- **@tanstack/react-query (v5):**  (Listed but not explicitly used in provided code)  Potentially intended for data fetching and caching (but currently not utilized).
- **@toolpad/core:** Components for building the layout of the application.

## Getting Started

### Prerequisites

- Node.js
- npm 
- A Firebase project set up with:
  - Authentication enabled (Google and Email/Password providers).
  - Your web app's configuration details.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/quangngonz/isph-swimming-portal
    cd isph-swimming-portal
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Environment Variables

Create a `.env` file in the root of your project and add the following Firebase configuration variables.  Replace the placeholder values with your actual Firebase project settings:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGE_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

These variables are accessed in `src/firebase/firebaseConfig.ts` using `import.meta.env`.  **Do not commit your `.env` file to version control.**

### Running the Application

```bash
npm run dev
# or
yarn dev
```

This command starts the Vite development server.  The application will typically be available at `http://localhost:5173` (or a different port if 5173 is in use).  Vite provides hot module replacement (HMR) for fast development updates.

## Firebase Configuration

The Firebase configuration is located in `src/firebase/firebaseConfig.ts`.  This file initializes the Firebase app using the environment variables you set up earlier.  The `firebaseAuth` object is exported and used for authentication throughout the application.

The authentication logic is in `src/firebase/auth.ts`.  This file provides functions for:

- `signInWithGoogle()`:  Handles Google Sign-In using a popup.  It also manages persistence based on the `localStorage` item named "persistence."
- `signInWithCredentials(email, password)`:  Handles email/password sign-in.  It uses the same persistence mechanism as Google Sign-In.
- `firebaseSignOut()`:  Signs the user out.
- `onAuthStateChanged(callback)`:  Sets up an observer to monitor authentication state changes.  This is used in `App.tsx` to update the user session.

## Data Source
The swimming level and objective data is hardcoded in `src/data/stages.ts`. This file was generated using the python script `utils/formatStages.py` that proccessed data in `utils/SwimEnglandStages.csv`.
