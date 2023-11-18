import Link from 'next/link'
import Image from 'next/image'

const getFushigidane = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  const json = await res.json();
  console.log(json);

  return json.sprites.front_default
}

export default async function Page() {
  const fushigidane = await getFushigidane();

  return (
    <div>
      <h1 className="text-xl font-bold">Sample Page</h1>
      <div>
        <Image src={fushigidane} alt="fushigidane" width={200} height={200} />
      </div>
      <Link href="/">戻る</Link>
    </div>
  )
}
