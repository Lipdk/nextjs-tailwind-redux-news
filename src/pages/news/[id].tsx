import Image from 'next/image'
import { useRouter } from 'next/router'
import { NewsAPIObject } from '../../utils'
import Header from '../../ui/components/Header'
import Nav from '../../ui/components/Nav'
import News from '../../ui/components/NewsItem'
import Link from 'next/link'
import PaginationBottom from '../../ui/components/PaginationBottom'
// const articles: NewsAPIObject[] = fakeNews
import { useAppSelector } from '../../store/hooks'
import { selectArticles } from '../../store/slice/articleSlice'

interface IQueryParam {
  id: string
}

const NewsItem = () => {
  const { articles } = useAppSelector(selectArticles)
  const router = useRouter()
  const { id } = router.query as unknown as IQueryParam

  const item = articles?.find(article => article._id === id)
  const itemIndex = articles?.findIndex(article => article._id === id)
  const leftItem = itemIndex === 0 ? item : articles[itemIndex - 1]
  const rightItem = itemIndex == articles.length - 1 ? item : articles[itemIndex + 1]

  return (
    <div className="flex flex-col">
      <Header />
      <Nav />
      <div className="sm:mx-auto md:w-11/12 sm:w-11/12 mt-32 lg:w-6/12">
        <Link href="/" title="Back to Home">
          <Image src="/back.svg" alt="Logo" width="39" height="32" className="cursor-pointer" />
        </Link>
        {item && (
          <News
            media={item.media}
            title={item.title}
            summary={item.summary}
            author={item.author}
            authorImg={item.authorImg}
            country={item.country}
            _id={item._id}
            published_date={item.published_date}
            expand={true}
          />
        )}
        <PaginationBottom leftItem={leftItem} rightItem={rightItem} />
      </div>
    </div>
  )
}

export default NewsItem
