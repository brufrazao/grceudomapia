import { Link } from "wouter";

export default function Galeria() {
  const fotos = [
    { src: "/foto1.jpeg", alt: "Turma de ginástica rítmica com a professora" },
    { src: "/foto2.jpeg", alt: "Apresentação na ecovila" },
    { src: "/foto3.jpeg", alt: "Turma e professora durante treino" },
    { src: "/foto4.jpeg", alt: "Treino com fita" },
    { src: "/foto5.jpeg", alt: "Coreografia em grupo" },
    { src: "/foto6.jpeg", alt: "Exercícios de flexibilidade" },
    { src: "/foto7.jpeg", alt: "Treino de postura" },
    { src: "/foto8.jpeg", alt: "Ginasta praticando espacate" },
    { src: "/foto9.jpeg", alt: "Aula de alongamento" },
    { src: "/foto10.jpeg", alt: "Treino em grupo" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="/logo.png" alt="Logo Ginástica Rítmica Céu do Mapiá" className="h-16 w-16" />
              <div>
                <h3 className="font-bold text-white mb-3">Ginástica Rítmica - Céu do Mapiá</h3>
              <p className="text-sm">
                Núcleo de Esportes - Projeto AME (Apoio e Motivação Educacional)
              </p>      </div>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">Início</Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-900 font-medium">Sobre</Link>
            <Link href="/galeria" className="text-gray-700 hover:text-blue-900 font-medium">Galeria</Link>
            <Link href="/apoie" className="text-gray-700 hover:text-blue-900 font-medium">Apoie</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-100 via-yellow-50 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Galeria de Fotos</h1>
          <p className="text-xl text-gray-700">Momentos especiais da nossa escolinha</p>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fotos.map((foto, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={foto.src} 
                  alt={foto.alt} 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm">{foto.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Descrição */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Reforçando os<br />Laços de Amizade
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Cada foto conta uma história de dedicação, aprendizado e alegria.<br />
              As crianças da Vila Céu do Mapiá têm a oportunidade de desenvolver suas habilidades na ginástica 
              rítmica, criando laços de amizade e descobrindo seu potencial.
            </p>
            <p className="text-lg text-gray-700">
              As apresentações e treinos acontecem em espaços da comunidade, contando com apoio 
              das famílias da comunidade e dedicação dos alunos.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-3">Projeto AME</h3>
              <p className="text-sm">
                Escolinha de Ginástica Rítmica da Vila Céu do Mapiá
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Contato</h3>
              <p className="text-sm mb-1">Email: bruinfinitum@gmail.com</p>
              <p className="text-sm">WhatsApp: +55 21 99507-1990</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Links</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/" className="hover:text-white">Início</Link>
                <Link href="/sobre" className="hover:text-white">Sobre</Link>
                <Link href="/galeria" className="hover:text-white">Galeria</Link>
                <Link href="/apoie" className="hover:text-white">Apoie</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm">
            <p>&copy; 2025 Ginástica Rítmica Céu do Mapiá - Núcleo de Esportes - Projeto AME. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

