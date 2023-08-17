function Box(props) {
  return <div style={{ backgroundColor: props.color }}></div>;
}

function App() {
  return (
    <div>
      <Box color="deeppink" />
      <Box color="dreen" />
    </div>
  );
}
