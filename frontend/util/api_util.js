export const fetchAllPokemon = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/pokemon'
    })
  );
};

export const fetchSinglePokemon = (pokemon) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/pokemon/${pokemon}`
    })
  );
};

export const createPokemon = (pokemon) => {
  return (
    $.ajax({
      method: 'POST',
      url: `/api/pokemon`,
      data: {pokemon}
    })
  );
};
