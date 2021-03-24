import React from "react";

import { useCallback, useRef, useState } from "react";
import DataCard from "../../components/data-card/DataCard";
import useLoadData from "../../custom-hooks/useLoadData";

const LandingPage = () => {
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const { result, hasMore, loading, error } = useLoadData(start, limit);

  const observer = useRef();
  const lastDataElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setStart((prevStart) => prevStart + 10);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <div className="landingpage">
        {result.map((data, index) => {
          if (result.length === index + 1) {
            return (
              <div
                className="landingPage"
                ref={lastDataElementRef}
                key={data.id}
              >
                <DataCard
                  title={data.title}
                  userId={data.userId}
                  body={data.body}
                />
              </div>
            );
          } else {
            return (
              <div key={data.id}>
                <DataCard
                  title={data.title}
                  userId={data.userId}
                  body={data.body}
                />
              </div>
            );
          }
        })}
      </div>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
};

export default LandingPage;
