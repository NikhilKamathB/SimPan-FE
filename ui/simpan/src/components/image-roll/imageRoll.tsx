"use client";

import Image from 'next/image';
import React, { useState, useEffect } from "react";
import styles from "./imageRoll.module.scss";


interface ImageRollProps {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}


export default function ImageRoll({ className, src, alt, width, height }: ImageRollProps): React.ReactElement {

  const leftToRightTime: number = 500;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [shouldScale, setShouldScale] = useState<boolean>(false);

  useEffect((): (() => void) => {
    setIsVisible(true);
    const scaleTimer: NodeJS.Timeout = setTimeout(() => {
      setShouldScale(true);
    }, leftToRightTime);
    return () => clearTimeout(scaleTimer);
  }, []);

  return (
    <div className={`${className} ${styles.image_container}`}>
      <div className={`${styles.image_wrapper} ${isVisible ? styles.visible : ""} ${shouldScale ? styles.bounce : ""}`}>
        <Image src={src} alt={alt} width={width} height={height} style={{ objectFit: "contain" }} />
      </div>
    </div>
  );

}
