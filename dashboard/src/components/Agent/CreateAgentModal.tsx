import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function CreateAgentModal() {
  const [context, setContext] = useState("");

  const handleCreate = () => {
    // Here you would typically call an API to create the agent
    console.log({ context });
    // Close the modal or show a success message
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Context to Your Agent</DialogTitle>
        <DialogDescription>
          Provide additional context for your agent.
        </DialogDescription>
      </DialogHeader>
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
      <DialogFooter>
        <Button onClick={handleCreate}>Create Agent</Button>
      </DialogFooter>
    </DialogContent>
  );
}
