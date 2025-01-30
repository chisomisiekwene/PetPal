"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";

// Mock data for pets
const initialPets = [
  { id: 1, name: "Max", type: "Dog", breed: "Labrador", age: 3 },
  { id: 2, name: "Whiskers", type: "Cat", breed: "Siamese", age: 2 },
  { id: 3, name: "Polly", type: "Bird", breed: "Parrot", age: 5 },
  { id: 4, name: "Nemo", type: "Fish", breed: "Clownfish", age: 1 },
];

export default function RecentlyAdded() {
  const [pets, setPets] = useState(initialPets);
  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setNewPet({ ...newPet, type: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPets([
      ...pets,
      { ...newPet, id: pets.length + 1, age: parseInt(newPet.age) },
    ]);
    setNewPet({ name: "", type: "", breed: "", age: "" });
  };

  return (
    <div className=" space-y-6 ">
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <Dialog>
            <DialogContent className="bg-white rounded-xl ">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <DialogHeader className="">
                  <DialogTitle className="text-lg md:text-xl">
                    Add New Pet
                  </DialogTitle>
                  <DialogDescription className="text-base md:text-lg">
                    Fill in the details of the new pet here.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-3 py-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-lg">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={newPet.name}
                      onChange={handleInputChange}
                      className="col-span-3"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="type" className="text-lg">
                      Type
                    </Label>
                    <Select
                      onValueChange={handleSelectChange}
                      value={newPet.type}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select pet type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Dog">Dog</SelectItem>
                        <SelectItem value="Cat">Cat</SelectItem>
                        <SelectItem value="Bird">Bird</SelectItem>
                        <SelectItem value="Fish">Fish</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="breed" className="text-lg">
                      Breed
                    </Label>
                    <Input
                      id="breed"
                      name="breed"
                      value={newPet.breed}
                      onChange={handleInputChange}
                      className="col-span-3"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="age" className="text-lg">
                      Age
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      value={newPet.age}
                      onChange={handleInputChange}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    className="text-base font-semibold hover:bg-accent hover:text-white"
                  >
                    Add Pet
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg font-semibold">Name</TableHead>
                <TableHead className="text-lg font-semibold">Type</TableHead>
                <TableHead className="text-lg font-semibold">Breed</TableHead>
                <TableHead className="text-lg font-semibold">Age</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pets.map((pet) => (
                <TableRow key={pet.id}>
                  <TableCell className="text-base">{pet.name}</TableCell>
                  <TableCell className="text-base">{pet.type}</TableCell>
                  <TableCell className="text-base">{pet.breed}</TableCell>
                  <TableCell className="text-base">{pet.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
