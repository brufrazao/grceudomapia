export default function PartnersBar() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 via-white to-yellow-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Linha 1: Realização e Parceria */}
          <div>
            <div className="grid grid-cols-2 gap-8 mb-4">
              <h3 className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Realização
              </h3>
              <h3 className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Parceria
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <img 
                  src="/logo-ame-hq-white-bg.png" 
                  alt="AME - Apoio e Motivação Educacional" 
                  className="h-20 object-contain"
                />
              </div>
              <div className="flex justify-center items-center">
                <img 
                  src="/logo-santacasa.png" 
                  alt="Santa Casa de Cura" 
                  className="h-20 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Linha 2: Apoio (3 logos) */}
          <div>
            <h3 className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Apoio
            </h3>
            <div className="grid grid-cols-3 gap-8">
              <div className="flex justify-center items-center">
                <img 
                  src="/logo-cruzeiro.png" 
                  alt="Escola Estadual Cruzeiro do Céu" 
                  className="h-16 object-contain"
                />
              </div>
              <div className="flex justify-center items-center">
                <img 
                  src="/logo-idaris.png" 
                  alt="IDARIS - Instituto de Desenvolvimento Ambiental Raimundo Irineu Serra" 
                  className="h-16 object-contain"
                />
              </div>
              <div className="flex justify-center items-center">
                <img 
                  src="/logo-iceflu-blue-transparent.png" 
                  alt="ICEFLU - Santo Daime" 
                  className="h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

