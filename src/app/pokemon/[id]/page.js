import Link from "next/link";
import "../[id]/card.css";

const getData = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return data;
};

async function Page({ params }) {
  const id = params.id;
  const dataPokemon = await getData(id);
  const urlImg1 = dataPokemon.sprites.other.home.front_default;

  return (
    <main id="containerCard">
      <div className="cardIndividual">
        <section id="pokeimg">
          <div>
            <img src={urlImg1} alt={dataPokemon.name} />
          </div>
        </section>
        <section id="pokestats">
          <div className="info_1">
            <p>ID: {dataPokemon.id}</p>
            <h1>{dataPokemon.name}</h1>
          </div>
          <div className="info_2">
            <p>Stats:</p>
            <ul>
              {dataPokemon.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="info_3">
            <p>Height: {dataPokemon.height}</p>
            <p>Weight: {dataPokemon.weight}</p>
            <p>Base experience: {dataPokemon.base_experience}</p>
          </div>
        </section>
      </div>
      <div>
        <Link href="/" id="linkBack">
          Back
        </Link>
      </div>
    </main>
  );
}

export default Page;
