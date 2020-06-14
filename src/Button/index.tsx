import React from "react";

type Props = {
  label: string;
};

function Button({ label }: Props): JSX.Element {
  return <button className="btn btn__primary">{label}</button>;
}

export default Button;
