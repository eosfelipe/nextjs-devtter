import { useState, useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import AppLayout from "components/AppLayout"
import Button from "components/Button"
import useUser from "hooks/useUser"

import { addDevit, uploadImage } from "firebase/client"
import Avatar from "components/Avatar"

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}

const DRAG_IMAGE_STATE = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
}

const ComposeTweet = () => {
  const user = useUser()
  const router = useRouter()
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)

  const [drag, setDrag] = useState(DRAG_IMAGE_STATE.NONE)
  const [task, setTask] = useState(null)
  const [imgURL, setImgURL] = useState(null)

  useEffect(() => {
    if (task) {
      const onProgress = () => {}
      const onError = () => {}
      const onComplete = () => {
        console.log("onComplete")
        task.snapshot.ref.getDownloadURL().then(setImgURL)
      }
      task.on("state_changed", onProgress, onError, onComplete)
    }
  }, [task])

  const handleChange = (e) => {
    const { value } = e.target
    setMessage(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
      img: imgURL,
    })
      .then(() => {
        router.push("/home")
      })
      .catch((err) => {
        console.log(err)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }

  const handleDragEnter = (event) => {
    event.preventDefault()
    setDrag(DRAG_IMAGE_STATE.DRAG_OVER)
  }
  const handleDragLeave = (event) => {
    event.preventDefault()
    setDrag(DRAG_IMAGE_STATE.NONE)
  }
  const handleDragDrop = (event) => {
    event.preventDefault()
    setDrag(DRAG_IMAGE_STATE.NONE)
    const file = event.dataTransfer.files[0]

    const task = uploadImage(file)
    setTask(task)
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <AppLayout>
        <Head>
          <title>Crear un Devit / Devtter</title>
        </Head>
        <section className="form-container">
          <section className="avatar-container">
            {user && <Avatar alt={user.username} src={user.avatar} />}
          </section>
          <form onSubmit={handleSubmit}>
            <textarea
              onChange={handleChange}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDragDrop}
              placeholder="¿Qué esta pasando?"
              value={message}
            ></textarea>
            {imgURL && (
              <section className="remove-img">
                <button onClick={() => setImgURL(null)}>x</button>
                <img src={imgURL} />
              </section>
            )}
            <div>
              <Button disabled={isButtonDisabled}>Devittear</Button>
            </div>
          </form>
        </section>
      </AppLayout>
      <style jsx>{`
        div {
          padding: 15px;
        }
        .avatar-container {
          padding-top: 20px;
          padding-left: 10px;
        }
        button {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 999px;
          border: 0;
          color: #fff;
          font-size: 24px;
          height: 32px;
          position: absolute;
          right: 15px;
          top: 15px;
          width: 32px;
        }
        .form-container {
          align-items: flex-start;
          display: flex;
        }
        .remove-img {
          ´position: relative;
        }
        form {
          padding: 10px;
        }
        img {
          border-radius: 10px;
          height: auto;
          width: 100%;
        }
        textarea {
          border: ${drag === DRAG_IMAGE_STATE.DRAG_OVER
            ? "3px dashed #09f"
            : "3px solid transparent"};
          border-radius: 10px;
          font-size: 21px;
          min-height: 200px;
          padding: 15px;
          outline: none;
          resize: none;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default ComposeTweet
