import React from "react";
import TextField from "@material-ui/core";

const TextInput = (props) => {
  return (
    <TextField
      fullWidth={props.fullWidth}
      label={props.label}
      margin="dense"
      muitiline={props.muitiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
