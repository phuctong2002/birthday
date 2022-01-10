import React from "react";
import { useEffect } from "react";
export default function HomePage() {
    console.log("render trong homepage ");
    useEffect(()=>{
        return ()=>{
            console.log("HomePage da unmount");
        }
    });
    return (
        <div className="container">
            <h1>Trang chu</h1>
        </div>

    )
}