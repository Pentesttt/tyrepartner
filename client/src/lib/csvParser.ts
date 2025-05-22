import Papa from "papaparse";

export interface Tire {
  Marca: string;
  Referencia: string;
  Stock: string;
  PrecoClienteFinal: string;
}

export async function loadTiresData(): Promise<Tire[]> {
  return new Promise((resolve, reject) => {
    // Sample CSV data - in production, this would load from /pneus.csv
    const sampleCSV = `Marca,Referencia,Stock,PrecoClienteFinal
Bridgestone,185/60R14,25,2460
Michelin,195/65R15,18,3200
Continental,205/55R16,12,3850
Goodyear,185/60R14,30,2380
Pirelli,195/65R15,8,3400
Bridgestone,205/55R16,15,3750
Michelin,175/70R13,22,2100
Continental,185/65R14,20,2650
Goodyear,195/60R15,14,2980
Pirelli,205/60R16,10,3600
Dunlop,185/60R14,28,2420
Yokohama,195/65R15,16,3150
Hankook,205/55R16,9,3520
Toyo,175/70R13,35,1980
Falken,185/65R14,11,2580`;

    // Simulate loading delay
    setTimeout(() => {
      Papa.parse<Tire>(sampleCSV, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          if (results.errors.length > 0) {
            reject(new Error("Error parsing CSV: " + results.errors[0].message));
          } else {
            resolve(results.data);
          }
        },
        error: function (error) {
          reject(error);
        },
      });
    }, 1000);
  });
}

// Alternative function to load from actual CSV file
export async function loadTiresFromFile(): Promise<Tire[]> {
  return new Promise((resolve, reject) => {
    fetch("/pneus.csv")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load CSV file");
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse<Tire>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            if (results.errors.length > 0) {
              reject(new Error("Error parsing CSV: " + results.errors[0].message));
            } else {
              resolve(results.data);
            }
          },
          error: function (error) {
            reject(error);
          },
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
