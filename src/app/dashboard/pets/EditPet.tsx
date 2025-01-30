"use client";

import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { DialogFooter } from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

interface Pet {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  status: string;
  gender: string;
}

interface EditPetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (editedPet: Pet) => void;
  pet: Pet;
}

export function EditPetModal({
  isOpen,
  onClose,
  onSave,
  pet,
}: EditPetModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: Pet) => {
    setIsLoading(true);

    try {
      onSave(values);
      toast.success("Pet edited successfully!");
      onClose();
    } catch (error) {
      toast.error("There was an error editing the pet.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-xl py-2 flex flex-col gap-3">
        <DialogHeader className="flex flex-col justify-center items-center mt-3">
          <DialogTitle className="font-bold text-xl uppercase">
            Edit Pet
          </DialogTitle>
          <DialogDescription className="font-medium text-lg">
            Make changes to the pet here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <Formik initialValues={pet} onSubmit={handleSubmit}>
          {({ handleChange, values, setFieldValue }) => (
            <Form className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 py-4">
                <div className="items-center gap-4">
                  <Label htmlFor="name" className="text-lg font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="items-center gap-4">
                  <Label htmlFor="category" className="text-lg font-medium">
                    Category
                  </Label>
                  <Input
                    id="category"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="items-center gap-4">
                  <Label htmlFor="price" className="text-lg font-medium">
                    Price
                  </Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={values.price}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="items-center gap-4">
                  <Label htmlFor="quantity" className="text-lg font-medium">
                    Quantity
                  </Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    value={values.quantity}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="items-center gap-4">
                  <Label htmlFor="status" className="text-lg font-medium">
                    Status
                  </Label>
                  <Select
                    value={values.status}
                    onValueChange={(value) => setFieldValue("status", value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="unavailable">Unavailable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="items-center gap-4">
                  <Label htmlFor="gender" className="text-lg font-medium">
                    Gender
                  </Label>
                  <Select
                    value={values.gender}
                    onValueChange={(value) => setFieldValue("gender", value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button
                  className="rounded-lg p-5 font-medium text-lg"
                  type="submit"
                >
                  {isLoading ? (
                    <div>
                      <Loader2 className="animate-spin" />
                      Please wait
                    </div>
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
