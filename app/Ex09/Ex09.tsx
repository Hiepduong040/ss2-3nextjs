import React from "react";
import baseAlertStyles from "./Ex09.module.css";

interface Alert {
  type: "success" | "info" | "warning" | "error";
  text: string;
}

interface Props {
  alerts: Alert[];
}

export default function Ex09({ alerts }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`${baseAlertStyles.alert} ${
            baseAlertStyles[`alert--${alert.type}`]
          }`}
        >
          {alert.text}
        </div>
      ))}
    </div>
  );
}
