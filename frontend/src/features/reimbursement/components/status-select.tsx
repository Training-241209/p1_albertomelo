import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

  interface StatusSelectProps {
    initialStatus: string; 
    onChange?: (value: string) => void; 
  }
  
  function StatusSelect({ initialStatus, onChange }: StatusSelectProps) {
    return (
      <Select
        defaultValue={initialStatus}
        onValueChange={(value) => {
          if (onChange) onChange(value);
        }}
      >
        <SelectTrigger className="w-full bg-gray-700 text-gray-100 rounded-lg border border-gray-600">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent className="bg-gray-700 text-gray-100">
          <SelectItem value="PENDING">PENDING</SelectItem>
          <SelectItem value="APPROVED">APPROVED</SelectItem>
          <SelectItem value="DENIED">DENIED</SelectItem>
        </SelectContent>
      </Select>
    );
  }
  
  export default StatusSelect;
  