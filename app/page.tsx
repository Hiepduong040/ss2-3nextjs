"use client";
import React, { useState } from "react";
import Ex01 from "./Ex01/Ex01";
import Ex02 from "./Ex02/Ex02";
import Ex03 from "./Ex03/Ex03";
import Ex04 from "./Ex04/Ex04";
import Ex05 from "./Ex05/Ex05";
import Ex06 from "./Ex06/Ex06";
import Ex07 from "./Ex07/Ex07";
import Ex08 from "./Ex08/Ex08";
import Ex09 from "./Ex09/Ex09";
import BaseCart from "./Ex10/BaseCart";
import Select from "./Ex11/Select";

export default function page() {
  const alerts: {
    type: "success" | "info" | "warning" | "error";
    text: string;
  }[] = [
    { type: "success", text: "Success Text" },
    { type: "info", text: "Info Text" },
    { type: "warning", text: "Warning Text" },
    { type: "error", text: "Error Text" },
  ];
  const [selectedValue, setSelectedValue] = useState({});

  const options = [
    { value: 1, label: "HTML" },
    { value: 2, label: "CSS" },
    { value: 3, label: "JavaScript" },
    { value: 4, label: "NextJS" },
  ];

  const handleChange = (option: any) => {
    setSelectedValue(option);
  };
  return (
    <div className="pl-10">
      <Ex01 />
      <br />
      <h3>Bài 2</h3>
      <Ex02 />
      <br />
      <h3>Bài 3</h3>
      <Ex03 />
      <br />
      <h3>Bài 4</h3>
      <Ex04 />
      <br />
      <h3>Bài 5</h3>
      <Ex05 />
      <br />
      <h3>Bài 6</h3>
      <Ex06 />
      <br />
      <h3>Bài 7</h3>
      <Ex07 />
      <br />
      <h3>Bài 8</h3>
      <Ex08 />
      <br />
      <h3>Bài 9</h3>
      <Ex09 alerts={alerts} />
      <br />
      <h3>Bài 10</h3>
      <div>
        <BaseCart
          content="Áo phông nam mát mẻ"
          title="Áo phông nam"
          image="https://up.yimg.com/ib/th?id=OIP.0FfHrGvR_6E31Uzqenk8nAHaIA&pid=Api&rs=1&c=1&qlt=95&w=100&h=108"
        />
      </div>
      <br />
      <h3>Bài 11</h3>
      <Select
        options={options}
        value={selectedValue}
        handleChange={handleChange}
      />
      <br />
      <h1>Bài 12</h1>
      <Date />
      <br />
    </div>
  );
}
