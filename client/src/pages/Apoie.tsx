import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Apoie() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-4 cursor-pointer">
              <img src="/logo.png" alt="Logo Ginástica Rítmica Céu do Mapiá" className="h-16 w-16" />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">Ginástica Rítmica - Céu do Mapiá</h1>
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-100 via-yellow-50 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Apoie o Projeto</h1>
          <p className="text-xl text-gray-700">Faça parte dessa transformação</p>
        </div>
      </section>

      {/* Objetivo Financeiro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Objetivo Financeiro Anual</h2>
              <div className="text-5xl font-bold text-blue-900 mb-2">R$ 50.000</div>
              <p className="text-xl text-gray-700">R$ 4.167 por mês</p>
            </div>

            <Card className="mb-8 border-2 border-yellow-300">
              <CardHeader>
                <CardTitle className="text-blue-900">Para que serve o investimento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Os recursos captados serão utilizados para garantir a manutenção, expansão e qualidade 
                  da escolinha por 12 meses, incluindo:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Aparelhos de ginástica rítmica (fita, arco, bola, corda, maças)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold mt-1">•</span>
                    <span>Vestuário e materiais de treino (sapatilhas, collants, shorts)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Roupas de apresentação (figurinos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold mt-1">•</span>
                    <span>Equipamentos de treino (tapetes, joelheiras, caneleiras, elásticos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Pró-labore da professora para garantir continuidade</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planos de Patrocínio */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Planos de Patrocínio Mensal</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="border-2 border-blue-300 hover:border-blue-500 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">R$ 10</CardTitle>
                <CardDescription>por mês</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Contribuição básica que ajuda a manter o projeto
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Menção no site</li>
                  <li>✓ Atualizações regulares</li>
                  <li>✓ Badge digital</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 hover:border-yellow-500 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">R$ 15</CardTitle>
                <CardDescription>por mês</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Apoio importante para materiais de treino
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Menção no site</li>
                  <li>✓ Atualizações regulares</li>
                  <li>✓ Badge digital</li>
                  <li>✓ Fotos e vídeos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-300 hover:border-blue-500 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">R$ 20</CardTitle>
                <CardDescription>por mês</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Contribuição significativa para expansão
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Menção no site</li>
                  <li>✓ Atualizações regulares</li>
                  <li>✓ Badge digital</li>
                  <li>✓ Fotos e vídeos</li>
                  <li>✓ Convites para apresentações</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 hover:border-yellow-500 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">R$ 30+</CardTitle>
                <CardDescription>por mês</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Patrocínio premium com maior impacto
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Menção no site</li>
                  <li>✓ Atualizações regulares</li>
                  <li>✓ Badge digital</li>
                  <li>✓ Fotos e vídeos</li>
                  <li>✓ Convites para apresentações</li>
                  <li>✓ Relatórios semestrais</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-6">
              <strong>Meta prática:</strong> 200 apoiadores a R$20/mês = R$4.000/mês (~R$48.000/ano)
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://wa.me/5521995071990?text=Olá! Gostaria de fazer uma doação recorrente mensal para o Projeto Ginástica Rítmica Céu do Mapiá. Qual plano de patrocínio posso escolher?" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                  💚 Configurar Doação Recorrente via WhatsApp
                </Button>
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Entre em contato pelo WhatsApp para configurar sua doação mensal automática
            </p>
          </div>
        </div>
      </section>

      {/* Contrapartidas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Contrapartidas para Apoiadores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-blue-300">
                <CardHeader>
                  <CardTitle className="text-blue-900">Visibilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Menção no site do projeto e seção fixa de patrocinadores, além de pequenos 
                    badges digitais para redes sociais
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-300">
                <CardHeader>
                  <CardTitle className="text-blue-900">Acompanhamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Atualizações regulares com fotos e vídeos das atividades, mantendo você 
                    conectado ao projeto
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-300">
                <CardHeader>
                  <CardTitle className="text-blue-900">Eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Convites para apresentações e eventos especiais da escolinha
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-300">
                <CardHeader>
                  <CardTitle className="text-blue-900">Transparência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Relatórios semestrais detalhados sobre o uso dos recursos e evolução do projeto
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Orçamento Detalhado */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Orçamento Detalhado (12 meses)</h2>
            <Card className="border-2 border-blue-300">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-blue-200">
                        <th className="text-left py-3 px-4 text-blue-900">Item</th>
                        <th className="text-right py-3 px-4 text-blue-900">Valor (R$)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b">
                        <td className="py-3 px-4">Aparelhos (fita, arco, bola, corda, maças) - 25 alunas</td>
                        <td className="text-right py-3 px-4">8.250</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Sapatilhas (25 pares)</td>
                        <td className="text-right py-3 px-4">1.500</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Collants + shorts de treino (25)</td>
                        <td className="text-right py-3 px-4">2.750</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Roupas de apresentação - figurinos (25)</td>
                        <td className="text-right py-3 px-4">5.000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Tapetes de treino (2)</td>
                        <td className="text-right py-3 px-4">3.000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Joelheiras (25)</td>
                        <td className="text-right py-3 px-4">750</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Caneleiras de 1 kg - pares (25)</td>
                        <td className="text-right py-3 px-4">2.000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Elásticos de ginástica (10 kits)</td>
                        <td className="text-right py-3 px-4">200</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Aparelhos sonoros / caixa de som (1)</td>
                        <td className="text-right py-3 px-4">800</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Bolsas para aparelhos e materiais (25)</td>
                        <td className="text-right py-3 px-4">1.000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Blusas/identificação da equipe (25)</td>
                        <td className="text-right py-3 px-4">1.000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Manutenção do site (anual)</td>
                        <td className="text-right py-3 px-4">1.200</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Pró-labore professora (R$1.500/mês x 12)</td>
                        <td className="text-right py-3 px-4">18.000</td>
                      </tr>
                      <tr className="border-b font-semibold bg-blue-50">
                        <td className="py-3 px-4">Subtotal</td>
                        <td className="text-right py-3 px-4">27.450</td>
                      </tr>
                      <tr className="border-b bg-yellow-50">
                        <td className="py-3 px-4">Contingência (10%)</td>
                        <td className="text-right py-3 px-4">4.545</td>
                      </tr>
                      <tr className="font-bold text-blue-900 bg-blue-100">
                        <td className="py-3 px-4 text-lg">Total Estimado (1 ano)</td>
                        <td className="text-right py-3 px-4 text-lg">50.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Como Apoiar</h2>
            <p className="text-lg text-gray-700 mb-8">
              Entre em contato conosco para saber mais sobre como se tornar um apoiador do projeto 
              e fazer a diferença na vida das crianças da Vila Céu do Mapiá.
            </p>
            
            <Card className="border-2 border-yellow-300">
              <CardHeader>
                <CardTitle className="text-blue-900">Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <a href="mailto:bruinfinitum@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
                      bruinfinitum@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">WhatsApp</p>
                    <a href="https://wa.me/5521995071990" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                      +55 21 99507-1990
                    </a>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <a href="https://wa.me/5521995071990?text=Olá! Gostaria de configurar uma doação recorrente mensal para o Projeto Ginástica Rítmica Céu do Mapiá" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                      💚 Configurar Doação Recorrente
                    </Button>
                  </a>
                  <a href="https://wa.me/5521995071990?text=Olá! Gostaria de saber mais sobre como apoiar o Projeto Ginástica Rítmica Céu do Mapiá" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6">
                      Falar no WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agradecimentos */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Agradecimentos</h2>
            <p className="text-lg text-gray-700">
              Agradecimento especial à comunidade da Vila Céu do Mapiá, ao legado do Padrinho Sebastião 
              e às famílias das ginastas pelo apoio e confiança.
            </p>
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

