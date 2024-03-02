"use client";

import { Box, Button, Stack } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Stack
        spacing={2}
        sx={{
          marginBottom: "40px",
        }}
      >
        <textarea
          name=""
          id=""
          style={{
            height: "300px",
            resize: "none",
          }}
        ></textarea>
        <textarea
          name=""
          id=""
          style={{
            height: "900px",
            // resize: "none",
          }}
        ></textarea>
      </Stack>

      <Box
        height={60}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "silver",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{
            marginX: "6px",
            marginY: "6px",
          }}
        >
          Primary
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{
            marginX: "6px",
            marginY: "6px",
          }}
        >
          Secondary
        </Button>
      </Box>
    </div>
  );
}
