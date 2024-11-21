# Book Recommendation 
## Overview

This project is a **Discord bot** designed to replicate the functionality of a Book Recommendation System. Users can manage their book collection, reviews, and search for books directly within a Discord server.

---

## Features

### Backend Development

- **Framework**: 
  - Use Express.js (Node.js) for the backend API.
- **Features**:
  - API Endpoints:
    - **User Routes**: 
      - \`/api/auth/signup\`
      - \`/api/auth/login\`
      - \`/api/auth/logout\`
    - **Book Routes**: 
      - \`/api/books/\` (GET, POST)
      - \`/api/books/:id\` (GET, PUT, DELETE)
    - **Review Routes**: 
      - \`/api/reviews/\` (GET, POST)
  - **Database**: 
    - Use MongoDB with Mongoose for data storage.
  - **Authentication**: 
    - Secure API endpoints using JWT (JSON Web Tokens).

---


### Discord Bot Integration

- **Objective**:
  - Create a Discord bot that allows users to manage their book collection and reviews directly from Discord.
- **Features**:
  - **Authentication**: 
    - Link users' Discord accounts to their Book Recommendation System accounts.
  - **Book Management**:
    - Commands include:
      - \`!addbook [title] [author]\`
      - \`!listbooks\`
      - \`!editbook [book ID]\`
      - \`!deletebook [book ID]\`
  - **Review Management**:
    - Commands include:
      - \`!addreview [book ID]\`
      - \`!listreviews [book ID]\`
      - \`!deletereview [review ID]\`
  - **Search and Browse**:
    - Search books by title, author, or genre and display details in Discord.
- **Framework**:
  - Developed using [discord.js](https://discord.js.org/).

---
