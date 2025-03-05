import Navbar from "../componets/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen text-gray-800 bg-gray-100">
      <Navbar />
      <div className="max-w-4xl p-6 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center">Explorando a API do Studio Ghibli</h1>
        
        <img
          src="https://ghibliapi.vercel.app/images/logo.svg"
          alt="Studio Ghibli"
          className="object-contain w-full mb-6 max-h-60"
        />
        
        <p className="text-lg leading-relaxed">
          O Studio Ghibli é um dos estúdios de animação mais icônicos do mundo, responsável por clássicos como <strong>Meu Amigo Totoro</strong>, <strong>A Viagem de Chihiro</strong> e <strong>O Castelo Animado</strong>. 
          A API do Studio Ghibli fornece dados ricos sobre seus filmes, personagens, espécies, locais e veículos, permitindo que desenvolvedores criem aplicações incríveis utilizando essas informações.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Ferramentas Utilizadas</h2>
        <ul className="pl-6 mt-2 space-y-2 list-disc">
          <li><strong>React</strong> - Framework JavaScript para construção da interface.</li>
          <li><strong>Tailwind CSS</strong> - Biblioteca de estilização rápida e responsiva.</li>
          <li><strong>Visual Studio Code</strong> - Editor de código utilizado para o desenvolvimento.</li>
        </ul>

        <h2 className="mt-6 text-2xl font-semibold">Desafios Encontrados</h2>
        <p className="mt-2 text-lg">
          Durante o desenvolvimento, um dos principais desafios foi lidar com as relações entre os diferentes endpoints da API. Algumas informações estavam disponíveis apenas como URLs em outras rotas, exigindo múltiplas requisições.
        </p>
        <p className="mt-2 text-lg">
          Para solucionar esse problema, foi necessário criar um processo que reconstruísse os dados de maneira mais acessível, armazenando as informações em um formato mais integrado.
        </p>
      </div>
    </div>
  );
};

export default Home;
