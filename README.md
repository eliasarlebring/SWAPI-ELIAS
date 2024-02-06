### **1. Project Overview**

- **Project Name:** SWAPI Character Manager
- **Description:** SWAPI Character Manager is a RESTful API service for managing Star Wars characters. It allows users to view existing characters, add new characters from the Star Wars API (SWAPI), swap the positions of two characters, and delete characters from the database.

### **2. Installation and Setup**

- **Requirements:**
  - Node.js
  - npm (Node Package Manager)

- **Installation:**
  1. Clone the repository: `git clone https://github.com/your-username/SWAPI-Character-Manager.git`
  2. Navigate to the project directory: `cd SWAPI-Character-Manager`
  3. Install dependencies: `npm install`
  4. Start the server: `npm start`

### **3. Project Features**

- **List of Features:**
  - View existing characters
  - Add new characters from SWAPI
  - Swap the positions of two characters
  - Delete characters

- **Usage Examples:**
  - **View Characters:**
    ```
    GET /api/characters
    ```

  - **Add Character:**
    ```
    POST /api/characters
    Request Body: { "name": "Character Name" }
    ```

  - **Swap Characters:**
    ```
    PUT /api/characters/swap
    Request Body: { "characterId1": "Character Name 1", "characterId2": "Character Name 2" }
    ```

  - **Delete Character:**
    ```
    DELETE /api/characters/:id
    ```

### **4. Project Structure**

- **Directory Structure:**
  ```
  SWAPI-Character-Manager/
  ├── node_modules/       # Dependencies
  ├── README.md           # Project README
  ├── app.js              # Express application setup
  └── package.json        # Project metadata and dependencies
  ```

- **Key Files:**
  - **app.js:** Contains the main setup for the Express application, including route definitions and middleware configurations.

### **5. Technologies Used**

- **Languages:**
  - JavaScript (Node.js)

- **Frameworks/Libraries:**
  - Express.js: Web application framework for Node.js
  - Joi: Object schema validation library
  - Axios: HTTP client for making requests to SWAPI and handling API calls
