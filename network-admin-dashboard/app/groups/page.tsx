import { MilitaryTeams } from "@/components/military-teams"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export default function GroupsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold text-balance">KAVACH - Military Teams</h1>
          </div>
          <div className="ml-auto">
            <Button variant="outline" size="sm" asChild>
              <a href="/">← Back to Command Center</a>
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        <MilitaryTeams />
      </div>
    </div>
  )
}
