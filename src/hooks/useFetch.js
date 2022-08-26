import { useState, useEffect } from 'react';


export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => { 
     try{ 
      let res = await fetch(url);
      if (!res.ok) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? 'Error' : res.statusText
        };
      }
      let data = await res.json();
      setData(data);
      setLoading(false);
      setError({err: false});
     } catch(err){
      setData(data);
      setLoading(true);
      setError(err);
     }      
      
    };
    getData(url);
  } , [url]);
  return { data, loading, error };
}