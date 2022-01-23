import React from "react";
import { Barber } from "./src/screens/Barber";
import { StatusBar } from 'expo-status-bar';
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar 
        style="light"
        translucent
        backgroundColor="transparent"
        />
      <Barber />
    </>
  );
}

