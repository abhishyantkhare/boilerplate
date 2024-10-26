"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSetsTwitterAccessTokenTwitterAccessTokenPost } from "@/generated/queries/default/default";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function TwitterAuthSuccess() {
  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const router = useRouter();

  const setTwitterAccessToken =
    useSetsTwitterAccessTokenTwitterAccessTokenPost();

  useEffect(() => {
    const setTwitterTokenCallback = async () => {
      if (isLoaded && isSignedIn) {
        // hack to make sure the token is loaded
        const token = await getToken();
        if (!token) {
          return;
        }
        await setTwitterAccessToken.mutate(
          {
            data: {
              auth_response_url: window.location.href,
            },
          },
          {
            onSuccess: () => {
              // Handle successful token setting
              console.log("Twitter access token set successfully");
            },
            onError: (error) => {
              setError("Failed to set Twitter access token");
              console.error("Error setting Twitter access token:", error);
            },
          }
        );
      }
    };
    setTwitterTokenCallback();
  }, [isLoaded, isSignedIn]);

  const handleConfirm = () => {
    setIsOpen(false);
    router.push("/create-agent");
  };

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {error || setTwitterAccessToken.isError
              ? "Twitter Authentication Failed"
              : "Twitter Authentication Successful"}
          </DialogTitle>
          <DialogDescription>
            {error || setTwitterAccessToken.isError
              ? `An error occurred: ${
                  error || "Failed to set Twitter access token"
                }`
              : "Your Twitter account has been successfully connected."}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={handleConfirm}
            disabled={!!error || setTwitterAccessToken.isError}
          >
            {error || setTwitterAccessToken.isError
              ? "Go Back"
              : "Continue Creating Agent"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
