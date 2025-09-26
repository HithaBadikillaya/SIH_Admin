"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MessageSquare,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Shield,
  AlertTriangle,
  ArrowRight,
} from "lucide-react"

export function MessageMetadataMonitor() {
  const [messageMetadata, setMessageMetadata] = useState([
    {
      id: "MSG-001",
      from: "SGT Johnson",
      fromTeam: "Alpha Team",
      to: "CPL Martinez",
      toTeam: "Alpha Team",
      timestamp: "2024-01-15 14:32:15",
      status: "delivered",
      priority: "normal",
      encrypted: true,
      size: "256 bytes",
      channel: "alpha-team",
      messageType: "text",
    },
    {
      id: "MSG-002",
      from: "LT Williams",
      fromTeam: "Command",
      to: "Alpha Team",
      toTeam: "Alpha Team",
      timestamp: "2024-01-15 14:35:22",
      status: "read",
      priority: "high",
      encrypted: true,
      size: "512 bytes",
      channel: "command-broadcast",
      messageType: "text",
    },
    {
      id: "MSG-003",
      from: "CPL Rodriguez",
      fromTeam: "Bravo Team",
      to: "Command Center",
      toTeam: "Command",
      timestamp: "2024-01-15 14:38:45",
      status: "pending",
      priority: "urgent",
      encrypted: true,
      size: "1.2 KB",
      channel: "bravo-command",
      messageType: "file",
    },
    {
      id: "MSG-004",
      from: "PVT Davis",
      fromTeam: "Charlie Team",
      to: "SGT Adams",
      toTeam: "Delta Team",
      timestamp: "2024-01-15 14:40:12",
      status: "failed",
      priority: "normal",
      encrypted: true,
      size: "128 bytes",
      channel: "inter-team",
      messageType: "text",
    },
    {
      id: "MSG-005",
      from: "Command Center",
      fromTeam: "Command",
      to: "All Teams",
      toTeam: "Broadcast",
      timestamp: "2024-01-15 14:42:30",
      status: "delivered",
      priority: "high",
      encrypted: true,
      size: "2.1 KB",
      channel: "all-teams",
      messageType: "broadcast",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "read":
        return <Eye className="h-4 w-4 text-blue-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <MessageSquare className="h-4 w-4" />
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>
      case "high":
        return <Badge variant="secondary">High</Badge>
      case "normal":
        return <Badge variant="outline">Normal</Badge>
      default:
        return <Badge variant="outline">Normal</Badge>
    }
  }

  const filteredMessages = messageMetadata.filter((msg) => {
    const matchesSearch =
      searchTerm === "" ||
      msg.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || msg.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-balance mb-2">Message Metadata Monitor</h2>
        <p className="text-muted-foreground">Track message delivery and routing without accessing content</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">247</p>
                <p className="text-sm text-muted-foreground">Total Messages</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold">234</p>
                <p className="text-sm text-muted-foreground">Delivered</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Failed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Message Tracking</CardTitle>
          <CardDescription>Monitor message flow and delivery status (content encrypted and private)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <Input
                placeholder="Search by sender, recipient, or message ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Button variant="outline">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {/* Message Metadata List */}
          <div className="space-y-3">
            {filteredMessages.map((msg) => (
              <div key={msg.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-medium">{msg.id}</span>
                    {getPriorityBadge(msg.priority)}
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      Encrypted
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(msg.status)}
                    <span className="text-sm capitalize">{msg.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">From</p>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{msg.from}</span>
                      <Badge variant="secondary" className="text-xs">
                        {msg.fromTeam}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>

                  <div>
                    <p className="text-muted-foreground">To</p>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{msg.to}</span>
                      <Badge variant="secondary" className="text-xs">
                        {msg.toTeam}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t text-xs text-muted-foreground">
                  <span>Channel: {msg.channel}</span>
                  <span>Size: {msg.size}</span>
                  <span>Type: {msg.messageType}</span>
                  <span>{msg.timestamp}</span>
                </div>

                {msg.status === "failed" && (
                  <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-red-700">Message delivery failed - retry required</span>
                    <Button size="sm" variant="outline" className="ml-auto bg-transparent">
                      Retry
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredMessages.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">No messages found matching your criteria</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
