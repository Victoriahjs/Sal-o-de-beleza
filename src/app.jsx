       import { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é dispositivo móvel
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Dados simulados
  const servicos = [
    { id: 1, nome: "Corte Feminino", descricao: "Estilos modernos e personalizados.", imagem: "https://inspiracabelo.com.br/wp-content/uploads/2024/03/corte-de-cabelo-feminino-degrade-repicado-16.jpg" },
    { id: 2, nome: "Pintura Capilar", descricao: "Tonalizantes e cores vibrantes.", imagem: "https://www.fiquediva.com.br/-/media/project/loreal/brand-sites/fiquediva/usa/pt-br/products/2025/lps/linha-cor-e-ton/cor-e-ton/mulheres-com-cabelo-pintado-de-cor-e-ton.jpg?rev=fb48bec9777f4aca9214be63af5d5d92" },
    { id: 3, nome: "Manicure & Pedicure", descricao: "Unhas impecáveis com esmaltes premium.", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_N1BISEH-Z59d6Y7SelgZyT0_82nPfaVSp1weuD-eMe-S3G5iYQqxqOpc6ZFgNGkLBkQ&usqp=CAU" },
    { id: 4, nome: "Maquiagem", descricao: "Make-up completo para todos os eventos.", imagem: "https://img.olx.com.br/images/95/959492801081494.jpg" },
  ];

 const produtos = [
  {
    id: 1,
    nome: "Kit Lola From Rio Xapadinha",
    preco: "R$ 170,90",
    descrição: "Kit capilar para deixa seus cabelo liso e sedoso.",
    imagem: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/KT002557/b7646598-237b-480c-8760-9bb00d1db5a9-kt002557-20059523-20059525-20059526-20059527.png"
  },  
  {
    id: 2,
    nome: "Kit Lola Cosmetics Hidratação Morte Súbita ",
    preco: "R$ 199,90",
    descrição: "Kit capilar para fortalecer os fios de cabelos.",
    imagem: "https://amobeleza.vtexassets.com/arquivos/ids/236933/kit-lola-cosmetics-hidratacao-morte-subita-quatro-produtos-foto-zero.jpg?v=638068229922630000"
  },
  {
    id: 3,
    nome: "Máscaras Tonalizante Lola",
    preco: "R$ 59,90",
    descrição: "Máscaras perfeitas para uma hidratação produnda.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMf1T6mG9ULbi8IBIsxN-2onHOl0M0lDPtA&s"
  },
  {
    id: 4,
    nome: "Óleo capilar Lola",
    preco: "R$ 69,90",
    descrição: "Óleo capilar para para hidratar, nutrir e proteger os fios, proporcionando brilho, maciez e combatendo o frizz e o ressecamento.",
    imagem: "https://bonitasemfiltro.com.br/wp-content/uploads/2023/06/Oleos-capilares-da-Lola-Cosmetics.png"
  }
  ];

  const agendamentos = [
    { id: 1, data: "2025-04-05", hora: "10:00", servico: "Corte + Pintura" },
    { id: 2, data: "2025-04-07", hora: "14:30", servico: "Manicure Completa" },
    { id: 3, data: "2025-04-08", hora: "09:00", servico: "Maquiagem" },
  ];

  // Ícones SVG
  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3" />
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.498 14.321c-.313-.156-1.756-.866-2.025-.959-.27-.094-.469-.14-.667.14s-.703.884-.86 1.074c-.157.19-.313.208-.609.063-.297-.145-1.257-.462-2.392-1.44-.917-.785-1.526-1.848-1.701-2.155-.175-.306-.018-.47.14-.616.138-.13.313-.357.47-.532.156-.175.208-.313.313-.525.104-.212.052-.395-.018-.551s-.425-1.012-.581-1.385c-.156-.374-.313-.331-.425-.34a.78.78 0 0 0-.552-.25c-.208-.008-.434-.008-.66-.008-.225 0-.58.078-.885.394-.306.317-.936.915-.936 2.207 0 1.292.941 2.535 1.074 2.723.133.188 1.877 2.868 4.593 3.97.552.235.996.378 1.31.5.416.167.86.135 1.185.075.325-.06 1.037-.425 1.185-.841.149-.416.149-.772.106-.859-.042-.087-.166-.13-.334-.213z" />
    </svg>
  );

  // Função para abrir o WhatsApp com mensagem pré-definida
  const comprarNoWhatsApp = (produtoNome) => {
    const numero = "5511999999999"; // Substitua pelo seu número real com DDD e país
    const mensagem = encodeURIComponent(`Olá, gostaria de comprar: ${produtoNome}`);
    window.open(` https://wa.me/ ${numero}?text=${mensagem}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans transition-colors duration-300">
      {/* Cabeçalho */}
      <header className="bg-gradient-to-r from-pink-50 to-purple-50 shadow-md sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Belasis
          </h1>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6">
            {['inicio', 'servicos', 'produtos', 'agendamentos', 'login'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize font-medium transition-all duration-300 hover:text-pink-500 ${
                  activeTab === tab ? 'text-pink-500' : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Botão Mobile */}
          <button
            className="md:hidden text-pink-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white p-4 shadow-lg">
            {['inicio', 'servicos', 'produtos', 'agendamentos', 'login'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 capitalize font-medium transition-all duration-300 hover:text-pink-500 ${
                  activeTab === tab ? 'text-pink-500' : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Início */}
        {activeTab === 'inicio' && (
          <section className="text-center py-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              Bem-vinda ao Belasis
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Seu espaço de beleza feminina. Oferecemos os melhores cuidados e tratamentos para você brilhar sempre.
            </p>
            <img
              src="https://brasiliaimperialhotel.com.br/wp-content/uploads/2023/02/salao.jpg"
              alt="Salão Belasis"
              className="rounded-lg shadow-lg mx-auto my-8 transform hover:scale-105 transition-transform duration-300"
            />
          </section>
        )}

        {/* Serviços */}
        {activeTab === 'servicos' && (
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Nossos Serviços</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicos.map((servico) => (
                <div
                  key={servico.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <img src={servico.imagem} alt={servico.nome} className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">{servico.nome}</h3>
                    <p className="text-gray-600 mt-2">{servico.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Produtos */}
        {activeTab === 'produtos' && (
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Produtos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {produtos.map((produto) => (
                <div
                  key={produto.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <img src={produto.imagem} alt={produto.nome} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{produto.nome}</h3>
                    <p className="text-gray-600 mt-2 text-sm">{produto.descricao}</p>
                    <p className="text-pink-500 font-bold mt-2">{produto.preco}</p>
                    <button
                      onClick={() => comprarNoWhatsApp(produto.nome)}
                      className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-colors"
                    >
                      Comprar no WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Agendamentos */}
        {activeTab === 'agendamentos' && (
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Seus Agendamentos</h2>
            <div className="overflow-x-auto rounded-lg shadow">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-pink-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-pink-700 font-semibold">Data</th>
                    <th className="py-3 px-4 text-left text-pink-700 font-semibold">Hora</th>
                    <th className="py-3 px-4 text-left text-pink-700 font-semibold">Serviço</th>
                  </tr>
                </thead>
                <tbody>
                  {agendamentos.map((item) => (
                    <tr key={item.id} className="border-t border-gray-100 hover:bg-pink-50 transition-colors">
                      <td className="py-3 px-4">{item.data}</td>
                      <td className="py-3 px-4">{item.hora}</td>
                      <td className="py-3 px-4">{item.servico}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Login/Cadastro */}
        {activeTab === 'login' && (
          <section className="py-12">
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">Login / Cadastro</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="senha" className="block text-sm font-medium mb-1 text-gray-700">Senha</label>
                  <input
                    type="password"
                    id="senha"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="Sua senha"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition-colors mt-2"
                >
                  Entrar
                </button>
                <button
                  type="button"
                  className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors"
                >
                  Criar Conta
                </button>
              </form>
            </div>
          </section>
        )}
      </main>

      {/* Rodapé */}
      <footer className="bg-gradient-to-r from-pink-50 to-purple-50 py-8 text-center text-gray-600 border-t border-gray-100">
        <p className="mb-4">&copy; 2025 Belasis. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-pink-500 hover:text-pink-700 transition-colors" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700 transition-colors" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700 transition-colors" aria-label="WhatsApp">
            <WhatsAppIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}