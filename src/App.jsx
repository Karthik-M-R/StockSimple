/**
 * App Component
 * 
 * WHY IS THIS EMPTY?
 * 
 * This component is not used in this project architecture.
 * 
 * REASON:
 * - We're using React Router's RouterProvider in main.jsx
 * - All routing logic is in router/router.jsx
 * - Layout component (layout/layout.jsx) handles the app structure
 * - App.jsx is leftover from Vite template, not needed here
 * 
 * ALTERNATIVE ARCHITECTURES:
 * 1. Could use App.jsx as wrapper for RouterProvider
 * 2. Could add global providers here (ThemeProvider, AuthProvider, etc.)
 * 3. Could add error boundaries here
 * 
 * CURRENT ARCHITECTURE:
 * main.jsx -> RouterProvider -> router.jsx -> Layout -> Pages
 * 
 * INTERVIEW Q: Why return null?
 * A: Component must return something. null is valid (renders nothing)
 * 
 * NOTE: This file could be deleted, but keeping it doesn't hurt.
 * Some teams prefer to keep it for future global providers.
 */

function App() {
  return null;
}

export default App;
