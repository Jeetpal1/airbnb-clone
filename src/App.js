import React from "react"
import Navbar from './components/Navbar'
import Content from './components/Content'
import Experiences from './components/Experiences'
import './App.css';
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <>
          <Navbar />
          <Content />
          <Experiences />
        </>
    )
}