# node-app-test
# User Input Application

## Introduction

This application is a simple Node.js web application that allows users to input their information (username, email, and contact) and saves it in a MongoDB database. It also provides functionality to view a form for user input and displays success or error messages based on the submission.

## Technologies Used

- **Node.js:** The backend runtime environment for the application.
- **Express.js:** The web application framework for Node.js used for handling routes, requests, and views.
- **MongoDB:** A NoSQL database used for storing user information.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Handlebars:** A templating engine used for rendering dynamic content on the server-side.

## Setup Instructions

1. Clone the repository to your local machine:

   ```
   git clone <repository_url>
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the application:

   ```
   npm start
   ```

4. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## File Structure

- **app.js:** Main entry point of the application containing the server setup, route definitions, and database connection logic.
- **views/:** Directory containing Handlebars templates for rendering HTML views.
- **public/:** Directory containing static assets (CSS, JavaScript, images) served by the application.

## Application Workflow

1. **Home Page (`/`):** Displays a welcome message and provides links to other pages.

2. **User Input Form (`/user-form`):** Displays a form where users can input their information.

3. **Form Submission (`/submit`):** Handles POST requests from the user input form, saves the user information to the database, and renders a success or error message based on the outcome.

## Database Configuration

The application is configured to connect to a local MongoDB instance by default. You can modify the MongoDB connection URI in the `app.js` file to connect to a different MongoDB database.

## Dockerization

A Dockerfile is provided in the repository to containerize the application. You can build a Docker image using the provided Dockerfile and deploy the application as a Docker container.

## Deployment

For deployment on Kubernetes (K8s) on AWS cloud, follow the steps below:

1. Containerize the application using Docker and push the Docker image to a container registry (e.g., Docker Hub, Amazon ECR).

2. Set up a Kubernetes cluster on AWS (e.g., using Amazon EKS).

3. Deploy the application on the Kubernetes cluster using Kubernetes manifests (e.g., Deployment, Service) configured for AWS environment.

4. Expose the application to the internet using a Load Balancer or Ingress controller.

## Architecture Diagram

                +---------------------------------------------+
                |                  Internet                   |
                +---------------------------------------------+
                                |
                        Load Balancer
                                |
                +---------------------------+
                |   Kubernetes Cluster      |
                |   (Master Node, Worker    |
                |    Nodes, etcd, etc.)     |
                +---------------------------+
                        |       |       |
                 +------+  +------+  +------+
                 |Node 1|  |Node 2|  |Node 3|
                 +------+  +------+  +------+
                 |Docker|  |Docker|  |Docker|
                 |Container| |Container| |Container|
                 |  (Pod)  | |  (Pod)  | |  (Pod)  |
                 +---------+ +---------+ +---------+
                 |     Application Containers       |
                 +---------------------------------+

