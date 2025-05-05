// src/App.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from  'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


function App() {
  const pontosCulturais = [
    {
      nome: "Museu Municipal de Barueri 'Oswaldo Abat'",
      descricao: "Principal acervo histórico da cidade, com exposições sobre a história local e objetos indígenas.",
      lat: -23.5115,
      lon: -46.8795,
      cidade: "Barueri"
    },
    {
      nome: "Biblioteca Municipal Eny Cordeiro",
      descricao: "Oferece um amplo acervo de livros e espaço para leitura.",
      lat: -23.5120,
      lon: -46.8800,
      cidade: "Barueri"
    },
    {
      nome: "Gibiteka Max Zendron",
      descricao: "Espaço dedicado a histórias em quadrinhos e cultura pop.",
      lat: -23.5160,
      lon: -46.8720,
      cidade: "Barueri"
    },
    {
      nome: "Estação Cultural Vila Pindorama / Salomão Cruz",
      descricao: "Cursos de arte nas áreas de dança, teatro, música, artes visuais e circo.",
      lat: -23.5200,
      lon: -46.8700,
      cidade: "Barueri"
    },
    {
      nome: "Estação Cultural Parque dos Camargos / Cora Coralina",
      descricao: "Espaço para cursos de arte e leitura, com acervo diversificado.",
      lat: -23.5300,
      lon: -46.8600,
      cidade: "Barueri"
    },
    {
      nome: "Centro de Eventos de Barueri",
      descricao: "Espaço para apresentações culturais, shows e eventos diversos.",
      lat: -23.5150,
      lon: -46.8700,
      cidade: "Barueri"
    },
    {
      nome: "Praça das Artes de Barueri",
      descricao: "Complexo cultural voltado à música, dança, artes visuais e exposições.",
      lat: -23.5115,
      lon: -46.8795,
      cidade: "Barueri"
    },
    {
      nome: "Parque Municipal Dom José",
      descricao: "Pistas de caminhada, playground, quadras e eventos culturais.",
      lat: -23.5150,
      lon: -46.8700,
      cidade: "Barueri"
    },
    {
      nome: "Parque da Maturidade José Dias da Silva",
      descricao: "Atividades físicas e culturais para a terceira idade.",
      lat: -23.5200,
      lon: -46.8800,
      cidade: "Barueri"
    },
    {
      nome: "Lago Orion",
      descricao: "Área de lazer com lago e espaço para eventos culturais ao ar livre.",
      lat: -23.5000,
      lon: -46.8500,
      cidade: "Barueri"
    },
    {
      nome: "Escola de Samba Oba Oba",
      descricao: "Tradicional escola de samba da cidade.",
      lat: -23.5150,
      lon: -46.8700,
      cidade: "Barueri"
    },
    {
      nome: "Feira Noturna de Barueri",
      descricao: "Evento com comidas típicas, artesanato e apresentações culturais.",
      lat: -23.5100,
      lon: -46.8700,
      cidade: "Barueri"
    },
    {
      nome: "Aldeia Jesuítica de Carapicuíba",
      descricao: "Centro histórico fundado em 1580, com igreja, cruz do adro e espaço cultural. Sede de eventos como a Festa de Santa Cruz e encenações da Paixão de Cristo.",
      lat: -23.5225,
      lon: -46.8400,
      cidade: "Carapicuíba"
    },
    {
      nome: "Parque da Aldeia de Carapicuíba",
      descricao: "Área verde com teatro ao ar livre, playground, lago e trilhas. Palco de eventos culturais e religiosos.",
      lat: -23.5220,
      lon: -46.8405,
      cidade: "Carapicuíba"
    },
    {
      nome: "Parque dos Paturis",
      descricao: "Parque ecológico com capacidade para 80 mil pessoas, ideal para lazer e eventos comunitários.",
      lat: -23.5270,
      lon: -46.8570,
      cidade: "Carapicuíba"
    },
    {
      nome: "Parque Gabriel Chucre",
      descricao: "Espaço de lazer com áreas verdes, quadras esportivas e infraestrutura para atividades culturais.",
      lat: -23.5275,
      lon: -46.8540,
      cidade: "Carapicuíba"
    },
    {
      nome: "Parque do Planalto",
      descricao: "Parque urbano com áreas para caminhadas, playground e eventos ao ar livre.",
      lat: -23.5300,
      lon: -46.8500,
      cidade: "Carapicuíba"
    },
    {
      nome: "Teatro Jorge Amado",
      descricao: "Espaço cultural para apresentações teatrais, musicais e eventos artísticos.",
      lat: -23.5220,
      lon: -46.8420,
      cidade: "Carapicuíba"
    },
    {
      nome: "OCA – Uma Escola Cultural",
      descricao: "Centro cultural que oferece oficinas, cursos e eventos voltados para a comunidade.",
      lat: -23.5230,
      lon: -46.8410,
      cidade: "Carapicuíba"
    },
    {
      nome: "Coletivo Sarabaquê",
      descricao: "Grupo cultural que promove oficinas de viola caipira, encontros de violeiros e participa da Festa de Santa Cruz.",
      lat: -23.5240,
      lon: -46.8430,
      cidade: "Carapicuíba"
    },
    {
      nome: "Praça da Aldeia",
      descricao: "Praça central da Aldeia Jesuítica, onde ocorrem eventos culturais e religiosos tradicionais.",
      lat: -23.5225,
      lon: -46.8400,
      cidade: "Carapicuíba"
    },
    {
      nome: "Festa de Santa Cruz",
      descricao: "Evento cultural e religioso com apresentações de música, dança e tradições locais.",
      lat: -23.5225,
      lon: -46.8400,
      cidade: "Carapicuíba"
    },
    {
      nome: "Museu de Arte de São Paulo (MASP)",
      descricao: "Um dos mais importantes museus da América Latina, com acervo de artistas renomados como Tarsila do Amaral, Van Gogh, Renoir e Picasso.",
      lat: -23.561414,
      lon: -46.655881,
      cidade: "São Paulo"
    },
    {
      nome: "Theatro Municipal de São Paulo",
      descricao: "Inaugurado em 1911, é um dos principais teatros do Brasil, palco de importantes eventos culturais.",
      lat: -23.5455,
      lon: -46.6388,
      cidade: "São Paulo"
    },
    {
      nome: "Centro Cultural São Paulo (CCSP)",
      descricao: "Espaço multidisciplinar com bibliotecas, salas de exposição, teatro e programação cultural diversificada.",
      lat: -23.5746,
      lon: -46.6417,
      cidade: "São Paulo"
    },
    {
      nome: "Pinacoteca do Estado de São Paulo",
      descricao: "Museu de arte com acervo focado na produção brasileira do século XIX até a contemporaneidade.",
      lat: -23.5341,
      lon: -46.6336,
      cidade: "São Paulo"
    },
    {
      nome: "Museu da Língua Portuguesa",
      descricao: "Museu interativo dedicado à valorização e difusão da língua portuguesa.",
      lat: -23.5340,
      lon: -46.6335,
      cidade: "São Paulo"
    },
    {
      nome: "Casa das Rosas",
      descricao: "Espaço cultural dedicado à literatura e poesia, localizado em um casarão histórico na Avenida Paulista.",
      lat: -23.5692,
      lon: -46.6486,
      cidade: "São Paulo"
    },
    {
      nome: "Instituto Moreira Salles – IMS Paulista",
      descricao: "Centro cultural com foco em fotografia, música, literatura e iconografia.",
      lat: -23.5613,
      lon: -46.6556,
      cidade: "São Paulo"
    },
    {
      nome: "Japan House São Paulo",
      descricao: "Instituição dedicada à cultura japonesa contemporânea, com exposições, palestras e eventos.",
      lat: -23.5671,
      lon: -46.6486,
      cidade: "São Paulo"
    },
    {
      nome: "SESC Avenida Paulista",
      descricao: "Centro cultural com programação variada, incluindo exposições, shows e atividades esportivas.",
      lat: -23.5672,
      lon: -46.6486,
      cidade: "São Paulo"
    },
    {
      nome: "Biblioteca Mário de Andrade",
      descricao: "Uma das maiores bibliotecas públicas do país, com vasto acervo e programação cultural.",
      lat: -23.5450,
      lon: -46.6426,
      cidade: "São Paulo"
    },
    {
      nome: "Centro Cultural Adamastor",
      cidade: "Guarulhos",
      tipo: "Centro Cultural",
      descricao: "Oferece atividades culturais, exposições, teatro e biblioteca pública.",
      lat: -23.46278,
      lon: -46.53333
    },
    {
      nome: "SESC Santo André",
      cidade: "Santo André",
      tipo: "Centro Cultural",
      descricao: "Espaço com programação variada, incluindo teatro, música, esportes e educação.",
      lat: -23.6466,
      lon: -46.5386,
    },
    {
      nome: "Fábrica de Cultura Vila Nova Cachoeirinha",
      cidade: "São Paulo",
      tipo: "Centro Cultural",
      descricao: "Oficinas de arte, teatro, música, dança e audiovisual para jovens da região.",
      lat: -23.4871,
      lon: -46.615
    },
    {
      nome: "Casa de Cultura de Itaquera",
      cidade: "São Paulo",
      tipo: "Casa de Cultura",
      descricao: "Espaço dedicado a apresentações culturais e oficinas gratuitas.",
      lat: -23.5024,
      lon: -46.4752
    },
    {
      nome: "Teatro Municipal de Osasco",
      cidade: "Osasco",
      tipo: "Teatro",
      descricao: "Recebe espetáculos teatrais, musicais e eventos públicos diversos.",
      lat: -23.5322,
      lon: -46.7911
    },
    {
      nome: "Biblioteca Monteiro Lobato",
      cidade: "São Bernardo do Campo",
      tipo: "Biblioteca",
      descricao: "Acervo diversificado e espaço para contação de histórias e eventos literários.",
      lat: -23.6975,
      lon: -46.5564
    },
    {
      nome: "Museu do Imigrante Nordestino",
      cidade: "Guarulhos",
      tipo: "Museu",
      descricao: "Valoriza a cultura nordestina e sua influência na cidade.",
      lat: -23.445,
      lon: -46.5358
    },
    {
      nome: "Ponto de Cultura Samba Autêntico",
      cidade: "São Paulo",
      tipo: "Ponto de Cultura",
      descricao: "Espaço dedicado ao samba tradicional com rodas de música e oficinas.",
      lat: -23.5377,
      lon: -46.6381
    },
    {
      nome: "Teatro Cacilda Becker",
      cidade: "São Paulo",
      tipo: "Teatro",
      descricao: "Importante palco para produções de teatro experimental e dança.",
      lat: -23.5763,
      lon: -46.6333
    },
    {
      nome: "Casa de Cultura Salvador Ligabue",
      cidade: "São Paulo (Freguesia do Ó)",
      tipo: "Casa de Cultura",
      descricao: "Espaço histórico com exposições de arte e eventos culturais.",
      lat: -23.5278,
      lon: -46.6779
    },
    {
      nome: "Centro de Cultura Popular de Diadema",
      cidade: "Diadema",
      tipo: "Centro Cultural",
      descricao: "Espaço de valorização da cultura popular, com foco em danças e manifestações folclóricas.",
      lat: -23.6844,
      lon: -46.5764
    },
    {
      nome: "SESC Osasco",
      cidade: "Osasco",
      tipo: "Centro Cultural",
      descricao: "Programação cultural diversificada com teatro, música, exposições e esportes.",
      lat: -23.5329,
      lon: -46.7917
    },
    {
      nome: "Fábrica de Cultura Capão Redondo",
      cidade: "São Paulo",
      tipo: "Centro Cultural",
      descricao: "Centro de formação e difusão cultural com foco em jovens das periferias.",
      lat: -23.705,
      lon: -46.7858
    },
    {
      nome: "Centro Cultural de São Caetano do Sul",
      cidade: "São Caetano do Sul",
      tipo: "Centro Cultural",
      descricao: "Oficinas, biblioteca, exposições e eventos culturais gratuitos.",
      lat: -23.6283,
      lon: -46.5647
    },
    {
      nome: "Museu de Arte Contemporânea de Santo André",
      cidade: "Santo André",
      tipo: "Museu",
      descricao: "Acervo de arte moderna e contemporânea brasileira.",
      lat: -23.6691,
      lon: -46.5334
    },
    {
      nome: "Teatro Elis Regina",
      cidade: "Guarulhos",
      tipo: "Teatro",
      descricao: "Palco de apresentações de música, dança e artes cênicas.",
      lat: -23.4311,
      lon: -46.5335
    },
    {
      nome: "Biblioteca Benedito Sérgio de Oliveira",
      cidade: "Carapicuíba",
      tipo: "Biblioteca",
      descricao: "Espaço público com acervo literário e atividades de incentivo à leitura.",
      lat: -23.4977,
      lon: -46.8344
    },
    {
      nome: "Ponto de Cultura Afro Kaonga",
      cidade: "Osasco",
      tipo: "Ponto de Cultura",
      descricao: "Promove a cultura afro-brasileira por meio de oficinas e eventos.",
      lat: -23.5322,
      lon: -46.7911
    },
    {
      nome: "Centro de Tradições Nordestinas – CTN",
      cidade: "São Paulo",
      tipo: "Centro Cultural",
      descricao: "Centro dedicado à cultura nordestina com gastronomia, música e eventos.",
      lat: -23.5506,
      lon: -46.6119
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Mapa Cultural da Comunidade</h1>
      <MapContainer center={[-23.5505, -46.6333]} zoom={13} style={{ height: "80vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {pontosCulturais.map((ponto) => (
          <Marker position={[ponto.lat, ponto.lon]} icon={defaultIcon}>
            <Popup>
              <strong>{ponto.nome}</strong><br />
              {ponto.descricao}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
