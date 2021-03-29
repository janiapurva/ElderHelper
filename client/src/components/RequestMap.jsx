import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import axios from "axios";
import React, { useState, useEffect } from "react";
// https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&Postal=<>
/* https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&Postal=h2s3a6 */

function RequesterMarker(props) {
  const map = useMap();

  return (
    <Marker
      position={props.position}
      eventHandlers={{
        click: () => {
          map.flyTo(props.position);
        },
      }}
    >
      <Popup>
        Name: {props.name} <br />
        Request: {props.description}
      </Popup>
    </Marker>
  );
}

export default function RequestMap(props) {
  let center = [parseFloat(props.centerlat), parseFloat(props.centerlong)];

  const [requestList, setRequestList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/volunteerRequests")
      .then((res) => {
        setRequestList(res.data);
      })
      .catch((err) => {
        console.log("error leaflet line 40", err);
      });
  }, []);

  console.log("map through this", requestList);
  return (
    <div id="mapid">
      <MapContainer abc={123} center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            {" "}
            Hello! {props.centername} <br />
            Check out these requests near you
          </Popup>
        </Marker>
        <RequesterMarker
          position={[39.779699, -80.44734]}
          description={"anything"}
        />
        <RequesterMarker
          position={[45.779699, -79.44734]}
          description={"toronto"}
        />
        {requestList.map((requester) => (
          <RequesterMarker
            position={[parseFloat(requester.lat), parseFloat(requester.long)]}
            name={requester.posted_by}
            description={requester.task_description}
          />
        ))}
      </MapContainer>
    </div>
  );
}
