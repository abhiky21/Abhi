# School ERP API

Backend REST API for the School ERP System built with Node.js, Express, and MySQL.

## Features

- RESTful API endpoints
- JWT-based authentication
- Role-based access control
- MySQL database with Sequelize ORM
- Environment-based configuration
- API documentation

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

## Project Structure

```
api/
├── dbschema/            # Database models and migration scripts
│   ├── models/          # Sequelize models
│   ├── initial.data.js  # Initial seed data
│   ├── run.js          # DB setup script
│   └── sequelize.js     # Database configuration
├── src/
│   ├── controllers/     # Request handlers
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   └── utils/          # Utility functions
└── index.js            # Application entry point
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=schoolData
JWT_SECRET=your_jwt_secret
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up the database:

```bash
node dbschema/run.js
```

3. Start the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - Register new user

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Schools

- `GET /api/schools` - Get all schools
- `POST /api/schools` - Create new school
- `GET /api/schools/:id` - Get school by ID
- `PUT /api/schools/:id` - Update school
- `DELETE /api/schools/:id` - Delete school

## Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests (when implemented)

## Error Handling

The API uses a consistent error response format:

```json
{
  "status": "error",
  "message": "Error description",
  "code": "ERROR_CODE"
}
```

## Database Management

### Models

- User
- School
- Teacher
- Parent

### Running Migrations

Database schema changes are handled through Sequelize migrations.

## Security

- JWT authentication
- Password hashing
- Input validation
- CORS configuration
- Rate limiting

## Testing

(To be implemented)

- Unit tests
- Integration tests
- API tests
