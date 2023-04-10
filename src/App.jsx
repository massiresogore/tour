import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [err, setErr] = useState(false);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id != id);
    setTours(newTour);
  };

  const fetchTour = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setErr(true);
        setIsLoading(false);
        return;
      }
      const data = await res.json();
      setTours(data);
    } catch (error) {
      setErr(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTour();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (err) {
    return <p>Error Mode</p>;
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
