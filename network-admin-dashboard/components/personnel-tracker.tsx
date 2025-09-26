"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Radio, Search, Filter, User, MessageSquare, Clock } from "lucide-react"

export function PersonnelTracker() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const personnel = [
    {
      id: 1,
      name: "SGT Johnson",
      rank: "Sergeant",
      team: "Alpha Team",
      status: "active",
      location: "Base Camp Alpha",
      lastSeen: "Active now",
      isMessaging: true,
      deployment: "On Base",
      specialization: "Team Leader",
    },
    {
      id: 2,
      name: "LT Williams",
      rank: "Lieutenant",
      team: "Bravo Team",
      status: "deployed",
      location: "Sector 7",
      lastSeen: "2 min ago",
      isMessaging: false,
      deployment: "Field Operation",
      specialization: "Special Operations",
    },
    {
      id: 3,
      name: "CPL Martinez",
      rank: "Corporal",
      team: "Alpha Team",
      status: "active",
      location: "Communications Center",
      lastSeen: "Active now",
      isMessaging: true,
      deployment: "On Base",
      specialization: "Communications",
    },
    {
      id: 4,
      name: "PVT Davis",
      rank: "Private",
      team: "Charlie Team",
      status: "standby",
      location: "Barracks",
      lastSeen: "15 min ago",
      isMessaging: false,
      deployment: "On Base",
      specialization: "Rifleman",
    },
    {
      id: 5,
      name: "CPL Jackson",
      rank: "Corporal",
      team: "Charlie Team",
      status: "training",
      location: "Training Facility",
      lastSeen: "1 hour ago",
      isMessaging: false,
      deployment: "Training",
      specialization: "Team Leader",
    },
    {
      id: 6,
      name: "SGT Thompson",
      rank: "Sergeant",
      team: "Bravo Team",
      status: "deployed",
      location: "Forward Position",
      lastSeen: "5 min ago",
      isMessaging: true,
      deployment: "Field Operation",
      specialization: "Assistant Leader",
    },
    {
      id: 7,
      name: "PVT Wilson",
      rank: "Private",
      team: "Alpha Team",
      status: "medical",
      location: "Medical Bay",
      lastSeen: "30 min ago",
      isMessaging: false,
      deployment: "Medical Leave",
      specialization: "Medic",
    },
    {
      id: 8,
      name: "SPC Brown",
      rank: "Specialist",
      team: "Delta Team",
      status: "active",
      location: "Engineering Bay",
      lastSeen: "Active now",
      isMessaging: false,
      deployment: "On Base",
      specialization: "Engineer",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "deployed":
        return "bg-blue-500"
      case "standby":
        return "bg-yellow-500"
      case "training":
        return "bg-purple-500"
      case "medical":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return "default"
      case "deployed":
        return "destructive"
      case "standby":
        return "secondary"
      case "training":
        return "outline"
      case "medical":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const filteredPersonnel = personnel.filter((person) => {
    const matchesSearch =
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.rank.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.team.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || person.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const statusCounts = {
    active: personnel.filter((p) => p.status === "active").length,
    deployed: personnel.filter((p) => p.status === "deployed").length,
    standby: personnel.filter((p) => p.status === "standby").length,
    training: personnel.filter((p) => p.status === "training").length,
    medical: personnel.filter((p) => p.status === "medical").length,
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-balance mb-2">Personnel Tracker</h2>
        <p className="text-muted-foreground">
          Monitor deployment status and communication activity of all military personnel
        </p>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm font-medium">Active</span>
            </div>
            <div className="text-2xl font-bold mt-2">{statusCounts.active}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm font-medium">Deployed</span>
            </div>
            <div className="text-2xl font-bold mt-2">{statusCounts.deployed}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-sm font-medium">Standby</span>
            </div>
            <div className="text-2xl font-bold mt-2">{statusCounts.standby}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-sm font-medium">Training</span>
            </div>
            <div className="text-2xl font-bold mt-2">{statusCounts.training}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm font-medium">Medical</span>
            </div>
            <div className="text-2xl font-bold mt-2">{statusCounts.medical}</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Personnel Directory</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search personnel..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 pl-9"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFilterStatus(filterStatus === "all" ? "active" : "all")}
              >
                <Filter className="h-4 w-4 mr-2" />
                {filterStatus === "all" ? "All" : filterStatus}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredPersonnel.map((person) => (
              <div
                key={person.id}
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative">
                    <User className="h-6 w-6" />
                    <div
                      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(person.status)}`}
                    />
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{person.name}</span>
                      {person.isMessaging && <MessageSquare className="h-4 w-4 text-green-500" />}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {person.rank}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {person.team}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{person.location}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{person.deployment}</p>
                  </div>

                  <div>
                    <Badge variant={getStatusBadge(person.status)} className="mb-1">
                      {person.status}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{person.lastSeen}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Radio className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
