'use client';

import { useEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_usaHigh from '@amcharts/amcharts4-geodata/usaHigh';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const Map = () => {
  const chartRef = useRef<am4maps.MapChart | null>(null);

  useEffect(() => {
    // Enable animations
    am4core.useTheme(am4themes_animated);

    // Create map instance
    const chart = am4core.create("map_5180", am4maps.MapChart);
    chartRef.current = chart;

    // Set map definition
    chart.geodata = am4geodata_usaHigh;

    // Set projection
    chart.projection = new am4maps.projections.AlbersUsa();

    // Create map polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Remove Antarctica
    polygonSeries.exclude = ["AQ"];

    // Make map load polygon (state) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#CDCDCD"); // Inactive state color (gray)

    // Create hover state and set alternative fill color
    const hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#CDCDCD");

    // Create active state
    const activeState = polygonTemplate.states.create("active");
    activeState.properties.fill = am4core.color("rgba(23,137,217,0.9)");

    // Define active states (blue colored states)
    const activeStates = [
      "US-CA",  // California
      "US-UT",  // Utah
      "US-AZ",  // Arizona
      "US-TX",  // Texas
      "US-AL",  // Alabama
      "US-GA",  // Georgia
      "US-FL",  // Florida
      "US-NC",  // North Carolina
      "US-VA",  // Virginia
      "US-PA",  // Pennsylvania
      "US-MD",  // Maryland
      "US-NJ",  // New Jersey
      "US-NY",  // New York
      "US-RI",  // Rhode Island
      "US-CT",  // Connecticut
      "US-MA"   // Massachusetts
    ];

    // Set active states
    polygonSeries.events.on("inited", function() {
      polygonSeries.mapPolygons.each(function(polygon) {
        const dataContext = polygon.dataItem?.dataContext as { id?: string };
        if (dataContext?.id && activeStates.indexOf(dataContext.id) !== -1) {
          polygon.setState("active");
        }
      });
    });

    // Add Washington DC marker
    const cities = chart.series.push(new am4maps.MapImageSeries());
    const city = cities.mapImages.template;
    city.nonScaling = true;

    const circle = city.createChild(am4core.Circle);
    circle.fill = am4core.color("rgba(23,137,217,0.9)");
    circle.stroke = am4core.color("#FFFFFF");
    circle.strokeWidth = 2;
    circle.radius = 10;
    circle.tooltipText = "{title}";

    city.propertyFields.latitude = "latitude";
    city.propertyFields.longitude = "longitude";

    cities.data = [{
      "latitude": 38.257827,
      "longitude": -75.989679,
      "title": "Washington DC"
    }];

    // Set chart settings
    chart.maxZoomLevel = 32;
    chart.seriesContainer.draggable = false;
    chart.seriesContainer.resizable = false;
    chart.maxPanOut = 0;
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0;
    chart.background.fill = am4core.color("#ffffff");
    chart.background.fillOpacity = 0;

    // Remove zoom control
    chart.zoomControl = new am4maps.ZoomControl();
    chart.zoomControl.disabled = true;

    // Cleanup on component unmount
    return () => {
      chart.dispose();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="w-full">
      {/* <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">
        IDR provides services in all states shaded in blue
      </h2>
      
      <div className="flex justify-center mb-6">
        <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
          <div className="flex items-center mr-6">
            <div className="w-4 h-4 rounded bg-[rgba(23,137,217,0.9)] mr-2" />
            <span className="text-sm font-medium text-gray-700">Service Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded bg-[#CDCDCD] mr-2" />
            <span className="text-sm font-medium text-gray-700">Other States</span>
          </div>
        </div>
      </div> */}
      
      <div className="mx-auto max-w-[2000px]">
        <div className="w-full">
          <div className="relative pt-[50%]">
            <div className="absolute inset-0">
              <div id="map_5180" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;