import React from "react";
import Board from "../Board";
import CountryOverview from "../CountryOverview";
import { CountryData } from "../../const/CountryData";

const CountryBoard = () => {
  return (
    <Board pt="3.4rem" pl="1.8rem" pb="0.9rem" pr="2.6rem" flex="0 1 40%">
      {CountryData.map(({ id, ...rest }) => (
        <CountryOverview key={id} id={id} {...rest} />
      ))}
    </Board>
  );
};

export default CountryBoard;
