"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useGetUserAgentsAgentsGet } from "@/generated/queries/default/default";
import { Agent } from "@/generated/schemas/agent";
import { Activity, Clock, PlusCircle, User } from "lucide-react";
import { useState } from "react";

export const AgentList = () => {
  const agentsQuery = useGetUserAgentsAgentsGet();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const agents = agentsQuery.data?.agents || [];

  if (agentsQuery.isLoading) {
    return <LoadingSkeleton />;
  }

  if (agentsQuery.isError) {
    console.log(agentsQuery.error);
    return (
      <div className="text-center p-6 bg-red-50 rounded-lg">
        <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
        <p className="text-red-500">
          Unable to load agents. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Agents</h1>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <PlusCircle className="mr-2 h-5 w-5" /> Create Agent
            </Button>
          </DialogTrigger>
          <CreateAgentModal />
        </Dialog>
      </div>

      {agents.length === 0 ? (
        <EmptyState addAgent={() => setIsCreateModalOpen(true)} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      )}
    </div>
  );
};

function CreateAgentModal() {
  const [step, setStep] = useState(1);
  const [agentName, setAgentName] = useState("");
  const [seeds, setSeeds] = useState("");
  const [context, setContext] = useState("");

  const handleNext = () => {
    if (step === 1 && agentName && seeds) {
      setStep(2);
    }
  };

  const handleCreate = () => {
    // Here you would typically call an API to create the agent
    console.log({ agentName, seeds, context });
    // Close the modal or show a success message
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create New Agent</DialogTitle>
        <DialogDescription>
          {step === 1
            ? "Set up your agent's basic information."
            : "Add context for your agent."}
        </DialogDescription>
      </DialogHeader>
      {step === 1 ? (
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="seeds" className="text-right">
              Seeds
            </Label>
            <Textarea
              id="seeds"
              value={seeds}
              onChange={(e) => setSeeds(e.target.value)}
              className="col-span-3"
              placeholder="Enter seed information for your agent..."
            />
          </div>
        </div>
      ) : (
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="context" className="text-right">
              Context
            </Label>
            <Textarea
              id="context"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="col-span-3"
              placeholder="Add additional context for your agent..."
            />
          </div>
        </div>
      )}
      <DialogFooter>
        {step === 1 ? (
          <Button onClick={handleNext} disabled={!agentName || !seeds}>
            Next
          </Button>
        ) : (
          <Button onClick={handleCreate}>Create Agent</Button>
        )}
      </DialogFooter>
    </DialogContent>
  );
}

function EmptyState({ addAgent }: { addAgent: () => void }) {
  return (
    <Card className="text-center p-8 bg-gray-50">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-700">
          No Agents Yet
        </CardTitle>
        <CardDescription className="text-lg text-gray-500">
          Create your first agent to get started
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={addAgent}
          className="mt-4 bg-blue-600 hover:bg-blue-700"
        >
          <PlusCircle className="mr-2 h-5 w-5" /> Create Your First Agent
        </Button>
      </CardContent>
    </Card>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
          <User className="mr-2 h-6 w-6 text-blue-600" /> {agent.name}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {agent.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <Activity className="mr-2 h-4 w-4" /> Status: {agent.status}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="mr-2 h-4 w-4" /> Created:{" "}
          {new Date(agent.created_at).toLocaleDateString()}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full hover:bg-gray-100">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

function LoadingSkeleton() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-10 w-36" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <Card key={index} className="space-y-4">
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
