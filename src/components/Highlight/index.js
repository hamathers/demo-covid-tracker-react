import { Grid } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";

export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];

  const summary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "Khỏi",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "Tử vong",
      count: data.Deaths,
      type: "deaths",
    },
  ];
  return (
    <Grid container spacing={3}>
      {summary.map((item, index) => (
        <HighlightCard
          key={index}
          title={item.title}
          count={item.count}
          type={item.type}
        />
      ))}
    </Grid>
  );
}
