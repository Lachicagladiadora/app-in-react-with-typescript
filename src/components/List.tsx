interface Props {
  subscriber: Array<{
    nick: string;
    avatar: string;
    subMonths: number;
    description?: string;
  }>;
}

export default function List({ subscriber }: Props) {
  const renderList = (): JSX.Element[] => {
    return subscriber.map((sub) => {
      return (
        <li key={sub.nick}>
          <img
            src={sub.avatar}
            alt={`Avatar for ${sub.nick}`}
            style={{
              borderRadius: "200px",
              height: "auto",
              width: "50px",
            }}
          />
          <h4>
            {sub.nick}
            <small>{sub.subMonths}</small>
          </h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      );
    });
  };
  return (
    <ul
      style={{
        margin: "0",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {renderList()}
    </ul>
  );
}
