import React from "react";
import { QuakeData } from "../App";

interface Props {
  earthquakeData: QuakeData[] | null;
}

export const Main: React.SFC<Props> = ({ earthquakeData }) => {
  if (!earthquakeData) return null;
  /**
   * Filter by date/time
   * Make clickable and route to detail
   */
  return (
    <div className={"container"}>
      {earthquakeData.map(quake => {
        console.log(quake, quake.magnitude);
        const isBig = quake.magnitude >= 8;
        return (
          <div className={`${isBig ? "warning" : ""} quake`} key={quake.eqid}>
            {isBig && <div>{"🚨Warning! 🚨"}</div>}
            <div>{`Time: ${quake.datetime}`}</div>
            <div>{`Magnitude: ${quake.magnitude}`}</div>
            <div>{`Latitude: ${quake.lat}`}</div>
            <div>{`Longitude: ${quake.lng}`}</div>
          </div>
        );
      })}
    </div>
  );
};
