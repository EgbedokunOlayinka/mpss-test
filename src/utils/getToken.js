import Cookies from "universal-cookie";

export default function () {
  const cookies = new Cookies();

  const token = cookies.get("mspsUser") || null;

  return token;
}
