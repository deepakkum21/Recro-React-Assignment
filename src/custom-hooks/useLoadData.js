import { useEffect, useState } from "react";
import instance from "../axios-instance";

const useLoadData = (start, limit) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    instance
      .get("", { params: { _start: start, _limit: limit } })
      .then((res) => {
        console.log(res.data);
        setResult((prevData) => {
          return [...prevData, ...res.data];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
  }, [start, limit]);

  return { loading, error, result, hasMore };
};

export default useLoadData;
