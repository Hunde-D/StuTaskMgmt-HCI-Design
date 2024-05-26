import { Card, CardBody } from "@material-tailwind/react";
import Chart from "react-apexcharts";

const TaskChart = () => {
  const chartConfig = {
    type: "line",
    height: 150,
    series: [
      {
        name: "Tasks",
        data: [10, 15, 9, 20, 17, 35, 30],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.3,
        },
      },
      title: {
        show: " ",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
        width: 2,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "transparent",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 100,
          },
        },
        categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      },
      yaxis: {
        labels: {
          style: {
            colors: "transparent",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 100,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "transparent",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 10,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <Card className="w-fit">
      <CardBody className=" ">
        <Chart {...chartConfig} className="-ml-4 text-sm font-light" />
      </CardBody>
    </Card>
  );
};

export default TaskChart;
