import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alertToAlert && (
      <div
        className={`alert alert-${props.alertToAlert.typ} alert-dismissible fade show container text-center my-2`}
        role="alert"
      >
        <strong>{capitalize(props.alertToAlert.typ)}:</strong>{" "}
        {props.alertToAlert.msg}
      </div>
    )
  );
}
