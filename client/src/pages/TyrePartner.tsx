import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import SearchSection from "@/components/SearchSection";

type Section = "home";

export default function TyrePartner() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle hash changes for navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as Section;
      if (["home"].includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    window.location.hash = section;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="pt-20">
        <SearchSection />
      </main>
    </div>
  );
}
