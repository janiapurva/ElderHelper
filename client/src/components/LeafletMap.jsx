import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import React, { useState, useEffect } from "react";
// https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&Postal=<>
/* https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&Postal=h2s3a6 */

export default function LeafletMap(props) {
  

  


  return (
    <div id="mapid">
      <MapContainer
        center={[43.779699, -79.44734]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*   <Marker position={[43.779699, -79.44734]}>
          <Popup>this is you</Popup>
        </Marker>
        <Marker position={[45.779699, -79.44734]}>
          <Popup>this is you</Popup>
        </Marker>
        <Marker position={[39.779699, -80.44734]}>
          <Popup>this is you</Popup>
        </Marker>
 */}
        {props.requesters.map((requester) => (
          <Marker position={[parseFloat(requester.lat), parseFloat(requester.long)]}>
            <Popup>{requester.task_description}</Popup>
          </Marker>
        ))}
        
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}
