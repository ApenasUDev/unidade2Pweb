import { useState } from 'react';

export default function Movies({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [moviesData, setMoviesData] = useState(data);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://www.omdbapi.com/?apikey=6252cd84&s=${searchTerm}`);
    const newData = await res.json();

    // Atualizar o estado com os novos dados
    setMoviesData(newData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="context"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <input type="submit" value="Buscar" />
      </form>

      <div>
        {moviesData && moviesData.Search && moviesData.Search.map((m) => (
          <div key={m.imdbID}>
            {m.Title} --- {m.Year} --- <img src={m.Poster} alt={`${m.Title} Poster`} />
          </div>
        ))}
      </div>

      <div>
        <a href="../"><button>voltar</button></a>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Você pode usar context.query para obter o valor do parâmetro da consulta
  const { searchTerm } = context.query;

  const res = await fetch(`http://www.omdbapi.com/?apikey=6252cd84&s=${searchTerm}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
