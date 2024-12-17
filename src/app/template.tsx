"use client";
// import { useState } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
  // const [State, setstate] = useState(0)
  return (
    <div>
      {/* <h1>This is Template Page {State}</h1>
            <button onClick={() => setstate(State + 1)}>Template Button</button> */}
      {children}
    </div>
  );
}
