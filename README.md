# React Project

## Overview
The goal of this project encompasses a simple, serverless, web-app that cycles through
stream of live data

### TODOs
- Copy streams and variables to local storage and create an editor
- Extend the time display to allow for skipping and pausing of streams
- Detect when a stream is "down" (start with youtube inspecting the iframe elements)

## Possible Streams to Use

### Fish Camera:
https://www.youtube.com/watch?v=F109TZt3nRc

### Nasa Fire Sat. Images:
https://firms.modaps.eosdis.nasa.gov/map/#z:10;c:-85.0,41.2;d:2019-07-10..2019-07-11;l:topo,protected_areas,Suomi_NPP_Orbit_Asc,Suomi_NPP_Orbit_Dsc,Aqua_Orbit_Asc,Aqua_Orbit_Dsc,Terra_Orbit_Asc,Terra_Orbit_Dsc,firms_viirs,firms_modis_a,firms_modis_t;qc:FF1919,FF0000,EC1A10,EC5410,EC2D10,EC7110

### Earth.nullschool Maps:

#### Air
https://earth.nullschool.net/#current/wind/surface/level/stereographic=-89.52,26.53,757/loc=-92.818,-73.479
https://earth.nullschool.net/#current/wind/isobaric/700hPa/stereographic=-89.52,26.53,757/loc=-92.818,-73.479
Variants: [1000hPa, 850hPa, 700hPa, 500hPa, 250hPa, 10hPa]

#### Ocean Currents
https://earth.nullschool.net/#current/ocean/surface/currents/overlay=currents/stereographic=-89.52,26.53,757/loc=-92.818,-73.479

#### Chemicals
https://earth.nullschool.net/#current/chem/surface/level/overlay=co2sc/stereographic=-89.52,26.53,757/loc=-92.818,-73.479
Variants: [cosc, co2sc, so2smass]

#### Particulates
https://earth.nullschool.net/#current/particulates/surface/level/overlay=pm10/stereographic=-89.52,26.53,757/loc=-92.818,-73.479

#### Nasa - check for more
https://earthdata.nasa.gov/earth-observation-data/near-real-time/download-nrt-data
