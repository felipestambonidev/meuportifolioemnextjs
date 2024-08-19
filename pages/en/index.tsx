import NavbarEng from "@/components/menucabecalhoenglish"
import ProjetosWordPress from "@/components/meusprojetos/WordPress";
import MeusProjetosEng from "@/components/meusprojetosenglish";
import PerfilEng from "@/components/perfilenglish";
import RodapeEng from "@/components/rodapeenglish";
import Rodape from "@/components/rodapeenglish";
import SobreMimEng from "@/components/sobremimenglish";
import TecnologiasEng from "@/components/tecnologiasenglish";


export default function HomeEn(){
	return (
		<div>
		 <nav>
		   <NavbarEng />
		 </nav>
		 <section>
		   <PerfilEng />
		   <SobreMimEng />
		   <TecnologiasEng />
		   <MeusProjetosEng />
		   <ProjetosWordPress />
		 </section>
		 <footer>
			<RodapeEng/>
		 </footer>
		</div>
	   );
}

	