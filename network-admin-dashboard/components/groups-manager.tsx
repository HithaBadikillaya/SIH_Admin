"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Plus,
  Settings,
  MoreHorizontal,
  Edit,
  Trash2,
  UserPlus,
  Shield,
  Building,
  Briefcase,
} from "lucide-react"

const groups = [
  {
    id: 1,
    name: "Developers",
    description: "Software development team with full system access",
    memberCount: 24,
    permissions: ["Full Access", "Admin Panel", "Database"],
    color: "blue",
    icon: "code",
    created: "2024-01-15",
  },
  {
    id: 2,
    name: "Marketing",
    description: "Marketing team with limited access to promotional tools",
    memberCount: 12,
    permissions: ["Content Management", "Analytics"],
    color: "green",
    icon: "megaphone",
    created: "2024-01-20",
  },
  {
    id: 3,
    name: "IT Team",
    description: "IT administrators with system management privileges",
    memberCount: 8,
    permissions: ["System Admin", "User Management", "Security"],
    color: "red",
    icon: "shield",
    created: "2024-01-10",
  },
  {
    id: 4,
    name: "Sales",
    description: "Sales representatives with CRM and client data access",
    memberCount: 18,
    permissions: ["CRM Access", "Client Data", "Reports"],
    color: "purple",
    icon: "briefcase",
    created: "2024-01-25",
  },
  {
    id: 5,
    name: "Design",
    description: "Design team with creative tools and asset management",
    memberCount: 6,
    permissions: ["Asset Management", "Design Tools"],
    color: "orange",
    icon: "palette",
    created: "2024-02-01",
  },
]

const getGroupIcon = (icon: string) => {
  switch (icon) {
    case "shield":
      return <Shield className="h-5 w-5" />
    case "briefcase":
      return <Briefcase className="h-5 w-5" />
    case "building":
      return <Building className="h-5 w-5" />
    default:
      return <Users className="h-5 w-5" />
  }
}

export function GroupsManager() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newGroup, setNewGroup] = useState({
    name: "",
    description: "",
    permissions: [] as string[],
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-balance mb-2">Groups Management</h2>
          <p className="text-muted-foreground">Create and manage user groups with specific permissions</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Group
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Group</DialogTitle>
              <DialogDescription>
                Set up a new user group with specific permissions and access levels.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="group-name">Group Name</Label>
                <Input
                  id="group-name"
                  placeholder="Enter group name"
                  value={newGroup.name}
                  onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="group-description">Description</Label>
                <Textarea
                  id="group-description"
                  placeholder="Describe the group's purpose"
                  value={newGroup.description}
                  onChange={(e) => setNewGroup({ ...newGroup, description: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Default Permissions</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select permission template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Access</SelectItem>
                    <SelectItem value="advanced">Advanced Access</SelectItem>
                    <SelectItem value="admin">Admin Access</SelectItem>
                    <SelectItem value="custom">Custom Permissions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsCreateDialogOpen(false)}>Create Group</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Groups</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{groups.length}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{groups.reduce((sum, group) => sum + group.memberCount, 0)}</div>
            <p className="text-xs text-muted-foreground">Across all groups</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admin Groups</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">With elevated permissions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Group Size</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(groups.reduce((sum, group) => sum + group.memberCount, 0) / groups.length)}
            </div>
            <p className="text-xs text-muted-foreground">Members per group</p>
          </CardContent>
        </Card>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Card key={group.id} className="relative">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-${group.color}-500/20`}>{getGroupIcon(group.icon)}</div>
                  <div>
                    <CardTitle className="text-lg">{group.name}</CardTitle>
                    <CardDescription className="text-sm">{group.memberCount} members</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{group.description}</p>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium mb-2">Permissions</h4>
                  <div className="flex flex-wrap gap-1">
                    {group.permissions.map((permission, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-xs text-muted-foreground">
                    Created {new Date(group.created).toLocaleDateString()}
                  </span>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Settings className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Group Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Group Templates</CardTitle>
          <CardDescription>Quick setup templates for common group types</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-5 w-5 text-red-500" />
                <h4 className="font-medium">Admin Template</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Full system access with administrative privileges</p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  System Admin
                </Badge>
                <Badge variant="outline" className="text-xs">
                  User Management
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Security
                </Badge>
              </div>
            </div>

            <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-5 w-5 text-blue-500" />
                <h4 className="font-medium">Standard User</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Basic access for regular employees</p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  Basic Access
                </Badge>
                <Badge variant="outline" className="text-xs">
                  File Sharing
                </Badge>
              </div>
            </div>

            <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="h-5 w-5 text-green-500" />
                <h4 className="font-medium">Department Lead</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Enhanced permissions for team leaders</p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  Team Management
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Reports
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Analytics
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
