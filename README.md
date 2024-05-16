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

*Further steps will be added later*

## Directory Structure

*Updated as development is made. Will try to keep it as up-to-date as possible.*

```plaintext
mygolfhub/
├── backend/
│   ├── app/
│   │   ├── database/
│   │   │   ├── create_tables/
│   │   │   │   ├── users.sql
│   │   ├── utils/
│   │   │   ├── database/
│   │   │   │   ├── database.py
│   │   ├── __init__.py
│   │   ├── routes.py
│   ├── venv/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.js
│   │   ├── index.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── Dockerfile
├── docker-compose.yml
├── .gitattributes
├── .gitignore
└── README.md
```

## Notes

All images used will either be royalty free and tagged in the citations page and/or in the code OR the images will be my own.

## Updates
 - 5/16 - Initial push to GitHub for webpage. Flushing out ideas for how to develop. All basic setup - backend has no functionality, frontend is default React code.