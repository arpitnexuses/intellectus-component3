"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FolderOpen, Check } from "lucide-react"

export default function Home() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#074D70] to-[#0E93D6] overflow-auto">
      <div className="min-h-screen p-6 sm:p-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-12 sm:mb-16">
            What Makes Us Different (vs. Traditional Models)
          </h1>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-start justify-center">
            {/* Traditional Model Card - Smaller */}
            <Card className="bg-gradient-to-b from-[#4A7A9A] to-[#5BA3E8] border-[#6BB0F0]/40 p-8 sm:p-10 w-full lg:w-96 text-white mt-0 lg:mt-8 rounded-lg lg:rounded-l-none">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">Traditional MD-VP Model</h2>
              <p className="text-base text-white/80 mb-8">
                Structured for scale with
                <br />
                established corporate processes
                <br />
                and frameworks.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <FolderOpen className="w-5 h-5 text-white/70" />
                  <span className="text-base">Multiple management layers</span>
                </div>
                <div className="flex items-center gap-4">
                  <FolderOpen className="w-5 h-5 text-white/70" />
                  <span className="text-base">Bureaucratic approvals</span>
                </div>
                <div className="flex items-center gap-4">
                  <FolderOpen className="w-5 h-5 text-white/70" />
                  <span className="text-base">Standardized frameworks</span>
                </div>
                <div className="flex items-center gap-4">
                  <FolderOpen className="w-5 h-5 text-white/70" />
                  <span className="text-base">Generalist advice</span>
                </div>
                <div className="flex items-center gap-4">
                  <FolderOpen className="w-5 h-5 text-white/70" />
                  <span className="text-base">Fixed-fee model</span>
                </div>
                <div className="flex items-center gap-4">
                  <FolderOpen className="w-5 h-5 text-white/70" />
                  <span className="text-base">Global scale, less mid-market nuance</span>
                </div>
              </div>
            </Card>

            {/* Our Model Card - Larger */}
            <Card className="bg-[#1E3A5F] border-[#2A4A6B] p-8 sm:p-10 w-full lg:w-[28rem] text-white relative flex flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-xl sm:text-2xl font-semibold">Our Model</h2>
                <Button className="bg-[#20B2AA] hover:bg-[#1A9B94] text-white px-4 py-2 rounded text-sm font-medium uppercase h-8 ml-4">
                  INTELLECTUS CAPITAL
                </Button>
              </div>
              <p className="text-base text-white/80 mb-8">Built for agility, precision, and client-first outcomes.</p>

              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-base">Partner-led delivery throughout</span>
                </div>
                <div className="flex items-center gap-4">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-base">Boutique flexibility and speed</span>
                </div>
                <div className="flex items-center gap-4">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-base">Strategy tailored to founders</span>
                </div>
                <div className="flex items-center gap-4">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-base">Sector-specialist insight</span>
                </div>
                <div className="flex items-center gap-4">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-base">Success-aligned fees</span>
                </div>
                <div className="flex items-center gap-4">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-base">Global reach, local focus</span>
                </div>
              </div>

              <div className="mt-auto">
                <Button 
                  className="bg-[#2A9FD6] hover:bg-[#1E8BC3] text-white px-8 py-4 rounded-full font-medium w-fit text-base"
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
