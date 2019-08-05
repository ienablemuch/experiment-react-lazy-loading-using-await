import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [sum, setSum] = useState(0);
    const [concatenated, setConcatenated] = useState("");

    useEffect(() => {
        async function processData() {
            const [math, util] = await Promise.all([
                import("./math" /* webpackChunkName: "math" */),
                import("./util" /* webpackChunkName: "util" */)
            ]);

            const sum = math.add(7, 6);
            const concatenated = util.concat(7, 6);

            setSum(sum);
            setConcatenated(concatenated);
        }

        processData();
    });

    return (
        <div className="App">
            Sum: {sum}
            <br />
            Concatenated: {concatenated};
        </div>
    );
}

export default App;
