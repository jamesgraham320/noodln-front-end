import { useState, useEffect } from "react";

export default function useOrganizationData(id) {
  const [organization, setOrg] = useState({});
  const [loading, setLoading] = useState(true);

  const getOrg = async () => {
    setLoading(true);
  }
}
