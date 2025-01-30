import React from "react";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../Components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../Components/ui/card";
import { Label } from "../../Components/ui/label";

export default function Login() {
  return (
    <div>
      <form>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signin-email">Email</Label>
            <Input
              id="signin-email"
              placeholder="m@example.com"
              type="email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signin-password">Password</Label>
            <Input id="signin-password" type="password" required />
          </div>
          <Button
            type="submit"
            className="w-full hover:bg-accent hover:text-white"
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
