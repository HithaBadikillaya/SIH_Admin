"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserCheck, UserX, Clock, Shield, Search, Filter, AlertCircle } from "lucide-react"

export function AdminMemberApproval() {
  const [pendingRequests, setPendingRequests] = useState([
    {
      id: 1,
      name: "PVT Thompson",
      rank: "Private",
      serviceId: "US12345678",
      requestedTeam: "Alpha Team",
      requestDate: "2024-01-15",
      clearanceLevel: "Secret",
      reason: "Transfer from logistics division for combat operations",
      status: "pending",
      priority: "normal",
    },
    {
      id: 2,
      name: "CPL Rodriguez",
      rank: "Corporal",
      serviceId: "US87654321",
      requestedTeam: "Bravo Team",
      requestDate: "2024-01-14",
      clearanceLevel: "Top Secret",
      reason: "Specialized communications expertise needed for reconnaissance",
      status: "pending",
      priority: "high",
    },
    {
      id: 3,
      name: "SPC Williams",
      rank: "Specialist",
      serviceId: "US11223344",
      requestedTeam: "Charlie Team",
      requestDate: "2024-01-13",
      clearanceLevel: "Confidential",
      reason: "Technical support for rapid deployment operations",
      status: "pending",
      priority: "normal",
    },
  ])

  const [approvedMembers, setApprovedMembers] = useState([
    {
      id: 1,
      name: "SGT Johnson",
      rank: "Sergeant",
      team: "Alpha Team",
      approvedDate: "2024-01-10",
      clearanceLevel: "Secret",
      status: "active",
    },
    {
      id: 2,
      name: "LT Williams",
      rank: "Lieutenant",
      team: "Bravo Team",
      approvedDate: "2024-01-08",
      clearanceLevel: "Top Secret",
      status: "active",
    },
  ])

  const handleApprove = (requestId: number) => {
    const request = pendingRequests.find((r) => r.id === requestId)
    if (request) {
      // Move to approved members
      setApprovedMembers((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: request.name,
          rank: request.rank,
          team: request.requestedTeam,
          approvedDate: new Date().toISOString().split("T")[0],
          clearanceLevel: request.clearanceLevel,
          status: "active",
        },
      ])

      // Remove from pending
      setPendingRequests((prev) => prev.filter((r) => r.id !== requestId))
    }
  }

  const handleReject = (requestId: number) => {
    setPendingRequests((prev) => prev.filter((r) => r.id !== requestId))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-balance mb-2">Member Access Control</h2>
        <p className="text-muted-foreground">
          Admin approval required for all team memberships and secure communications
        </p>
      </div>

      {/* Pending Requests */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Pending Membership Requests
              </CardTitle>
              <CardDescription>Review and approve personnel for team access</CardDescription>
            </div>
            <Badge variant="secondary">{pendingRequests.length} pending</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <div key={request.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{request.name}</h4>
                      <Badge variant="outline">{request.rank}</Badge>
                      <Badge variant="secondary">{request.serviceId}</Badge>
                      {request.priority === "high" && (
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          High Priority
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        <strong>Requested Team:</strong> {request.requestedTeam}
                      </p>
                      <p>
                        <strong>Clearance Level:</strong> {request.clearanceLevel}
                      </p>
                      <p>
                        <strong>Request Date:</strong> {request.requestDate}
                      </p>
                      <p>
                        <strong>Reason:</strong> {request.reason}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleApprove(request.id)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <UserCheck className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleReject(request.id)}>
                      <UserX className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            {pendingRequests.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">No pending membership requests</div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Approved Members */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Approved Team Members
              </CardTitle>
              <CardDescription>Personnel with verified access to secure communications</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {approvedMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{member.name}</span>
                      <Badge variant="outline">{member.rank}</Badge>
                      <Badge variant="secondary">{member.team}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Clearance: {member.clearanceLevel} • Approved: {member.approvedDate}
                    </div>
                  </div>
                </div>
                <Badge variant="default">{member.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Manual Add Member */}
      <Card>
        <CardHeader>
          <CardTitle>Manually Add Member</CardTitle>
          <CardDescription>Directly approve personnel for team access</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="member-name">Personnel Name</Label>
              <Input id="member-name" placeholder="e.g., SGT Smith" />
            </div>
            <div>
              <Label htmlFor="member-rank">Rank</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select rank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="corporal">Corporal</SelectItem>
                  <SelectItem value="sergeant">Sergeant</SelectItem>
                  <SelectItem value="lieutenant">Lieutenant</SelectItem>
                  <SelectItem value="captain">Captain</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="member-team">Assign to Team</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select team" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alpha">Alpha Team</SelectItem>
                  <SelectItem value="bravo">Bravo Team</SelectItem>
                  <SelectItem value="charlie">Charlie Team</SelectItem>
                  <SelectItem value="delta">Delta Team</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="clearance-level">Clearance Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select clearance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="confidential">Confidential</SelectItem>
                  <SelectItem value="secret">Secret</SelectItem>
                  <SelectItem value="top-secret">Top Secret</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="mt-4">
            <UserCheck className="h-4 w-4 mr-2" />
            Add Member
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
