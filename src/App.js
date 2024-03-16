import { React, useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Card from "./components/card";
import Button from "./components/button";

export default function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfQuotes = data.data;
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <h1 className="Heading">Inspirational Quotes</h1>
      <br />
      <br />
      <br />
      <br />
      <Card name={quote} hisName={author} />
      <br />
      <br />
      <Button />
    </div>
  );
}
