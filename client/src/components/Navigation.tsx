import { Menu, X } from "lucide-react";

type Section = "home" | "about" | "contact";

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Navigation({
  activeSection,
  onSectionChange,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavigationProps) {
  const navItems = [
    { id: "home" as Section, label: "Home" },
    { id: "about" as Section, label: "About" },
    { id: "contact" as Section, label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-tyrepartner z-50 py-4">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold tyrepartner-red"
          onClick={(e) => {
            e.preventDefault();
            onSectionChange("home");
          }}
        >
          TyrePartner
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`font-medium px-4 py-2 rounded-md transition-all duration-300 ${
                  activeSection === item.id
                    ? "tyrepartner-red bg-red-50"
                    : "text-gray-700 hover:tyrepartner-red hover:bg-red-50"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionChange(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-tyrepartner md:hidden">
            <ul className="flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block px-6 py-3 font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "tyrepartner-red bg-red-50"
                        : "text-gray-700 hover:tyrepartner-red hover:bg-red-50"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSectionChange(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
