describe('Firetruck Routes', () => {
  it('should create a new firetruck', async () => {
    const res = await request(app)
      .post('/firetrucks')
      .send({
        make: 'Pierce',
        model: 'Enforcer',
        year: 2020
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('make', 'Pierce');
    expect(res.body).toHaveProperty('model', 'Enforcer');
    expect(res.body).toHaveProperty('year', 2020);
  });

  it('should get all firetrucks', async () => {
    const res = await request(app).get('/firetrucks');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should get a single firetruck by id', async () => {
    const firetruck = await request(app)
      .post('/firetrucks')
      .send({
        make: 'Pierce',
        model: 'Enforcer',
        year: 2020
      });

    const res = await request(app).get(`/firetrucks/${firetruck.body._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('make', 'Pierce');
    expect(res.body).toHaveProperty('model', 'Enforcer');
    expect(res.body).toHaveProperty('year', 2020);
  });

  it('should update a firetruck by id', async () => {
    const firetruck = await request(app)
      .post('/firetrucks')
      .send({
        make: 'Pierce',
        model: 'Enforcer',
        year: 2020
      });

    const res = await request(app)
      .patch(`/firetrucks/${firetruck.body._id}`)
      .send({
        make: 'E-One',
        model: 'Cyclone II',
        year: 2021
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('make', 'E-One');
    expect(res.body).toHaveProperty('model', 'Cyclone II');
    expect(res.body).toHaveProperty('year', 2021);
  });

  it('should delete a firetruck by id', async () => {
    const firetruck = await request(app)
      .post('/firetrucks')
      .send({
        make: 'Pierce',
        model: 'Enforcer',
        year: 2020
      });

    const res = await request(app).delete(`/firetrucks/${firetruck.body._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('make', 'Pierce');
    expect(res.body).toHaveProperty('model', 'Enforcer');
    expect(res.body).toHaveProperty('year', 2020);
  });
});