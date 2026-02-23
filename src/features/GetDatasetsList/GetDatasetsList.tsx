import { memo, type FC } from "react"
import { useGetDatasetsQuery } from "../../api/datasetsApi"
import { Heading } from "../../components/Heading/Heading"
import { List } from "../../components/List/List"
import { Loader } from "../../components/Loader/Loader"
import { HeadingStyle } from "../../types"

export const GetDatasetsList: FC = memo(() => {
  const {data, isLoading, error} = useGetDatasetsQuery(false)

  if (isLoading) {
    return (
      <div className="list-loader">
        <Loader />
      </div>
    );
  }

  if (error) return <Heading tag="h4" text={`Ошибка загрузки`} theme={HeadingStyle.ERROR} />

  return (
    <>
      <List items={data ?? []} listTitle="Спортсмены" />
    </>
  )
})

