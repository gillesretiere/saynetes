import React, { Component } from 'react';
import { Navigate } from 'react-router';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5geodata_usaLow from "@amcharts/amcharts5-geodata/usaLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import classes from './card.module.css';


function findCommonElements3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

function geoJson(countries) {
  // code here    
  let features = [];
  for (var i = 0, len = countries.length; i < len; i++) {
    let xy = countries[i]["xy_coordinates"].split(",");
    let vk_xy = [];
    xy[0] = Number(xy[0]);
    xy[1] = Number(xy[1]);
    vk_xy.push(xy[1], xy[0]);
    let doc = {
      "type": "Feature",
      "properties": {
        "name": `${countries[i]["country_name_fr"]}`,
        "country_iso2": `${countries[i]["country_iso2"]}`,
        "popularity": `${countries[i]["popularity_as_float"]}`,
      },
      "geometry": {
        "type": "Point",
        "coordinates": vk_xy
      }
    }
    features.push(doc);
  };

  let country_points = {
    "type": "FeatureCollection",
    "features": features
  };

  return (country_points);
}


class LanguageMapCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      country_points: {},
      countries: []
    };
  }

  componentDidMount() {
    // ... chart code goes here ...
    if (! this.props.language) {
      return;
    }
    let root = am5.Root.new(`mapdiv${this.props.language.language_uid}`);
    //console.log("mounted");
    // couleur des terres sur la carte
    let colorMap = am5.color(0xF7F6F1);
    let colorset = am5.ColorSet.new(root, {});

    this.setState({ country_points: {} }, function () {
      //console.log(this.state.country_points);
    });
    this.setState({ countries: this.props.language.language_countries }, function () {
    });
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "translateX",
      projection: am5map.geoMercator(),
      padding: "0px"
    }));

    chart.chartContainer.set("background", am5.Rectangle.new(root, {
      fill: am5.color(0x8DCCCB),
      fillOpacity: 0.3
    }));


    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        fill: am5.color(0xF7F6F1),
        fillOpacity: 0.9,
        stroke: am5.color(0x888888),
        exclude: ["AQ"]
      })
    );
    /*
        polygonSeries.mapPolygons.template.states.create("hover",
            {
            fill: am5.color(0xBFBFB8),
            stroke: am5.color(0x888888)
            });

        polygonSeries.mapPolygons.template.states.create("active", {
            fill: root.interfaceColors.get("primaryButtonHover")
        });
*/
    polygonSeries.mapPolygons.template.setAll({
      // tooltipText: "{name}",
      templateField: "polygonSettings",
      toggleKey: "active",
      interactive: true
    });



    // Add zoom control
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

    // Set clicking on "water" to zoom out
    chart.chartContainer.get("background").events.on("click", function () {
      chart.goHome();
    })

    this.chart = chart;
    this.polygonSeries = polygonSeries;
    //this.polygonSeriesUS = polygonSeriesUS;
    this.root = root;
  }

  componentDidUpdate(oldProps) {
    let colorset = am5.ColorSet.new(this.root, {});
    let colorMap = am5.color(0x99B4BF);
    let colorIndexPolygon = am5.color(0xF2E0C9);
    let colorIndexCircle = colorset.getIndex(11);
    let colorIndexPulse = colorset.getIndex(9);

    if (this.props.language.language_uid) {
      let country_points = geoJson(this.props.language.language_countries);
      // on colorie les polygones éligibles
      this.polygonSeries.data.setAll([{
        id: this.props.language.language_uid,
        polygonSettings: {
          fill: colorMap,
        }
      },
      ]);

      /*
      this.setState({ country_points: country_points }, function () {
        console.log(this.state.country_points);
      });
      */

      let pointSeries = this.chart.series.push(
        am5map.MapPointSeries.new(this.root, {
          geoJSON: country_points
        })
      );

      //console.log(country_points)
      // liste de tous les pays qui parlent la langue ([XX1, XX2, ... XXn])
      let vk_sel = country_points.features.map(a => a.properties.country_iso2)
      // liste de tous les pays (XX)
      let vk_world = am5geodata_worldLow.features.map(a => a.properties.id)
      let vk_keep = vk_world.filter(x => vk_sel.includes(x));
      // liste de tous les  pays qui ne parlent pas la langue
      let vk_grp0 = vk_world.filter(x => !vk_sel.includes(x));

      // groupe de tous les tuples {XX, pop}
      let vk_xx_pop = country_points.features.map(a => [a.properties.country_iso2, Number(a.properties.popularity)]);


      // Groupe A
      // sous-groupe à exclure
      let vk_grpA = vk_xx_pop.filter((x) => x[1] < 0.8).map(a => a[0]);
      let vk_diffA = vk_grp0.concat(vk_grpA);
      colorIndexPolygon = am5.color(0x00FF00);
      const vkPalette = [0xdbd7c0, 0xafac99, 0x838173, 0x57564c]

      let polygonSeriesA = this.chart.series.push(am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldLow,
        fill: am5.color(vkPalette[3]),
        opacity: 0.7,
        strokeOpacity: 0.5,
        fillOpacity: 0.2,
        exclude: vk_diffA
      }));

      polygonSeriesA.mapPolygons.template.states.create("hover", {
        fill: this.root.interfaceColors.get("primaryButtonHover")
      });

      polygonSeriesA.mapPolygons.template.states.create("active", {
        fill: this.root.interfaceColors.get("primaryButtonHover")
      });

      // Groupe B
      // sous-groupe à exclure
      let vk_grpB = vk_xx_pop.filter((x) => x[1] >= 0.8 || x[1] < 0.5).map(a => a[0]);
      let vk_diffB = vk_grp0.concat(vk_grpB);

      let polygonSeriesB = this.chart.series.push(am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldLow,
        fill: am5.color(vkPalette[2]),
        opacity: 0.7,
        strokeOpacity: 0.5,
        fillOpacity: 0.2,
        exclude: vk_diffB
      }));

      polygonSeriesB.mapPolygons.template.states.create("hover", {
        fill: this.root.interfaceColors.get("primaryButtonHover")
      });

      polygonSeriesB.mapPolygons.template.states.create("active", {
        fill: this.root.interfaceColors.get("primaryButtonHover")
      });

      // Groupe C
      // sous-groupe à exclure
      let vk_grpC = vk_xx_pop.filter((x) => x[1] >= 0.5 || x[1] < 0.3).map(a => a[0]);
      let vk_diffC = vk_grp0.concat(vk_grpC);

      let polygonSeriesC = this.chart.series.push(am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldLow,
        fill: am5.color(vkPalette[1]),
        opacity: 0.7,
        strokeOpacity: 0.5,
        fillOpacity: 0.2,
        exclude: vk_diffC
      }));

      polygonSeriesC.mapPolygons.template.states.create("hover", {
        fill: this.root.interfaceColors.get("primaryButtonHover")
      });

      polygonSeriesC.mapPolygons.template.states.create("active", {
        fill: this.root.interfaceColors.get("primaryButtonHover")
      });


      // Groupe D
      // sous-groupe à exclure
      let vk_grpD = vk_xx_pop.filter((x) => x[1] >= 0.3).map(a => a[0]);
      let vk_diffD = vk_grp0.concat(vk_grpD);

      let polygonSeriesD = this.chart.series.push(am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldLow,
        fill: am5.color(vkPalette[0]),
        opacity: 0.7,
        strokeOpacity: 0.5,
        fillOpacity: 0.2,
        exclude: vk_diffD
      }));

      polygonSeriesD.mapPolygons.template.states.create("hover", {
        fill: this.root.interfaceColors.get("primaryButtonHover")
      });

      polygonSeriesD.mapPolygons.template.states.create("active", {
        fill: this.root.interfaceColors.get("primaryButtonHover")
      });

      pointSeries.bullets.push(() => {
        var container = am5.Container.new(this.root, {
        });
        var circle = container.children.push(
          am5.Circle.new(this.root, {
            radius: 4,
            tooltipY: 0,
            fill: am5.color(0xf44336),
            opacity: 1.0,
            above: true,
            tooltipText: "{name} {popularity}"
          })
        );

        /*
        var circle2 = container.children.push(
          am5.Circle.new(this.root, {
            radius: 4,
            tooltipY: 0,
            fill: colorIndexPulse,
            opacity: 1.0,
            above: true,
            // tooltipText: "{name}"
          })
        );
        */

        /*
        circle.animate({
          key: "scale",
          from: 1,
          to: 5,
          duration: 600,
          easing: am5.ease.out(am5.ease.cubic),
          loops: Infinity
        });
        circle.animate({
          key: "opacity",
          from: 1,
          to: 0,
          duration: 600,
          easing: am5.ease.out(am5.ease.cubic),
          loops: Infinity
        });
        */

        return am5.Bullet.new(this.root, {
          sprite: container
        });
      });


      //this.chart.appear(1000, 100);
    } // endif

  }



  componentWillUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return (
      <>
        {
          this.props && this.props.language &&
          this.props.language.language_uid ? (
          <div className="bg-[#8DCCCB] shadow-lg p-0">
            <div id={`mapdiv${this.props.language.language_uid}`}></div>
          </div>
          ) : (
            <Navigate to="/cartolang/" push={true} />
          )

        }

      </>
    );

  }
}
export default LanguageMapCard