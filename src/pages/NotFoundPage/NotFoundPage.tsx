import { useNavigate } from "react-router-dom"
import { memo, useEffect, useState, type FC } from "react"
import { RoutePath } from "../../app/providers/router/config/routerConfig"
import { AppLink } from "../../components/AppLink/AppLink"
import { Heading } from "../../components/Heading/Heading"
import "./NotFoundPage.scss"

export const NotFoundPage: FC = memo(() => {
  const navigate = useNavigate()
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate(RoutePath.main);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <main className="not-found-page">
      <Heading tag={"h2"} text="Такой страницы не существует" />
      <p className="not-found-text">
        Вы будете возвращены на главную страницу через <strong>{seconds}</strong> сек.
      </p>
      <AppLink to={RoutePath.main}>Вернуться на главную</AppLink>
    </main>
  )
})
