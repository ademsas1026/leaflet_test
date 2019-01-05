import React, { Component } from 'react';
import WebViewLeaflet from "react-native-webview-leaflet";

export default class Map extends Component {
  render() {
    return (
      <div>
        <WebViewLeaflet
          ref={component => (this.webViewLeaflet = component)}
          // Required: the map layers that will be displayed on the map. See below for a description of the map layers object
          mapLayers={mapLayers}
        />
      </div>
    )
  }
}
