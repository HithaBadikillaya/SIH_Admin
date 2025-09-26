"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, Radio, Shield, AlertTriangle, User, Search, Filter } from "lucide-react"

export function MilitaryMessaging() {
  const [selectedChannel, setSelectedChannel] = useState("alpha-team")
  const [newMessage, setNewMessage] = useState("")
  const [userRole, setUserRole] = useState("member") // "admin" or "member"

  const channels = [
    { id: "alpha-team", name: "Alpha Team", members: 8, status: "active", approved: true },
    { id: "bravo-team", name: "Bravo Team", members: 6, status: "active", approved: true },
    { id: "charlie-team", name: "Charlie Team", members: 7, status: "deployed", approved: true },
    { id: "delta-team", name: "Delta Team", members: 5, status: "standby", approved: false },
    { id: "command", name: "Command Center", members: 12, status: "active", approved: true },
    { id: "logistics", name: "Logistics", members: 4, status: "active", approved: false },
  ]

  const messages = [
    {
      id: 1,
      sender: "SGT Johnson",
      rank: "Sergeant",
      team: "Alpha Team",
      message: "Position secured. Awaiting further orders.",
      timestamp: "14:32",
      priority: "normal",
      status: "delivered",
      encrypted: true,
    },
    {
      id: 2,
      sender: "CPL Martinez",
      rank: "Corporal",
      team: "Alpha Team",
      message: "Roger that. Moving to checkpoint Bravo.",
      timestamp: "14:35",
      priority: "normal",
      status: "read",
      encrypted: true,
    },
    {
      id: 3,
      sender: "LT Williams",
      rank: "Lieutenant",
      team: "Command",
      message: "Weather conditions deteriorating. Exercise caution.",
      timestamp: "14:40",
      priority: "high",
      status: "delivered",
      encrypted: true,
    },
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle message sending logic here
      setNewMessage("")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-balance mb-2">Secure Military Communications</h2>
          <p className="text-muted-foreground">End-to-end encrypted messaging between verified personnel</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={userRole === "admin" ? "destructive" : "default"}>
            {userRole === "admin" ? "Admin View" : "Member View"}
          </Badge>
          <Button variant="outline" size="sm" onClick={() => setUserRole(userRole === "admin" ? "member" : "admin")}>
            Switch Role
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Channels Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Radio className="h-5 w-5" />
              Communication Channels
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {channels.map((channel) => (
              <Button
                key={channel.id}
                variant={selectedChannel === channel.id ? "secondary" : "ghost"}
                className="w-full justify-start h-auto p-3"
                onClick={() => setSelectedChannel(channel.id)}
                disabled={!channel.approved && userRole !== "admin"}
              >
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{channel.name}</span>
                    <Badge
                      variant={
                        channel.status === "active"
                          ? "default"
                          : channel.status === "deployed"
                            ? "destructive"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {channel.status}
                    </Badge>
                    {!channel.approved && (
                      <Badge variant="outline" className="text-xs">
                        Pending Approval
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{channel.members} members</span>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Messages Area */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                {channels.find((c) => c.id === selectedChannel)?.name}
              </CardTitle>
              <div className="flex items-center gap-2">
                {userRole === "admin" && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    Admin View - Metadata Only
                  </Badge>
                )}
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardDescription>
              {userRole === "admin"
                ? "Admin view: Message metadata only - all content is end-to-end encrypted and hidden"
                : "Secure encrypted communication channel"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Messages List */}
            <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
              {userRole === "admin"
                ? messages.map((message) => (
                    <div
                      key={message.id}
                      className="flex gap-3 p-3 rounded-lg bg-muted/50 border-l-4 border-l-orange-500"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{message.sender}</span>
                          <Badge variant="outline" className="text-xs">
                            {message.rank}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {message.team}
                          </Badge>
                          <span className="text-xs text-muted-foreground ml-auto">{message.timestamp}</span>
                        </div>

                        {/* No message content shown to admin */}
                        <div className="bg-red-50 dark:bg-red-950/20 p-2 rounded border border-red-200 dark:border-red-800">
                          <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                            <Shield className="h-4 w-4" />
                            <span className="text-sm font-medium">CONTENT ENCRYPTED - ACCESS DENIED</span>
                          </div>
                          <p className="text-xs text-red-500 dark:text-red-400 mt-1">
                            Message content is end-to-end encrypted and cannot be viewed by administrators
                          </p>
                        </div>

                        <div className="flex items-center gap-2 mt-2">
                          {message.priority === "high" && (
                            <Badge variant="destructive" className="text-xs">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              High Priority
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            Status: {message.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Message ID: {message.id}
                          </Badge>
                          <Badge variant="outline" className="text-xs flex items-center gap-1">
                            <Shield className="h-3 w-3" />
                            E2E Encrypted
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))
                : messages.map((message) => (
                    <div key={message.id} className="flex gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{message.sender}</span>
                          <Badge variant="outline" className="text-xs">
                            {message.rank}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {message.team}
                          </Badge>
                          <span className="text-xs text-muted-foreground ml-auto">{message.timestamp}</span>
                        </div>
                        <p className="text-sm">{message.message}</p>
                        <div className="flex items-center gap-2 mt-2">
                          {message.priority === "high" && (
                            <Badge variant="destructive" className="text-xs">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              High Priority
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {message.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs flex items-center gap-1">
                            <Shield className="h-3 w-3" />
                            Encrypted
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>

            {/* Message Input */}
            <div className="border-t pt-4">
              {userRole === "admin" ? (
                <div className="p-4 bg-muted/50 rounded-lg text-center border border-red-200 dark:border-red-800">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-red-500" />
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">Admin Access Restricted</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Administrators cannot send or view messages - monitoring metadata only
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Type your secure message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 min-h-[60px]"
                    />
                    <div className="flex flex-col gap-2">
                      <Button onClick={handleSendMessage} size="sm">
                        <Send className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Shield className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      <Shield className="h-3 w-3 mr-1" />
                      End-to-End Encrypted
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Messages are automatically encrypted - admin cannot view content
                    </span>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Personnel Status */}
      <Card>
        <CardHeader>
          <CardTitle>Personnel Communication Status</CardTitle>
          <CardDescription>Who's currently online and available for communication</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "SGT Johnson", team: "Alpha Team", status: "online", lastSeen: "Active now" },
              { name: "CPL Martinez", team: "Bravo Team", status: "online", lastSeen: "Active now" },
              { name: "LT Williams", team: "Command", status: "away", lastSeen: "5 min ago" },
              { name: "PVT Davis", team: "Charlie Team", status: "deployed", lastSeen: "2 hours ago" },
            ].map((person, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full -mt-2 ml-7 border-2 border-background ${
                      person.status === "online"
                        ? "bg-green-500"
                        : person.status === "away"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{person.name}</p>
                  <p className="text-xs text-muted-foreground">{person.team}</p>
                  <p className="text-xs text-muted-foreground">{person.lastSeen}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
