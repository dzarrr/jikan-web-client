# UI Design Explanation

## Page Design

### List Page

Inspired by **streaming services** (e.g., Netflix), this page features a **grid view** that is fully responsive, ensuring a seamless experience across different screen sizes.

### Detail Page

The design is **heavily inspired by MyAnimeList**, ensuring familiarity for anime enthusiasts. The layout remains fully responsive for all devices.

---

## Tech Stack

### 🔹 Ant Design

- Used as the **main component library**.
- Covers most use cases (pagination, search) out of the box.
- The default styling is modern and clean.
- Allows easy CSS overrides for customization.

### 🔹 Vite

- Used as the **build tool**.
- Supports **code splitting for external libraries** by default.

### 🔹 Vitest

- Used for **unit testing**.

### 🔹 Ahooks

- Provides **data-fetching hooks**.
- Very similar to **TanStack Query** in functionality.

---

## Project Requirements

### 1. Convenient UX

To create a clean, modern, and user-friendly experience:

- **Ant Design** is used as the component framework.
- The interface is designed to feel intuitive and seamless.

### 2. Unit Testing

- Unit tests have been added for **library-related files** that are exported to other components.
- **Component-level unit tests** have not been implemented yet.

### 3. Using Next.js or React.js

- The project is built using **React.js with Vite** for fast development and optimized builds.
- **Next.js** is a great option but not necessary for this app, as there's no need for server-side rendering (SSR). Client-side React with **code splitting** is sufficient.

### 4. Historical and Atomic Commits

- The **branching strategy** follows a structure of **main + feature (milestone) branches**
- Commits are kept **small and easy to review**.
- **Improvement:** Introduce **Git hooks** to limit max changes per commit.

### 5. Installation & Usage Instructions

- Already included in **README.md** ✅

### 6. Explanation of Design Choices

- This **EXPLANATION.md** file serves as documentation for Design Choices + Requirement Completion ✅

---

## Bonus Features (Optional)

### 🔹 Caching & Offline Capability

- **Service workers** are implemented to cache images & HTTP requests for offline use.
- Uses a **cache-first strategy**, falling back to the network if needed.
- **Improvement:** Implement cache expiration handling.

### 🔹 Styling with BEM & Minimal Coupling

- **Styled Components** are used instead of BEM.
- This ensures minimal coupling since styles are scoped per component.
- No need for manual class name management, as Styled Components generate them automatically.

### 🔹 Responsive Design

- The UI is **fully responsive** and works on all screen sizes.

### 🔹 Containerized App

- **Not implemented** because it's a static webpage (CDN hosting service like Netlify should be enough) 😢

### 🔹 Other Improvements

- **Code splitting per route** to **reduce bundle size**.
- **App monitoring** via **Sentry** for error tracking: [Sentry Dashboard](https://dzar-bela-personal.sentry.io/projects/jikan-web-client/?project=4508943133179984) _(requires authentication)_.
- **Error handling:** Added a **404 error page** for better user experience.
- **TypeScript** integration for better type safety.
- **Prettier configuration** for consistent code formatting.

---

## Areas for Improvement

🔸 **Image Optimization:** The current images are **large and unoptimized** for mobile devices.

🔸 **Git Hooks:** Implement **hooks to enforce linting, commit size limits, and test checks** before commits are pushed.

---

This should give you a clear picture of why certain choices were made and what could be improved in the future! 🚀
