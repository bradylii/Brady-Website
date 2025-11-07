import { useEffect, useState } from "react";

export default function NasaApod({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApod() {
      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`
        );
        if (!res.ok) throw new Error("Failed to fetch NASA APOD");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchApod();
  }, []);

  if (loading) return <p>NASA Picture of the Day API is down at the moment!</p>;
  if (error) return <p>Error: {error}</p>;

  // Let the parent decide how to display the info
  return children({
    title: data.title,
    date: data.date,
    explanation: data.explanation,
    url: data.url,
    mediaType: data.media_type,
  });
}
