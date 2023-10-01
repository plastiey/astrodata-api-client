import React, { useState, useEffect } from "react";

function Chart() {
    const [generatedHTML, setGeneratedHTML] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/charts/bar")
            .then((response) => response.text())
            .then((data) => setGeneratedHTML(data))
            .catch((error) => console.error("Error fetching HTML:", error));
    }, []);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: generatedHTML }}></div>
        </div>
    );
}

export default Chart;
