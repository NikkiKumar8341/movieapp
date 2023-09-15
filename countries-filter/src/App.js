import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';

function App() {
   const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        //         const request_headers = new Headers();
        //         const api_key = null;
        //         request_headers.append("Authorization", `Bearer ${api_key}`);
        //         request_headers.append("Content-Type", "application/json");

        //         const request_options = {
        //             method: "GET",
        //             headers: request_headers
        //         };

        fetch(
            "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setLoaded(true);
                    setItems(result);
                    console.log(result);
                },
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            );
    }, []);

    const data = Object.values(items);

    if (error) {
        return <>{error.message}</>;
    } else if (!loaded) {
        return <>loading...</>;
    } else {
        return (
            <div className="wrapper">
                <ul className="card-grid">
                    {data.map((item) => (
                        <li key={item.alpha3Code}>
                            <article className="card">
                                <div className="card-image">
                                    <img
                                        src={item.flag.large}
                                        alt={item.name}
                                    />
                                </div>
                                <div className="card-content">
                                    <h2 className="card-name">{item.name}</h2>
                                    <ol className="card-list">
                                        <li>
                                            population:{" "}
                                            <span>{item.population}</span>
                                        </li>
                                        <li>
                                            Region: <span>{item.region}</span>
                                        </li>
                                        <li>
                                            Capital: <span>{item.capital}</span>
                                        </li>
                                    </ol>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
