import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
    return (
        <Box
            height="100vh"
            width="100vw"
            position="fixed"
            top="0"
            left="0"
            sx={{ display: "flex", backgroundColor: "rgba(0,0,0,0.78)", zIndex: '999' }}
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress />
        </Box>
    );
};

export default Loading;
