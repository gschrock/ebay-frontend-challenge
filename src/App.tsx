import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Detail } from "./views/Detail";
import { Main } from "./views/Main";

export interface ApiData {
  earthquakes: QuakeData[];
}

export type QuakeData = {
  datetime: string;
  depth: number;
  lng: number;
  src: string;
  eqid: string;
  magnitude: number;
  lat: number;
};

export default function App() {
  const [earthquakeData, setEarthquakeData] = useState<QuakeData[] | null>(
    null
  );
  /**
   * By passing an empty array to this useEffect hook as
   * a dependency, we fetch the earthquake data and set them
   * with useState on ComponentDidMount.
   */
  useEffect(() => {
    const fetchProducts = async () => {
      const url = `http://api.geonames.org/earthquakesJSON?formatted=true&north=44.1&south=-9.9&east=-22.4&west=55.2&username=mkoppelman`;
      const apiResponse = await fetch(url).then(response =>
        response.json().then((data: ApiData) => data)
      );
      /**
       * @todo
       * Add simple error handler
       */
      setEarthquakeData(apiResponse.earthquakes);
    };
    fetchProducts();
  }, []);

  return (
    <div className={"App"}>
      <Router basename="/">
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Main earthquakeData={earthquakeData} />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
