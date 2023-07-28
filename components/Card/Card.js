import Link from "next/link";
import "../../components/Card/card.css";

async function getDataPoke(link) {
  const res = await fetch(link);
  const data = await res.json();
  return data;
}

async function Card({ poke }) {
  const dataPokemon = await getDataPoke(poke.url);
  const urlImg = dataPokemon.sprites.other.home.front_default;

  return (
    <Link href={`pokemon/${dataPokemon.id}`}>
      <div className="card">
        <div>
          <img src={urlImg} alt={dataPokemon.name} />
        </div>
        <div>
          <p>ID: {dataPokemon.id}</p>
          <h1>{dataPokemon.name}</h1>
          <p>
            Type:{" "}
            {dataPokemon.types.map((type) => (
              <span key={type.type.name} className={`type ${type.type.name}`}>
                {type.type.name}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
