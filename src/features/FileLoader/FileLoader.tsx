import React, { useCallback, useEffect, useRef, useState, type FC } from "react"
import { useUploadDataSetMutation } from "../../api/datasetsApi"
import { RoutePath } from "../../app/providers/router/config/routerConfig"
import { useNavigate } from "react-router-dom"
import { HeadingStyle } from "../../types"
import { Heading } from "../../components/Heading/Heading"
import { Loader } from "../../components/Loader/Loader"
import "./FileLoader.scss"

const FileLoader: FC = () => {
  const [name, setName] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [upload, {data, error, isSuccess, isLoading}] = useUploadDataSetMutation()
  const navigate = useNavigate()

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (isSuccess && data?.id) {
      timer = setTimeout(() => {
        navigate(`${RoutePath.chart}${data.id}`)
      }, 2500)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isSuccess, data?.id, navigate])

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else {
      setDragActive(false)
    }
  },[])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if(e.dataTransfer.files && e.dataTransfer.files.length) {
      setFile(e.dataTransfer.files[0])
    }
  }, [])

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files.length) {
      setFile(e.target.files[0])
    }
  }, [])

  const onSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault()
    if(!file || !name) return

    const formData = new FormData()
    formData.append("file", file)
    formData.append("dataset_name", name)

    try {
      await upload(formData).unwrap()
    } catch (err) {
      console.error("Ошибка загрузки", err)
    }
  }

  const onReset = () => {
    setFile(null)
    setName("")
    setDragActive(false)
  }

  return (
    <div className="form-wrapper">
      <Heading tag={window.innerWidth < 720 ? "h3" : "h2"} text="Добавить спортсмена" theme={HeadingStyle.ACCENT} />

      <form 
        className="form"
        onSubmit={onSubmit}
      >
        <div>
          <label>ФИО спортсмена</label>
          <input
            type="text"
            value={name}
            placeholder="Иванов Иван" 
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div
          className={`drag-n-drop ${dragActive && "drag-active"} ${file && "choised-file"} ${isLoading && "disabled"}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputFileRef.current?.click()}
        >
          <input 
            type="file" 
            ref={inputFileRef} 
            accept=".xlsx, .xls"
            onChange={handleFile}
            className="hidden"
            required
            disabled={isLoading}
          />

          <div>
            {
              file ? (
                <p>Выбран файл: {file.name}</p>
              ) : (
                <p>Перетащите файл или нажмите для выбора</p>
              )
            }
          </div>
        </div>

        <div className="form-controls">
          {isLoading ? <Loader /> : (
            <>
              <button 
                type="submit" 
                className="btn submit-btn"
                disabled={!file || !name}
              >
                Создать
              </button>
              <button type="reset" className="btn reset-btn" onClick={onReset}>
                Очистить форму
              </button>
            </>
          )}
        </div>
        
        {isSuccess && 
          <p className="paragraph-caption success">
            Файл успешно загружен. Сейчас произойдет переход на страницу
          </p>
        }
        {error && <p className="paragraph-caption error">Ошибка при загрузке. Попробуйте снова.</p>}
      </form>
    </div>
  )
}

export default FileLoader
