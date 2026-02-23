import { useMemo, type FC } from "react"
import { useGetDataSetQuery } from "../../api/datasetsApi"
import type { ApexOptions } from "apexcharts"
import Chart from "react-apexcharts";
import { HeadingStyle, type StatsType } from "../../types";
import  { AppLink } from "../../components/AppLink/AppLink";
import { StatsCard } from "../../components/StatsCard/StatsCard";
import { Loader } from "../../components/Loader/Loader";
import { Heading } from "../../components/Heading/Heading";
import { RoutePath } from "../../app/providers/router/config/routerConfig";
import "./ChartBuilder.scss"
import { useDownSampling } from "../../hooks/useDownSampling";

type ChartBuilderProps = {
  id: string
}

const ChartBuilder: FC<ChartBuilderProps> = ({ id }) => {
  const {data, isLoading, isError} = useGetDataSetQuery(id)
  const downSamplingData = useDownSampling(data?.series, 1000)

  const chartOptions: ApexOptions = useMemo(() => ({
    chart: {
      id: `EMG-Chart-${id}`,
      animations: { enabled: true},
      zoom: { enabled: true, type: "x"},
      toolbar: { show: true }
    },
    stroke: { width: [2, 2, 2], curve: "smooth"},
    xaxis: {
      type: "numeric",
      title: { text: "Время (ms)"}
    },
    yaxis: [
      {
        title: { text: "Активность (EMG)" },
      },
      {
        title: { text: "Угол (Angle)" },
        seriesName: "Angle",
        opposite: true
      },
    ],
    tooltip: { x: { show: true } },
    subtitle: {
      text: window.innerWidth < 500 ? data?.name : `Мышечная активность - ${data?.name}`,
      align: "left", 
      margin: 10,   
      offsetX: 15,
      offsetY: 15,  
      floating: false,
      style: {
        fontSize:  "18px",
        color:  "#424242"
      },
    },
    legend: { position: "bottom", horizontalAlign: "center"},
    colors: ["#f34461", "#ff7300", "#8884d8", "#184ddf", "#1ead82"],
  }), [id, data?.name])

  if (isLoading) return <div className="chart-loader"><Loader /></div>
  if (isError) return <div className="chart-loader">
    <Heading tag="h3" text="Ошибка загрузки. Попробуйте снова." theme={HeadingStyle.ERROR} />
  </div>

  return (
    <main>
      <div className="stats-block">
        {data && Object.entries(data?.stats).map(([name, value]) => 
          <StatsCard key={name} statName={name?.toString()} statData={value as number | StatsType} />)
        }
      </div>
      <Chart
        options={chartOptions}
        series={downSamplingData}
        height={window.innerWidth < 600 ? 400 : 500}
      />
      <AppLink to={RoutePath.main}>Назад</AppLink>
    </main>
  )
}

export default ChartBuilder
