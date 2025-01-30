import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Formik } from "formik";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify"; 

export default function AddPet({ onPetAdded }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false)
  const initialValues = {
    name: "",
    category: "",
    price: "",
    quantity: "",
    status: "",
    gender: "",
  };

  const handleSubmit = (values: any) => {
    setIsLoading(true);

    try {
      onPetAdded(values);
      toast.success("Pet added successfully!");
      setOpen(false)
    } catch (error) {
      toast.error("There was an error adding the pet.");
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div>
     <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
        <div className="flex justify-end">
          <DialogTrigger className="py-2 px-4 rounded-lg mb-2 bg-white text-accent text-base font-semibold border-2 border-accent">
            {" "}
            Add New Pet
          </DialogTrigger>
        </div>
        <DialogContent className="bg-white rounded-xl py-2 flex flex-col gap-3">
          <DialogHeader className="flex flex-col justify-center items-center mt-3">
            <DialogTitle className="font-bold text-xl uppercase">
              Add a new Pet
            </DialogTitle>
            <DialogDescription className="font-medium text-lg">
              Enter the details of the new pet here. Click "Add" when you're
              done.
            </DialogDescription>
          </DialogHeader>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({
              values,
              handleBlur,
              handleChange,
              setFieldValue,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-5 py-4">
                  <div className=" items-center gap-4">
                    <Label htmlFor="name" className="text-lg font-medium">
                      Name:
                    </Label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="name"
                      name="name"
                      value={values.name}
                    />
                  </div>
                  <div className=" items-center gap-4">
                    <Label htmlFor="category" className="text-lg font-medium">
                      Category:
                    </Label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="category"
                      name="category"
                      value={values.category}
                    />
                  </div>
                  <div className=" items-center gap-4">
                    <Label htmlFor="price" className="text-lg font-medium">
                      Price:
                    </Label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="price"
                      name="price"
                      value={values.price}
                      type="number"
                    />
                  </div>
                  <div className=" items-center gap-4">
                    <Label htmlFor="quantity" className="text-lg font-medium">
                      Quantity
                    </Label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="quantity"
                      name="quantity"
                      value={values.quantity}
                      type="number"
                    />
                  </div>
                  <div className=" items-center gap-4">
                    <Label htmlFor="status" className="text-lg font-medium">
                      Status
                    </Label>
                    <Select
                      name="status"
                      value={values.status}
                      onValueChange={(value) => setFieldValue("status", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="unavailable">Unavailable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className=" items-center gap-4">
                    <Label htmlFor="gender" className="text-lg font-medium">
                      Gender
                    </Label>
                    <Select
                      name="gender"
                      value={values.gender}
                      onValueChange={(value) => setFieldValue("gender", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter className="flex items-end ">
                  <Button
                    className="rounded-lg p-5 font-medium text-lg "
                    type="submit"
                    disabled={
                      !values.price ||
                      !values.name ||
                      !values.category ||
                      !values.gender ||
                      !values.quantity ||
                      !values.status
                    }
                  >
                    {isLoading ? (
                      <div>
                        <Loader2 className="animate-spin" />
                        Please wait
                      </div>
                    ) : (
                      "Add"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
