// components/CopyIcon.js
import { useEffect, useState } from "react";
import { CopyOutlined } from "@ant-design/icons";

const CopyIcon = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <CopyOutlined style={{ color: "#3D3ADD" }} />
    </div>
  );
};

export default CopyIcon;
