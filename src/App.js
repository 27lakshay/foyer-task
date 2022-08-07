import Responses from "./components/Responses";

const App = () => {
  const DUMMY_DATA = [
    {
      id: "1",
      title: "Lorem Ipsum",
      responses: [
        {
          value: "14",
        },
        {
          value: "67",
        },
        {
          value: "44",
        },
      ],
    },
    {
      id: "2",
      title: "Lorem Ipsum",
      responses: [
        {
          value: "98",
        },
        {
          value: "34",
        },
        {
          value: "57",
        },
      ],
    },
    {
      id: "3",
      title: "Lorem Ipsum",
      responses: [
        {
          value: "88",
        },
        {
          value: "5",
        },
        {
          value: "71",
        },
      ],
    },
    {
      id: "4",
      title: "Lorem Ipsum",
      responses: [
        {
          value: "88",
        },
        {
          value: "5",
        },
        {
          value: "71",
        },
      ],
    },
    {
      id: "5",
      title: "Lorem Ipsum",
      responses: [
        {
          value: "88",
        },
        {
          value: "5",
        },
        {
          value: "71",
        },
      ],
    },
    {
      id: "6",
      title: "Lorem Ipsum",
      responses: [
        {
          value: "88",
        },
        {
          value: "5",
        },
        {
          value: "71",
        },
      ],
    },
  ];

  const COLORS = [
    { value: "#4FB1B1", title: "Lorem Ipsum" },
    { value: "#65CDA7", title: "Lorem Ipsum" },
    { value: "#D0D0D0", title: "Lorem Ipsum" },
    { value: "#F78782", title: "Lorem Ipsum" },
    { value: "#F25264", title: "Lorem Ipsum" },
  ];

  return (
    <main className="container">
      <h4>Keywords</h4>
      <div className="wrapper">
        <div className="responses-wrapper">
          {DUMMY_DATA.map((data) => (
            <Responses key={data.id} data={data} />
          ))}
        </div>
        <div className="code-explain">
          <h4>Codes Explained</h4>
          {COLORS.map((item) => (
            <div className="ce-pill">
              <div
                className="pill-color"
                style={{ backgroundColor: `${item.value}` }}
              ></div>
              <h6 className="pill-title">{item.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
