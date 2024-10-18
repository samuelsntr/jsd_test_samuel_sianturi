# Next.js CRUD Fish App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is designed for managing fish species data with a clean UI and responsive design using **Next.js 14** and **Tailwind CSS**.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/samuelsntr/jsd_test_samuel_sianturi.git
cd jsd_test_samuel_sianturi
npm install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Start with /species

Project Structure
The project is organized as follows:
.
├── components/       # Contains client-side React components
├── data/             # Logic for retrieving data from API, authentication, and TypeScript types
├── pages/
│   ├── index.tsx     # Main page (or initial page) located at /species
│   └── species/      # Pages related to species management
├── README.md         # Project documentation
└── next.config.js    # Next.js configuration

components/: This folder contains all client components used throughout the application.
data/: Contains the logic for interacting with APIs, authentication methods, and TypeScript type definitions.
pages/index.tsx: The main entry point of the app, which displays the fish species list.

Main Features
Species Management: View, add, edit, and delete fish species on the /species page.
Authentication: Simple user authentication flow.
Responsive Design: Fully responsive layout using Tailwind CSS.
API Integration: Uses Axios for interacting with the external API for data management.

API Endpoints
This project interacts with an external API to manage species data. Here are some of the main endpoints used:

GET /species - Retrieve all species.
POST /species - Add a new species.
PUT /species/:id - Update a species by ID.
DELETE /species/:id - Delete a species by ID.
Modify these endpoints in the data/ folder to match your backend's API structure.

Technologies
Next.js 14
Tailwind CSS
TypeScript
Axios - For making HTTP requests to the API.

