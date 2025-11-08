# School ERP System

A comprehensive School Enterprise Resource Planning (ERP) system built with React and Node.js, designed to streamline school management processes.

## Project Overview

This project consists of two main parts:

- `api/` - Backend REST API built with Node.js and Express
- `ui/` - Frontend application built with React and Vite

## Features

- User Authentication and Authorization
- School Management
- Teacher Management
- Parent Portal
- Student Management
- Responsive UI Design

## Tech Stack

### Backend

- Node.js
- Express.js
- MySQL with Sequelize ORM
- JSON Web Tokens (JWT)

### Frontend

- React
- Vite
- React Router
- Modern UI Components

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/sahilyadav-15/SchoolManagement.git
cd SchoolManagement
```

2. Set up the backend:

```bash
cd api
npm install
# Configure your .env file (see api/README.md for details)
npm run start
```

3. Set up the frontend:

```bash
cd ui
npm install
npm run dev
```

For detailed setup instructions, please refer to:

- [API Documentation](./api/README.md)
- [UI Documentation](./ui/README.md)

## Environment Setup

Both the frontend and backend require specific environment variables to be set. Please refer to the respective README files in the `api` and `ui` directories for detailed configuration instructions.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
