# 📊 JP Dashboard

A modern, responsive **React + Vite dashboard** for data visualization, notifications, activities, and contacts — built with MUI, D3, and Recharts.  
Perfect for learning, prototyping, or building admin dashboards with a clean UI.

---

### 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/error404-sp/jp-dashboard.git
cd jp-dashboard
nvm use node

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
Now open http://localhost:5173 in your browser to view the dashboard.
```

### ✨ Features

- 📱 Responsive Layout – Works on desktop, tablet, and mobile.

- Dark / Light Theme Toggle – Switch themes instantly.

- 🧭 Side Panel + Right Panel – Navigation + notifications, activities, and contacts.

- 📊 Charts & Maps – Built with D3 + Recharts for interactive data visualization.

- ⏳ Skeleton Loading – Beautiful placeholder UI while data loads.

- 🎨 Clean UI & Animations – Smooth transitions and simple design.

### 📦 Dependencies

This project uses the following key libraries (installed automatically with npm install):

- React 19 – Component-based UI framework

- Vite 7 – Lightning-fast bundler and dev server

- React Router DOM 7 – Modern routing solution

- (Material UI) – Components + Icons

- D3, D3-Geo, TopoJSON, World-Atlas – Maps and geographic projections

- Recharts – Data visualization charts

You don’t need to install anything manually — all dependencies are listed in package.json.

### 🏗 Project Structure

```
jp-dashboard/
 ├── public/                  # Static assets (icons, logos, mock images)
 ├── src/
 │   ├── components/          # Shared components (side panel, right panel, etc.)
 │   ├── contexts/            # UIContext & DataContext for global state
 │   ├── hooks/               # Custom hooks (loading, metrics fetching)
 │   ├── pages/               # Main dashboard views
 │   ├── ui/                  # UI elements like ThemeIcon, CustomProfile
 │   ├── data/                # Local JSON data (dashboard.json)
 │   └── App.jsx
 ├── package.json
 └── README.md
```
