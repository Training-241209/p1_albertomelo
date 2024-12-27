import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { useState } from "react";
  import { useUpdateDescription } from "../hooks/use-reimbursementdescriptionupdate";
  
  interface EditDescriptionDialogProps {
    reimbursementId: number;
    currentDescription: string;
  }
  
  export function EditDescriptionDialog({
    reimbursementId,
    currentDescription,
  }: EditDescriptionDialogProps) {
    const [description, setDescription] = useState(currentDescription);
    const updateDescriptionMutation = useUpdateDescription();
  
    const handleSave = () => {
      updateDescriptionMutation.mutate({
        reimbId: reimbursementId,
        newDescription: description,
      });
    };
  
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Edit Description
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Description</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter new description"
              className="w-full"
            />
          </div>
          <DialogFooter>
            <Button
              onClick={handleSave}
              disabled={updateDescriptionMutation.status === 'pending'}
              className="bg-green-500 text-white hover:bg-green-600"
            >
              {updateDescriptionMutation.status === 'pending' ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  