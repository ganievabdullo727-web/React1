import React, { useState } from "react";
import { PencilIcon, TrashIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function App() {
  const [data, setData] = useState([
    { name: "Hojiakbar", age: 17, status: true, id: 1 },
    { name: "Abdullo", age: 16, status: false, id: 2 },
    { name: "Abubakr", age: 15, status: true, id: 3 },
    { name: "Alisher", age: 18, status: false, id: 4 },
    { name: "Alisher", age: 18, status: true, id: 5 },
    { name: "Rajab", age: 15, status: false, id: 6 },
  ]);

  const [openEdit, setEdit] = useState(false);
  const [openAdd, setAdd] = useState(false);
  const [elemEdit, setElemEdit] = useState(null);

  const handleDelete = (id) => {
    setData((prev) => prev.filter((el) => el.id !== id));
  };

  const handleEdit = (el) => {
    setElemEdit({ ...el });
    setEdit(true);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    if (!elemEdit) return;

    setData((prev) =>
      prev.map((el) =>
        el.id === elemEdit.id ? { ...elemEdit, age: Number(elemEdit.age) } : el,
      ),
    );

    setEdit(false);
    setElemEdit(null);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value.trim();
    const age = Number(form.age.value);

    if (!name || !form.age.value || !Number.isFinite(age) || age <= 0) {
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      age,
      status: false,
    };

    setData((prev) => [...prev, newUser]);
    setAdd(false);
    form.reset();
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Activities</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((el) => (
            <TableRow key={el.id}>
              <TableCell className="font-medium">{el.name}</TableCell>

              <TableCell>{el.age}</TableCell>

              <TableCell
                className={`${
                  el.status ? "text-green-900" : "text-red-900"
                } font-bold`}
              >
                {el.status ? "Active" : "Inactive"}
              </TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="outline">Actions</Button>}
                  />

                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => handleEdit(el)}>
                        <PencilIcon />
                        Edit
                      </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />

                    <DropdownMenuGroup>
                      <DropdownMenuItem
                        onClick={() => handleDelete(el.id)}
                        variant="destructive"
                      >
                        <TrashIcon />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={openEdit} onOpenChange={setEdit}>
        <DialogContent className="sm:max-w-sm">
          <form onSubmit={handleSubmitEdit}>
            <DialogHeader>
              <DialogTitle className="text-center font-bold pb-[10px]">
                Edit profile
              </DialogTitle>
            </DialogHeader>

            <FieldGroup>
              <Field>
                <Label htmlFor="edit-name">Name</Label>
                <Input
                  id="edit-name"
                  name="name"
                  required
                  value={elemEdit?.name ?? ""}
                  onChange={(e) =>
                    setElemEdit((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </Field>

              <Field>
                <Label htmlFor="edit-age">Age</Label>
                <Input
                  id="edit-age"
                  name="age"
                  type="number"
                  min="1"
                  required
                  value={elemEdit?.age ?? ""}
                  onChange={(e) =>
                    setElemEdit((prev) => ({
                      ...prev,
                      age: e.target.value,
                    }))
                  }
                />
              </Field>
            </FieldGroup>

            <DialogFooter className="mt-4">
              <DialogClose
                render={
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                }
              />

              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={openAdd} onOpenChange={setAdd}>
        <DialogTrigger render={<Button variant="outline">Add User</Button>} />

        <DialogContent className="sm:max-w-sm">
          <form onSubmit={handleAdd}>
            <DialogHeader>
              <DialogTitle className="text-center pb-[10px]">
                Add User
              </DialogTitle>
            </DialogHeader>

            <FieldGroup>
              <Field>
                <Label htmlFor="add-name">Name</Label>
                <Input placeholder="Name" id="add-name" name="name" required />
              </Field>

              <Field>
                <Label htmlFor="add-age">Age</Label>
                <Input
                  placeholder="Age"
                  id="add-age"
                  name="age"
                  type="number"
                  min="1"
                  required
                />
              </Field>
            </FieldGroup>

            <DialogFooter className="mt-4">
              <DialogClose
                render={
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                }
              />

              <Button type="submit">Add User</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
