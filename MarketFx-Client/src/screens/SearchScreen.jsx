import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { NewsApi } from "../Api/NewsApi";
import NewsComponent from "../components/NewsComponent";

const SearchScreen = () => {
  const [newsList, setNewsList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const news = searchParams.get("news");
  const API_KEY = `62548e716c4c467cb61e98247afe57eb`;
  useEffect(() => {
    (async () => {
      try {
        const response = await NewsApi.get(
          `/everything?q=${news}&sortBy=popularity&apiKey=${API_KEY}`
        );
        setNewsList(response.articles);
      } catch (ex) {
        alert(ex);
      }
    })();
  }, []);
  return (
    <p>
      {newsList
        ? newsList.map((news) => {
            return <NewsComponent news={news} />;
          })
        : null}
    </p>
  );
};

export default SearchScreen;
