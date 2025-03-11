interface EachPersonProp {
    src:string
}
export const EachPerson = ({src}:EachPersonProp) => {
  return (
    <>
    <img className="w-5" src={src} alt="each person image" />
    </>
  )
}
