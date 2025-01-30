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

export default function Signup() {
  return (
    <div>
      <form>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-name">Name</Label>
            <Input id="signup-name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input
              id="signup-email"
              placeholder="m@example.com"
              type="email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input id="signup-password" type="password" required />
          </div>
          <Button
            type="submit"
            className=" w-full  hover:bg-accent hover:text-white"
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
