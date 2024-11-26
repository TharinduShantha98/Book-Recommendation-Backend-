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


# Book Management System Discord Bot

This bot helps manage a book collection and reviews directly within your Discord server. You can add, edit, delete, and review books with simple commands.

## Commands Overview

### **Book Management Commands**

#### 1. Add a New Book
- **Command:**  
  `!addbook _<Book Name> _<Author Name> _<Description>`  
- **Example:**  
  `!addbook _The Java OOP _Tharindu _Encapsulation abstraction polymorphism and inheritance`  
- **Description:**  
  Adds a book to the collection with the given details.

#### 2. List All Books
- **Command:**  
  `!listbooks`  
- **Example:**  
  `!listbooks`  
- **Description:**  
  Displays a list of all books in the collection, including their unique IDs.

#### 3. Edit a Book
- **Command:**  
  `!editbook _<Book ID> _<New Book Name>`  
- **Example:**  
  `!editbook _67440e1d09950446b049be10 _The org chem`  
- **Description:**  
  Updates the name of a book identified by its unique ID.

#### 4. Delete a Book
- **Command:**  
  `!deletebook <Book ID>`  
- **Example:**  
  `!deletebook 673ee89b6bb36c994f60b695`  
- **Description:**  
  Removes the book with the specified ID from the collection.

---

### **Review Management Commands**

#### 1. Add a Review for a Book
- **Command:**  
  `!addreview _<Book ID> _<Review Text> _<Rating>`  
- **Example:**  
  `!addreview _67440e1d09950446b049be10 _good job _5`  
- **Description:**  
  Adds a review with a rating (1-5) for the specified book.

#### 2. List Reviews for a Book
- **Command:**  
  `!listreviews _<Book ID>`  
- **Example:**  
  `!listreviews _67440e1d09950446b049be10`  
- **Description:**  
  Lists all reviews for the specified book.


Discord bookRecommendation 
https://discord.gg/V5qRnfCm
---

## Notes
- Replace `<Book ID>` with the actual unique ID of the book, which you can obtain using the `!listbooks` command.
- Use underscores (`_`) to separate the parameters in all commands.
- Ratings must be integers between 1 and 5.
- Ensure the bot is properly added to your server with the required permissions to use these commands.

---

## Latest code in Release branch 
### Please move the Release branch.
### Deploying the Application to Azure
---
To deploy the application in Azure, start by creating a resource group to organize resources, followed by an App Service Plan to define the compute resources, and then create an App Service or Web App to host the application. Next, connect the GitHub repository to Azure using a deployment pipeline, push the code to the release branch in GitHub, and finally, set up the required environment variables in Azure to configure the applicatio











