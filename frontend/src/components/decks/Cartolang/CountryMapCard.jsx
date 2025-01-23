import React,{Component} from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import classes from './card.module.css';


class CountryMapCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
          init: true,
          country: "",
          stage: 0
        };
      }

    componentDidMount() {
      // ... chart code goes here ...
      let root = am5.Root.new(`chartdiv${this.props.country.country_iso2}`);
      let setUpdatedCountry = this.props.setUpdatedCountry;
      // couleur des terres sur la carte
      let colorMap = am5.color(0xF7F6F1);
      let {init, country } = this.state;
      console.log (this.state);

      root.setThemes([
        am5themes_Animated.new(root)
      ]);
  
      let chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "translateX",
        projection: am5map.geoMercator(),
        padding: "10px",
        homeZoomLevel: 3.5,
      }));
      chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

      chart.chartContainer.set("background", am5.Rectangle.new(root, {
        // couleur de la mer sur la carte
        fill: am5.color(0x8DCCCB),
        fillOpacity: 0.3
      }));

      let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          fill: colorMap,
          opacity: 1.0,
          stroke: am5.color(0x888888),
          fillOpacity: 0.9,
          exclude: ["AQ"]
        })
      );
      /*
      chart.chartContainer.set("background", am5.Rectangle.new(root, {
        fill: am5.color(0x253C59),
        fillOpacity: 0.8
      }));
      */
      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        templateField: "polygonSettings",
        toggleKey: "active",
        interactive: true
      });

      polygonSeries.mapPolygons.template.events.on("click", function(ev) {
        console.log("ONCLICK")
        setUpdatedCountry(ev.target);      
        country = ev.target;  
      });

      polygonSeries.mapPolygons.template.states.create("active", {
        // couleur de la mer sur la carte
        fill: am5.color(0xdbd7c0)
      });
      let previousPolygon;
      polygonSeries.mapPolygons.template.on("active", function (active, target) {
        if (previousPolygon && previousPolygon != target) {
          previousPolygon.set("active", false);
        }
        if (target.get("active")) {
          polygonSeries.zoomToDataItem(target.dataItem );
        }
        previousPolygon = target;
      });

      // Add zoom control
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
      chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
      
      // Set clicking on "water" to zoom out
      chart.chartContainer.get("background").events.on("click", function () {
          chart.goHome();
      })

      this.polygonSeries = polygonSeries;
      this.chart = chart;
      this.root = root;
      this.colorMap = colorMap;

      /*
        On affiche à la première sélection (correct° bug)
      */
      let colorIndexPolygon = am5.color(0xdbd7c0); //0xF23D3D
      this.polygonSeries.data.setAll([{
        id: this.props.country.country_iso2,
        polygonSettings: {
          fill: colorIndexPolygon,
          fillOpacity: 1.0,
        }
      }, 
      ]);
      
    }
  
    componentDidUpdate(oldProps) {
      // couleur de sélection
      let colorIndexPolygon = am5.color(0xdbd7c0); //0xF23D3D
      let mps = null;
      console.log ("didUpdate");


        if (this.props.country.country_iso2) {
            let {init, country, stage} = this.state;
            console.log (this.props); 
            
            if (stage==0) {
              console.log("INIT")
              this.setState({ init: false });
              this.setState({ country : this.props.country.country_iso2});
              this.setState({ stage : 1});
              //console.log(stage);
              //console.log(country);
              this.polygonSeries.data.setAll([{
                id: this.props.country.country_iso2,
                polygonSettings: {
                  fill: colorIndexPolygon,
                  fillOpacity: 1.0,
                }
              }, 
              ]);   
              /*
              let xy = this.props.country.country_xy.split(",");
              xy[0] = Number(xy[0]);
              xy[1] = Number(xy[1]);
              this.chart.zoomToGeoPoint({ longitude: xy[1], latitude: xy[0] },3.5);
              console.log(this.props.country.country_xy);
              */
            }
              else if (stage == 1) {
                  console.log("UNINIT")
                  this.setState({ stage : 2});
                  /*
                  console.log(init);
                  console.log(country);
                  console.log(oldProps.country.country_iso2);
                  let dataItem = this.polygonSeries.getDataItemById(country); 
                  dataItem.component.mapPolygons.template._settings.interactive= false;
                  dataItem.component.mapPolygons.template._settings.toggleKey="disabled";
                  dataItem.component.mapPolygons.template._settings.fill = am5.color(0xFFFFFF);
                  dataItem.component.mapPolygons.template._settings.stroke = am5.color(0xFFFFFF);
                  dataItem.component.mapPolygons.template._settings.tooltipText = "HO !!";
                  console.log(dataItem);
                  console.log(dataItem.component.mapPolygons.template._settings);
                  this.polygonSeries.getDataItemById(country).fill = am5.color(0xFFFFFF); 
 
                  let vk = []
                  vk.push(country);
                  mps = this.chart.series.push(
                    am5map.MapPolygonSeries.new(this.root, {
                      geoJSON: am5geodata_worldLow,
                      fill: am5.color(0x10403B),
                      opacity: 1.0,
                      stroke:  am5.color(0x10403B),
                      fillOpacity: 0.9,
                      include: vk
                    })
                  );
                  */

                  this.polygonSeries.data.setAll([{
                    id: oldProps.country.country_iso2,
                    polygonSettings: {
                      fill: am5.color(0x10403B),
                      stroke:  am5.color(0x10403B),
                      fillOpacity: 1.0,
                    }
                  }, 
                  ]); 
                  
                  this.polygonSeries.data.setAll([{
                    id: this.props.country.country_iso2,
                    polygonSettings: {
                      fill: colorIndexPolygon,
                      stroke:  colorIndexPolygon,
                      fillOpacity: 1.0,
                    }
                  }, 
                  ]); 
          // this.polygonSeries.zoomToDataItem(this.polygonSeries.dataItem );
          console.log (this.polygonSeries);
          
              
            } else {
               // mps.dispose();
               this.polygonSeries.data.setAll([{
                id: oldProps.country.country_iso2,
                polygonSettings: {
                  fill: am5.color(0x10403B),
                  stroke:  am5.color(0x10403B),
                  fillOpacity: 1.0,
                }
              }, 
              ]); 
                  
              this.polygonSeries.data.setAll([{
                id: this.props.country.country_iso2,
                polygonSettings: {
                  fill: colorIndexPolygon,
                  stroke:  colorIndexPolygon,
                  fillOpacity: 1.0,
                }
              }, 
              ]); 

              let previousPolygon;
              console.log ("SELECTED");
              console.log (this.polygonSeries.mapPolygons._values[0]);
              this.polygonSeries.mapPolygons._values[0].set("active", true);
              this.polygonSeries.zoomToDataItem(this.polygonSeries.mapPolygons._values[0]._dataItem);
             {
              /*
                              this.polygonSeries.mapPolygons.template.on("active", function (active, target) {
                if (previousPolygon && previousPolygon != target) {
                  previousPolygon.set("active", false);
                }
                if (target.get("active")) {
                  this.polygonSeries.zoomToDataItem(target.dataItem );
                }
        
                previousPolygon = target;
              });
                */}

    
              
            }

        }
      }

    componentWillUnmount() {
      if (this.root) {
        this.root.dispose();
      }
    }
  
    render() {
      return (
        <>
        <div className="bg-[#8DCCCB] shadow-lg p-0">  
          <div id={`chartdiv${this.props.country.country_iso2}`}> </div>
        </div>
        </>
      );

    }
  }
export default CountryMapCard