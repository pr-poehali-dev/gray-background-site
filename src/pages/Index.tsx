import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-gray-200"
      style={{
        background:
          "radial-gradient(ellipse at center, #e5e5e5 0%, #d0d0d0 50%, #a8a8a8 100%)",
      }}
    >
      {/* Виньетка по бокам */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600/30 via-transparent to-gray-600/30 pointer-events-none" />

      <div className="text-center z-10 max-w-md mx-auto px-8">
        {/* Логотип */}
        <div className="mb-12 animate-fade-in">
          <img
            src="/img/ffdc4544-de58-4fbf-8ab5-62e586916097.jpg"
            alt="HL2RP Logo"
            className="w-48 h-48 mx-auto object-contain rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Кнопки */}
        <div className="space-y-4 animate-fade-in">
          <Button
            onClick={() =>
              window.open("https://fitzbr.42web.io/jobs.html", "_blank")
            }
            className="w-full py-6 text-lg font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-900 to-purple-900 hover:from-blue-800 hover:to-purple-800 border-0"
          >
            <Icon name="Briefcase" className="mr-3" size={24} />
            Генератор профессий [SUP]
          </Button>

          <Button
            onClick={() =>
              window.open("https://discord.gg/8SzNbQ466c", "_blank")
            }
            className="w-full py-6 text-lg font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-900 to-purple-900 hover:from-blue-800 hover:to-purple-800 border-0"
          >
            <Icon name="Users" className="mr-3" size={24} />
            Комьюнити
          </Button>

          <Button
            onClick={() => window.open("https://github.com/ST37332", "_blank")}
            className="w-full py-6 text-lg font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-900 to-purple-900 hover:from-blue-800 hover:to-purple-800 border-0"
          >
            <Icon name="Code" className="mr-3" size={24} />
            Разработчик
          </Button>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  );
};

export default Index;
