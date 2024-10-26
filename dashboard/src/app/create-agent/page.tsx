"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  getGetUserAgentsAgentsGetQueryKey,
  useCreateAgentAgentsPost,
  useGenerateTwitterAuthUrlTwitterAuthUrlPost,
  useGetSeedsByUserSeedsGet,
} from "@/generated/queries/default/default";
import { Seed } from "@/generated/schemas/seed";
import { SeedType } from "@/generated/schemas/seedType";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CreateAgentPage() {
  const [agentName, setAgentName] = useState(
    localStorage.getItem("agentName") || ""
  );
  const [context, setContext] = useState(
    localStorage.getItem("agentContext") || ""
  );
  const [agentSeedIds, setAgentSeedIds] = useState<string[]>(
    JSON.parse(localStorage.getItem("agentSeedIds") || "[]")
  );
  const router = useRouter();

  const generateTwitterAuthUrl = useGenerateTwitterAuthUrlTwitterAuthUrlPost();
  const createAgent = useCreateAgentAgentsPost({
    mutation: {
      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: getGetUserAgentsAgentsGetQueryKey(),
        });
        router.push(`/`);
      },
    },
  });
  const { data: seedsResponse, isLoading: isSeedsLoading } =
    useGetSeedsByUserSeedsGet();

  const queryClient = useQueryClient();

  const seeds = seedsResponse?.seeds || [];
  const twitterSeed = seeds.find(
    (seed: Seed) => seed.seed_type === SeedType.twitter
  );

  useEffect(() => {
    localStorage.setItem("agentName", agentName);
    localStorage.setItem("agentContext", context);
    localStorage.setItem("agentSeedIds", JSON.stringify(agentSeedIds));
  }, [agentName, context, agentSeedIds]);

  const handleAgentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setAgentName(newName);
    localStorage.setItem("agentName", newName);
  };

  const handleContextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContext = e.target.value;
    setContext(newContext);
    localStorage.setItem("agentContext", newContext);
  };

  const handleCreate = () => {
    localStorage.removeItem("agentName");
    localStorage.removeItem("agentContext");
    localStorage.removeItem("agentSeedIds");
    createAgent.mutate({
      data: {
        name: agentName,
        context,
        seed_ids: agentSeedIds,
      },
    });
  };

  const handleConnectTwitter = async () => {
    try {
      const result = await generateTwitterAuthUrl.mutateAsync();
      if (result.auth_url) {
        router.push(result.auth_url);
      }
    } catch (error) {
      console.error("Error connecting to Twitter:", error);
    }
  };

  const onCheckTwitterSeed = (checked: boolean) => {
    console.log(checked, twitterSeed?.id);
    if (checked) {
      console.log("setting id");
      setAgentSeedIds([...agentSeedIds, twitterSeed?.id]);
    } else {
      setAgentSeedIds(agentSeedIds.filter((id) => id !== twitterSeed?.id));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Agent</h1>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            value={agentName}
            onChange={handleAgentNameChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="seeds" className="text-right">
            Seeds
          </Label>
          <div className="col-span-3">
            {isSeedsLoading ? (
              <div>Loading seeds...</div>
            ) : (
              <div className="flex items-center">
                <Checkbox
                  className="mr-2"
                  onCheckedChange={onCheckTwitterSeed}
                />
                {twitterSeed ? (
                  <div className="text-blue-600">Twitter (connected)</div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={handleConnectTwitter}
                    disabled={generateTwitterAuthUrl.isLoading}
                  >
                    {generateTwitterAuthUrl.isLoading
                      ? "Loading..."
                      : "Connect with Twitter"}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-4 items-start gap-4">
          <Label htmlFor="context" className="text-right pt-2">
            Context
          </Label>
          <Textarea
            id="context"
            value={context}
            onChange={handleContextChange}
            className="col-span-3"
            placeholder="Add additional context for your agent..."
            rows={4}
          />
        </div>
      </div>
      <Button
        onClick={handleCreate}
        disabled={!agentName || !context || !agentSeedIds.length}
        className="mt-4"
      >
        Create
      </Button>
    </div>
  );
}
