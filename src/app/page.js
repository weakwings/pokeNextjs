import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9");
  const data = await response.json();

  return data.results;
}

export default async function Home() {
  const dataPok = await getData();

  return (
    <main>
      <Nav />
      <div id="container">{dataPok.map((el, i) => <Card key={i} poke={el} /> )}</div>
      <Footer />
    </main>
  );
}
