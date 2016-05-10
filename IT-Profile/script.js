window.onload = function () {
      var chart = new CanvasJS.Chart("box", {
          title: {
              text: "IT-Profile",
              fontFamily: "Jens",
              fontColor: "Peru",
              fontSize: 28

          },
          animationEnabled: true,
          axisY: {
              tickThickness: 0,
              lineThickness: 0,
              valueFormatString: " ",
              gridThickness: 0
          },
          axisX: {
              tickThickness: 0,
              lineThickness: 0,
              labelFontSize: 18,
              labelFontColor: "Peru"

          },
          data: [
          {
              indexLabelFontSize: 26,
              toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",

              indexLabelPlacement: "inside",
              indexLabelFontColor: "white",
              indexLabelFontWeight: 600,
              indexLabelFontFamily: "Verdana",
              color: "#62C9C3",
              type: "bar",
              dataPoints: [
                  { y: 80, label: "80%", indexLabel: "jQuery " },
                  { y: 65, label: "65%", indexLabel: "PHP " },
                  { y: 70, label: "70%", indexLabel: "C# " },
                  { y: 35, label: "35%", indexLabel: "CSS " },
                  { y: 65, label: "65%", indexLabel: "SQL " },
                  { y: 75, label: "75%", indexLabel: "Javascript " },
                  { y: 35, label: "35%", indexLabel: "HTML " }



              ]
          }
          ]
      });

      chart.render();
  }
