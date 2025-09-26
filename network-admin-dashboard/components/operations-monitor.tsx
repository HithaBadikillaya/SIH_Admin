"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Radio, Activity, AlertTriangle, CheckCircle, Clock, Signal, Shield, Eye } from "lucide-react"

export function OperationsMonitor() {
  const systemStatus = [
    { name: "Communication Network", status: "operational", uptime: "99.8%", lastCheck: "2 min ago" },
    { name: "Secure Channels", status: "operational", uptime: "100%", lastCheck: "1 min ago" },
    { name: "GPS Tracking", status: "operational", uptime: "98.5%", lastCheck: "3 min ago" },
    { name: "Surveillance Systems", status: "warning", uptime: "95.2%", lastCheck: "5 min ago" },
    { name: "Emergency Protocols", status: "operational", uptime: "100%", lastCheck: "1 min ago" },
  ]

  const activeOperations = [
    {
      id: 1,
      name: "Perimeter Watch",
      type: "Security",
      status: "active",
      duration: "6h 23m",
      personnel: 12,
      priority: "normal",
    },
    {
      id: 2,
      name: "Communication Relay",
      type: "Support",
      status: "active",
      duration: "12h 45m",
      personnel: 4,
      priority: "high",
    },
    {
      id: 3,
      name: "Equipment Maintenance",
      type: "Logistics",
      status: "scheduled",
      duration: "Starts in 2h",
      personnel: 6,
      priority: "normal",
    },
  ]

  const alerts = [
    {
      id: 1,
      type: "warning",
      message: "Surveillance camera offline in Sector 3",
      time: "5 min ago",
      priority: "medium",
    },
    {
      id: 2,
      type: "info",
      message: "Scheduled maintenance completed successfully",
      time: "1 hour ago",
      priority: "low",
    },
    {
      id: 3,
      type: "success",
      message: "All teams checked in successfully",
      time: "2 hours ago",
      priority: "low",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-500"
      case "warning":
        return "text-yellow-500"
      case "error":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "error":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "info":
        return <Clock className="h-4 w-4 text-blue-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-balance mb-2">Operations Monitor</h2>
        <p className="text-muted-foreground">Real-time monitoring of military operations and system status</p>
      </div>

      {/* System Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Radio className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Communications</span>
            </div>
            <div className="text-2xl font-bold mt-2 text-green-500">Online</div>
            <p className="text-xs text-muted-foreground">18 active channels</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Signal className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Network</span>
            </div>
            <div className="text-2xl font-bold mt-2 text-green-500">99.8%</div>
            <p className="text-xs text-muted-foreground">Uptime</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">Surveillance</span>
            </div>
            <div className="text-2xl font-bold mt-2 text-yellow-500">Warning</div>
            <p className="text-xs text-muted-foreground">1 camera offline</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Security</span>
            </div>
            <div className="text-2xl font-bold mt-2 text-green-500">Secure</div>
            <p className="text-xs text-muted-foreground">All systems protected</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Status Details */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current status of all operational systems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemStatus.map((system, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(system.status)}
                    <div>
                      <p className="font-medium text-sm">{system.name}</p>
                      <p className="text-xs text-muted-foreground">Uptime: {system.uptime}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={system.status === "operational" ? "default" : "destructive"} className="mb-1">
                      {system.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{system.lastCheck}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Operations */}
        <Card>
          <CardHeader>
            <CardTitle>Active Operations</CardTitle>
            <CardDescription>Currently running military operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeOperations.map((operation) => (
                <div key={operation.id} className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{operation.name}</h4>
                    <Badge variant={operation.priority === "high" ? "destructive" : "secondary"}>
                      {operation.priority}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Type: {operation.type}</p>
                      <p className="text-muted-foreground">Duration: {operation.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Personnel: {operation.personnel}</p>
                      <div className="flex items-center gap-1">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            operation.status === "active" ? "bg-green-500" : "bg-yellow-500"
                          }`}
                        />
                        <span className="text-muted-foreground capitalize">{operation.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts and Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>System Alerts</CardTitle>
          <CardDescription>Recent alerts and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                {getAlertIcon(alert.type)}
                <div className="flex-1">
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {alert.priority}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Controls</CardTitle>
          <CardDescription>Quick access to critical operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col gap-2 bg-transparent">
              <AlertTriangle className="h-5 w-5" />
              Emergency Alert
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2 bg-transparent">
              <Radio className="h-5 w-5" />
              All Call
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2 bg-transparent">
              <Shield className="h-5 w-5" />
              Lockdown
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2 bg-transparent">
              <Activity className="h-5 w-5" />
              Status Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
