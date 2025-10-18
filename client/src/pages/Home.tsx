import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo Ginástica Rítmica Céu do Mapiá" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-blue-900">Ginástica Rítmica</h1>
              <p className="text-sm text-blue-700">Céu do Mapiá</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">Início</Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-900 font-medium">Sobre</Link>
            <Link href="/galeria" className="text-gray-700 hover:text-blue-900 font-medium">Galeria</Link>
            <Link href="/apoie" className="text-gray-700 hover:text-blue-900 font-medium">Apoie</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Projeto AME
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-6">
                Escolinha de Ginástica Rítmica da Vila Céu do Mapiá
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Apoio Motivacional e Educacional</strong> (contraturno escolar)
              </p>
              <p className="text-gray-600 mb-6">
                Vila Céu do Mapiá, Amazonas • Núcleo AME — Sede do legado do Padrinho Sebastião
              </p>
              <div className="flex gap-4">
                <Link href="/apoie">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Apoie o Projeto
                  </Button>
                </Link>
                <Link href="/sobre">
                  <Button size="lg" variant="outline">
                    Saiba Mais
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/foto1.jpeg" 
                alt="Turma de ginástica rítmica" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Sobre o Projeto</h2>
            <p className="text-lg text-gray-700">
              O projeto AME (Apoio Motivacional e Educacional) apresenta a Escolinha de Ginástica Rítmica 
              da Vila Céu do Mapiá, iniciativa do núcleo AME sediado na ecovila criada pelo Padrinho Sebastião. 
              A escolinha funciona no contraturno escolar e visa oferecer às crianças formação esportiva, 
              social e educativa, reforçando valores e oportunidades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">Público-Alvo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Meninas de 7 a 12 anos. Turma atual com aproximadamente 13 alunas, 
                  com meta de expansão para 25+ ginastas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">Cronograma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  2 vezes por semana, 1h30 por aula, no contraturno escolar. 
                  Início das atividades em abril.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">Local</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Vila Céu do Mapiá, ecovila no Amazonas que representa o legado 
                  do Padrinho Sebastião.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Nossos Objetivos</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-purple-900">Objetivo Geral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Garantir recursos para manutenção, expansão e qualidade da escolinha por 12 meses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-900">Objetivos Específicos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Fornecer aparelhos, vestuário e materiais de treino adequados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Remunerar a professora (pró-labore) para garantir continuidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Ampliar a turma para no mínimo 25 ginastas e estruturar turmas por faixa etária</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Promover captação recorrente de patrocinadores e visibilidade dos apoiadores</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Benefícios da Ginástica Rítmica</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Desenvolvimento Motor</h3>
                <p className="text-gray-600">
                  Melhora da coordenação motora fina e grossa, flexibilidade, postura e consciência corporal
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="font-semibold text-purple-900 mb-2">Concentração e Disciplina</h3>
                <p className="text-gray-600">
                  Aumento da concentração, disciplina e autocontrole através da prática regular
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <h3 className="font-semibold text-pink-900 mb-2">Criatividade e Expressão</h3>
                <p className="text-gray-600">
                  Estímulo à criatividade, expressão artística e senso estético
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-2">Socialização</h3>
                <p className="text-gray-600">
                  Promoção da autoestima, respeito às regras, trabalho em equipe e vínculos sociais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Preview */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Galeria de Fotos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <img src="/foto2.jpeg" alt="Apresentação na ecovila" className="rounded-lg shadow-md w-full h-48 object-cover" />
            <img src="/foto3.jpeg" alt="Turma e professora" className="rounded-lg shadow-md w-full h-48 object-cover" />
            <img src="/foto4.jpeg" alt="Treino com fita" className="rounded-lg shadow-md w-full h-48 object-cover" />
            <img src="/foto5.jpeg" alt="Coreografia em grupo" className="rounded-lg shadow-md w-full h-48 object-cover" />
          </div>
          <div className="text-center">
            <Link href="/galeria">
              <Button variant="outline" size="lg">
                Ver Galeria Completa
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Faça Parte Dessa Transformação</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sua contribuição ajuda a manter e expandir a escolinha, oferecendo oportunidades 
            para mais crianças da Vila Céu do Mapiá.
          </p>
          <Link href="/apoie">
            <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-gray-100">
              Apoie Agora
            </Button>
          </Link>
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
            <p>&copy; 2024 Projeto AME - Ginástica Rítmica Céu do Mapiá. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

