import { useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
  usersAtom,
  getDataAtom,
  addUserAtom,
  editUserAtom,
  deleteUserAtom,
} from "../store/users";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HomeJotai = () => {
  const data = useAtomValue(usersAtom);
  const getData = useSetAtom(getDataAtom);
  const addUser = useSetAtom(addUserAtom);
  const editUser = useSetAtom(editUserAtom);
  const deleteUser = useSetAtom(deleteUserAtom);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const openAdd = () => {
    setEditId(null);
    setName("");
    setDescription("");
    setOpen(true);
  };

  const openEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setDescription(user.description);
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) await editUser({ id: editId, name, description });
    else await addUser({ name, description });
    setOpen(false);
  };

  return (
    <div className="p-4 space-y-4">
      <Button onClick={openAdd}>Add</Button>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.description}</TableCell>
              <TableCell className="space-x-2 text-right">
                <Button variant="outline" onClick={() => openEdit(user)}>Edit</Button>
                <Button variant="destructive" onClick={() => deleteUser(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editId ? "Edit" : "Add"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <Button type="submit">{editId ? "Save" : "Add"}</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomeJotai;