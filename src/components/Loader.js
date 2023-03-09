import { css } from "@emotion/core"
import { ClipLoader } from "react-spinners"

export default function Loader() {
    const [isLoading, setIsLoading] = useState(false)

    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  
`;

  return (
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={isLoading}>
  {isLoading ? (
    <ClipLoader color={"#ffffff"} loading={isLoading} css={override} size={15} />
  ) : (
    "Log in"
  )}
</button>
  )
}
