import Avatar from "components/Avatar"
import useTimeAgo from "hooks/useTimeAgo"

const Devit = ({ avatar, userName, content, createdAt, id }) => {
  const timeago = useTimeAgo(createdAt)
  return (
    <>
      <article>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> . </span>
            <span>{timeago}</span>
          </header>
          <p>{content}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          border-bottom: 1px solid #eee;
          display: flex;
          padding: 10px 15px;
        }
        div {
          padding-right: 10px;
        }
        p {
          line-height: 1.3125;
          margin: 0;
        }
        span {
          color: #555;
          font-size: 14px;
        }
      `}</style>
    </>
  )
}

export default Devit
