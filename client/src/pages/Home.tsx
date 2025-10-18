import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-4 cursor-pointer">
              <img src="/logo.png" alt="Logo Ginástica Rítmica Céu do Mapiá" className="h-16 w-16" />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">Ginástica Rítmica -<br className="md:hidden" /> Céu do Mapiá</h1>
                <p className="text-sm text-gray-600">Núcleo de Esportes do AME (Apoio e Motivação Educacional)</p>
              </div>
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-100 via-violet-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <img src="/logo.png" alt="Logo" className="h-24 w-24 mb-4" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-cyan-500 mb-6">
                Ginástica Rítmica
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-cyan-500 mb-6">
                Céu do Mapiá
              </h3>
              <p className="text-xl text-gray-700 mb-4">
                Escolinha de Ginástica Rítmica<br className="md:hidden" />
                da Vila Céu do Mapiá
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Núcleo de Esportes do AME<br className="md:hidden" />
                Apoio e Motivação Educacional
              </p>
              <div className="flex gap-4">
                <Link href="/apoie">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-lg px-8 py-6">
                    Apoie o Projeto
                  </Button>
                </Link>
                <Link href="/sobre">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-cyan-500 text-cyan-600 hover:bg-cyan-50">
                    Saiba Mais
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/foto3.jpeg" 
                alt="Turma de ginástica rítmica" 
                className="rounded-lg shadow-2xl w-full border-4 border-violet-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Ginástica Rítmica */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Sobre a<br className="md:hidden" /> Ginástica Rítmica</h2>
            <div className="bg-gradient-to-r from-violet-50 via-blue-50 to-yellow-50 p-8 rounded-lg mb-8 border-2 border-violet-100">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A ginástica rítmica é um esporte que combina dança, balé e elementos ginásticos com a 
                manipulação de aparelhos em coreografias musicais.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Aparelhos Oficiais</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full font-medium">Fita</span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-900 rounded-full font-medium">Arco</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full font-medium">Bola</span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-900 rounded-full font-medium">Corda</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full font-medium">Maças</span>
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Características do Esporte</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Exige flexibilidade, coordenação, equilíbrio, força, ritmo, expressão corporal e técnica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Principais Benefícios para Crianças</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <CardTitle className="text-blue-900">Coordenação Motora</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Desenvolvimento da coordenação motora fina e grossa
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-violet-200 hover:border-violet-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🧘</span>
                </div>
                <CardTitle className="text-violet-700">Postura e Flexibilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Melhora da flexibilidade, postura e consciência corporal
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🧠</span>
                </div>
                <CardTitle className="text-blue-900">Concentração</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Aumento da concentração, disciplina e autocontrole
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-violet-200 hover:border-violet-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <CardTitle className="text-violet-700">Criatividade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Estímulo à criatividade, expressão artística e senso estético
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">💪</span>
                </div>
                <CardTitle className="text-blue-900">Autoestima</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Promoção da autoestima, respeito às regras e trabalho em equipe
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <CardTitle className="text-blue-900">Vínculos Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Fortalecimento de vínculos sociais, pertencimento e responsabilidade
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apresentação do Projeto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Sobre o Projeto</h2>
            <div className="bg-gradient-to-r from-violet-50 via-blue-50 to-yellow-50 p-8 rounded-lg mb-8 border-2 border-violet-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                A Escolinha de Ginástica Rítmica da Vila Céu do Mapiá é uma iniciativa do Núcleo de Esportes 
                do Projeto AME (Apoio e Motivação Educacional).<br />
                A escolinha funciona no contraturno escolar e visa oferecer às crianças formação esportiva, 
                social e educativa, reforçando valores e oportunidades.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-300">
                <CardHeader>
                  <CardTitle className="text-blue-900">Público-Alvo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Meninas de 5 a 13 anos. Turma atual com aproximadamente 13 alunas, 
                    com meta de expansão para 25+ ginastas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-300">
                <CardHeader>
                  <CardTitle className="text-blue-900">Cronograma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A intenção é ampliar o projeto para até 4 aulas semanais para duas turmas 
                    (pré infantil e infantil), com duração de 50 a 90 minutos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-300">
                <CardHeader>
                  <CardTitle className="text-blue-900">Local</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Vila Céu do Mapiá - Amazonas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Preview */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Galeria de Fotos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <img src="/foto2.jpeg" alt="Apresentação na ecovila" className="rounded-lg shadow-md w-full h-48 object-cover border-2 border-yellow-300" />
            <img src="/foto3.jpeg" alt="Turma e professora" className="rounded-lg shadow-md w-full h-48 object-cover border-2 border-blue-300" />
            <img src="/foto4.jpeg" alt="Treino com fita" className="rounded-lg shadow-md w-full h-48 object-cover border-2 border-yellow-300" />
            <img src="/foto5.jpeg" alt="Coreografia em grupo" className="rounded-lg shadow-md w-full h-48 object-cover border-2 border-blue-300" />
          </div>
          <div className="text-center">
            <Link href="/galeria">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Ver Galeria Completa
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Faça Parte Dessa Transformação</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sua contribuição ajuda a manter e expandir a escolinha, oferecendo oportunidades 
            para mais crianças da Vila Céu do Mapiá.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/apoie">
              <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 text-lg px-8 py-6 font-bold">
                Apoie Agora
              </Button>
            </Link>
            <a href="https://wa.me/5521995071990?text=Olá! Gostaria de fazer uma doação recorrente para o Projeto Ginástica Rítmica Céu do Mapiá" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                Doação Recorrente via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-3">Ginástica Rítmica - Céu do Mapiá</h3>
              <p className="text-sm">
                Núcleo de Esportes - Projeto AME (Apoio e Motivação Educacional)
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

