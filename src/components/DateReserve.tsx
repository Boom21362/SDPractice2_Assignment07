"use client"
import { TextField } from '@mui/material';
import { MenuItem, Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DateReserve(){
    
    return(
      <div className="bg-slate-100 rounded-lg w-fit px-10 py-8 flex flex-col justify-center text-lg font-bold ">
        <div className='my-5 gap-4 flex flex-col'> Information
        <TextField id="standard-basic" name="Name-Lastname" label="Name-Lastname" variant="standard" />
        <TextField id="standard-basic" name="Contact-Number" label="Contact-Number" variant="standard" />
        </div>
        <div className='my-5 gap-4 flex flex-col'> Room 
        <Select variant="standard" name="vanue" id="venue" 
            className="h-[2em] w-[200px]">
                <MenuItem value="" disabled>Select a room:</MenuItem>
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
        </div>
         <div className='gap-4 flex flex-col'> Date
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="bg-white rounded-md"/>
        </LocalizationProvider>
        </div>
      </div>  
    );
}