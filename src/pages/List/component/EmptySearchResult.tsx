export default function EmptySearchResult() {
  return (
    <div>
      <div style={{ fontSize: "48px", marginBottom: "0.25em" }}>
        Nani?! Your anime is missing!
      </div>
      <div>
        Maybe it's in the Shadow Realm?{" "}
        <u
          style={{
            textDecorationColor: "#eb2f96",
            textDecorationThickness: "3px",
          }}
        >
          Try searching for another one!
        </u>
      </div>
    </div>
  );
}
