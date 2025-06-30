# Wanderways Delivery Client

A modern B2C/P2P delivery platform built with React, Redux, and Vite. Wanderways enables users to quickly find reliable, independent drivers for delivering goods and parcels, with real-time notifications, insurance options, and business logistics support—all in a user-friendly, accessible interface.

---

## Features

-   **Find & Book Couriers:** Instantly connect with available drivers for fast, secure deliveries.
-   **Parcel & Ride Management:** Create, track, and manage parcels and rides in real time.
-   **User Profiles:** Manage personal info, vehicles, and delivery preferences.
-   **Business Integration:** Logistics for business clients without maintaining their own fleet.
-   **Notifications:** Timely updates on delivery status and requests.
-   **Insurance Options:** Optional shipment insurance for peace of mind.
-   **Internationalization:** Full support for English and Ukrainian.
-   **Accessibility:** Modern, accessible UI/UX with best practices.

---

## Tech Stack

-   **React 18** – UI library
-   **Redux & Redux Persist** – State management
-   **RTK Query** – Data fetching & caching
-   **React Router v6** – Routing
-   **Vite** – Fast build tool
-   **TypeScript** – Type safety
-   **Playwright** – E2E & component testing
-   **i18next** – Internationalization
-   **react-hook-form & yup** – Forms & validation
-   **Tailwind CSS** (if used) / Modern CSS
-   **Prettier, ESLint, Stylelint** – Code quality

---

## Project Structure

```
delivery-client/
├── public/                # Static assets (index.html, favicon, etc.)
├── src/
│   ├── components/        # Reusable UI components (forms, cards, layouts, etc.)
│   ├── pages/             # Route-based pages (Home, Profile, Parcel, Ride, etc.)
│   ├── store/
│   │   ├── features/      # Redux slices (auth, profile, ride, parcel, vehicles, etc.)
│   │   ├── services/      # RTK Query API services
│   │   └── store.tsx      # Store configuration
│   ├── shared/            # Shared UI elements (buttons, modals, loaders, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions, routes, constants
│   ├── i18n/              # Localization setup and translations
│   ├── styles/            # Global styles (if any)
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.tsx          # Exports
├── tests/                 # Playwright tests
├── dist/                  # Production build output
├── package.json           # Project metadata & scripts
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

---

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18+ recommended)
-   [npm](https://www.npmjs.com/) (v9+ recommended)

### Installation

```sh
git clone https://github.com/your-repo/delivery-client.git
cd delivery-client
npm install
```

### Development

```sh
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

```sh
npm run preview
```

---

## Available Scripts

-   `npm run dev` – Start development server
-   `npm run build` – Build for production
-   `npm run preview` – Preview production build
-   `npm run lint` – Lint code (ESLint + Stylelint)
-   `npm run lint:fix` – Auto-fix lint issues
-   `npm run prettier` – Check code formatting
-   `npm run prettier:fix` – Auto-format code
-   `npm run test-ct` – Run Playwright component tests
-   `npm run playwright` – Run Playwright E2E tests
-   `npm run playwright-ui` – Playwright test runner UI
-   `npm run deploy` – Deploy to GitHub Pages

---

## Routing

The app uses React Router v6. Main routes include:

-   `/` – Home
-   `/parcel/:id` – Parcel details
-   `/ride/:id` – Ride details
-   `/parcel` – Create parcel
-   `/ride` – Create ride
-   `/available-parcels` – List available parcels
-   `/available-drivers` – List available drivers
-   `/profile` – User profile
-   `/profile/general` – Profile general info
-   `/profile/email` – Change email
-   `/profile/vehicles` – Manage vehicles
-   `/profile/new-vehicle` – Add vehicle
-   `/profile/password` – Change password
-   `/signin`, `/signup` – Auth pages
-   `/signin/restore-password` – Password recovery
-   `/signup/confirm-email` – Email confirmation
-   `/signup/verified-email` – Email verified
-   `/confirm-delivery` – Confirm delivery
-   `/confirm-delivery/feedback` – Leave feedback

---

## State Management

-   **Redux Toolkit** for state slices: `auth`, `profile`, `ride`, `parcel`, `vehicles`, `switchers`.
-   **Redux Persist** for state persistence.
-   **RTK Query** for API calls: `authService`, `profileService`, `parcelService`, `rideService`, `vehicleService`.

---

## Internationalization (i18n)

-   **i18next** with `react-i18next` for translations.
-   Supported languages: English (`en`), Ukrainian (`uk`).
-   Language files: `src/i18n/locales/en.ts`, `src/i18n/locales/uk.ts`.

---

## Testing

-   **Playwright** for E2E and component tests.
-   Tests are located in the `tests/` directory.
-   Run all tests:
    ```sh
    npm run test-ct
    npm run playwright
    ```
-   Playwright UI:
    ```sh
    npm run playwright-ui
    ```

---

## Code Style & Linting

-   **ESLint** for JavaScript/TypeScript linting
-   **Prettier** for code formatting
-   **Stylelint** for CSS/SCSS linting

Check code:

```sh
npm run lint
npm run prettier
```

Auto-fix issues:

```sh
npm run lint:fix
npm run prettier:fix
```

---

## Deployment

-   Build the app: `npm run build`
-   Deploy to GitHub Pages: `npm run deploy`

---

## Accessibility & UX

-   Follows modern accessibility standards (ARIA, keyboard navigation, etc.)
-   Responsive, mobile-friendly design
-   Uses best practices for UI/UX

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

Please follow the code style and best practices outlined above.

---

## License

This project is licensed under the [MIT License](LICENSE).
