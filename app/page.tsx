import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FolderOpen } from "lucide-react"

export default function Home() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#074D70] to-[#0E93D6] overflow-auto">
      <div className="min-h-screen p-4 sm:p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12">
            What Makes Us Different (vs. Traditional Models)
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-start justify-center">
            {/* Traditional Model Card - Smaller */}
            <Card className="bg-gradient-to-b from-[#4A7A9A] to-[#5BA3E8] border-[#6BB0F0]/40 p-6 sm:p-8 w-full sm:w-80 text-white mt-0 sm:mt-7 rounded-lg sm:rounded-l-none">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">Traditional MD-VP Model</h2>
              <p className="text-sm text-white/80 mb-6">
                Structured for scale with
                <br />
                established corporate processes
                <br />
                and frameworks.
              </p>

              <div className="space-y-4">
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
            <Card className="bg-[#1E3A5F] border-[#2A4A6B] p-6 sm:p-8 w-full sm:w-96 text-white relative flex flex-col">
              <div className="flex items-center mb-2">
                <h2 className="text-xl sm:text-xl font-semibold">Our Model</h2>
                <Button className="bg-[#20B2AA] hover:bg-[#1A9B94] text-white px-3 py-1.5 rounded text-xs font-medium uppercase h-7 ml-3">
                  INTELLECTUS CAPITAL
                </Button>
              </div>
              <p className="text-sm text-white/80 mb-6">Built for agility, precision, and client-first outcomes.</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-4 h-4 text-[#4A90E2]" />
                  <span className="text-sm">Partner-led delivery throughout</span>
                </div>
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-4 h-4 text-[#4A90E2]" />
                  <span className="text-sm">Boutique flexibility and speed</span>
                </div>
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-4 h-4 text-[#4A90E2]" />
                  <span className="text-sm">Strategy tailored to founders</span>
                </div>
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-4 h-4 text-[#4A90E2]" />
                  <span className="text-sm">Sector-specialist insight</span>
                </div>
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-4 h-4 text-[#4A90E2]" />
                  <span className="text-sm">Success-aligned fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-4 h-4 text-[#4A90E2]" />
                  <span className="text-sm">Global reach, local focus</span>
                </div>
              </div>

              <div className="mt-auto">
                <Button className="bg-[#2A9FD6] hover:bg-[#1E8BC3] text-white px-6 py-3 rounded-full font-medium w-fit">
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
