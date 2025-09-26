"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Server, Wifi, Database, Shield, Monitor, Settings } from "lucide-react"

export function NetworkTopology() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-balance mb-2">Network Topology</h2>
        <p className="text-muted-foreground">Visual representation of your network infrastructure</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Network Architecture</CardTitle>
          <CardDescription>Current network layout and connections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative min-h-[600px] bg-muted/20 rounded-lg p-8">
            {/* Admin Dashboard - Center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-primary/20 border-2 border-primary rounded-lg p-6 text-center min-w-[200px]">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold text-lg">Admin Dashboard</h3>
                <Badge variant="secondary" className="mt-2">
                  Active
                </Badge>
              </div>
            </div>

            {/* Create Groups - Top */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-card border rounded-lg p-4 text-center min-w-[150px]">
                <Settings className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">Create Groups</p>
              </div>
              <div className="absolute top-full left-1/2 w-0.5 h-16 bg-border transform -translate-x-1/2"></div>
            </div>

            {/* Monitor - Left */}
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
              <div className="bg-card border rounded-lg p-4 text-center min-w-[120px]">
                <Monitor className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">Monitor</p>
              </div>
              <div className="absolute top-1/2 left-full w-16 h-0.5 bg-border transform -translate-y-1/2"></div>
            </div>

            {/* Create Policies - Right */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
              <div className="bg-card border rounded-lg p-4 text-center min-w-[140px]">
                <Shield className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">Create Policies</p>
              </div>
              <div className="absolute top-1/2 right-full w-16 h-0.5 bg-border transform -translate-y-1/2"></div>
            </div>

            {/* User Device Left */}
            <div className="absolute bottom-20 left-16">
              <div className="bg-card border rounded-lg p-4 text-center min-w-[140px]">
                <div className="relative">
                  <div className="bg-muted rounded-full p-3 mb-2 mx-auto w-fit">
                    <Database className="h-6 w-6" />
                  </div>
                  <div className="absolute inset-0 border-2 border-orange-500/50 rounded-full"></div>
                  <div className="absolute inset-2 border border-orange-300/50 rounded-full"></div>
                </div>
                <p className="text-sm font-medium">User Device</p>
                <p className="text-xs text-muted-foreground">Layer 2 | Layer 1</p>
                <Badge variant="outline" className="mt-1 text-xs">
                  Data
                </Badge>
              </div>
              <div className="absolute top-1/2 left-full w-12 h-0.5 bg-border transform -translate-y-1/2"></div>
            </div>

            {/* VPN */}
            <div className="absolute bottom-20 left-1/3">
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center min-w-[120px]">
                <Wifi className="h-8 w-8 mx-auto mb-2 text-green-400" />
                <h3 className="font-semibold">VPN</h3>
              </div>
              <div className="absolute top-1/2 left-full w-12 h-0.5 bg-border transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-full w-12 h-0.5 bg-border transform -translate-y-1/2"></div>
            </div>

            {/* SERVER */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center min-w-[120px]">
                <Server className="h-8 w-8 mx-auto mb-2 text-green-400" />
                <h3 className="font-semibold">SERVER</h3>
              </div>
              <div className="absolute bottom-full left-1/2 w-0.5 h-16 bg-border transform -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-full w-12 h-0.5 bg-border transform -translate-y-1/2"></div>
            </div>

            {/* User Device Right */}
            <div className="absolute bottom-20 right-16">
              <div className="bg-card border rounded-lg p-4 text-center min-w-[140px]">
                <div className="relative">
                  <div className="bg-muted rounded-full p-3 mb-2 mx-auto w-fit">
                    <Database className="h-6 w-6" />
                  </div>
                  <div className="absolute inset-0 border-2 border-yellow-500/50 rounded-full"></div>
                </div>
                <p className="text-sm font-medium">User Device</p>
                <p className="text-xs text-muted-foreground">Layer 1</p>
                <Badge variant="outline" className="mt-1 text-xs">
                  Data
                </Badge>
              </div>
              <div className="absolute top-1/2 right-full w-12 h-0.5 bg-border transform -translate-y-1/2"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Connection Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">VPN Gateway</span>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                  Online
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Main Server</span>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                  Online
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">User Devices</span>
                <Badge variant="secondary">156 Connected</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Network Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Latency</span>
                <span className="text-sm font-mono">12ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Throughput</span>
                <span className="text-sm font-mono">1.2 Gbps</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Packet Loss</span>
                <span className="text-sm font-mono">0.01%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                <Settings className="h-4 w-4 mr-2" />
                Configure VPN
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                <Server className="h-4 w-4 mr-2" />
                Server Settings
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                <Monitor className="h-4 w-4 mr-2" />
                View Logs
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
