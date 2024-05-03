"use client"; // this is a client component 👈🏽
import { useState, useEffect } from "react";
import styles from "./navleft.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navleft({ props }) {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li
          className={`${
            pathname === "/"
              ? styles.active
              : props
              ? styles.navlink
              : styles.darknavlink
          }`}
        >
          <Link href="/">{pathname === "/" ? "- HOME" : "HOME"}</Link>
        </li>
        <li
          className={`${
            pathname === "/lettings"
              ? styles.active
              : props
              ? styles.navlink
              : styles.darknavlink
          }`}
        >
          <Link href="/lettings">
            {pathname === "/lettings" ? "- LETTINGS" : "LETTINGS"}
          </Link>
        </li>
        <li
          className={`${
            pathname === "/sales"
              ? styles.active
              : props
              ? styles.navlink
              : styles.darknavlink
          }`}
        >
          <Link href="/sales">
            {pathname === "/sales" ? "- SALES" : "SALES"}
          </Link>
        </li>
        <li
          className={`${
            pathname === "/marketing"
              ? styles.active
              : props
              ? styles.navlink
              : styles.darknavlink
          }`}
        >
          <Link href="/marketing">
            {pathname === "/marketing" ? "- MARKETING" : "MARKETING"}
          </Link>
        </li>
        <li
          className={`${
            pathname === "/admin"
              ? styles.active
              : props
              ? styles.navlink
              : styles.darknavlink
          }`}
        >
          <Link href="/admin">
            {pathname === "/admin" ? "- ADMIN" : "ADMIN"}
          </Link>
        </li>
        <li
          className={`${
            pathname === "/templates"
              ? styles.active
              : props
              ? styles.navlink
              : styles.darknavlink
          }`}
        >
          <Link href="/templates">
            {pathname === "/templates" ? "- TEMPLATES" : "TEMPLATES"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
