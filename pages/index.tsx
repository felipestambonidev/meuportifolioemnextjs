import Navbar from "@/components/menucabecalho";
import Perfil from "@/components/perfil";
import SobreMim from "@/components/sobremim";

export default function Home() {
  return (
   <div>
    <nav>
      <Navbar />
    </nav>
    <section>
      <Perfil />
      <SobreMim />
    </section>
   </div>
  );
}

