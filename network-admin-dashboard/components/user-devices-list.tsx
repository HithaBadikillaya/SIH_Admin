"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  MoreHorizontal,
  Smartphone,
  Laptop,
  Monitor,
  Tablet,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Plus,
} from "lucide-react"

const devices = [
  {
    id: 1,
    name: "MacBook Pro - John Doe",
    type: "laptop",
    ip: "192.168.1.101",
    mac: "00:1B:44:11:3A:B7",
    status: "online",
    layer: "Layer 2",
    dataAccess: "Full",
    lastSeen: "2 min ago",
    group: "Developers",
  },
  {
    id: 2,
    name: "iPhone 15 - Jane Smith",
    type: "mobile",
    ip: "192.168.1.102",
    mac: "00:1B:44:11:3A:B8",
    status: "online",
    layer: "Layer 1",
    dataAccess: "Limited",
    lastSeen: "5 min ago",
    group: "Marketing",
  },
  {
    id: 3,
    name: "Windows Desktop - IT Admin",
    type: "desktop",
    ip: "192.168.1.103",
    mac: "00:1B:44:11:3A:B9",
    status: "offline",
    layer: "Layer 2",
    dataAccess: "Admin",
    lastSeen: "1 hour ago",
    group: "IT Team",
  },
  {
    id: 4,
    name: "iPad Pro - Design Team",
    type: "tablet",
    ip: "192.168.1.104",
    mac: "00:1B:44:11:3A:C0",
    status: "warning",
    layer: "Layer 1",
    dataAccess: "Limited",
    lastSeen: "15 min ago",
    group: "Design",
  },
  {
    id: 5,
    name: "Samsung Galaxy - Sales Rep",
    type: "mobile",
    ip: "192.168.1.105",
    mac: "00:1B:44:11:3A:C1",
    status: "online",
    layer: "Layer 1",
    dataAccess: "Basic",
    lastSeen: "1 min ago",
    group: "Sales",
  },
]

const getDeviceIcon = (type: string) => {
  switch (type) {
    case "laptop":
      return <Laptop className="h-4 w-4" />
    case "mobile":
      return <Smartphone className="h-4 w-4" />
    case "desktop":
      return <Monitor className="h-4 w-4" />
    case "tablet":
      return <Tablet className="h-4 w-4" />
    default:
      return <Monitor className="h-4 w-4" />
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "online":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "offline":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    default:
      return <XCircle className="h-4 w-4 text-gray-500" />
  }
}

export function UserDevicesList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredDevices = devices.filter((device) => {
    const matchesSearch =
      device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.ip.includes(searchTerm) ||
      device.group.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || device.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-balance mb-2">User Devices</h2>
          <p className="text-muted-foreground">Manage and monitor connected devices across your network</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Device
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Devices</CardTitle>
            <Monitor className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+12 from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Online Now</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">91% uptime</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Layer 2 Access</CardTitle>
            <Badge variant="outline" className="text-xs">
              Advanced
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">Full data access</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Device Management</CardTitle>
          <CardDescription>Monitor and control device access and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search devices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device</TableHead>
                  <TableHead>Network Info</TableHead>
                  <TableHead>Access Level</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Group</TableHead>
                  <TableHead>Last Seen</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDevices.map((device) => (
                  <TableRow key={device.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">{getDeviceIcon(device.type)}</div>
                        <div>
                          <div className="font-medium">{device.name}</div>
                          <div className="text-sm text-muted-foreground">{device.mac}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-mono text-sm">{device.ip}</div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Badge variant="outline" className="text-xs">
                          {device.layer}
                        </Badge>
                        <div className="text-xs text-muted-foreground">{device.dataAccess}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(device.status)}
                        <span className="text-sm capitalize">{device.status}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{device.group}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">{device.lastSeen}</span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
