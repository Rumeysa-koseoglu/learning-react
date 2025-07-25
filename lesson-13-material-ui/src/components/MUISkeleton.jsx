import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Honda from "../image/honda.jpg";

function MUISkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div style={{ marginBottom: "40px" }}>
      {loading ? (
        <Skeleton variant="rounded" width={250} height={150} animation="wave" />
      ) : (
        <img src={Honda} width={250} height={150} />
      )}
    </div>
  );
}

export default MUISkeleton;
