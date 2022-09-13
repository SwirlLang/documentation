import React from "react";

export default function Home() {
    React.useEffect(() => {
        window.location.href = "https://swirl-lang.vercel.app/";
    }, []);
    return null;
}
