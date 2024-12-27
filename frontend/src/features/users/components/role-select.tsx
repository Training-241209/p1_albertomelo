import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  interface RoleSelectProps {
    initialRole: string; 
    onChange?: (value: string) => void; 
  }
  
  function RoleSelect({ initialRole, onChange }: RoleSelectProps) {
    return (
      <Select
        defaultValue={initialRole}
        onValueChange={(value) => {
          if (onChange) onChange(value); 
        }}
      >
        <SelectTrigger
          className="w-full bg-gray-700 text-gray-100 rounded-lg border border-gray-600"
          aria-label="Select user role"
        >
          <SelectValue placeholder="Select Role" />
        </SelectTrigger>
        <SelectContent className="bg-gray-700 text-gray-100">
          <SelectItem value="Employee">Employee</SelectItem>
          <SelectItem value="Manager">Manager</SelectItem>
          <SelectItem value="Admin">Admin</SelectItem>
        </SelectContent>
      </Select>
    );
  }
  
  export default RoleSelect;
  