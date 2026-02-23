import { Heading } from "../../components/Heading/Heading"
import FileLoader from "../../features/FileLoader/FileLoader"
import { GetDatasetsList } from "../../features/GetDatasetsList/GetDatasetsList"


export const MainPage = () => {

  return (
    <>
      <header>
        <Heading tag={"h2"} text="Личный кабинет" />
      </header>
      <FileLoader />
      <GetDatasetsList />
    </>
  )
}
