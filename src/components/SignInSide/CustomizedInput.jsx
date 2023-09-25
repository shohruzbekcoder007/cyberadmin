import React, { useEffect, useState } from "react"
import { withStyles } from '@mui/styles'
import TextField from "@mui/material/TextField"

const CssTextField = withStyles({
    root: {
        width: "100%",
        "& input.MuiInputBase-input": {
            color: "#6A6A6A",
            paddingTop: "12px",
            paddingBottom: "12px",
            paddingLeft: "12px",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "170%",
            zIndex: "2",
            fontFamily: 'Inter'
        },
        "& label.Mui-focused": {
            color: "#6A6A6A",
            paddingLeft: "0"
        },
        "& .MuiFormLabel-filled": {
            padding: 0
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                backgroundColor: "#FFF",
                border: "1px solid #FFF",
                borderRadius: "10px",
            },
            "&:hover fieldset": {
                border: "1px solid #FFF",
            },
            "&.Mui-focused fieldset": {
                border: "1px solid #FFF",
                color: "red"
            }
        }
    }
})(TextField);

export default function CustomizedInput({ label, callback_func }) {
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          callback_func(searchTerm)
        }, 1000)
    
        return () => clearTimeout(delayDebounceFn)
      }, [searchTerm])

    return (
        <div style={{ position: "relative" }}>
            <CssTextField
                // error
                label={""}
                variant="outlined"
                id="custom-css-outlined-input"
                onChange={event => { setSearchTerm(event.target.value) }}
                placeholder={label}
            />
        </div>
    );
}
