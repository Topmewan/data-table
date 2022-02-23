import {useEffect, useState} from "react";
import axios from "axios";

const UseContacts = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        const {results,error} = response.data;
        if(error){
          throw  new Error(error);
        }
        setData(results);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData(url);
  }, [])



  return {
    data,
    isError,
    isLoading
  }
};

export default UseContacts;