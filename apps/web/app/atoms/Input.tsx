"use client";
import { Select, MenuItem, SelectChangeEvent, InputLabel } from "@mui/material";

export const SelectInput: React.FC<{
  value: string;
  label: string;
  options: { value: string; label: string }[];
  onChange: (e: any) => void;
}> = ({ value, label, onChange, options }) => (
  <>
    <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
    <Select
      labelId="demo-simple-select-autowidth-label"
      id="demo-simple-select-autowidth"
      style={{ width: 200 }}
      value={value}
      label={label}
      onChange={onChange}
      displayEmpty
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </>
);
