

 export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.EXERCISSE_DB_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {


    const response = await fetch(url, options);

    const data = response.json();
    return data;
}