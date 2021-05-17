import Devit from "components/Devit"

const DevitPage = (props) => {
  return (
    <>
      <Devit {...props} />
      <style jsx>{``}</style>
    </>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: "71DhlNLKrblqOtmhT8eX" } }],
//     fallback: false,
//   }
// }

// export async function getStaticProps(context) {
//   const { params } = context
//   const { id } = params

//   const apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`)
//   if (apiResponse.ok) {
//     const props = await apiResponse.json()
//     return { props }
//   }
// }

export async function getServerSideProps(context) {
  const { params, res } = context
  const { id } = params

  const apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`)
  if (apiResponse.ok) {
    const props = await apiResponse.json()
    return { props }
  }
  if (res) {
    res.writeHead(301, { Location: "/home" }).end()
  }
}

// DevitPage.getInitialProps = (context) => {
//   const { query, res } = context
//   const { id } = query

//   console.log("getInitialProps")

//   return fetch(`http://localhost:3000/api/devits/${id}`).then((apiResponse) => {
//     if (apiResponse.ok) return apiResponse.json()
//     if (res) {
//       res.writeHead(301, { Location: "/home" }).end()
//     }
//   })
// }

export default DevitPage
