import PropTypes from "prop-types";
import Axios from "axios";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import moment from "moment";
import myLocalStorage from "../../Utils/myLocalStorage";
import styleModule from "./GraphSensor.module.sass";

const SensorShowData = ({ data, _updatedSensors }) => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  const [modalLoad, setModalLoad] = useState("");
  const [sensorData, setSensorData] = useState("");

  const handlerFormatData = dataGraph => {
    let dataS = [];
    let categories = [];

    dataGraph.forEach(feed => {
      dataS.push(feed[`field${data.numberField}`]);
      categories.push(
        moment(feed.created_at).local().format("DD/MM/YYYY HH:mm:ss")
      );
    });

    setOptions({
      chart: {
        id: "basic-bar"
      },
      colors:['#4ee6c2'],
      xaxis: {
        categories: categories
      }
    });

    setSeries([
      {
        name: "valor",
        data: dataS
      }
    ]);
  };

  const handleFetchData = async () => {
    setModalLoad(<div>Loading...</div>);
    const { idChannel, apiKey } = data;
    try {
      const resp = await Axios.get(
        `https://api.thingspeak.com/channels/${idChannel}/fields/1.json?api_key=${apiKey}`
      );
      setSensorData({ ...resp.data });
      handlerFormatData([...resp.data.feeds]);
    } catch (error) {
      console.log(error);
    }
    setModalLoad("");
  };

  const handleDeleteSensor = () => {
    const sensorsSaved = myLocalStorage.get("sensors");
    let updateSensors = [];
    sensorsSaved.forEach(item => item.idChannel !=  data.idChannel && updateSensors.push(item));
    myLocalStorage.set("sensors", updateSensors );
    _updatedSensors();
  }
  useEffect(() => {
    console.log(data);
    handleFetchData();
  }, [data]);

  return (
    <div className={styleModule.containerGraphSensor}>
      {!!modalLoad
        ? modalLoad
        : sensorData && (
            <>
              <div className={styleModule.contentInf}>
                <h2>{`${data.sensorName} - ${data.idChannel}`}</h2>
                <div className={styleModule.sectionDescription}>
                  <div className={styleModule.descriptionTitle}>Descripción</div>{" "}
                  <div className={styleModule.contenDescription}>
                    {sensorData ? sensorData.channel.description : "?"}{" "}
                  </div>
                </div>
                <div>
                  <div className={styleModule.updated}>Última actualización</div>{" "}
                  <div className={styleModule.updatedDate}>{moment().local().format("DD/MM/YYYY HH:mm:ss")} </div>
                </div>
                <button onClick={handleDeleteSensor} className={styleModule.deletedSensor}>Borrar Sensor</button>
              </div>
              {console.log(options)}
              {!!options && <Chart width="400px" height="300px" options={{ ...options }} series={series} />}
            </>
          )}
    </div>
  );
};
const GraphsSensors = () => {
  const [sensors, setSensors] = useState("");

  useEffect(() => {
    setSensors(myLocalStorage.get("sensors"));
  }, []);
  return (
    <div>
      {!!sensors ? (
        sensors.map((sensor, index) => (
          <SensorShowData key={index} data={sensor} _updatedSensors={() => setSensors(myLocalStorage.get("sensors"))} />
        ))
      ) : (
        <div>Agrega un sensor para comenzar</div>
      )}
    </div>
  );
};

/*
GraphsSensors.propTypes = {
  
};
*/
export default GraphsSensors;
