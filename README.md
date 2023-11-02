# ToDoList Front End Application

This code contains only the front-end portion of the application. This app retrieves its information through a REST API from a Java Spring Boot application.

## Backend REST API

The code for the REST API can be found in the following repository:
[ToDoList Backend REST API](https://github.com/thakkilm/ToDoList-Backend-Rest-API)

### CORS Policy

By default, CORS (Cross-Origin Resource Sharing) policy is implemented to allow requests from `localhost:3000`. If your front-end URL is different, please update the URL in the `RestfulWebServicesApplication.java` class in the Backend project.

### Authentication

This application implements a JWT (JSON Web Token) system for secure authentication. If you would like to use the default Spring Security authentication, please follow these steps:

1. Remove the `@RestController` annotation from all the files in the JWT package.
2. Add the `@RestController` annotation to the `SpringSecurityPlayResource.java` class.

Upon removing the JWT system, you will also need to make changes to the React code. Navigate to the `API` folder and make the necessary modifications based on your authorization requirements. Comments have been added to all the files to guide you through the process.

## Getting Started

Follow these steps to get started with the ToDoList Front End Application:

1. Clone this repository.
2. Install the required dependencies (if not already installed).
3. Make any necessary changes based on your specific configuration and authorization requirements.
4. Run the application.

## Author

Mahesh Thakkilapti

