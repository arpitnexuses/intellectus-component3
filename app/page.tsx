"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FolderOpen, Check } from "lucide-react"

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#074D70] to-[#0E93D6] overflow-hidden lg:overflow-hidden overflow-y-auto pt-[15px]">
      <div className="min-h-full p-3 sm:p-6 flex flex-col">
        <div className="max-w-7xl mx-auto flex-1 flex flex-col">
          <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-2 sm:mb-3 lg:mb-4">
            What Makes Us Different (vs. Traditional Models)
          </h1>

          <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-stretch lg:items-start justify-center flex-1 lg:flex-1">
            {/* Traditional Model Card - Smaller */}
            <Card className="bg-gradient-to-b from-[#4A7A9A] to-[#5BA3E8] border-[#6BB0F0]/40 px-3 py-3 sm:px-6 sm:pt-6 sm:pb-4 w-full lg:w-[26rem] lg:h-[420px] text-white mt-0 lg:mt-4 rounded-lg lg:rounded-l-none lg:hover:shadow-2xl lg:hover:shadow-blue-500/20 lg:hover:scale-105 transition-all duration-300 ease-in-out">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">Traditional MD-VP Model</h2>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4">
                Structured for scale with
                <br />
                established corporate processes
                <br />
                and frameworks.
              </p>

              <div className="space-y-2 sm:space-y-3 pb-1">
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-4 h-4 text-white/70" />
                  <span className="text-sm">Multiple management layers</span>
                </div>
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-4 h-4 text-white/70" />
                  <span className="text-sm">Bureaucratic approvals</span>
                </div>
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-4 h-4 text-white/70" />
                  <span className="text-sm">Standardized frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-4 h-4 text-white/70" />
                  <span className="text-sm">Generalist advice</span>
                </div>
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-4 h-4 text-white/70" />
                  <span className="text-sm">Fixed-fee model</span>
                </div>
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-4 h-4 text-white/70" />
                  <span className="text-sm">Global scale, less mid-market nuance</span>
                </div>
              </div>
            </Card>

            {/* Our Model Card - Larger */}
            <Card className="bg-[#1E3A5F] border-[#2A4A6B] px-3 py-3 sm:p-6 w-full lg:w-[28rem] lg:h-[450px] text-white relative flex flex-col lg:hover:shadow-2xl lg:hover:shadow-blue-500/20 lg:hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="flex items-center mb-2 sm:mb-3">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">Our Model</h2>
                <Button className="bg-[#20B2AA] hover:bg-[#1A9B94] text-white px-2 py-1 rounded text-xs font-medium uppercase h-6 sm:h-7 ml-2 sm:ml-3">
                  INTELLECTUS CAPITAL
                </Button>
              </div>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4">Built for agility, precision, and client-first outcomes.</p>

              <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Partner-led delivery throughout</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Boutique flexibility and speed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Strategy tailored to founders</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Sector-specialist insight</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Success-aligned fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Global reach, local focus</span>
                </div>
              </div>

              <div className="mt-auto">
                <Button 
                  className="bg-[#2A9FD6] hover:bg-[#1E8BC3] text-white px-6 py-2 rounded-full font-medium w-full sm:w-fit text-sm min-h-[44px]"
                  onClick={() => window.open('https://intellectuscapital.com.au/contact-us/', '_blank')}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
