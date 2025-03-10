"use client"

import { Footer } from "@/components/sections/Footer"
import Navbar from "../sections/Navbar"

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
