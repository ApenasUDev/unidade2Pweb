export default function Movies({ data }) {

  return (

    <div>

      {/* <div>

        {data.Search.map((m) => <div>{m.Title} --- {m.Year}</div>)} estava dando erro

      </div> */}
      <div>
        {data && data.Search && data.Search.map((m) => (
        <div key={m.imdbID}>{m.Title} --- {m.Year} --- <img src={m.Poster} ></img></div> /* Usando dessa forma não dá erro  */
        ))}
      </div>
      <div>
        <a href="../"><button>voltar</button></a>
      </div>

    </div>

  )

}
export async function getServerSideProps(context) {

  const res = await fetch(`http://www.omdbapi.com/?apikey=6252cd84&s=bagdad`)

  const data = await res.json()

  return {

    props: {

      data

    }

  }

}
