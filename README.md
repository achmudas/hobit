### TODO

[] Create a style something similar to Hobbit theme (whatever that would be). Maybe ChatGPT will help
[] 

[] Use Vite instead of Webpack


Structure:

my-app/
│
├── backend/                # Go (REST API)
│   ├── cmd/                # Main applications (entry points)
│   │   └── server/         # e.g., main.go
│   ├── internal/           # Private Go packages
│   │   ├── handler/        # HTTP handlers
│   │   ├── service/        # Business logic
│   │   ├── model/          # Data models
│   │   ├── repository/     # DB access layer
│   │   └── config/         # Config handling
│   ├── pkg/                # Public packages (optional)
│   ├── go.mod
│   └── go.sum
│
├── frontend/               # React app
│   ├── public/             # Static assets
│   ├── src/                # Source code
│   │   ├── assets/         # Images, fonts, etc.
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API calls
│   │   ├── contexts/       # React Contexts
│   │   ├── utils/          # Utility functions
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── vite.config.ts      # Or webpack.config.js if using Webpack
│   └── package.json
│
├── .env                    # Global env variables (or .env.local)
├── docker-compose.yml      # For running frontend + backend + DB (if needed)
├── README.md




### Some ideas (rules?)

[] At the beginning get one powerful hobit with super magic powers (randomly)