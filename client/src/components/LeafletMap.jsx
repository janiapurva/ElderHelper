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
        Name: {props.description}
        <br />
        Age: {props.age}
        <br />
        Address: {props.address}
      </Popup>
    </Marker>
  );
}

export default function LeafletMap(props) {
  let center = [parseFloat(props.centerlat), parseFloat(props.centerlong)];

  const [elderList, setElderList] = useState([]);

  useEffect(() => {
    // console.log("inside use");

    axios
      .get("http://localhost:8000/api/users")

      .then((res) => {
        console.log("line 35 leaflet", res.data);
        setElderList(res.data);
        // console.log("this is rsponse", res);
      })
      .catch((err) => {
        console.log("error leaflet line 40", err);
      });
  }, []);

  return (
    <div id="mapid">
      <MapContainer abc={123} center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            Hi! {props.centername}
            <br />
            Check out everyone who needs help around you
          </Popup>
        </Marker>
        {elderList.map((requester) => (
          <RequesterMarker
            position={[parseFloat(requester.lat), parseFloat(requester.long)]}
            description={requester.full_name}
            age={requester.age}
            address={requester.street_address}
          />
        ))}
      </MapContainer>
    </div>
  );
}
