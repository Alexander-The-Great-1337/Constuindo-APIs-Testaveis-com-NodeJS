import supertest from 'supertest';
import * as chai from 'chai';
import app from '../../src/app.js';

const request = supertest(app);
const expect = chai.expect;

export { app, request, expect };