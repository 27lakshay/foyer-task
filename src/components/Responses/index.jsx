import "./responses.css";

const Responses = (props) => {
  const { data, colNumber } = props;
  
  const COLORS = {
    "0_20": "#F25264",
    "20_40": "#F78782",
    "40_60": "#D0D0D0",
    "60_80": "#65CDA7",
    "90_100": "#4FB1B1",
  };

  const buildTileGradient = (intensity) => {
    if (!intensity) {
      return `linear-gradient(90deg, #000 50%, #fff)`;
    }
    let gradientColor =
      intensity <= 20
        ? COLORS["0_20"]
        : intensity <= 40
        ? COLORS["20_40"]
        : intensity <= 60
        ? COLORS["40_60"]
        : intensity <= 80
        ? COLORS["60_80"]
        : intensity <= 100
        ? COLORS["90_100"]
        : "#000";
    if (intensity >= 21 && intensity <= 40) intensity -= 20;
    if (intensity >= 41 && intensity <= 60) intensity -= 40;
    if (intensity >= 61 && intensity <= 80) intensity -= 60;
    if (intensity >= 81 && intensity <= 100) intensity -= 80;
    let intensityPercent = (intensity / 20) * 100;
    return `linear-gradient(90deg, ${gradientColor} ${intensityPercent}%, #fff)`;
  };

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    //Inclusive of max & min
  }

  return (
    <div className="responses">
      <div className="title">{data.title}</div>
      <div className="heatmap">
        {[...Array(parseInt(colNumber) || 3)].map((el, index) => {
          let randomVal = getRandomIntInclusive(1, 100);
          return (
            <span
              // key={index}
              className="tile"
              style={{
                background: buildTileGradient(randomVal),
              }}
            >
              {randomVal || "-"}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Responses;
