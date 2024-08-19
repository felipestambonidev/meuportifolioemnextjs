import NavbarEng from "@/components/menucabecalhoenglish"
import ProjetosWordPress from "@/components/meusprojetos/WordPress";
import MeusProjetosEng from "@/components/meusprojetosenglish";
import PerfilEng from "@/components/perfilenglish";
import SobreMimEng from "@/components/sobremimenglish";
import TecnologiasEng from "@/components/tecnologiaseng";


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
		</div>
	   );
}

	