"use client"

import { AdminMemberApproval } from "@/components/admin-member-approval"
import { MessageMetadataMonitor } from "@/components/message-metadata-monitor"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-balance mb-2">KAVACH Admin Control</h1>
        <p className="text-muted-foreground">Secure administration of military communications and personnel access</p>
      </div>

      <Tabs defaultValue="member-approval" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="member-approval">Member Approval</TabsTrigger>
          <TabsTrigger value="message-monitoring">Message Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="member-approval">
          <AdminMemberApproval />
        </TabsContent>

        <TabsContent value="message-monitoring">
          <MessageMetadataMonitor />
        </TabsContent>
      </Tabs>
    </div>
  )
}
