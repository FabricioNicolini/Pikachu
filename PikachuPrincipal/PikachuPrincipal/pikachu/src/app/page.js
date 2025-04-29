import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

export default function Home() {
  return (
    <div>
    <Sidebar />
    </div>
  );
}
