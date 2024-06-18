# MyGolfHub

## Introduction

Websites like this already exist, but this is my attempt at creating an entire website using a React framework for the frontend, a Flask framework for the backend, and MySQL for storing data. The webpage will be containerized using Docker.

## Overview

**MyGolfHub** is a web application designed for golfers to enter, store, and track their golf statistics. The application allows users to manually input their golf data and track key metrics such as:

- FIR (Fairways in Regulation)
- GIR (Greens in Regulation)
- PPH (Putts per Hole)
- OB (Out of Bounds)
- Drops
- Mulligans

This project is built using:
- **Frontend**: React
- **Backend**: Flask
- **Database**: MySQL
- **Containerization**: Docker
- **Deployment**: *To Be Determined*

## Features

- User authentication and profile management
- Input and track golf statistics
- View detailed statistics and trends over time
- Multi-page layout for easy navigation
- Enter goals and apply calculations to recommend what the user should work on

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) and npm
- [Python](https://www.python.org/) and pip
- [Docker](https://www.docker.com/)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/dannybuglak/mygolfhub.git
cd mygolfhub
```

2. **Set up the backend:**
```bash
cd backend
python -m venv venv
venv\Scripts\activate # On Mac use `source venv/bin/activate`
pip install -r requirements.txt
```

3. **Set up the frontend:**
```bash
cd ../frontend
npm install
```

4. **Start the website:**
```bash
cd ..
docker-compose build
docker-compose up
```

5. **To completely restart the website containers:**
```bash
docker-compose down -v
docker-compose up --build
```

*Further steps will be added later*

## Directory Structure

*Updated as development is made. Will try to keep it as up-to-date as possible.*

```plaintext
mygolfhub/
├── backend/
│   ├── app/
│   │   ├── database/
│   │   │   ├── create_tables/
│   │   │   │   ├── bag.sql
│   │   │   │   ├── goals.sql
│   │   │   │   ├── scorecards.sql
│   │   │   └── └── users.sql
│   │   ├── utils/
│   │   │   ├── database/
│   │   │   └── └── database.py
│   │   ├── __init__.py
│   │   └── routes.py
│   ├── venv/
│   ├── .dockerignore
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── assets/
│   │   │   ├── delete-icon.png
│   │   │   ├── eagle_eye.jpg
│   │   │   ├── edit-icon.png
│   │   │   ├── MyGolfHub_transparent.png
│   │   │   ├── MyGolfHub_transparent2.png
│   │   │   └── MyGolfHub.png
│   │   ├── components/
│   │   │   ├── Features.js
│   │   │   ├── Header.js
│   │   │   └── NavBar.js
│   │   ├── pages/
│   │   │   ├── About.js
│   │   │   ├── Bag.js
│   │   │   ├── Goals.js
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Scorecards.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   ├── About.css
│   │   │   ├── App.css
│   │   │   ├── Features.css
│   │   │   ├── Goals.css
│   │   │   ├── Header.css
│   │   │   ├── Home.css
│   │   │   ├── index.css
│   │   │   ├── Login.css
│   │   │   ├── Navbar.css
│   │   │   ├── Register.css
│   │   │   └── Scorecards.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.js
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── .dockerignore
│   ├── .gitignore
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── .gitattributes
├── .gitignore
├── docker-compose.yml
└── README.md
```

## Citations

Logo created for free from [Adobe's Free Logo Generator](https://www.adobe.com/express/create/logo).

Golf course image taken by me from my golf round at [Eagle Eye Golf Course](https://eagleeyegolfclub.com/).

Delete icon found at [Flaticon](https://www.flaticon.com/free-icon/trash-can_2891491).

Edit icon found at [Flaticon](https://www.flaticon.com/free-icon/edit_32355).

## Notes

All images used will either be royalty free and tagged in the citations page and/or in the code *or* the images will be my own.

## Updates
 - **5/16**: Initial push to GitHub for webpage. Flushing out ideas for how to develop. All basic setup - backend has no functionality, frontend is default React code.

 - **5/19**: Frontend work, Home page started, Nav bar start up, logo and images added, About page created.

 - **5/20**: Goals page functionality on frontend (still need to connect to backend).

 - **5/28**: Docker fix, Login CSS, Registration page, and work on registration backend functionality and API integration. Still getting an axios error with the backend.

 - **6/05**: Bridge from frontend to backend working. Registration API connection working. Start to creating database. Various edits in docker-compose and other config files.

 - **6/06**: Database in docker created and docker-compose update. Registration saving username & hashed password to DB. Issue for live updates with React not happening.

 - **6/17**: Live UI reloading fixed. Basic home page look finished (until I decide to update UI). Added TODO section in README. Register and login working. Need to fix storing the email in session (returning 200 OK but no email stored).

### TODO

 - Fix error storing email in session.
 - Shave off everything after '@' in the welcome message on the home page when the user is logged in.
 - Update CSS for when user logs in to make button look better.
 - Redirect user to home page after logging in successfully.
 - Handle erronous logins.
 - Add descriptive comments in all files.
 - Create the bag page layout (HTML & CSS).
 - Update Scorecards page to be more simplistic. Make sure user can save and view scorecards.
 - Eventually add a "Profile" page.