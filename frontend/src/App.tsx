import { Route, Routes } from "react-router-dom";
import { ContactPage } from "./pages/ContactPage";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SiteFooter } from "./shared/ui/organisms/SiteFooter";
import { SiteHeader } from "./shared/ui/organisms/SiteHeader";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)] font-[family-name:var(--font-display)] text-[var(--color-text)]">
      <SiteHeader />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
