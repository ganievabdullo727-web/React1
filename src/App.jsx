import React, { useEffect, useState } from "react";
import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
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
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

let api = "https://to-dos-api.softclub.tj/api/to-dos";

const App = () => {
  let [addOpen, setAddOpen] = useState(false);
let [name, setName] = useState("");
let [description, setDescription] = useState("");
  let [open, setOpen] = useState(false);
  let [editUser, setEditUser] = useState(null);
  let [editName, setEditName] = useState("");
  let [editStatus, setEditStatus] = useState(false);
  let [data, setData] = useState([]);

  async function get() {
    try {
      let { data } = await axios.get(api);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    get()
  },[]);

  async function deleteUser(id) {
    try {
      await axios.delete(
        "https://to-dos-api.softclub.tj/api/to-dos?id=" + `${id}`,
      );
      get();
    } catch (error) {
      console.log(error);
    }
  }

async function editUserData(e) {
  e.preventDefault();

  try {
    await axios.put(api, {
      id: editUser.id,
      name: editName,
      description: editUser.description,
    });

    get();
    setOpen(false);
  } catch (error) {
    console.log(error);
  }
}

async function addUser(e) {
  e.preventDefault();

  try {
    let formData = new FormData();
    formData.append("Name", name);
    formData.append("Description", description);
    formData.append("Images", "");

    await axios.post(api, formData);

    get();
    setAddOpen(false);
    setName("");
    setDescription("");
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div>

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
  <Button onClick={() => setAddOpen(true)}>Add</Button>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add user</DialogTitle>
    </DialogHeader>

    <form onSubmit={addUser} className="space-y-4">
      <div>
        <Label>Name</Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <Label>Description</Label>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <Button type="submit">Save</Button>
    </form>
  </DialogContent>
</Dialog>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit user</DialogTitle>
          </DialogHeader>

<form onSubmit={editUserData} className="space-y-4">
  <div>
    <Label>Name</Label>
    <Input
      value={editName}
      onChange={(e) => setEditName(e.target.value)}
    />
  </div>
    <Button type="submit">Save</Button>
</form>
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((e) => (
            <TableRow key={e.id}>
              <TableCell className="font-medium">{e.name}</TableCell>

              <TableCell>{e.isCompleted ? "Active" : "Inactive"}</TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button variant="ghost" size="icon" className="size-8">
                        <MoreHorizontalIcon />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    }
                  />

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => {
                        setEditUser(e);
                        setEditName(e.name);
                        setEditStatus(e.isCompleted);
                        setOpen(true);
                      }}
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      variant="destructive"
                      onClick={() => deleteUser(e.id)}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default App;
