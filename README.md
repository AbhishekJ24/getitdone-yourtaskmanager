# GetItDone - Your ToDo List Manager

GetItDone is a simple and intuitive ToDo List Manager application built with HTML, CSS, JavaScript, Express, and MongoDB. This project helps users to manage their tasks effectively by allowing them to add and save tasks with descriptions.

## Features

- **Task Management:** Add tasks with titles and optional descriptions.
- **Dynamic Background:** Attractive, animated background for an engaging user interface.
- **Responsive Design:** Ensures usability across different devices.
- **Server-Side Storage:** Save tasks to a MongoDB database using Express.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript
- **Backend:**
  - Node.js
  - Express
- **Database:**
  - MongoDB
  - Mongoose

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.
- MongoDB installed and running locally or a MongoDB Atlas account.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/AbhishekJ24/GetItDone-ToDoListManager
    cd GetItDone
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Set up MongoDB:**

    Ensure that your MongoDB server is running. If you're using a local MongoDB server, the default settings should work. If you're using MongoDB Atlas, update the connection string in your code.

4. **Start the server:**

    ```bash
    node server.js
    ```

5. **Open your browser and navigate to:**

    ```plaintext
    http://localhost:3000
    ```

## Project Structure

```
|-- public/
| |-- css/
| |-- js/
|-- views/
| |-- Interface.ejs
|-- models/
| |-- Todo.js
|-- server.js
|-- package.json
|-- README.md
```

## Usage

1. **Home Page:**

    The home page features a navigation bar and a form to add new tasks. Enter the task title and an optional description, then click "Save Task" to add it to the database.

2. **Adding Tasks:**

    - Enter the task title in the "Your Task" field.
    - Optionally, enter a description in the "Description (Optional)" field.
    - Click "Save Task" to save the task.

3. **Viewing Tasks:**

    - Tasks are saved to the MongoDB database. Future updates will include viewing, editing, and deleting tasks.

## Contributing

Contributions are welcome! Please fork this repository, create a new branch for your feature or bug fix, and submit a pull request.

1. **Fork the repository.**
2. **Create a new branch:**

    ```bash
    git checkout -b feature-name
    ```

3. **Make your changes.**
4. **Commit your changes:**

    ```bash
    git commit -m 'Add some feature'
    ```

5. **Push to the branch:**

    ```bash
    git push origin feature-name
    ```

6. **Submit a pull request.**

## Acknowledgements

- [Google Fonts](https://fonts.google.com/) for the Inter font.
- [MDN Web Docs](https://developer.mozilla.org/) for web development documentation and resources.
