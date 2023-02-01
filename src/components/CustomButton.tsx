import { Button, Typography } from "@mui/material";
import React from "react";

export const CustomButton = ({ text }: { text: string }) => {
    return (
        <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: '#000', p: "12px", margin: "10px 0px", borderRadius: "8px", ":hover": { bgcolor: 'tomato' } }}
            fullWidth
        >
            <Typography
                fontSize={"16px"}
                fontWeight="700"
                sx={{ textTransform: "capitalize" }}
            >
                {text}
            </Typography>
        </Button>
    );
};
