import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAllUsersList } from "../hooks/use-allusers-list";
import { useUpdateRole } from "../hooks/use-roleupdate";
import RoleSelect from "./role-select";
import { useDeleteUser } from "../hooks/use-deleteuser";

export function AllUsersList() {
  const { data, error, isLoading } = useAllUsersList();
  const updateRoleMutation = useUpdateRole();
  const deleteUserMutation = useDeleteUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.log(error);
    return <div>Error loading users</div>;
  }
  if (!data || data.length === 0) {
    return <div>No users found.</div>;
  }

  const handleDelete = (userId: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUserMutation.mutate(userId);
    }
  };

  return (
    <Table>
      <TableCaption>A list of all Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">User ID</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Full Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((users) => (
          <TableRow key={users.userId}>
            <TableCell className="font-medium">{users.userId}</TableCell>
            <TableCell>
              <RoleSelect
                initialRole={users.roleName}
                onChange={() =>
                  updateRoleMutation.mutate({
                    userId: users.userId,
                  })
                }
              />
            </TableCell>
            <TableCell>{users.username}</TableCell>
            <TableCell>{users.email}</TableCell>
            <TableCell>{users.fullName}</TableCell>
            <TableCell className="text-right">
              <button
                onClick={() => handleDelete(users.userId)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                disabled={deleteUserMutation.status === 'pending'}
              >
                {deleteUserMutation.status === 'pending' ? "Deleting..." : "Delete"}
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AllUsersList;
