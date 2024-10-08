import BackToTopButton from "@/components/botaotopo";
import Contato from "@/components/contato";
import Navbar from "@/components/menucabecalho";
import MeusProjetos from "@/components/meusprojetos";
import ProjetosWordPress from "@/components/meusprojetos/WordPress";
import Perfil from "@/components/perfil";
import Rodape from "@/components/rodape";
import SobreMim from "@/components/sobremim";
import Tecnologias from "@/components/tecnologias";

export default function Home() {
  return (
   <div>
    <nav>
      <Navbar />
    </nav>
    <section>
      <Perfil />
      <SobreMim />
      <Tecnologias />
      {/* <MeusProjetos/> */}
      <ProjetosWordPress />
      <Contato />
      <BackToTopButton />
    </section>
    <footer>
      <Rodape/>
    </footer>
   </div>
  );
}

