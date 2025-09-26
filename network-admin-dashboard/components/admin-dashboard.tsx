"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Users,
  Settings,
  Activity,
  MessageSquare,
  Radio,
  Search,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  UserCheck,
  UserCog,
  Eye,
  Lock,
} from "lucide-react"
import { PersonnelTracker } from "@/components/personnel-tracker"
import { MilitaryMessaging } from "@/components/military-messaging"
import { MilitaryTeams } from "@/components/military-teams"
import { DeploymentStatus } from "@/components/deployment-status"
import { OperationsMonitor } from "@/components/operations-monitor"
import { AdminMemberApproval } from "@/components/admin-member-approval"
import { MessageMetadataMonitor } from "@/components/message-metadata-monitor"
import { ThemeToggle } from "@/components/theme-toggle"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-indian-gradient">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-white" />
            <h1 className="text-xl font-semibold text-balance text-white">KAVACH - Military Command Center</h1>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search personnel..."
                className="w-64 pl-9 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
            </div>
            <ThemeToggle />
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-saffron-gradient">
          <nav className="p-4 space-y-2">
            <Button
              variant={activeTab === "overview" ? "secondary" : "ghost"}
              className={`w-full justify-start ${activeTab === "overview" ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"}`}
              onClick={() => setActiveTab("overview")}
            >
              <Activity className="h-4 w-4 mr-2" />
              Command Overview
            </Button>
            <Button
              variant={activeTab === "messaging" ? "secondary" : "ghost"}
              className={`w-full justify-start ${activeTab === "messaging" ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"}`}
              onClick={() => setActiveTab("messaging")}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Secure Messaging
            </Button>
            <Button
              variant={activeTab === "personnel" ? "secondary" : "ghost"}
              className={`w-full justify-start ${activeTab === "personnel" ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"}`}
              onClick={() => setActiveTab("personnel")}
            >
              <UserCheck className="h-4 w-4 mr-2" />
              Personnel Tracker
            </Button>
            <Button
              variant={activeTab === "teams" ? "secondary" : "ghost"}
              className={`w-full justify-start ${activeTab === "teams" ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"}`}
              onClick={() => setActiveTab("teams")}
            >
              <Users className="h-4 w-4 mr-2" />
              Military Teams
            </Button>
            <Button
              variant={activeTab === "deployment" ? "secondary" : "ghost"}
              className={`w-full justify-start ${activeTab === "deployment" ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"}`}
              onClick={() => setActiveTab("deployment")}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Deployment Status
            </Button>
            <Button
              variant={activeTab === "operations" ? "secondary" : "ghost"}
              className={`w-full justify-start ${activeTab === "operations" ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"}`}
              onClick={() => setActiveTab("operations")}
            >
              <Radio className="h-4 w-4 mr-2" />
              Operations Monitor
            </Button>
            <div className="border-t border-white/20 pt-2 mt-4">
              <p className="text-xs font-medium text-white/70 mb-2 px-2">ADMIN CONTROLS</p>
              <Button
                variant={activeTab === "member-approval" ? "secondary" : "ghost"}
                className={`w-full justify-start ${activeTab === "member-approval" ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"}`}
                onClick={() => setActiveTab("member-approval")}
              >
                <UserCog className="h-4 w-4 mr-2" />
                Member Approval
              </Button>
              <Button
                variant={activeTab === "message-monitoring" ? "secondary" : "ghost"}
                className={`w-full justify-start ${activeTab === "message-monitoring" ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"}`}
                onClick={() => setActiveTab("message-monitoring")}
              >
                <Eye className="h-4 w-4 mr-2" />
                Message Monitoring
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-balance mb-2 text-foreground">Command Center Overview</h2>
                <p className="text-muted-foreground">Monitor personnel, communications, and operational status</p>
              </div>

              {/* Status Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-forest-gradient border-indian">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white">Active Personnel</CardTitle>
                    <UserCheck className="h-4 w-4 text-white/80" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">247</div>
                    <p className="text-xs text-white/70">12 deployed, 235 on base</p>
                  </CardContent>
                </Card>

                <Card className="bg-saffron-gradient border-indian">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white">Secure Comms</CardTitle>
                    <Radio className="h-4 w-4 text-white/80" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-white" />
                      <span className="text-sm text-white">Operational</span>
                    </div>
                    <p className="text-xs text-white/70 mt-1">18 active channels</p>
                  </CardContent>
                </Card>

                <Card className="bg-indian-gradient border-indian">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white">Active Teams</CardTitle>
                    <Users className="h-4 w-4 text-white/80" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">8</div>
                    <p className="text-xs text-white/70">Alpha, Bravo, Charlie active</p>
                  </CardContent>
                </Card>

                <Card className="bg-forest-gradient border-indian">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white">Mission Status</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-white/80" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-white" />
                      <span className="text-sm text-white">All Clear</span>
                    </div>
                    <p className="text-xs text-white/70 mt-1">No active alerts</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-indian">
                <CardHeader className="bg-indian-gradient">
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Lock className="h-5 w-5" />
                    Security & Access Control
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Admin oversight of secure communications and member access
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border border-indian rounded-lg bg-saffron-gradient">
                      <div className="flex items-center gap-2 mb-2">
                        <UserCog className="h-4 w-4 text-white" />
                        <span className="font-medium text-white">Pending Approvals</span>
                      </div>
                      <div className="text-2xl font-bold text-white">3</div>
                      <p className="text-xs text-white/70">Members awaiting verification</p>
                    </div>
                    <div className="p-4 border border-indian rounded-lg bg-forest-gradient">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="h-4 w-4 text-white" />
                        <span className="font-medium text-white">Messages Monitored</span>
                      </div>
                      <div className="text-2xl font-bold text-white">247</div>
                      <p className="text-xs text-white/70">Metadata tracked today</p>
                    </div>
                    <div className="p-4 border border-indian rounded-lg bg-indian-gradient">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-white" />
                        <span className="font-medium text-white">Encryption Status</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-white" />
                        <span className="text-sm text-white">Active</span>
                      </div>
                      <p className="text-xs text-white/70">End-to-end secured</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-indian">
                <CardHeader>
                  <CardTitle className="text-foreground">Quick Actions</CardTitle>
                  <CardDescription>Common command operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button
                      className="h-20 flex-col gap-2 bg-saffron-gradient hover:opacity-90 text-white border-indian"
                      onClick={() => setActiveTab("member-approval")}
                    >
                      <UserCog className="h-6 w-6" />
                      Approve Members
                    </Button>
                    <Button
                      className="h-20 flex-col gap-2 bg-forest-gradient hover:opacity-90 text-white border-indian"
                      onClick={() => setActiveTab("message-monitoring")}
                    >
                      <Eye className="h-6 w-6" />
                      Monitor Messages
                    </Button>
                    <Button
                      className="h-20 flex-col gap-2 bg-indian-gradient hover:opacity-90 text-white border-indian"
                      onClick={() => setActiveTab("teams")}
                    >
                      <Users className="h-6 w-6" />
                      Manage Teams
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-indian">
                <CardHeader>
                  <CardTitle className="text-foreground">Recent Communications</CardTitle>
                  <CardDescription>Latest messages and operational updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        time: "2 min ago",
                        event: "Alpha Team: Position secured",
                        type: "success",
                        sender: "SGT Johnson",
                      },
                      {
                        time: "15 min ago",
                        event: "Bravo Team: Requesting backup",
                        type: "warning",
                        sender: "CPL Martinez",
                      },
                      {
                        time: "1 hour ago",
                        event: "Charlie Team: Mission complete",
                        type: "success",
                        sender: "LT Williams",
                      },
                      { time: "2 hours ago", event: "Command: Weather update received", type: "info", sender: "HQ" },
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-burgundy/10 to-golden/10 border border-border"
                      >
                        <div className="flex-shrink-0">
                          {activity.type === "success" && <CheckCircle className="h-4 w-4 text-green-600" />}
                          {activity.type === "warning" && <AlertTriangle className="h-4 w-4 text-amber-600" />}
                          {activity.type === "info" && <Clock className="h-4 w-4 text-primary" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{activity.event}</p>
                          <p className="text-xs text-muted-foreground">
                            {activity.sender} • {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "messaging" && <MilitaryMessaging />}
          {activeTab === "personnel" && <PersonnelTracker />}
          {activeTab === "teams" && <MilitaryTeams />}
          {activeTab === "deployment" && <DeploymentStatus />}
          {activeTab === "operations" && <OperationsMonitor />}
          {activeTab === "member-approval" && <AdminMemberApproval />}
          {activeTab === "message-monitoring" && <MessageMetadataMonitor />}
        </main>
      </div>
    </div>
  )
}
