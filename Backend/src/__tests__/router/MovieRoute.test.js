import request from 'supertest';
import { app } from '../../app';

describe('Movie routes from local', () => {
    test('GET /movies/all should return all movies', async() => {
        const response = await request(app).get('/movies/all');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Fetching all movies from database');
        expect(Array.isArray(response.body.moviesData)).toBe(true);
    });

    test('GET /movies/top20popular should return top 20 popular movies', async () => {
        const response = await request(app).get('/movies/top20popular');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Fetching top 20 popular movies');
        expect(Array.isArray(response.body.moviesData)).toBe(true);
      });

    // test('GET /movies/:id should return a single movie by ID', async () => {
    //     const response = await request(app).get('/movies/653346'); 
    //     expect(response.status).toBe(200);
    //     expect(response.body).toHaveProperty('id');
    //   });
});