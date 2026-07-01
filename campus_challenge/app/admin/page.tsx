import Navbar from "@/components/header";
import Footer from "@/components/footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-blue-200 py-10">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">
            Tableau de bord
          </h1>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-gray-500">
                Défis créés
              </h2>

              <p className="text-5xl font-bold mt-4">
                12
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-gray-500">
                Participations
              </h2>

              <p className="text-5xl font-bold mt-4">
                34
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-gray-500">
                Défis terminés
              </h2>

              <p className="text-5xl font-bold mt-4">
                8
              </p>
            </div>

          </div>

          <div className="bg-white rounded-xl shadow-lg mt-10 p-8">

            <h2 className="text-2xl font-bold mb-6">
              Mes défis
            </h2>

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-3">Titre</th>

                  <th className="text-left">Participants</th>

                  <th className="text-left">Statut</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">

                  <td className="py-4">
                    Todo App
                  </td>

                  <td>
                    25
                  </td>

                  <td>

                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                      Actif
                    </span>

                  </td>

                </tr>

                <tr>

                  <td className="py-4">
                    API Laravel
                  </td>

                  <td>
                    18
                  </td>

                  <td>

                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                      Terminé
                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}