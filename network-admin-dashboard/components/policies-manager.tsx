"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Plus,
  Settings,
  MoreHorizontal,
  Edit,
  Trash2,
  Lock,
  Unlock,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"

const policies = [
  {
    id: 1,
    name: "Guest Network Access",
    description: "Limited access policy for guest users",
    type: "Access Control",
    status: "active",
    priority: "medium",
    rules: 5,
    appliedTo: ["Guest Group"],
    lastModified: "2024-01-15",
    createdBy: "Admin",
  },
  {
    id: 2,
    name: "Developer Full Access",
    description: "Unrestricted access for development team",
    type: "Access Control",
    status: "active",
    priority: "high",
    rules: 12,
    appliedTo: ["Developers", "IT Team"],
    lastModified: "2024-01-20",
    createdBy: "IT Admin",
  },
  {
    id: 3,
    name: "Security Firewall Rules",
    description: "Network security and firewall configuration",
    type: "Security",
    status: "active",
    priority: "critical",
    rules: 8,
    appliedTo: ["All Users"],
    lastModified: "2024-01-25",
    createdBy: "Security Team",
  },
  {
    id: 4,
    name: "Bandwidth Limitation",
    description: "Bandwidth throttling for non-essential traffic",
    type: "QoS",
    status: "inactive",
    priority: "low",
    rules: 3,
    appliedTo: ["Marketing", "Sales"],
    lastModified: "2024-01-10",
    createdBy: "Network Admin",
  },
  {
    id: 5,
    name: "VPN Connection Policy",
    description: "Rules for VPN access and authentication",
    type: "VPN",
    status: "active",
    priority: "high",
    rules: 7,
    appliedTo: ["Remote Workers"],
    lastModified: "2024-02-01",
    createdBy: "IT Admin",
  },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "critical":
      return "bg-red-500/20 text-red-400"
    case "high":
      return "bg-orange-500/20 text-orange-400"
    case "medium":
      return "bg-yellow-500/20 text-yellow-400"
    case "low":
      return "bg-green-500/20 text-green-400"
    default:
      return "bg-gray-500/20 text-gray-400"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "inactive":
      return <Clock className="h-4 w-4 text-gray-500" />
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    default:
      return <Clock className="h-4 w-4 text-gray-500" />
  }
}

export function PoliciesManager() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [newPolicy, setNewPolicy] = useState({
    name: "",
    description: "",
    type: "",
    priority: "medium",
  })

  const filteredPolicies = policies.filter((policy) => {
    if (activeTab === "all") return true
    return policy.type.toLowerCase().replace(" ", "-") === activeTab
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-balance mb-2">Policies Management</h2>
          <p className="text-muted-foreground">Create and manage network policies and access rules</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Policy
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Create New Policy</DialogTitle>
              <DialogDescription>Define a new network policy with specific rules and conditions.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="policy-name">Policy Name</Label>
                <Input
                  id="policy-name"
                  placeholder="Enter policy name"
                  value={newPolicy.name}
                  onChange={(e) => setNewPolicy({ ...newPolicy, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="policy-description">Description</Label>
                <Textarea
                  id="policy-description"
                  placeholder="Describe the policy's purpose"
                  value={newPolicy.description}
                  onChange={(e) => setNewPolicy({ ...newPolicy, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Policy Type</Label>
                  <Select value={newPolicy.type} onValueChange={(value) => setNewPolicy({ ...newPolicy, type: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="access-control">Access Control</SelectItem>
                      <SelectItem value="security">Security</SelectItem>
                      <SelectItem value="qos">Quality of Service</SelectItem>
                      <SelectItem value="vpn">VPN</SelectItem>
                      <SelectItem value="firewall">Firewall</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Priority</Label>
                  <Select
                    value={newPolicy.priority}
                    onValueChange={(value) => setNewPolicy({ ...newPolicy, priority: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsCreateDialogOpen(false)}>Create Policy</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{policies.length}</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{policies.filter((p) => p.status === "active").length}</div>
            <p className="text-xs text-muted-foreground">Currently enforced</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Priority</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{policies.filter((p) => p.priority === "critical").length}</div>
            <p className="text-xs text-muted-foreground">High importance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Rules</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{policies.reduce((sum, policy) => sum + policy.rules, 0)}</div>
            <p className="text-xs text-muted-foreground">Across all policies</p>
          </CardContent>
        </Card>
      </div>

      {/* Policy Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Policy Management</CardTitle>
          <CardDescription>Configure and monitor network policies by category</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="access-control">Access</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="qos">QoS</TabsTrigger>
              <TabsTrigger value="vpn">VPN</TabsTrigger>
              <TabsTrigger value="firewall">Firewall</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              <div className="space-y-4">
                {filteredPolicies.map((policy) => (
                  <div key={policy.id} className="border rounded-lg p-4 hover:bg-muted/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(policy.status)}
                          <h3 className="font-semibold">{policy.name}</h3>
                        </div>
                        <Badge variant="outline" className={getPriorityColor(policy.priority)}>
                          {policy.priority}
                        </Badge>
                        <Badge variant="secondary">{policy.type}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch checked={policy.status === "active"} />
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{policy.description}</p>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground">{policy.rules} rules</span>
                        <span className="text-muted-foreground">Applied to: {policy.appliedTo.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground">
                          Modified {new Date(policy.lastModified).toLocaleDateString()}
                        </span>
                        <span className="text-muted-foreground">by {policy.createdBy}</span>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Policy Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Policy Templates</CardTitle>
          <CardDescription>Pre-configured policy templates for common scenarios</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <Lock className="h-5 w-5 text-red-500" />
                <h4 className="font-medium">Strict Security</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                High-security policy with restricted access and monitoring
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  8 rules
                </Badge>
                <Button variant="ghost" size="sm">
                  Use Template
                </Button>
              </div>
            </div>

            <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <Unlock className="h-5 w-5 text-green-500" />
                <h4 className="font-medium">Open Access</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Minimal restrictions for trusted internal networks</p>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  3 rules
                </Badge>
                <Button variant="ghost" size="sm">
                  Use Template
                </Button>
              </div>
            </div>

            <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-5 w-5 text-blue-500" />
                <h4 className="font-medium">Balanced Security</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Moderate security with reasonable access controls</p>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  5 rules
                </Badge>
                <Button variant="ghost" size="sm">
                  Use Template
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
