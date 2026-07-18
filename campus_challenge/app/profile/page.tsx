
import Footer from "@/components/footer";

export default function ProfilePage() {
  return (
    <>


      <main className="min-h-screen bg-slate-100 py-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
            👤 Créer votre profil
          </h1>

          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-5xl">
              👨‍🎓
            </div>
          </div>

          <form className="space-y-6">

            <div>
              <label className="block mb-2 font-semibold">
                Nom complet
              </label>

              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Email
              </label>

              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Université
              </label>

              <input
                type="text"
                placeholder="Votre université"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Niveau
              </label>

              <select className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500">
                <option>Licence 1</option>
                <option>Licence 2</option>
                <option>Licence 3</option>
                <option>Master 1</option>
                <option>Master 2</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Bio
              </label>

              <textarea
                rows="4"
                placeholder="Parlez de vous..."
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Créer mon profil
            </button>

          </form>

        </div>
      </main>

      <Footer />
    </>
  );
}