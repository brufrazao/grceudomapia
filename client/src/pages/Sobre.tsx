import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Sobre() {
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
              </p>   </div>
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
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Sobre o Projeto</h1>
          <p className="text-xl text-gray-700">Conheça a Escolinha de Ginástica Rítmica Céu do Mapiá</p>
        </div>
      </section>

      {/* Identificação */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Identificação do Projeto</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Nome do Projeto</h3>
                    <p className="text-gray-700">Escolinha de Ginástica Rítmica — AME</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Local</h3>
                    <p className="text-gray-700">Vila Céu do Mapiá - Amazonas</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Público-Alvo</h3>
                    <p className="text-gray-700">Meninas de 5 a 13 anos (turma atual ≈ 13 alunas; meta: 25+)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Cronograma</h3>
                    <p className="text-gray-700">A intenção é ampliar o projeto para até 4 aulas semanais para duas turmas (pré infantil e infantil), com duração de 50 a 90 minutos</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Início</h3>
                    <p className="text-gray-700">Abril de 2024</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Proponente/Responsável</h3>
                    <p className="text-gray-700">Núcleo AME</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Justificativa Social */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Justificativa Social</h2>
            <p className="text-lg text-gray-700 mb-4">
              A escolinha complementa a educação formal das crianças da comunidade, oferecendo atividade 
              esportiva que contribui para desenvolvimento físico, cognitivo e social.
            </p>
            <p className="text-lg text-gray-700">
              Hoje a professora atua voluntariamente e usa recursos próprios; as famílias não têm condições 
              de arcar com todos os custos. O apoio financeiro é essencial para profissionalizar o projeto 
              e ampliar o alcance.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre a Ginástica Rítmica */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Sobre a Ginástica Rítmica</h2>
            <p className="text-lg text-gray-700 mb-6">
              A ginástica rítmica é um esporte que combina dança, balé e elementos ginásticos com a 
              manipulação de aparelhos em coreografias musicais.
            </p>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-blue-900">Aparelhos Oficiais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full font-medium">Fita</span>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-900 rounded-full font-medium">Arco</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full font-medium">Bola</span>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-900 rounded-full font-medium">Corda</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full font-medium">Massas</span>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold text-blue-900 mb-4">Características do Esporte</h3>
            <p className="text-gray-700 mb-6">
              Exige flexibilidade, coordenação, equilíbrio, força, ritmo, expressão corporal e técnica.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mb-4">Principais Benefícios para Crianças</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Desenvolvimento da coordenação motora fina e grossa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold mt-1">•</span>
                <span>Melhora da flexibilidade, postura e consciência corporal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 font-bold mt-1">•</span>
                <span>Aumento da concentração, disciplina e autocontrole</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">•</span>
                <span>Estímulo à criatividade, expressão artística e senso estético</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold mt-1">•</span>
                <span>Promoção da autoestima, respeito às regras e trabalho em equipe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Fortalecimento de vínculos sociais, pertencimento e responsabilidade</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resultados Observados */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Resultados Observados e Impacto</h2>
            <p className="text-lg text-gray-700 mb-6">
              Desde o início das atividades observou-se:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Evolução Técnica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Evolução técnica das alunas nas rotinas e manuseio de aparelhos
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-900">Disciplina</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Melhora marcante na disciplina, frequência e comportamento
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-pink-900">União do Grupo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Maior união do grupo, cooperação e empatia entre as crianças
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-900">Criatividade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Aumento da criatividade nas coreografias e autonomia prática
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-gray-700 mt-6">
              O esporte tem reforçado valores como respeito, persistência e responsabilidade, 
              com benefícios indiretos na vida escolar e no ambiente familiar.
            </p>
          </div>
        </div>
      </section>

      {/* Sustentabilidade */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Sustentabilidade e Continuidade</h2>
            
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Estratégias</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Compras coletivas para reduzir custos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold mt-1">•</span>
                <span>Parcerias locais para materiais e transporte</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 font-bold mt-1">•</span>
                <span>Campanhas pontuais de arrecadação</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">•</span>
                <span>Formação de monitores locais para multiplicar o trabalho</span>
              </li>
            </ul>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">Integração com o Núcleo de Esportes do AME</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Articulado com escolinhas de futebol (em estruturação), capoeira (existente) e karatê (planejado).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ajude a Transformar Vidas</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sua contribuição faz a diferença na vida das crianças da Vila Céu do Mapiá
          </p>
          <Link href="/apoie">
            <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 font-bold">
              Apoie o Projeto
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
            <p>&copy; 2024 Ginástica Rítmica Céu do Mapiá - Núcleo de Esportes - Projeto AME. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

