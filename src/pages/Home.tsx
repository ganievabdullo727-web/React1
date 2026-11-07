import { useState } from "react";
import { useTodo } from "../store/todo";
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

let Home = () => {
  let { data, deleteUser, editUser, addUser } = useTodo();

  let [addOpen, setAddOpen] = useState(false);
  let [editOpen, setEditOpen] = useState(false);
  let [editId, setEditId] = useState(null);
  let [name, setName] = useState("");
  let [job, setJob] = useState("");

  let openAdd = () => {
    setName("");
    setJob("");
    setAddOpen(true);
  };

  let openEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setJob(user.job);
    setEditOpen(true);
  };

  let handleAdd = (e) => {
    e.preventDefault();
    addUser({ name, job });
    setAddOpen(false);
  };

  let handleEdit = (e) => {
    e.preventDefault();
    editUser(editId, { name, job });
    setEditOpen(false);
  };

  return (
    <div className="w-full space-y-4 p-4">
      <Button onClick={openAdd}>Add user</Button>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Job</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.job}</TableCell>
              <TableCell className="space-x-2 text-right">
                <Button variant="outline" onClick={() => openEdit(user)}>
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add user</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAdd} className="space-y-4">
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <Button type="submit">Add</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit user</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEdit} className="space-y-4">
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <Button type="submit">Save</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
