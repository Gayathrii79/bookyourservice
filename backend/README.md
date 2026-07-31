# BookYourService — Backend

Production-ready Express + MongoDB backend for the **BookYourService** lead-generation platform.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js ≥ 18 |
| Framework | Express.js |
| Database | MongoDB Atlas (via Mongoose) |
| Validation | express-validator |
| Security | helmet · cors · dotenv |

---

## Folder Structure

```
backend/
├── config/
│   └── db.js                 # MongoDB Atlas connection
├── controllers/
│   └── enquiryController.js  # Business logic
├── middleware/
│   └── errorHandler.js       # Global error + 404 handlers
├── models/
│   └── Enquiry.js            # Mongoose schema & model
├── routes/
│   └── enquiryRoutes.js      # Express router + validation rules
├── .env.example              # Environment variable template
├── package.json
├── README.md
└── server.js                 # Entry point
```

---

## Installation

### 1 — Prerequisites

- [Node.js ≥ 18](https://nodejs.org/)
- A free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

### 2 — Install dependencies

```bash
cd backend
npm install
```

### 3 — Set up environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in your values (see **Environment Variables** below).

---

## MongoDB Atlas Setup

1. Go to [cloud.mongodb.com](https://cloud.mongodb.com) and create a free M0 cluster.
2. Under **Database Access** → create a user with **read/write** privileges.
3. Under **Network Access** → add your IP (or `0.0.0.0/0` for development).
4. Click **Connect → Drivers** → copy the connection string.
5. Paste it into `MONGODB_URI` in your `.env` file, replacing `<password>` with your user password.

The database and `enquiries` collection are created automatically on first insert.

---

## Environment Variables

Copy `.env.example` → `.env` and set all values. **Never commit `.env` to git.**

| Variable | Required | Description |
|---|---|---|
| `MONGODB_URI` | ✅ | Full MongoDB Atlas connection string |
| `PORT` | ✅ | Port the server listens on (default `5000`) |
| `FRONTEND_ORIGIN` | ✅ | Frontend URL allowed by CORS, e.g. `http://localhost:3000` |
| `NODE_ENV` | ✅ | `development` or `production` |

Example:

```env
MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.xyz.mongodb.net/bookyourservice?retryWrites=true&w=majority
PORT=5000
FRONTEND_ORIGIN=http://localhost:3000
NODE_ENV=development
```

---

## Running the Backend

### Development (auto-restarts on file change)

```bash
cd backend
npm run dev
```

### Production

```bash
cd backend
npm start
```

You should see:

```
✅  MongoDB connected: cluster0.xyz.mongodb.net
🚀  Server running on http://localhost:5000
```

---

## API Endpoints

### `POST /api/enquiry`

Submit a new service enquiry.

**Request body (JSON):**

```json
{
  "name": "Priya Sharma",
  "phone": "+91 98765 43210",
  "category": "Electrical",
  "service": "Electrician",
  "message": "Need wiring checked in 3BHK."
}
```

| Field | Type | Required | Notes |
|---|---|---|---|
| `name` | string | ✅ | 2–100 characters |
| `phone` | string | ✅ | 10, digits / 
| `category` | string | ❌ | Defaults to `"General"` |
| `service` | string | ❌ | Sub-service name (e.g. `"Wiring"`) |
| `message` | string | ❌ | Max 1000 characters |

**Success response `201`:**

```json
{
  "success": true,
  "message": "Enquiry submitted successfully.",
  "data": { "id": "64f9a..." }
}
```

**Validation error `400`:**

```json
{
  "success": false,
  "message": "Validation failed. Please check the fields and try again.",
  "errors": [
    { "field": "phone", "message": "Please enter a valid phone number." }
  ]
}
```

---

### `GET /api/enquiries`

Retrieve all enquiries — reserved for the future admin dashboard.

**Query parameters:**

| Param | Type | Default | Notes |
|---|---|---|---|
| `status` | string | — | Filter by `Pending` / `Contacted` / `Resolved` / `Cancelled` |
| `page` | number | `1` | Page number |
| `limit` | number | `20` | Results per page |

**Success response `200`:**

```json
{
  "success": true,
  "data": [ { "_id": "...", "name": "Priya", "phone": "...", "status": "Pending", ... } ],
  "pagination": { "total": 42, "page": 1, "limit": 20, "pages": 3 }
}
```

---

### `GET /health`

Returns server status. Useful for uptime checks.

```json
{ "status": "ok", "timestamp": "2026-07-04T15:00:00.000Z" }
```

---

## HTTP Status Codes

| Code | Meaning |
|---|---|
| `200` | OK |
| `201` | Enquiry created |
| `400` | Validation error |
| `404` | Route not found |
| `409` | Duplicate record |
| `500` | Internal server error |

---

## Enquiry Status Lifecycle

```
Pending → Contacted → Resolved
                    ↘ Cancelled
```

Default is `Pending`. Status updates are done directly in MongoDB Atlas until an admin dashboard is added.

---

## Frontend Integration

The frontend reads `VITE_API_URL` from its `.env` (defaults to `http://localhost:5000`).

To point the frontend to a different backend:

```env
# bys_UI/.env
VITE_API_URL=https://api.bookyourservice.com
```

---

## Future Roadmap

- [ ] Admin dashboard with authentication (JWT)
- [ ] Role-based access control
- [ ] Email notifications on new enquiry (Nodemailer / SendGrid)
- [ ] WhatsApp webhook integration
- [ ] Analytics endpoint (enquiries by category / date)
- [ ] Rate limiting (express-rate-limit)

---

## Security Notes

- **Helmet** sets secure HTTP headers.
- **CORS** allows only the configured frontend origin.
- The MongoDB URI is read from environment variables — never hardcoded.
- Input sanitisation is applied at the route level (express-validator) and again at the schema level (Mongoose).
- Error messages in production mode are generic to avoid leaking internals.
