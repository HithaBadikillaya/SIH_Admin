"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Plus, MapPin, Shield, User, Edit, Star, Activity, UserCheck, Clock } from "lucide-react"

export function MilitaryTeams() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Alpha Team",
      callSign: "ALPHA-01",
      leader: "SGT Johnson",
      members: 8,
      status: "active",
      location: "Base Camp Alpha",
      mission: "Perimeter Security",
      specialization: "Infantry",
      adminApproved: true,
      personnel: [
        { name: "SGT Johnson", rank: "Sergeant", role: "Team Leader", status: "active", approved: true },
        { name: "CPL Martinez", rank: "Corporal", role: "Communications", status: "active", approved: true },
        { name: "PVT Davis", rank: "Private", role: "Rifleman", status: "active", approved: true },
        { name: "PVT Wilson", rank: "Private", role: "Medic", status: "active", approved: true },
        { name: "SPC Brown", rank: "Specialist", role: "Engineer", status: "active", approved: true },
        { name: "PVT Taylor", rank: "Private", role: "Rifleman", status: "active", approved: true },
        { name: "CPL Anderson", rank: "Corporal", role: "Sniper", status: "active", approved: true },
        { name: "PVT Garcia", rank: "Private", role: "Support", status: "active", approved: true },
      ],
    },
    {
      id: 2,
      name: "Bravo Team",
      callSign: "BRAVO-02",
      leader: "LT Williams",
      members: 6,
      status: "deployed",
      location: "Sector 7",
      mission: "Reconnaissance",
      specialization: "Special Operations",
      adminApproved: true,
      personnel: [
        { name: "LT Williams", rank: "Lieutenant", role: "Team Leader", status: "deployed", approved: true },
        { name: "SGT Thompson", rank: "Sergeant", role: "Assistant Leader", status: "deployed", approved: true },
        { name: "CPL Lee", rank: "Corporal", role: "Scout", status: "deployed", approved: true },
        { name: "SPC Rodriguez", rank: "Specialist", role: "Communications", status: "deployed", approved: true },
        { name: "PVT Clark", rank: "Private", role: "Demolitions", status: "deployed", approved: true },
        { name: "PVT White", rank: "Private", role: "Medic", status: "deployed", approved: true },
      ],
    },
    {
      id: 3,
      name: "Charlie Team",
      callSign: "CHARLIE-03",
      leader: "CPL Jackson",
      members: 7,
      status: "standby",
      location: "Forward Operating Base",
      mission: "Quick Response",
      specialization: "Rapid Deployment",
      adminApproved: true,
      personnel: [
        { name: "CPL Jackson", rank: "Corporal", role: "Team Leader", status: "standby", approved: true },
        { name: "PVT Miller", rank: "Private", role: "Heavy Weapons", status: "standby", approved: true },
        { name: "PVT Moore", rank: "Private", role: "Rifleman", status: "standby", approved: true },
        { name: "SPC Harris", rank: "Specialist", role: "Tech Support", status: "standby", approved: true },
        { name: "PVT Martin", rank: "Private", role: "Driver", status: "standby", approved: true },
        { name: "PVT Lewis", rank: "Private", role: "Medic", status: "standby", approved: true },
        { name: "CPL Walker", rank: "Corporal", role: "Logistics", status: "standby", approved: true },
      ],
    },
    {
      id: 4,
      name: "Delta Team",
      callSign: "DELTA-04",
      leader: "SGT Adams",
      members: 5,
      status: "training",
      location: "Training Facility",
      mission: "Combat Training",
      specialization: "Urban Warfare",
      adminApproved: false,
      personnel: [
        { name: "SGT Adams", rank: "Sergeant", role: "Team Leader", status: "training", approved: true },
        { name: "CPL Young", rank: "Corporal", role: "Instructor", status: "training", approved: true },
        { name: "PVT King", rank: "Private", role: "Trainee", status: "training", approved: false },
        { name: "PVT Wright", rank: "Private", role: "Trainee", status: "training", approved: false },
        { name: "PVT Hill", rank: "Private", role: "Trainee", status: "training", approved: false },
      ],
    },
  ])

  const [selectedTeam, setSelectedTeam] = useState(teams[0])
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

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
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-balance mb-2">Military Teams</h2>
          <p className="text-muted-foreground">Manage Alpha, Bravo, Charlie, and Delta teams with admin approval</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create New Team
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Military Team</DialogTitle>
              <DialogDescription>Set up a new military team with personnel and mission details</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="team-name">Team Name</Label>
                <Input id="team-name" placeholder="e.g., Echo Team" />
              </div>
              <div>
                <Label htmlFor="call-sign">Call Sign</Label>
                <Input id="call-sign" placeholder="e.g., ECHO-05" />
              </div>
              <div>
                <Label htmlFor="specialization">Specialization</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="infantry">Infantry</SelectItem>
                    <SelectItem value="special-ops">Special Operations</SelectItem>
                    <SelectItem value="reconnaissance">Reconnaissance</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="logistics">Logistics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Create Team</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Teams List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Active Teams</CardTitle>
            <CardDescription>Select a team to view details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {teams.map((team) => (
              <Button
                key={team.id}
                variant={selectedTeam.id === team.id ? "secondary" : "ghost"}
                className="w-full justify-start h-auto p-3"
                onClick={() => setSelectedTeam(team)}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(team.status)}`} />
                  <div className="flex flex-col items-start gap-1 flex-1">
                    <div className="flex items-center gap-2 w-full">
                      <span className="font-medium">{team.name}</span>
                      <Badge variant={getStatusBadge(team.status)} className="text-xs ml-auto">
                        {team.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                      <span className="text-xs text-muted-foreground">{team.callSign}</span>
                      {!team.adminApproved && (
                        <Badge variant="outline" className="text-xs flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Pending
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{team.members} members</span>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Team Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {selectedTeam.name}
                </CardTitle>
                <CardDescription>
                  {selectedTeam.callSign} • {selectedTeam.specialization}
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={getStatusBadge(selectedTeam.status)}>{selectedTeam.status}</Badge>
                {selectedTeam.adminApproved ? (
                  <Badge variant="default" className="flex items-center gap-1">
                    <UserCheck className="h-3 w-3" />
                    Approved
                  </Badge>
                ) : (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Pending Approval
                  </Badge>
                )}
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Team Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Team Leader</span>
                </div>
                <p className="text-sm text-muted-foreground">{selectedTeam.leader}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <p className="text-sm text-muted-foreground">{selectedTeam.location}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Current Mission</span>
                </div>
                <p className="text-sm text-muted-foreground">{selectedTeam.mission}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Specialization</span>
                </div>
                <p className="text-sm text-muted-foreground">{selectedTeam.specialization}</p>
              </div>
            </div>

            {/* Personnel List */}
            <div>
              <h4 className="font-medium mb-3">Team Personnel</h4>
              <div className="space-y-2">
                {selectedTeam.personnel.map((person, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{person.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {person.rank}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {person.role}
                        </Badge>
                        {person.approved ? (
                          <Badge variant="default" className="text-xs flex items-center gap-1">
                            <UserCheck className="h-3 w-3" />
                            Approved
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-xs flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Pending
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(person.status)}`} />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
