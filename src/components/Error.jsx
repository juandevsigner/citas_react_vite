

const Error = ({children}) => {
  return (
    <div className="text-center mb-5 font-bold uppercase text-red-700">
        <p>{children}</p>
    </div>
  )
}

export default Error