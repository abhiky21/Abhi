# School ERP Frontend

Modern, responsive frontend for the School ERP System built with React and Vite.

## Features

- Modern React with Hooks
- Fast development with Vite
- Responsive design
- Role-based access control
- Interactive dashboards
- Form validations
- State management

## Project Structure

```
ui/
├── public/             # Static assets
├── src/
│   ├── assets/        # Images, icons, etc.
│   ├── components/    # Reusable components
│   │   ├── common/   # Shared components
│   │   └── layout/   # Layout components
│   ├── pages/        # Page components
│   ├── routes/       # Route configurations
│   ├── services/     # API services
│   ├── store/        # State management
│   ├── App.jsx       # Root component
│   └── main.jsx      # Entry point
└── index.html        # HTML template
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=School ERP
```

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Components

### Layout Components

- `Header` - Top navigation bar
- `Navbar` - Side navigation menu
- `AuthLayout` - Layout for authenticated pages
- `ParentLayout` - Layout for parent portal

### Common Components

- Form components
- Data tables
- Modal dialogs
- Loading indicators

## Routing

Routes are configured in `src/routes/AppRoutes.jsx` with the following structure:

- Public routes (login, register)
- Protected routes (dashboard, profile, etc.)
- Role-based routes

## State Management

Application state is managed using:

- React Context for auth state
- Local state with useState for component state
- Custom hooks for shared logic

## Styling

- CSS Modules for component-specific styles
- Global styles in index.css
- Responsive design breakpoints

## Best Practices

- Component composition
- React hooks guidelines
- Performance optimization
- Error boundaries
- Accessibility standards
