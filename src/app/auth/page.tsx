import { Button } from "../../Components/ui/button"
import { Input } from "../../Components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../Components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../Components/ui/card"
import { Label } from "../../Components/ui/label"
import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"

export default function AuthPage() {
  
console.log("Auth")
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary p-4 ">
      <Card className="w-full max-w-lg bg-white md:p-5">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-center">Welcome</CardTitle>
          <CardDescription className="text-center text-lg md:text-xl">Sign in or create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full flex flex-col gap-3 ">
            <TabsList className="grid w-full grid-cols-2 bg-primary items-center justify-center">
              <TabsTrigger className="text-base" value="signin">Sign In</TabsTrigger>
              <TabsTrigger className="text-base"  value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
           <Login/>
            </TabsContent>
            <TabsContent value="signup">
             <Signup/>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button variant="outline" className=" w-full hover:bg-accent hover:text-white">
            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
              <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
            Sign in with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

