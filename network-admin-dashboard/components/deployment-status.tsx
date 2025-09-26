"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Clock, CheckCircle, Radio, Shield, Activity } from "lucide-react"

export function DeploymentStatus() {
  const deployments = [
    {
      id: 1,
      mission: "Operation Guardian",
      team: "Bravo Team",
      location: "Sector 7 - Forward Position",
      status: "active",
      startDate: "2024-01-15",
      estimatedReturn: "2024-01-20",
      personnel: 6,
      lastUpdate: "2 hours ago",
      priority: "high",
      objective: "Reconnaissance and surveillance of designated area",
    },
    {
      id: 2,
      mission: "Training Exercise Alpha",
      team: "Delta Team",
      location: "Training Facility - Zone B",
      status: "training",
      startDate: "2024-01-18",
      estimatedReturn: "2024-01-19",
      personnel: 5,
      lastUpdate: "30 min ago",
      priority: "normal",
      objective: "Urban warfare training and tactical exercises",
    },
    {
      id: 3,
      mission: "Base Security Detail",
      team: "Alpha Team",
      location: "Base Perimeter - Checkpoint Alpha",
      status: "active",
      startDate: "2024-01-18",
      estimatedReturn: "2024-01-18",
      personnel: 8,
      lastUpdate: "15 min ago",
      priority: "normal",
      objective: "Maintain security and monitor base perimeter",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "training":
        return "bg-purple-500"
      case "standby":
        return "bg-yellow-500"
      case "completed":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return "default"
      case "training":
        return "outline"
      case "standby":
        return "secondary"
      case "completed":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "normal":
        return "secondary"
      case "low":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-balance mb-2">Deployment Status</h2>
        <p className="text-muted-foreground">Monitor active deployments and mission status</p>
      </div>

      {/* Deployment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Active Deployments</span>
            </div>
            <div className="text-2xl font-bold mt-2">2</div>
            <p className="text-xs text-muted-foreground">Currently in field</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Personnel Deployed</span>
            </div>
            <div className="text-2xl font-bold mt-2">14</div>
            <p className="text-xs text-muted-foreground">Out of 247 total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium">Training Exercises</span>
            </div>
            <div className="text-2xl font-bold mt-2">1</div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Mission Success Rate</span>
            </div>
            <div className="text-2xl font-bold mt-2">98%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Deployments */}
      <Card>
        <CardHeader>
          <CardTitle>Active Deployments</CardTitle>
          <CardDescription>Current missions and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {deployments.map((deployment) => (
              <div key={deployment.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{deployment.mission}</h3>
                      <Badge variant={getStatusBadge(deployment.status)}>{deployment.status}</Badge>
                      <Badge variant={getPriorityBadge(deployment.priority)}>{deployment.priority} priority</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{deployment.objective}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Radio className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      Track
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Team</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{deployment.team}</p>
                    <p className="text-xs text-muted-foreground">{deployment.personnel} personnel</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Location</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{deployment.location}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Timeline</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Started: {deployment.startDate}</p>
                    <p className="text-xs text-muted-foreground">Return: {deployment.estimatedReturn}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Status</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(deployment.status)}`} />
                      <span className="text-sm text-muted-foreground">Last update: {deployment.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mission History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Mission History</CardTitle>
          <CardDescription>Completed missions and their outcomes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                mission: "Operation Nightwatch",
                team: "Charlie Team",
                date: "2024-01-14",
                status: "completed",
                outcome: "Success",
              },
              {
                mission: "Patrol Delta-7",
                team: "Alpha Team",
                date: "2024-01-13",
                status: "completed",
                outcome: "Success",
              },
              {
                mission: "Training Exercise Bravo",
                team: "Delta Team",
                date: "2024-01-12",
                status: "completed",
                outcome: "Success",
              },
              {
                mission: "Supply Run Echo",
                team: "Logistics",
                date: "2024-01-11",
                status: "completed",
                outcome: "Success",
              },
            ].map((mission, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="font-medium text-sm">{mission.mission}</p>
                    <p className="text-xs text-muted-foreground">
                      {mission.team} • {mission.date}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {mission.outcome}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
