"use client";

import * as React from "react";
import { ArrowUpDown, MoreHorizontal, Plus } from "lucide-react";

import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Badge } from "@/Components/ui/badge";
import { columns } from "./columns";
import AddPet from "./AddPet";
import { EditPetModal } from "./EditPet";

interface Pet {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  status: string;
  gender: string;
}

export default function PetsTable() {
  const [pets, setPets] = React.useState<Pet[]>([]);
  const [deletingPet, setDeletingPet] = React.useState(null)
  const [editingPet, setEditingPet] = React.useState<Pet | null>(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  

  // Handler to pass new pet data from AddPet
    const handleAddPet = (petData: Omit<Pet, 'id'>) => {
      const newPet = {
        ...petData,
        id: Date.now().toString(), // Generate a unique id
      };
    setPets((prevPets) => [...prevPets, newPet]);
  };
  const handleEditPet = (pet: Pet) => {
    setEditingPet(pet)
    setIsModalOpen(true)

  }

  // Handler to save edited pet
  const handleSaveEdit = (editedPet: Pet) => {
    setPets((prevPets) => prevPets.map((pet) => (pet.id === editedPet.id ? editedPet : pet)))
    setEditingPet(null)
    setIsModalOpen(false)

   
  }

  const handleDelete = (deletingPet: Pet) => {
    setPets((prevPets) =>
      prevPets.filter((pet) => pet.id !== deletingPet.id)
    );
  };
  

  return (
    <div className="w-full p-10">
      <AddPet onPetAdded={handleAddPet} />
      <div>
        {pets.length === 0 ? (
          
          <div className=" "><h1 className="text-center text-2xl font-bold">You have'nt added a pet yet</h1></div>
        ) : (
          <div className="rounded-xl border shadow-lg p-8">
            <Table>
              <TableHeader>
                <TableRow>
                  {columns.map((item, index) => (
                    <TableHead key={index} className="font-bold text-xl">
                      {item}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {pets.map((pet) => (
                  <TableRow key={pet.id} className="text-base">
                    <TableCell className="font-medium">{pet.name}</TableCell>
                    <TableCell>{pet.category}</TableCell>
                    <TableCell>&#8358;{pet.price.toFixed(2)}</TableCell>
                    <TableCell>{pet.quantity}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          pet.status === "available" ? "default" : "secondary"
                        }
                      >
                        {pet.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{pet.gender}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleEditPet(pet)}>Edit pet</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={()=>handleDelete(pet)}>Delete pet</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
      {editingPet && (
        <EditPetModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveEdit}
          pet={editingPet}
        />
      )}
    </div>
  );
}
