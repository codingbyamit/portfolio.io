# MERN Portfolio - Amit

## Run locally

### Backend

1. cd backend
2. copy .env.example -> .env and set MONGO_URI
3. npm install
4. npm start

### Frontend

1. cd frontend
2. npm install
3. npm run dev

## Deploy

-   Frontend: Vercel / Netlify (set build to `npm run build`)
-   Backend: Render / Railway / Heroku (set MONGO_URI env)
-   Update frontend `VITE_API_BASE` to point to deployed backend.
