import { useState } from "react";

import "../styles/form.css";

export default function AnalyzeForm({ mode, onSubmit }) {

const [input, setInput] = useState("");

const handleClick = () => {

if (!input.trim()) {

  alert("Please paste a link");

  return;

}

onSubmit(input);

};

return (

<div className="form">

  <input

    type="text"

    placeholder={

      mode === "ANALYZE"

        ? "Paste YouTube channel link or @handle"

        : "Paste any link to summarize"

    }

    value={input}

    onChange={(e) => setInput(e.target.value)}

  />



  <button onClick={handleClick}>

    {mode === "ANALYZE" ? "Analyze Channel" : "Generate Summary"}

  </button>

</div>

);

}