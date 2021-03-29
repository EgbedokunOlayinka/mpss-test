export default function (s) {
  return s.replace(/([a-z])([A-Z])/g, "$1 $2");
}
