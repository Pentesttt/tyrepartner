import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TireCard from "@/components/TireCard";
import { loadTiresData, type Tire } from "@/lib/csvParser";




export default function SearchSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tiresData, setTiresData] = useState<Tire[]>([]);
  const [filteredTires, setFilteredTires] = useState<Tire[]>([]);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadTiresData();
        setTiresData(data);
      } catch (error) {
        console.error("Error loading tires data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    setSearched(true);
    
    if (!term) {
      setFilteredTires([]);
      return;
    }

    const filtered = tiresData.filter(tire =>
      tire.Referencia && tire.Referencia.toLowerCase().includes(term)
    );
    setFilteredTires(filtered);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Encontre o Pneu Perfeito
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Busque pela referência e encontre os melhores pneus com preços competitivos
          </p>

          {/* Search Container */}
          <div className="max-w-2xl mx-auto bg-white p-4 rounded-xl shadow-tyrepartner">
            <div className="flex gap-4 flex-col sm:flex-row">
              <Input
                type="text"
                placeholder="Digite a referência do pneu (ex: 185/60R14)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 text-base h-12 border-2 focus:border-[hsl(var(--tyrepartner-red))]"
              />
              <Button
                onClick={handleSearch}
                className="bg-tyrepartner-red hover:bg-red-700 text-white h-12 px-8 font-semibold"
              >
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-[hsl(var(--tyrepartner-red))] rounded-full animate-spin-slow mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando dados...</p>
          </div>
        ) : searched ? (
          filteredTires.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">Nenhum pneu encontrado</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredTires.map((tire, index) => (
                <TireCard key={index} tire={tire} />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              Verifique a referencia do seu pneu no LIVRETE DA VIATURA e insira acima!
        
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
