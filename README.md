# Express and React Movie Database App

Welcome to my Movie Database App! This project utilizes Express.js for the backend, React.js for the frontend, and Vite for the frontend environment setup. I've implemented the MVC pattern in the backend to organize my code efficiently, and I've integrated the TMDB API for accessing movie data.

## Features

- Search for movies: Users can search for movies by title or keyword.
- Browse popular movies: Users can view a list of the most popular movies.
- Movie details: Users can view detailed information about each movie, including descriptions.

## Technologies Used

- **Express.js**: Used for building the backend server and implementing the MVC pattern.
- **React.js**: Utilized for building the frontend user interface and components.
- **Vite**: Used for setting up the frontend development environment.
- **TMDB API**: Integrated to fetch movie data.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/prerana023/Movie_Recommendation.git

2.Navigate to the project directory:

    cd express-react-movie-database

3.Install dependencies:
    # Install backend dependencies
    cd Backend
    npm install

    # Install frontend dependencies
    cd Frontend
    npm install

4.Configure environment variables:
    Create a .env file in the backend directory and add necessary keys follow .env.example file

5.Start the development server
    # Start backend server
    cd Bbackend/src
    nodemon app.js

    # Start frontend development server
    cd Frontend
    npm run dev

6.Access the application:

    Once both the backend server and frontend development server are running, you can access the application by visiting http://localhost:5173 in your web browser.
