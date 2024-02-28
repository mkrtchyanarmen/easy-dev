"use client";

import { ReactNode } from "react";
import { Element } from "react-scroll";

type ScrollElementProps = {
  children: ReactNode;
  name: string;
};

const ScrollElement = ({ children, name }: ScrollElementProps) => {
  return <Element name={name}>{children}</Element>;
};

export default ScrollElement;
