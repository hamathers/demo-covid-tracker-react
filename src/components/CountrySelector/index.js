import React from "react";
import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: `${theme.spacing(3)}px 0`,
    minWidth: 120,
  },
}));

export default function CountrySelector({ value, handleOnChange, countries }) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="country-selector" shrink>
        Quốc gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((country, index) => (
          <option key={index} value={country.ISO2.toLowerCase()}>
            {country.Country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
