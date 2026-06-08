# Wayken MERN

This project converts the original `wayken.html` landing page into a MERN-ready app while preserving the same design and content.

The frontend is in `frontend/` and uses JSX. The backend is in `backend/`.

## Folder Structure

```text
FREELANE/
  backend/
    server.js
    package.json
    .env.example
  frontend/
    index.html
    package.json
    vite.config.js
    public/
      assets/
    src/
```

## Images

Put site images in:

```text
frontend/public/assets/
```

Use them in JSX or CSS like this:

```jsx
<img src="/assets/example.jpg" alt="Description" />
```

```css
background-image: url("/assets/example.jpg");
```

The leadership carousel currently uses these image files:

```text
frontend/public/assets/Foundingdirector.jpeg
frontend/public/assets/Globalchairman.jpeg
frontend/public/assets/Ceo.jpeg
frontend/public/assets/Cfo.jpeg
frontend/public/assets/Indianchairman.jpeg
frontend/public/assets/Director.jpeg
frontend/public/assets/Director2.jpeg
frontend/public/assets/Director3.jpeg
```

## Run Locally

```bash
cd backend
npm install
npm run dev
```

In another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend: `http://localhost:5173`

Backend API: `http://localhost:5000`

## MongoDB

Copy `backend/.env.example` to `backend/.env` and set `MONGODB_URI`.

The enquiry form posts to `POST /api/enquiries`. If MongoDB is configured, enquiries are saved to the `enquiries` collection. Without MongoDB, the backend still accepts submissions and logs them.

## Build

```bash
cd frontend
npm run build

cd ../backend
npm start
```

The production server serves the React build from `frontend/dist`.
