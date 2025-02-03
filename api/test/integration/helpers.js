import supertest from 'supertest';
import * as chai from 'chai';
import setupApp from '../../src/app.js';

const expect = chai.expect;

let app;
let request;

const init = async () => {
  app = await setupApp();
  request = supertest(app);
};

export { init, app, request, expect };