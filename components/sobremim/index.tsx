import sobremim from "@/data/sobremim/sobremim.json";

export default function SobreMim() {
  return (
    <div
      className="bg-[#1E1E1E] drop-shadow-lg p-5 xs:mx-8 lg:mx-52 w-auto mt-20 rounded-lg text-white"
      id="sobre-mim">
      {sobremim.map((sobremimfe, index) => (
        <div key={index}>
          <h1 className="lg:text-4xl xs:text-3xl">{sobremimfe.title}</h1>
          <span className="block w-full h-1 bg-[#2E2D2D] my-4" />
          <p className="lg:text-xl xs:text-[17px] font-light">{sobremimfe.paragraph}</p>
        </div>
      ))}
    </div>
  );
}