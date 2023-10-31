import { useState, useEffect, useRef } from "react";

import "./App.css";

import List from "./components/List";
import Form from "./components/Forms";

import { Sub, SubsResponseFromApi } from "./types";

interface AppState {
  subscriber: Array<Sub>;
  newSubsNumber: number;
}

function App() {
  const [subscriber, setSubscriber] = useState<AppState["subscriber"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSubs = (): Promise<SubsResponseFromApi> => {
      return fetch("http://localhost:3001/subs").then((response) =>
        response.json()
      );
    };

    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
      return apiResponse.map((subFromApi) => {
        const {
          nick,
          profileUrl: avatar,
          months: subMonths,
          description,
        } = subFromApi;
        return {
          nick,
          avatar,
          subMonths,
          description,
        };
      });
    };

    fetchSubs().then(mapFromApiToSubs).then(setSubscriber);
  }, []);

  const handleSubmit = (newSubscriber: Sub): void => {
    setSubscriber((subscriber) => [...subscriber, newSubscriber]);
    setNewSubsNumber((newSubsNumber) => newSubsNumber + 1);
  };

  return (
    <>
      <h5
        style={{
          marginBlockStart: "0",
        }}
      >
        App in React with Typescript
      </h5>

      <div className="app" ref={divRef}>
        <h2
          style={{
            textTransform: "uppercase",
          }}
        >
          subscribers
        </h2>
        <List subscriber={subscriber} />
        New Subscribers: {newSubsNumber}
        <Form onNewSubscriber={handleSubmit} />
      </div>
    </>
  );
}

export default App;
