import Navbar from "@/components/menucabecalho";
import MenuLateral from "@/components/menulateral";

export default function Home() {
  return (
   <div>
    <section>
      <Navbar />
    </section>
      <section>
        <MenuLateral />
      </section>
   </div>
  );
}
